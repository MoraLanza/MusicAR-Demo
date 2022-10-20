const form = document.getElementById('form');
const artist = document.querySelector('.artist');
const subtitle = document.querySelector('.subtitle');
const image = document.getElementById('image');
const dates = document.querySelectorAll('.date');
const times = document.querySelectorAll('.time');
const durationTime = document.querySelectorAll('.timeDuration');
const ticketType = document.querySelectorAll('.ticketType');
const prices = document.querySelectorAll('.price');
const lots = document.querySelectorAll('.lot');
const description = document.querySelector('.description-textarea');
const linkYoutube = document.querySelector('.linkYoutube');

const regexYoutube = /(?:https?:\/\/)?(?:www\.)?youtu(?:\.be\/|be.com\/\S*(?:embed)(?:(?:(?=\/[-a-zA-Z0-9_]{11,}(?!\S))\/)|(?:\S*v=|v\/)))([-a-zA-Z0-9_]{11,})/;


const inputs = [artist, subtitle, image, description, linkYoutube];

let errors = [];

form.addEventListener('submit', event => {
  
    if (errors.length > 0) {
        event.preventDefault();
        errors = [];
        formValidationBlur(event);
        formValidationChange(event);
        formValidationKeydown(event);
    } else {
        formulario.submit();
    }
});

const formValidationBlur = (event) => {
    switch (event.target.className) {
        case "form-control artist":
            if (event.target.value === '' || event.target.value === null) {
                setErrorFor(artist, 'El nombre del artista no puede estar vacío.')
                errors.push('artist error')
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

                setErrorFor(event.currentTarget, 'La fecha no puede ser hoy o anterior a hoy.');
                errors.push('date error')

            } else {
                setSuccessFor(event.currentTarget)
            }
            break;
    }
}



const formValidationKeydown = (event) => {
    switch (event.target.className) {
        case "form-control artist":
            if (event.target.value.length <= 2) {
                setErrorFor(artist, 'El nombre del artista no puede tener menos de 2 caracteres.');
                errors.push('artist error')
            } else {
                setSuccessFor(artist)

            }
            break;
        case "form-control subtitle":
            if (event.target.value.length <= 8 || event.target.value.trim == '') {
                setErrorFor(subtitle, 'El subtitulo no puede tener menos de 8 caracteres.');
                errors.push('subtitle error')
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
                setErrorFor(linkYoutube, 'El link debe ser embebido y válido.');
                errors.push('youtube error')
            }
            break;
        case "description":
            if (event.target.value <= 149 || event.target.value.trim == '') {
                setErrorFor(description, 'La descripción debe contener por lo menos 150 caracteres.');
                errors.push('description error')
            } else {
                setSuccessFor(description)
            }
            break;
        case "form-control ticketType":
            if (event.target.value.length <= 4 || event.target.value.trim == '') {
                setErrorFor(event.currentTarget, 'El nombre de la entrada no puede tener menos de 5 caracteres.');
                errors.push('ticketType error')
            } else {
                setSuccessFor(event.currentTarget)
            }

            break;
        case "form-control price":
            if (event.target.value <= 499 || event.target.value.trim == '') {
                setErrorFor(event.currentTarget, 'El precio de la entrada no puede ser menor a 500.');
                errors.push('price error');
            } else {
                setSuccessFor(event.currentTarget)
            }
            break;
        case "form-control lot":
            if (event.target.value <= 10 || event.target.value.trim == '') {
                setErrorFor(event.currentTarget, 'La cantidad de entradas no puede ser menor a 10.');
                errors.push('lot error');
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
                errors.push('time error')
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
                errors.push('durationTime error');
            }
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
    time.addEventListener('change', formValidationChange);
});
durationTime.forEach((timeD) => {
    timeD.addEventListener('change', formValidationChange);
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



let messageErrors = document.getElementById('messageErrors');
          ulErrores.classList.add('alert-danger')
          if(errores.length > 0){
              evento.preventDefault();
              ulErrores.innerHTML = "";
              for (let i = 0 ; i < errores.length; i++){
                ulErrores.innerHTML += `<li> ${errores[i]} </li> `
              }
              errores = [];
          }else{
              return true;
          } 

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

