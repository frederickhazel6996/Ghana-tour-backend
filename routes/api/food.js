const Route = require('express').Router();

Route.get('/', async function (req, res) {
    let food = [
        {
            name: 'Fufu',
            image_url:
                'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/food/fufu/a.jpg',
            food_extra: {
                event_id: 'F4',
                name: 'Fufu',

                image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/food/fufu/a.jpg',
                about:
                    'Its a very popular dish which is mostly served with soup. Fufu can be eaten with all types of soup, this ddish eaten on a weekend will definitely refresh your soul.',

                extraImage1:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/food/fufu/b.jpg',
                extraImage2:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/food/fufu/c.jpg',
                extraImage3:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/food/fufu/d.jpg',
                ingredients: ['Cassava', 'Plantain', 'Cocoyam', 'salt']
            }
        },

        {
            name: 'Waakye',
            image_url:
                'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/food/waakye/a.jpg',
            food_extra: {
                event_id: 'F1',
                name: 'Waakye',

                image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/food/waakye/a.jpg',
                about:
                    ' Its a popular dish made with beans and rice. Most Ghanaians love to eat it on the Saturday morning. Best served with wele, gari, vegetables, egg, shito,spaghetti including stew. It is best served in banana leaves the Ghanaian way,which is believed to give it a nicer taste and also enhance its aroma.',

                extraImage1:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/food/waakye/b.jpg',
                extraImage2:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/food/waakye/c.jpg',
                extraImage3:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/food/waakye/d.jpg',
                ingredients: [
                    'Rice',
                    'beans',
                    'dried sorghum leaves/waakye leaves'
                ]
            }
        },
        {
            name: 'Jollof',
            image_url:
                'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/food/jollof/a.jpg',
            food_extra: {
                event_id: 'F2',
                name: 'Jollof',

                image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/food/jollof/a.jpg',
                about:
                    'There is always a competition on who makes better jollof between Ghana and Nigeria. Ghanaaian jollof is top notch especially when it’s served with some spicy chicken and salad.',

                extraImage1:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/food/jollof/b.jpg',
                extraImage2:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/food/jollof/c.jpg',
                extraImage3:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/food/jollof/d.jpg',
                ingredients: ['Rice', 'Tomatoes', 'oil', 'seasoning']
            }
        },
        {
            name: 'Omotuo',
            image_url:
                'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/food/omotuo/a.jpg',
            food_extra: {
                event_id: 'F6',
                name: 'Omotuo',

                image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/food/omotuo/a.jpg',
                about:
                    'It’s a dish made from crushed rice. Mostly served with palmnut or groundnut soup. Ingredients are crushed rice, water, salt.',

                extraImage1:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/food/omotuo/b.jpg',
                extraImage2:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/food/omotuo/c.jpg',
                extraImage3:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/food/omotuo/b.jpg',
                ingredients: ['Rice', 'salt']
            }
        },
        {
            name: 'Banku',
            image_url:
                'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/food/banku/a.jpg',
            food_extra: {
                event_id: 'F5',
                name: 'Banku',

                image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/food/banku/a.jpg',
                about:
                    'A popular Ghanaian dish made out of cassava and corn,it’s mostly eaten with grilled tilapia and hot pepper or Okro Soup. ',

                extraImage1:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/food/banku/b.jpg',
                extraImage2:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/food/banku/c.jpg',
                extraImage3:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/food/banku/d.jpg',
                ingredients: ['Cassava dough', 'Corn Dough']
            }
        },
        {
            name: 'Kenkey',
            image_url:
                'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/food/kenkey/a.jpg',
            food_extra: {
                event_id: 'F3',
                name: 'Kenkey',

                image_url:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/food/kenkey/a.jpg',
                about:
                    ' It’s a popular Ghanaian dish made from corn. There are two types of Kenkey, the “Ga Komi” and the “Fante Kenkey” . The Ga kenkey is best served with some fried fish, hot pepper, sliced onions and tomatoes. Whereby the Fante keney is best served blended with some roasted groundnuts, sugar and milk. ',

                extraImage1:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/food/kenkey/b.jpg',
                extraImage2:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/food/kenkey/c.jpg',
                extraImage3:
                    'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/food/kenkey/d.jpg',
                ingredients: ['Corn Dough', 'Salt']
            }
        }
    ];
    res.status(200).send(food);
});

module.exports = Route;
