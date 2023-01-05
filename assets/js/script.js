'use strict';

/**
 * navbar toggle
 */

const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const header = document.querySelector("[data-header]");

navToggleBtn.addEventListener("click", function () {
  this.classList.toggle("active");
  header.classList.toggle("active");
});



/**
 * show go top btn when scroll window to 500px
 */

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  window.scrollY >= 500 ? goTopBtn.classList.add("active")
    : goTopBtn.classList.remove("active");
});

//submitForm function
function submitForm() {
  // Get the values of the form fields
  var fullName = document.getElementById("fullName").value;
  var email = document.getElementById("email").value;
  var phoneNumber = document.getElementById("phoneNumber").value;
  var message = document.getElementById("message").value;

  // Check if all the required fields have been filled out
  if (fullName && email && phoneNumber && message) {
    // All the required fields have been filled out, so submit the form
    alert("Thank you for your message! We will get back to you as soon as possible.");
  } else {
    // One or more of the required fields are empty, so show an error message
    alert("Error: Please fill out all the required fields.");
  }
}