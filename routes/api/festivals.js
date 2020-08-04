const Route = require('express').Router();

Route.get('/', async function (req, res) {
    let festivals = [
        {
            name: 'Homowo',
            place: 'Accra',
            image_url:
                'https://dailyguidenetwork.com/wp-content/uploads/2019/08/homowo-festivals-620x406.jpg',
            about: 'Homowo is good',

            extraImage1: 'url',
            extraImage2: 'url',
            dates: '21st',
            type: 'Main'
        },
        {
            name: 'Fetu Afahye',
            place: 'Cape Coast',
            image_url:
                'https://dailyguidenetwork.com/wp-content/uploads/2019/08/homowo-festivals-620x406.jpg',
            about: 'Afahye is good',

            extraImage1: 'url',
            extraImage2: 'url',
            dates: '21st',
            type: 'Main'
        },
        {
            name: 'Hogbetsotso',
            place: 'Ho',
            image_url:
                'https://dailyguidenetwork.com/wp-content/uploads/2019/08/homowo-festivals-620x406.jpg',
            about: 'Afahye is good',

            extraImage1: 'url',
            extraImage2: 'url',
            dates: '21st',
            type: 'Main'
        }
    ];
    res.status(200).send(festivals);
});

module.exports = Route;
