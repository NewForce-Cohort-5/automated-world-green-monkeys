export const Landmark = (taco) => {
    let landmark__pointsOfInterest = "" 
for ( let singlePoI of taco.pointsOfInterest ) {
    landmark__pointsOfInterest += `<li>${singlePoI}</li>`
}


    return `
    <section class="landmark-card">
            <img  class="landmark__image image--card" src="${taco.image}" />
            <h3 class="landmark__name">${taco.name}</h3>
            <p class="landmark__description">${taco.description}</p>
            <p class="landmark__pointsOfInterest"> Points of Interest</p>
            <ul>
             ${landmark__pointsOfInterest}
            </ul>
        </section>
    `
}