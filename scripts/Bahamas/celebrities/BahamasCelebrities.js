import { useBahamasCelebrities } from "./BahamasCelebritiesDataProvider"

export const BahamasCelebrity = (bahamascelebrity) => {
    return `
        <section class="BahamaCelebrityCard">
        <div class="BahamaCelebrityId">${bahamascelebrity.id}</div>
            <div><img  class="" src="${bahamascelebrity.image}" /></div>            
            <div class="BahamaCelebrityName">${bahamascelebrity.name}</div>
            <div class="BahamaCelebrityDescription">${bahamascelebrity.description}</div>
            
        </section>
    `
}