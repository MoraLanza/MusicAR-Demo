import {React, useState, useEffect} from 'react';
import { useParams  } from 'react-router-dom';
import {getProduct} from '../services/products'

    
function ProductsList(props){
    const [product, setProduct] = useState([]);

    let { id } = useParams(); 

    useEffect(async () => {
        const product = await getProduct(id);
        setProduct(product) 
    },[]);

    console.log(product)

    return(
        <>
            <div className="col-lg-10 my-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">Detalle de producto</h5>
                    </div>
                    <div className="card-body">
                        <div>
                            <img src="http://localhost:3000/images/products/image-1667189992955" alt="event img" />
                        </div>
                        Hola {product.artist}
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductsList;
