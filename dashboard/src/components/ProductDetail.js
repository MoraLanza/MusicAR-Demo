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
                <div className="card event-detail shadow mb-4">
                    <div className="card-header py-3">
                        <h5 className="m-0 card-title">Detalle del evento</h5>
                    </div>
                    <div className="card-body">
                        <div className='img-container'>
                            <img src={product.image} alt={product.artist} />
                        </div>
                        <div className='event-data'>
                            <div className='principal-data'>
                                <h6 className='pre-title'>Artista</h6>
                                <h4 className='primary-title mb-3'>{product.artist}</h4>
                                <h6 className='pre-title'>Subtítulo</h6>
                                <h4 className='primary-title medium mb-3'>{product.subtitle}</h4> 
                                <h4 className='pre-title'>Localidad</h4>
                                <h4 className='secondary-title mb-3'>{product.countries.countryName} | {product.states.stateName} | {product.citys.cityName}</h4>
                                <h4 className='pre-title'>Dirección</h4>
                                <h4 className='secondary-title mb-3'>{product.teater.name} | {product.teater.direction}</h4>
                                <h4 className='pre-title'>Tipo de show</h4>
                                <h4 className='secondary-title mb-3'>{product.showtypes.type}</h4>
                            </div>
                            <div className='description-data'>
                                <h4 className='description-title'>Descripción</h4>
                                <p>{product.description}</p>
                            </div>
                            <div className='functions-data'>
                                <h4 className='description-title'>Funciones</h4>
                                <div className='functions-box'>
                                    {
                                        product.functions.map((date, index) => 
                                        <>
                                        <div className='function-card'>
                                            <div>
                                                <h6 className='pre-title'>Fecha</h6>
                                                <p>{date.date}</p>
                                                <h6 className='pre-title'>Duración</h6>
                                                <p>{date.durationTime} HS</p>
                                            </div>
                                            <div>
                                                <h6 className='pre-title'>Hora de inicio</h6>
                                                <p>{date.time} HS</p>
                                            </div>
                                        </div>
                                        </>                                        
                                        )
                                    }
                                </div>
                            </div>
                            <div className='tickets-data'>
                                <h4 className='description-title'>Tickets</h4>
                                <div className='tickets-box'>
                                    {
                                        product.tickets.map((ticket, index) => 
                                        <>
                                        <div className='ticket-card'>
                                            <div>
                                                <h6 className='pre-title'>Tipo de entrada</h6>
                                                <p>{ticket.type}</p>
                                                <h6 className='pre-title'>Precio</h6>
                                                <p>${ticket.price} ARS</p>
                                            </div>
                                            <div>
                                                <h6 className='pre-title'>Disponiles</h6>
                                                <p>{ticket.lot}</p>
                                            </div>
                                        </div>
                                        </>                                        
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductsList;
