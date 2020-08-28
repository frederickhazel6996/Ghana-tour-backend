const Route = require('express').Router();

Route.get('/', async function (req, res) {
    let beach = [
        {
            name: 'Ada Safari Resort Limited',
            image_url:
                'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/ada/a.JPG',
            extra_image_url:
                'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/ada/b.JPG',
            extra1_image_url:
                'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/ada/c.JPG',
            extra2_image_url:
                'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/ada/d.JPG',
            short_name: 'Ada Safari',
            place: 'Ada',
            address: 'P.O. Box AF32, Big Ada, Ada Foah, Accra',
            lat: 5.827354,
            lon: 0.613375,
            pricing: 660,
            rating: '4.5',
            contact: '024 320 0283',
            Website_url: 0,
            amenities: ['free Wi-Fi', 'free parking']
        },
        {
            name: 'Sogakope Beach Resort',
            image_url:
                'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/sogakope/a.JPG',
            extra_image_url:
                'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/sogakope/b.JPG',
            extra1_image_url:
                'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/sogakope/c.JPG',
            extra2_image_url:
                'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/sogakope/d.JPG',
            short_name: 'Sogakope Beach ',
            place: 'Sogakope',
            address: 'Sogakope',
            lat: 5.966339,
            lon: 0.618221,
            pricing: 0,
            rating: '4',
            contact: '036 219 6320',
            Website_url: 'www.sogakopebeach.com',
            amenities: ['free parking', 'free wifi']
        },
        {
            name: 'Coconut Grove Beach Resort',
            image_url:
                'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/coconut/a.JPG',
            extra_image_url:
                'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/coconut/b.JPG',
            extra1_image_url:
                'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/coconut/c.JPG',
            extra2_image_url:
                'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/coconut/d.JPG',
            short_name: 'Coconut Grove',
            place: 'Elmina',
            address: 'Mmoframa Akyinim, Elmina',
            lat: 5.07844,
            lon: -1.370874,
            pricing: '1014',
            rating: '4',
            contact: '024 433 3001',
            Website_url: 'www.coconutgrovehotelsghana.com',
            amenities: ['pool', 'free wifi']
        }
    ];
    res.status(200).send(beach);
});

module.exports = Route;
