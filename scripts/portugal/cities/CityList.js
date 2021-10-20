import { useCity } from "./CityDataProvider.js"
import { cityList_divElementBuild  } from "./City.js"

// This is for the city list from City.js file, cityList becomes the item we export and call out in the main.js code
 export const cityList = () => {
    const contentElement = document.querySelector(".city-list-container")
    const cityList_groupObject = useCity()

    let cityHTMLRepresentation = ""
    for (const cityList_singleObject of cityList_groupObject) {
        cityHTMLRepresentation += cityList_divElementBuild(cityList_singleObject)
    }

    contentElement.innerHTML += `
        <div class="cityList">
        <div class ="sub-header">
            <h2>Cities</h2>
        </div>
            ${cityHTMLRepresentation}
        </div>`
 }