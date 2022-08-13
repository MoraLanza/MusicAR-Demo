const path = require('path');
const fs = require('fs');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

let mainController = {
    index: function (req, res) {
        const featured = products.filter(product => product.class === 'destacados');
		const searched = products.filter(product => product.class === 'buscados');
        const selected = products.filter(product => product.class === 'seleccionados');
        res.render('index',{selected, featured, searched} );
    },
    contact: function(req, res){
        res.render("contact");
    },
    faq: function(req, res){
        res.render("faq");
    }
}

module.exports = mainController;
