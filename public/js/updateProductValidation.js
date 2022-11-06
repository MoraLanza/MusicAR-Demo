// const form = document.getElementById('form');
// const artist = document.querySelector('.artist');
// const subtitle = document.querySelector('.subtitle');
// const image = document.getElementById('image');
// const dates = document.querySelectorAll('.date');
// const times = document.querySelectorAll('.time');
// const durationTime = document.querySelectorAll('.timeDuration');
// const ticketType = document.querySelectorAll('.ticketType');
// const prices = document.querySelectorAll('.price');
// const lots = document.querySelectorAll('.lot');
// const description = document.querySelector('.description-textarea');
// const linkYoutube = document.querySelector('.linkYoutube');

// const regexYoutube = /(?:https?:\/\/)?(?:www\.)?youtu(?:\.be\/|be.com\/\S*(?:embed)(?:(?:(?=\/[-a-zA-Z0-9_]{11,}(?!\S))\/)|(?:\S*v=|v\/)))([-a-zA-Z0-9_]{11,})/;


// const inputs = [artist, subtitle, image, description, linkYoutube];


// form.addEventListener('submit', event => {
//  if (!formValidation()){
//     event.preventDefault()
//  } else {
//     event.submit();
//  }


// });

// const formValidationLive = (event) => {
//     switch (event.target.className) {
//         case "form-control artist":
//             if (event.target.value === '' || event.target.value === null) {
//                 setErrorFor(artist, 'El nombre del artista no puede estar vacío.')
//                 return false

//             } else if (event.target.value.length <= 2) {
//                 setErrorFor(artist, 'El nombre del artista no puede tener menos de 2 caracteres.');
//                 return false
//             } else {
//                 setSuccessFor(artist)
//                 return true
//             }

//         case "form-control subtitle":
//             if (event.target.value.length <= 8 || event.target.value.trim == '') {
//                 setErrorFor(subtitle, 'El subtitulo no puede tener menos de 8 caracteres.');
//                 return false
//             } else {
//                 setSuccessFor(subtitle)
//                 return true
//             }

//         case "form-control date":

//             let inputDate = new Date(event.target.value);
//             let todayDay = new Date().getDate();
//             let todayMonth = new Date().getMonth();
//             let todayYear = new Date().getFullYear();

//             if (inputDate.getDate() <= todayDay && inputDate.getMonth() <= todayMonth && inputDate.getFullYear() <= todayYear || inputDate == '') {

//                 setErrorFor(event.currentTarget, 'La fecha no puede ser hoy o anterior a hoy.');
//                 return false
//             } else {
//                 setSuccessFor(event.currentTarget)
//                 return true
//             }

//         case "form-control linkYoutube":
//             if (regexYoutube.test(event.target.value)) {
//                 setSuccessFor(linkYoutube)
//                 return true
//             } else {
//                 setErrorFor(linkYoutube, 'El link debe ser embebido y válido.');
//                 return false
//             }

//         case "description":
//             if (event.target.value <= 149 || event.target.value.trim == '') {
//                 setErrorFor(description, 'La descripción debe contener por lo menos 150 caracteres.');
//                 return false
//             } else {
//                 setSuccessFor(description)
//                 return true
//             }

//         case "form-control ticketType":
//             if (event.target.value.length <= 4 || event.target.value.trim == '') {
//                 setErrorFor(event.currentTarget, 'El nombre de la entrada no puede tener menos de 5 caracteres.');
//                 return false
//             } else {
//                 setSuccessFor(event.currentTarget)
//                 return true
//             }


//         case "form-control price":
//             if (event.target.value <= 499 || event.target.value.trim == '') {
//                 setErrorFor(event.currentTarget, 'El precio de la entrada no puede ser menor a 500.');
//                 return false
//             } else {
//                 setSuccessFor(event.currentTarget)
//                 return true
//             }
//         case "form-control lot":
//             if (event.target.value <= 10 || event.target.value.trim == '') {
//                 setErrorFor(event.currentTarget, 'La cantidad de entradas no puede ser menor a 10.');
//                 return false
//             } else {
//                 setSuccessFor(event.currentTarget)
//                 return true
//             }


//         case "form-control time":
//             let time = event.target.value;
//             let time2 = time.split(":");
//             let time3 = time2.join(".");
//             let time4 = parseInt(time3);

//             if (time4 >= 18 && time4 <= 23) {
//                 setSuccessFor(event.currentTarget)
//                 return true
//             } else {
//                 setErrorFor(event.currentTarget, 'El horario debe ser entre las 18 y las 23 hs.');
//                 return false
//             }


//         case "form-control timeDuration":
//             let timeDuration = event.target.value;
//             let timeDuration2 = timeDuration.split(":");
//             let timeDuration3 = timeDuration2.join(".");
//             let timeDuration4 = parseInt(timeDuration3);

//             if (timeDuration4 >= 1 && timeDuration4 <= 4) {
//                 setSuccessFor(event.currentTarget)
//                 return true
//             } else {
//                 setErrorFor(event.currentTarget, 'La duración debe ser aproximadamente entre 1 y 4 hs.');
//                 return false
//             }

//     }
// }


// inputs.forEach((input) => {
//     input.addEventListener('change', formValidationLive);
// });

// dates.forEach((date) => {
//     date.addEventListener('change', formValidationLive);
// });

// times.forEach((time) => {
//     time.addEventListener('change', formValidationLive);
// });

// durationTime.forEach((timeD) => {
//     timeD.addEventListener('change', formValidationLive);
// });

