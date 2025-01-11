// JS By Daniel Lizarte Cáceres

console.log("Hello Console Contact!");

//Take elements from document

var button_contact= document.querySelector("button#button_back");
var button_send = document.querySelector("button#button_send");
var input_email = document.getElementById("email");
var input_msg = document.getElementById("message");

window.onload = function() {
   
    document.getElementById('button_back').style.display = 'block';
    document.getElementById('button_send').style.display = 'block';
};

function goTo(destRoute) {
    window.location.href = destRoute;
    console.log("hello" + destRoute);
}

function cleanInput(){
    setTimeout(function(){
        // Borra los inputs
        input_email.value = "";
        input_msg.value = "";
        
    }, 2500);
}

if (button_contact) {
    button_contact.addEventListener("click", function () {
        goTo('index_logged.html');
    });
}

if (button_send) {
    button_send.addEventListener("click", cleanInput )
};


 


