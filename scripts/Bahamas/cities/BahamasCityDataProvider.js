 const citiesCollection = [
        {id: 1,
        name: 'Nassau',
        image: "https://www.blackpast.org/wp-content/uploads/prodimages/files/Hilton_resort_and_waterfront_Nassau_Bahamas_2020.jpg",
        description: 'Capital of The Bahamas',
        pointsOfInterest: 'beaches, snorkeling, and hilly landscape',
        },
        {id: 2,
        name: 'Freeport',
        image: "https://www.bahamasairtours.com/wp-content/uploads/2017/11/travel-to-freeport-bahamas-flights.jpg" ,
        description: 'main city on Grand Bahama',
        pointsOfInterest: "oceanfront Lucaya district, Deadman's Reef, Lucayan National Park" ,

        },
        {id: 3,
        name: 'West End',
        image: "https://travel.usnews.com/dims4/USNEWS/fcb5e0a/2147483647/resize/600x400%5E%3E/crop/600x400/quality/85/?url=https://travel.usnews.com/images/Old_Bahama_Bay_Resort_Yacht_Harbour_usn_2.jpg" ,
        description: 'oldest town and westernmost settlement on Grand Bahama' ,
        pointsOfInterest: 'Lucaya Beach, Taino Beach, Garden of the Groves' ,
        },
        
        {Id: 4,
        name: "Coopers Town" ,
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvGWxNFG6eRcy-Ncgeo4D8ViXuG_wIqq6WyQ&usqp=CAU",
        description: "is a village in Abaco, the second largest island of the Bahamas",
        pointsOfInterest: "Albert Lowe Museum, Green Turtle Cay, Treasure Cay Airport",
        },
        {Id: 5,
        name: "Alice Town",
        image: "https://media-cdn.tripadvisor.com/media/photo-s/14/8d/01/cb/other.jpg",
        description: "located on North Bimini island is the center of tourist trade on Bimini",
        pointsOfInterest: "Bailey Town, Veterans memorial, Shipwreck on Radio Beach",
        }
]       

export const useCities = () => {
    return citiesCollection.slice()
}