import { City } from "./City.js"


export const countryName = () => {
    const contentElement = document.querySelector("#countryName")
    
    contentElement.innerHtmL += `
        <div class="main-img-portugal">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg" alt="Portugal Flag"/>
        </div>
        <div class="country-name-portugal">
            <h2>~PORTUGAL~</h2>
        </div>
    `
}