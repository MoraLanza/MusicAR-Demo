const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const passwordConfirm = document.querySelector('#passwordConfirm');
const imageUser = document.querySelector('#imageUser');

const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const passwordRegex = /"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"/;
// const imageRegex = /([^\s]+(\.(?i)(jpg|png|gif))$)/;


const inputs = [nameInput, lastName, email, password, passwordConfirm, imageUser];

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

    if (emailRegex.test(email.value)){
        return false
    }

    if (passwordRegex.test(password.value)){
        return false
    }

    if (password.value !== passwordConfirm.value){
        return false
    }

    // if(imageRegex.test(imageUser.value)){
    //     return false
    // }
    return true
}


const validationsLive = (event) => {
    switch (event.target.className){
        case "controls name":
            if (event.target.value.trim == '' || event.target.value.trim == null){
                setErrorFor(nameInput, 'El nombre no puede quedar vacio')
            } else if (nameInput.value.length <= 2){
                setErrorFor(nameInput, 'El nombre debe tener más de 2 caracteres')
            } else {
                setSuccessFor(nameInput)
            }
            break;

        case "controls lastName":
            if (event.target.value.trim == '' || event.target.value.trim == null){
                setErrorFor(lastName, 'El apellido no puede quedar vacio')
            } else if (event.target.value.length <= 2) {
                setErrorFor(lastName, 'El apellido debe tener más de 2 caracteres')
            } else {
                setSuccessFor(lastName)
            }
            break;

        case "controls email":
            if (!emailRegex.test(event.target.value)){
                setErrorFor(email, 'El email no es válido')
            } else {
                setSuccessFor(email)
            }
            break;
            
        case "controls password":
            if (!passwordRegex.test(event.target.value)){
               setErrorFor(password, 'La contraseña debe tener mínimo 8 caracteres, 1 mayúscula, 1 minúscula y 1 número.')
            } else {
                setSuccessFor(password)
            }
            break;

        case "controls passwordConfirm":
            if (password.value !== event.target.value){
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
    itemInput.className = 'item-input success';
}
