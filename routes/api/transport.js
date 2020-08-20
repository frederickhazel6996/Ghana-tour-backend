const Route = require('express').Router();

Route.get('/', async function (req, res) {
    let transport = [
        {
            name: 'STC',
            image_url:
                'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/transport/stc.jpg',
            routes_extra:
                'Intercity STC plies mostly regional capitals in Ghana including',
            local_routes: [
                'Accra',
                'Tamale',
                'Wa',
                'Kumasi',
                'Sunyani',
                'Takoradi',
                'Cape Coast',
                'Bolgatanga',
                'Paga'
            ],
            type: 'bus',
            international_routes: ['Ouagadougou', 'Abidjan', 'Lome'],
            about:
                'Intercity STC Coaches Limited, formerly known as STC (State Transport Corporation) and Vanef STC, is a Ghanaian joint state and privately-owned transport company which operates, transport services, courier services, driver training as well as vehicle valuation, Vehicle testing, and maintenance.Intercity STC plies mostly regional capitals in Ghana and some West African countries.',
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
            local_routes: [
                'Accra (Ghana)',
                'Kumasi (Ghana)',
                'Takoradi (Ghana)',
                'Tamale (Ghana)',
                'Wa (Ghana)'
            ],
            international_routes: [
                'Monrovia (Liberia)',
                'Abuja (Nigeria)',
                'Abidjan (Ivory Coast)',
                'Lagos(Nigeria)',
                'Freetown(Sierra Leone)'
            ],
            type: 'plane',
            image_url:
                'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/transport/awa.jpg',
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
            local_routes: ['Accra (Ghana)', 'Kumasi (Ghana)', 'Tamale (Ghana)'],
            international_routes: [],
            image_url:
                'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/transport/passion.jpg',
            about:
                'PassionAir is a domestic airline of Ghana with its head office in Accra, Ghana, and its main hub at Kotoka International Airport in Accra. It is the largest airline in Ghana based upon single aircraft passenger seating capacity.',
            websiteUrl: 'https://flypassionair.com/',
            extraImage1: 'url',
            extraImage2: 'url',
            rates: 'differ',
            ratings: '5.0',
            type: 'plane'
        },
        {
            name: 'Uber',
            local_routes: ['Within Accra', 'Within Kumasi', 'within Takoradi'],
            international_routes: [],
            image_url:
                'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/transport/passion.jpg',
            about:
                'Uber Technologies, Inc., commonly known as Uber, is an American multinational ride-hailing company offering services that include peer-to-peer ridesharing, ride service hailing, food delivery (Uber Eats), and a micromobility system with electric bikes and scooters. The company is based in San Francisco and has operations in over 785 metropolitan areas worldwide.Its platforms can be accessed via its websites and mobile apps.',
            websiteUrl: 'https://www.uber.com/gh/en/',
            extraImage1: 'url',
            extraImage2: 'url',
            type: 'car',
            rates: 'differ',
            ratings: '4.0'
        },
        {
            name: 'Bolt',
            type: 'car',
            local_routes: ['Within Accra', 'Within Kumasi', 'within Takoradi'],
            international_routes: [],
            image_url:
                'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/bolt.jpeg',
            about: 'Bolt is a popular Ride hailing service',
            websiteUrl: 'https://bolt.eu/en-gh/',
            extraImage1: 'url',
            extraImage2: 'url',
            rates: 'differ',
            ratings: '3.8'
        },
        {
            name: 'Taxi',
            type: 'car',
            local_routes: ['Throughout the contry'],
            international_routes: [],
            image_url:
                'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/taxi.jpg',
            about: `Taxi's are small commercial vehicles that transport people within cities and towns`,
            websiteUrl: [],
            extraImage1: 'url',
            extraImage2: 'url',
            rates: 'differ',
            ratings: '3.5'
        },
        {
            name: 'Trotro',
            local_routes: ['Throughout the contry'],
            international_routes: [],
            type: 'bus',
            image_url:
                'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/transport/trotro.jpg',
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
