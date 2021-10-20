 const BahamascelebritiesCollection =     
[    
    {id: 1 ,
    name: 'Sidney Poitier',
    image: "https://www.biography.com/.image/t_share/MTgwNDYwNDY0NTkxODczOTAw/sidney-poitier-oscar.jpg" ,
    description: 'Bahamian-American retired actor, film director, activist, and ambassador. In 1964, he won the Academy Award for Best Actor, becoming the first black male and Bahamian actor to win the award.' ,
    } ,
    
    {id: 2 ,
    name: 'Buddy Hield' ,
    image: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2990984.png&w=350&h=254" ,
    description: 'Chavano Rainer "Buddy" Hield is a Bahamian professional basketball player for the Sacramento Kings of the National Basketball Association.' 
    } ,
    
    {id: 3 ,
    name: 'Debbie Ferguson-McKenzie',
    image: "https://upload.wikimedia.org/wikipedia/commons/6/61/Debbie_Ferguson.jpg",
    description:  'a former Bahamian sprint athlete who specialised in the 100 and 200 metres. Ferguson-Mckenzie participated in five Olympics.'  
    }
]

export const useBahamasCelebrities = () => {
    return BahamascelebritiesCollection.slice()
}