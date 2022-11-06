import {React, useState, useEffect} from 'react';
import {getCategories} from '../services/categories'

    
function CategoriesPagination(){
    const [categories, setCategories] = useState([]);

    useEffect( async () => {
        const {categories} = await getCategories();
        setCategories(categories) //De esta manera hacemos destructuring trayendo solo data de la respuesta  del fetch
    }, []);    

 console.log(categories)

    return(
        <>
            <div className="col-lg-10 my-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">Categorias en el sistema</h5>
                    </div>
                    <div className="card-body">
                        <table className="table">
                            <thead>
                                <tr>
                                    <td>Nombre de categoria</td>
                                    <td>Acciones</td>                                    
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    categories.map((category, index) => {
                                        return(
                                            <tr>
                                                <td>{category.name}</td>
                                                <td>
                                                    Ver
                                                </td>
                                            </tr>
                                            )
                                        } 
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CategoriesPagination;
