const form = document.getElementById('form');
const artist = document.querySelector('.artist');
const subtitle = document.querySelector('.subtitle');
const image = document.getElementById('image');
const dates = document.querySelectorAll('.date');
const times = document.querySelectorAll('.time');
const durationTime = document.querySelectorAll('.durationTime');
const ticketType = document.querySelectorAll('.ticketType');
const prices = document.querySelectorAll('.price');
const lots = document.querySelectorAll('.lot');
const description = document.querySelector('.description-textarea');
const linkYoutube = document.querySelector('.linkYoutube');

const regexYoutube = /(?:https?:\/\/)?(?:www\.)?youtu(?:\.be\/|be.com\/\S*(?:embed)(?:(?:(?=\/[-a-zA-Z0-9_]{11,}(?!\S))\/)|(?:\S*v=|v\/)))([-a-zA-Z0-9_]{11,})/;


const inputs = [artist, subtitle, image, description, linkYoutube];

const allowedHours = ["19:00:00", "19:30:00", "20:30:00", "21:30:00", "22:30:00", "23:30:00", "00:00:00", "00:30:00"];
console.log(times)
const allowedDuration = ["00:30:00", "01:00:00","01:30:00","02:00:00","02:30:00","03:00:00"];

const formValidationBlur = (event) => {
    switch (event.target.className) {
        case "form-control artist":
            if (event.target.value === '' || event.target.value === null) {
                setErrorFor(artist, 'El nombre del artista no puede estar vacío.')
            }
            break;
        case "form-control subtitle":
            if (event.target.value == '' || event.target.value == null) {
                const formGroup = subtitle.closest('div');
                const small = formGroup.querySelector('small');
                formGroup.className = 'form-group';
                small.innerText = '';
            }
            break;
        case "form-control date":

            let inputDate = new Date(event.target.value);
            let todayDay = new Date().getDate();
            let todayMonth = new Date().getMonth();
            let todayYear = new Date().getFullYear();

            if (inputDate.getDate() <= todayDay && inputDate.getMonth() <= todayMonth && inputDate.getFullYear() <= todayYear || inputDate == '') {

                setErrorFor(event.currentTarget, 'La fecha no puede ser hoy o anterior a hoy.')

            } else {
                setSuccessFor(event.currentTarget)
            }
            break;
        case "form-control time":
            for (let i = 0; i < allowedHours.length; i++) {
                if (event.target.value == allowedHours[i]) {
                    return setSuccessFor(event.currentTarget)
                } else {
                   return setErrorFor(event.currentTarget, 'El horario debe ser en punto o y media entre las 19 y las 00 hs.')
                }
            }
            break;
        case "form-control timeDuration":
            for (let i = 0; i < allowedDuration.length; i++) {
                if (event.target.value == allowedDuration[i]) {
                    setSuccessFor(event.currentTarget)
                } else {
                    setErrorFor(event.currentTarget, 'El horario aproximado debe ser en punto o y media entre media y 3 horas.')
                }
            }
            break;

    }
}

const formValidationKeydown = (event) => {
    switch (event.target.className) {
        case "form-control artist":
            if (event.target.value.length <= 2) {
                setErrorFor(artist, 'El nombre del artista no puede tener menos de 2 caracteres.')
            } else {
                setSuccessFor(artist)

            }
            break;
        case "form-control subtitle":
            if (event.target.value.length <= 8 || event.target.value.trim == '') {
                setErrorFor(subtitle, 'El subtitulo no puede tener menos de 8 caracteres.')
            } else {
                setSuccessFor(subtitle)
            }
            break;

    }
}

const formValidationChange = (event) => {
    switch (event.target.className) {
        case "form-control linkYoutube":
            if (regexYoutube.test(event.target.value)) {
                setSuccessFor(linkYoutube)
            } else {
                setErrorFor(linkYoutube, 'El link debe ser embebido y válido.')
            }
            break;
        case "description":
            if (event.target.value <= 149 || event.target.value.trim == '') {
                setErrorFor(description, 'La descripción debe contener por lo menos 150 caracteres.')
            } else {
                setSuccessFor(description)
            }
            break;
        case "form-control ticketType":
            ticketType.forEach(ticket => {
                if (event.target.value.length <= 4 || event.target.value.trim == '') {
                    setErrorFor(event.currentTarget, 'El nombre de la entrada no puede tener menos de 5 caracteres.')
                } else {
                    setSuccessFor(event.currentTarget)
                }
            });
            break;
        case "form-control price":
            price.forEach(price => {
                if (event.target.value <= 499 || event.target.value.trim == '') {
                    setErrorFor(event.currentTarget, 'El precio de la entrada no puede ser menor a 500.')
                } else {
                    setSuccessFor(event.currentTarget)
                }

            });
            break;
        case "form-control lot":
            lot.forEach(lot => {
                if (event.target.value <= 10 || event.target.value.trim == '') {
                    setErrorFor(event.currentTarget, 'La cantidad de entradas no puede ser menor a 10.')
                } else {
                    setSuccessFor(event.currentTarget)
                }
            });
            break;

    }
}

inputs.forEach((input) => {
    input.addEventListener('keydown', formValidationKeydown);
    input.addEventListener('blur', formValidationBlur);
    input.addEventListener('change', formValidationChange);
});
dates.forEach((date) => {
    date.addEventListener('blur', formValidationBlur);
});
times.forEach((time) => {
    time.addEventListener('blur', formValidationBlur);
});
durationTime.forEach((timeD) => {
    timeD.addEventListener('blur', formValidationBlur);
});
ticketType.forEach((ticket) => {
    ticket.addEventListener('change', formValidationChange);
});
prices.forEach((price) => {
    price.addEventListener('change', formValidationChange);
});
lots.forEach((lot) => {
    lot.addEventListener('change', formValidationChange);
});

form.addEventListener('submit', event => {
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

