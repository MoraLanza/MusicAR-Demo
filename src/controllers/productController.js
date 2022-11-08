const fs = require('fs');
const path = require('path');

const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require('sequelize');



const Events = db.Event;
const Functions = db.Function;
const Tickets = db.Ticket;
const Categories = db.Category;
const Teaters = db.Teater;
const Citys = db.City;
const States = db.State;
const Countries = db.Country;
const Showtypes = db.Showtype;


const { validationResult } = require('express-validator');

let productController = {
    allProducts: async (req, res) => {
        try {
            const events = await Events.findAll();
            const functions = await Functions.findAll();
            const tickets = await Tickets.findAll({
                order: [
                    ['price', 'ASC']
                ]
            });
            const teaters = await Teaters.findAll();
            const categories = await Categories.findAll();
            const citys = await Citys.findAll();
            return res.render('./products/all-products', {events, functions, tickets, teaters, categories, citys})
        } catch (error) {
            res.send(error)
        }
    },
    detail: async (req, res) => {
        try {
            const eventId = req.params.id;
            const event = await Events.findByPk(eventId);

            const teater = await Teaters.findOne({
                where: {
                    id: event.teater_id
                }
            });
            const functions = await Functions.findAll({
                where: {
                    event_id: eventId
                },
                order: [
                    ['date', 'ASC']
                ]
        });
           const tickets = await Tickets.findAll({
            where: {
                event_id: eventId
            },
            order: [
                ['price', 'ASC']
            ]
           });
            console.log(teater)
            return res.render('./products/product-detail', {event, tickets, functions, teater});
        
        } catch (error) {
            res.send(error)
        }
    },
    create: async (req, res) => {
        try {
            const countries = await Countries.findAll();
            const states = await States.findAll();
            const citys = await Citys.findAll();
            const teaters = await Teaters.findAll();
            const showtypes = await Showtypes.findAll();
            const categories = await Categories.findAll();
            

            return res.render('./products/create-event', {countries, states, citys, teaters, showtypes, categories});
        } catch (error){
            res.send(error)
        }
      
    },
    store: async (req, res) => {
       try {  
        const resultValidation = validationResult(req);
        
        if (resultValidation.errors.length > 0) {
            const countries = await Countries.findAll();
            const states = await States.findAll();
            const citys = await Citys.findAll();
            const teaters = await Teaters.findAll();
            const showtypes = await Showtypes.findAll();
            const categories = await Categories.findAll();
            

            return res.render('./products/create-event', {
                errors: resultValidation.mapped(),
                oldData: req.body,
                countries,
                states,
                citys,
                teaters,
                showtypes,
                categories
            });
        }


        let eventInDB = await Events.findOne({
            where:{
                artist: req.body.artist,
                subtitle: req.body.subtitle,
                description: req.body.description
            }
    });

        if (eventInDB) {
            return res.render('./products/create-event', {
                errors: {
                    artist: {
                        msg: 'Este evento ya fue creado.'
                    }
                },
                oldData: req.body
            });
        }


		const newEvent = {             
			showtype_id: req.body.showtype_id,
            artist: req.body.artist,
            subtitle: req.body.subtitle,
			description: req.body.description,
            linkMaps: req.body.linkMaps,
            linkYoutube: req.body.linkYoutube,
			imageEvent:  req.file?.filename, 
		    category_id: req.body.category_id,
            teater_id: req.body.teater_id,
			city_id: req.body.city_id,
            state_id: req.body.state_id,
            country_id: req.body.country_id
           
        };

      const eventCreated =  await  Events.create(newEvent);

      const functions = [];

      req.body.date?.forEach((date, index) => {          
          functions.push({
            date, 
            time: req.body.time[index],
            event_id: eventCreated.id,
            durationTime: req.body.durationTime[index]
        });
      });
      
      const functionsCreated = await Functions.bulkCreate(functions);
      
      const tickets1 = [];

      req.body.ticketType1?.forEach((ticketType1, index) => {          
        tickets1.push({
          type: ticketType1, 
          price: req.body.price1[index],
          lot: req.body.lot1[index],
          event_id: eventCreated.id,
          function_id: functionsCreated[index].id
      });
    });

        await Tickets.bulkCreate(tickets1);



    if (req.body.ticketType2 != '') {

        const tickets2 = [];

        req.body.ticketType2?.forEach((ticketType2, index) => {          
        tickets2.push({
            type: ticketType2, 
            price: req.body.price2[index],
            lot: req.body.lot2[index],
            event_id: eventCreated.id,
            function_id: functionsCreated[index].id
        });
    });

        await Tickets.bulkCreate(tickets2);
    }
      
        
        if (req.body.ticketType3 != '') {

             const tickets3 = [];

        req.body.ticketType3?.forEach((ticketType3, index) => {          
            tickets3.push({
            type: ticketType3, 
            price: req.body.price3[index],
            lot: req.body.lot3[index],
            event_id: eventCreated.id,
            function_id: functionsCreated[index].id
        });
        });
                    await Tickets.bulkCreate(tickets3);
                }
       
          return res.redirect('/products/all');  
    } 
    catch (error) {
        res.send(error);
    }
    },
    edit: async (req, res) => {
        try {
            const eventId = req.params.id;
            const event = await Events.findByPk(eventId);
            const countries = await Countries.findAll();
            const states = await States.findAll();
            const citys = await Citys.findAll();
            const teaters = await Teaters.findAll();
            const showtypes = await Showtypes.findAll();
            const categories = await Categories.findAll();
            const functions = await Functions.findAll({
                where: {
                    event_id: eventId
                }}
            );
           
            const tickets = await Tickets.findAll({
                where: {
                    event_id: eventId
                }
            })
           
                return res.render('./products/edit-event', { event, functions, tickets, countries, states, citys, teaters, showtypes, categories} );

            
        } catch (error) {
            res.send(error)
        }
    },
    update: async (req, res) => {
        try{
            const resultValidation = validationResult(req);
        
            if (resultValidation.errors.length > 0) {
    
                const eventId = req.params.id;
                const event = await Events.findByPk(eventId);
                const countries = await Countries.findAll();
                const states = await States.findAll();
                const citys = await Citys.findAll();
                const teaters = await Teaters.findAll();
                const showtypes = await Showtypes.findAll();
                const categories = await Categories.findAll();
                const functions = await Functions.findAll({
                    where: {
                        event_id: eventId
                    }}
                );
               
                const tickets = await Tickets.findAll({
                    where: {
                        event_id: eventId
                    }
                })
                
    
                return res.render('./products/edit-event', {
                    errors: resultValidation.mapped(),
                    oldData: req.body,
                    event,
                    functions,
                    tickets,
                    countries,
                    states,
                    citys,
                    teaters,
                    showtypes, 
                    categories
                });
            }

            const eventId = req.params.id;
            
            const eventToUpdate = {
                showtype: req.body.showType,
                artist: req.body.artist,
                subtitle: req.body.subtitle,
                description: req.body.description,
                linkYoutube: req.body.linkYT,
                imageEvent:  req.file?.filename, 
                showtype_id: req.body.showtype_id,
                category_id: req.body.category_id,
                teater_id: req.body.teater_id,
                country_id: req.body.country_id,
                state_id: req.body.state_id,
                city_id: req.body.city_id
            };
            const functionsToUpdate = [];

            req.body.date?.forEach((date, index) => {          
                functionsToUpdate.push({
                    date, 
                    time: req.body.time[index],
                    durationTime: req.body.durationTime[index],
                    event_id: eventId,
                    id: req.body.functionId[index]
                });
            });


            const ticketsToUpdate = [];

            req.body.ticketType?.forEach((ticketType, index) => {          
                ticketsToUpdate.push({
                type: ticketType, 
                price: req.body.price[index],
                lot: req.body.lot[index],
                event_id: eventId,
                
                id: req.body.ticketId[index]
            });
            });
            
        for (const functionUpdate of functionsToUpdate){
            await Functions.update(functionUpdate, {where: {id: functionUpdate.id}})
        };
            
        for (const ticketUpdate of ticketsToUpdate){
            await Tickets.update(ticketUpdate, {where: {id: ticketUpdate.id}})
        };
        
       await Events.update(eventToUpdate, {where: { id: eventId}});
    
        return res.redirect('/products/all');

        } catch (error){
            res.send(error)
        }
    
    },
    delete: async (req, res) => {
		try {
            
            const eventId = req.params.id;

            await Tickets.destroy({where: {event_id: eventId}});
            await Functions.destroy({where: {event_id: eventId}});
            await Events.destroy({where: {id: eventId}});

            return res.redirect('/products/all');

        } catch (error) {
            res.send(error)
        }
       
	}


};

module.exports = productController;