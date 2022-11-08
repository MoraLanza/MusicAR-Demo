const db = require('../../database/models');
const sequelize = db.sequelize;
const Op = db.sequelize.Op;

const Users = db.User;

const apiUserController = {
    usersList: async (req, res) => {
        try {

            const showAllUsers = (users) => {
                let allUsers = [];
                
                for (let i = 0; i < users.length; i++) {
                    const user = users[i];

                    const userDetail = {
                        id: user.id,
                        name: user.name + ' ' + user.lastName,
                        email: user.email,
                        detail: "http://localhost:3000/api/users/" + user.id
                    };
                    allUsers.push(userDetail);
                    
                }
                return allUsers;
            }

            const users = await Users.findAll({
                offset: 10,
                limit: 10
            });

            return res.json({
                count: users.lenght,
                data: showAllUsers(users)
            })
        } catch(error) {
            res.send(error)
        }
    },
    userDetail: async (req, res) => {
        try {
            const user = await Users.findByPk(req.params.id, {
                attributes: {
                    exclude: ['password', 'role_id']
                }
            });
            return res.json({
                id: user.id,
                name: user.name,
                lastName: user.lastName,
                email: user.email,
                image: 'http://localhost:3000/images/users' + user.imageUser,
                city_id: user.city_id,
                category_id: user.category_id
            })
        } catch(error) {
            res.send(error)
        }
    },
}
module.exports = apiUserController;
