// This is the main image and country name header:
export const countryHdr = () => {
    const contentElement = document.querySelector("#countryHdr")
    
    contentElement.innerHTML += `
        <div class="main-img-portugal">
            <img class="main-img-portugal"src="https://assets3.thrillist.com/v1/image/2418477/1200x630/flatten;crop_down;jpeg_quality=70" alt="Portugal"/>
        </div>
        <div class="country-name-portugal">
            <h1>~PORTUGAL~</h1>
        </div>
        <div class="country-description-portugal">
            <p>Portugal is a southern European country on the Iberian Peninsula, bordering Spain. Its location on the Atlantic Ocean has influenced many aspects of its culture: salt cod and grilled sardines are national dishes, the Algarve's beaches are a major destination and much of the nation’s architecture dates to the 1500s–1800s, when Portugal had a powerful maritime empire.</p>
        </div>
    `
}

// This is for the city list, the cityList_DivElementBuild entire container between the backticks `` will be placed into the html by using the code that is imported into the CityList.js file first, then imported from there into the main.js file, which tells it to place code into the selected class section alotted in the html file.
export const cityList_divElementBuild = (city) => {
    return `
        <section class="city-list-portugal">
            <div><img class="thumbnail-img" src="${city.image}" alt="image"/></div>
            <div class="city-name">${city.name}</div>
            <div class="city-description">${city.description}</div>
        </section>
    `
}




