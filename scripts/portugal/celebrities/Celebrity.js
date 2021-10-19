export const Celebrity = (celebrity) => {
    return `
        <section class="cities-list-portugal">
            <div><img class="thumbnail-img" src="${celebrity.image}" /></div>
            <div class="celebrity-name">${celebrity.name}</div>
            <div class="celebrity-description">${celebrity.descrition}</div>
        </section>
    `
}