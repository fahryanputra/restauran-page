import './style.css';

import renderHome from './home';
import renderMenu from './menu';

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
    const homeButton = document.querySelector(".home");
    const menuButton = document.querySelector(".menu");
    const contactButton = document.querySelector(".contact");

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
};

navController();
renderHome();
