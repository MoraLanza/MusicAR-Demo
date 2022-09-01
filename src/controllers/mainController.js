const path = require('path');
const fs = require('fs');

const getProducts = () => {
    const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
    const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
    return products;
};

let mainController = {
    index: function (req, res) {
        const featured = getProducts().filter(product => product.class === 'destacados');
		const searched = getProducts().filter(product => product.class === 'buscados');
        const selected = getProducts().filter(product => product.class === 'seleccionados');
        res.render('index',{selected, featured, searched} );
    },
    contact: function(req, res){
        res.render('contact');
    },
    faq: function(req, res){
        res.render("faq");
    }
}

module.exports = mainController;
