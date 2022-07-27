const path = require('path');

let mainController = {
    index: function (req, res) {
        res.render('index');
    },
    contacto: function(req, res){
        res.render("contacto");
    },
    faq: function(req, res){
        res.render("faq");
    }
}

module.exports = mainController;
