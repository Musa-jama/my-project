document.addEventListener("DOMContentLoaded", function () {

    
    let buttons = document.querySelectorAll(".show-details");

    
    buttons.forEach(function (button) {
        button.addEventListener("click", function () {

            
            let details = button.nextElementSibling;

            
            if (details.style.display === "none" || details.style.display === "") {
                details.style.display = "block"; 
                button.textContent = "Hide Details"; 
            } else {
                details.style.display = "none"; 
                button.textContent = "Show Details"; 
            }
        });
    });

});
