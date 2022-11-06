
const bcryptjs = require('bcryptjs');

const db = require('../database/models');
const sequelize = db.sequelize;


const Users = db.User;
const Citys = db.City;
const Countries = db.Country;
const Categories = db.Category;
const States = db.State;

const { validationResult } = require('express-validator');


let userController = {

    cart: function (req, res) {
        return res.render("users/shopping-cart");
    },
    login: function (req, res) {
        return res.render("users/login");
    },
    profile: async function (req, res) {
        try {
            const userId = req.params.id;
            const user = await Users.findByPk(userId);
            const users = await Users.findAll();
            const countries = await Countries.findAll();
            const states = await States.findAll();
            const citys = await Citys.findAll();
            const categories = await Categories.findAll();

            return res.render("./users/profile", { user, users, countries, states, citys, categories });
        } catch (error) {
            res.send(error)
        }
    },
    loginProcess: async (req, res) => {
        try {

            let userToLogin = await Users.findOne({
                where: {
                    email: req.body.email
                }
            });

            if (userToLogin) {
                let truePassword = bcryptjs.compareSync(req.body.password, userToLogin.password);

                if (truePassword) {
                    delete userToLogin.password;
                    req.session.userLogged = userToLogin;

                    if (req.body.remember_name) {
                        res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 360 })
                    }
                    return res.redirect('/');

                }
                return res.render('users/login', {
                    errors: {
                        email: {
                            msg: 'Email o contraseña invalidos'
                        }
                    }
                })
            }

            return res.render('users/login', {
                errors: {
                    email: {
                        msg: 'Email o contraseña invalidos'
                    }
                }
            })
        } catch (error) {
            res.send(error);
        }
    },

    logout: (req, res) => {
        res.clearCookie('userEmail');
        req.session.destroy();
        return res.redirect('/');
    },

    register: async function (req, res) {
        try {
            const countries = await Countries.findAll();
            const citys = await Citys.findAll();
            const categories = await Categories.findAll();

            return res.render("users/register", { countries, citys, categories });
        }
        catch (error) {
            res.send(error)
        }

    },
    store: async function (req, res) {
        try {
            const resultValidation = validationResult(req);

            if (resultValidation.errors.length > 0) {

                const countries = await Countries.findAll();
                const citys = await Citys.findAll();
                const categories = await Categories.findAll();

                return res.render('users/register', {
                    errors: resultValidation.mapped(),
                    oldData: req.body,
                    countries,
                    citys,
                    categories
                });
            }
            let userInDB = await Users.findOne({
                where: {
                    email: req.body.email
                }
            });

            if (userInDB) {
                return res.render('users/login', {
                    errors: {
                        email: {
                            msg: 'Este email ya está en uso'
                        }
                    },
                    oldData: req.body
                });
            }

            let userToCreate = {
                name: req.body.name,
                lastName: req.body.lastName,
                email: req.body.email,
                password: bcryptjs.hashSync(req.body.password, 10),
                imageUser: req.file ? req.file.filename : null,
                role_id: 2,
                city_id: req.body.city_id,
                category_id: req.body.category_id
            }


            const userCreated = await Users.create(userToCreate);


            return res.redirect('/users/login');

        } catch (error) {

            res.send(error)
        }
    },
    update: async function (req, res) {
        try {
            const resultValidation = validationResult(req);

            if (resultValidation.errors.length > 0) {

                const userId = req.params.id;
                const user = await Users.findByPk(userId);
                const users = await Users.findAll();
                const countries = await Countries.findAll();
                const states = await States.findAll();
                const citys = await Citys.findAll();
                const categories = await Categories.findAll();

                return res.render("./users/profile", {
                    errors: resultValidation.mapped(),
                    oldData: req.body,
                    countries,
                    citys,
                    categories,
                    states,
                    categories,
                    users,
                    user
                });
            }
            const userId = req.params.id;

            const userToUpdate = {
                name: req.body.name,
                lastName: req.body.lastName,
                email: req.body.email,
                imageUser: req.file?.filename,
                category_id: req.body.category_id,
                city_id: req.body.city_id
            }
            await Users.update(userToUpdate, {where: { id: userId}});
            return res.redirect(`/users/profile/${userId}`);

        } catch (error) {
            res.send(error)
        }
    },
    updatePassword: async function (req, res) {
        try {
            const userId = req.params.id;
            let user = await Users.findByPk(userId);
            let actualPassword = bcryptjs.compareSync(req.body.password, user.password); 

            if (actualPassword){
            const passwordToUpdate = {
                password: bcryptjs.hashSync(req.body.newPassword, 10)
            }
            await Users.update(passwordToUpdate, {where: { id: userId}});
            return res.redirect(`/users/profile/${userId}`);
        }
        return res.render(`/users/profile/${userId}`, {
            errors: {
                password: {
                    msg: 'La contraseña actual es invalida.'
                }
            }
        })

        } catch (error) {
            res.send(error)
        }
    }
}

module.exports = userController;
