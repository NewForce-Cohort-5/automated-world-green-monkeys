import { useCeleb } from "./CelebritiesDateProvider.js";
import { Celeb } from "./Celebrities.js";

export const CelebList = () => {
    const contentElementCeleb = document.querySelector(".country__celeb")

    const celebs = useCeleb ()

    let celebHTMLRepresentations = " "
    for (const singleCelebObj of celebs){
        celebHTMLRepresentations += Celeb(singleCelebObj)
    }
    contentElementCeleb.innerHTML += `
    <article class="celebList">
    ${celebHTMLRepresentations}
    </article>
    `
}