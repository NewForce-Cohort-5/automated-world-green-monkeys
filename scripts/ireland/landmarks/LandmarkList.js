import { useLandmarks } from "../landmarks/LandmarkDataProvider.js";
import { landmark } from "../landmarks/Landmark.js";


export const landmarkList = () => {
    const landmarkContainer = document.querySelector('.landmark-container');
    const landmarks = useLandmarks();

    let landmarkHTMLRepresentation = "";
    for (let singleLandmark of landmarks) {
        landmarkHTMLRepresentation += landmark(singleLandmark);
    }

    landmarkContainer.innerHTML += `
    <div class="album py-5 bg-light city-container">
        <div class="container">
            <div class="row g-3">
                ${landmarkHTMLRepresentation}
            </div>
        </div>
    </div>
    `
}