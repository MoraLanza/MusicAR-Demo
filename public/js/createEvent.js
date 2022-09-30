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