import { createText, createImage } from "Utilities/utility";
import croissantsImage from "./croissants.jpg";
import cookiesImage from "./cookies.jpg";

// Function to render the home page.
function renderHome() {
    // Select description container with class.
    const descriptionContainer = document.createElement("div");
    descriptionContainer.setAttribute("class", "desc-container");

    // Create short description.
    descriptionContainer.appendChild(createText(
        `"Celebrate Life's Sweet Moments with Ayya's Bakery – Where Every Confection is a Masterpiece."`
        ));

    // Create product image one.
    descriptionContainer.appendChild(createImage(
        croissantsImage, 
        "https://unsplash.com/photos/two-brown-croissants-m9pzwmxm2rk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash", 
        "Photo by Mae Mu on Unsplash"
    ));

    // Create product image two.
    descriptionContainer.appendChild(createImage(
        cookiesImage,
        "https://unsplash.com/photos/brown-cookies-on-round-brown-bowl-kID9sxbJ3BQ?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
        "Photo by Mae Mu on Unsplash"
    ));

    // Create long description.
    const longDescription = document.createElement("div")
    longDescription.setAttribute("class", "description");
    longDescription.appendChild(createText(
        "At Ayya's Bakery, we blend artisanal expertise with a homey touch. Indulge in our freshly baked bread, decadent pastries, and innovative desserts. From classic traditions to modern delights, each treat reflects our commitment to quality and passion for baking."
    ));
    longDescription.appendChild(createText(
        "Discover a world where every bite is an experience, inviting you to savor the essence of homemade goodness."
    ));
    descriptionContainer.appendChild(longDescription);

    // Append description container to the content element.
    // Select content container with id.
    const content = document.getElementById("content");
    content.textContent = "";

    content.appendChild(descriptionContainer);
};
export default renderHome;