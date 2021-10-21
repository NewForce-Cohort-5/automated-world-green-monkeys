export const topSec = (taco) => {
    return `
    <img  class="topSection__img image--card" src="${taco.image}" alt="bhutan flag" />
     <h3 class="topSection__name">${taco.name}</h3>
     <p class="topSection__description">${taco.description}</p>
    `
}