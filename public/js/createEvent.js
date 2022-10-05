
window.addEventListener('load', function(e){
  
    const newFunctionInputs = document.querySelector('#functionsRow'); 

    const functionBoxSelector = document.querySelector('#functionBoxWhite'); 


    const addFunction = document.querySelector('#addFunction');

    addFunction.addEventListener('click', (e) => {
        e.preventDefault()
        console.log('funciono')
        newFunctionInputs.innerHTML(newFunctionInputs)
    })    

})

const addShow = document.querySelector('#add-Function');

const functionForm = document.querySelector('.function-form');

addShow.addEventListener('click', (event) => {
    // replicar el form de agregar evento de forma automatizada
})


