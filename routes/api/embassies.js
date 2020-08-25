const Route = require('express').Router();

Route.get('/', async function (req, res) {
    let embassy = [
        {
            country: 'USA',
            place: 'Washington DC',
            image_url:
                'https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png',
            address: '3512 International Dr NW, Washington, DC 20008',
            website: 'https://ghanaembassydc.org/'
        },
        {
            country: 'UK',
            place: 'London',
            image_url:
                'https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png',
            address: '13 Belgrave Square,London SW1X 8PN',
            website: 'https://www.ghanahighcommissionuk.com/'
        }
    ];
    res.status(200).send(embassy);
});

module.exports = Route;
