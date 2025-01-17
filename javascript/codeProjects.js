// JS By Daniel Lizarte Cáceres

console.log("Hello Console Projects!");

//Take elements from document
var button_projects= document.querySelector("button#button_back");
var button_exit_pdf = document.querySelector("button#button_exit_pdf");
var div_content = document.querySelector("div#div_content");

//Asignaturas
var tall_tec_music = document.getElementById("tall_tec_music");
var ent_com_virt = document.getElementById("ent_com_virt");
var sist_int = document.getElementById("sist_int");
var gest_cares = document.getElementById("gest_cares");
var cybersec = document.getElementById("cybersec");
var aiw = document.getElementById("aiw");
var redes_in = document.getElementById("redes_in");
var ing_soft_web = document.getElementById("ing_soft_web");
var gest_proy = document.getElementById("gest_proy");
var intel_art = document.getElementById("intel_art");
var iot = document.getElementById("iot");


//Asignaturas
var div_tall_tec_music= document.getElementById("div_tall_tec_music");
var div_ent_com_virt =  document.getElementById("div_ent_com_virt");
var div_sist_int =  document.getElementById("div_sist_int");
var div_gest_cares =  document.getElementById("div_gest_cares");
var div_cybersec =  document.getElementById("div_cybersec");
var div_aiw =  document.getElementById("div_aiw");
var div_redes_in =  document.getElementById("div_redes_in");
var div_ing_soft_web =  document.getElementById("div_ing_soft_web");
var div_gest_proy =  document.getElementById("div_gest_proy");
var div_intel_art =  document.getElementById("div_intel_art");
var div_iot =  document.getElementById("div_iot");


//Maquinas
var dockerlabs = document.getElementById("dockerlabs");
var div_dockerlabs=  document.getElementById("div_dockerlabs");

var maquinas = document.getElementsByClassName('maquinas_cyber');


var zIndexUpdate = 1;

// Añade divs projectos a lista
var divs = [ div_ent_com_virt,  div_tall_tec_music, div_sist_int, div_gest_cares, 
    div_cybersec, div_aiw, div_redes_in, div_ing_soft_web, div_gest_proy, div_intel_art, div_iot, div_dockerlabs]; 

// Añade divs projectos en string a lista
var divs_text = ["div_ent_com_virt", "div_tall_tec_music", "div_sist_int", "div_gest_cares", 
    "div_cybersec", "div_aiw", "div_redes_in", "div_ing_soft_web", "div_gest_proy", "div_intel_art", "div_iot", "div_dockerlabs"]; 

function hideAllDivsExcept(div) {
   
    for (var i = 0; i < maquinas.length; i++) {
        var maquina = maquinas[i];

        
        if (maquina !== div && maquina.style.display !== 'none') {
            maquina.style.display = 'none';
        }
    }
    divs.forEach(function(d) {
        console.log(d)
        if (d !== div && d.style.display !== 'none') {
            d.style.display = 'none';
        }
    });
}

window.onload = function() {
   
    document.getElementById('button_back').style.display = 'block';
    document.getElementById('barSearch').style.display = 'block';
};

function goTo(destRoute) {
    window.location.href = destRoute;
    console.log("hello" + destRoute);
}

if (button_projects) {
    button_projects.addEventListener("click", function () {
        goTo('logged.html');
    });
}

