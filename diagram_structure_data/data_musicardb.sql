

INSERT INTO categories (id, name)
VALUES (DEFAULT, 'Rock');

INSERT INTO categories (id, name)
VALUES (DEFAULT, 'Cantautor');

INSERT INTO categories (id, name)
VALUES (DEFAULT, 'Jazz');

INSERT INTO categories (id, name)
VALUES (DEFAULT, 'Tango');

INSERT INTO categories (id, name)
VALUES (DEFAULT, 'Techno');

INSERT INTO categories (id, name)
VALUES (DEFAULT, 'Pop');

INSERT INTO categories (id, name)
VALUES (DEFAULT, 'Ska');

INSERT INTO categories (id, name)
VALUES (DEFAULT, 'Reggae');

INSERT INTO categories (id, name)
VALUES (DEFAULT, 'Trap');

INSERT INTO categories (id, name)
VALUES (DEFAULT, 'Hip Hop');

INSERT INTO categories (id, name)
VALUES (DEFAULT, 'Soul');

INSERT INTO categories (id, name)
VALUES (DEFAULT, 'Country');

INSERT INTO categories (id, name)
VALUES (DEFAULT, 'Blues');

INSERT INTO categories (id, name)
VALUES (DEFAULT, 'Indie rock');

INSERT INTO categories (id, name)
VALUES (DEFAULT, 'Punk rock');

INSERT INTO categories (id, name)
VALUES (DEFAULT, 'R&B');

INSERT INTO categories (id, name)
VALUES (DEFAULT, 'Metal');

INSERT INTO categories (id, name)
VALUES (DEFAULT, 'Folclore');

INSERT INTO categories (id, name)
VALUES (DEFAULT, 'Funk');

INSERT INTO categories (id, name)
VALUES (DEFAULT, 'Salsa');

INSERT INTO categories (id, name)
VALUES (DEFAULT, 'Neo Soul');

INSERT INTO categories (id, name)
VALUES (DEFAULT, 'Punk pop');



INSERT INTO countrys (id, countryName)
VALUES (DEFAULT, 'Argentina');

INSERT INTO countrys (id, countryName)
VALUES (DEFAULT, 'Colombia');

INSERT INTO countrys (id, countryName)
VALUES (DEFAULT, 'Mexico');

INSERT INTO countrys (id, countryName)
VALUES (DEFAULT, 'Paraguay');

INSERT INTO countrys (id, countryName)
VALUES (DEFAULT, 'Uruguay');


INSERT INTO states (id, stateName, country_id)
VALUES (DEFAULT, 'Buenos Aires', 1);

INSERT INTO states (id, stateName, country_id)
VALUES (DEFAULT, 'Cundinamarca', 2);

INSERT INTO states (id, stateName, country_id)
VALUES (DEFAULT, 'Estado de México', 3);

INSERT INTO states (id, stateName, country_id)
VALUES (DEFAULT, 'Distrito Capital', 4);

INSERT INTO states (id, stateName, country_id)
VALUES (DEFAULT, 'Montevideo', 5);


INSERT INTO citys (id, cityName, state_id)
VALUES (DEFAULT, 'CABA', 1);

INSERT INTO citys (id, cityName, state_id)
VALUES (DEFAULT, 'Bogotá', 2);

INSERT INTO citys (id, cityName, state_id)
VALUES (DEFAULT, 'Montevideo', 3);

INSERT INTO citys (id, cityName, state_id)
VALUES (DEFAULT, 'Ciudad de México', 4);

INSERT INTO citys (id, cityName, state_id)
VALUES (DEFAULT, 'Asunción', 5);



INSERT INTO roles (id, typeRole)
VALUES (DEFAULT, 'admin');

INSERT INTO roles (id, typeRole)
VALUES (DEFAULT, 'usuario');



INSERT INTO teaters (id, name, direction, city_id, linkMaps)
VALUES (DEFAULT, 'El Quetzal', 'Guatemala 4516', 1, 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.6499940530002!2d-58.425120548720564!3d-34.58772178036765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb580cc237e09%3A0x2f45acce53ce12c0!2sEl%20Quetzal%20Cooperativa%20de%20trabajo!5e0!3m2!1ses!2sar!4v1665758214972!5m2!1ses!2sar');

INSERT INTO teaters (id, name, direction, city_id, linkMaps)
VALUES (DEFAULT, 'Vuela el Pez', 'Av. Cordoba 4379' , 1, 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.3405045134714!2d-58.429886948720444!3d-34.59555028036576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca79f69efb41%3A0xf3b054abd97bbe68!2sVuela%20El%20Pez!5e0!3m2!1ses!2sar!4v1665758279800!5m2!1ses!2sar');

INSERT INTO teaters (id, name, direction, city_id, linkMaps)
VALUES (DEFAULT, 'Virasoro Bar', 'Guatemala 4328' , 1, 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6568.827551171035!2d-58.428002943362515!3d-34.59369703769571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca7f7db703af%3A0x1988f7ad294cf82e!2sVirasoro%20Bar!5e0!3m2!1ses!2sar!4v1665840468450!5m2!1ses!2sar');

INSERT INTO teaters (id, name, direction, city_id, linkMaps)
VALUES (DEFAULT, 'The Roxy Live', 'Av. Cnel. Niceto Vega 5542' , 1, 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52554.777920761175!2d-58.50902044179687!3d-34.5871241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb58cdcc077b1%3A0xb5a463b188113e8d!2sThe%20Roxy%20Live!5e0!3m2!1ses!2sar!4v1665841956264!5m2!1ses!2sar');


INSERT INTO showtypes (id, type)
VALUES (DEFAULT, 'Presencial');

INSERT INTO showtypes (id, type)
VALUES (DEFAULT, 'Virtual');


select * from tickets;