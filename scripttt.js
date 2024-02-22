document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-us-form");
    const messageContainer = document.getElementById("message-container");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // You can add form validation logic here

        // Simulate a successful submission
        messageContainer.textContent = "Message sent successfully!";
        messageContainer.style.color = "green";

        // Clear the form fields
        form.reset();
    });
});

