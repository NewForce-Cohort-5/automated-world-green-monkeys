const celebrityCollection = [
    {
        id: 1,
        name: "Bono",
        image: "https://www.irelandbeforeyoudie.com/wp-content/uploads/2019/06/bono-1024x536.jpg",
        description: "Bono was born in Dublin on 10th May in 1962 and joined the band U2 when he was in secondary school. After they recorded their sixth album “The Joshua Tree”, they hit mainstream success and become international stars. Bono, U2’s lead singer, has used his celebrity status to aid philanthropic causes, such as addressing the issues related to world poverty and AIDS.",

    },
    {
        id: 2,
        name: "Conor McGregor",
        image: "https://www.irelandbeforeyoudie.com/wp-content/uploads/2018/11/mcgregor.jpg",
        description: "Perhaps he is one of the most controversial figures on our list, but whether you love him or love to hate him, you can’t deny that Conor McGregor has become famous across the world. Conor McGregor was born on the 14th of July in 1988 in Dublin and has become one of the most famous fighters in professional mixed martial arts.",

    },
    {
        id: 3,
        name: "Liam Neeson",
        image: "https://www.irelandbeforeyoudie.com/wp-content/uploads/2019/08/liam-neeson.jpg",
        description: "Liam Neeson is a famous Irish actor who was born on the 7th of June in 1952 in Ballymena, County Antrim. Liam Neeson was somewhat of a late bloomer as an actor, as he was in his 40s when he really began to make a breakthrough, but from then on, he had success after success as he starred in many great films and received Oscar, BAFTA, and Golden Globe nominations.",

    },
]

export const useCelebrities = () => {
    return celebrityCollection.slice();
}