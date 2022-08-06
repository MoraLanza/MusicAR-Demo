const path = require('path');
const fs = require('fs');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

let mainController = {
    index: function (req, res) {
        const destacados = products.filter(product => product.clase === 'destacados');
		const buscados = products.filter(product => product.clase === 'buscados');
        const seleccionados = products.filter(product => product.clase === 'seleccionados');
        res.render('index',{seleccionados, destacados, buscados} );
    },
    contacto: function(req, res){
        res.render("contacto");
    },
    faq: function(req, res){
        res.render("faq");
    }
}

module.exports = mainController;
