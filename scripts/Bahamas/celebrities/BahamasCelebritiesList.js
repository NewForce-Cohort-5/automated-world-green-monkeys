import { useBahamasCelebrities } from "../celebrities/BahamasCelebritiesDataProvider.js";
import {BahamasCelebrity} from "../celebrities/BahamasCelebrities.js"

export const CelebList = () => {
    const contentCeleb = document.querySelector("#BahamasCelebrites")
    const Celebs = useBahamasCelebrities()

    let CelebHTMLRepresentations = ""
    for (const singleCelebObject of Celebs){
        CelebHTMLRepresentations += BahamasCelebrity(singleCelebObject)
    }


    contentCeleb.innerHTML += `
    <article class="BahamasCelebrites">
        ${CelebHTMLRepresentations}
    </article>
`


}