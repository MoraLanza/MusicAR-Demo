const url = `http://localhost:3000/api/categories/`;

export const getCategories = () => {         
    return fetch(url)
    .then(res => res.json())        
    .catch(err => {
        console.log(err);
    }); 
}

