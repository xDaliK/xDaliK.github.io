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

//Certificaciones
var google_cybersecurity = document.getElementById("google_cybersecurity");




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

//Certificaciones
var div_google_cybersecurity= document.getElementById("div_google_cybersecurity");

//Maquinas
var dockerlabs = document.getElementById("dockerlabs");
var div_dockerlabs=  document.getElementById("div_dockerlabs");

var maquinas = document.getElementsByClassName('maquinas_cyber');


var zIndexUpdate = 1;

var divs = [ div_ent_com_virt, div_google_cybersecurity, div_tall_tec_music, div_sist_int, div_gest_cares, 
    div_cybersec, div_aiw, div_redes_in, div_ing_soft_web, div_gest_proy, div_intel_art, div_iot, div_dockerlabs]; // Añade todos tus divs a esta lista

var divs_text = ["div_ent_com_virt", "div_tall_tec_music", "div_google_cybersecurity", "div_sist_int", "div_gest_cares", 
    "div_cybersec", "div_aiw", "div_redes_in", "div_ing_soft_web", "div_gest_proy", "div_intel_art", "div_iot", "div_dockerlabs"]; // Añade todos tus divs a esta lista

function hideAllDivsExcept(div) {
    // Itera sobre los elementos con la clase 'maquinas_cyber'
    for (var i = 0; i < maquinas.length; i++) {
        var maquina = maquinas[i];

        // Si el div actual no es el div que queremos mostrar, lo ocultamos
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
        goTo('index_logged.html');
    });
}

//Búsqueda

