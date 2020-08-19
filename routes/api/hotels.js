const Route = require('express').Router();

Route.get('/', async function (req, res) {
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

    res.status(200).send(ashanti);
});

module.exports = Route;
