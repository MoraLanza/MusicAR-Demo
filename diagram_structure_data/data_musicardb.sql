

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



INSERT INTO teaters (id, name, direction, city_id)
VALUES (DEFAULT, 'El Quetzal', 'Guatemala 4516', 1);


INSERT INTO showtypes (id, type)
VALUES (DEFAULT, 'Presencial');

INSERT INTO showtypes (id, type)
VALUES (DEFAULT, 'Virtual');