//Búsqueda
var listaAsignaturas = [
    
    //Matemáticas
    
    // Programación y Algoritmos
    { id: "div_ing_soft_web", title: "Ingeniería de Software para Aplicaciones Web", keywords: ["aplicaciones web", "tecnología web", "HTML", "CSS", "Backend", "servidor web Apache Tomcat", "Servlets", "JSP", "JSTL", "MySQL"] },

    //Sistemas y Teoría

    //Ciencia de Datos
    { id: "div_intel_art", title: "Inteligencia Artificial", keywords: ["IA", "Planificación y Búsqueda", "agentes de planificación", "problemas de búsqueda", "Búsqueda Adversarial", "Procesos de Decisión Markov", "Markov", "Aprendizaje por Refuerzo (RL)", "Artificial Intelligence"] },
    { id: "div_aiw", title: "Aplicaciones Inteligentes para la Web", keywords: ["procesamiento del lenguaje natural (NLP)", "extracción de información", "minería de opiniones", "resumen automático de texto", "aprendizaje profundo (Deep learning)", "modelos masivos de lenguaje", "chatGPT", "sistemas de generación de contenidos", "Dall-E", "traducción automática"] },
    { id: "div_gest_cares", title: "Análisis de Gestos y Caras", keywords: ["análisis facial automático", "Detección facial", "Técnica de Viola Jones", "Modelos flexibles de forma y apariencia", "PCA", "Reconocimiento facial", "Extracción de características de imágenes y video", "Expresiones faciales", "emociones", "Valence Arousal", "Gestos"] },

    //Visualización y Entornos
    { id: "div_ent_com_virt", title: "Entornos de Comunicación Virtual", keywords: ["desarrollo de comunidades online", "tecnologías web estándar", "Desarrollo Web", "APIs modernas", "HTML", "CSS", "Javascript", "WebSockets", "Canvas2D", "WebGL", "phpmyadmin"] },
    { id: "div_sist_int", title: "Sistemas Interactivos", keywords: ["experiencia interactiva Full-Body", "tecnologías de Mixed Reality (MR)", "Realidad mixta","Realidad aumentada", "sistemas interactivos en tiempo real", "tecnologías de interacción", "Augmented Reality", "Artificial Reality", "Tangible Interaction", "Extended Reality", "experiencias XR", "Unity"] },

    //Redes y Seguridad
    { id: "div_redes_in", title: "Redes de Sensores Inalámbricos", keywords: [ "Internet de las Cosas (IoT)", "redes IoT","Plataformas de Hardware", "microcontroladores", "SoCs", "ESP32-S2", "Sensores y Actuadores", "Consumo de Energía en IoT", "PHY y MAC para WSNs", "LoRa, NB-IoT"] },
    { id: "div_iot", title: "Internet of Things", keywords: [ "iot", "conceptos de IoT", "tecnologías de IoT", "hardware", "protocolos de red", "técnicas de pensamiento creativo", "técnicas de co-creación", "ESP32-S2", "Conexión a la nube IoT","Arduino"] },
    { id: "div_cybersec", title: "Seguridad en Computadores", keywords: ["security", "cybersecurity" , "ciberseguridad", "protección de los sistemas informáticos y las redes", "amenazas y vulnerabilidades", "Evaluación de la seguridad", "Footprinting", "escaneo y enumeración", "reconocimiento", "Protección de la red y los sistemas", "Hacking y análisis de malware", "Detección y prevención de amenazas", "Investigación de la reputación de IP", "kali linux", "metasploitable", "honeypot" , "SIEM", "wazzuh","nmap", "shell", "bash" ,"reverse shell"] },

    //Comunicación, Ética y Gestión
    { id: "div_gest_proy", title: "Gestión de Proyectos", keywords: ["equipo","gestión de proyectos", "metodología de trabajo", "fases del proyecto", "seguimiento y control", "documentación en la gestión de proyectos", "capacidad de aplicar conocimientos", "capacidad de reunir e interpretar datos", "capacidad de transmitir información", "Chatbot asistente para los clientes de INCASÒL", "reducción de las llamadas recibidas por la compañía"] },
    { id: "div_tall_tec_music", title: "Taller de Tecnología Musical", keywords: ["musica","musical", "audio","procesamiento de Audio", "modelos", "Essentia", "análisis de audio", "PyCharm", "Streamlit", "aplicaciones web", "extracción de características de audio",  "scikit", "Integración Backend-Frontend en tiempo real"] }

];  

var opciones = {
    keys: ['title', 'keywords'],
    includeScore: true,
    threshold: 0.225,
    shouldSort: true,
    tokenize: true,
    matchAllTokens: true,
    findAllMatches: true,
    includeMatches: true,
    minMatchCharLength: 1,
    location: 0,
    distance: 50,
    maxPatternLength: 32,
  };
  
var fuse = new Fuse(listaAsignaturas, opciones);


function checkForEnter(event) {
    
    if (event.key === 'Enter') {
      
      var searchValue = document.getElementById('searchInput').value;
  
      if (searchValue.trim() !== '') {
        console.log(searchValue);
        searchFunction(searchValue);
      }
    }
  }




function searchFunction(searchValue) {
    
    var resultados = fuse.search(searchValue);

   
    divs_text.forEach(function(d) {
        document.getElementById(d).style.display = 'none';
    });

    
    resultados.forEach(function(r) {
        document.getElementById(r.item.id).style.display = 'block';
    });
}


//Asginaturas

if(tall_tec_music){
    tall_tec_music.addEventListener("click", function () {
        if (div_tall_tec_music.style.display === 'none' || div_tall_tec_music.style.display === '') {
            hideAllDivsExcept(div_tall_tec_music);
            div_tall_tec_music.style.display = 'block'; 
            div_tall_tec_music.style.zIndex = zIndexUpdate++;
        } else {
            div_tall_tec_music.style.display = 'none'; 
        }
    });

}

if(ent_com_virt){
    ent_com_virt.addEventListener("click", function () {
        if (div_ent_com_virt.style.display === 'none' || div_ent_com_virt.style.display === '') {
            hideAllDivsExcept(div_ent_com_virt);
            div_ent_com_virt.style.display = 'block'; 
            div_ent_com_virt.style.zIndex = zIndexUpdate++;
        } else {
            div_ent_com_virt.style.display = 'none'; 
        }
    });

}

if(sist_int){
    sist_int.addEventListener("click", function () {
        if (div_sist_int.style.display === 'none' || div_sist_int.style.display === '') {
            hideAllDivsExcept(div_sist_int);
            div_sist_int.style.display = 'block'; 
            div_sist_int.style.zIndex = zIndexUpdate++;
        } else {
            div_sist_int.style.display = 'none'; 
        }
    });

}


if(gest_cares){
    gest_cares.addEventListener("click", function () {
        if (div_gest_cares.style.display === 'none' || div_gest_cares.style.display === '') {
            hideAllDivsExcept(div_gest_cares);
            div_gest_cares.style.display = 'block'; 
            div_gest_cares.style.zIndex = zIndexUpdate++;
        } else {
            div_gest_cares.style.display = 'none'; 
        }
    });

}

