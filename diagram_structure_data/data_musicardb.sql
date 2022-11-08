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


INSERT INTO teaters (id, name, direction, city_id, linkMaps, teaterImage)
VALUES (DEFAULT, 'El Quetzal', 'Guatemala 4516', 1,
 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.6499940530002!2d-58.425120548720564!3d-34.58772178036765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb580cc237e09%3A0x2f45acce53ce12c0!2sEl%20Quetzal%20Cooperativa%20de%20trabajo!5e0!3m2!1ses!2sar!4v1665758214972!5m2!1ses!2sar',
 'quetzal.jpg');

INSERT INTO teaters (id, name, direction, city_id, linkMaps, teaterImage)
VALUES (DEFAULT, 'The Roxy Live', 'Av. Cnel. Niceto Vega 5542' , 1, 
'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52554.777920761175!2d-58.50902044179687!3d-34.5871241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb58cdcc077b1%3A0xb5a463b188113e8d!2sThe%20Roxy%20Live!5e0!3m2!1ses!2sar!4v1665841956264!5m2!1ses!2sar',
'teatro-mapa2.png');

INSERT INTO teaters (id, name, direction, city_id, linkMaps, teaterImage)
VALUES (DEFAULT, 'Vorterix', 'Av. Federico Lacroze 3455' , 1, 
'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.9520435040517!2d-58.453234984770994!3d-34.58007998046572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5e77287c945%3A0xbaff5332b9e61c29!2sVorterix!5e0!3m2!1ses-419!2sar!4v1667857691152!5m2!1ses-419!2sar',
'teatro-mapa3.png');

INSERT INTO teaters (id, name, direction, city_id, linkMaps, teaterImage)
VALUES (DEFAULT, 'Teatro Flores', 'Rivadavia 7806' , 1, 
'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.881605851431!2d-58.4768237847697!3d-34.63243208045199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc990290a5895%3A0x3bce05eaa2070c9d!2sEl%20Teatro%20Flores!5e0!3m2!1ses-419!2sar!4v1667857798056!5m2!1ses-419!2sar',
'teatro-mapa4.png');

INSERT INTO teaters (id, name, direction, city_id, linkMaps, teaterImage)
VALUES (DEFAULT, 'Virasoro Bar', 'Guatemala 4328' , 1, 
'www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.602597124116!2d-58.42294828477074!3d-34.58892078046331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca7f7db703af%3A0x1988f7ad294cf82e!2sVirasoro%20Bar!5e0!3m2!1ses-419!2sar!4v1667857957276!5m2!1ses-419!2sar',
'teatro-mapa3.png');

INSERT INTO teaters (id, name, direction, city_id, linkMaps, teaterImage)
VALUES (DEFAULT, 'El Teatrito', 'Sarmiento 1752' , 1, 
'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.935634366505!2d-58.393679584770254!3d-34.60578908045893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccbaac97d700b%3A0x7caa8e3c0fc232c2!2sEL%20TEATRITO!5e0!3m2!1ses-419!2sar!4v1667858289071!5m2!1ses-419!2sar',
'teatro-mapa5.png');

INSERT INTO showtypes (id, type)
VALUES (DEFAULT, 'Presencial');
INSERT INTO showtypes (id, type)
VALUES (DEFAULT, 'Virtual');

update teaters
set teaterImage = 'vorterix.jpg'
where id=3;

select * from users;





