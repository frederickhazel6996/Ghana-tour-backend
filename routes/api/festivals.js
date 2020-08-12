const Route = require('express').Router();

Route.get('/', async function (req, res) {
    let festivals = [
        {
            name: 'Homowo',
            place: 'Accra',
            image_url:
                'https://dailyguidenetwork.com/wp-content/uploads/2019/08/homowo-festivals-620x406.jpg',
            about:
                'Homowo is a harvest festival celebrated by the Ga-Adangbe people of Ghana. The festival starts in the month of May with the planting of crops (mainly maize and yam) before the rainy season starts. During the festival, they perform a dance called Kpanlogo. The Ga people celebrate Homowo in the remembrance of the famine that once happened in their history in precolonial Ghana.',

            extraImage1: 'url',
            extraImage2: 'url',
            dates: '21st'
        },
        {
            name: 'Fetu Afahye',
            place: 'Cape Coast',
            image_url:
                'https://dailyguidenetwork.com/wp-content/uploads/2019/08/homowo-festivals-620x406.jpg',
            about: 'Afahye is good',

            extraImage1: 'url',
            extraImage2: 'url',
            dates: '21st'
        },
        {
            name: 'Hogbetsotso',
            place: 'Ho',
            image_url:
                'https://dailyguidenetwork.com/wp-content/uploads/2019/08/homowo-festivals-620x406.jpg',
            about: 'Afahye is good',

            extraImage1: 'url',
            extraImage2: 'url',
            dates: '21st'
        }
    ];
    res.status(200).send(festivals);
});

module.exports = Route;
