const landmarkCollection = [
    {
        id: 1,
        name: "Cliffs of Moher",
        location: "Liscannor village in County Clare",
        image: "https://www.irelandbeforeyoudie.com/wp-content/uploads/2019/04/cliffs-of-moher-clare-bucket-list-2.jpg",
        description: "Ireland’s most popular tourist attraction and undoubtedly the most famous landmark in Ireland, the Cliffs of Moher are awe-inspiring sea cliffs situated off the southwestern edge of the Burren region in County Clare. The cliffs span a total of 8 miles and reach a maximum height of 700 feet just north of O’Brien’s Tower."

    },
    {
        id: 2,
        name: "General Post Office",
        location: "Dublin",
        image: "https://www.irelandbeforeyoudie.com/wp-content/uploads/2018/05/gpo-dublin.jpg",
        description: "One of the most famous landmarks in Ireland, especially when it comes to Irish history, is the General Post Office in Dublin, the headquarters of the 1916 Easter Rising and the steps upon where Padraig Pearse read aloud the Proclamation of the Irish Republic."
    
    },
    {
        id: 3,
        name: "Kilmainham Gaol",
        location: "Dublin",
        image: "https://www.irelandbeforeyoudie.com/wp-content/uploads/2018/09/kilmainham-dublin-things-to-do-1024x837.jpg",
        description: "One of Dublin’s most iconic historical landmarks, Kilmainham Gaol imprisoned some of the most important figures throughout Irish history, such as Charles Stewart Parnell."
        
    }
]

export const useLandmarks = () => {
    return landmarkCollection.slice();
}