if(cybersec){
    cybersec.addEventListener("click", function () {
        if (div_cybersec.style.display === 'none' || div_cybersec.style.display === '') {
            hideAllDivsExcept(div_cybersec);
            div_cybersec.style.display = 'block'; 
            div_cybersec.style.zIndex = zIndexUpdate++;
        } else {
            div_cybersec.style.display = 'none'; 
        }
    });

}


if(aiw){
    aiw.addEventListener("click", function () {
        if (div_aiw.style.display === 'none' || div_aiw.style.display === '') {
            hideAllDivsExcept(div_aiw);
            div_aiw.style.display = 'block'; 
            div_aiw.style.zIndex = zIndexUpdate++;
        } else {
            div_aiw.style.display = 'none'; 
        }
    });

}


if(redes_in){
    redes_in.addEventListener("click", function () {
        if (div_redes_in.style.display === 'none' || div_redes_in.style.display === '') {
            hideAllDivsExcept(div_redes_in);
            div_redes_in.style.display = 'block'; 
            div_redes_in.style.zIndex = zIndexUpdate++;
        } else {
            div_redes_in.style.display = 'none'; 
        }
    });

}

if(ing_soft_web){
    ing_soft_web.addEventListener("click", function () {
        if (div_ing_soft_web.style.display === 'none' || div_ing_soft_web.style.display === '') {
            hideAllDivsExcept(div_ing_soft_web);
            div_ing_soft_web.style.display = 'block'; 
            div_ing_soft_web.style.zIndex = zIndexUpdate++;
        } else {
            div_ing_soft_web.style.display = 'none'; 
        }
    });

}


if(gest_proy){
    gest_proy.addEventListener("click", function () {
        if (div_gest_proy.style.display === 'none' || div_gest_proy.style.display === '') {
            hideAllDivsExcept(div_gest_proy);
            div_gest_proy.style.display = 'block'; 
            div_gest_proy.style.zIndex = zIndexUpdate++;
        } else {
            div_gest_proy.style.display = 'none'; 
        }
    });

}


if(intel_art){
    intel_art.addEventListener("click", function () {
        if (div_intel_art.style.display === 'none' || div_intel_art.style.display === '') {
            hideAllDivsExcept(div_intel_art);
            div_intel_art.style.display = 'block'; 
            div_intel_art.style.zIndex = zIndexUpdate++;
        } else {
            div_intel_art.style.display = 'none'; 
        }
    });

}


if(iot){
    iot.addEventListener("click", function () {
        if (div_iot.style.display === 'none' || div_iot.style.display === '') {
            hideAllDivsExcept(div_iot);
            div_iot.style.display = 'block'; 
            div_iot.style.zIndex = zIndexUpdate++;
        } else {
            div_iot.style.display = 'none'; 
        }
    });

}




//Máquinas Ciberseguridad

var div_dl_maquina_trust = document.getElementById("div_dl_maquina_trust");
var dl_maquina_trust = document.getElementById("dl_maquina_trust");

var div_dl_maquina_injection = document.getElementById("div_dl_maquina_injection");
var dl_maquina_injection = document.getElementById("dl_maquina_injection");

var div_dl_maquina_upload = document.getElementById("div_dl_maquina_upload");
var dl_maquina_upload= document.getElementById("dl_maquina_upload");

var div_dl_maquina_vacaciones= document.getElementById("div_dl_maquina_vacaciones");
var dl_maquina_vacaciones= document.getElementById("dl_maquina_vacaciones");

var div_dl_maquina_breakmyssh= document.getElementById("div_dl_maquina_breakmyssh");
var dl_maquina_breakmyssh= document.getElementById("dl_maquina_breakmyssh");

var div_dl_maquina_borazuwarahctf = document.getElementById("div_dl_maquina_borazuwarahctf");
var dl_maquina_borazuwarahctf = document.getElementById("dl_maquina_borazuwarahctf");

var div_dl_maquina_firsthacking = document.getElementById("div_dl_maquina_firsthacking");
var dl_maquina_firsthacking = document.getElementById("dl_maquina_firsthacking");

var div_dl_maquina_obsession = document.getElementById("div_dl_maquina_obsession");
var dl_maquina_obsession = document.getElementById("dl_maquina_obsession");

var div_dl_maquina_walkingcms = document.getElementById("div_dl_maquina_walkingcms");
var dl_maquina_walkingcms = document.getElementById("dl_maquina_walkingcms");

var div_dl_maquina_capypenguin = document.getElementById("div_dl_maquina_capypenguin");
var dl_maquina_capypenguin = document.getElementById("dl_maquina_capypenguin");

var div_dl_maquina_pn = document.getElementById("div_dl_maquina_pn");
var dl_maquina_pn = document.getElementById("dl_maquina_pn");

var div_dl_maquina_anonymouspingu = document.getElementById("div_dl_maquina_anonymouspingu");
var dl_maquina_anonymouspingu = document.getElementById("dl_maquina_anonymouspingu");

var div_dl_maquina_library = document.getElementById("div_dl_maquina_library");
var dl_maquina_library = document.getElementById("dl_maquina_library");

var div_dl_maquina_hiddencat = document.getElementById("div_dl_maquina_hiddencat");
var dl_maquina_hiddencat = document.getElementById("dl_maquina_hiddencat");

