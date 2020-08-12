const Route = require('express').Router();

Route.get('/', async function (req, res) {
    let heritage = [
        {
            name: 'Larabanga',
            image_url: 'assets/images/a1.jpg',
            rating: '4.5'
        },
        {
            name: 'Larabanga',
            image_url: 'assets/images/a1.jpg',
            rating: '4.5'
        },
        {
            name: 'Larabanga',
            image_url: 'assets/images/a1.jpg',
            rating: '4.5'
        }
    ];
    res.status(200).send(heritage);
});

module.exports = Route;
