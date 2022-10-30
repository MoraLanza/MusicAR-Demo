   
    function searchArtist(query){
        const url =`http://localhost:3000/search/events?artist=${query}`
        fetch(url)
            .then((response) => 
                
                response.json())
            .then((jsonData) => {
                console.log(jsonData)
            });
        };

        function searchCategory(query){
            const url =`http://localhost:3000/search/events?category=${query}`
            fetch(url)
                .then((response) => 
                    response.json())
                .then((jsonData) => {
                    console.log(jsonData)
                });
            };


            function searchPlace(query){
                const url =`http://localhost:3000/search/events?place=${query}`
                fetch(url)
                    .then((response) => 
                        response.json())
                    .then((jsonData) => {
                        console.log(jsonData)
                    });
                };
window.onload = () => {
  const form = document.querySelector('form'); 
  const artist =  document.getElementById('search-artist');
  const category = document.getElementById('category_id');
  const place = document.getElementById('event-place');

    form.addEventListener('submit', event => {
        searchCategory(event.target.value)
        searchArtist(event.target.value)
        searchPlace(event.target.value)

        console.log( searchCategory(event.target.value))
    });

    // category.addEventListener('change', event =>{
    //     searchCategory(event.target.value)
    // });

    // artist.addEventListener('keyup', event => {
    //     searchArtist(event.target.value)
    // });

    // place.addEventListener('keyup', event => {
    //     searchPlace(event.target.value)
    // });
}