var listaAsignaturas = [
    //Matemáticas
    { id: "div_calculo_i", title: "Cálculo I", keywords: ["derivada", "regla de la cadena", "optimización", "límite", "continuidad", "Teorema de l’Hôpital", "series de Taylor", "funciones primitivas", "integral definida", "series de Fourier"] },
    { id: "div_calculo_ii", title: "Cálculo II", keywords: ["funciones en varias variables", "derivadas parciales", "optimización", "integrales dobles", "superficies", "cálculo vectorial", "operadores", "Espacio Euclideo", "Curvas y Superficies", "Cálculo Diferencial en Varias Variables"] },
    { id: "div_mat_discreta", title: "Matemática Discreta", keywords: ["razonamiento matemático", "estructuras discretas", "análisis combinatorio", "lógica proposicional", "cuantificación", "métodos de demostración", "definiciones recursivas", "conjuntos", "grafos", "árboles"] },
    { id: "div_alg_lineal", title: "Álgebra Lineal", keywords: ["espacios vectoriales", "aplicaciones lineales", "ortogonalización", "matrices simétricas", "números complejos", "independencia lineal", "dimensión", "bases", "vectores propios", "valores propios"] },
    { id: "div_met_num", title: "Métodos Numéricos", keywords: ["métodos numéricos", "ecuaciones diferenciales", "Método de Euler", "simulación", "visualización", "Processing", "muelle elástico", "métodos de un paso", "convergencia", "estabilidad"] },
    { id: "div_fisica", title: "Física", keywords: ["dinámica", "energía", "movimiento armónico simple", "oscilaciones", "ondas", "propagación de ondas", "electrostática", "corriente eléctrica", "magnetostática", "inducción", "electromagnético", "circuitos"] },
    { id: "div_prob", title: "Probabilidad", keywords: ["modelos probabilísticos", "probabilidad condicionada", "variables aleatorias", "esperanza", "varianza", "distribuciones discretas", "distribuciones continuas", "Teorema Central del Límite", "aproximación Normal", "simulación"] },
    { id: "div_est", title: "Estadística", keywords: ["estadística descriptiva", "estimación de parámetros", "intervalos de confianza", "tests de hipótesis", "regresión lineal", "regresión multilineal", "métodos no paramétricos", "Bootstrapping", "Tests del signo y del Rango", "inferencia bayesiana"] },
    
    // Programación y Algoritmos
    { id: "div_intro_prog", title: "Introducción Programación", keywords: ["python", "algoritmia", "programación", "tipos de datos", "variables", "expresiones", "asignaciones", "control de flujo", "funciones", "diseño descendente", "listas y tuplas"] },
    { id: "div_eda_i", title: "Estructuras de Datos y Algoritmos I", keywords: ["programación en C", "gestión de memoria", "estructuras de datos", "recursividad", "depuración", "pruebas", "lectura de código", "anidación del retorno", "diseño de clases"] },
    { id: "div_eda_ii", title: "Estructuras de Datos y Algoritmos II", keywords: ["algoritmo", "estructura de datos", "complejidad", "algoritmos de ordenación", "técnicas de programación", "árboles", "Heap", "Heapsort", "programación dinámica", "grafos"] },
    { id: "div_prog_obj", title: "Programación Orientada a Objetos", keywords: ["java","objeto", "paradigma de la programación orientada a objetos", "clase", "instancia", "jerarquía de clases", "abstracción", "encapsulación", "herencia", "polimorfismo", "interfaces y clases abstractas"] },
    { id: "div_dis_fun_prog", title: "Diseño Funcional de Programas", keywords: ["lenguajes funcionales", "funciones", "programación libre de efectos", "inmutabilidad", "búsqueda de patrones", "operaciones de orden superior", "clausuras de funciones", "inferencia de tipos", "polimorfismo", "evaluación perezosa"] },
    { id: "div_dis_alg", title: "Diseño de Algoritmos", keywords: ["diseño de algoritmos", "teoría de la complejidad", "Algoritmos Divide & Conquer", "Mergesort", "cálculo de inversiones", "Algoritmos voraces", "programación de intervalos", "algoritmo de Kruskal", "Programación dinámica", "problema de la mochila"] },
    { id: "div_prog_paral", title: "Introducción a la Programación Paralela y Distribuida", keywords: ["programación paralela", "programación distribuida", "máquinas paralelas", "paralelismo a nivel de instrucción", "jerarquía de memoria", "caché", "taxonomía de Flynn", "análisis de rendimiento", "Ley de Amdahl", "speedup", "cuda"] },
    { id: "div_ing_soft_web", title: "Ingeniería de Software para Aplicaciones Web", keywords: ["aplicaciones web", "tecnología web", "HTML", "CSS", "Backend", "servidor web Apache Tomcat", "Servlets", "JSP", "JSTL", "MySQL"] },

    //Sistemas y Teoría
    { id: "div_org_comp", title: "Organización de Computadores", keywords: ["lenguaje ensamblador MIPS", "arquitectura básica Von Neuman", "aritmética binaria", "lenguaje máquina", "lenguaje ensamblador", "declaración de datos", "datos en memoria", "carga y almacenamiento de datos", "operaciones aritméticas", "lógicas y de desplazamiento"] },
    { id: "div_sys_i", title: "Señales y Sistemas I", keywords: ["señales y sistemas", "definición de señales", "sistemas en ingeniería", "representación matemática", "funciones seno y coseno", "señales sinusoidales", "sinusoides complejas", "fasores", "representación espectral de señales temporales", "espectro de suma de sinusoides"] },
    { id: "div_so", title: "Sistemas Operativos", keywords: ["sistema operativo", "elementos que integran un ordenador", "tipos de sistemas operativos", "componentes de un sistema operativo", "programa concurrente", "bloque de control de procesos (PCB)", "estrategias de planificación de CPU", "espacio de memoria de procesos", "tipos de gestión de memoria", "segmentación y paginación de memoria"] },
    { id: "div_ing_soft", title: "Ingeniería de Software", keywords: ["ingeniería de software", "relación de la ingeniería de software con los ámbitos profesionales de la informática", "ciclo de vida de los productos de software", "modelos", "definición y clasificación de tipos de requerimientos", "elementos de un documento de requerimientos", "formalismos asociados", "ciclo de vida de los productos", "metodologías Agile", "uml"] },
    { id: "div_teoria_comp", title: "Teoría de la Computación", keywords: ["fundamentos teóricos de la computación", "lenguajes regulares", "autómatas finitos deterministas (DFA)", "autómatas finitos no deterministas (NDFA)", "expresiones regulares", "Teorema de Kleene", "lenguajes libres de contexto", "gramáticas libres de contexto (GLC)", "Teoría de la decidibilidad", "máquinas de Turing (MT)"] },
    { id: "div_sis_dist", title: "Sistemas Distribuidos de Gran Escala", keywords: ["programación paralela y distribuida", "Sistemas de Distribución a Gran Escala", "Hadoop", "MapReduce", "Spark", "GraphX", "TensorFlow", "Apache Spark MLlib"] },
    { id: "div_compila", title: "Compiladores", keywords: ["lenguaje C", "componentes de un compilador", "Análisis léxico (LEXER/SCANNER)", "tokens", "expresiones regulares", "autómatas finitos", "Análisis sintáctico (PARSER)", "gramáticas libres de contexto (CFG)", "árboles de sintaxis abstracta (AST)", "Análisis semántico", "Generación de código"] },

    //Ciencia de Datos

    { id: "div_apr_auto", title: "Aprendizaje Automático", keywords: ["Machine Learning",  "modelo aprendizaje automatico", "Métodos no Supervisados", "clustering", "Modelos Generativos", "Mixtura de Gausianas", "Análisis de Componentes Principales", "Principal Component Analysis"] },
    { id: "div_bases_datos", title: "Bases de Datos", keywords: ["gestión de datos", "manipulación de datos", "almacenamiento de datos", "bases de datos relacionales", "conceptos básicos de las bases de datos", "principios básicos que rigen las bases de datos", "estructura de bases datos", "modelo relacional", "SQL", "NOSQL", "Normalización"] },
    { id: "div_intel_art", title: "Inteligencia Artificial", keywords: ["IA", "Planificación y Búsqueda", "agentes de planificación", "problemas de búsqueda", "Búsqueda Adversarial", "Procesos de Decisión Markov", "Markov", "Aprendizaje por Refuerzo (RL)", "Artificial Intelligence"] },
    { id: "div_aiw", title: "Aplicaciones Inteligentes para la Web", keywords: ["procesamiento del lenguaje natural (NLP)", "extracción de información", "minería de opiniones", "resumen automático de texto", "aprendizaje profundo (Deep learning)", "modelos masivos de lenguaje", "chatGPT", "sistemas de generación de contenidos", "Dall-E", "traducción automática"] },
    { id: "div_gest_cares", title: "Análisis de Gestos y Caras", keywords: ["análisis facial automático", "Detección facial", "Técnica de Viola Jones", "Modelos flexibles de forma y apariencia", "PCA", "Reconocimiento facial", "Extracción de características de imágenes y video", "Expresiones faciales", "emociones", "Valence Arousal", "Gestos"] },

    //Visualización y Entornos

    { id: "div_graf_ord", title: "Gráficos por Ordenador", keywords: ["C#","visualización y modelado en 3D", "modelado 3D", "rasterización", "muestreo", "antialiasing", "luz y color", "modelos y sistemas de coordenadas", "iluminación básica", "texturizado", "modelos y representación", "animación", "mesh"] },
    { id: "div_ing_inter", title: "Ingeniería de Interacción", keywords: ["justinmind", "diseño web", "implementación", "evaluación", "interfaces gráficas de usuario (GUI)", "interacción humana con la computadora", "interfaz", "diseño contextual", "Ingeniería de Usabilidad", "prototipo", "modelo de nivel de pulsación de tecla" ,"GUI"] },
    { id: "div_videojuegos", title: "Narrativa y Videojuegos", keywords: ["creación de videojuegos", "narrativas interactivas", "narratología y lenguaje audiovisual", "estructura narrativa en videojuegos", "géneros y modelos de narrativa interactiva", "ludología y retórica procedural", "teoría del diseño de videojuegos", "retórica procedural", "value-based design", "indie games"] },
    { id: "div_ent_com_virt", title: "Entornos de Comunicación Virtual", keywords: ["desarrollo de comunidades online", "tecnologías web estándar", "Desarrollo Web", "APIs modernas", "HTML", "CSS", "Javascript", "WebSockets", "Canvas2D", "WebGL", "phpmyadmin"] },
    { id: "div_sist_int", title: "Sistemas Interactivos", keywords: ["experiencia interactiva Full-Body", "tecnologías de Mixed Reality (MR)", "Realidad mixta","Realidad aumentada", "sistemas interactivos en tiempo real", "tecnologías de interacción", "Augmented Reality", "Artificial Reality", "Tangible Interaction", "Extended Reality", "experiencias XR", "Unity"] },

    //Redes y Seguridad
    { id: "div_redes", title: "Redes", keywords: ["red","redes","protocolos e interfaces de comunicación", "arquitectura de redes", "protocolos de Internet TCP/IP", "fundamentos de las redes de comunicación", "TCP","IP", "transmisión / recepción de bits", "canales físicos", "comunicación salto a salto", "direccionamiento IP", "enrutamiento y reenvío", "comunicación de extremo a extremo","paquetes","packet tracer", "redes"] },
    { id: "div_cripto", title: "Criptografía y Seguridad", keywords: ["crypto", "cryptography", "criptografía", "hash", "protección de la privacidad de las comunicaciones", "objetivos de seguridad", "encriptación", "códigos de autenticación de mensajes", "protocolos de acuerdo clave", "firmas digitales", "Criptografía simétrica", "Criptografía asimétrica", "sage", "cripto"] },
    { id: "div_redes_in", title: "Redes de Sensores Inalámbricos", keywords: [ "Internet de las Cosas (IoT)", "redes IoT","Plataformas de Hardware", "microcontroladores", "SoCs", "ESP32-S2", "Sensores y Actuadores", "Consumo de Energía en IoT", "PHY y MAC para WSNs", "LoRa, NB-IoT"] },
    { id: "div_iot", title: "Internet of Things", keywords: [ "iot", "conceptos de IoT", "tecnologías de IoT", "hardware", "protocolos de red", "técnicas de pensamiento creativo", "técnicas de co-creación", "ESP32-S2", "Conexión a la nube IoT","Arduino"] },
    { id: "div_cybersec", title: "Seguridad en Computadores", keywords: ["security", "cybersecurity" , "ciberseguridad", "protección de los sistemas informáticos y las redes", "amenazas y vulnerabilidades", "Evaluación de la seguridad", "Footprinting", "escaneo y enumeración", "reconocimiento", "Protección de la red y los sistemas", "Hacking y análisis de malware", "Detección y prevención de amenazas", "Investigación de la reputación de IP", "kali linux", "metasploitable", "honeypot" , "SIEM", "wazzuh","nmap", "shell", "bash" ,"reverse shell"] },

    //Comunicación, Ética y Gestión
    { id: "div_intro_tic", title: "Introducción a las TIC", keywords: ["Introducción  Universidad", "Introducción a la Universidad", "recursos y servicios del campus/UPF", "estructura de los estudios universitarios", "normativa académica", "metodologías docentes", "Introducción al sector, empresa y mercado TIC", "perfil socio-profesional del/a ingeniero/a TIC", "estructura del sector TIC", "mercados y servicios de infraestructuras y servicios", "aspectos de género, ética y responsabilidad en la ingeniería TIC", "universidad", "UPF", "Universitat Pompeu Fabra"] },
    { id: "div_com_ingles", title: "Comunicación Técnica en Inglés", keywords: ["ingles", "ingles tecnico", "english", "angles","comunicación en inglés", "contextos técnicos y académicos", "5P-essay", "técnicas de argumentación", "resúmenes de textos y videos", "escritura de correo electrónico formal", "presentaciones orales", "comprensión de los acentos en inglés", "vocabulario ingles", "escritura de documentos cortos y largos"] },
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
  
      // Si el campo de búsqueda no está vacío, llama a la función de búsqueda
      if (searchValue.trim() !== '') {
        console.log(searchValue);
        searchFunction(searchValue);
      }
    }
  }

