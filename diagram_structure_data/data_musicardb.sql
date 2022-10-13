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


select *
from states;

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



INSERT INTO events (id, artist, subtitle, showtype, description, linkMaps, linkYoutube, imageEvent, category_id, teater_id, city_id)
VALUES (DEFAULT,
 'Travis Bird',
 'Lorem ipsum dolor sit amet',
 'presencial',
 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque massa placerat duis ultricies lacus sed. Maecenas sed enim ut sem viverra aliquet eget sit. Dui id ornare arcu odio ut sem. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Aliquet nec ullamcorper sit amet risus nullam. Bibendum neque egestas congue quisque egestas diam in arcu. Posuere lorem ipsum dolor sit amet consectetur adipiscing. Donec ac odio tempor orci dapibus ultrices in iaculis. Bibendum neque egestas congue quisque egestas diam in arcu. Urna nec tincidunt praesent semper feugiat. Ultrices sagittis orci a scelerisque purus semper eget duis at. Pharetra convallis posuere morbi leo urna. Faucibus pulvinar elementum integer enim neque. Lacus laoreet non curabitur gravida arcu ac tortor. Elementum curabitur vitae nunc sed velit dignissim sodales. Ac tincidunt vitae semper quis lectus nulla at.',
 '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.6499940530002!2d-58.425120548720564!3d-34.58772178036765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb580cc237e09%3A0x2f45acce53ce12c0!2sEl%20Quetzal%20Cooperativa%20de%20trabajo!5e0!3m2!1ses!2sar!4v1664673518296!5m2!1ses!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
 'https://www.youtube.com/embed/Y6h3CNrL-8I',
 load_file('C:\Users\moru uwu\Documents\GitHub\Grupo_4_Musicar\public\image\products\travis-birds.jpg'),
 22,
 1,
 1);
 
INSERT INTO functions (id, date, durationTime, event_id, time)
VALUES (DEFAULT, '2022-11-26', '2:00:00', 1, '20:30:00');

INSERT INTO functions (id, date, durationTime, event_id, time)
VALUES (DEFAULT, '2022-12-10', '2:00:00', 1, '20:30:00');


INSERT INTO tickets (id, price, type, lot, function_id, event_id)
VALUES (DEFAULT, 500, 'Entrada general', 30, 3, 1);

INSERT INTO tickets (id, price, type, lot, function_id, event_id)
VALUES (DEFAULT, 1000, 'Entrada vip', 10, 3, 1);

INSERT INTO tickets (id, price, type, lot, function_id, event_id)
VALUES (DEFAULT, 500, 'Entrada general', 30, 2, 1);

INSERT INTO tickets (id, price, type, lot, function_id, event_id)
<<<<<<< HEAD
VALUES (DEFAULT, 1000, 'Entrada vip', 10, 2, 1);
=======
VALUES (DEFAULT, 1000, 'Entrada vip', 10, 1, 1);
>>>>>>> 260ef27ae4a0f13d94e80a1c39173cf027464842

select * from tickets;




