import { useCelebrities } from "../celebrities/CelebritiesDataProvider.js";
import { celebrity } from "../celebrities/Celebrity.js";

export const celebrityList = () => {
    const celebrityContainer = document.querySelector('.celebrity-container');
    const celebrities = useCelebrities();

    let celebrityHTMLRepresentation = "";
    for (let singleCelebrity of celebrities) {
        celebrityHTMLRepresentation += celebrity(singleCelebrity);
    }

    celebrityContainer.innerHTML += `
    <div class="album py-5 bg-light celebrity-container">
        <div class="container">
            <div class="row g-3">
                ${celebrityHTMLRepresentation}
            </div>
        </div>
    </div>
    `
}