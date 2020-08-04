const Route = require('express').Router();

Route.get('/', async function (req, res) {
    let food = [
        {
            name: 'Main Dishes',
            image_url:
                'https://www.amascorner.com/wp-content/uploads/2019/09/Waakye-e1567874607770.jpg'
        },
        {
            name: 'Soups',
            image_url:
                'https://3.bp.blogspot.com/-UToYWi95YSw/VRWuGGVWo_I/AAAAAAAADXw/3fOjwXWAXs8/s1600/DSC_0808.JPG'
        },
        {
            name: 'Stews',
            image_url:
                'https://i.pinimg.com/originals/19/2d/12/192d12d81857b04a9dfdb0d6dcd939f2.jpg'
        },
        {
            name: 'Drinks',
            image_url:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR8C17sk2SGvpJVKmXWoY2vd33lF-V-vTm6yw&usqp=CAU'
        },
        {
            name: 'Pastries',
            image_url:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR8C17sk2SGvpJVKmXWoY2vd33lF-V-vTm6yw&usqp=CAU'
        }
    ];
    res.status(200).send(food);
});

module.exports = Route;
