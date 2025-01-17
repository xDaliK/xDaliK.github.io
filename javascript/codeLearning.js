// JS By Daniel Lizarte Cáceres

console.log("Hello Console Learning!");

//Take elements from document
var button_learning= document.querySelector("button#button_back");
var div_content = document.querySelector("div#div_content");

// Grados
var bachillerato = document.getElementById("bachillerato");
var upf_info = document.getElementById("upf_info");

//Asignaturas
var calculo_i = document.getElementById("calculo_i");
var mat_discreta = document.getElementById("mat_discreta");
var intro_prog = document.getElementById("intro_prog");
var intro_tic = document.getElementById("intro_tic");
var calculo_ii = document.getElementById("calculo_ii");
var alg_lineal = document.getElementById("alg_lineal");
var eda_i = document.getElementById("eda_i");
var org_comp = document.getElementById("org_comp");
var redes = document.getElementById("redes");
var met_num = document.getElementById("met_num");
var eda_ii = document.getElementById("eda_ii");
var fisica = document.getElementById("fisica");
var prob = document.getElementById("prob");
var prog_obj = document.getElementById("prog_obj");
var sys_i = document.getElementById("sys_i");
var dis_fun_prog = document.getElementById("dis_fun_prog");
var est = document.getElementById("est");
var so = document.getElementById("so");
var graf_ord = document.getElementById("graf_ord");
var dis_alg = document.getElementById("dis_alg");
var apr_auto = document.getElementById("apr_auto");
var ing_inter = document.getElementById("ing_inter");
var prog_paral = document.getElementById("prog_paral");
var ing_soft = document.getElementById("ing_soft");
var bases_datos = document.getElementById("bases_datos");
var intel_art = document.getElementById("intel_art");
var teoria_comp = document.getElementById("teoria_comp");
var com_ingles = document.getElementById("com_ingles");
var sis_dist = document.getElementById("sis_dist");
var cripto = document.getElementById("cripto");
var compila = document.getElementById("compila");
var ing_soft_web = document.getElementById("ing_soft_web");
var redes_in = document.getElementById("redes_in");
var iot = document.getElementById("iot");
var gest_proy = document.getElementById("gest_proy");
var aiw = document.getElementById("aiw");
var gest_cares = document.getElementById("gest_cares");
var videojuegos = document.getElementById("videojuegos");
var ent_com_virt = document.getElementById("ent_com_virt");
var sist_int = document.getElementById("sist_int");
var cybersec = document.getElementById("cybersec");
var tall_tec_music = document.getElementById("tall_tec_music");
var tnlp = document.getElementById("tnlp");

//Certificaciones
var google_cybersecurity = document.getElementById("google_cybersecurity");

// Div Grados
var div_bachillerato = document.getElementById("div_bachillerato");
var div_upf_info = document.getElementById("div_upf_info");

