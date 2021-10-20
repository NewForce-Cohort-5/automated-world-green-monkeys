export const Landmark = (taco) => {
    let landmark__pointsOfInterest = "" 
for ( let singlePoI of taco.pointsOfInterest ) {
    landmark__pointsOfInterest += `<li>${singlePoI}</li>`
}


    return `
    <section class="landmark card">
            <h2 class="landmark title"> Landmarks to visit</h2>
            <div><img  class="landmark__image image--card" src="${taco.image}" /></div>
            <h2 class="landmark__name">${taco.name}</h2>
            <p class="landmark__description">${taco.description}</p>
            <p class="landmark__pointsOfInterest"> Points of Interest</p>
            <ul>
             ${landmark__pointsOfInterest}
            </ul>
        </section>
    `
}