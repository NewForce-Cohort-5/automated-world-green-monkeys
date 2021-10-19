import { uselandmarks } from "./BahamasLandmarkDataProvider";

export const BahamasLandmark = (bahamaslandmark) => {
    return `
        <section class="BahamasLandmarkCard">
        <div class="BahamasLandmarkId">${bahamaslandmark.id}</div>                       
            <div class="BahamaCelebrityName">${bahamaslandmark.name}</div>
            <div class="BahamaCelebrityDescription">${bahamaslandmark.location}</div>
            <div><img  class="" src="${bahamaslandmark.image}" /></div> 
            
        </section>
    `
}