// Div Asignaturas
var div_calculo_i = document.getElementById("div_calculo_i");
var div_mat_discreta = document.getElementById("div_mat_discreta");
var div_intro_prog = document.getElementById("div_intro_prog");
var div_intro_tic = document.getElementById("div_intro_tic");
var div_calculo_ii = document.getElementById("div_calculo_ii");
var div_alg_lineal = document.getElementById("div_alg_lineal");
var div_eda_i = document.getElementById("div_eda_i");
var div_org_comp = document.getElementById("div_org_comp");
var div_redes = document.getElementById("div_redes");
var div_met_num = document.getElementById("div_met_num");
var div_eda_ii = document.getElementById("div_eda_ii");
var div_fisica = document.getElementById("div_fisica");
var div_prob = document.getElementById("div_prob");
var div_prog_obj = document.getElementById("div_prog_obj");
var div_sys_i = document.getElementById("div_sys_i");
var div_dis_fun_prog = document.getElementById("div_dis_fun_prog");
var div_est = document.getElementById("div_est");
var div_so = document.getElementById("div_so");
var div_graf_ord = document.getElementById("div_graf_ord");
var div_dis_alg= document.getElementById("div_dis_alg");
var div_apr_auto= document.getElementById("div_apr_auto");
var div_ing_inter= document.getElementById("div_ing_inter");
var div_prog_paral = document.getElementById("div_prog_paral");
var div_ing_soft = document.getElementById("div_ing_soft");
var div_bases_datos = document.getElementById("div_bases_datos");
var div_intel_art = document.getElementById("div_intel_art");
var div_teoria_comp = document.getElementById("div_teoria_comp");
var div_com_ingles = document.getElementById("div_com_ingles");
var div_sis_dist = document.getElementById("div_sis_dist");
var div_cripto = document.getElementById("div_cripto");
var div_compila = document.getElementById("div_compila");
var div_ing_soft_web = document.getElementById("div_ing_soft_web");
var div_redes_in = document.getElementById("div_redes_in");
var div_iot = document.getElementById("div_iot");
var div_gest_proy = document.getElementById("div_gest_proy");
var div_aiw = document.getElementById("div_aiw");
var div_gest_cares = document.getElementById("div_gest_cares");
var div_videojuegos = document.getElementById("div_videojuegos");
var div_ent_com_virt = document.getElementById("div_ent_com_virt");
var div_sist_int = document.getElementById("div_sist_int");
var div_cybersec= document.getElementById("div_cybersec");
var div_tall_tec_music= document.getElementById("div_tall_tec_music");
var div_tnlp = document.getElementById("div_tnlp");

//Certificaciones
var div_google_cybersecurity= document.getElementById("div_google_cybersecurity");


var zIndexUpdate = 1;

// Añadir divs learnings a lista
var divs = [div_bachillerato, div_upf_info, div_calculo_i, div_mat_discreta, div_intro_prog, div_intro_tic, div_calculo_ii, div_alg_lineal, div_eda_i, div_org_comp, 
    div_redes, div_met_num, div_eda_ii, div_fisica, div_prob, div_prog_obj, div_sys_i, div_dis_fun_prog, div_est, div_so, div_graf_ord, 
    div_dis_alg, div_apr_auto, div_ing_inter, div_prog_paral, div_ing_soft, div_bases_datos, div_intel_art, div_teoria_comp, div_com_ingles, 
    div_sis_dist, div_cripto, div_compila, div_ing_soft_web, div_redes_in, div_iot, div_gest_proy, div_aiw, div_gest_cares, div_videojuegos,
    div_ent_com_virt, div_sist_int, div_cybersec, div_google_cybersecurity, div_tall_tec_music, div_tnlp]; 

    // Añadir divs learnings en string a lista
var divs_text = ["div_bachillerato", "div_upf_info", "div_calculo_i", "div_mat_discreta", "div_intro_prog", "div_intro_tic", "div_calculo_ii", "div_alg_lineal", "div_eda_i", "div_org_comp", 
    "div_redes", "div_met_num", "div_eda_ii", "div_fisica", "div_prob", "div_prog_obj", "div_sys_i", "div_dis_fun_prog", "div_est", "div_so", "div_graf_ord", 
    "div_dis_alg", "div_apr_auto", "div_ing_inter", "div_prog_paral", "div_ing_soft", "div_bases_datos", "div_intel_art", "div_teoria_comp", "div_com_ingles", 
    "div_sis_dist", "div_cripto", "div_compila", "div_ing_soft_web", "div_redes_in", "div_iot", "div_gest_proy", "div_aiw", "div_gest_cares", "div_videojuegos",
    "div_ent_com_virt", "div_sist_int", "div_cybersec", "div_tall_tec_music", "div_google_cybersecurity", "div_tnlp"]; 

