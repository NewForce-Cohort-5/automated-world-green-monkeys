import { useCity } from "./CityDateProvider.js";
import { City } from "./Cities.js";

export const CityList = () => {
    const contentElementCity = document.querySelector(".country__city")

    const cities = useCity ()
    let cityHTMLRepresentations = " "
    
    
        for (const singleCityObject of cities){
        cityHTMLRepresentations += City(singleCityObject)
            
    }
    contentElementCity.innerHTML += `
    <article class="cityList">
    <h2> Cities to Visit </h2>
    ${cityHTMLRepresentations}
    </article>
    `
}

