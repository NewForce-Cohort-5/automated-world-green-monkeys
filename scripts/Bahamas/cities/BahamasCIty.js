import { useCities } from "..//cities/BahamasCityDataProvider.js"

export const BahamasCities = (bahamascity) => {
    return `
        <section class="BahamaCityCard">
            <div class="BahamaCityId">${bahamascity.id}</div>                       
            <div class="BahamaCityName">${bahamascity.name}</div>
            <div class="BahamaCitydescription">${bahamascity.description}</div>
            <div class="BahamaCitypointsOfInterest">${bahamascity.pointsOfInterest}</div>
            <div ><img  class="" src="${bahamascity.image}" /></div>
            
        </section>
    `
}