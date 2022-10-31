
function searchArtist(query) {
    const url = `http://localhost:3000/search/events?artist=${query}`
    fetch(url)
        .then((response) =>

            response.json())
        .then((jsonData) => {
            const results = jsonData.data;
            renderResults(results);

        });
};

function searchCategory(query) {
    const url = `http://localhost:3000/search/events?category=${query}`
    fetch(url)
        .then((response) =>
            response.json())
        .then((jsonData) => {
            const results = jsonData.data;
            renderResults(results);
        });
};


function searchPlace(query) {
    const url = `http://localhost:3000/search/events?place=${query}`
    fetch(url)
        .then((response) =>
            response.json())
        .then((jsonData) => {
            const results = jsonData.data;
            renderResults(results);
        });
}; 

// function searchDate(query) {
//     const url = `http://localhost:3000/search/events?date=${query}`
//     fetch(url)
//         .then((response) =>
//             response.json())
//         .then((jsonData) => {
//             const results = jsonData.data;
//             renderResults(results);
//         });
// }

const resultsContainer = document.querySelector('#results-container');
const eventThumb = document.querySelector('#results-thumb');
const eventThumbImg = document.querySelector('#event-thumb-img');
const eventThumbLink = document.querySelector('#event-thumb-link');
const eventThumbTitle = document.querySelector('#event-thumb-title');
const eventThumbSubtitle = document.querySelector('#event-thumb-subtitle');
const eventThumbDate = document.querySelector('#event-thumb-date');
const eventThumbPrice = document.querySelector('#event-thumb-price');
const eventThumbPlace = document.querySelector('#event-thumb-place');

const createThumbEvent = (element) => {
    eventThumbTitle.innerHTML = element.artist;
    eventThumbSubtitle.innerHTML = element.subtitle;
    eventThumbImg.setAttribute('src', `/image/products/${element.imageEvent}`);
    eventThumbLink.setAttribute('href', `/products/detail/${element.id}`);

    // eventThumbDate.innerHTML = element.artist;
    // eventThumbPrice.innerHTML = element.artist;
    // eventThumbPlace.innerHTML = element.artist;
};

function renderResults(results) {
    resultsContainer.innerHTML = '';    
    resultsContainer.classList.remove("hidden");
    const searchEvents = document.getElementById('result-events');
    console.log(results)
    results.forEach(element => {   
        createThumbEvent(element)
        const cloneThumb = eventThumb.cloneNode(true)
        resultsContainer.appendChild(cloneThumb)
    });
    
};


window.onload = () => {
    const form = document.querySelector('form');
    const artist = document.getElementById('search-artist');
    const category = document.getElementById('category_id');
    const place = document.getElementById('teater_id');
    const date = document.getElementById('event-date');
    const btnSearch = document.getElementById('searchBtn')

    // form.addEventListener('submit', event => {
    //     searchCategory(category.value)
    //     searchArtist(artist.value)
    //     searchPlace(place.value)

    //     
    // });

    btnSearch.addEventListener('click', event => {
        // searchCategory(category.value)
        if(artist.value != ""){
            searchArtist(artist.value)
        }
        // searchPlace(place.value)
        
    });

    // category.addEventListener('change', event => {
    //     searchCategory(event.target.value)
    // });

    // artist.addEventListener('keyup', event => {
    //     if(event.target.value){
    //         resultsContainer.innerHTML = '';
    //     }
    //     searchArtist(event.target.value);

    // });

    // place.addEventListener('change', event => {
    //     searchPlace(event.target.value)
    // });

    // date.addEventListener('change', event => {
    //     searchPlace(event.target.value)
    // });
}