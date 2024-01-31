import 'Templates/style.css';

import renderHome from './components/home/home';
import renderMenu from './components/menu/menu';
import renderContact from './components/contact/contact';

function setActiveButton(button) {
    const buttons = document.querySelectorAll(".btn-nav");

    buttons.forEach(button => {
        if(button !== this) {
            button.classList.remove("active");
        }
    });

    button.classList.add("active");
};

function navController() {
    // Initialize variable
    const homeButton = document.querySelector(".nav-home");
    const menuButton = document.querySelector(".nav-menu");
    const contactButton = document.querySelector(".nav-contact");

    // Create action for each button
    homeButton.addEventListener("click", (e) => {
        if(e.target.classList.contains("active")) {
            return;
        }
        setActiveButton(homeButton);
        renderHome();
    });
    menuButton.addEventListener("click", (e) => {
        if(e.target.classList.contains("active")) {
            return;
        }
        setActiveButton(menuButton);
        renderMenu();
    });
    contactButton.addEventListener("click", (e) => {
        if(e.target.classList.contains("active")) {
            return;
        }
        setActiveButton(contactButton);
        renderContact();
    });
};

navController();
renderHome();
