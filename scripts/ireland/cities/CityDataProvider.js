const cityCollection = [
    {
        id: 1,
        name: "Dublin",
        image: "https://cdn.travelpulse.com/images/f1a9edf4-a957-df11-b491-006073e71405/e1683863-2873-427e-b6b2-90b3d776db53/630x355.jpg",
        description: "Ireland's capital should be the first stop on every traveler's list. Cobblestone streets abound, adding to the city's charm.",
        pointsOfInterest : [
            {
                name: "Trinity College and College Green",
                image: "https://www.planetware.com/photos-large/IRL/ireland-dublin-trinity.jpg",
                description: "It's at the heart of the capital, packed full of incredible history, and it's the oldest university in Ireland having been founded in 1592 by Queen Elizabeth I."
            },
            {
                name: "Grafton Street",
                image: "https://www.planetware.com/photos-large/IRL/ireland-dublin-grafton-street.jpg",
                description: "This eclectic stretch buzzes morning, noon, and night and is a magnet for buskers, from classical quartets to traditional fiddle players and singer-songwriters. Many famed bands and musicians have given impromptu performances here, including Bono of U2."
            }
        ]
    },
    {
        id: 2,
        name: "Galway",
        image: "https://www.planetware.com/wpimages/2020/06/ireland-best-cities-galway.jpg",
        description: "Galway is teeming with life. Around every corner of this eclectic city lies music, art, or colorful buildings to immediately brighten your spirit.",
        pointsOfInterest : [
            {
                name: "Eyre Square",
                image: "https://www.planetware.com/photos-large/IRL/ireland-galway-eyre-square.jpg",
                description: "Also known as John F. Kennedy Memorial Park, after the US President of Irish descent, the square links the center of the city with a popular shopping area. This former home to food markets is a favorite of pedestrians."
            },
            {
                name: "Wild Atlantic Way",
                image: "https://www.planetware.com/wpimages/2021/05/ireland-galway-top-attractions-tour-wild-atlantic-way.jpg",
                description: "This 2,600-kilometer-long route following Ireland's west coast, from Kinsale in the south to Derry in the north, is where visitors are treated to the most spectacular views."
            }
        ]
    },
    {
        id: 3,
        name: "Belfast",
        image: "https://www.planetware.com/photos-large/NI/ireland-belfast-titanic.jpg",
        description: "Northern Ireland's most famous gem, Belfast was once a place best avoided. Violent clashes between Catholics and Protestants marred the city's image and created segregated areas of town.",
        pointsOfInterest : [
            {
                name: "Titanic Belfast",
                image: "https://www.planetware.com/photos-large/IRL/ireland-dublin-trinity.jpg",
                description: "Billed as the world's largest Titanic visitor attraction, the distinctive looking Titanic Belfast opened in 2012 and is a landmark building that pays tribute to the story of the city's rich maritime history."
            },
            {
                name: "Waterfront Hall",
                image: "https://www.planetware.com/photos-large/IRL/ireland-dublin-grafton-street.jpg",
                description: "Just over a mile from the Titanic Quarter and overlooking the River Lagan in central Belfast, the Waterfront Hall is a world-class entertainment and conference venue that, in no uncertain terms, reflects the regeneration of the city. Since opening in 1997, the center has seen more than five million visitors and now attracts top musicians and performers from around the world, as well as hosting a range of exhibitions."
            }
        ]
    }
]

export const useCities = () => {
    return cityCollection.slice();
}