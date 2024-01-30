import renderHome from './home';

function NavController() {
    // Initialize variable
    const homeButton = document.querySelector("class", "home");
    const menuButton = document.querySelector("class", "menu");
    const contactButton = document.querySelector("class", "contact");

    // Create action for each button
    homeButton.addEventListener("click", (e) => {
        if(e.target.classList.contains("active")) {
            return;
        }
    });
};

renderHome();