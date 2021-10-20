export const landmarkList_divElementBuild = (landmark) => {
    return `
        <section class="landmark-list">
            <div><img class="thumbnail-img" src="${landmark.image}" alt="image"/></div>
            <div class="landmark-name">${landmark.name}</div>
            <div class="landmark-location">${landmark.location}</div>
            <div class="landmark-description">${landmark.description}</div>
        </section>
    `
}