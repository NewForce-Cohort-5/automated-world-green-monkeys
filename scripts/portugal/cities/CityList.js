import { useCity } from "./CityDataProvider.js"
import { City } from "./City.js"


// This is for the main picture and country name heading at top of the page.
export const countryHdr = () => {
    const contentElement = document.querySelector("#countryHdr")
    
    contentElement.innerHTML += `
        <div class="main-img-portugal">
            <img class="main-img-portugal"src="https://assets3.thrillist.com/v1/image/2418477/1200x630/flatten;crop_down;jpeg_quality=70" alt="Portugal"/>
        </div>
        <div class="country-name-portugal">
            <h1>~PORTUGAL~</h1>
        </div>
    `
}


// This is for the city list from City.js file
 export const CityList = () => {
    const contentElement = document.querySelector(".city-list-container-portugal")
    const city = useCity()

    let cityHTMLRepresentation = ""
    for (const cityListObject of city) {
        cityHTMLRepresentation += City(cityListObject)
    }

    contentElement.innerHTML += `
        <div class="CityList">
            ${cityHTMLRepresentation}
        </div>`
 }