const Route = require('express').Router();

Route.get('/', async function (req, res) {
    let beach = [
        {
            name: 'King Beach',
            image_url: 'assets/images/o.jpg',
            rating: '4.5'
        },
        {
            name: 'Queen Beach',
            image_url: 'assets/images/o.jpg',
            rating: '4'
        },
        {
            name: 'Palace Beach',
            image_url: 'assets/images/o.jpg',
            rating: '5'
        }
    ];
    res.status(200).send(beach);
});

module.exports = Route;
