import {React, useState, useEffect} from 'react';
import {getProducts} from '../services/products'
import { Link } from 'react-router-dom';


    
function LastEventInDb(){
    const [lastProducts, setLastProducts] = useState();

    useEffect( async () => {
        const {products} = await getProducts();
        setLastProducts(products.slice(-1))         
    }, []);    

    if(!lastProducts) return null
    console.log(lastProducts)
    return(
        <div className="col-lg-6 mb-4">
            <div className="card card-last-event shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Último evento en la db</h5>
                </div>
                <div className="card-body">                    
                    <h5 className="m-0 last-event-title text-gray-800">{lastProducts[0].artist}</h5>
                    <h5 className="mb-3 font-weight-bold text-gray-800">{lastProducts[0].subtitle}</h5>
                    <p>{lastProducts[0].description}</p>
                    <Link className="button-primary" to={`products/${lastProducts[0].id}`}>Ver detalle</Link>
                </div>
            </div>
        </div>
    )
}

export default LastEventInDb;
