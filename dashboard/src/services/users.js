const url = `http://localhost:3000/api/users`;

export const getUsers = () => {         
    return fetch(url)
    .then(res => res.json())        
    .catch(err => {
        console.log(err);
    }); 
}

