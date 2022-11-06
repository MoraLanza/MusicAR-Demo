const form = document.getElementById('form');
const artist = document.querySelector('.artist');
const subtitle = document.querySelector('.subtitle');
const image = document.getElementById('image');
const linkYoutube = document.querySelector('.linkYoutube');
const addFunctionBtn = document.querySelector('#addFunction');
const description = document.getElementById('description');
const warning = document.querySelector('.warning-submit');

let functions;
let eventDates;
let functionsTime;
let functionsDuration;
let functionsTicketType;
let functionsTicketPrice;
let functionsTicketLot;

const regexYoutube = /(?:https?:\/\/)?(?:www\.)?youtu(?:\.be\/|be.com\/\S*(?:embed)(?:(?:(?=\/[-a-zA-Z0-9_]{11,}(?!\S))\/)|(?:\S*v=|v\/)))([-a-zA-Z0-9_]{11,})/;


const inputs = [artist, subtitle, image, linkYoutube];


// EVENT LISTENERS

form.addEventListener('submit', event => {
if (!formValidation()){
    event.preventDefault();
    warning.style.visibility = 'visible';
} else{
    form.submit()
}

});

addFunctionBtn.addEventListener('click', event => {
    dinamicValidations();
});



const getDinamicInputs = (inputClass, variable) => {
    variable = document.querySelectorAll(inputClass);
    return variable;
};



// DINAMIC VALIDATIONS

const dinamicValidations = () => {
    getDinamicInputs('.dateEvent', eventDates).forEach(dateInput => {
        dateInput.addEventListener('change', formValidationLive);
    });

    getDinamicInputs('.time', functionsTime).forEach(timeInput => {
        timeInput.addEventListener('change', formValidationLive)
    });

    getDinamicInputs('.timeDuration', functionsDuration).forEach(timeDurationInput => {
        timeDurationInput.addEventListener('change', formValidationLive)
    });

    getDinamicInputs('.ticketType', functionsTicketType).forEach(ticketTypeInput => {
        ticketTypeInput.addEventListener('change', formValidationLive)
    });

    getDinamicInputs('.price', functionsTicketPrice).forEach(priceInput => {
        priceInput.addEventListener('change', formValidationLive)
    });

    getDinamicInputs('.lot', functionsTicketPrice).forEach(lotInput => {
        lotInput.addEventListener('change', formValidationLive)
    });
}



const formValidationLive = (event) => {
    switch (event.target.className) {
        case "form-control artist":

            if (artistValidation()) {
                setSuccessFor(artist)
            } else {
                setErrorFor(artist, 'El nombre del artista no puede tener menos de 2 caracteres.');
            }

            break;
        case "form-control subtitle":

            if (subtitleValidation()) {
                setSuccessFor(subtitle)
            } else {
                setErrorFor(subtitle, 'El subtitulo no puede tener menos de 8 caracteres.');
            }
            break;
        case "form-control linkYoutube":

            if (youtubeValidation()) {
                setSuccessFor(linkYoutube)
            } else {
                setErrorFor(linkYoutube, 'El link debe ser embebido y válido.');
            }
            break;
        case "form-control dateEvent":
            if (EventDateValitadion(event.target.value)) {
                setSuccessFor(event.currentTarget)
            } else {
                setErrorFor(event.currentTarget, 'La fecha no puede estar vacía, ser hoy o anterior a hoy.');

            }
            break;
        case "form-control ticketType":

            if (ticketTypeValidation(event.target.value)) {
                setSuccessFor(event.currentTarget)
            } else {
                setErrorFor(event.currentTarget, 'El nombre de la entrada no puede tener menos de 5 caracteres.');
            }
            break;
        case "form-control price":

            if (priceValidation(event.target.value)) {
                setSuccessFor(event.currentTarget)
            } else {
                setErrorFor(event.currentTarget, 'El precio de la entrada no puede ser menor a 500.');
            }

            break;
        case "form-control lot":

            if (lotValidation(event.target.value)) {
                setSuccessFor(event.currentTarget)
            } else {
                setErrorFor(event.currentTarget, 'La cantidad de entradas no puede ser menor a 10.');
            }

            break;
        case "form-control time":

            if (timeValidation(event.target.value)) {
                setSuccessFor(event.currentTarget)
            } else {
                setErrorFor(event.currentTarget, 'El horario debe ser entre las 18 y las 23 hs.');
            }

            break;
        case "form-control timeDuration":

            if (timeDurationValidation(event.target.value)) {
                setSuccessFor(event.currentTarget)
            } else {
                setErrorFor(event.currentTarget, 'La duración debe ser aproximadamente entre 1 y 4 hs.');
            }
            break;

    }
}

