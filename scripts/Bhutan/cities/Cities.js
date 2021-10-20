export const City = (taco) => {
    let city__pointsOfInterest = "" 
for ( let singlePoI of taco.pointsOfInterest ) {
    city__pointsOfInterest += `<li>${singlePoI}</li>`
}


    return `
    <section class="city card">
            <h2 class="city title"> Cities to visit</h2>
            <div><img  class="city__image image--card" src="${taco.image}" /></div>
            <h2 class="city__name">${taco.name}</h2>
            <p class="city__description">${taco.description}</p>
            <p class="city__pointsOfInterest"> Points of Interest</p>
            <ul>
             ${city__pointsOfInterest}
            </ul>
        </section>
    `
}

// Crazy code from Tommy
//${taco.pointsOfInterest.map(x =>  `<li>${x}</li>`).join("")}