// var searchMap = {
//     "google ciberseguridad": "div_google_cybersecurity",
//     "google cybersecurity": "div_google_cybersecurity",
//     "google seguridad": "div_google_cybersecurity",
//     "google security": "div_google_cybersecurity",
//     // "filas1": "iconContainer1",
//     // "iconos2": "iconContainer2",
//     // "filas2": "iconContainer2",
//     // "iconos3": "iconContainer3",
//     // "filas3": "iconContainer3",
//     // "iconos4": "iconContainer4",
//     // "filas4": "iconContainer4",
//     // // Añade más términos e ids según sea necesario
// };


// function searchFunction(searchValue) {

//     // Busca el valor en el objeto searchMap
//     var divId = searchMap[searchValue];
//     console.log("Dentro search");
//     if (divId) {
//         // Si el término de búsqueda existe en el objeto, obtén el div correspondiente
//         var item = document.getElementById(divId);
//         console.log("Dentro if search");
//         // Muestra el div y oculta todos los demás
//         var items = divs_text.map(id => document.getElementById(id));
//         for (var i = 0; i < items.length; i++) {
//         if (items[i] === item) {
//             console.log("mostrado" , items[i]);
//             items[i].style.display = "block";
//             items[i].style.zIndex = zIndexUpdate++;
//         } else {
//             console.log(items[i]);
//             items[i].style.display = "none";
//         }
//         }
//     }
// }


function searchFunction(searchValue) {
    // Realiza la búsqueda con Fuse.js
    var resultados = fuse.search(searchValue);

    // Oculta todos los divs
    divs_text.forEach(function(d) {
        document.getElementById(d).style.display = 'none';
    });

    // Muestra los divs que coinciden con la búsqueda
    resultados.forEach(function(r) {
        document.getElementById(r.item.id).style.display = 'block';
    });
}


//Asginaturas



if(tall_tec_music){
    tall_tec_music.addEventListener("click", function () {
        if (div_tall_tec_music.style.display === 'none' || div_tall_tec_music.style.display === '') {
            hideAllDivsExcept(div_tall_tec_music);
            div_tall_tec_music.style.display = 'block'; // Muestra el div
            div_tall_tec_music.style.zIndex = zIndexUpdate++;
        } else {
            div_tall_tec_music.style.display = 'none'; // Oculta el div
        }
    });

}

if(ent_com_virt){
    ent_com_virt.addEventListener("click", function () {
        if (div_ent_com_virt.style.display === 'none' || div_ent_com_virt.style.display === '') {
            hideAllDivsExcept(div_ent_com_virt);
            div_ent_com_virt.style.display = 'block'; // Muestra el div
            div_ent_com_virt.style.zIndex = zIndexUpdate++;
        } else {
            div_ent_com_virt.style.display = 'none'; // Oculta el div
        }
    });

}

