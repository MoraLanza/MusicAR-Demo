const db = require('../database/models');
const sequelize = db.sequelize;
const Op = db.sequelize.Op;


const Events = db.Event;



let searchController = {
   
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

module.exports = searchController;

