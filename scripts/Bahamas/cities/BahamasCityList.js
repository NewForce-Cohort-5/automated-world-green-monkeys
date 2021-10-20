import { useCities } from "../cities/BahamasCityDataProvider.js"
import {BahamasCities} from "../cities/BahamasCity.js"

export const CityList = () => {
    const contentCity = document.querySelector("#BahamasCity")
    const Cities = useCities()

    let CityHTMLRepresentations = ""
    for (const singleCityObject of Cities){
        CityHTMLRepresentations += BahamasCities(singleCityObject)
    }


    contentCity.innerHTML += `
    <article class="BahamasCities">
        ${CityHTMLRepresentations}
    </article>
`


}