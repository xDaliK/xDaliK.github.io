// JS By Daniel Lizarte Cáceres

console.log("Hello Console Resume!");

//Take elements from document
var button_resume= document.querySelector("button#button_back");
var info_content_container = document.getElementById("info_content_container");

var div_cv_mobile = document.getElementById("cv_mobile");

window.onload = function() {
   
    document.getElementById('button_back').style.display = 'block';
};

function goTo(destRoute) {
    window.location.href = destRoute;
    console.log("hello" + destRoute);
}

if (button_resume) {
    button_resume.addEventListener("click", function () {
        goTo('logged.html');
    });
}


if(info_content_container){

    const pdfUrlCV = "../resources/DanielLizarteCaceres_Curriculum2024.pdf"; 
    
        div_cv_mobile.innerHTML = `<a href="${pdfUrlCV}" download>
            <button id="button_download_pdf_cv">Daniel Lizarte Cáceres<br>Currículum Vitae 2025 <br>Descargar PDF Móviles<br> ⬇️</button>
        </a>`;
        div_cv_mobile.style = "text-align:center;"
    

   
}