var div_dl_maquina_dockerlabs = document.getElementById("div_dl_maquina_dockerlabs");
var dl_maquina_dockerlabs = document.getElementById("dl_maquina_dockerlabs");

var div_dl_maquina_whereismywebshell = document.getElementById("div_dl_maquina_whereismywebshell");
var dl_maquina_whereismywebshell = document.getElementById("dl_maquina_whereismywebshell");

var div_dl_maquina_amor = document.getElementById("div_dl_maquina_amor");
var dl_maquina_amor = document.getElementById("dl_maquina_amor");

var div_dl_maquina_chocolatelovers = document.getElementById("div_dl_maquina_chocolatelovers");
var dl_maquina_chocolatelovers = document.getElementById("dl_maquina_chocolatelovers");

var div_dl_maquina_secretjenkins = document.getElementById("div_dl_maquina_secretjenkins");
var dl_maquina_secretjenkins = document.getElementById("dl_maquina_secretjenkins");

var div_dl_maquina_aguademayo = document.getElementById("div_dl_maquina_aguademayo");
var dl_maquina_aguademayo = document.getElementById("dl_maquina_aguademayo");

var div_dl_maquina_buscalove = document.getElementById("div_dl_maquina_buscalove");
var dl_maquina_buscalove = document.getElementById("dl_maquina_buscalove");

var div_dl_maquina_consolelog = document.getElementById("div_dl_maquina_consolelog");
var dl_maquina_consolelog = document.getElementById("dl_maquina_consolelog");

var div_dl_maquina_escolares = document.getElementById("div_dl_maquina_escolares");
var dl_maquina_escolares = document.getElementById("dl_maquina_escolares");

var div_dl_maquina_los40ladrones = document.getElementById("div_dl_maquina_los40ladrones");
var dl_maquina_los40ladrones = document.getElementById("dl_maquina_los40ladrones");

var div_dl_maquina_move = document.getElementById("div_dl_maquina_move");
var dl_maquina_move = document.getElementById("dl_maquina_move");

var div_dl_maquina_nodeclimb= document.getElementById("div_dl_maquina_nodeclimb");
var dl_maquina_nodeclimb = document.getElementById("dl_maquina_nodeclimb");

var div_dl_maquina_picadilly= document.getElementById("div_dl_maquina_picadilly");
var dl_maquina_picadilly = document.getElementById("dl_maquina_picadilly");

var div_dl_maquina_pinguinazo= document.getElementById("div_dl_maquina_pinguinazo");
var dl_maquina_pinguinazo= document.getElementById("dl_maquina_pinguinazo");


//Event Listeners

if(dockerlabs){
    dockerlabs.addEventListener("click", function () {
        if (div_dockerlabs.style.display === 'none' || div_dockerlabs.style.display === '') {
            hideAllDivsExcept(div_dockerlabs);
            div_dockerlabs.style.display = 'block'; 
            div_dockerlabs.style.zIndex = zIndexUpdate++;
        } else {
            div_dockerlabs.style.display = 'none'; 
        }
    });

}

if(dl_maquina_trust){
    dl_maquina_trust.addEventListener("click", function () {
        if (div_dl_maquina_trust.style.display === 'none' || div_dl_maquina_trust.style.display === '') {
            hideAllDivsExcept(div_dl_maquina_trust);
            div_dl_maquina_trust.style.display = 'block'; 
            button_exit_pdf.style.visibility = 'visible'; 
            div_dl_maquina_trust.style.zIndex = zIndexUpdate++;
            div_content.style.marginLeft = "0%";
        } else {
            div_dl_maquina_trust.style.display = 'none'; 
            button_exit_pdf.style.visibility = 'hidden'; 
            div_content.style.marginLeft = "30%";
        }
    });
    
}

if(dl_maquina_injection){
    dl_maquina_injection.addEventListener("click", function () {
        if (div_dl_maquina_injection.style.display === 'none' || div_dl_maquina_injection.style.display === '') {
            hideAllDivsExcept(div_dl_maquina_injection);
            div_dl_maquina_injection.style.display = 'block'; 
            button_exit_pdf.style.visibility = 'visible'; 
            div_dl_maquina_injection.style.zIndex = zIndexUpdate++;
            div_content.style.marginLeft = "0%";
        } else {
            div_dl_maquina_injection.style.display = 'none'; 
            button_exit_pdf.style.visibility = 'hidden'; 
            div_content.style.marginLeft = "30%";
        }
    });
    
}

if(dl_maquina_upload){
    dl_maquina_upload.addEventListener("click", function () {
        if (div_dl_maquina_upload.style.display === 'none' || div_dl_maquina_upload.style.display === '') {
            hideAllDivsExcept(div_dl_maquina_upload);
            div_dl_maquina_upload.style.display = 'block'; 
            button_exit_pdf.style.visibility = 'visible'; 
            div_dl_maquina_upload.style.zIndex = zIndexUpdate++;
            div_content.style.marginLeft = "0%";
        } else {
            div_dl_maquina_upload.style.display = 'none'; 
            button_exit_pdf.style.visibility = 'hidden'; 
            div_content.style.marginLeft = "30%";
        }
    });
    
}


