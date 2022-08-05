const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

let productController = {
    index: (req, res) => {
        res.render('index', {products})
    },
    detail: (req, res) => {
         res.render('./products/product-detail');
    },
    create: (req, res) => {
        res.render('./products/crear-evento');
    },
    store: (req, res) => {
        const productsClone = products;
		const newProduct = {
			id: req.body.name,
			tipoDeShow: req.body.tipoDeShow,
			clase: req.body.clase,
            artista: req.body.artista,
			descripcion: req.body.descripcion,
			pais: req.body.pais,
            provincia: req.body.provincia,
			ciudad: req.body.ciudad,
			escenario: req.body.escenario,
            direccion: req.body.direccion,
			fechaFuncion1: req.body.fechaFuncion1,
			horario1: req.body.horario1,
            precio1: req.body.precio1,
			price: req.body.price,
			description: req.body.description,
			image: req.file ? req.file.filename : null
		}

		productsClone.push(newProduct);
		fs.writeFileSync(productsFilePath, JSON.stringify(productsClone, null, ' '));
		res.redirect('/products');
    },
    edit: (req, res) => {
        const product = products.find(element => element.id == req.params.id); 
        res.render('/products/editar-evento', {product});
    },
    update: (req, res) => {

    },
    delete: (req, res) => {

    }

};

module.exports = productController;