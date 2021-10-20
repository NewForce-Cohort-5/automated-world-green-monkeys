export const celebrityList_divElementBuild = (celebrity) => {
    return `
        <section class="celebrity-list">
            <div><img class="thumbnail-img" src="${celebrity.image}" alt="image"/></div>
            <div class="celebrity-name">${celebrity.name}</div>
            <div class="celebrity-description">${celebrity.description}</div>
        </section>
    `
}