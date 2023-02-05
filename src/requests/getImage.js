import axios from 'axios';

const getImage = (query) => {
    if (!query) {
        return Promise.resolve([]);
    } else {
        console.log('Hello!');
        return axios
        .get(`https://images-api.nasa.gov/search?q=${query}`)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
    }
};

export default getImage;