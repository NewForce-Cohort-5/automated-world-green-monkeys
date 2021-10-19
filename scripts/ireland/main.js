import { navbar } from "../navbar/Navbar.js";


const displayNavbar = () => {
    const nav = navbar();
    const header = document.querySelector('header');
    header.innerHTML += `
        ${nav}
    `
}

displayNavbar();