if(dl_maquina_vacaciones){
    dl_maquina_vacaciones.addEventListener("click", function () {
        if (div_dl_maquina_vacaciones.style.display === 'none' || div_dl_maquina_vacaciones.style.display === '') {
            hideAllDivsExcept(div_dl_maquina_vacaciones);
            div_dl_maquina_vacaciones.style.display = 'block'; 
            button_exit_pdf.style.visibility = 'visible'; 
            div_dl_maquina_vacaciones.style.zIndex = zIndexUpdate++;
            div_content.style.marginLeft = "0%";
        } else {
            div_dl_maquina_vacaciones.style.display = 'none'; 
            button_exit_pdf.style.visibility = 'hidden'; 
            div_content.style.marginLeft = "30%";
        }
    });
    
}


if(dl_maquina_breakmyssh){
    dl_maquina_breakmyssh.addEventListener("click", function () {
        if (div_dl_maquina_breakmyssh.style.display === 'none' || div_dl_maquina_breakmyssh.style.display === '') {
            hideAllDivsExcept(div_dl_maquina_breakmyssh);
            div_dl_maquina_breakmyssh.style.display = 'block'; 
            button_exit_pdf.style.visibility = 'visible'; 
            div_dl_maquina_breakmyssh.style.zIndex = zIndexUpdate++;
            div_content.style.marginLeft = "0%";
        } else {
            div_dl_maquina_breakmyssh.style.display = 'none'; 
            button_exit_pdf.style.visibility = 'hidden'; 
            div_content.style.marginLeft = "30%";
        }
    });
    
}

if(dl_maquina_borazuwarahctf){
    dl_maquina_borazuwarahctf.addEventListener("click", function () {
        if (div_dl_maquina_borazuwarahctf.style.display === 'none' || div_dl_maquina_borazuwarahctf.style.display === '') {
            hideAllDivsExcept(div_dl_maquina_borazuwarahctf);
            div_dl_maquina_borazuwarahctf.style.display = 'block'; 
            button_exit_pdf.style.visibility = 'visible'; 
            div_dl_maquina_borazuwarahctf.style.zIndex = zIndexUpdate++;
            div_content.style.marginLeft = "0%";
        } else {
            div_dl_maquina_borazuwarahctf.style.display = 'none'; 
            button_exit_pdf.style.visibility = 'hidden'; 
            div_content.style.marginLeft = "30%";
        }
    });
    
}

if(dl_maquina_firsthacking){
    dl_maquina_firsthacking.addEventListener("click", function () {
        if (div_dl_maquina_firsthacking.style.display === 'none' || div_dl_maquina_firsthacking.style.display === '') {
            hideAllDivsExcept(div_dl_maquina_firsthacking);
            div_dl_maquina_firsthacking.style.display = 'block'; 
            button_exit_pdf.style.visibility = 'visible'; 
            div_dl_maquina_firsthacking.style.zIndex = zIndexUpdate++;
            div_content.style.marginLeft = "0%";
        } else {
            div_dl_maquina_firsthacking.style.display = 'none'; 
            button_exit_pdf.style.visibility = 'hidden'; 
            div_content.style.marginLeft = "30%";
        }
    });
    
}


if(dl_maquina_obsession){
    dl_maquina_obsession.addEventListener("click", function () {
        if (div_dl_maquina_obsession.style.display === 'none' || div_dl_maquina_obsession.style.display === '') {
            hideAllDivsExcept(div_dl_maquina_obsession);
            div_dl_maquina_obsession.style.display = 'block'; 
            button_exit_pdf.style.visibility = 'visible'; 
            div_dl_maquina_obsession.style.zIndex = zIndexUpdate++;
            div_content.style.marginLeft = "0%";
        } else {
            div_dl_maquina_obsession.style.display = 'none'; 
            button_exit_pdf.style.visibility = 'hidden'; 
            div_content.style.marginLeft = "30%";
        }
    });
    
}


if(dl_maquina_walkingcms){
    dl_maquina_walkingcms.addEventListener("click", function () {
        if (div_dl_maquina_walkingcms.style.display === 'none' || div_dl_maquina_walkingcms.style.display === '') {
            hideAllDivsExcept(div_dl_maquina_walkingcms);
            div_dl_maquina_walkingcms.style.display = 'block'; 
            button_exit_pdf.style.visibility = 'visible'; 
            div_dl_maquina_walkingcms.style.zIndex = zIndexUpdate++;
            div_content.style.marginLeft = "0%";
        } else {
            div_dl_maquina_walkingcms.style.display = 'none'; 
            button_exit_pdf.style.visibility = 'hidden'; 
            div_content.style.marginLeft = "30%";
        }
    });
    
}


if(dl_maquina_capypenguin){
    dl_maquina_capypenguin.addEventListener("click", function () {
        if (div_dl_maquina_capypenguin.style.display === 'none' || div_dl_maquina_capypenguin.style.display === '') {
            hideAllDivsExcept(div_dl_maquina_capypenguin);
            div_dl_maquina_capypenguin.style.display = 'block'; 
            button_exit_pdf.style.visibility = 'visible'; 
            div_dl_maquina_capypenguin.style.zIndex = zIndexUpdate++;
            div_content.style.marginLeft = "0%";
        } else {
            div_dl_maquina_capypenguin.style.display = 'none'; 
            button_exit_pdf.style.visibility = 'hidden'; 
            div_content.style.marginLeft = "30%";
        }
    });
    
}


