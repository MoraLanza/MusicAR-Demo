
window.addEventListener('load', function(){
    const btnFormEdit = document.querySelector('#edit-profile-btn')
  
    const divFormEdit = document.querySelector('.edit-profile-container')
  
    const btnFormCancel = document.querySelector('#cancelEditForm')

    btnFormEdit.addEventListener('click', function(e){
        divFormEdit.classList.remove('element-animation-back');        
        e.preventDefault();
        divFormEdit.classList.remove('d-none');
    });

    btnFormCancel.addEventListener('click', function(e){
        e.preventDefault();
        divFormEdit.classList.add('element-animation-back')
        // divFormEdit.classList.add('d-none');
    });

});