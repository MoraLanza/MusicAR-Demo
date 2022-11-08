import {React, useState, useEffect} from 'react';
// import {getCategories} from '../services/categories'
import {getProducts} from '../services/products'


    
function CategoriesPagination(){
    const [countByCategory, setCountByCategory] = useState([]);

    useEffect( async () => {
        const {countByCategory} = await getProducts(); //De esta manera hacemos destructuring trayendo solo countByCategory de la respuesta  del fetch       
        setCountByCategory(countByCategory)
    }, []);    
  
 console.log(countByCategory)

//  console.log(categories)

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
                                    <td>Eventos por categoría</td>                                    
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    countByCategory.map((category, index) => {
                                        return(
                                            <tr>
                                                <td>{category.name}</td>
                                                <td>
                                                    {category.eventCount}
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