if(sist_int){
    sist_int.addEventListener("click", function () {
        if (div_sist_int.style.display === 'none' || div_sist_int.style.display === '') {
            hideAllDivsExcept(div_sist_int);
            div_sist_int.style.display = 'block'; // Muestra el div
            div_sist_int.style.zIndex = zIndexUpdate++;
        } else {
            div_sist_int.style.display = 'none'; // Oculta el div
        }
    });

}


if(gest_cares){
    gest_cares.addEventListener("click", function () {
        if (div_gest_cares.style.display === 'none' || div_gest_cares.style.display === '') {
            hideAllDivsExcept(div_gest_cares);
            div_gest_cares.style.display = 'block'; // Muestra el div
            div_gest_cares.style.zIndex = zIndexUpdate++;
        } else {
            div_gest_cares.style.display = 'none'; // Oculta el div
        }
    });

}

if(cybersec){
    cybersec.addEventListener("click", function () {
        if (div_cybersec.style.display === 'none' || div_cybersec.style.display === '') {
            hideAllDivsExcept(div_cybersec);
            div_cybersec.style.display = 'block'; // Muestra el div
            div_cybersec.style.zIndex = zIndexUpdate++;
        } else {
            div_cybersec.style.display = 'none'; // Oculta el div
        }
    });

}


if(aiw){
    aiw.addEventListener("click", function () {
        if (div_aiw.style.display === 'none' || div_aiw.style.display === '') {
            hideAllDivsExcept(div_aiw);
            div_aiw.style.display = 'block'; // Muestra el div
            div_aiw.style.zIndex = zIndexUpdate++;
        } else {
            div_aiw.style.display = 'none'; // Oculta el div
        }
    });

}


if(redes_in){
    redes_in.addEventListener("click", function () {
        if (div_redes_in.style.display === 'none' || div_redes_in.style.display === '') {
            hideAllDivsExcept(div_redes_in);
            div_redes_in.style.display = 'block'; // Muestra el div
            div_redes_in.style.zIndex = zIndexUpdate++;
        } else {
            div_redes_in.style.display = 'none'; // Oculta el div
        }
    });

}

if(ing_soft_web){
    ing_soft_web.addEventListener("click", function () {
        if (div_ing_soft_web.style.display === 'none' || div_ing_soft_web.style.display === '') {
            hideAllDivsExcept(div_ing_soft_web);
            div_ing_soft_web.style.display = 'block'; // Muestra el div
            div_ing_soft_web.style.zIndex = zIndexUpdate++;
        } else {
            div_ing_soft_web.style.display = 'none'; // Oculta el div
        }
    });

}


if(gest_proy){
    gest_proy.addEventListener("click", function () {
        if (div_gest_proy.style.display === 'none' || div_gest_proy.style.display === '') {
            hideAllDivsExcept(div_gest_proy);
            div_gest_proy.style.display = 'block'; // Muestra el div
            div_gest_proy.style.zIndex = zIndexUpdate++;
        } else {
            div_gest_proy.style.display = 'none'; // Oculta el div
        }
    });

}


if(intel_art){
    intel_art.addEventListener("click", function () {
        if (div_intel_art.style.display === 'none' || div_intel_art.style.display === '') {
            hideAllDivsExcept(div_intel_art);
            div_intel_art.style.display = 'block'; // Muestra el div
            div_intel_art.style.zIndex = zIndexUpdate++;
        } else {
            div_intel_art.style.display = 'none'; // Oculta el div
        }
    });

}


if(iot){
    iot.addEventListener("click", function () {
        if (div_iot.style.display === 'none' || div_iot.style.display === '') {
            hideAllDivsExcept(div_iot);
            div_iot.style.display = 'block'; // Muestra el div
            div_iot.style.zIndex = zIndexUpdate++;
        } else {
            div_iot.style.display = 'none'; // Oculta el div
        }
    });

}






//Certificacines


if(google_cybersecurity){
    google_cybersecurity.addEventListener("click", function () {
        if (div_google_cybersecurity.style.display === 'none' || div_google_cybersecurity.style.display === '') {
            hideAllDivsExcept(div_google_cybersecurity);
            div_google_cybersecurity.style.display = 'block'; // Muestra el div
            div_google_cybersecurity.style.zIndex = zIndexUpdate++;
        } else {
            div_google_cybersecurity.style.display = 'none'; // Oculta el div
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
            div_dockerlabs.style.display = 'block'; // Muestra el div
            div_dockerlabs.style.zIndex = zIndexUpdate++;
        } else {
            div_dockerlabs.style.display = 'none'; // Oculta el div
        }
    });

}

if(dl_maquina_trust){
    dl_maquina_trust.addEventListener("click", function () {
        if (div_dl_maquina_trust.style.display === 'none' || div_dl_maquina_trust.style.display === '') {
            hideAllDivsExcept(div_dl_maquina_trust);
            div_dl_maquina_trust.style.display = 'block'; // Muestra el div
            button_exit_pdf.style.visibility = 'visible'; // Muestra el boton para cerrar pdf
            div_dl_maquina_trust.style.zIndex = zIndexUpdate++;
            div_content.style.marginLeft = "0%";
        } else {
            div_dl_maquina_trust.style.display = 'none'; // Oculta el div
            button_exit_pdf.style.visibility = 'hidden'; // Oculta boton para cerrar pdf
            div_content.style.marginLeft = "30%";
        }
    });
    
}

if(dl_maquina_injection){
    dl_maquina_injection.addEventListener("click", function () {
        if (div_dl_maquina_injection.style.display === 'none' || div_dl_maquina_injection.style.display === '') {
            hideAllDivsExcept(div_dl_maquina_injection);
            div_dl_maquina_injection.style.display = 'block'; // Muestra el div
            button_exit_pdf.style.visibility = 'visible'; // Muestra el boton para cerrar pdf
            div_dl_maquina_injection.style.zIndex = zIndexUpdate++;
            div_content.style.marginLeft = "0%";
        } else {
            div_dl_maquina_injection.style.display = 'none'; // Oculta el div
            button_exit_pdf.style.visibility = 'hidden'; // Oculta boton para cerrar pdf
            div_content.style.marginLeft = "30%";
        }
    });
    
}

