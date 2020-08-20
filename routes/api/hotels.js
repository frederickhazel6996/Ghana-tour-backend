const Route = require('express').Router();

Route.get('/', async function (req, res) {
    const { choose } = req.query;
    let western = {
        region: 'Western',
        image_url: 'assets/images/o.jpg',
        regional_capital: 'Takoradi',
        hotels: [
            {
                name: 'Best Western Plus Atlantic Hotel',
                image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/bestwestern/a.JPG',
                extra_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/bestwestern/b.JPG',
                extra1_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/bestwestern/c.JPG',
                extra2_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/bestwestern/d.JPG',
                short_name: 'Best Western',
                place: 'Takoradi',
                address: 'Beach Road Area, DTD, Takoradi',
                lat: 4.881915,
                lon: -1.744109,
                pricing: 746,
                rating: '4',
                contact: '031 200 2700',
                Website_url: 'www.atlantichoteltakoradi.com',
                amenities: ['free parking', 'free breakfast', 'pool']
            },

            {
                name: 'Axim beach Hotel',
                image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/axim/a.JPG',
                extra_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/axim/b.JPG',
                extra1_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/axim/c.JPG',
                extra2_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/axim/d.JPG',
                short_name: 'Axim Beach',
                place: 'Axim',
                address: 'Axim',
                lat: 4.850956,
                lon: -2.234252,
                pricing: 'call or visit website for rates',
                rating: '4',
                contact: '031 209 2397',
                Website_url: 'www.aximbeach.com',
                amenities: ['pool', 'free wifi']
            }
        ]
    };
    let central = {
        region: 'Central',
        image_url: 'assets/images/o.jpg',
        regional_capital: 'Cape Coast',
        hotels: [
            {
                name: 'Ridge Royal Hotel',
                image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/ridgeroyal/a.JPG',
                extra_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/ridgeroyal/b.JPG',
                extra1_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/ridgeroyal/c.JPG',
                extra2_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/ridgeroyal/d.JPG',
                short_name: 'Ridge Royal',
                place: 'Cape Coast',
                address: 'Residential Rd, No.1 Second Ridge, Cape Coast',
                lat: 5.123035,
                lon: -1.251561,
                pricing: 955,
                rating: '4',
                contact: '031 200 3222',
                Website_url: 'www.ridgeroyalhotel.com',
                amenities: ['free parking', 'free wifi', 'pool']
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
                short_name: 'Coconut Grove Beach',
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
        ]
    };

    let volta = {
        region: 'Volta',
        image_url: 'assets/images/o.jpg',
        regional_capital: 'Ho',
        hotels: [
            {
                name: 'Volta Serene Hotel',
                image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/serene/a.JPG',
                extra_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/serene/b.JPG',
                extra1_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/serene/c.JPG',
                extra2_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/serene/d.JPG',
                short_name: 'Volta Serene',
                place: 'Ho',
                address: 'Kabakaba Hills, Ho',
                lat: 6.615083,
                lon: 0.454743,
                pricing: 720,
                rating: '4',
                contact: '036 202 5243',
                Website_url: 'www.voltaserenehotel.com',
                amenities: ['free parking', 'free wifi', 'pool']
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
                pricing: 'call for rates',
                rating: '4',
                contact: '036 219 6320',
                Website_url: 'www.sogakopebeach.com',
                amenities: ['free parking', 'free wifi']
            }
        ]
    };

    let eastern = {
        region: 'Eastern',
        image_url: 'assets/images/o.jpg',
        regional_capital: 'Koforidua',
        hotels: [
            {
                name: 'The Royal Senchi Resort',
                image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/senchi/a.JPG',
                extra_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/senchi/b.JPG',
                extra1_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/senchi/c.JPG',
                extra2_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/senchi/d.JPG',
                short_name: 'Royal Senchi',
                place: 'Akosombo',
                address: 'Senchi Ferry Road, Akosombo',
                lat: 6.21992,
                lon: 0.089136,
                pricing: 940,
                rating: '4.5',
                contact: '030 340 9170',
                Website_url: 'www.theroyalsenchi.com',
                amenities: ['free parking', 'free wifi', 'pool', 'spa']
            },
            {
                name: 'Peduase Valley Resort',
                image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/peduase/a.JPG',
                extra_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/peduase/b.JPG',
                extra1_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/peduase/c.JPG',
                extra2_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/peduase/d.JPG',
                short_name: 'Peduase Valley',
                place: 'Peduase ',
                address: 'Ankama Close, Peduase',
                lat: 5.808752,
                lon: -0.185898,
                pricing: 'Call or Visit site for rates',
                rating: '4.5',
                contact: '054 012 555',
                Website_url: 'www.peduase-valley-resort.com',
                amenities: ['free parking', 'free wifi', 'pool']
            },

            {
                name: 'The Float',
                image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/float/a.JPG',
                extra_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/float/b.JPG',
                extra1_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/float/c.JPG',
                extra2_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/float/d.JPG',
                short_name: 'The Float',
                place: 'Akosombo',
                address: '100 Marine Drive, Akosombo ',
                lat: 6.298622,
                lon: 0.031171,
                pricing: 'Call for Rates',
                rating: '3',
                contact: '020 210 9793',
                Website_url: 'www.thefloat.business.site',
                amenities: [
                    'free parking',
                    'free wifi',
                    'pool',
                    'free breakfast'
                ]
            },

            {
                name: 'Afrikiko River Front Resort',
                image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/afrikiko/a.JPG',
                extra_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/afrikiko/b.JPG',
                extra1_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/afrikiko/c.JPG',
                extra2_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/afrikiko/d.JPG',
                short_name: 'Afrikiko River Front',
                place: 'Akosombo',
                address: '100 Marine Drive, Akosombo ',
                lat: 6.26904,
                lon: 0.076278,
                pricing: 634,
                rating: '3',
                contact: '024 262 5624',
                Website_url: 'www.afrikikoresort.com',
                amenities: ['free parking', 'free wifi', 'pool']
            },
            {
                name: 'Hillburi',
                image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/hillburi/a.JPG',
                extra_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/hillburi/b.JPG',
                extra1_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/hillburi/c.JPG',
                extra2_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/hillburi/d.JPG',
                short_name: 'Hillburi',
                place: 'Aburi',
                address: 'Aburi',
                lat: 5.827953,
                lon: -0.184679,
                pricing: 'Call or Visit Website for rates',
                rating: '4',
                contact: '055 252 6303',
                Website_url: 'www.hillburi.com',
                amenities: ['free parking', 'free wifi', 'pool']
            }
        ]
    };
    let northern = {
        region: 'Northern',
        image_url: 'assets/images/o.jpg',
        regional_capital: 'Tamale',
        hotels: [
            {
                name: 'Zaina Lodge',
                image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/zaina/a.JPG',
                extra_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/zaina/b.JPG',
                extra1_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/zaina/c.JPG',
                extra2_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/zaina/d.JPG',
                short_name: 'Zaina Lodge',
                place: 'Tamale',
                address: '1 Yagbon Loop, Mole National Park, Tamale',
                lat: 9.296264,
                lon: -1.850046,
                pricing: 'call for rates',
                rating: '3',
                contact: '054 011 1506',
                Website_url: 'www.zainalodge-ghana.com',
                amenities: ['free parking', 'free wifi', 'pool']
            },

            {
                name: 'Jeyads Lodge',
                image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/jeyads/a.JPG',
                extra_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/jeyads/b.JPG',
                extra1_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/jeyads/c.JPG',
                extra2_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/dentis/d.JPG',
                short_name: 'Jeyads Lodge',
                place: 'Tamale',
                address:
                    '200 metres from the Vittin Police Barrier, Yendi-Salaga Rd, Tamale ',
                lat: 9.3817,
                lon: -0.795009,
                pricing: 297,
                rating: '3',
                contact: ' 055 255 9442',
                Website_url: 'www.jeyadslodge.com',
                amenities: ['free parking', 'free wifi']
            }
        ]
    };
    let upperEast = {
        region: 'Upper East',
        image_url: 'assets/images/o.jpg',
        regional_capital: 'Bolgatanga',
        hotels: [
            {
                name: 'Blue Sky Hotel',
                image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/bluesky/a.JPG',
                extra_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/bluesky/b.JPG',
                extra1_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/bluesky/c.JPG',
                extra2_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/bluesky/d.JPG',
                short_name: 'Blue Sky',
                place: 'Zuarungu',
                address: 'Bolgatanga-Zebilla Rd, Zuarungu',
                lat: 10.79201,
                lon: -0.812856,
                pricing: 135,
                rating: '3',
                contact: '020 638 2033',
                Website_url: 'www.blueskyhotelgh.com',
                amenities: ['free parking', 'free wifi', 'pool']
            },

            {
                name: 'Akayet Hotels LTD.',
                image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/akayet/a.JPG',
                extra_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/akayet/b.JPG',
                extra1_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/akayet/c.JPG',
                extra2_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/akayet/d.JPG',
                short_name: 'Akayet',
                place: 'Bolgatanga',
                address: 'BOlgatanga',
                lat: 10.810709,
                lon: -0.896597,
                pricing: 'call for rates',
                rating: '3',
                contact: '038 202 4680',
                Website_url: 'www.akayethotel.com',
                amenities: ['free parking', 'free wifi']
            }
        ]
    };
    let upperWest = {
        region: 'Upper West',
        image_url: 'assets/images/o.jpg',
        regional_capital: 'Wa',
        hotels: [
            {
                name: 'Royal Cosy Hills ',
                image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/cosy/a.JPG',
                extra_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/cosy/b.JPG',
                extra1_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/cosy/c.JPG',
                extra2_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/cosy/d.JPG',
                short_name: 'Royal Cosy Hills ',
                place: 'Jirapa',
                address: 'Jirapa ',
                lat: 10.524065,
                lon: -2.703274,
                pricing: '648',
                rating: '3',
                contact: '050 169 4286',
                Website_url: 'no',
                amenities: ['bar']
            },

            {
                name: 'Pelican Hotel',
                image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/dentis/a.JPG',
                extra_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/dentis/b.JPG',
                extra1_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/dentis/c.JPG',
                extra2_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/dentis/d.JPG',
                short_name: 'Pelican',
                place: 'Wa',
                address: 'Wa',
                lat: 10.038048,
                lon: -2.485025,
                pricing: 'call for rates',
                rating: '3',
                contact: '054 465 5699',
                Website_url: 'no',
                amenities: ['free parking', 'free wifi']
            }
        ]
    };
    let ahafo = {
        region: 'Ahafo',
        image_url: 'assets/images/o.jpg',
        regional_capital: 'Goaso',
        hotels: [
            {
                name: 'Hotel De Baps ',
                image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/baps/a.JPG',
                extra_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/baps/b.JPG',
                extra1_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/baps/c.JPG',
                extra2_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/baps/d.JPG',
                short_name: 'De Baps',
                place: 'Hwidiem',
                address: 'Tepa-Goaso Rd, Hwidiem',
                lat: 6.930826,
                lon: -2.363825,
                pricing: 'call for rates',
                rating: '0',
                contact: '050 279 4219',
                Website_url: 'no',
                amenities: ['bar']
            },

            {
                name: 'Sambra Hotel',
                image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/sambra/a.JPG',
                extra_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/sambra/b.JPG',
                extra1_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/sambra/c.JPG',
                extra2_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/sambra/d.JPG',
                short_name: 'Sambra',
                place: 'Hwidiem',
                address: 'Tepa-Goaso Rd, Hwidiem',
                lat: 6.927916,
                lon: -2.365474,
                pricing: 'call for rates',
                rating: '0',
                contact: '024 442 9529',
                Website_url: 'www.hotelsanbra.com',
                amenities: ['free parking']
            }
        ]
    };
    let oti = {
        region: 'Oti',
        image_url: 'assets/images/o.jpg',
        regional_capital: 'Dambai',
        hotels: [
            {
                name: 'Joliz Hotel ',
                image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/joliz/a.JPG',
                extra_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/joliz/b.JPG',
                extra1_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/joliz/c.JPG',
                extra2_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/joliz/d.JPG',
                short_name: 'Joliz',
                place: 'Jasikan',
                address: 'Road Behind ECG, Okajakrom, Jasikan ',
                lat: 7.419987,
                lon: 0.466123,
                pricing: 'call for rates',
                rating: '0',
                contact: '050 405 1460 ',
                Website_url: 'no',
                amenities: ['free parking', 'free wifi']
            },
            {
                name: 'Royal Lake View Hotel ',
                image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/lakeview/a.JPG',
                extra_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/lakeview/b.JPG',
                extra1_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/lakeview/c.JPG',
                extra2_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/lakeview/d.JPG',
                short_name: 'Royal Lake View',
                place: 'Kete',
                address: 'VS-0019-1391, Kete',
                lat: 7.829548,
                lon: -0.018587,
                pricing: 'call or visit website for rates',
                rating: '0',
                contact: '020 817 3739',
                Website_url: 'www.royallakeviewhotel.com',
                amenities: ['free parking']
            }
        ]
    };
    let northEast = {
        region: 'North East',
        image_url: 'assets/images/o.jpg',
        regional_capital: 'Nalerigu',
        hotels: [
            {
                name: 'Nii Dentis Hotel ',
                image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/dentis/a.JPG',
                extra_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/dentis/b.JPG',
                extra1_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/dentis/c.JPG',
                extra2_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/dentis/d.JPG',
                short_name: 'Nii Dentis',
                place: 'WaleWale',
                address: 'Bolgatanga-Tamale Rd, Walewale ',
                lat: 10.373015,
                lon: -0.792757,
                pricing: 'call or visit website for rates',
                rating: '0',
                contact: '020 901 9436',
                Website_url: 'www.eusbetthotel.com',
                amenities: ['free parking']
            }
        ]
    };
    let bono = {
        region: 'Bono',
        image_url: 'assets/images/o.jpg',
        regional_capital: 'Sunyani',
        hotels: [
            {
                name: 'Eusbett Hotel',
                image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/eusbett/a.JPG',
                extra_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/eusbett/b.JPG',
                extra1_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/eusbett/c.JPG',
                extra2_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/eusbett/d.JPG',
                short_name: 'Eusbett',
                place: 'Sunyani',
                address: 'Sunyani-Berekum Rd, Sunyani',
                lat: 7.340739,
                lon: -2.33753,
                pricing: '1104',
                rating: '4.1',
                contact: '035 202 4393',
                Website_url: 'www.eusbetthotel.com',
                amenities: ['free wifi', 'free parking']
            },
            {
                name: 'Tyco City',
                image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/tyco/a.JPG',
                extra_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/tyco/b.JPG',
                extra1_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/tyco/c.JPG',
                extra2_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/tyco/d.JPG',
                short_name: 'Tyco City',
                place: 'Sunyani',
                address: '',
                lat: 7.309753,
                lon: -2.301149,
                pricing: '1104',
                rating: '4.0',
                contact: 'call or visit website for rates ',
                Website_url: 'www.tycocityhotel.com',
                amenities: ['free wifi', 'free parking']
            }
        ]
    };
    let bonoEast = {
        region: 'Bono East',
        image_url: 'assets/images/o.jpg',
        regional_capital: 'Techiman',
        hotels: [
            {
                name: 'Premier Palace Hotel',
                image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/premierpalace/a.JPG',
                extra_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/premierpalace/b.JPG',
                extra1_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/premierpalace/c.JPG',
                extra2_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/premierpalace/d.JPG',
                short_name: 'Premier Palace',
                place: 'Techiman',
                address: '',
                lat: 7.673848,
                lon: -1.961007,
                pricing: 'Call for rates',
                rating: '3.5',
                contact: '024 902 9030',
                Website_url: 'www.premierpalacehotel.net',
                amenities: ['free wifi']
            },
            {
                name: 'Akina City Hotel ',
                image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/akina/a.JPG',
                extra_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/akina/b.JPG',
                extra1_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/akina/c.JPG',
                extra2_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/akina/d.JPG',
                short_name: 'Akina City',
                place: 'Techiman',
                address: 'Techiman-Nkoranza Rd, Techiman ',
                lat: 7.571883,
                lon: -1.967121,
                pricing: 'Call for rates',
                rating: '3.8',
                contact: '020 876 2532',
                Website_url: 'no',
                amenities: ['free wifi']
            }
        ]
    };
    let savannah = {
        region: 'Savannah',
        image_url: 'assets/images/o.jpg',
        regional_capital: 'Damongo',
        hotels: [
            {
                name: 'Mole Motel',
                image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/mole/a.JPG',
                extra_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/mole/b.JPG',
                extra1_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/mole/c.JPG',
                extra2_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/mole/d.JPG',
                short_name: 'Mole',
                place: 'Mole',
                address: '',
                lat: 9.260528,
                lon: -1.855752,
                pricing: 'Call or visit website for rates',
                rating: '3.9',
                contact: '024 431 6777',
                Website_url: 'www.molemotelgh.com',
                amenities: ['free wifi', 'free breakfast']
            }
        ]
    };
    let westernNorth = {
        region: 'Western North',
        image_url: 'assets/images/o.jpg',
        regional_capital: 'Wiawso',
        hotels: [
            {
                name: 'Beulah Land Hotel',
                image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/beulah/a.JPG',
                extra_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/beulah/b.JPG',
                extra1_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/beulah/c.JPG',
                extra2_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/beulah/d.JPG',
                short_name: 'Beulah Land',
                place: 'Wiawso',
                address: '',
                lat: 6.213433,
                lon: -2.477241,
                pricing: 'Call for rates',
                rating: '3.8',
                contact: '050 464 2457',
                Website_url: 'no',
                amenities: ['free wifi']
            }
        ]
    };
    let ashanti = {
        region: 'Ashanti',
        image_url: 'assets/images/o.jpg',
        regional_capital: 'Kumasi',
        hotels: [
            {
                name: 'Sweet Garden Hotel',
                image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/sweet/a.JPG',
                extra_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/sweet/b.JPG',
                extra1_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/sweet/c.JPG',
                extra2_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/sweet/d.JPG',
                short_name: 'Sweet Garden',
                place: 'Kumasi',
                address: 'Dakodwon, Kumasi',
                lat: 6.671822,
                lon: -1.630547,
                pricing: 438,
                rating: '4.2',
                contact: '024 338 8560',
                Website_url: 'no',
                amenities: ['pool', 'free wifi']
            },
            {
                name: 'Golden Bean Hotel',
                image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/bean/a.JPG',
                extra_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/bean/b.JPG',
                extra1_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/bean/c.JPG',
                extra2_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/bean/d.JPG',
                short_name: 'Golden Bean',
                place: 'Kumasi',
                address: 'No.19 Harper Road, Nhyiaeso, Kumasi',
                lat: 6.673127,
                lon: -1.618453,
                pricing: 812,
                rating: '4.3',
                contact: '032 208 6000',
                Website_url: 'www.goldenbeanhotel.com',
                amenities: ['pool', 'free wifi', 'free parking']
            },
            {
                name: 'Royal Baron Hotel',
                image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/baron/a.JPG',
                extra_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/baron/b.JPG',
                extra1_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/baron/c.JPG',
                extra2_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/baron/d.JPG',
                short_name: 'Royal Baron',
                place: 'Kumasi',
                address: 'Ayigya, Kumasi',
                lat: 6.673127,
                lon: -1.618453,
                pricing: 260,
                rating: '4.4',
                contact: '055 796 1002',
                Website_url: 'www.royalbaronhotel.com',
                amenities: ['free breakfast', 'free wifi']
            },
            {
                name: 'Wadoma Royale Hotel',
                image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/wadoma/a.JPG',
                extra_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/wadoma/b.JPG',
                extra1_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/wadoma/c.JPG',
                extra2_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/wadoma/d.JPG',
                short_name: 'Wadoma Royale',
                place: 'Kumasi',
                address: 'Wadoma Junction, Kumasi',
                lat: 6.712635,
                lon: -1.718949,
                pricing: 208,
                rating: '4.6',
                contact: '032 229 6089',
                Website_url: 'no',
                amenities: ['free parking', 'free wifi']
            },
            {
                name: 'Oak Plaza Suites Kumasi',
                image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/oakplaza/a.JPG',
                extra_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/oakplaza/b.JPG',
                extra1_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/oakplaza/c.JPG',
                extra2_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/oakplaza/d.JPG',
                short_name: 'Oak Plaza',
                place: 'Kumasi',
                address: 'Plot 01, Block C, Kumasi',
                lat: 6.667752,
                lon: -1.608487,
                pricing: 1607,
                rating: '4.4',
                contact: '050 716 8268',
                Website_url: 'www.kumasi.oakplazahotel.com',
                amenities: ['free parking', 'free wifi']
            },
            {
                name: 'Okumah Hotel',
                image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/okumah/a.JPG',
                extra_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/okumah/b.JPG',
                extra1_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/okumah/c.JPG',
                extra2_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/okumah/d.JPG',
                short_name: 'Okumah Hotel',
                place: 'Kumasi',
                address: 'Off BM Kuffuor Avenue, Kaase, AK-440, 9786, Kumasi',
                lat: 6.653392,
                lon: -1.608871,
                pricing: 352,
                rating: '4',
                contact: '032 239 5217',
                Website_url: 'www.okumahhotels.com',
                amenities: ['free parking', 'free wifi']
            }
        ]
    };
    let greaterAccra = {
        region: 'Greater Accra',
        image_url: 'assets/images/o.jpg',
        regional_capital: 'Accra',
        hotels: [
            {
                name: 'Kempinski Hotel Gold Coast City',
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
                name: 'Mövenpick A. Hotel',
                image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/movenpick/a.jpg',
                extra_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/movenpick/b.jpg',
                extra1_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/movenpick/c.jpg',
                extra2_image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hotels/movenpick/d.jpg',
                short_name: 'Mövenpick A.',
                place: 'Accra',
                address: 'Ministries PMB, 66 Gamel Abdul Naseer Ave, Accra',
                lat: 5.5557,
                lon: -0.1963,
                pricing: 1000,
                rating: '4.5',
                contact: '030 261 1000',
                Website_url:
                    'https://www.movenpick.com/en/africa/ghana/accra/moevenpick-ambassador-hotel-accra/overview/',
                amenities: ['pool', 'bar', 'restaurants', 'free wifi']
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
    if (choose == 1) return res.status(200).send(greaterAccra);
    if (choose == 2) return res.status(200).send(central);
    if (choose == 3) return res.status(200).send(western);
    if (choose == 4) return res.status(200).send(eastern);
    if (choose == 5) return res.status(200).send(northEast);
    if (choose == 6) return res.status(200).send(northern);
    if (choose == 7) return res.status(200).send(upperEast);
    if (choose == 8) return res.status(200).send(bono);
    if (choose == 9) return res.status(200).send(upperWest);
    if (choose == 10) return res.status(200).send(bonoEast);
    if (choose == 11) return res.status(200).send(ahafo);
    if (choose == 12) return res.status(200).send(volta);
    if (choose == 13) return res.status(200).send(oti);
    if (choose == 14) return res.status(200).send(savannah);
    if (choose == 15) return res.status(200).send(westernNorth);
    if (choose == 16) return res.status(200).send(ashanti);

    return res.status(400).send('none');
});

module.exports = Route;
