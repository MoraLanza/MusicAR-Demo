const formNotSensible = document.querySelector('.form-NotSensibleData');
const nameInput = document.querySelector('#name');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const passwordConfirm = document.querySelector('#passwordConfirm');
const imageUser = document.querySelector('#imageUser');
const warning = document.querySelector('.warning-submit');

const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const passwordRegex = /"^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"/;
// const imageRegex = /([^\s]+(\.(?i)(jpg|png|gif))$)/;


const inputsNotSensible = [nameInput, lastName, email, imageUser];
const errors = [];


formNotSensible.addEventListener('submit', event => {
    if (validationNotSensible()) {
        event.submit()
    } else {
        event.preventDefault()
        warning.style.visibility = 'visible';
    }
})


const validationsLive = (event) => {
    switch (event.target.className) {
        case "controls name":
            if (validationName()) {
                setSuccessFor(nameInput)
            } else {
                setErrorFor(nameInput, 'El nombre no puede quedar vacio y debe tener más de 2 caracteres.')
            }
            break;

        case "controls lastName":
            if (validationLastName()) {
                setSuccessFor(lastName)
            } else {
                setErrorFor(lastName, 'El nombre no puede quedar vacio y debe tener más de 2 caracteres.')
            }
            break;

        case "controls email":
            if (validationEmail()) {
                setSuccessFor(email)
            } else {
                setErrorFor(email, 'El email no es válido.')
            }
            break;

        case "controls password":
            if (validationPassword()) {
                setSuccessFor(password)
            } else {
                setErrorFor(password, 'La contraseña debe tener mínimo 8 caracteres, maximo 16.')
            }
            break;

        case "controls passwordConfirm":
            if(validationConfirmPassword()){
                setSuccessFor(passwordConfirm)
            } else {
                setErrorFor(passwordConfirm, 'Las contraseñas no coinciden.')
            }
            break;

        // case "controls imageUser":
        //     if(imageRegex.test(event.target.value)){
        //         setErrorFor(imageUser, 'La imagen debe ser en formato gif, jpg o png.')
        //     } else {
        //         setSuccessFor(imageUser)
        //     }
        //     break;
    }
}

const validationNotSensible = () => {
    if (!validationName() || !validationLastName() || !validationEmail()) {
        return false
    }
    return true
}

inputsNotSensible.forEach(input => {
    input.addEventListener('change', validationsLive)
})

function setErrorFor(input, message) {
    const itemInput = input.closest('div');
    const small = itemInput.querySelector('small');
    itemInput.className = 'item-input error';
    small.innerText = message;
    small.style.visibility = 'visible';
}

function setSuccessFor(input) {
    const itemInput = input.closest('div');
    const small = itemInput.querySelector('small');
    itemInput.className = 'item-input success';
    small.style.visibility = 'hidden';
}


const validationName = () => {
    if (nameInput.value.trim == '' || nameInput.value.trim == null || nameInput.value.length <= 2) {
        return false
    } else {
        return true
    }
}

const validationLastName = () => {
    if (lastName.value.trim == '' || lastName.value.trim == null || lastName.value.length <= 2) {
        return false
    } else {
        setSuccessFor(lastName)
        return true
    }
}

const validationEmail = () => {
    if (!emailRegex.test(email.value)) {
        return false
    } else {
        return true
    }
}



const validationPassword = () => {
    if (password.value.length < 8 || password.value.length > 16) {
        return false
    } else {
        return true
    }
}

const validationConfirmPassword = () => {
    if (password.value !== passwordConfirm.value) {
        return false
    } else {
        return true
    }
}