/* Add your JavaScript to this file */
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".newsletter form");
    const input = document.querySelector("#email");
    const message = document.querySelector(".newsletter .message");


    form.addEventListener("submit", (e) => {
        e.preventDefault();

    const email = input.value.trim();
    
    if (email === ""){
        message.textContent = "Please enter a valid email address";

    } else{
        message.textContent = `Thank you! Your email address ${email} has been added to our mailing list`;
        form.reset();
    }

    })


})


