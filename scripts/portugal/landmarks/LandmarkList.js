import { useLandmark } from "./LandmarkDataProvider.js"
import { landmarkList_divElementBuild  } from "./Landmark.js"

 export const landmarkList = () => {
    const contentElement = document.querySelector(".landmark-list-container")
    const landmarkList_groupObject = useLandmark()

    let landmarkHTMLRepresentation = ""
    for (const landmarkList_singleObject of landmarkList_groupObject) {
        landmarkHTMLRepresentation += landmarkList_divElementBuild(landmarkList_singleObject)
    }

    contentElement.innerHTML += `
        <div class ="sub-header">
            <h2>Landmarks</h2>
        </div>
        <div class="landmarkList">
            ${landmarkHTMLRepresentation}
        </div>`
 }