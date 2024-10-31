const nextButtons = document.querySelectorAll('.next-btn');
const previousButtons = document.querySelectorAll('.previous-btn')
const sections = document.querySelectorAll(".section"); 
let currentSectionIndex = 0; 

console.log(sections)

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
