const Route = require('express').Router();

Route.get('/', async function (req, res) {
    let transport = [
        {
            name: 'STC (State Transport Corporation)',
            image_url: 'url',
            about: 'stc is a good company',
            websiteUrl: 'url',
            extraImage1: 'url',
            extraImage2: 'url',
            rates: 'differ'
        },
        {
            name: 'AWA (African World Airline)',
            image_url: 'url',
            about: 'AWA is a good company',
            websiteUrl: 'url',
            extraImage1: 'url',
            extraImage2: 'url',
            rates: 'differ'
        },
        {
            name: 'Passion Air',
            image_url: 'url',
            about: 'Passion is a good company',
            websiteUrl: 'url',
            extraImage1: 'url',
            extraImage2: 'url',
            rates: 'differ'
        },
        {
            name: 'Uber',
            image_url: 'url',
            about: 'Uber is a good company',
            websiteUrl: 'url',
            extraImage1: 'url',
            extraImage2: 'url',
            rates: 'differ'
        },
        {
            name: 'Bolt',
            image_url: 'url',
            about: 'Bolt is a good company',
            websiteUrl: 'url',
            extraImage1: 'url',
            extraImage2: 'url',
            rates: 'differ'
        },
        {
            name: 'Taxi',
            image_url: 'url',
            about: 'Taxi is a good company',
            websiteUrl: 'url',
            extraImage1: 'url',
            extraImage2: 'url',
            rates: 'differ'
        },
        {
            name: 'Trotro',
            image_url: 'url',
            about: 'Trotro is a good company',
            websiteUrl: 'url',
            extraImage1: 'url',
            extraImage2: 'url',
            rates: 'differ'
        }
    ];
    res.status(200).send(transport);
});

module.exports = Route;