if(dl_maquina_upload){
    dl_maquina_upload.addEventListener("click", function () {
        if (div_dl_maquina_upload.style.display === 'none' || div_dl_maquina_upload.style.display === '') {
            hideAllDivsExcept(div_dl_maquina_upload);
            div_dl_maquina_upload.style.display = 'block'; // Muestra el div
            button_exit_pdf.style.visibility = 'visible'; // Muestra el boton para cerrar pdf
            div_dl_maquina_upload.style.zIndex = zIndexUpdate++;
            div_content.style.marginLeft = "0%";
        } else {
            div_dl_maquina_upload.style.display = 'none'; // Oculta el div
            button_exit_pdf.style.visibility = 'hidden'; // Oculta boton para cerrar pdf
            div_content.style.marginLeft = "30%";
        }
    });
    
}


if(dl_maquina_vacaciones){
    dl_maquina_vacaciones.addEventListener("click", function () {
        if (div_dl_maquina_vacaciones.style.display === 'none' || div_dl_maquina_vacaciones.style.display === '') {
            hideAllDivsExcept(div_dl_maquina_vacaciones);
            div_dl_maquina_vacaciones.style.display = 'block'; // Muestra el div
            button_exit_pdf.style.visibility = 'visible'; // Muestra el boton para cerrar pdf
            div_dl_maquina_vacaciones.style.zIndex = zIndexUpdate++;
            div_content.style.marginLeft = "0%";
        } else {
            div_dl_maquina_vacaciones.style.display = 'none'; // Oculta el div
            button_exit_pdf.style.visibility = 'hidden'; // Oculta boton para cerrar pdf
            div_content.style.marginLeft = "30%";
        }
    });
    
}


if(dl_maquina_breakmyssh){
    dl_maquina_breakmyssh.addEventListener("click", function () {
        if (div_dl_maquina_breakmyssh.style.display === 'none' || div_dl_maquina_breakmyssh.style.display === '') {
            hideAllDivsExcept(div_dl_maquina_breakmyssh);
            div_dl_maquina_breakmyssh.style.display = 'block'; // Muestra el div
            button_exit_pdf.style.visibility = 'visible'; // Muestra el boton para cerrar pdf
            div_dl_maquina_breakmyssh.style.zIndex = zIndexUpdate++;
            div_content.style.marginLeft = "0%";
        } else {
            div_dl_maquina_breakmyssh.style.display = 'none'; // Oculta el div
            button_exit_pdf.style.visibility = 'hidden'; // Oculta boton para cerrar pdf
            div_content.style.marginLeft = "30%";
        }
    });
    
}

if(dl_maquina_borazuwarahctf){
    dl_maquina_borazuwarahctf.addEventListener("click", function () {
        if (div_dl_maquina_borazuwarahctf.style.display === 'none' || div_dl_maquina_borazuwarahctf.style.display === '') {
            hideAllDivsExcept(div_dl_maquina_borazuwarahctf);
            div_dl_maquina_borazuwarahctf.style.display = 'block'; // Muestra el div
            button_exit_pdf.style.visibility = 'visible'; // Muestra el boton para cerrar pdf
            div_dl_maquina_borazuwarahctf.style.zIndex = zIndexUpdate++;
            div_content.style.marginLeft = "0%";
        } else {
            div_dl_maquina_borazuwarahctf.style.display = 'none'; // Oculta el div
            button_exit_pdf.style.visibility = 'hidden'; // Oculta boton para cerrar pdf
            div_content.style.marginLeft = "30%";
        }
    });
    
}

if(dl_maquina_firsthacking){
    dl_maquina_firsthacking.addEventListener("click", function () {
        if (div_dl_maquina_firsthacking.style.display === 'none' || div_dl_maquina_firsthacking.style.display === '') {
            hideAllDivsExcept(div_dl_maquina_firsthacking);
            div_dl_maquina_firsthacking.style.display = 'block'; // Muestra el div
            button_exit_pdf.style.visibility = 'visible'; // Muestra el boton para cerrar pdf
            div_dl_maquina_firsthacking.style.zIndex = zIndexUpdate++;
            div_content.style.marginLeft = "0%";
        } else {
            div_dl_maquina_firsthacking.style.display = 'none'; // Oculta el div
            button_exit_pdf.style.visibility = 'hidden'; // Oculta boton para cerrar pdf
            div_content.style.marginLeft = "30%";
        }
    });
    
}


if(dl_maquina_obsession){
    dl_maquina_obsession.addEventListener("click", function () {
        if (div_dl_maquina_obsession.style.display === 'none' || div_dl_maquina_obsession.style.display === '') {
            hideAllDivsExcept(div_dl_maquina_obsession);
            div_dl_maquina_obsession.style.display = 'block'; // Muestra el div
            button_exit_pdf.style.visibility = 'visible'; // Muestra el boton para cerrar pdf
            div_dl_maquina_obsession.style.zIndex = zIndexUpdate++;
            div_content.style.marginLeft = "0%";
        } else {
            div_dl_maquina_obsession.style.display = 'none'; // Oculta el div
            button_exit_pdf.style.visibility = 'hidden'; // Oculta boton para cerrar pdf
            div_content.style.marginLeft = "30%";
        }
    });
    
}


if(dl_maquina_walkingcms){
    dl_maquina_walkingcms.addEventListener("click", function () {
        if (div_dl_maquina_walkingcms.style.display === 'none' || div_dl_maquina_walkingcms.style.display === '') {
            hideAllDivsExcept(div_dl_maquina_walkingcms);
            div_dl_maquina_walkingcms.style.display = 'block'; // Muestra el div
            button_exit_pdf.style.visibility = 'visible'; // Muestra el boton para cerrar pdf
            div_dl_maquina_walkingcms.style.zIndex = zIndexUpdate++;
            div_content.style.marginLeft = "0%";
        } else {
            div_dl_maquina_walkingcms.style.display = 'none'; // Oculta el div
            button_exit_pdf.style.visibility = 'hidden'; // Oculta boton para cerrar pdf
            div_content.style.marginLeft = "30%";
        }
    });
    
}


