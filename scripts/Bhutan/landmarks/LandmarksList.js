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
    <section class="landmarkList">
    <h2 class="landmark title"> Landmarks to Visit</h2>
    ${landmarkHTMLRepresentations}
    </section>
    `
}