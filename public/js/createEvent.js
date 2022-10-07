window.addEventListener('load', function(e){
                
    const newFunctionInputs = " <div class='inputs-row' id='functionsRow'> <div class='form-group date1'><label for='date1'>Fecha de función*</label> <input class='form-control' type='date' name='date1' id='date1' required> </div> <div class='form-group hour1'> <label for='hour1'>Horario de inicio*</label> <select class='form-control' name='hour1' id='hour1' required> <option value='7pm'>7:00 pm</option> </select></div><div><button class='btn-add-show' type='button' id='addFunction'><i class='fa-solid fa-plus'></i>Añadir una función</button> </div> </div>"; 

    const addFunction = document.querySelector('#addFunction');

    const functionBoxSelector = document.querySelector('#functionBoxWhite'); 

    addFunction.addEventListener('click', (e) => {
        e.preventDefault()
        console.log(newFunctionInputs)
        functionBoxSelector.innerHTML += newFunctionInputs
    })    

})