if(dl_maquina_capypenguin){
    dl_maquina_capypenguin.addEventListener("click", function () {
        if (div_dl_maquina_capypenguin.style.display === 'none' || div_dl_maquina_capypenguin.style.display === '') {
            hideAllDivsExcept(div_dl_maquina_capypenguin);
            div_dl_maquina_capypenguin.style.display = 'block'; // Muestra el div
            button_exit_pdf.style.visibility = 'visible'; // Muestra el boton para cerrar pdf
            div_dl_maquina_capypenguin.style.zIndex = zIndexUpdate++;
            div_content.style.marginLeft = "0%";
        } else {
            div_dl_maquina_capypenguin.style.display = 'none'; // Oculta el div
            button_exit_pdf.style.visibility = 'hidden'; // Oculta boton para cerrar pdf
            div_content.style.marginLeft = "30%";
        }
    });
    
}


if(dl_maquina_pn){
    dl_maquina_pn.addEventListener("click", function () {
        if (div_dl_maquina_pn.style.display === 'none' || div_dl_maquina_pn.style.display === '') {
            hideAllDivsExcept(div_dl_maquina_pn);
            div_dl_maquina_pn.style.display = 'block'; // Muestra el div
            button_exit_pdf.style.visibility = 'visible'; // Muestra el boton para cerrar pdf
            div_dl_maquina_pn.style.zIndex = zIndexUpdate++;
            div_content.style.marginLeft = "0%";
        } else {
            div_dl_maquina_pn.style.display = 'none'; // Oculta el div
            button_exit_pdf.style.visibility = 'hidden'; // Oculta boton para cerrar pdf
            div_content.style.marginLeft = "30%";
        }
    });
    
}


if(dl_maquina_anonymouspingu){
    dl_maquina_anonymouspingu.addEventListener("click", function () {
        if (div_dl_maquina_anonymouspingu.style.display === 'none' || div_dl_maquina_anonymouspingu.style.display === '') {
            hideAllDivsExcept(div_dl_maquina_anonymouspingu);
            div_dl_maquina_anonymouspingu.style.display = 'block'; // Muestra el div
            button_exit_pdf.style.visibility = 'visible'; // Muestra el boton para cerrar pdf
            div_dl_maquina_anonymouspingu.style.zIndex = zIndexUpdate++;
            div_content.style.marginLeft = "0%";
        } else {
            div_dl_maquina_anonymouspingu.style.display = 'none'; // Oculta el div
            button_exit_pdf.style.visibility = 'hidden'; // Oculta boton para cerrar pdf
            div_content.style.marginLeft = "30%";
        }
    });
    
}


if(dl_maquina_library){
    dl_maquina_library.addEventListener("click", function () {
        if (div_dl_maquina_library.style.display === 'none' || div_dl_maquina_library.style.display === '') {
            hideAllDivsExcept(div_dl_maquina_library);
            div_dl_maquina_library.style.display = 'block'; // Muestra el div
            button_exit_pdf.style.visibility = 'visible'; // Muestra el boton para cerrar pdf
            div_dl_maquina_library.style.zIndex = zIndexUpdate++;
            div_content.style.marginLeft = "0%";
        } else {
            div_dl_maquina_library.style.display = 'none'; // Oculta el div
            button_exit_pdf.style.visibility = 'hidden'; // Oculta boton para cerrar pdf
            div_content.style.marginLeft = "30%";
        }
    });
    
}


if(dl_maquina_hiddencat){
    dl_maquina_hiddencat.addEventListener("click", function () {
        if (div_dl_maquina_hiddencat.style.display === 'none' || div_dl_maquina_hiddencat.style.display === '') {
            hideAllDivsExcept(div_dl_maquina_hiddencat);
            div_dl_maquina_hiddencat.style.display = 'block'; // Muestra el div
            button_exit_pdf.style.visibility = 'visible'; // Muestra el boton para cerrar pdf
            div_dl_maquina_hiddencat.style.zIndex = zIndexUpdate++;
            div_content.style.marginLeft = "0%";
        } else {
            div_dl_maquina_hiddencat.style.display = 'none'; // Oculta el div
            button_exit_pdf.style.visibility = 'hidden'; // Oculta boton para cerrar pdf
            div_content.style.marginLeft = "30%";
        }
    });
    
}


if(dl_maquina_dockerlabs){
    dl_maquina_dockerlabs.addEventListener("click", function () {
        if (div_dl_maquina_dockerlabs.style.display === 'none' || div_dl_maquina_dockerlabs.style.display === '') {
            hideAllDivsExcept(div_dl_maquina_dockerlabs);
            div_dl_maquina_dockerlabs.style.display = 'block'; // Muestra el div
            button_exit_pdf.style.visibility = 'visible'; // Muestra el boton para cerrar pdf
            div_dl_maquina_dockerlabs.style.zIndex = zIndexUpdate++;
            div_content.style.marginLeft = "0%";
        } else {
            div_dl_maquina_dockerlabs.style.display = 'none'; // Oculta el div
            button_exit_pdf.style.visibility = 'hidden'; // Oculta boton para cerrar pdf
            div_content.style.marginLeft = "30%";
        }
    });
    
}


if(dl_maquina_whereismywebshell){
    dl_maquina_whereismywebshell.addEventListener("click", function () {
        if (div_dl_maquina_whereismywebshell.style.display === 'none' || div_dl_maquina_whereismywebshell.style.display === '') {
            hideAllDivsExcept(div_dl_maquina_whereismywebshell);
            div_dl_maquina_whereismywebshell.style.display = 'block'; // Muestra el div
            button_exit_pdf.style.visibility = 'visible'; // Muestra el boton para cerrar pdf
            div_dl_maquina_whereismywebshell.style.zIndex = zIndexUpdate++;
            div_content.style.marginLeft = "0%";
        } else {
            div_dl_maquina_whereismywebshell.style.display = 'none'; // Oculta el div
            button_exit_pdf.style.visibility = 'hidden'; // Oculta boton para cerrar pdf
            div_content.style.marginLeft = "30%";
        }
    });
    
}


