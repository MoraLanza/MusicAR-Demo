let userController = {
    carrito: function(req, res){
        res.render("carrito");
    },
    contacto: function(req, res){
        res.render("contacto");
    },
    faq: function(req, res){
        res.render("faq");
    },
    login: function(req, res){
        res.render("login");
    },
    registro: function(req, res){
        res.render("registro");
    }
}

module.exports = userController;