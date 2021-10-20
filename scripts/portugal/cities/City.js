export const City = (city) => {
    return `
        <section class="city-list-portugal">
            <div><img class="thumbnail-img" src="${city.image}" alt="image"/></div>
            <div class="city-name">${city.name}</div>
            <div class="city-description">${city.description}</div>
        </section>
    `
}

