const citiesCollection = [  
  { id: 1,
    name: "Thimphu",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/87/f3/80/caption.jpg?w=900&h=-1&s=1",
    description: "the capital and the largest city of Bhutan.  It is located in the western central part of the country. The capital is the fifth highest capital in the world by altitude.  Its altitude ranses from 7,375 feet (2,248 metres) to 8,688 feet (2,648 metres). ",
    pointsOfInterest:["The National Folk Heritage Museum", "The Royal Textile Academy"]
  },
  { id: 2,
    name: "Paro",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/a1/42/75/photo4jpg.jpg?w=2200&h=-1&s=1",
    description: "This is a historic town located in the Paro Valley known the most beautiful valley in the county.",
    pointsOfInterest: ["Paro River", "Tachogang Lhakhang Bridge"]
  },
  { id: 3,
    name: "Punakha",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/a1/42/75/photo4jpg.jpg?w=2200&h=-1&s=1",
    description: " It is about 45 miles (72 km) away from Thimphu, and it takes about 3 hours by car from the capital, Thimphu. Unlike Thimphu, it is quite warm in winter and hot in summer. It is located at an elevation of 3937 feet (1,200 meter) above sea level, and rice is grown as the main crop along the river valleys of two main rivers of Bhutan, the Pho Chu and Mo Chu..",
    pointsOfInterest: ["Punakha Suspension Bridge", "Punakha Dzong"]
  }
]

export const useCity = () => {
  return citiesCollection.slice()
}