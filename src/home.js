import croissantsImage from "./images/home/croissants.jpg";
import cookiesImage from "./images/home/cookies.jpg";

// Function to create text with 2 parameters.
// HTML tag and text content
function createText(text) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;

    return paragraph;
}

// Function to create image with credits. Containing 3 parameters.
// Image source, credit link and credit text.
function createImage(src, creditLink, creditText) {
    const imageContainer = document.createElement("div");
    imageContainer.setAttribute("class", "img-container");

    const image = new Image();
    image.src = src;

    const creditContainer = document.createElement("div");
    creditContainer.setAttribute("class", "credit")

    const credit = document.createElement("a");
    credit.href = creditLink;
    credit.textContent = creditText;

    creditContainer.appendChild(credit);

    imageContainer.appendChild(image);
    imageContainer.appendChild(creditContainer);

    return imageContainer;
}

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

    content.appendChild(descriptionContainer);
};
export default renderHome;