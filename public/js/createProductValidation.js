
const form = document.getElementById('form');
const artist = document.getElementById('artist');
const subtitle = document.getElementById('subtitle');
const image = document.getElementById('image');
const dates = document.querySelectorAll('.date');
const times = document.querySelectorAll('.time');
const durationTimes = document.querySelectorAll('.durationTime');
const ticketType1 = document.querySelectorAll('.ticketType1');
const ticketType2 = document.querySelectorAll('.ticketType2');
const ticketType3 = document.querySelectorAll('.ticketType3');
const price1 = document.querySelectorAll('.price1');
const price2 = document.querySelectorAll('.price2');
const price3 = document.querySelectorAll('.price3');
const lot1 = document.querySelectorAll('.lot1');
const lot2 = document.querySelectorAll('.lot2');
const lot3 = document.querySelectorAll('.lot3');
const description = document.getElementById('description');
const linkYoutube = document.getElementById('linkYoutube');


form.addEventListener('submit', event => {
    event.preventDefault();

    checkInputs();
});

artist.addEventListener('blur', event => {
    if (event.target.value === '' || event.target.value === null) {

        setErrorFor(artist, 'El nombre del artista no puede estar vacío.')

    }
});

artist.addEventListener('keydown', event => {
    if (event.target.value.length <= 2) {
        setErrorFor(artist, 'El nombre del artista no puede tener menos de 2 caracteres.')
    } else {
        setSuccessFor(artist)
    }
});

subtitle.addEventListener('keydown', event => {
    if (event.target.value.length <= 8) {
        setErrorFor(subtitle, 'El subtitulo no puede tener menos de 8 caracteres.')
    } else {
        setSuccessFor(subtitle)
    }
});
dates.forEach(date => {
    date.addEventListener('blur', event => {

       let inputDate = new Date(event.target.value);
       let todayDay = new Date().getDate();
       let todayMonth = new Date().getMonth();
       let todayYear = new Date().getFullYear();

       console.log(inputDate.getDate)
       console.log(todayDay)

        if (inputDate.getDate() <= todayDay && inputDate.getMonth() <= todayMonth && inputDate.getFullYear() <= todayYear){
            setErrorFor(date, 'La fecha no puede ser hoy o anterior a hoy.')
        } else {
            setSuccessFor(date)
        }
})
})


ticketType1.forEach(ticket => {

    ticket.addEventListener('keydown', event => {
        if (event.target.value.length <= 5 || event.target.value.trim == '') {
            setErrorFor(ticket, 'El nombre de la entrada no puede tener menos de 5 caracteres.')
        } else {
            setSuccessFor(ticket)
        }
    });
});


price1.forEach(price => {

    price.addEventListener('keydown', event => {
        if (event.target.value <= 500 || event.target.value.trim == '') {
            setErrorFor(price, 'El precio de la entrada no puede ser menor a 500.')
        } else {
            setSuccessFor(price)
        }
    });
});

lot1.forEach(lot => {

    lot.addEventListener('keydown', event => {
        if (event.target.value <= 10 || event.target.value.trim == '') {
            setErrorFor(lot, 'La cantidad de entradas no puede ser menor a 10.')
        } else {
            setSuccessFor(lot)
        }
    });
});

function checkInputs() {
    const artistValue = artist.value.trim();
    const subtitleValue = subtitle.value.trim();
    const descriptionValue = description.value.trim();
    const linkYoutubeValue = linkYoutube.value.trim();



}



function setErrorFor(input, message) {
    const formGroup = input.closest('div');
    console.log(formGroup)
    const small = formGroup.querySelector('small');
    formGroup.className = 'form-group error';
    small.innerText = message;
}

function setSuccessFor(input) {
    const formGroup = input.closest('div');
    formGroup.className = 'form-group success';
}

