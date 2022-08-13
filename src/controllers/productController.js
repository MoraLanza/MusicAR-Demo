const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

let productController = {
    detail: (req, res) => {
        res.render('./products/product-detail');
    },
    create: (req, res) => {
        res.render('./products/crear-evento');
    },
    store: (req, res) => {
        const productsClone = products;
        const newTicket = {
            price: req.body.price,
            ticketType: req.body.ticketType,
            lot: req.body.lot
        }
        const newFunctions = {
            date: req.body.date,
            hours: req.body.hours,
        }
        const newProduct = {
            id: products[products.length - 1].id + 1,
            showType: req.body.showType,
            class: req.body.class,
            artist: req.body.artist,
            subtitle: req.body.subtitle,
            description: req.body.description,
            country: req.body.country,
            state: req.body.state,
            city: req.body.city,
            stage: req.body.stage,
            direction: req.body.direction,
            date1: req.body.date1,
            hour1: req.body.hour1,
            ticketType1: req.body.ticketType1,
            price1: req.body.price1,
            lot1: req.body.lot1,
            // ticket : [ 
            //     ...newTicket
            // ],
            // functions: [
            //    ...newFunction
            // ],
            image: req.file ? req.file.filename : null
        }

        productsClone.push(newProduct);
        fs.writeFileSync(productsFilePath, JSON.stringify(productsClone, null, ' '));
        res.redirect('/products');
    },
    edit: (req, res) => {
        const product = products.find(element => element.id == req.params.id);
        res.render('/products/editar-evento', { product });
    },
    update: (req, res) => {
        const indexProducto = products.findIndex(element => element.id == req.params.id);
        products[indexProducto] = {
            showType: req.body.showType,
            class: req.body.class,
            artist: req.body.artist,
            subtitle: req.body.subtitle,
            description: req.body.description,
            country: req.body.country,
            state: req.body.state,
            city: req.body.city,
            stage: req.body.stage,
            direction: req.body.direction,
            date1: req.body.date1,
            hour1: req.body.hour1,
            ticketType1: req.body.ticketType1,
            price1: req.body.price1,
            lot1: req.body.lot1,
        }

        let productModificarJson = JSON.stringify(products, null, ' ');
        fs.writeFileSync(productsFilePath, productModificarJson);
    },
    delete: (req, res) => {
        const deletedProduct = products.find((prod) => {
            return prod.id == req.params.id;
        });

        const prodIndex = products.findIndex((p) => p.id == deletedProduct.id);

        products.splice(prodIndex, 1);

        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));

        res.redirect('/index');
    }


};

module.exports = productController;