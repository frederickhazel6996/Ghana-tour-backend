const Route = require('express').Router();

Route.get('/', async function (req, res) {
    let festivals = [
        {
            event_id: 'EVF1',
            region: 'Greater Accra Region',
            name: 'Homowo',
            place: 'Accra',
            image_url:
                'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/homowo.jpg',
            about:
                ' The Homowo Festival commemorates the time the Ga people overcame a very severe famine hundreds of years ago, when they settled in present-day Greater Accra Region of Ghana. This long period of famine caused them to engage in better agricultural practices that led to the end of the famine. The name of the festival, Homowo means ‘hooting at hunger and this is a figurative way of describing the harvest that ended their hunger and starvation. This is depicted in the celebrations where staple food, kpokpoi is prepared in abundance, sacrificed to the gods and eaten by the people.',
            extraImage1: 'url',
            extraImage2: 'url',
            dates:
                'the month of August, different sub-tribes celebrate at different times',
            tribe: 'Ga',
            lat: 5.55602,
            lon: -0.1969
        },
        {
            event_id: 'EVF2',
            region: 'Volta Region',
            name: 'Hogbetsotso',
            place: 'Anloga',
            image_url:
                'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/hogbetsotso.png',
            about:
                'The Hogbetsotso festival was instituted to commemorate the escape and exodus of the ewe people form the evil King Agorkoli of Notsie in present-day Togo. The Anlo people were ruled by this wicked ruler who imposed an unbearable workload on them, as well as treated them badly. They were able to escape into present-day Volta region in Ghana through the wisdom of their leaders who thought of a plan to get them to walk backwards. During this festival, the bravery and courage of ancestors, as well as the leaders is celebrated. Notable among them is Togbe Tsali, who was their chief priest.',
            extraImage1: 'url',
            extraImage2: 'url',
            dates: 'In the month of November',
            tribe: 'Anlo',
            lat: 5.79473,
            lon: 0.89728
        },
        {
            event_id: 'EVF3',
            region: 'Central Region',
            name: 'Fetu Afahye',
            place: 'Cape Coast',
            image_url:
                'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/fetu.jpg',
            about:
                ' The Oguaa Fetu Afahye is named after the ancient Fetu land, located in present-day Cape Coast. This festival was instituted by the ancestors of the present-day people of Oguaa (Cape Coast) to commemorate a successful fishing harvest. It is also an avenue to thank the seventy-seven Fante gods of the Oguaa Kingdom and perform rituals for purification of the land. During this festival, the rich spiritual history of the people is also passed down and displayed.',
            extraImage1: 'url',
            extraImage2: 'url',
            dates: '1st week in September',
            tribe: 'Fantes',
            lat: 5.10535,
            lon: -1.2466
        },
        {
            event_id: 'EVF4',
            region: 'Central Region',
            name: 'Aboakyer',
            place: 'Winneba',
            image_url:
                'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/aboakyer.jpg',
            about:
                'The Aboakyer festival is celebrated to thank the god, Penkyi Otu for a successful migration from western Sudan to Winneba. Upon arrival, the god, asked for a member of the royal family as an annual sacrifice. This bothered the people, who appealed to him. A wild cat was demanded, which led to a second appeal due to the number of people who died during the hunt. Finally, he considered their plight and demanded a dear, which led to a competition between the two warrior groups every year to be the first to present the live deer, which begins the festival',
            extraImage1: 'url',
            extraImage2: 'url',
            dates: '1st Saturday in May',
            tribe: 'Effutus',
            lat: 5.362229,
            lon: -0.629892
        },
        {
            event_id: 'EVF5',
            region: 'Central Region',
            name: 'Odambea',
            place: 'Saltpond',
            image_url:
                'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/odambea.jpg',
            about:
                'The Odambea festival commemorates the migration of the Nkusum people from present-day Techiman to present-day Saltpond in Ghana. This is believed to have happened by the help of the gods who warded away every danger and guided them to the land they chose. The name of the festival means ‘fortified link’ which tells how the ancestors of the Nkusum people managed to keep contact with each other. It also reminds the people of the importance of unity between the clans and families of the Nkusum tribe.',
            extraImage1: 'url',
            extraImage2: 'url',
            dates: 'Last week in August',
            tribe: 'Nkusum',
            lat: 5.20913,
            lon: -1.06058
        },
        {
            event_id: 'EVF6',
            region: 'Central Region',
            name: 'Bakatue',
            place: 'Elmina',
            image_url:
                'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/bakatue.jpg',
            about:
                'The Bakatue festival is celebrated as part of a covenant the ancestor of the Edina people had with the god, Nana Benya. It is believed that the very first ancestor settled beside the Estuary in Elmina. There, he built a shrine to the god of the river, Nana Benya, who agreed to bless him and his ancestors as long as they revered him and performed rituals annually.  It is a day set aside to offer sacrifice for a successful fishing season. It is also celebrated to commemorate the creation of Elmina town by the Portuguese',
            extraImage1: 'url',
            extraImage2: 'url',
            dates: 'First Tuesday in July ',
            tribe: 'Edina',
            lat: 5.0847,
            lon: -1.35093
        },
        {
            event_id: 'EVF7',
            region: 'Greater Accra Region',
            name: 'Asafotufiam',
            place: 'Ada',
            image_url:
                'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/asafotufiam.jpg',
            about:
                'The Asafotufiam festival marks the wars fought by the ancestors of the Dangme people to ensure their peaceful stay on the land. The Dangme people of Ada migrated from Ile Ife in present-day Nigeria. They had to fight many wars on their way to their present coastal location. On arrival, they were met with resistance by some tribes who were already on the land, which eventually led to the split between them and the Gas they travelled with. This festival thanks the gods and celebrated the bravery of the ancestors who fought the necessary battles.',
            extraImage1: 'url',
            extraImage2: 'url',
            dates: '1st week in August',
            tribe: 'Dangme',
            lat: 5.7666636,
            lon: 0.6166642
        },
        {
            event_id: 'EVF8',
            region: 'Eastern Region',
            name: 'Ohum',
            place: 'Akim-Oda',
            image_url:
                'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/ohum.jpg',
            about:
                'The Ohum festival commemorates the wars fought by ancestors of the Akyem people to establish and preserve the Okyeman Kingdom. The people of th Okyeman kingdom also believe that the Birim river is their source of life and strength. This is due to the food and water it provides. Therefore, they thank the river god for his protection.The celebration date also coincides with the first harvest of yam, which is celebrated.',
            extraImage1: 'url',
            extraImage2: 'url',
            dates: 'Two phases: June/July and September/October',
            tribe: 'Akyem',
            lat: 5.92665,
            lon: -0.98577
        },
        {
            event_id: 'EVF9',
            region: 'Western Region',
            name: 'Kundum',
            place: 'Sekondi,Axim',
            image_url:
                'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/kundum.jpg',
            about:
                'The Kundum festival was initially instituted to expel demons, but is now celebrated to thank the gods for the abundance of food. It is said to be named after a dance a hunter saw dwarfs doing on one of his trips. He is believed to have seen the dwarfs dancing around the pot, have observed their motions for a month, and then have learnt the dance. On return home, he taught his people. This dance is performed during the festival. Other schools of thought believe it was instituted to celebrate the palm fruit’s ripening.',
            extraImage1: 'url',
            extraImage2: 'url',
            dates:
                'Varies from town to town, Between June and November (ripening of palm fruit begins celebration)',
            tribe: 'Nzema and Ahanta',
            lat: 4.934,
            lon: -1.7137
        },
        {
            event_id: 'EVF10',
            region: 'Ashanti Region',
            name: 'Adae Kese',
            place: 'Kumasi',
            image_url:
                'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/adae.jpg',
            about:
                'This festival is celebrated on the ninth minor Adae (rest day festival, which happens every 6th Sunday), to commemorate the end of all the Adae festivals. It is believed that the Asante people of present-day Kumasi once served the Denkyira Kingdom. They gained their independence in the battle of Feiyase. Once the Asantes won, they became a free state and have been powerful ever since. It celebrates the Asante kingdom’s achievements, purifies the land and communicate with ancestors.',
            extraImage1: 'url',
            extraImage2: 'url',
            dates: 'Dates range between July and October',
            tribe: 'Ashanti',
            lat: 6.68848,
            lon: -1.62443
        },
        {
            event_id: 'EVF11',
            region: 'Eastern Region',
            name: 'Ngmayem',
            place: 'Manya Krobo',
            image_url:
                'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/ngmayem.jpg',
            about:
                'The Ngmayem festival was instituted in 1944 by Nene Azu Mate Kole to commemorate the new millet. Ngmayem means ‘eating the new millet’. According to oral tradition, this festival also marks the end of a famine hundreds of years ago. The famine is believed to have been stopped by the abundance of millet, which is celebrated during the festival.  This festival also to foster unity between Krobo families.',
            extraImage1: 'url',
            extraImage2: 'url',
            dates: 'Last Friday of October',
            tribe: 'Krobo',
            lat: 7.54069,
            lon: -1.736
        },
        {
            event_id: 'EVF12',
            region: 'Eastern Region',
            name: 'Odwira',
            place: 'Aburi',
            image_url:
                'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/odwira.jpg',
            about:
                'This festival was instituted by Nana Addo Dankwah in October, 1826 to celebrate the victory over the Asantes in the battle of Katamanso in 1826. During the battle of Katamanso, the Akuapim people were able to defeat the Asante kingdom. This led to freedom from the rule of the Asantes. Some Ga-Adangbe communities, who were instrumental in the war also join in the celebration. It also coincides with the harvest of yam so purification rights are performed and the gods are thanked.',
            extraImage1: 'url',
            extraImage2: 'url',
            dates: 'September/ October',
            tribe: 'Akuapim',
            lat: 5.8499,
            lon: -0.1833
        },
        {
            event_id: 'EVF13',
            region: 'Central Region',
            name: 'Akwambo',
            place: 'Agona Swedru',
            image_url:
                'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/akwambo.jpg',
            about:
                'The Akwambo festival was instituted to commemorate the settling of the first ancestors of the towns: Gyinankoma, Ekrawfo, Atakwaa, and Otabenadze. It is believed that, when the ancestors of the Agona people first arrived in present-day Ghana, they settled in those four towns. These towns are now Agona-Swedru and Agona Nyakrom. They are believed to have settled there by clearing the pathways. This is what the people do during the festival to thank, as well as invite blessings from God.',
            extraImage1: 'url',
            extraImage2: 'url',
            dates: 'The month of August',
            tribe: 'Agona',
            lat: 5.5249,
            lon: -0.70166
        },
        {
            event_id: 'EVF14',
            region: 'Northern Region',
            name: 'Bugum Chugu',
            place: 'Tamale',
            image_url:
                'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/bugum.jpg',
            about:
                'The Bugum Chugu festival is celebrated by both Muslims and non-Muslims for different reasons. For Muslims, it marks the night Prophet Nuhu (Noah in the Bible)’s ark landed after the flood when they lit torches to see if they were on land. For non- Muslims, it is believed that a former Dagomba king lost his son years ago. A search party was organized so the people lit torches when they went in search of him, since it was dark at night. It was due to the fire that they were able to see and find him. For these reasons, the importance eof fire is celebrated through various displays. People light up grass with fire to re-enact the events.',
            extraImage1: 'url',
            extraImage2: 'url',
            dates:
                'The first month of the Dagomba calendar, Bugum Choli (October).',
            tribe: 'Dagomba',
            lat: 9.4034,
            lon: -0.8424
        },
        {
            event_id: 'EVF15',
            region: 'Northern Region,North East and Upper West',
            name: 'Damba',
            place: 'Wa',
            image_url:
                'https://drake6996.s3.us-east-2.amazonaws.com/ghana_tour/damba.jpg',
            about:
                'The Damba festival is said to have originated from Zamfara in Northern Nigeria, in the first quarter of the 18th century. It is believed to have been instituted by the King, Naa Zamfina, to mark the birth of the prophet Mohammed. However, other sources suggest that the festival predates his reign, which suggests a more traditional origin than a Muslim origin.',
            extraImage1: 'url',
            extraImage2: 'url',
            dates:
                '11th, 17th and 18th days of Damba month (Between July and August)',
            tribe: 'Mamprusi, Nanumba, Gonja',
            lat: 10.0601,
            lon: -2.5099
        }
    ];
    res.status(200).send(festivals);
});

module.exports = Route;