function hideAllDivsExcept(div) {
    
    divs.forEach(function(d) {
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

if (button_learning) {
    button_learning.addEventListener("click", function () {
        goTo('logged.html');
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
    { id: "div_tnlp", title: "Técnicas de Procesamiento de Lenguaje Natural", keywords: ["procesamiento del lenguaje natural (NLP)", "extracción de información", "minería de opiniones", "resumen automático de texto", "aprendizaje profundo (Deep learning)", "modelos masivos de lenguaje", "chatGPT", "sistemas de generación de contenidos", "Dall-E", "traducción automática"] },

    //Visualización y Entornos

    { id: "div_graf_ord", title: "Gráficos por Ordenador", keywords: ["C#","visualización y modelado en 3D", "modelado 3D", "rasterización", "muestreo", "antialiasing", "luz y color", "modelos y sistemas de coordenadas", "iluminación básica", "texturizado", "modelos y representación", "animación", "mesh"] },
    { id: "div_ing_inter", title: "Ingeniería de Interacción", keywords: ["justinmind", "diseño web", "implementación", "evaluación", "interfaces gráficas de usuario (GUI)", "interacción humana con la computadora", "interfaz", "diseño contextual", "Ingeniería de Usabilidad", "prototipo", "modelo de nivel de pulsación de tecla" ,"GUI"] },
    { id: "div_videojuegos", title: "Narrativa y Videojuegos", keywords: ["narrativa" ,"videjuego" ,"videjuegos" , "juego", "juego" , "creación de videojuegos", "narrativas interactivas", "narratología y lenguaje audiovisual", "estructura narrativa en videojuegos", "géneros y modelos de narrativa interactiva", "ludología y retórica procedural", "teoría del diseño de videojuegos", "retórica procedural", "value-based design", "indie games"] },
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

//Grados
if (bachillerato) {
    bachillerato.addEventListener("click", function () {
        if (div_bachillerato.style.display === 'none' || div_bachillerato.style.display === '') {
            hideAllDivsExcept(div_bachillerato);
            div_bachillerato.style.display = 'block'; 
            div_bachillerato.style.zIndex = zIndexUpdate++;
        } else {
            div_bachillerato.style.display = 'none'; 
        }
    });
}


if (upf_info) {
    upf_info.addEventListener("click", function () {
        if (div_upf_info.style.display === 'none' || div_upf_info.style.display === '') {
            hideAllDivsExcept(div_upf_info);
            div_upf_info.style.display = 'block'; 
            div_upf_info.style.zIndex = zIndexUpdate++;
        } else {
            div_upf_info.style.display = 'none'; 
        }
    });
}



//Asginaturas

if (calculo_i) {
    calculo_i.addEventListener("click", function () {
        if (div_calculo_i.style.display === 'none' || div_calculo_i.style.display === '') {
            hideAllDivsExcept(div_calculo_i);
            div_calculo_i.style.display = 'block'; 
            div_calculo_i.style.zIndex = zIndexUpdate++;
        } else {
            div_calculo_i.style.display = 'none'; 
        }
    });
}

if(mat_discreta){
    mat_discreta.addEventListener("click", function () {
        if (div_mat_discreta.style.display === 'none' || div_mat_discreta.style.display === '') {
            hideAllDivsExcept(div_mat_discreta);
            div_mat_discreta.style.display = 'block'; 
            div_mat_discreta.style.zIndex = zIndexUpdate++;
        } else {
            div_mat_discreta.style.display = 'none'; 
        }
    });

}

if(intro_prog){
    intro_prog.addEventListener("click", function () {
        if (div_intro_prog.style.display === 'none' || div_intro_prog.style.display === '') {
            hideAllDivsExcept(div_intro_prog);
            div_intro_prog.style.display = 'block'; 
            div_intro_prog.style.zIndex = zIndexUpdate++;
        } else {
            div_intro_prog.style.display = 'none'; 
        }
    });

}

if(intro_tic){
    intro_tic.addEventListener("click", function () {
        if (div_intro_tic.style.display === 'none' || div_intro_tic.style.display === '') {
            hideAllDivsExcept(div_intro_tic);
            div_intro_tic.style.display = 'block'; 
            div_intro_tic.style.zIndex = zIndexUpdate++;
        } else {
            div_intro_tic.style.display = 'none'; 
        }
    });

}

if(calculo_ii){
    calculo_ii.addEventListener("click", function () {
        if (div_calculo_ii.style.display === 'none' || div_calculo_ii.style.display === '') {
            hideAllDivsExcept(div_calculo_ii);
            div_calculo_ii.style.display = 'block'; 
            div_calculo_ii.style.zIndex = zIndexUpdate++;
        } else {
            div_calculo_ii.style.display = 'none'; 
        }
    });

}


if(alg_lineal){
    alg_lineal.addEventListener("click", function () {
        if (div_alg_lineal.style.display === 'none' || div_alg_lineal.style.display === '') {
            hideAllDivsExcept(div_alg_lineal);
            div_alg_lineal.style.display = 'block'; 
            div_alg_lineal.style.zIndex = zIndexUpdate++;
        } else {
            div_alg_lineal.style.display = 'none'; 
        }
    });

}

if(eda_i){
    eda_i.addEventListener("click", function () {
        if (div_eda_i.style.display === 'none' || div_eda_i.style.display === '') {
            hideAllDivsExcept(div_eda_i);
            div_eda_i.style.display = 'block'; 
            div_eda_i.style.zIndex = zIndexUpdate++;
        } else {
            div_eda_i.style.display = 'none'; 
        }
    });

}


if(org_comp){
    org_comp.addEventListener("click", function () {
        if (div_org_comp.style.display === 'none' || div_org_comp.style.display === '') {
            hideAllDivsExcept(div_org_comp);
            div_org_comp.style.display = 'block'; 
            div_org_comp.style.zIndex = zIndexUpdate++;
        } else {
            div_org_comp.style.display = 'none'; 
        }
    });


}

if(redes){
    redes.addEventListener("click", function () {
        if (div_redes.style.display === 'none' || div_redes.style.display === '') {
            hideAllDivsExcept(div_redes);
            div_redes.style.display = 'block'; 
            div_redes.style.zIndex = zIndexUpdate++;
        } else {
            div_redes.style.display = 'none'; 
        }
    });

}

if(met_num){
    met_num.addEventListener("click", function () {
        if (div_met_num.style.display === 'none' || div_met_num.style.display === '') {
            hideAllDivsExcept(div_met_num);
            div_met_num.style.display = 'block'; 
            div_met_num.style.zIndex = zIndexUpdate++;
        } else {
            div_met_num.style.display = 'none'; 
        }
    });

}

if(eda_ii){
    eda_ii.addEventListener("click", function () {
        if (div_eda_ii.style.display === 'none' || div_eda_ii.style.display === '') {
            hideAllDivsExcept(div_eda_ii);
            div_eda_ii.style.display = 'block'; 
            div_eda_ii.style.zIndex = zIndexUpdate++;
        } else {
            div_eda_ii.style.display = 'none'; 
        }
    });

}

if(fisica){
    fisica.addEventListener("click", function () {
        if (div_fisica.style.display === 'none' || div_fisica.style.display === '') {
            hideAllDivsExcept(div_fisica);
            div_fisica.style.display = 'block'; 
            div_fisica.style.zIndex = zIndexUpdate++;
        } else {
            div_fisica.style.display = 'none'; 
        }
    });

}

if(prob){
    prob.addEventListener("click", function () {
        if (div_prob.style.display === 'none' || div_prob.style.display === '') {
            hideAllDivsExcept(div_prob);
            div_prob.style.display = 'block'; 
            div_prob.style.zIndex = zIndexUpdate++;
        } else {
            div_prob.style.display = 'none'; 
        }
    });

}

if(prog_obj){
    prog_obj.addEventListener("click", function () {
        if (div_prog_obj.style.display === 'none' || div_prog_obj.style.display === '') {
            hideAllDivsExcept(div_prog_obj);
            div_prog_obj.style.display = 'block'; 
            div_prog_obj.style.zIndex = zIndexUpdate++;
        } else {
            div_prog_obj.style.display = 'none'; 
        }
    });

}

if(sys_i){
    sys_i.addEventListener("click", function () {
        if (div_sys_i.style.display === 'none' || div_sys_i.style.display === '') {
            hideAllDivsExcept(div_sys_i);
            div_sys_i.style.display = 'block'; 
            div_sys_i.style.zIndex = zIndexUpdate++;
        } else {
            div_sys_i.style.display = 'none'; 
        }
    });

}


if(dis_fun_prog){
    dis_fun_prog.addEventListener("click", function () {
        if (div_dis_fun_prog.style.display === 'none' || div_dis_fun_prog.style.display === '') {
            hideAllDivsExcept(div_dis_fun_prog);
            div_dis_fun_prog.style.display = 'block'; 
            div_dis_fun_prog.style.zIndex = zIndexUpdate++;
        } else {
            div_dis_fun_prog.style.display = 'none'; 
        }
    });

}


if(est){
    est.addEventListener("click", function () {
        if (div_est.style.display === 'none' || div_est.style.display === '') {
            hideAllDivsExcept(div_est);
            div_est.style.display = 'block'; 
            div_est.style.zIndex = zIndexUpdate++;
        } else {
            div_est.style.display = 'none'; 
        }
    });

}

if(so){
    so.addEventListener("click", function () {
        if (div_so.style.display === 'none' || div_so.style.display === '') {
            hideAllDivsExcept(div_so);
            div_so.style.display = 'block'; 
            div_so.style.zIndex = zIndexUpdate++;
        } else {
            div_so.style.display = 'none'; 
        }
    });

}


if(graf_ord){
    graf_ord.addEventListener("click", function () {
        if (div_graf_ord.style.display === 'none' || div_graf_ord.style.display === '') {
            hideAllDivsExcept(div_graf_ord);
            div_graf_ord.style.display = 'block'; 
            div_graf_ord.style.zIndex = zIndexUpdate++;
        } else {
            div_graf_ord.style.display = 'none'; 
        }
    });

}


if(dis_alg){
    dis_alg.addEventListener("click", function () {
        if (div_dis_alg.style.display === 'none' || div_dis_alg.style.display === '') {
            hideAllDivsExcept(div_dis_alg);
            div_dis_alg.style.display = 'block'; 
            div_dis_alg.style.zIndex = zIndexUpdate++;
        } else {
            div_dis_alg.style.display = 'none'; 
        }
    });

}


if(apr_auto){
    apr_auto.addEventListener("click", function () {
        if (div_apr_auto.style.display === 'none' || div_apr_auto.style.display === '') {
            hideAllDivsExcept(div_apr_auto);
            div_apr_auto.style.display = 'block'; 
            div_apr_auto.style.zIndex = zIndexUpdate++;
        } else {
            div_apr_auto.style.display = 'none'; 
        }
    });

}


if(ing_inter){
    ing_inter.addEventListener("click", function () {
        if (div_ing_inter.style.display === 'none' || div_ing_inter.style.display === '') {
            hideAllDivsExcept(div_ing_inter);
            div_ing_inter.style.display = 'block'; 
            div_ing_inter.style.zIndex = zIndexUpdate++;
        } else {
            div_ing_inter.style.display = 'none'; 
        }
    });

}


if(prog_paral){
    prog_paral.addEventListener("click", function () {
        if (div_prog_paral.style.display === 'none' || div_prog_paral.style.display === '') {
            hideAllDivsExcept(div_prog_paral);
            div_prog_paral.style.display = 'block'; 
            div_prog_paral.style.zIndex = zIndexUpdate++;
        } else {
            div_prog_paral.style.display = 'none'; 
        }
    });

}



if(ing_soft){
    ing_soft.addEventListener("click", function () {
        if (div_ing_soft.style.display === 'none' || div_ing_soft.style.display === '') {
            hideAllDivsExcept(div_ing_soft);
            div_ing_soft.style.display = 'block'; 
            div_ing_soft.style.zIndex = zIndexUpdate++;
        } else {
            div_ing_soft.style.display = 'none'; 
        }
    });

}


if(bases_datos){
    bases_datos.addEventListener("click", function () {
        if (div_bases_datos.style.display === 'none' || div_bases_datos.style.display === '') {
            hideAllDivsExcept(div_bases_datos);
            div_bases_datos.style.display = 'block'; 
            div_bases_datos.style.zIndex = zIndexUpdate++;
        } else {
            div_bases_datos.style.display = 'none'; 
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



if(teoria_comp){
    teoria_comp.addEventListener("click", function () {
        if (div_teoria_comp.style.display === 'none' || div_teoria_comp.style.display === '') {
            hideAllDivsExcept(div_teoria_comp);
            div_teoria_comp.style.display = 'block'; 
            div_teoria_comp.style.zIndex = zIndexUpdate++;
        } else {
            div_teoria_comp.style.display = 'none'; 
        }
    });

}



if(com_ingles){
    com_ingles.addEventListener("click", function () {
        if (div_com_ingles.style.display === 'none' || div_com_ingles.style.display === '') {
            hideAllDivsExcept(div_com_ingles);
            div_com_ingles.style.display = 'block'; 
            div_com_ingles.style.zIndex = zIndexUpdate++;
        } else {
            div_com_ingles.style.display = 'none'; 
        }
    });

}



if(sis_dist){
    sis_dist.addEventListener("click", function () {
        if (div_sis_dist.style.display === 'none' || div_sis_dist.style.display === '') {
            hideAllDivsExcept(div_sis_dist);
            div_sis_dist.style.display = 'block'; 
            div_sis_dist.style.zIndex = zIndexUpdate++;
        } else {
            div_sis_dist.style.display = 'none'; 
        }
    });

}


if(cripto){
    cripto.addEventListener("click", function () {
        if (div_cripto.style.display === 'none' || div_cripto.style.display === '') {
            hideAllDivsExcept(div_cripto);
            div_cripto.style.display = 'block'; 
            div_cripto.style.zIndex = zIndexUpdate++;
        } else {
            div_cripto.style.display = 'none'; 
        }
    });

}


if(compila){
    compila.addEventListener("click", function () {
        if (div_compila.style.display === 'none' || div_compila.style.display === '') {
            hideAllDivsExcept(div_compila);
            div_compila.style.display = 'block'; 
            div_compila.style.zIndex = zIndexUpdate++;
        } else {
            div_compila.style.display = 'none'; 
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


if(videojuegos){
    videojuegos.addEventListener("click", function () {
        if (div_videojuegos.style.display === 'none' || div_videojuegos.style.display === '') {
            hideAllDivsExcept(div_videojuegos);
            div_videojuegos.style.display = 'block'; 
            div_videojuegos.style.zIndex = zIndexUpdate++;
        } else {
            div_videojuegos.style.display = 'none'; 
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

if(tnlp){
    tnlp.addEventListener("click", function () {
        if (div_tnlp.style.display === 'none' || div_tnlp.style.display === '') {
            hideAllDivsExcept(div_tnlp);
            div_tnlp.style.display = 'block'; 
            div_tnlp.style.zIndex = zIndexUpdate++;
        } else {
            div_tnlp.style.display = 'none'; 
        }
    });

}



//Certificacines
if(google_cybersecurity){
    google_cybersecurity.addEventListener("click", function () {
        if (div_google_cybersecurity.style.display === 'none' || div_google_cybersecurity.style.display === '') {
            hideAllDivsExcept(div_google_cybersecurity);
            div_google_cybersecurity.style.display = 'block'; 
            div_google_cybersecurity.style.zIndex = zIndexUpdate++;
        } else {
            div_google_cybersecurity.style.display = 'none'; 
        }
    });

}







