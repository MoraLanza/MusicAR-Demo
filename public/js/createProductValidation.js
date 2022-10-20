const form = document.getElementById('form');
const artist = document.querySelector('.artist');
const subtitle = document.querySelector('.subtitle');
const image = document.getElementById('image');
let dates = document.querySelectorAll('.dateEvent');
const times = document.querySelectorAll('.time');
const durationTime = document.querySelectorAll('.timeDuration');
const ticketType = document.querySelectorAll('.ticketType');
const prices = document.querySelectorAll('.price');
const lots = document.querySelectorAll('.lot');
const description = document.querySelector('.description-textarea');
const linkYoutube = document.querySelector('.linkYoutube');

const regexYoutube = /(?:https?:\/\/)?(?:www\.)?youtu(?:\.be\/|be.com\/\S*(?:embed)(?:(?:(?=\/[-a-zA-Z0-9_]{11,}(?!\S))\/)|(?:\S*v=|v\/)))([-a-zA-Z0-9_]{11,})/;


const inputs = [artist, subtitle, image, description, linkYoutube];


form.addEventListener('submit', event => {


});

function getDates() {
    dates =  document.querySelectorAll('.dateEvent');
    return dates;
}

dates = getDates();
console.log(dates)
const formValidation = (event) => {
    switch (event.target.className) {
        case "form-control artist":
            if (event.target.value === '' || event.target.value === null) {
                setErrorFor(artist, 'El nombre del artista no puede estar vacío.')

            } else if (event.target.value.length <= 2) {
                setErrorFor(artist, 'El nombre del artista no puede tener menos de 2 caracteres.');
                
            } else {
                setSuccessFor(artist)

            }
        break;
        case "form-control subtitle":
            if (event.target.value.length <= 8 || event.target.value.trim == '') {
                setErrorFor(subtitle, 'El subtitulo no puede tener menos de 8 caracteres.');
            } else {
                setSuccessFor(subtitle)
            }
            break;
        case "form-control dateEvent":

            let inputDate = new Date(event.target.value);
            let todayDay = new Date().getDate();
            let todayMonth = new Date().getMonth();
            let todayYear = new Date().getFullYear();

            if (inputDate.getDate() <= todayDay && inputDate.getMonth() <= todayMonth && inputDate.getFullYear() <= todayYear || inputDate == '') {

                setErrorFor(event.currentTarget, 'La fecha no puede ser hoy o anterior a hoy.');

            } else {
                setSuccessFor(event.currentTarget)
            }
            break;
            case "form-control linkYoutube":
                if (regexYoutube.test(event.target.value)) {
                    setSuccessFor(linkYoutube)
                } else {
                    setErrorFor(linkYoutube, 'El link debe ser embebido y válido.');
                }
                break;
            case "description":
                if (event.target.value <= 149 || event.target.value.trim == '') {
                    setErrorFor(description, 'La descripción debe contener por lo menos 150 caracteres.');
                } else {
                    setSuccessFor(description)
                }
                break;
            case "form-control ticketType":
                if (event.target.value.length <= 4 || event.target.value.trim == '') {
                    setErrorFor(event.currentTarget, 'El nombre de la entrada no puede tener menos de 5 caracteres.');
                } else {
                    setSuccessFor(event.currentTarget)
                }
    
                break;
            case "form-control price":
                if (event.target.value <= 499 || event.target.value.trim == '') {
                    setErrorFor(event.currentTarget, 'El precio de la entrada no puede ser menor a 500.');
                } else {
                    setSuccessFor(event.currentTarget)
                }
                break;
            case "form-control lot":
                if (event.target.value <= 10 || event.target.value.trim == '') {
                    setErrorFor(event.currentTarget, 'La cantidad de entradas no puede ser menor a 10.');
                } else {
                    setSuccessFor(event.currentTarget)
                }
    
                break;
            case "form-control time":
                let time = event.target.value;
                let time2 = time.split(":");
                let time3 = time2.join(".");
                let time4 = parseInt(time3);
                if (time4 >= 18 && time4 <= 23) {
                    setSuccessFor(event.currentTarget)
                } else {
                    setErrorFor(event.currentTarget, 'El horario debe ser entre las 18 y las 23 hs.');
                }
    
                break;
            case "form-control timeDuration":
                let timeDuration = event.target.value;
                let timeDuration2 = timeDuration.split(":");
                let timeDuration3 = timeDuration2.join(".");
                let timeDuration4 = parseInt(timeDuration3);
                if (timeDuration4 >= 1 && timeDuration4 <= 4) {
                    setSuccessFor(event.currentTarget)
                } else {
                    setErrorFor(event.currentTarget, 'La duración debe ser aproximadamente entre 1 y 4 hs.');
                }
                break;
    
    }
}


inputs.forEach((input) => {
    input.addEventListener('change', formValidation);
});

getDates().forEach((date) => {
    date.addEventListener('change', formValidation);
});

times.forEach((time) => {
    time.addEventListener('change', formValidation);
});

durationTime.forEach((timeD) => {
    timeD.addEventListener('change', formValidation);
});

ticketType.forEach((ticket) => {
    ticket.addEventListener('change', formValidation);
});

prices.forEach((price) => {
    price.addEventListener('change', formValidation);
});

lots.forEach((lot) => {
    lot.addEventListener('change', formValidation);
});


function setErrorFor(input, message) {
    const formGroup = input.closest('div');
    const small = formGroup.querySelector('small');
    formGroup.className = 'form-group error';
    small.innerText = message;
}

function setSuccessFor(input) {
    const formGroup = input.closest('div');
    formGroup.className = 'form-group success';
}