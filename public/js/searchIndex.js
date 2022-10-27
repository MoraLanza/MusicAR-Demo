window.onload = () => {


   
        fetch("http://localhost:3000/search")
            .then((response) => {
                console.log('algo')
                console.log(response)
                return response.json()
            })
            .then((jsonData) => {
                console.log('data de eventos')
                console.log(jsonData)
            })
    
}
// window.onload = () => {
//   const searchArtist =  document.getElementById('search-artist');

//     searchArtist.addEventListener('keyup', event => {
//         console.log(searchArtist.value)
//     })
// }