import axios from "axios";

const refs = {
    breedSelect: document.querySelector('.breed-select'),
    catInfo: document.querySelector('.cat-info'),
    prettyLoader: document.querySelector('.pretty-loader')
}

refs.prettyLoader.classList.toggle("visually-hidden");
refs.breedSelect.classList.toggle("visually-hidden");

axios.defaults.headers.common["x-api-key"] = "live_OVlKLYt6fHZ3QN25vYrhHQ201FNyMPqHO89IYO3FW0HmkTjkCF3B3wNmRRd3IQ0k";

function fetchBreeds() {
    refs.prettyLoader.classList.toggle("visually-hidden");

    return axios.get('https://api.thecatapi.com/v1/breeds');
}

function fetchCatByBreed(breedId) {
    refs.prettyLoader.classList.toggle("visually-hidden");
    refs.catInfo.classList.toggle("visually-hidden");

    return axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`);
}

export { fetchBreeds, fetchCatByBreed, refs };