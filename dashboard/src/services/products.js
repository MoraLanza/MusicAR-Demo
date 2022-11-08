const url = `http://localhost:3000/api/products/`;

export const getProducts = () => {         
    return fetch(url)
    .then(res => res.json())        
    .catch(err => {
        console.log(err);
    }); 
}

export const getProduct = (id) => {         
    return fetch(url + id)
    .then(res => res.json())        
    .catch(err => {
        console.log(err);
    }); 
}

