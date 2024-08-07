// JS By Daniel Lizarte Cáceres

console.log("Hello Console Desktop!");

//Take elements from document
var icon_file_learning = document.querySelector("img#icon_file_learning");
var icon_file_project = document.querySelector("img#icon_file_project");
var icon_file_experience = document.querySelector("img#icon_file_experience");
var icon_file_resume = document.querySelector("img#icon_file_resume");
var icon_file_aboutme = document.querySelector("img#icon_file_aboutme");
var icon_file_contact = document.querySelector("img#icon_file_contact");


var text_learning = document.querySelector("h3#text_learning");
var text_project = document.querySelector("h3#text_project");
var text_experience= document.querySelector("h3#text_experience");
var text_resume = document.querySelector("h3#text_resume");
var text_aboutme = document.querySelector("h3#text_aboutme");
var text_contact = document.querySelector("h3#text_contact");





var progressBar = document.querySelector("progress#progressBlockBarContent");
var divProgressBar = document.querySelector("div#centeredContainerSesion")
var body = document.querySelector("body#initIndex")




function simulateProgress() {
    var totalProgress = 100;
    var currProgress = 0;
    var accProgress = 0.01;
    var countProgress = 0;

    // Values from the progress bar
    function updateProgress() {
        if (countProgress % 5 === 0) accProgress += 0.06; 

        currProgress += accProgress + currProgress / 1000000;
        progressBar.value = currProgress;

        if (currProgress < totalProgress) {
            requestAnimationFrame(updateProgress);
        } else {
            fadeOut(divProgressBar);
        }
        countProgress++;
    }

    // FadeOut Animating for Init Session
    function fadeOut(element) {
        var opacity = 1;

        var fadeEffect = setInterval(function () {
            if (opacity > 0) {
                opacity -= 0.05;
                element.style.opacity = opacity;
            } else {
                clearInterval(fadeEffect);
                body.style.backgroundImage = 'url("../resources/wallpaper_draw_maffhu2.jpg")';
                
                // After hide the Init Session, Fade in for Desktop elements
                fadeIn(icon_file_learning, 1000);
                fadeIn(icon_file_project, 1000);
                fadeIn(icon_file_experience, 1000);
                fadeIn(icon_file_resume, 1000);
                fadeIn(icon_file_aboutme, 1000);
                fadeIn(icon_file_contact, 1000);
                

                fadeIn(text_learning, 1000);
                fadeIn(text_project, 1000);
                fadeIn(text_experience, 1000);
                fadeIn(text_resume, 1000);
                fadeIn(text_aboutme, 1000);
                fadeIn(text_contact, 1000);
                

            }
        }, 16);
    }

    
    function fadeIn(element, duration) {
        
        var initialOpacity = 0;
        var startTime;

        // Show hidden elemnts
        icon_file_learning.style.display = "block";
        icon_file_project.style.display = "block";
        icon_file_experience.style.display = "block";
        icon_file_resume.style.display = "block";
        icon_file_aboutme.style.display = "block";
        icon_file_contact.style.display = "block";
        
        
        text_learning.style.display = "block";
        text_project.style.display = "block";
        text_experience.style.display = "block";
        text_resume.style.display = "block";
        text_aboutme.style.display = "block";
        text_contact.style.display = "block";
        


        //FadeIn To Appearance Desktop elements
        function animate(currentTime) {
            if (!startTime) startTime = currentTime;
            var elapsed = currentTime - startTime;

            if (elapsed < duration) {
                var opacity = initialOpacity + (elapsed / duration);
                element.style.opacity = opacity;
                requestAnimationFrame(animate);
            } else {
                element.style.opacity = 1; // Asegura que la opacidad sea 1 al finalizar
            }
        }

        requestAnimationFrame(animate);
    }

    updateProgress();
}

function goTo(destRoute) {
    window.location.href = destRoute;
    console.log("hello" + destRoute);
}



document.addEventListener('DOMContentLoaded', function () {
    simulateProgress();
});


