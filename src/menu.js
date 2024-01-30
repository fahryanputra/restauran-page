import { createText, createImage } from "./helper";
import breadImage from "./images/menu/artisanal-bread.jpg";
import dessertImage from "./images/menu/decadent-dessert.jpg";
import breakfastImage from "./images/menu/sunrise-delights.jpg";
import teaImage from "./images/menu/tea-time.jpg";

// Create menu factory function.
function createMenu(name, description, image, creditLink, creditText) {
    const getName = () => name;
    const getDescription = () => description;
    const getImage = () => image;
    const getCreditLink = () => creditLink;
    const getCreditText = () => creditText;

    return {getName, getDescription, getImage, getCreditLink, getCreditText}
};

// Create menu items.
function menuItems() {
    const menu = [];
    menu.push(createMenu("Sunrise Delights", "Start your day with our selection of freshly baked croissants, muffins, and hearty breakfast pastries.", breakfastImage, "https://unsplash.com/photos/brown-bread-on-white-paper-t7jTtJ9iyUE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash", "Photo by Nicholas Doyle on Unsplash"));
    menu.push(createMenu("Artisanal Bread Extravaganza", "Discover the world of handcrafted bread with our artisanal loaves, rolls, and specialty breads – each a testament to our passion for baking.", breadImage, "https://unsplash.com/photos/brown-bread-on-white-textile-mha2dvydACg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash", "Photo by Monika Grabkowska on Unsplash"));
    menu.push(createMenu("Tea-time Temptations", "Elevate your afternoon with a delightful assortment of cookies, scones, and petit fours – perfect companions for your favorite tea or coffee.", teaImage, "https://unsplash.com/photos/a-plate-with-a-pastry-and-a-cup-of-tea-YmlaAxDeLRs?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash", "Photo by Serghei Savchiuc on Unsplash"));
    menu.push(createMenu("Decadent Desserts Duets", "Indulge in our irresistible cakes, pies, and tarts – a sweet symphony of flavors to satisfy every dessert lover's craving.", dessertImage, "https://unsplash.com/photos/baked-pastry-on-bowl-n49BjsFf5dI?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash", "Photo by Kirsten Drew on Unsplash"));

    return menu;
};

function renderMenu() {
    const cardContainer = document.createElement("div");
    cardContainer.setAttribute("class", "cards");

    menuItems().forEach(element => {
        const card = document.createElement("div");
        card.setAttribute("class", "card");

        card.appendChild(createImage(
            element.getImage(),
            element.getCreditLink(),
            element.getCreditText(),
        ));

        const title = document.createElement("div");
        title.setAttribute("class", "title");
        title.appendChild(createText(element.getName()));

        const description = document.createElement("div");
        description.setAttribute("class", "desc");
        description.appendChild(createText(element.getDescription()))

        card.appendChild(title);
        card.appendChild(description);

        cardContainer.appendChild(card);
    });

    const content = document.getElementById("content");
    content.textContent = "";

    content.appendChild(cardContainer);
};

export default renderMenu;