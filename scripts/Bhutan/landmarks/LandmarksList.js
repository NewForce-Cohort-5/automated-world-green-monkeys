import { useLandmark } from "./LandmarkDateProvider.js";
import { Landmark } from "./Landmarks.js";

export const LandmarkList = () => {

    const contentElementLandmark = document.querySelector(".country__landmark")

    const landmarks = useLandmark ()
    let landmarkHTMLRepresentations = " "

    for (const singleLandmarkObject of landmarks) {
        landmarkHTMLRepresentations += Landmark (singleLandmarkObject)
    }
    contentElementLandmark.innerHTML += `
    <article class="landmarkList">
    ${landmarkHTMLRepresentations}
    <article>
    `
}