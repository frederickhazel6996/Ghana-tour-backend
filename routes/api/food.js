const Route = require('express').Router();

Route.get('/', async function (req, res) {
    let food = [
        {
            name: 'Fufu',
            image_url: 'url',
            about: 'Fufu is good',

            extraImage1: 'url',
            extraImage2: 'url',
            ingredients: 'more things',
            type: 'Main'
        },
        {
            name: 'Banku',
            image_url: 'url',
            about: 'Banku is good',

            extraImage1: 'url',
            extraImage2: 'url',
            ingredients: 'more things',
            type: 'Main'
        },
        {
            name: 'Waakye',
            image_url: 'url',
            about: 'Waakye is good',

            extraImage1: 'url',
            extraImage2: 'url',
            ingredients: 'more things',
            type: 'Main'
        },
        {
            name: 'Jollof',
            image_url: 'url',
            about: 'Jollof is good',

            extraImage1: 'url',
            extraImage2: 'url',
            ingredients: 'more things',
            type: 'Main'
        },
        {
            name: 'Tuo Zaafi',
            image_url: 'url',
            about: 'Tuo Zaafi is good',

            extraImage1: 'url',
            extraImage2: 'url',
            ingredients: 'more things',
            type: 'Main'
        },
        {
            name: 'Beans Stew',
            image_url: 'url',
            about: 'Beans Stew is good',

            extraImage1: 'url',
            extraImage2: 'url',
            ingredients: 'more things',
            type: 'Stew'
        },
        {
            name: 'Garden Eggs Stew',
            image_url: 'url',
            about: 'Garden Eggs is good',

            extraImage1: 'url',
            extraImage2: 'url',
            ingredients: 'more things',
            type: 'Stew'
        },
        {
            name: 'Groundnut Soup',
            image_url: 'url',
            about: 'Groundnut Soup is good',

            extraImage1: 'url',
            extraImage2: 'url',
            ingredients: 'more things',
            type: 'Soup'
        },
        {
            name: 'Palm Nut Soup',
            image_url: 'url',
            about: 'Palm Nut Soup is good',

            extraImage1: 'url',
            extraImage2: 'url',
            ingredients: 'more things',
            type: 'Soup'
        }
    ];
    res.status(200).send(food);
});

module.exports = Route;
