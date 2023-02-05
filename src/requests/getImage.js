import axios from 'axios';

const getImage = (query) => {
    if (!query) {
        return Promise.resolve([]);
    } else {
        return axios
        .get(`https://images-api.nasa.gov/search?q=${query}`)
        .then((response) => {
            const imageResults = response.data.collection.items;
            const parsedImages = imageResults.filter(media => 
                media.data[0].media_type === 'image');
            const images = parsedImages.map(image => image.links[0].href);
            return images;
        })
        .catch((error) => {
            console.log(error);
        });
    }
};

export default getImage;