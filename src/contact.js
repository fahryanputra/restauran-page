import { createIcon, createText } from "./helper";

function renderContact() {
    const contactContainer = document.createElement("div");
    contactContainer.setAttribute("class", "contact-container");

    const contact = document.createElement("div");
    contact.setAttribute("class", "contact");

    const phone = document.createElement("div");
    phone.appendChild(createIcon("call"));
    phone.appendChild(createText("+628123456789"))

    const address = document.createElement("div");
    address.appendChild(createIcon("location_on"));
    address.appendChild(createText("Jl. Asli no tipu-tipu no. 14"));

    const map = document.createElement("div");
    map.innerHTML = `<div style="width: 100%"><iframe width="600" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=jakarta+(Ayya's%20Bakery)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Find Population on Map</a></iframe></div>`;
    

    contact.appendChild(phone);
    contact.appendChild(address);
    
    contactContainer.appendChild(contact);
    
    const content = document.getElementById("content");
    content.textContent = "";
    content.appendChild(contactContainer);
    content.appendChild(map);
}

export default renderContact;