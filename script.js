// ======================================
// ANUKAMPA WEBSITE
// Main JavaScript
// ======================================

// Google Apps Script URL
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwCiHtA8ZX9G1r6XrFF3MIJiho1j88JNccy9Y9jidYtUfAxqw8myiUMbv5_sCSK_9fY/exec";


// ======================================
// Smooth Scrolling
// ======================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


// ======================================
// Scroll Reveal Animation
// ======================================

const reveals = document.querySelectorAll("section");

function reveal(){

    const trigger = window.innerHeight * 0.85;

    reveals.forEach(section=>{

        const top = section.getBoundingClientRect().top;

        if(top < trigger){

            section.classList.add("active");

        }

    });

}

window.addEventListener("scroll", reveal);

reveals.forEach(section=>{

    section.classList.add("reveal");

});

reveal();


// ======================================
// Contact Form Submission
// ======================================

const form = document.getElementById("contactForm");

if(form){

    form.addEventListener("submit", async function(e){

        e.preventDefault();

        const button = form.querySelector("button");

        button.disabled = true;

        button.innerHTML = "Submitting...";

        const data = {

            name: form.name.value,

            company: form.company.value,

            email: form.email.value,

            mobile: form.mobile.value,

            service: form.service.value,

            message: form.message.value

        };

        try{

            const response = await fetch(SCRIPT_URL,{

                method:"POST",

                headers:{
                    "Content-Type":"text/plain;charset=utf-8"
                },

                body: JSON.stringify(data)

            });

            if(response.ok){

                alert("✅ Thank you! Your enquiry has been submitted successfully.");

                form.reset();

            }else{

                alert("❌ Unable to submit your enquiry.");

            }

        }catch(error){

            console.error(error);

            alert("❌ Something went wrong. Please try again.");

        }

        button.disabled = false;

        button.innerHTML = "Book Free Consultation";

    });

}
/* ==========================
   BOOK CONSULTATION MODAL
========================== */

const bookingModal = document.getElementById("bookingModal");

const bookingButtons = document.querySelectorAll(".consultation-btn");

const closeBooking = document.querySelector(".close-modal");

bookingButtons.forEach(btn => {

    btn.addEventListener("click", function(e){

        e.preventDefault();

        bookingModal.style.display="flex";

    });

});

closeBooking.onclick=function(){

    bookingModal.style.display="none";

}

window.onclick=function(e){

    if(e.target==bookingModal){

        bookingModal.style.display="none";

    }

}
