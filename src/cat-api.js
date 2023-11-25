import axios from "axios";

axios.defaults.headers.common["x-api-key"] = "live_OVlKLYt6fHZ3QN25vYrhHQ201FNyMPqHO89IYO3FW0HmkTjkCF3B3wNmRRd3IQ0k";

function fetchBreeds() {
    return axios.get('https://api.thecatapi.com/v1/breeds');
}

function fetchCatByBreed(breedId) {
    return axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`);
}

export { fetchBreeds, fetchCatByBreed };