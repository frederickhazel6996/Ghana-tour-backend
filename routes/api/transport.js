const Route = require('express').Router();

Route.get('/', async function (req, res) {
    let transport = [
        {
            name: 'STC',
            image_url:
                'https://stc.gov.gh/wp-content/uploads/2017/08/stc-main-logo.jpg',
            about: 'stc is a good company',
            websiteUrl: 'url',
            extraImage1: 'url',
            extraImage2: 'url',
            rates: 'differ',
            ratings: 4.5
        },
        {
            name: 'AWA',
            image_url:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR6lbszF5Gp5sk0YQKYxUdRGcifErdHEgITew&usqp=CAU',
            about: 'AWA is a good company',
            websiteUrl: 'url',
            extraImage1: 'url',
            extraImage2: 'url',
            rates: 'differ',
            ratings: 5
        },
        {
            name: 'Passion Air',
            image_url: 'https://cdn.jetphotos.com/400/6/43022_1550091376.jpg',
            about: 'Passion is a good company',
            websiteUrl: 'https://cdn.jetphotos.com/400/6/43022_1550091376.jpg',
            extraImage1: 'url',
            extraImage2: 'url',
            rates: 'differ',
            ratings: 5
        },
        {
            name: 'Uber',
            image_url: 'https://cdn.jetphotos.com/400/6/43022_1550091376.jpg',
            about: 'Uber is a good company',
            websiteUrl: 'url',
            extraImage1: 'url',
            extraImage2: 'url',
            rates: 'differ',
            ratings: 4
        },
        {
            name: 'Bolt',
            image_url: 'https://cdn.jetphotos.com/400/6/43022_1550091376.jpg',
            about: 'Bolt is a good company',
            websiteUrl: 'url',
            extraImage1: 'url',
            extraImage2: 'url',
            rates: 'differ',
            ratings: 4
        },
        {
            name: 'Taxi',
            image_url: 'https://cdn.jetphotos.com/400/6/43022_1550091376.jpg',
            about: 'Taxi is a good company',
            websiteUrl: 'url',
            extraImage1: 'url',
            extraImage2: 'url',
            rates: 'differ',
            ratings: 3
        },
        {
            name: 'Trotro',
            image_url: 'https://cdn.jetphotos.com/400/6/43022_1550091376.jpg',
            about: 'Trotro is a good company',
            websiteUrl: 'url',
            extraImage1: 'url',
            extraImage2: 'url',
            rates: 'differ',
            ratings: 2.5
        }
    ];
    res.status(200).send(transport);
});

module.exports = Route;
