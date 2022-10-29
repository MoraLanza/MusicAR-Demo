const db = require('../database/models');
const sequelize = db.sequelize;
const Op = db.sequelize.Op;

const Events = db.Event;
const Categories = db.Category;

const eventsController = {
    eventsList: async (req, res) => {
        try {

            const allEvents = (events) => {
                let events = [];
                for (let i = 0; i < events.length; i++) {
                    const event = events[i];

                    let eventsDetail = {
                        id: event.id,
                        artist: event.artist,
                        subtitle: event.subtitle,
                        description: event.description,
                        category: event.categories.name,
                        linkYoutube: event.linkYoutube,
                        detail: "http://localhost:3000/api/products/" + event.id
                    };
                    events.push(eventsDetail);
                }
                return events;
            }

            const events = await Events.findAll({
                include: [
                    'categories'
                ],
                attributes: [
                    'id',
                    'artist',
                    'subtitle',
                    'description',
                    'linkYoutube'
                ]
            });

            const categories = await Events.findAll({
                attributes: {
                    include: [
                        [sequelize.fn('COUNT', sequelize.col('category_id'), 'eventCount')]
                    ]
                },
                include: [
                    {
                        model: Categories,
                        attributes: ['name']
                    }
                ],
                group: ['categories.id']
            });



            return res.json({
                count: events.lenght,
                countByCategory: categories,
                product: allEvents(events)
            });

        } catch (error) {
            res.send(error)
        }
    },
    eventDetail: async (req, res) => {
        try {
            const user = Users.findByPk(req.params.id);


            return res.json({
                id: user.id,
                name: user.name,
                lastName: user.lastName,
                email: user.email
            })
        } catch (error) {
            res.send(error)
        }
    },
}
module.exports = eventsController;
