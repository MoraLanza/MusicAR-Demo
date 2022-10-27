const db = require('../database/models');
const sequelize = db.sequelize;
const Op = db.sequelize.Op;


const Events = db.Event;



const searchController = {
   
    searchBar: async function (req, res) {
        try {
          
            const events = await Events.findAll();
            return res.json({
                total: events.length,
                data: events
            });
        } catch (error) {
            res.send(error)
        }
    }
}

module.exports = searchController;