if(dl_maquina_pn){
    dl_maquina_pn.addEventListener("click", function () {
        if (div_dl_maquina_pn.style.display === 'none' || div_dl_maquina_pn.style.display === '') {
            hideAllDivsExcept(div_dl_maquina_pn);
            div_dl_maquina_pn.style.display = 'block'; 
            button_exit_pdf.style.visibility = 'visible'; 
            div_dl_maquina_pn.style.zIndex = zIndexUpdate++;
            div_content.style.marginLeft = "0%";
        } else {
            div_dl_maquina_pn.style.display = 'none'; 
            button_exit_pdf.style.visibility = 'hidden'; 
            div_content.style.marginLeft = "30%";
        }
    });
    
}


if(dl_maquina_anonymouspingu){
    dl_maquina_anonymouspingu.addEventListener("click", function () {
        if (div_dl_maquina_anonymouspingu.style.display === 'none' || div_dl_maquina_anonymouspingu.style.display === '') {
            hideAllDivsExcept(div_dl_maquina_anonymouspingu);
            div_dl_maquina_anonymouspingu.style.display = 'block'; 
            button_exit_pdf.style.visibility = 'visible'; 
            div_dl_maquina_anonymouspingu.style.zIndex = zIndexUpdate++;
            div_content.style.marginLeft = "0%";
        } else {
            div_dl_maquina_anonymouspingu.style.display = 'none'; 
            button_exit_pdf.style.visibility = 'hidden'; 
            div_content.style.marginLeft = "30%";
        }
    });
    
}


if(dl_maquina_library){
    dl_maquina_library.addEventListener("click", function () {
        if (div_dl_maquina_library.style.display === 'none' || div_dl_maquina_library.style.display === '') {
            hideAllDivsExcept(div_dl_maquina_library);
            div_dl_maquina_library.style.display = 'block'; 
            button_exit_pdf.style.visibility = 'visible'; 
            div_dl_maquina_library.style.zIndex = zIndexUpdate++;
            div_content.style.marginLeft = "0%";
        } else {
            div_dl_maquina_library.style.display = 'none'; 
            button_exit_pdf.style.visibility = 'hidden'; 
            div_content.style.marginLeft = "30%";
        }
    });
    
}


if(dl_maquina_hiddencat){
    dl_maquina_hiddencat.addEventListener("click", function () {
        if (div_dl_maquina_hiddencat.style.display === 'none' || div_dl_maquina_hiddencat.style.display === '') {
            hideAllDivsExcept(div_dl_maquina_hiddencat);
            div_dl_maquina_hiddencat.style.display = 'block'; 
            button_exit_pdf.style.visibility = 'visible'; 
            div_dl_maquina_hiddencat.style.zIndex = zIndexUpdate++;
            div_content.style.marginLeft = "0%";
        } else {
            div_dl_maquina_hiddencat.style.display = 'none'; 
            button_exit_pdf.style.visibility = 'hidden'; 
            div_content.style.marginLeft = "30%";
        }
    });
    
}


if(dl_maquina_dockerlabs){
    dl_maquina_dockerlabs.addEventListener("click", function () {
        if (div_dl_maquina_dockerlabs.style.display === 'none' || div_dl_maquina_dockerlabs.style.display === '') {
            hideAllDivsExcept(div_dl_maquina_dockerlabs);
            div_dl_maquina_dockerlabs.style.display = 'block'; 
            button_exit_pdf.style.visibility = 'visible'; 
            div_dl_maquina_dockerlabs.style.zIndex = zIndexUpdate++;
            div_content.style.marginLeft = "0%";
        } else {
            div_dl_maquina_dockerlabs.style.display = 'none'; 
            button_exit_pdf.style.visibility = 'hidden'; 
            div_content.style.marginLeft = "30%";
        }
    });
    
}


if(dl_maquina_whereismywebshell){
    dl_maquina_whereismywebshell.addEventListener("click", function () {
        if (div_dl_maquina_whereismywebshell.style.display === 'none' || div_dl_maquina_whereismywebshell.style.display === '') {
            hideAllDivsExcept(div_dl_maquina_whereismywebshell);
            div_dl_maquina_whereismywebshell.style.display = 'block'; 
            button_exit_pdf.style.visibility = 'visible'; 
            div_dl_maquina_whereismywebshell.style.zIndex = zIndexUpdate++;
            div_content.style.marginLeft = "0%";
        } else {
            div_dl_maquina_whereismywebshell.style.display = 'none'; 
            button_exit_pdf.style.visibility = 'hidden'; 
            div_content.style.marginLeft = "30%";
        }
    });
    
}


if(dl_maquina_amor){
    dl_maquina_amor.addEventListener("click", function () {
        if (div_dl_maquina_amor.style.display === 'none' || div_dl_maquina_amor.style.display === '') {
            hideAllDivsExcept(div_dl_maquina_amor);
            div_dl_maquina_amor.style.display = 'block'; 
            button_exit_pdf.style.visibility = 'visible'; 
            div_dl_maquina_amor.style.zIndex = zIndexUpdate++;
            div_content.style.marginLeft = "0%";
        } else {
            div_dl_maquina_amor.style.display = 'none'; 
            button_exit_pdf.style.visibility = 'hidden'; 
            div_content.style.marginLeft = "30%";
        }
    });
    
}


