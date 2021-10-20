import { useLandmark } from "./LandmarkDataProvider.js"
import { landmarkList_divElementBuild  } from "./Landmark.js"

 export const landmarkList = () => {
    const contentElement = document.querySelector(".landmark-list-container-portugal")
    const landmarkList_groupObject = useLandmark()

    let landmarkHTMLRepresentation = ""
    for (const landmarkList_singleObject of landmarkList_groupObject) {
        landmarkHTMLRepresentation += landmarkList_divElementBuild(landmarkList_singleObject)
    }

    contentElement.innerHTML += `
        <div class="landmarkList">
            ${landmarkHTMLRepresentation}
        </div>`
 }