if(dl_maquina_amor){
    dl_maquina_amor.addEventListener("click", function () {
        if (div_dl_maquina_amor.style.display === 'none' || div_dl_maquina_amor.style.display === '') {
            hideAllDivsExcept(div_dl_maquina_amor);
            div_dl_maquina_amor.style.display = 'block'; // Muestra el div
            button_exit_pdf.style.visibility = 'visible'; // Muestra el boton para cerrar pdf
            div_dl_maquina_amor.style.zIndex = zIndexUpdate++;
            div_content.style.marginLeft = "0%";
        } else {
            div_dl_maquina_amor.style.display = 'none'; // Oculta el div
            button_exit_pdf.style.visibility = 'hidden'; // Oculta boton para cerrar pdf
            div_content.style.marginLeft = "30%";
        }
    });
    
}


if(dl_maquina_chocolatelovers){
    dl_maquina_chocolatelovers.addEventListener("click", function () {
        if (div_dl_maquina_chocolatelovers.style.display === 'none' || div_dl_maquina_chocolatelovers.style.display === '') {
            hideAllDivsExcept(div_dl_maquina_chocolatelovers);
            div_dl_maquina_chocolatelovers.style.display = 'block'; // Muestra el div
            button_exit_pdf.style.visibility = 'visible'; // Muestra el boton para cerrar pdf
            div_dl_maquina_chocolatelovers.style.zIndex = zIndexUpdate++;
            div_content.style.marginLeft = "0%";
        } else {
            div_dl_maquina_chocolatelovers.style.display = 'none'; // Oculta el div
            button_exit_pdf.style.visibility = 'hidden'; // Oculta boton para cerrar pdf
            div_content.style.marginLeft = "30%";
        }
    });
    
}


if(dl_maquina_secretjenkins){
    dl_maquina_secretjenkins.addEventListener("click", function () {
        if (div_dl_maquina_secretjenkins.style.display === 'none' || div_dl_maquina_secretjenkins.style.display === '') {
            hideAllDivsExcept(div_dl_maquina_secretjenkins);
            div_dl_maquina_secretjenkins.style.display = 'block'; // Muestra el div
            button_exit_pdf.style.visibility = 'visible'; // Muestra el boton para cerrar pdf
            div_dl_maquina_secretjenkins.style.zIndex = zIndexUpdate++;
            div_content.style.marginLeft = "0%";
        } else {
            div_dl_maquina_secretjenkins.style.display = 'none'; // Oculta el div
            button_exit_pdf.style.visibility = 'hidden'; // Oculta boton para cerrar pdf
            div_content.style.marginLeft = "30%";
        }
    });
    
}


if(dl_maquina_aguademayo){
    dl_maquina_aguademayo.addEventListener("click", function () {
        if (div_dl_maquina_aguademayo.style.display === 'none' || div_dl_maquina_aguademayo.style.display === '') {
            hideAllDivsExcept(div_dl_maquina_aguademayo);
            div_dl_maquina_aguademayo.style.display = 'block'; // Muestra el div
            button_exit_pdf.style.visibility = 'visible'; // Muestra el boton para cerrar pdf
            div_dl_maquina_aguademayo.style.zIndex = zIndexUpdate++;
            div_content.style.marginLeft = "0%";
        } else {
            div_dl_maquina_aguademayo.style.display = 'none'; // Oculta el div
            button_exit_pdf.style.visibility = 'hidden'; // Oculta boton para cerrar pdf
            div_content.style.marginLeft = "30%";
        }
    });
    
}


if(dl_maquina_buscalove){
    dl_maquina_buscalove.addEventListener("click", function () {
        if (div_dl_maquina_buscalove.style.display === 'none' || div_dl_maquina_buscalove.style.display === '') {
            hideAllDivsExcept(div_dl_maquina_buscalove);
            div_dl_maquina_buscalove.style.display = 'block'; // Muestra el div
            button_exit_pdf.style.visibility = 'visible'; // Muestra el boton para cerrar pdf
            div_dl_maquina_buscalove.style.zIndex = zIndexUpdate++;
            div_content.style.marginLeft = "0%";
        } else {
            div_dl_maquina_buscalove.style.display = 'none'; // Oculta el div
            button_exit_pdf.style.visibility = 'hidden'; // Oculta boton para cerrar pdf
            div_content.style.marginLeft = "30%";
        }
    });
    
}


if(dl_maquina_consolelog){
    dl_maquina_consolelog.addEventListener("click", function () {
        if (div_dl_maquina_consolelog.style.display === 'none' || div_dl_maquina_consolelog.style.display === '') {
            hideAllDivsExcept(div_dl_maquina_consolelog);
            div_dl_maquina_consolelog.style.display = 'block'; // Muestra el div
            button_exit_pdf.style.visibility = 'visible'; // Muestra el boton para cerrar pdf
            div_dl_maquina_consolelog.style.zIndex = zIndexUpdate++;
            div_content.style.marginLeft = "0%";
        } else {
            div_dl_maquina_consolelog.style.display = 'none'; // Oculta el div
            button_exit_pdf.style.visibility = 'hidden'; // Oculta boton para cerrar pdf
            div_content.style.marginLeft = "30%";
        }
    });
    
}


if(dl_maquina_escolares){
    dl_maquina_escolares.addEventListener("click", function () {
        if (div_dl_maquina_escolares.style.display === 'none' || div_dl_maquina_escolares.style.display === '') {
            hideAllDivsExcept(div_dl_maquina_escolares);
            div_dl_maquina_escolares.style.display = 'block'; // Muestra el div
            button_exit_pdf.style.visibility = 'visible'; // Muestra el boton para cerrar pdf
            div_dl_maquina_escolares.style.zIndex = zIndexUpdate++;
            div_content.style.marginLeft = "0%";
        } else {
            div_dl_maquina_escolares.style.display = 'none'; // Oculta el div
            button_exit_pdf.style.visibility = 'hidden'; // Oculta boton para cerrar pdf
            div_content.style.marginLeft = "30%";
        }
    });
    
}


if(dl_maquina_los40ladrones){
    dl_maquina_los40ladrones.addEventListener("click", function () {
        if (div_dl_maquina_los40ladrones.style.display === 'none' || div_dl_maquina_los40ladrones.style.display === '') {
            hideAllDivsExcept(div_dl_maquina_los40ladrones);
            div_dl_maquina_los40ladrones.style.display = 'block'; // Muestra el div
            button_exit_pdf.style.visibility = 'visible'; // Muestra el boton para cerrar pdf
            div_dl_maquina_los40ladrones.style.zIndex = zIndexUpdate++;
            div_content.style.marginLeft = "0%";
        } else {
            div_dl_maquina_los40ladrones.style.display = 'none'; // Oculta el div
            button_exit_pdf.style.visibility = 'hidden'; // Oculta boton para cerrar pdf
            div_content.style.marginLeft = "30%";
        }
    });
    
}


