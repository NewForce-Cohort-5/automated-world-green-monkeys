import { useCelebrity } from "./CelebritiesDataProvider.js"
import { celebrityList_divElementBuild  } from "./Celebrity.js"

 export const celebrityList = () => {
    const contentElement = document.querySelector(".celebrity-list-container")
    const celebrityList_groupObject = useCelebrity()

    let celebrityHTMLRepresentation = ""
    for (const celebrityList_singleObject of celebrityList_groupObject) {
        celebrityHTMLRepresentation += celebrityList_divElementBuild(celebrityList_singleObject)
    }

    contentElement.innerHTML += `
        <div class ="sub-header">
            <h2>Celebrities</h2>
        </div>
        <div class="celebrityList">
            ${celebrityHTMLRepresentation}
        </div>`
 }