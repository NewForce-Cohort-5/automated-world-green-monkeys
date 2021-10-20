const celebrityCollection =  [
    {  id: 1,
       name: "Jigme Singye Wangchuck",
       image: "../../../../imgs/bhutan/J_Dorji_W.jpg",
       description: "Jigme Singye Wangchuck is the former King of Bhutan. He was the fourth Dragon King of Bhutan from 1972 until his abdication in favour of his eldest son, Jigme Khesar Namgyel Wangchuck. During his reign, he advocated the use of a Gross National Happiness index to measure the well-being of citizens rather than Gross domestic product."
   },
   {  id: 2,
    name: "Jigme Dorji Wangchuck",
    image: "../../../../imgs/bhutan/J_Singye_W.jpg",
    description: "Jigme Dorji Wangchuck was the Third Druk Gyalpo of Bhutan. He began to open Bhutan to the outside world, began modernization, and took the first steps toward democratization. On 27 October 1952, Jigme Dorji Wangchuck put an end to feudalism and slavery and released all remaining serfs.He established a High court and reorganized the judicial system. In 1953, he established the Tshogdu or National Assembly – Bhutan's first unicameral Parliament. During his reign Bhutan's first planned economic development plan was drafted. "
},
{  id: 3,
    name: "Lama Gyurme",
    image: "../../../../imgs/bhutan/lama.jpg",
    description: "Lama Gyurme, or Lama Gyourmé, is a Buddhist Bhutanese monk and musician. He has lived in France since 1974, and he is the director of the Kagyu-Dzong center in Paris and, since 1982, the Vajradhara-Ling center in Normandy. Born in Bhutan in 1948, he was entrusted by his family at the age of four to the monastery of Djang Tchub Tcheu Ling in Bhutan where his interest in sacred music appeared quickly. At the age of nine, he became a permanent resident of the monastery where he received Buddhist teachings, completed by an initiation to traditional arts, including music. At the age of 20, he followed his first spiritual retreat of three years, three months and three days, necessary to the formation of Lama, at the monastery of Sonada in India of which the director is Kalu Rinpoche. During this retreat, he was given the title of 'Oumze' — master of music — by Kalu Rinpoche. After a stay at the monastery of Rumtek in Sikkim, he fulfilled his religious education in Bhutan before obtaining his diploma of teacher of the Kagyupa tradition that was given to him by the 16th Karmapa. In 1995 and in 1998, Gyurme went on a pilgrimage to Tibet and visited the 17th Karmapa Orgyen Trinley Dorje in the monastery of Tsurphu. He presented him his project of construction of the Temple for Peace."
},
]

export const useCeleb = () => {
    return celebrityCollection.slice()
}