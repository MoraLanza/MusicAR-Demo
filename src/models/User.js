const fs = require('fs');
const path = require('path');



const User = {
     usersFilePath: path.join(__dirname, '../data/usersDataBase.json'),

    getData: () => { 
         return JSON.parse(fs.readFileSync(User.usersFilePath, 'utf-8'));
    },

    generateId: () => {
        let allUsers = User.findAll();
       let lastUser = allUsers[allUsers.length - 1];
       if (lastUser){
        return lastUser.id + 1;
       }
       return 1;
    },

     findAll: () => {
        return User.getData();
    },

    findByPk: (id) => {
        let allUsers = this.findAll();
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
        fs.writeFileSync(User.usersFilePath, JSON.stringify(allUsers, null, '  '));
        return newUser;
    },

    delete: (id) => {
        let allUsers = this.findAll();
        let finalUsers = allUsers.filter(oneUser => oneUser.id !== id);
        fs.writeFileSync(usersFilePath, JSON.stringify(finalUsers, null, '  '));
    }
}

module.exports = User;