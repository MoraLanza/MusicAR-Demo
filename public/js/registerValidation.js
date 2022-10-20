
    let titulo = document.querySelector('h2');
    let form = document.querySelector('form');
 
    form.addEventListener('submit', event => {
        let erroresInput = [];
       console.log('aaaa')
        let campoNombre = document.getElementById("name");

        if (campoNombre.value.trim == "") {
            erroresInput.push('El nombre no puede quedar vacío.');
            campoNombre.classList.add('is-invalid');
        } else if (campoNombre.value.length < 3) {
            erroresInput.push('El campo Nombre debe tener al menos 3 caracteres');
       
        }

        let campoApellido = document.querySelector(input.lastName);

        if (campoApellido.value.trim == "") {
            erroresInput.push('El campo Apellido tiene que estar completo');
        } else if (campoApellido.value.length < 3) {
            erroresInput.push('El campo Apellido debe tener al menos 3 caracteres');
        }

        let campoEmail = document.querySelector(input.email);

        if (campoEmail.value.trim == "") {
            erroresInput.push('El campo Email tiene que estar completo');
        } else if (campoEmail.value.length < 3) {
            erroresInput.push('El campo Email debe tener al menos 8 caracteres');
        }

        let campoPassword = document.querySelector(input.password);

        if (campoPassword.value.trim == "") {
            erroresInput.push('El campo Contraseña tiene que estar completo');
        } else if (campoPassword.value.length < 3) {
            erroresInput.push('El campo Contraseña debe tener al menos 8 caracteres');
        }

        let campoPasswordConfirm = document.querySelector(input.passwordConfirm);

        if (campoPasswordConfirm.value.trim == "") {
            erroresInput.push('El campo Repetir Contraseña debe tener al menos 8 caracteres');
        } else if (campoPassword!= campoPasswordConfirm) {
            erroresInput.push('Las contrseñas no coinciden')
        }

        if (erroresInput.length > 0) {
            event.preventDefault();
            let errores = document.querySelector('.errores');
            erroresInput.forEach(error => {
                errores.innerHTML += `<li class='alert-warning'>${error}</li>`
            })
        } else {
            form.submit();
        }


    })
