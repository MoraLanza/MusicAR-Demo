const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const passwordConfirm = document.querySelector('#passwordConfirm');
const imageUser = document.querySelector('#imageUser');
const warning = document.querySelector('.warning');

const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const passwordRegex = /"^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"/;
// const imageRegex = /([^\s]+(\.(?i)(jpg|png|gif))$)/;


const inputs = [nameInput, lastName, email, password, passwordConfirm, imageUser];
const errors = [];


form.addEventListener('submit', event =>{
    if (validation()){
        event.submit()
    } else {
        event.preventDefault()
    }
})


const validationsLive = (event) => {
    switch (event.target.className){
        case "controls name":
            validationName()
            break;

        case "controls lastName":
            validationLastName()
            break;

        case "controls email":
           validationEmail()
            break;
            
        case "controls password":
            validationPassword()
            break;

        case "controls passwordConfirm":
            validationConfirmPassword()
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

const validation = () =>{
    if (!validationName()){
        return false
    }
    if(!validationLastName()){
        return false
    }
    if(!validationEmail()){
        return false
    }
    if(!validationPassword()){
        return false
    }
    if(!validationConfirmPassword()){
        return false
    }
    return true
}

inputs.forEach(input =>{
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
    if (nameInput.value.trim == '' || nameInput.value.trim == null){
        setErrorFor(nameInput, 'El nombre no puede quedar vacio.')
        return false
    } else if (nameInput.value.length <= 2){
        setErrorFor(nameInput, 'El nombre debe tener más de 2 caracteres.')
        errors.push('El nombre no puede tener menos de 2 caracteres.')
        return false
    } else {
        setSuccessFor(nameInput)
    }
}

const validationLastName = () => {
    if (lastName.value.trim == '' || lastName.value.trim == null){
        setErrorFor(lastName, 'El apellido no puede quedar vacio.')
        return false
    } else if (lastName.value.length <= 2) {
        setErrorFor(lastName, 'El apellido debe tener más de 2 caracteres.')
        return false
    } else {
        setSuccessFor(lastName)
        return true
    }
}

const validationEmail = () => {
    if (!emailRegex.test(email.value)){
        setErrorFor(email, 'El email no es válido.')
        return false
    } else {
        setSuccessFor(email)
        return true
    }
}

const validationPassword = () => {
    if (password.value.length < 8 || password.value.length > 16 ){
        setErrorFor(password, 'La contraseña debe tener mínimo 8 caracteres, maximo 16.')
        return false
     } else {
        setSuccessFor(password)
        return true
     }
}

const validationConfirmPassword = () => {
    if (password.value !== passwordConfirm.value){
        setErrorFor(passwordConfirm, 'Las contraseñas no coinciden.')
        return false
    } else {
        setSuccessFor(passwordConfirm)
        return true
    }
}