// ticketType.forEach((ticket) => {
//     ticket.addEventListener('change', formValidationLive);
// });

// prices.forEach((price) => {
//     price.addEventListener('change', formValidationLive);
// });

// lots.forEach((lot) => {
//     lot.addEventListener('change', formValidationLive);
// });


// function setErrorFor(input, message) {
//     const formGroup = input.closest('div');
//     const small = formGroup.querySelector('small');
//     formGroup.className = 'form-group error';
//     small.innerText = message;
// }

// function setSuccessFor(input) {
//     const formGroup = input.closest('div');
//     formGroup.className = 'form-group success';
// }


// const formValidation = () => {
//     if (artist.value === '' || artist.value === null) {
//         setErrorFor(artist, 'El nombre del artista no puede estar vacío.')
//         return false

//     } else if (artist.value.length <= 2) {
//         setErrorFor(artist, 'El nombre del artista no puede tener menos de 2 caracteres.');
//         return false
//     };

//     if (subtitle.value.length <= 8 || subtitle.value.trim == '') {
//         setErrorFor(subtitle, 'El subtitulo no puede tener menos de 8 caracteres.');
//         return false
//     };

//     dates.forEach(date => {
//         let inputDate = new Date(date.value);
//         let todayDay = new Date().getDate();
//         let todayMonth = new Date().getMonth();
//         let todayYear = new Date().getFullYear();

//         if (inputDate.getDate() <= todayDay && inputDate.getMonth() <= todayMonth && inputDate.getFullYear() <= todayYear || inputDate == '') {

//             setErrorFor(date, 'La fecha no puede ser hoy o anterior a hoy.');
//             return false
//         }
//     });


//     if (!regexYoutube.test(linkYoutube.value)) {
//         setErrorFor(linkYoutube, 'El link debe ser embebido y válido.');
//         return false
//     };

//     if (description.value <= 149 || description.value.trim == '') {
//         setErrorFor(description, 'La descripción debe contener por lo menos 150 caracteres.');
//         return false
//     };

//     ticketType.forEach(ticket => {
//         if (ticket.value.length <= 4 || ticket.value.trim == '') {
//             setErrorFor(ticket, 'El nombre de la entrada no puede tener menos de 5 caracteres.');
//             return false
//         }
//     });

//     prices.forEach(price => {
//         if (price.value <= 499 || price.value.trim == '') {
//             setErrorFor(price, 'El precio de la entrada no puede ser menor a 500.');
//             return false
//         }
//     });

//     lots.forEach(lot => {
//         if (lot.value <= 10 || lot.value.trim == '') {
//             setErrorFor(lot, 'La cantidad de entradas no puede ser menor a 10.');
//             return false
//         }
//     });


//     times.forEach(time => {
//         let time1 = time.value;
//         let time2 = time1.split(":");
//         let time3 = time2.join(".");
//         let time4 = parseInt(time3);

//         if (time4 <= 18 && time4 >= 23) {
//             setErrorFor(time, 'El horario debe ser entre las 18 y las 23 hs.');
//             return false
//         }
//     });

//     durationTime.forEach(timeD => {
//         let timeDuration = timeD.value;
//         let timeDuration2 = timeDuration.split(":");
//         let timeDuration3 = timeDuration2.join(".");
//         let timeDuration4 = parseInt(timeDuration3);

//         if (timeDuration4 <= 1 && timeDuration4 >= 4) {
//             setErrorFor(event.currentTarget, 'La duración debe ser aproximadamente entre 1 y 4 hs.');
//             return false
//         }
//     });

//     return true;
// }
const form = document.querySelector('form');
const artist = document.querySelector('.artist');
const subtitle = document.querySelector('.subtitle');
const image = document.getElementById('image');
const linkYoutube = document.querySelector('.linkYoutube');
const description = document.getElementById('description');
const warning = document.querySelector('.warning');

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
    // if (!formValidation()){

    event.preventDefault();
    console.log(formValidation())
    //     warning.style.visibility = 'visible';
    //     console.log('chau')
    // } else{
    //     event.preventDefault()
    //     console.log('hola')
    // }

});



const getDinamicInputs = (inputClass, variable) => {
    variable = document.querySelectorAll(inputClass);
    return variable;
};



// DINAMIC VALIDATIONS



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






// FORM SUBMIT VALIDATION

const formValidation = () => {

    if (!artistValidation()) return false;
    if (!subtitleValidation()) return false;
    if (!youtubeValidation()) return false;
    if (!descriptionValidation()) return false;

    const isInvalidDateEventInputs = getDinamicInputs('.dateEvent', eventDates)
        .map(dateInput => EventDateValitadion(dateInput.value)).includes(false);

    if (getDinamicInputs('.dateEvent', eventDates).every(dateInput => EventDateValitadion(dateInput.value))) return false;

    if (getDinamicInputs('.time', functionsTime).forEach(timeInput => timeValidation(timeInput.value))) return false;

    if (getDinamicInputs('.timeDuration', functionsDuration).forEach(timeDurationInput => timeDurationValidation(timeDurationInput.value))) return false;

    if (getDinamicInputs('.ticketType', functionsTicketType).forEach(ticketTypeInput => ticketTypeValidation(ticketTypeInput.value))) return false;

    if (getDinamicInputs('.price', functionsTicketPrice).forEach(priceInput => priceValidation(priceInput.value))) return false;

    if (getDinamicInputs('.lot', functionsTicketLot).forEach(lotInput => lotValidation(lotInput.value))) return false;


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

