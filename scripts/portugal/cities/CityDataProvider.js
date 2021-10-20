const cityCollection = [
    { id: 1,
      name: "Lisbon",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Lisbon_%2836831596786%29_%28cropped%29.jpg/280px-Lisbon_%2836831596786%29_%28cropped%29.jpg",
      description: "Lisbon is Portugal’s hilly, coastal capital city. From imposing São Jorge Castle, the view encompasses the old city’s pastel-colored buildings, Tagus Estuary and Ponte 25 de Abril suspension bridge. Nearby, the National Azulejo Museum displays 5 centuries of decorative ceramic tiles. Just outside Lisbon is a string of Atlantic beaches, from Cascais to Estoril.",
      pointsOfInterest: [
            {
                name:"Belém Tower",
                image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSouwW9Np5xM9mIEMdG75vc5kCT8zvAhq5-uXu3_Qi_yu31VlTuIr2Sino0ou4s6Vo14aWgHwOlKQg0sn225wpMGw",
                description:"Belém Tower, officially the Tower of Saint Vincent is a 16th-century fortification located in Lisbon that served as a point of embarkation and disembarkation for Portuguese explorers and as a ceremonial gateway to Lisbon,"
            }, 
            {
                name:"Castelo de S. Jorge",
                image: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQnEVm8LaIjeAM3RuZKZYiumxrSnksd3WfF-BAOl9mg6mLStDe1RcojtxKNPbXgiOkAv8rZF07yCrbEfU4nt__4AA",
                description:"São Jorge Castle is a historic castle in the Portuguese capital of Lisbon, located in the freguesia of Santa Maria Maior. Human occupation of the castle hill dates to at least the 8th century BC while the first fortifications built date from the 1st century BC."
            }, 
            {
                name:"Oceanário de Lisboa",
                image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRRreyFt6YcTR7G_SU_WKSFkjlLep9EtQHYn5_91r9hFfeKGJdleQApCLO4elq02c6b_bLAaUpKuylHelfD4UB-6Q",
                description:"The Lisbon Oceanarium is an oceanarium in Lisbon, Portugal. It is located in the Parque das Nações, which was the exhibition grounds for the Expo '98. It is the largest indoor aquarium in Europe."
            }
        ]
    },
    { id: 2,
      name: "Porto",
      image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/06/26/18/porto-main.jpg?width=982&height=726&auto=webp&quality=75",
      description: "Porto is a coastal city in northwest Portugal known for its stately bridges and port wine production. In the medieval Ribeira (riverside) district, narrow cobbled streets wind past merchants’ houses and cafes. São Francisco Church is known for its lavish baroque interior with ornate gilded carvings. The palatial 19th-century Palácio de Bolsa, formerly a stock market, was built to impress potential European investors.",
      pointsOfInterest: [
            {
                name:"Livraria Lello",
                image: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTQUutzkPf84tZzCQrPpTfMuMbXtovruT2y2QWpdWabY0mrSqhkKc2Sjjw7TnJwysBNV4oSZLNxUQseUGQjoqHRig",
                description:"The Livraria Lello & Irmão, commonly known in English as the Lello Bookstore, is a bookstore located in civil parish of Cedofeita, Santo Ildefonso, Sé, Miragaia, São Nicolau e Vitória, in the northern Portuguese municipality of Porto."
            }, 
            {
                name:"Luís I Bridge",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Dom_Lu%C3%ADs_I_Bridge_%2836961760686%29.jpg/220px-Dom_Lu%C3%ADs_I_Bridge_%2836961760686%29.jpg",
                description:"The Dom Luís I Bridge, or Luís I Bridge, is a double-deck metal arch bridge that spans the River Douro between the cities of Porto and Vila Nova de Gaia in Portugal."
            }, 
            {
                name:"Bolsa Palace",
                image: "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcS1hCNUE2UkEbJkn9Sr46njFKegQMwi5qaeTqE0AI2av1iHE6O-X7l6qQ2wLyFB7w7UuPBt0mx9vRfk_PeDUW5kTA",
                description:"The Stock Exchange Palace is a historical building in Porto, Portugal. The palace was built in the 19th century by the city's Commercial Association in Neoclassical style."
            }
        ]
    },
    { id: 3,
      name: "Braga",
      image: "https://planet-portugal.com/wp-content/uploads/2021/08/braga_portugal-1.jpg",
      description: "Braga is a city in the far north of Portugal, northeast of Porto. It’s known for its religious heritage and events. To the east, Bom Jesus do Monte complex has a neoclassical church atop an elaborate 17-flight stairway. In the city center, medieval Braga Cathedral is home to a sacred art museum and the Gothic-style Kings' Chapel. Nearby, the imposing Archbishop’s Palace overlooks Santa Barbara Garden.",
      pointsOfInterest: [
            {
                name:"Bom Jesus do Monte",
                image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRvznWjt0J14OY0IJlP3BS0P8E_bvPzcYYIUQb7KPWLsaLrxp4vGh0Qjw9bF5IqjrOxfpiEmW_lkSIYoxHI3vzhpQ",
                description:"The Sanctuary of Bom Jesus do Monte is a Portuguese Catholic shrine in Tenões, outside the city of Braga, in northern Portugal. Its name means Good Jesus of the Mount."
            },
            {
                name:"Peneda-Gerês National Park",
                image: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTq5r_rqtSfLi-NnfcoX51j4WcVdJNF8SZhVXahv3TOeZpAZQxJnGjlcM1sFlHe4r7BfFKa-VHonQsWljiqZFzxZg",
                description:"The Peneda-Gerês National Park, also known simply as Gerês, is a national park located in northern Portugal. Created on 8 May 1971, it is the oldest protected area and the only national park in Portugal due to its national and international scientific interest."
            },
            {
                name:"Biscainhos Museum",
                image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTWqDdHPfioYeuMI3nVofZmNymCh9nOI2zvHv6h_nRzwmgHP3Pao5hyKuzGPZ-zmyfvhT-nKmAKXKV2Wt-mFEkQFQ",
                description:"The Residence of Biscainhos, is a former-signeurial residence located in civil parish of Braga, in the municipality of Braga, in northern Portuguese district of Braga."
            }
        ]
    }
]

export const useCity = () => {
    return cityCollection.slice();
}