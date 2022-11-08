import {React, useState, useEffect} from 'react';
import { useParams  } from 'react-router-dom';
import {getProduct} from '../services/products'

    
function ProductsList(props){
    const [product, setProduct] = useState();

    let { id } = useParams(); 

    useEffect(async () => {
        const product = await getProduct(id);
        setProduct(product) 
    },[]);

    if(!product) return null

    console.log(product)

    return(
        <>
            <div className="col-lg-10 my-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">Detalle de producto</h5>
                    </div>
                    <div className="card-body">
                        <div className='img-container'>
                            <img src={product.image} alt={product.artist} />
                        </div>
                        <div>

                            <h1>Nombre del artista:</h1>
                            <h4>{product.artist}</h4>
                            <h4>Subtítulo:</h4>
                            <h4>{product.subtitle}</h4>
                            <h4>Descripción:</h4>
                            <p>{product.description}</p>
                            <h4>Localidad:</h4>
                            <h4>{product.countries.countryName} | {product.states.stateName} | {product.citys.cityName}</h4>
                            <h4>Dirección:</h4>
                            <h4>{product.teater.name} | {product.teater.direction}</h4>
                            <h4>Tipo de show:</h4>
                            <h4>{product.showtypes.type}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductsList;
