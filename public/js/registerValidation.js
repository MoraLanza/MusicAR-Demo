window.onload = function () {
    let titulo = document.querySelector('h2');
    let formulario = document.querySelector('.formulario');

    formulario.addEventListener('submit', function (e) {
        let erroresInput = [];

        let campoNombre = document.querySelector(input.name);

        if (campoNombre.value.length == "") {
            erroresInput.push('El campo Nombre tiene que estar completo');
            campoNombre.classli
        } else if (campoNombre.value.length < 3) {
            erroresInput.push('El campo Nombre debe tener al menos 3 caracteres');
        }

        let campoApellido = document.querySelector(input.lastName);

        if (campoApellido.value.length == "") {
            erroresInput.push('El campo Apellido tiene que estar completo');
        } else if (campoApellido.value.length < 3) {
            erroresInput.push('El campo Apellido debe tener al menos 3 caracteres');
        }

        let campoEmail = document.querySelector(input.email);

        if (campoEmail.value.length == "") {
            erroresInput.push('El campo Email tiene que estar completo');
        } else if (campoEmail.value.length < 3) {
            erroresInput.push('El campo Email debe tener al menos 8 caracteres');
        }

        let campoPassword = document.querySelector(input.password);

        if (campoPassword.value.length == "") {
            erroresInput.push('El campo Contraseña tiene que estar completo');
        } else if (campoPassword.value.length < 3) {
            erroresInput.push('El campo Contraseña debe tener al menos 8 caracteres');
        }

        let campoPasswordConfirm = document.querySelector(input.passwordConfirm);

        if (campoPasswordConfirm.value.length == "") {
            erroresInput.push('El campo Repetir Contraseña debe tener al menos 8 caracteres');
        } else if (campoPasswordConfirm != campoPasswordConfirm) {
            erroresInput.push('Las contrseñas no coinciden')
        }

        if (erroresInput.length > 0) {
            evento.preventDefault();
            let errores = document.querySelector('.errores');
            erroresInput.forEach(error => {
                errores.innerHTML += `<li class='alert-warning'>${error}</li>`
            })
        } else {
            alert('los datos se enviaron correctamente');
            form.submit();
        }


    })
}