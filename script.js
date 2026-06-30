const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwCiHtA8ZX9G1r6XrFF3MIJiho1j88JNccy9Y9jidYtUfAxqw8myiUMbv5_sCSK_9fY/exec";

const form = document.getElementById("contactForm");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const button = form.querySelector("button");

    button.disabled = true;

    button.textContent = "Submitting...";

    const data = {

        name: form.name.value,

        company: form.company.value,

        email: form.email.value,

        mobile: form.mobile.value,

        service: form.service.value,

        message: form.message.value

    };

    try{

        await fetch(SCRIPT_URL,{

            method:"POST",

            redirect:"follow",

            headers:{
                "Content-Type":"text/plain;charset=utf-8"
            },

            body:JSON.stringify(data)

        });

        alert("Thank you! Your enquiry has been submitted successfully.");

        form.reset();

    }

    catch(error){

        console.error(error);

        alert("Unable to submit the enquiry. Please try again.");

    }

    button.disabled = false;

    button.textContent = "Book Free Consultation";

});
