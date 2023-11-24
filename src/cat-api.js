import { fetchBreeds, fetchCatByBreed, refs } from './index';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

fetchBreeds().then(({data}) => {
    const str = data.map(({ name, id }) => `<option value="${id}">${name}</option>`).join('');
    refs.breedSelect.insertAdjacentHTML('beforeend', str);

    refs.prettyLoader.classList.toggle("visually-hidden");
    refs.breedSelect.classList.toggle("visually-hidden");
}).catch((err) => {
    Notify.failure('Oops! Something went wrong! Try reloading the page!');
    refs.prettyLoader.classList.toggle("visually-hidden");
})

refs.breedSelect.addEventListener('change', e => {
    const breedId = e.target.value;

    fetchCatByBreed(breedId).then(({ data }) => {
        const { breeds, url } = data[0];
        const { description, name, temperament } = breeds[0];

        const str =
            `<img src="${url}" alt="${name}" width="550px" heigth=""/>
            <div>
                <h1 class="header">${name}</h1>
                <p>${description}</p>
                <p><b class="header">Temperament:</b> ${temperament}</p>
            </div>`
        refs.catInfo.innerHTML = str;

        refs.prettyLoader.classList.toggle("visually-hidden");
        refs.catInfo.classList.toggle("visually-hidden");
    }).catch((err) => {
        Notify.failure('Oops! Something went wrong! Try reloading the page!');
        refs.prettyLoader.classList.toggle("visually-hidden");
    })
})