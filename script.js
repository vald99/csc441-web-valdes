// Class 15: Step 1: this file is running
console.log("script.js is running")

// Class 15: Step 2: put this year in the footer
const yearSpan = document.querySelector("#year");

if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

// Lab 15: Task 5: one more thing that reacts
const cycleGreetSpan = document.querySelector("#cycleGreet");

if (cycleGreetSpan) {
    const timeOfDay = new Date().getHours();
    const morningTime = new Set([6, 7, 8, 9, 10, 11]);
    const afternoonTime = new Set([12, 13, 14, 15, 16, 17]);
    const eveningTime = new Set([18, 19, 20, 21, 22, 23]);
    const nightTime = new Set([0, 1, 2, 3, 4, 5]);

    if (morningTime.has(timeOfDay)) {
        cycleGreetSpan.textContent = "Good morning,"
    } else if (afternoonTime.has(timeOfDay)) {
        cycleGreetSpan.textContent = "Good afternoon,"
    } else if (eveningTime.has(timeOfDay)) {
        cycleGreetSpan.textContent = "Good evening,"
    } else if (nightTime.has(timeOfDay)) {
        cycleGreetSpan.textContent = "Good night,"
    } else {
        cycleGreetSpan.textContent = "Hey,"
    }
}

// Class 15: Step 3: a button that changes the page
const themeButton = document.querySelector("#theme-toggle");

if (themeButton) {
    // Lab 15: Task 4: use the saved choice on arrival
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
        themeButton.textContent = "Light";
    }

    // Lab 15: Task 3: the button says what it will do
    themeButton.addEventListener("click", function () {
        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            themeButton.textContent = "Light";
            localStorage.setItem("theme", "dark");
        } else {
            themeButton.textContent = "Dark";
            localStorage.setItem("theme", "light")
        }
    });
}

// Class 16: Step 4: handle the submit
const contactForm = document.querySelector("#contact-form");

// Class 16: Step 4: handle the submit
if (contactForm) {
    const formStatus = document.querySelector("#form-status");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault()
    
        const name = document.querySelector("#name").value;

        formStatus.textContent = "Thanks, " + name + ". Your message is ready to send.";
        contactForm.reset();
    });
}