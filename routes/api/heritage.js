const Route = require('express').Router();

Route.get('/', async function (req, res) {
    let heritage = [
        {
            name: 'Akan',
            subgroups: [
                'Agona',
                'Akuapem',
                'Akwamu',
                'Akyem',
                'Ashanti',
                'Bono',
                'Fante',
                'Kwahu',
                'Wassa'
            ],
            image_url:
                'https://classconnection.s3.amazonaws.com/1711/flashcards/273361/jpg/hjd0518r.jpg',
            history:
                'Akan people are believed to have migrated to their current location from the Sahara desert and Sahel regions of Africa into the forest region around the 11th century. Many Akans tell their history as it started in the eastern region of Africa as this is where the ethnogenesis of the Akan as we know them today happened.Oral traditions of the ruling Abrade (Aduana) clan state that Akans originated from the ancient Ghana empire. The Akan people migrated from the north through Egypt and settled in Nubia. Around 500 AD (5th century), due to pressure exerted by the Axumite kingdom of Ethiopia, Nubia was shattered and the Akan people moved west and established small trading kingdoms. These kingdoms grew and around 750 AD the Ghana Empire was formed. The Empire lasted from 750 AD to 1200 AD and collapsed as a result of the introduction of Islam in Western Sudan, and due to the zeal of the Muslims to impose their religion, their ancestors eventually left for Kong (i.e. present-day Ivory Coast). From Kong, they moved to Wam and then to Dormaa (both located in the present-day Brong-Ahafo region). The movement from Kong was necessitated by the desire to find suitable savannah conditions since they were not used to forest life. Around the 14th century, they moved from Dormaa in the south-east to Twifo-Heman, Cape Coast. This move was commercially motivated. The kingdom of Bonoman (or Brong-Ahafo) was established in the 12th century. Between the 12th and 13th centuries, a gold boom in the area brought wealth to numerous Akans.During different phases of the Kingdom of Bonoman, groups of Akans migrated out of the area to create numerous states based predominantly on gold mining and trading of cash crops.This brought wealth to numerous Akan states such as the Akwamu Empire (1550–1650),and ultimately led to the rise of the well known Akan empire, the Empire of Ashanti (1700–1900).'
        },
        {
            name: 'Ga-Adangbe',
            subgroups: ['Ga', 'Adangbe'],
            image_url:
                'https://food.jumia.com.gh/blog/wp-content/uploads/2017/06/homowo-pinterest.jpg',
            history:
                'The Ga-Dangbe, Gã-Daŋbɛ, Ga-Dangme, or GaDangme are an ethnic group in Ghana and Togo. The Ga and Dangbe people are grouped respectively as part of the Ga–Dangme ethnolinguistic group.The Ga-Dangmes are one ethnic group that lives primarily in the Greater Accra of Ghana. Ethnic Ga family names (surnames) such as Tagoe, Dodoo, Lartey, Nortey, Aryee, Poku, Lamptey, Tetteh, Armah, Ankrah, Tetteyfio, Laryea, Ayitey, Okai, Bortey, Quaye, Quaynor, Ashong and Kotei.Under their great leader King Ayi Kushi (Cush) (1483-1519) they were led from the east in several states before reaching their destination in Accra. It is believed that they started their journey from somewhere close to the Niger River in modern Nigeria.This leader is the Moses of the Ga-Dangme people, with his seven (7) puritan laws he gave them and that has formed the basis and philosophy of the state, making the state a friendly state recognised by all in respect to making Greater Accra Region the capital of the then Gold Coast in 1877.'
        }
    ];
    res.status(200).send(heritage);
});

module.exports = Route;
