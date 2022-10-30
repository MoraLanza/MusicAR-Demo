const db = require('../database/models');
const sequelize = db.sequelize;
const Op = db.sequelize.Op;

const Users = db.User;

const userController = {
    userList: async (req, res) => {
        try {
            const users = Users.findAll({
                attributes: [
                    'id', 'name', 'lastName', 'email'
                ]
            });
            return res.json({
                count: users.lenght,
                data: users
            })
        } catch(error) {
            res.send(error)
        }
    },
    userDetail: async (req, res) => {
        try {
            const user = Users.findByPk(req.params.id);
            return res.json({
                
            })
        } catch(error) {
            res.send(error)
        }
    },
}
module.exports = userController;
