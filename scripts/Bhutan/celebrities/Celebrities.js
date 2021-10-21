export const Celeb = (taco) => {
    return `
        <section class="celeb-card">
            <img  class="celeb__image image--card" src="${taco.image}" />
            <h3 class="celeb__name">${taco.name}</h3>
            <p class="celeb__description">${taco.description}</p>
        </section>
    `
}