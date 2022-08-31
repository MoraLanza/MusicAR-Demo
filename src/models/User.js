const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, '../data/usersDataBase.json')
 const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const User = {

    generateId: () => {
        let allUsers = User.findAll();
       let lastUser = allUsers[allUsers.length - 1];
       if (lastUser){
        return lastUser.id + 1;
       }
       return 1;
    },

     findAll: () => {
        return users;
    },

    findByPk: (id) => {
        let allUsers = User.findAll();
        let userFound = allUsers.find(oneUser => oneUser.id === id);
        return userFound;
    },

    findFirstByField: (field, text) => {
        let allUsers = User.findAll();
        let userFound = allUsers.find(oneUser => oneUser[field] === text);
        return userFound;
    },

    create: (userData) => {
        let allUsers = User.findAll();
        let newUser = {
            id: User.generateId(),
            ...userData
        }
        allUsers.push(newUser);
        fs.writeFileSync(usersFilePath, JSON.stringify(allUsers, null, '  '));
        return newUser;
    },

    delete: (id) =>{
        let allUsers = User.findAll();
        let finalUsers = allUsers.filter(oneUser => oneUser.id !== id);
        fs.writeFileSync(usersFilePath, JSON.stringify(finalUsers, null, '  '));
    }
}

module.exports = User;