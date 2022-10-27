const db = require('../database/models');
const sequelize = db.sequelize;
const Op = db.sequelize.Op;

const Users = db.Users;

const userController = {
    userList: async (req, res) => {
        try {
            const users = Users.findAll();
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
            const users = Users.findByPk(req.params.id);
            return res.json({
                count: users.lenght,
                data: users
            })
        } catch(error) {
            res.send(error)
        }
    },
}
module.exports = userController;
