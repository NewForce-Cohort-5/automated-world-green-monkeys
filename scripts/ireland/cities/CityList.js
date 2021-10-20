import { useCities } from "../cities/CityDataProvider.js";
import { city } from "../cities/City.js";

export const cityList = () => {
    const cityContainer = document.querySelector('.city-container');
    const cities = useCities();

    let cityHTMLRepresentation = "";
    for (let singleCity of cities) {
        cityHTMLRepresentation += city(singleCity);
    }

    cityContainer.innerHTML += `
    <div class="album py-5 bg-light city-container">
        <div class="container">
            <div class="row g-3">
                ${cityHTMLRepresentation}
            </div>
        </div>
    </div>
    `
}