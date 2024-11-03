const nextButtons = document.querySelectorAll('.next-btn');
const previousButtons = document.querySelectorAll('.previous-btn');
const sections = document.querySelectorAll(".section");
let currentSectionIndex = 0;

// Function to validate the current section
function isCurrentSectionValid() {
    let isValid = true;

    if (currentSectionIndex === 0) {
        // Validate Name
        const nom = document.getElementById("nom").value;
        const nomError = document.getElementById("nomError");
        if (nom.length < 2 || nom.length > 50) {
            nomError.classList.remove("d-none");
            isValid = false;
        } else {
            nomError.classList.add("d-none");
        }

        // Validate Age
        const age = document.getElementById("age").value;
        const ageError = document.getElementById("ageError");
        if (age < 18 || age > 99) {
            ageError.classList.remove("d-none");
            isValid = false;
        } else {
            ageError.classList.add("d-none");
        }
    } else if (currentSectionIndex === 1) {
        // Validate Email
        const email = document.getElementById("email").value;
        const emailError = document.getElementById("emailError");
        if (!email.includes("@") ) {
            emailError.classList.remove("d-none");
            isValid = false;
        } else {
            emailError.classList.add("d-none");
        }

        // Validate Phone
        const phone = document.getElementById("phone").value;
        const phoneError = document.getElementById("phoneError");
        if (phone.length < 10) {
            phoneError.classList.remove("d-none");
            isValid = false;
        } else {
            phoneError.classList.add("d-none");
        }
    } else if (currentSectionIndex === 2) {
        // Validate Feedback
        const feedback = document.getElementById("feedback").value;
        const feedbackError = document.getElementById("feedbackError");
        if (feedback.length < 10) {
            feedbackError.classList.remove("d-none");
            isValid = false;
        } else {
            feedbackError.classList.add("d-none");
        }
    }

    return isValid;
}

    

// Next button functionality
nextButtons.forEach(function(button) {
    button.onclick = function() {
        if (isCurrentSectionValid()) {
            sections[currentSectionIndex].classList.remove("d-block");
            sections[currentSectionIndex].classList.add("d-none");

            currentSectionIndex++;
            if (currentSectionIndex < sections.length) {
                sections[currentSectionIndex].classList.remove("d-none");
                sections[currentSectionIndex].classList.add("d-block");
            }
        }
    };
});

// Previous button functionality
previousButtons.forEach(function(button) {
    button.onclick = function() {
        sections[currentSectionIndex].classList.remove("d-block");
        sections[currentSectionIndex].classList.add("d-none");

        currentSectionIndex--;
        if (currentSectionIndex >= 0) {
            sections[currentSectionIndex].classList.remove("d-none");
            sections[currentSectionIndex].classList.add("d-block");
        } else {
            currentSectionIndex = 0;  // Reset if we go below the first section
        }
    };
});


function showMainSection() {
    // Hide the success message and back button
    document.getElementById("success").classList.add("d-none");
    document.getElementById("backButton").classList.add("d-none");
    document.getElementById("main-section").classList.remove("d-none");

    // Reset the form to start from the first section
    document.getElementById("multiSectionForm").reset();
    currentSectionIndex = 0;
    sections.forEach((section, index) => {
        section.classList.add("d-none");
        if (index === 0) section.classList.remove("d-none");
    });
}

// Modify the form submission logic to show the success message and back button
function validateForm(event) {
    event.preventDefault();

    let isValid = isCurrentSectionValid(); // Perform final validation

    if (isValid) {
        document.getElementById("main-section").classList.add("d-none");
        document.getElementById('success').classList.remove("d-none");
        document.getElementById("backButton").classList.remove("d-none");
    }
}

// Call showMainSection() when the "Back" button is clicked
document.getElementById("backButton").onclick = showMainSection;
