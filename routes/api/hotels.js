const Route = require('express').Router();

Route.get('/', async function (req, res) {
    let greaterAccra = {
        region: 'Greater Accra',
        image_url: 'assets/images/o.jpg',
        regional_capital: 'Accra',
        hotels: [
            {
                name: 'Kempinski Hotel Gold Coast City-',
                image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/kempinski/a.JPG',
                extra_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/kempinski/b.JPG',
                extra1_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/kempinski/c.JPG',
                extra2_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/kempinski/d.JPG',
                short_name: 'kempinski',
                place: 'Accra',
                address: 'Ministries PMB, 66 Gamel Abdul Naseer Ave, Accra',
                lat: 5.55439,
                lon: -0.198433,
                pricing: 1661,
                rating: '5',
                contact: '024 243 6000',
                Website_url: 'www.kempinski.com',
                amenities: ['pool', 'spa', 'free wifi']
            },
            {
                name: 'Ibis Styles Accra Airport Hotel',
                image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/ibis/a.JPG',
                extra_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/ibis/b.JPG',
                extra1_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/ibis/c.JPG',
                extra2_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/ibis/d.JPG',
                short_name: 'Ibis Styles',
                place: 'Accra',
                address: 'Plot 24, Airport City Area, Airport City Enclave',
                lat: 5.60163,
                lon: -0.177903,
                pricing: 619,
                rating: '4.2',
                contact: '030 274 6600',
                Website_url: 0,
                amenities: ['pool', 'spa', 'free parking', 'free wifi']
            },
            {
                name: 'Best Western Plus Accra Beach Hotel',
                image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/best/a.JPG',
                extra_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/best/b.JPG',
                extra1_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/best/c.JPG',
                extra2_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/ibis/d.JPG',
                short_name: 'Best Western',
                place: 'Accra',
                address: 'Nungua 51 Beach Drive',
                lat: 5.59736,
                lon: -0.069857,
                pricing: 763,
                rating: '4.2',
                contact: '+233 54 832 5184',
                Website_url: 'www.bestwesternplusaccra.com',
                amenities: ['pool', 'free Wi-Fi', 'free parking', 'restaurant']
            },
            {
                name: 'Maple Leaf Hotel',
                image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/maple/a.JPG',
                extra_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/maple/b.JPG',
                extra1_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/maple/c.JPG',
                extra2_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/maple/d.JPG',
                short_name: 'Maple Leaf',
                place: 'Accra',
                address: 'Obodoi Street, New Achimota, Accra',
                lat: 5.625829,
                lon: -0.23953,
                pricing: 120,
                rating: '3.5',
                contact: '020 594 3802',
                Website_url: 0,
                amenities: ['free Wi-Fi', 'free parking']
            },
            {
                name: 'Golden Tulip Accra',
                image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/tulip/a.JPG',
                extra_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/tulip/b.JPG',
                extra1_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/tulip/c.JPG',
                extra2_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/tulip/d.JPG',
                short_name: 'Golden Tulip',
                place: 'Accra',
                address: 'Liberation road, Accra ',
                lat: 5.593643,
                lon: -0.180777,
                pricing: 608,
                rating: '4.5',
                contact: '030 221 3161',
                Website_url: 'www.accra.goldentulip.com',
                amenities: ['free Wi-Fi', 'free parking', 'pool', 'spa']
            },

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
                short_name: 'Accra City',
                place: 'Accra',
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
                name: 'Holiday Inn Accra Airport',
                image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/holiday/a.JPG',
                extra_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/holiday/b.JPG',
                extra1_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/holiday/c.JPG',
                extra2_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/holiday/d.JPG',
                short_name: 'Holiday inn',
                place: 'Accra',
                address:
                    'Pmb Ct 97, Cantonment, 19-20 Airport Bypass Rd, Accra',
                lat: 5.600593,
                lon: -0.176295,
                pricing: 0,
                rating: '4',
                contact: '030 274 0930',
                Website_url: 'www.ihg.com',
                amenities: ['free Wi-Fi', 'free parking']
            },
            {
                name: 'Cocktail and Dreams Hotel',
                image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/cocktail/a.JPG',
                extra_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/cocktail/b.JPG',
                extra1_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/cocktail/c.JPG',
                extra2_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/cocktail/d.JPG',
                short_name: 'Cocktail',
                place: 'Accra',
                address: 'Naijoe Street, Accra',
                lat: 5.58253,
                lon: -0.139574,
                pricing: 365,
                rating: '4',
                contact: '056 000 2555',
                Website_url: 0,
                amenities: ['free Wi-Fi', 'free parking']
            }
        ]
    };

    res.status(200).send(greaterAccra);
});

module.exports = Route;
