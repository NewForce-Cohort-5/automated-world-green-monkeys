import { navbarMarkup } from "../navbar/Navbar.js";
import { footerMarkup } from "../footer/Footer.js";
import { cityList } from "../ireland/cities/CityList.js";
import { landmarkList } from "../ireland/landmarks/LandmarkList.js";

const displayNavbar = () => {
    const navbar = navbarMarkup();
    const headerContainer = document.querySelector('header');
    headerContainer.innerHTML += `
        ${navbar}
    `
}

const displayFooter = () => {
    const footer = footerMarkup();
    const footerContainer = document.querySelector('footer');
    footerContainer.innerHTML += `
        ${footer}
    `
}

displayNavbar();
cityList();
landmarkList();
displayFooter();

