import { React, useState, useEffect }  from 'react';
import SmallCard from './SmallCard';
import { getCategories } from "../services/categories";
import { getProducts } from "../services/products";
import {getUsers} from '../services/users'



/*  Cada set de datos es un objeto literal */

/* <!-- Movies in DB --> */

function ContentRowMovies(){
    
    const [categories, setCategories] = useState();
    const [products, setProducts] = useState();
    const [users, setUsers] = useState();

    useEffect(async () => {
      const categories = await getCategories();
      const products = await getProducts();
      const users = await getUsers();

      setCategories(categories.count);
      setProducts(products.count);
      setUsers(users.data.length);
    }, []);
    
    console.log(users)
    
    if (!categories && !products && !users) return null;
    

    let moviesInDB = {
        title: 'Eventos en Base de Datos',
        color: 'primary', 
        cuantity: products,
        icon: 'fa-clipboard-list'
    }
    
    /* <!-- Total awards --> */
    
    let totalAwards = {
        title:'Total de categorias', 
        color:'success', 
        cuantity: categories,
        icon:'fa-award'
    }
    
    /* <!-- Actors quantity --> */
    
    let actorsQuantity = {
        title:'Usuarios en Base de Datos' ,
        color:'warning',
        cuantity: users,
        icon:'fa-user-check'
    }

    let cartProps = [moviesInDB, totalAwards, actorsQuantity];
    
    // console.log(moviesInDB)

    return (
    
        <div className="row">
            
            {cartProps.map( (movie, i) => {

                return <SmallCard {...movie} key={i}/>
            
            })}

        </div>
    )
}

export default ContentRowMovies;