const form = document.querySelector('form');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const error = document.querySelector('.error-text');

const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;



form.addEventListener('submit', event =>{
    if(!validations()){
        event.preventDefault();
        email.classList.add('is-invalid');
        password.classList.add('is-invalid');
        error.style.visibility = 'visible';   
    } else {
        event.submit();
    }
})

const validations = () => {
    if (emailRegex.test(email)){
        return false
    }
    if (password.value == '' || password.value == null){
        return false
    }
    return true
}


console.log(validations())