if(dl_maquina_move){
    dl_maquina_move.addEventListener("click", function () {
        if (div_dl_maquina_move.style.display === 'none' || div_dl_maquina_move.style.display === '') {
            hideAllDivsExcept(div_dl_maquina_move);
            div_dl_maquina_move.style.display = 'block'; // Muestra el div
            button_exit_pdf.style.visibility = 'visible'; // Muestra el boton para cerrar pdf
            div_dl_maquina_move.style.zIndex = zIndexUpdate++;
            div_content.style.marginLeft = "0%";
        } else {
            div_dl_maquina_move.style.display = 'none'; // Oculta el div
            button_exit_pdf.style.visibility = 'hidden'; // Oculta boton para cerrar pdf
            div_content.style.marginLeft = "30%";
        }
    });
    
}


if(dl_maquina_nodeclimb){
    dl_maquina_nodeclimb.addEventListener("click", function () {
        if (div_dl_maquina_nodeclimb.style.display === 'none' || div_dl_maquina_nodeclimb.style.display === '') {
            hideAllDivsExcept(div_dl_maquina_nodeclimb);
            div_dl_maquina_nodeclimb.style.display = 'block'; // Muestra el div
            button_exit_pdf.style.visibility = 'visible'; // Muestra el boton para cerrar pdf
            div_dl_maquina_nodeclimb.style.zIndex = zIndexUpdate++;
            div_content.style.marginLeft = "0%";
        } else {
            div_dl_maquina_nodeclimb.style.display = 'none'; // Oculta el div
            button_exit_pdf.style.visibility = 'hidden'; // Oculta boton para cerrar pdf
            div_content.style.marginLeft = "30%";
        }
    });
    
}


if(dl_maquina_picadilly){
    dl_maquina_picadilly.addEventListener("click", function () {
        if (div_dl_maquina_picadilly.style.display === 'none' || div_dl_maquina_picadilly.style.display === '') {
            hideAllDivsExcept(div_dl_maquina_picadilly);
            div_dl_maquina_picadilly.style.display = 'block'; // Muestra el div
            button_exit_pdf.style.visibility = 'visible'; // Muestra el boton para cerrar pdf
            div_dl_maquina_picadilly.style.zIndex = zIndexUpdate++;
            div_content.style.marginLeft = "0%";
        } else {
            div_dl_maquina_picadilly.style.display = 'none'; // Oculta el div
            button_exit_pdf.style.visibility = 'hidden'; // Oculta boton para cerrar pdf
            div_content.style.marginLeft = "30%";
        }
    });
    
}


if(dl_maquina_pinguinazo){
    dl_maquina_pinguinazo.addEventListener("click", function () {
        if (div_dl_maquina_pinguinazo.style.display === 'none' || div_dl_maquina_pinguinazo.style.display === '') {
            hideAllDivsExcept(div_dl_maquina_pinguinazo);
            div_dl_maquina_pinguinazo.style.display = 'block'; // Muestra el div
            button_exit_pdf.style.visibility = 'visible'; // Muestra el boton para cerrar pdf
            div_dl_maquina_pinguinazo.style.zIndex = zIndexUpdate++;
            div_content.style.marginLeft = "0%";
        } else {
            div_dl_maquina_pinguinazo.style.display = 'none'; // Oculta el div
            button_exit_pdf.style.visibility = 'hidden'; // Oculta boton para cerrar pdf
            div_content.style.marginLeft = "30%";
        }
    });
    
}


if(button_exit_pdf){
    button_exit_pdf.addEventListener("click", function()  {
        div_dl_maquina_trust.style.display = 'none'; // Oculta el div 
        div_dl_maquina_injection.style.display = 'none'; // Oculta el div
        div_dl_maquina_upload.style.display = 'none'; // Oculta el div
        div_dl_maquina_vacaciones.style.display = 'none'; // Oculta el div
        div_dl_maquina_breakmyssh.style.display = 'none'; // Oculta el div
        div_dl_maquina_borazuwarahctf.style.display = 'none'; // Oculta el div
        div_dl_maquina_firsthacking.style.display = 'none'; // Oculta el div
        div_dl_maquina_obsession.style.display = 'none'; // Oculta el div
        div_dl_maquina_walkingcms.style.display = 'none'; // Oculta el div
        div_dl_maquina_capypenguin.style.display = 'none'; // Oculta el div
        div_dl_maquina_pn.style.display = 'none'; // Oculta el div
        div_dl_maquina_anonymouspingu.style.display = 'none'; // Oculta el div
        div_dl_maquina_library.style.display = 'none'; // Oculta el div
        div_dl_maquina_hiddencat.style.display = 'none'; // Oculta el div
        div_dl_maquina_dockerlabs.style.display = 'none'; // Oculta el div
        div_dl_maquina_whereismywebshell.style.display = 'none'; // Oculta el div
        div_dl_maquina_amor.style.display = 'none'; // Oculta el div
        div_dl_maquina_chocolatelovers.style.display = 'none'; // Oculta el div
        div_dl_maquina_secretjenkins.style.display = 'none'; // Oculta el div
        div_dl_maquina_aguademayo.style.display = 'none'; // Oculta el div
        div_dl_maquina_buscalove.style.display = 'none'; // Oculta el div
        div_dl_maquina_consolelog.style.display = 'none'; // Oculta el div
        div_dl_maquina_escolares.style.display = 'none'; // Oculta el div
        div_dl_maquina_los40ladrones.style.display = 'none'; // Oculta el div
        div_dl_maquina_move.style.display = 'none'; // Oculta el div
        div_dl_maquina_nodeclimb.style.display = 'none'; // Oculta el div
        div_dl_maquina_picadilly.style.display = 'none'; // Oculta el div
        div_dl_maquina_pinguinazo.style.display = 'none'; // Oculta el div
        
        
        button_exit_pdf.style.visibility = 'hidden'; // Oculta boton para cerrar pdf
        div_content.style.marginLeft = "30%";
    });
}







