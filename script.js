// HAMBURGER MENU
/* On the hamburger/nav button
    - on click, show the slide-out menu
    - on click, hide the hamburger button (class navButton) */

/*  On the X button on the slide-out nav
    - on click, hide the slide-out menu
    - on click, hide the class of hamburger menu */

// Defining Variables
const hamElement = document.querySelector(".navButton");
const slideOutMenu = document.querySelector(".slideOutNav");
const hamCloseButton = document.querySelector(".xButton");

// On click, open slide-out nav and remove hamburger icon
hamElement.addEventListener("click", () => {
    slideOutMenu.classList.add("slideOutNavOpen");
    hamElement.style.display = "none";
    /* personal note: 
    what I target.object.method (add is exclusive to the classList). Classlist specifies that this is a class so you don't need the dot! */
})

// On click, close slide-out nav and show hamburger icon
hamCloseButton.addEventListener("click", () => {
    slideOutMenu.classList.remove("slideOutNavOpen");
    hamElement.style.display = "block";
})

// CONTACT FORM 
/* Upon submission of form (conditional - content should not be blank): 
    - remove the contact form
    - replace with confirmation message on screen (create)
    - clear original values entered 
    - create refresh button to return to original page
*/

// Defining Variables 
const submitForm = document.querySelector(".sendForm");
const nameElement = document.querySelector("input");
const emailElement = document.querySelector("input#email");
const messageElement = document.querySelector("textarea");
const contactForm = document.querySelector(".myForm");
const refreshButton = document.querySelector(".refreshButton");

// Function for contact form 
contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (contactForm !== '') {
        // Create div & h2 submission confirmation message
        let div = document.createElement('div');
        div.id = 'newText';
        div.className = 'new';
        let h2 = document.createElement('h2');
        const fullName = nameElement.value;
        h2.textContent = `Thank you for your message, ${fullName}. We will get back to you within 1-2 business days!`;
        div.appendChild(h2);
        const removedForm = document.querySelector(".fillForm");
        removedForm.appendChild(div);

    // Clear values 
        nameElement.value = "";
        emailElement.value = "";
        messageElement.value = "",
            
    // Remove contact form elements
            contactForm.style.display = "none";
        
    // Refresh Button
        refreshButton.style.display = "block";
    }  
})

// IMAGE CAROUSEL 