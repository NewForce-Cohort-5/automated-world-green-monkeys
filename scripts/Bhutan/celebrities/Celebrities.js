export const Celeb = (taco) => {
    return `
        <section class="celeb card">
            <h2 class="celeb title"> Notable Bhutaneses</h2>
            <div><img  class="celeb__image image--card" src="${taco.image}" /></div>
            <h2 class="celeb__name">${taco.name}</h2>
            <p class="celeb__description">${taco.description}</p>
        </section>
    `
}