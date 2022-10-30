
function searchArtist(query) {
    const url = `http://localhost:3000/search/events?artist=${query}`
    fetch(url)
        .then((response) =>

            response.json())
        .then((jsonData) => {
            const results = jsonData.map(element => element);
            renderResults(results);

        });
};

function searchCategory(query) {
    const url = `http://localhost:3000/search/events?category=${query}`
    fetch(url)
        .then((response) =>
            response.json())
        .then((jsonData) => {
            const results = jsonData.map(element => element);
            renderResults(results);
        });
};


function searchPlace(query) {
    const url = `http://localhost:3000/search/events?place=${query}`
    fetch(url)
        .then((response) =>
            response.json())
        .then((jsonData) => {
            const results = jsonData.map(element => element);
            renderResults(results);
        });
};

function searchDate(query) {
    const url = `http://localhost:3000/search/events?date=${query}`
    fetch(url)
        .then((response) =>
            response.json())
        .then((jsonData) => {
            const results = jsonData.map(element => element);
            renderResults(results);
        });
}

function renderResults(results) {
    const searchEvents = document.getElementById('result-events');
    results.forEach(result => {
        const elemnt
    })
}

window.onload = () => {
    const form = document.querySelector('form');
    const artist = document.getElementById('search-artist');
    const category = document.getElementById('category_id');
    const place = document.getElementById('teater_id');
    const date = document.getElementById('event-date');

    // form.addEventListener('submit', event => {
    //     searchCategory(category.value)
    //     searchArtist(artist.value)
    //     searchPlace(place.value)

    //     
    // });

    category.addEventListener('change', event => {
        searchCategory(event.target.value)
    });

    artist.addEventListener('keyup', event => {
        searchArtist(event.target.value)
    });

    place.addEventListener('change', event => {
        searchPlace(event.target.value)
    });

    date.addEventListener('change', event => {
        searchPlace(event.target.value)
    });
}