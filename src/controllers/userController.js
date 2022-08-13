let userController = {
    cart: function(req, res){
        res.render("users/shopping-cart");
    },
    login: function(req, res){
        res.render("users/login");
    },
    register: function(req, res){
        res.render("users/register");
    }
}

module.exports = userController;