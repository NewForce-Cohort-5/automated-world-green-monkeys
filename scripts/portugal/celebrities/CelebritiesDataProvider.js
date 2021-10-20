const celebrityCollection = [
    { id: 1,
      name: "Luís Figo",
      image: "https://www.thefamouspeople.com/profiles/thumbs/lus-figo-6.jpg",
      description: "Luís Filipe Madeira Caeiro Figo is a retired Portuguese footballer who played for Sporting CP, Barcelona, Real Madrid and Internazionale. He was not only one of the greatest footballers of his country but also one of the greatest midfielders that football has ever seen.",
    //   pointsOfInterest: ["Born November 4, 1972 in Lisbon.", "FIFA World Player of the Year award in 2001."]
    },
    { id: 2,
      name: "Almeida Garrett",
      image: "https://portoalities.com/wp-content/uploads/2019/08/almeida-garrett-portuguese-writer-from-porto.jpg",
      description: "Known for being the main figure in Portuguese Romanticism and is one of the most famous Portuguese people from Porto. Notable examples of his work are Frei Luís de Sousa and Romanceiro or, Traditional Portuguese Ballads which explore the themes of national independence, love and religion.",
    //   pointsOfInterest: ["Wrote mainly under the proponents of the Romantic movement.", "A politician that took part in the Liberal Revolution of 1820."]
    },
    { id: 3,
      name: "Raquel Camarinha",
      image: "https://static.wixstatic.com/media/3731bd_92735e276f2f4516819b6dc7b894281b~mv2.jpg/v1/fill/w_508,h_727,al_c,q_85,usm_0.66_1.00_0.01/3731bd_92735e276f2f4516819b6dc7b894281b~mv2.webp",
      description: "A Portuguese operatic soprano. In 2011, she received the first prize at the Luísa Todi National Singing Competition. Camarinha's repertoire ranges from Baroque to contemporary music.",
    //   pointsOfInterest: ["Born in 1986 in Braga", "Awarded Best Female Performer Award at the Armel Opera Competition in Hungary in 2011"]
    }
]

export const useCelebrity = () => {
    return celebrityCollection.slice();
}