inputs.forEach((input) => {
    input.addEventListener('change', formValidationLive);
});

description.addEventListener('change', event => {
    descriptionValidation()
})


dinamicValidations();
// FORM SUBMIT VALIDATION

const formValidation = () => {

    if (!artistValidation()) return false;
    if (!subtitleValidation()) return false;
    if (!youtubeValidation()) return false;
    if (!descriptionValidation()) return false;

    if (getDinamicInputs('.dateEvent', eventDates).every(dateInput => EventDateValitadion(dateInput.value))) return false;

    if (getDinamicInputs('.time', functionsTime).every(timeInput => timeValidation(timeInput.value))) return false;

    if (getDinamicInputs('.timeDuration', functionsDuration).every(timeDurationInput => timeDurationValidation(timeDurationInput.value))) return false;

    if (getDinamicInputs('.ticketType', functionsTicketType).every(ticketTypeInput => ticketTypeValidation(ticketTypeInput.value))) return false;

    if(getDinamicInputs('.price', functionsTicketPrice).every(priceInput => priceValidation(priceInput.value))) return false;

    if(getDinamicInputs('.lot', functionsTicketLot).every(lotInput => lotValidation(lotInput.value))) return false;


    return true
}
// SET CSS ERRORS FUNCTIONS

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



// INPUT VALIDATIONS FUNCTIONS

const artistValidation = () => {
    if (artist.value === '' || artist.value === null || artist.value.length <= 2) {
        return false
    }
    return true
}

const subtitleValidation = () => {
    if (subtitle.value.length <= 8 || subtitle.value.trim == '') {
        return false
    }
    return true
}

const youtubeValidation = () => {
    if (!regexYoutube.test(linkYoutube.value)) {
        return false
    } else {

        return true
    }
}

const descriptionValidation = () => {
    if (description.value.length <= 149 || description.value.trim === "" || description.value.trim === null) {
        const formGroup = description.closest('div');
        const small = formGroup.querySelector('small');
        formGroup.className = 'form-group error description-textarea';
        small.innerText = 'la descripción debe tener mínimo 150 caracteres';
        return false
    } else {
        const formGroup = description.closest('div');
        formGroup.className = 'form-group success description-textarea';
        return true
    }
}


// from arrays

const EventDateValitadion = (target) => {
    let selectedDate = new Date(target);

    if (selectedDate <= new Date()) {
        return false
    }
    return true
}

const timeValidation = (target) => {
    let time = target;
    let time2 = time.split(":");
    let time3 = time2.join(".");
    let time4 = parseInt(time3);
    if (time4 >= 18 && time4 <= 23) {
        return true
    }
    return false
}

const timeDurationValidation = (target) => {
    let timeDuration = target;
    let timeDuration2 = timeDuration.split(":");
    let timeDuration3 = timeDuration2.join(".");
    let timeDuration4 = parseInt(timeDuration3);
    if (timeDuration4 >= 1 && timeDuration4 <= 4) {
        return true
    }
    return false

}

const lotValidation = (target) => {
    if (target <= 10 || target.trim === '' || target === null) {
        return false
    }
    return true
}

const priceValidation = (target) => {
    if (target <= 499 || target.trim == '' || target === null) {
        return false
    }
    return true
}

const ticketTypeValidation = (target) => {
    if (target.length <= 4 || target.trim == '' || target === null) {
        return false
    }
    return true
}

