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
    ${cityHTMLRepresentations}
    </article>
    `
}