if(dl_maquina_chocolatelovers){
    dl_maquina_chocolatelovers.addEventListener("click", function () {
        if (div_dl_maquina_chocolatelovers.style.display === 'none' || div_dl_maquina_chocolatelovers.style.display === '') {
            hideAllDivsExcept(div_dl_maquina_chocolatelovers);
            div_dl_maquina_chocolatelovers.style.display = 'block'; 
            button_exit_pdf.style.visibility = 'visible'; 
            div_dl_maquina_chocolatelovers.style.zIndex = zIndexUpdate++;
            div_content.style.marginLeft = "0%";
        } else {
            div_dl_maquina_chocolatelovers.style.display = 'none'; 
            button_exit_pdf.style.visibility = 'hidden'; 
            div_content.style.marginLeft = "30%";
        }
    });
    
}


if(dl_maquina_secretjenkins){
    dl_maquina_secretjenkins.addEventListener("click", function () {
        if (div_dl_maquina_secretjenkins.style.display === 'none' || div_dl_maquina_secretjenkins.style.display === '') {
            hideAllDivsExcept(div_dl_maquina_secretjenkins);
            div_dl_maquina_secretjenkins.style.display = 'block'; 
            button_exit_pdf.style.visibility = 'visible'; 
            div_dl_maquina_secretjenkins.style.zIndex = zIndexUpdate++;
            div_content.style.marginLeft = "0%";
        } else {
            div_dl_maquina_secretjenkins.style.display = 'none'; 
            button_exit_pdf.style.visibility = 'hidden'; 
            div_content.style.marginLeft = "30%";
        }
    });
    
}


if(dl_maquina_aguademayo){
    dl_maquina_aguademayo.addEventListener("click", function () {
        if (div_dl_maquina_aguademayo.style.display === 'none' || div_dl_maquina_aguademayo.style.display === '') {
            hideAllDivsExcept(div_dl_maquina_aguademayo);
            div_dl_maquina_aguademayo.style.display = 'block'; 
            button_exit_pdf.style.visibility = 'visible'; 
            div_dl_maquina_aguademayo.style.zIndex = zIndexUpdate++;
            div_content.style.marginLeft = "0%";
        } else {
            div_dl_maquina_aguademayo.style.display = 'none'; 
            button_exit_pdf.style.visibility = 'hidden'; 
            div_content.style.marginLeft = "30%";
        }
    });
    
}


if(dl_maquina_buscalove){
    dl_maquina_buscalove.addEventListener("click", function () {
        if (div_dl_maquina_buscalove.style.display === 'none' || div_dl_maquina_buscalove.style.display === '') {
            hideAllDivsExcept(div_dl_maquina_buscalove);
            div_dl_maquina_buscalove.style.display = 'block'; 
            button_exit_pdf.style.visibility = 'visible'; 
            div_dl_maquina_buscalove.style.zIndex = zIndexUpdate++;
            div_content.style.marginLeft = "0%";
        } else {
            div_dl_maquina_buscalove.style.display = 'none'; 
            button_exit_pdf.style.visibility = 'hidden'; 
            div_content.style.marginLeft = "30%";
        }
    });
    
}


if(dl_maquina_consolelog){
    dl_maquina_consolelog.addEventListener("click", function () {
        if (div_dl_maquina_consolelog.style.display === 'none' || div_dl_maquina_consolelog.style.display === '') {
            hideAllDivsExcept(div_dl_maquina_consolelog);
            div_dl_maquina_consolelog.style.display = 'block'; 
            button_exit_pdf.style.visibility = 'visible'; 
            div_dl_maquina_consolelog.style.zIndex = zIndexUpdate++;
            div_content.style.marginLeft = "0%";
        } else {
            div_dl_maquina_consolelog.style.display = 'none'; 
            button_exit_pdf.style.visibility = 'hidden'; 
            div_content.style.marginLeft = "30%";
        }
    });
    
}


if(dl_maquina_escolares){
    dl_maquina_escolares.addEventListener("click", function () {
        if (div_dl_maquina_escolares.style.display === 'none' || div_dl_maquina_escolares.style.display === '') {
            hideAllDivsExcept(div_dl_maquina_escolares);
            div_dl_maquina_escolares.style.display = 'block'; 
            button_exit_pdf.style.visibility = 'visible'; 
            div_dl_maquina_escolares.style.zIndex = zIndexUpdate++;
            div_content.style.marginLeft = "0%";
        } else {
            div_dl_maquina_escolares.style.display = 'none'; 
            button_exit_pdf.style.visibility = 'hidden'; 
            div_content.style.marginLeft = "30%";
        }
    });
    
}


if(dl_maquina_los40ladrones){
    dl_maquina_los40ladrones.addEventListener("click", function () {
        if (div_dl_maquina_los40ladrones.style.display === 'none' || div_dl_maquina_los40ladrones.style.display === '') {
            hideAllDivsExcept(div_dl_maquina_los40ladrones);
            div_dl_maquina_los40ladrones.style.display = 'block'; 
            button_exit_pdf.style.visibility = 'visible'; 
            div_dl_maquina_los40ladrones.style.zIndex = zIndexUpdate++;
            div_content.style.marginLeft = "0%";
        } else {
            div_dl_maquina_los40ladrones.style.display = 'none'; 
            button_exit_pdf.style.visibility = 'hidden'; 
            div_content.style.marginLeft = "30%";
        }
    });
    
}


