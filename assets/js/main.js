const nextButtons = document.querySelectorAll('.next-btn');
const previousButtons = document.querySelectorAll('.previous-btn')
const sections = document.querySelectorAll(".section"); 
let currentSectionIndex = 0; 


nextButtons.forEach(function(button) {
    button.onclick = function() {
        sections[currentSectionIndex].classList.remove("d-block"); 
        sections[currentSectionIndex].classList.add("d-none"); 

        
        currentSectionIndex++;
        

        if (currentSectionIndex >= sections.length) {
            currentSectionIndex = 0;
        }


        sections[currentSectionIndex].classList.remove("d-none"); 
        sections[currentSectionIndex].classList.add("d-block"); 
    };
});

previousButtons.forEach(function(previous){
    
    previous.onclick = function() {
        sections[currentSectionIndex].classList.remove("d-blok");
        sections[currentSectionIndex].classList.add("d-none");
       
        currentSectionIndex--;

        sections[currentSectionIndex].classList.remove("d-none");
        sections[currentSectionIndex].classList.add("d-block");

    };
});




function validateForm(event){
    event.preventDefault();

    let isValid = true ;
    // Validation du nom (2 à 50 caractères)
    const nom = document.getElementById("nom").value;
    const nomError = document.getElementById("nomError");
    if(nom.length <2 || nom.length > 50) {
        nomError.classList.remove("d-none");
        isValid = false;
    }else {
        nomError.classList.add("d-none");
    }

    // Validation de l'âge (entre 18 et 99)
    const age = document.getElementById("age").value;
    const ageError = document.getElementById("ageError");
    if (age < 18 || age > 99) {
        ageError.classList.remove("d-none");
        isValid = false;
    } else {
        ageError.classList.add("d-none");
    }


        // Validation de l'email
        function validateEmail(email) {
    
            const atIndex = email.indexOf('@');
        
            if (atIndex > 0 && atIndex < email.length - 1) {
                return true; 
            } else {
                return false; 
            }
        }

        
        const email = document.getElementById("email").value;
        const emailError = document.getElementById("emailError");
        if (!validateEmail(email) ) {
            emailError.classList.remove("d-none");
            isValid = false;
        } else {
            emailError.classList.add("d-none");
        }
    

        // Validation du numéro de téléphone (10 chiffres)*
          
        function validatePhone(phone) {
            if(phone.length >= 10){
                return true ;
            }else{
                return false;
            }
        }

    const phone = document.getElementById("phone").value;
    const phoneError = document.getElementById("phoneError");
    if (!validatePhone(phone)) {
        phoneError.classList.remove("d-none");
        isValid = false;
    } else {
        phoneError.classList.add("d-none");
    }


    // Validation des commentaires (au moins 10 caractères)
    const feedback = document.getElementById("feedback").value;
    const feedbackError = document.getElementById("feedbackError");
    if (feedback.length < 10) {
        feedbackError.classList.remove("d-none");
        isValid = false;
    } else {
        feedbackError.classList.add("d-none");
    }

     // Si tout est valide, envoyer le formulaire
     if (isValid) {
        document.getElementById("main-section").classList.add("d-none");
        document.getElementById('success').classList.remove("d-none");
        document.getElementById("backButton").classList.remove("d-none");

        document.getElementById("multiSectionForm").reset(); // Réinitialise les champs du formulaire
        showSection(1); // Retourne à la première section
        
       
    }

}

function showMainSection() {
    // Hide the success message and back button
    document.getElementById("success").classList.add("d-none");
    document.getElementById("backButton").classList.add("d-none");
    document.getElementById("main-section").classList.remove("d-none"); 

}