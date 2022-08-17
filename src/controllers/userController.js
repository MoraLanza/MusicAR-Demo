const fs = require('fs');
const path = require('path');

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
        const usersClone = getUsers();

        const newUser = {
            id: usersClone[ usersClone.length - 1].id + 1,
            name: req.body.name,
            lastName: req.body.lastName,
            email: req.body.email,
            username: req.body.username,
            password: req.body.password,
            imageUser: 
        }
    }
}

module.exports = userController;