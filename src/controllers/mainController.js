
const db = require('../database/models');
const sequelize = db.sequelize;
const Op = db.sequelize.Op;


const Users = db.User;
const Categories = db.Category;
const Events = db.Event;
const Citys = db.City;
const Teaters = db.Teater;
const Functions = db.Function;
const Tickets = db.Ticket;


let mainController = {
    index: async function (req, res) {
        try {
            let allEvents;
            const functions = await Functions.findAll();
            const tickets = await Tickets.findAll({
                order: [
                    ['price', 'ASC']
                ]
            });
            const teaters = await Teaters.findAll();
            const categories = await Categories.findAll();
            const citys = await Citys.findAll();
            

            if (req.session.userLogged) {

                const user = await Users.findByPk(req.session.userLogged.id);

                allEvents = await Events.findAll({
                    where: {
                        category_id: req.session.userLogged.category_id
                    }
                });

                cityEvents = await Events.findAll({
                    where: {
                        city_id: req.session.userLogged.city_id
                    }
                })

                return res.render('index', { allEvents, functions, teaters, citys, tickets, user, categories, cityEvents });
            } else {

                allEvents = await Events.findAll();

                return res.render('index', { allEvents, functions, teaters, citys, tickets, categories });
            }
            

        } catch (error) {
            res.send(error)
        }

    },
    contact: function (req, res) {
        res.render('contact');
    },
    faq: function (req, res) {
        res.render("faq");
    },
    searchBar: async function (req, res) {
        try {
            const eventsArtist = await Events.findAll({ 
                where: {
                    artist: {[Op.like]: `%${req.body.key-word}%`}

                }
            });

            const eventsCategories = await Events.findAll({
                where:{
                    category_id: req.body.category_id
                }
            });

            const eventsDate =await Events.findAll({
                where:{
                    date: req.body.event-date
                }
            });
            
            

           

        } catch (error) {
            res.send(error)
        }
    }
}

module.exports = mainController;


