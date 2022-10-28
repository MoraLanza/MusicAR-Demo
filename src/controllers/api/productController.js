const db = require('../database/models');
const sequelize = db.sequelize;
const Op = db.sequelize.Op;

const Events = db.Event;
const Categories = db.Category;

const eventsController = {
    eventsList: async (req, res) => {
        try {
            const events = Events.findAll({
                attributes: [
                    'id', 'artist', 'description' 
                ]
            });
            const categories = Events.findAll({
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
                product: events
            })
            
        } catch (error) {
            res.send(error)
        }
    },
    // eventDetail: async (req, res) => {
    //     try {
    //         const user = Users.findByPk(req.params.id);


    //         return res.json({
    //             id: user.id,
    //             name: user.name,
    //             lastName: user.lastName,
    //             email: user.email
    //         })
    //     } catch (error) {
    //         res.send(error)
    //     }
    // },
}
module.exports = eventsController;
