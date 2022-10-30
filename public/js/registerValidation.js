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
    
    if(!validations()){
        warning.style.visibility = 'visible';
        event.preventDefault();
    } else {;
        form.submit()
    }
})

const validations = () => {
    if (nameInput.value.trim == '' || nameInput.value.trim == null){
        return false        
    } else if (nameInput.value.length <= 2){
        return false        
    }

    if (lastName.value.trim == '' || lastName.value.trim == null){
        return false
    } else if (lastName.value.length <= 2) {
        return false
    }

    if (!emailRegex.test(email.value)){
        return false
    }

    if (passwordRegex.test(password.value)){
        return false
    }

    if (password.value !== passwordConfirm.value){
        return false
    }

    return true
    //      if(imageRegex.test(imageUser.value)){
    // //     return false
    // // }
}


const validationsLive = (event) => {
    switch (event.target.className){
        case "controls name":
            if (event.target.value.trim == '' || event.target.value.trim == null){
                errors.push('El nombre no puede quedar vacío.')
                setErrorFor(nameInput, 'El nombre no puede quedar vacio.')
            } else if (nameInput.value.length <= 2){
                setErrorFor(nameInput, 'El nombre debe tener más de 2 caracteres.')
                errors.push('El nombre no puede tener menos de 2 caracteres.')
            } else {
                setSuccessFor(nameInput)
            }
            break;

        case "controls lastName":
            if (event.target.value.trim == '' || event.target.value.trim == null){
                errors.push('El apellido no puede quedar vacio.')
                setErrorFor(lastName, 'El apellido no puede quedar vacio.')
            } else if (event.target.value.length <= 2) {
                errors.push('El apellido debe tener más de 2 caracteres.')
                setErrorFor(lastName, 'El apellido debe tener más de 2 caracteres.')
            } else {
                setSuccessFor(lastName)
            }
            break;

        case "controls email":
            if (!emailRegex.test(event.target.value)){
                errors.push('El email no es válido.')
                setErrorFor(email, 'El email no es válido.')
            } else {
                setSuccessFor(email)
            }
            break;
            
        case "controls password":
            if (event.target.value < 8 && event.target.value > 16 && event.target.value){
               errors.push('La contraseña debe tener mínimo 8 caracteres, maximo 16, al menos 1 número y 1 letra.')
               setErrorFor(password, 'La contraseña debe tener mínimo 8 caracteres, maximo 16, al menos 1 número y 1 letra.')
            } else if (password.length > 16) {
                setErrorFor(password, 'La contraseña debe tener mínimo 8 caracteres, maximo 16, al menos 1 número y 1 letra.')
            } else {
                    setSuccessFor(password)
                }
               
            
            break;

        case "controls passwordConfirm":
            if (password.value !== event.target.value){
                errors.push('Las contraseñas no coinciden.')
                setErrorFor(passwordConfirm, 'Las contraseñas no coinciden.')
            } else {
                setSuccessFor(passwordConfirm)
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