if(dl_maquina_move){
    dl_maquina_move.addEventListener("click", function () {
        if (div_dl_maquina_move.style.display === 'none' || div_dl_maquina_move.style.display === '') {
            hideAllDivsExcept(div_dl_maquina_move);
            div_dl_maquina_move.style.display = 'block'; 
            button_exit_pdf.style.visibility = 'visible'; 
            div_dl_maquina_move.style.zIndex = zIndexUpdate++;
            div_content.style.marginLeft = "0%";
        } else {
            div_dl_maquina_move.style.display = 'none'; 
            button_exit_pdf.style.visibility = 'hidden'; 
            div_content.style.marginLeft = "30%";
        }
    });
    
}


if(dl_maquina_nodeclimb){
    dl_maquina_nodeclimb.addEventListener("click", function () {
        if (div_dl_maquina_nodeclimb.style.display === 'none' || div_dl_maquina_nodeclimb.style.display === '') {
            hideAllDivsExcept(div_dl_maquina_nodeclimb);
            div_dl_maquina_nodeclimb.style.display = 'block'; 
            button_exit_pdf.style.visibility = 'visible'; 
            div_dl_maquina_nodeclimb.style.zIndex = zIndexUpdate++;
            div_content.style.marginLeft = "0%";
        } else {
            div_dl_maquina_nodeclimb.style.display = 'none'; 
            button_exit_pdf.style.visibility = 'hidden'; 
            div_content.style.marginLeft = "30%";
        }
    });
    
}


if(dl_maquina_picadilly){
    dl_maquina_picadilly.addEventListener("click", function () {
        if (div_dl_maquina_picadilly.style.display === 'none' || div_dl_maquina_picadilly.style.display === '') {
            hideAllDivsExcept(div_dl_maquina_picadilly);
            div_dl_maquina_picadilly.style.display = 'block'; 
            button_exit_pdf.style.visibility = 'visible'; 
            div_dl_maquina_picadilly.style.zIndex = zIndexUpdate++;
            div_content.style.marginLeft = "0%";
        } else {
            div_dl_maquina_picadilly.style.display = 'none'; 
            button_exit_pdf.style.visibility = 'hidden'; 
            div_content.style.marginLeft = "30%";
        }
    });
    
}


if(dl_maquina_pinguinazo){
    dl_maquina_pinguinazo.addEventListener("click", function () {
        if (div_dl_maquina_pinguinazo.style.display === 'none' || div_dl_maquina_pinguinazo.style.display === '') {
            hideAllDivsExcept(div_dl_maquina_pinguinazo);
            div_dl_maquina_pinguinazo.style.display = 'block'; 
            button_exit_pdf.style.visibility = 'visible'; 
            div_dl_maquina_pinguinazo.style.zIndex = zIndexUpdate++;
            div_content.style.marginLeft = "0%";
        } else {
            div_dl_maquina_pinguinazo.style.display = 'none'; 
            button_exit_pdf.style.visibility = 'hidden'; 
            div_content.style.marginLeft = "30%";
        }
    });
    
}


if(button_exit_pdf){
    button_exit_pdf.addEventListener("click", function()  {
        div_dl_maquina_trust.style.display = 'none';  
        div_dl_maquina_injection.style.display = 'none'; 
        div_dl_maquina_upload.style.display = 'none'; 
        div_dl_maquina_vacaciones.style.display = 'none'; 
        div_dl_maquina_breakmyssh.style.display = 'none'; 
        div_dl_maquina_borazuwarahctf.style.display = 'none'; 
        div_dl_maquina_firsthacking.style.display = 'none'; 
        div_dl_maquina_obsession.style.display = 'none'; 
        div_dl_maquina_walkingcms.style.display = 'none'; 
        div_dl_maquina_capypenguin.style.display = 'none'; 
        div_dl_maquina_pn.style.display = 'none'; 
        div_dl_maquina_anonymouspingu.style.display = 'none'; 
        div_dl_maquina_library.style.display = 'none'; 
        div_dl_maquina_hiddencat.style.display = 'none'; 
        div_dl_maquina_dockerlabs.style.display = 'none'; 
        div_dl_maquina_whereismywebshell.style.display = 'none'; 
        div_dl_maquina_amor.style.display = 'none'; 
        div_dl_maquina_chocolatelovers.style.display = 'none'; 
        div_dl_maquina_secretjenkins.style.display = 'none'; 
        div_dl_maquina_aguademayo.style.display = 'none'; 
        div_dl_maquina_buscalove.style.display = 'none'; 
        div_dl_maquina_consolelog.style.display = 'none'; 
        div_dl_maquina_escolares.style.display = 'none'; 
        div_dl_maquina_los40ladrones.style.display = 'none'; 
        div_dl_maquina_move.style.display = 'none'; 
        div_dl_maquina_nodeclimb.style.display = 'none'; 
        div_dl_maquina_picadilly.style.display = 'none'; 
        div_dl_maquina_pinguinazo.style.display = 'none'; 
        
        
        button_exit_pdf.style.visibility = 'hidden'; 
        div_content.style.marginLeft = "30%";
    });
}







