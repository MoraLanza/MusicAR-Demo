import {React, useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {getProducts} from '../services/products'

    
function ProductsList(){
    const [products, setProducts] = useState([]);

    useEffect( async () => {
        const {products} = await getProducts();
        setProducts(products) //De esta manera hacemos destructuring trayendo solo data de la respuesta  del fetch        
    }, []);    

 console.log(products)


    return(
        <>
            <div className="col-lg-10 my-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">Productos en el sistema</h5>
                    </div>
                    <div className="card-body">
                        <table className="table">
                            <thead>
                                <tr>
                                    <td>Artista</td>
                                    <td>Subtitulo</td>                                    
                                    <td>Categoria</td>
                                    <td>Acciones</td>                                    
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    products.map((product, index) => {
                                        return(
                                            <tr>
                                                <td>{product.artist}</td>
                                                <td>{product.subtitle}</td> 
                                                <td>{product.category}</td>
                                                <td>
                                                    <Link to={`products/${product.id}`}>Ver</Link> 
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

export default ProductsList;
