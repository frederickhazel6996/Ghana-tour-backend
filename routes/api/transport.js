const Route = require('express').Router();

Route.get('/', async function (req, res) {
    let transport = [
        {
            name: 'STC',
            image_url:
                'https://stc.gov.gh/wp-content/uploads/2017/08/stc-main-logo.jpg',
            routes: [
                'Intercity STC plies mostly regional capitals in Ghana including, Kumasi, Sunyani, Takoradi, Cape Coast, Bolgatanga and some few major towns or district capitals like Paga, Dormaa Ahenkro and Tarkwa. It also operates International services to some major cities in neighboring countries like Ouagadougou in Burkina Faso, Abidjan in Ivory Coast and Lomé in Togo. Plans were also in place to extend services to Niamey in Niger.'
            ],
            about:
                'Intercity STC Coaches Limited, formerly known as STC (State Transport Corporation) and Vanef STC, is a Ghanaian joint state and privately-owned transport company which operates, transport services, courier services, driver training as well as vehicle valuation, Vehicle testing, and maintenance.Intercity STC plies mostly regional capitals in Ghana including, Kumasi, Sunyani, Takoradi, Cape Coast, Bolgatanga and some few major towns or district capitals like Paga, Dormaa Ahenkro and Tarkwa. It also operates International services to some major cities in neighboring countries like Ouagadougou in Burkina Faso, Abidjan in Ivory Coast and Lomé in Togo. Plans were also in place to extend services to Niamey in Niger.',
            websiteUrl: 'https://stc.gov.gh/',
            extraImage1:
                'https://stc.gov.gh/wp-content/uploads/2017/08/stc-main-logo.jpg',
            extraImage2:
                'https://stc.gov.gh/wp-content/uploads/2017/08/stc-main-logo.jpg',
            rates: 'differ',
            ratings: '4.5'
        },
        {
            name: 'AWA',
            routes: [
                'Abidjan (Ivory Coast)',
                'Accra (Ghana)',
                'Kumasi (Ghana)',
                'Takoradi (Ghana)',
                'Tamale (Ghana)',
                'Wa (Ghana)',
                'Monrovia (Liberia)',
                'Abuja (Nigeria)',
                'Lagos(Nigeria)',
                'Freetown(Sierra Leone)'
            ],
            image_url:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR6lbszF5Gp5sk0YQKYxUdRGcifErdHEgITew&usqp=CAU',
            about:
                'Africa World Airlines Limited (AWA) is a Ghanaian airline company with its head office in Accra, Ghana and its main hub at Kotoka International Airport in Accra.',
            websiteUrl: 'https://www.flyafricaworld.com/',
            extraImage1: 'url',
            extraImage2: 'url',
            rates: 'differ',
            ratings: '5.0'
        },
        {
            name: 'Passion Air',
            routes: ['Accra (Ghana)', 'Kumasi (Ghana)', 'Tamale (Ghana)'],
            image_url: 'https://cdn.jetphotos.com/400/6/43022_1550091376.jpg',
            about:
                'PassionAir is a domestic airline of Ghana with its head office in Accra, Ghana, and its main hub at Kotoka International Airport in Accra. It is the largest airline in Ghana based upon single aircraft passenger seating capacity.',
            websiteUrl: 'https://flypassionair.com/',
            extraImage1: 'url',
            extraImage2: 'url',
            rates: 'differ',
            ratings: '5.0'
        },
        {
            name: 'Uber',
            routes: [],
            image_url: 'https://cdn.jetphotos.com/400/6/43022_1550091376.jpg',
            about:
                'Uber Technologies, Inc., commonly known as Uber, is an American multinational ride-hailing company offering services that include peer-to-peer ridesharing, ride service hailing, food delivery (Uber Eats), and a micromobility system with electric bikes and scooters. The company is based in San Francisco and has operations in over 785 metropolitan areas worldwide.Its platforms can be accessed via its websites and mobile apps.',
            websiteUrl: 'https://www.uber.com/gh/en/',
            extraImage1: 'url',
            extraImage2: 'url',
            rates: 'differ',
            ratings: '4.0'
        },
        {
            name: 'Bolt',
            image_url: 'https://cdn.jetphotos.com/400/6/43022_1550091376.jpg',
            about: 'Bolt is a popular Ride hailing service',
            websiteUrl: 'https://bolt.eu/en-gh/',
            extraImage1: 'url',
            extraImage2: 'url',
            rates: 'differ',
            ratings: '3.8'
        },
        {
            name: 'Taxi',
            image_url: 'https://cdn.jetphotos.com/400/6/43022_1550091376.jpg',
            about: `Taxi's are small commercial vehicles that transport people within cities and towns`,
            websiteUrl: [],
            extraImage1: 'url',
            extraImage2: 'url',
            rates: 'differ',
            ratings: '3.5'
        },
        {
            name: 'Trotro',
            image_url: 'https://cdn.jetphotos.com/400/6/43022_1550091376.jpg',
            about: `Trotro's are commercial mini van's that transport people within cities and towns`,
            websiteUrl: 'url',
            extraImage1: 'url',
            extraImage2: 'url',
            rates: 'differ',
            ratings: '2.5'
        }
    ];
    res.status(200).send(transport);
});

module.exports = Route;
