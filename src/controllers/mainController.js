const { localsName } = require('ejs');
const db = require('../database/models');
const sequelize = db.sequelize;


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
            const teaters = await Teaters.findAll();
            const citys = await Citys.findAll();
            const tickets = await Tickets.findAll();
            const categories = await Categories.findAll();
            

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
        // try {
        //     let allEvents;
        //     const functions = await Functions.findAll();
        //     const teaters = await Teaters.findAll();
        //     const citys = await Citys.findAll();
        //     const categories = await Categories.findAll();


        //     if (req.session.userLogged) {

        //         allEvents = await Events.findAll({
        //             where: {
        //                 category_id: req.session.userLogged.category_id
        //             }
        //         });

        //     } else {

        //         allEvents = await Events.findByPk(req.params.id,
        //             {
        //                 include: [{ association: 'citys' },
        //                           { association: 'teaters' },
        //                           { association: '' }]
        //             })
        //     };



        //     return res.render('index', { allEvents, functions, teaters, citys, tickets });

        // } catch (error) {
        //     res.send(error)
        // }
    }
}

module.exports = mainController;


