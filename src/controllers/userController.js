const fs = require('fs');
const path = require('path');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');

const usersFilePath = path.join(__dirname, '../data/usersDataBase.json');
const getUsers = () => {
    const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
    return users;
};


let userController = {
    cart: function(req, res){
        res.render("users/shopping-cart");
    },
    login: function(req, res){
        res.render("users/login");
    },
    register: function(req, res){
        res.render("users/register");
    },
    store: function(req, res){
        const resultValidation =validationResult(req);

        if (resultValidation.errors.length > 0) {
            return res.render('users/register', {
                errors: resultValidation.mapped()
            });
        }

        const usersClone = getUsers();

        const newUser = {
            id: usersClone[ usersClone.length - 1].id + 1,
            name: req.body.name,
            lastName: req.body.lastName,
            email: req.body.email,
            username: req.body.username,
            password: bcryptjs.hashSync(req.body.password,10),
            imageUser: req.file? req.file.filename: null 
        }
        usersClone.push(newUser);
		fs.writeFileSync(usersFilePath, JSON.stringify(usersClone, null, ' '));
		res.redirect('/');
    }
}

module.exports = userController;