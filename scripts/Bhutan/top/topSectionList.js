import { useBhutanTop } from "./topSectionDataProvider.js";
import { topSec } from "./topSection.js";

export const TopSecList = () => {
    const contentElementTop = document.querySelector(".topSection")

    const tops = useBhutanTop ()
    let BhutanTopSectionHTMLRepresentations = " "

    for (const singleObj of tops) {
        BhutanTopSectionHTMLRepresentations += topSec(singleObj)
    }
    contentElementTop.innerHTML += `
        ${BhutanTopSectionHTMLRepresentations}
        `
}