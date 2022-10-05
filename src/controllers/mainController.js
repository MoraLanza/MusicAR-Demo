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
                  if(req.session.loggedIn){
                    // console.log(req.cookies.userEmail)
                // const userCategory = await Users.findOne({
                //     where: {
                //         category_id: locals.userLogged.category_id
                //     }
                // });
               
                //  const eventsUserCategory =  await Events.findAll({
                //         where: {
                //             category_id: userCategory.category_id
                //         }
                //     });
                
                //     return res.render('index', { eventsUserCategory });
                const allEvents = await Events.findAll();
                const functions = await Functions.findAll();
                const teaters = await Teaters.findAll();
                const citys = await Citys.findAll();
                const tickets = await Tickets.findAll();
                
                return res.render('index', { allEvents, functions, teaters, citys, tickets});
                  } else {

                 const allEvents = await Events.findAll();
                const functions = await Functions.findAll();
                const teaters = await Teaters.findAll();
                const citys = await Citys.findAll();
                const tickets = await Tickets.findAll();
                
                return res.render('index', { allEvents, functions, teaters, citys, tickets});
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
    searchBar: function (req, res) {
        
    }
}

module.exports = mainController;

// const path = require('path');
// const fs = require('fs');
// const { localsName } = require('ejs');

// const getProducts = () => {
//     const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
//     const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
//     return products;
// };

// let mainController = {
//     index: function (req, res) {
//         const featured = getProducts().filter(product => product.class === 'destacados');
// 		const searched = getProducts().filter(product => product.class === 'buscados');
//         const selected = getProducts().filter(product => product.class === 'seleccionados');
//         res.render('index',{selected, featured, searched} );
//     },
//     contact: function(req, res){
//         res.render('contact');
//     },
//     faq: function(req, res){
//         res.render("faq");
//     }
// }

// module.exports = mainController;
