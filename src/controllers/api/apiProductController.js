const db = require('../../database/models');
const sequelize = db.sequelize;
const Op = db.sequelize.Op;

const Events = db.Event;
const Categories = db.Category;
const Tickets = db.Ticket;
const Function = db.Function;


const apiProductController = {
    eventsList: async (req, res) => {
        try {
            const events = await Events.findAll({
                include: [
                    'categories'
                ],
                attributes: [
                    'id',
                    'artist',
                    'subtitle',
                    'description',
                    'linkYoutube',
                    'imageEvent',
                ]
            });


            const categories = await Categories.findAll({
                attributes: {
                    include: [[sequelize.fn("COUNT", sequelize.col("events.id")), 'eventCount']] 
                },
                include:['events'],
                group: ['id']
            })

            console.log("respuesta del get event", events)
           
           
            return res.json({
                count: events.length,
                countByCategory: categories,
                products: events.map((event) => ({
                    id: event.id,
                    artist: event.artist,
                    subtitle: event.subtitle,
                    description: event.description,
                    category: event.categories.name,
                    linkYoutube: event.linkYoutube,
                    imageEvent: 'http://localhost:3000/image/products/' + event.imageEvent,
                    detail: "http://localhost:3000/api/products/" + event.id
                }))
            });

        } catch (error) {
            res.send(error)
        }
    },
    eventDetail: async (req, res) => {
        try {
            console.log("buscando detalle producto", req.params.id, Events, Tickets)
            const event = await Events.findByPk(req.params.id,{
                include: [
                    'categories', 
                    'showtypes', 
                    'teaters',
                    'citys',
                    'states',
                    'countrys' 
                ]
            });

            const tickets = await Tickets.findAll({
                where: {
                    event_id: req.params.id
                }
            })

            const functions = await Function.findAll({
                where: {
                    event_id: req.params.id
                }
            })

            const response = {
                id: event.id,
                artist: event.artist,
                subtitle: event.subtitle,
                description: event.description,
                linkYoutube: event.linkYoutube,
                image: 'http://localhost:3000/image/products/' + event.imageEvent,
                category: event.categories,
                teater: event.teaters,
                citys: event.citys,
                states: event.states,
                countries: event.countrys,
                showtypes: event.showtypes,
                tickets,
                functions
            }

            console.log("respondio buscando detalle producto", req.params.id, JSON.stringify(response, null, 2))

            return res.json(response)
        } catch (error) {
            console.log("hubo un error buscando detalle producto", req.params.id,JSON.stringify(error, null, 2) )
            res.send(error)
        }
    },
}
module.exports = apiProductController;
