
                    const selectorFunctionInputs = document.querySelector('.functionsRow');
                    const addFunction = document.querySelector('.addFunction');
                    const functionsBoxSelector = document.getElementById('functionBoxWhite');
                    



                    addFunction.addEventListener('click', (e) => {
                        e.preventDefault();

                        let newFunctionInputs = selectorFunctionInputs.cloneNode(true);



                        const btnDeleteInput = document.createElement('button');
                        btnDeleteInput.className = "btnDeleteInput";
                        btnDeleteInput.innerHTML = "Eliminar función";

                        newFunctionInputs.appendChild(btnDeleteInput);


                        btnDeleteInput.addEventListener('click', function () {
                            this.parentElement.remove();
                        });


                        functionsBoxSelector.appendChild(newFunctionInputs);


                    });