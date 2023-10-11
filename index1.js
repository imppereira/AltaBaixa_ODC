var square = document.getElementById("square");
var div_indice = document.getElementById("div_indice");

// ESTE ESTÁ A FUNCIONAR!!!
/*square.addEventListener('click', function (event) {
    if (div_indice.style.display === "block") {
        div_indice.style.display = "none";
        square.style.backgroundColor = "black";
        console.log(div_indice.style.display);
    } else {
        div_indice.style.display = "block";
        square.style.backgroundColor = "white";
    }
});*/

const div_video = document.querySelector('#landingpage');
const video = document.querySelector('#video_landingpage');
video.addEventListener('ended', (event) => {
    console.log('Video stopped either because 1) it was over, ' +
        'or 2) no further data is available.');
    div_video.style.display = "none";
    video.style.display = "none";
});

square.addEventListener('click', function (event) {
    if (square.style.backgroundColor === "black") {
        div_indice.style.transform = "translateY(0) translateX(0)";
        square.style.backgroundColor = "white";

        console.log("segundo click não funiona");
    } else {
        div_indice.style.transform = "translateY(100%) translateX(-100%)";
        square.style.backgroundColor = "black";
    }
});
const homepage = document.querySelector('#homepage');
var subtitulos_indice1 = document.getElementById("subtitulos_indice1");
subtitulos_indice1.addEventListener("click", function () {
     div_indice.style.transform = "translateY(100%) translateX(-100%)";
    square.style.backgroundColor = "black";
    homepage.scrollIntoView({behavior: 'smooth'});
})

const editorial = document.querySelector('#editorial');
var subtitulos_indice2 = document.getElementById("subtitulos_indice2");
subtitulos_indice2.addEventListener("click", function () {
    div_indice.style.transform = "translateY(100%) translateX(-100%)";
    square.style.backgroundColor = "black";
    editorial.scrollIntoView({behavior: 'smooth'});
})

const pagina_artigos = document.querySelector('#pagina_artigos');
var subtitulos_indice3 = document.getElementById("subtitulos_indice3");
subtitulos_indice3.addEventListener("click", function () {
    div_indice.style.transform = "translateY(100%) translateX(-100%)";
    square.style.backgroundColor = "black";
    div_artigo1.scrollIntoView({behavior: 'smooth'});
})

const div_artigo2 = document.querySelector('#div_artigo2');
var subtitulos_indice4 = document.getElementById("subtitulos_indice4");
subtitulos_indice4.addEventListener("click", function () {
    div_indice.style.transform = "translateY(100%) translateX(-100%)";
    square.style.backgroundColor = "black";
    div_artigo2.scrollIntoView({behavior: 'smooth'});
})


//IMAGENS HOVER ARTIGO 2
var imagem1 = document.getElementById("image1");
var legenda1 = document.getElementById("legenda1");
imagem1.addEventListener("mouseover", function () {
    legenda1.style.display = "block";
});
imagem1.addEventListener("mouseout", function () {
    legenda1.style.display = "none";
});

var imagem2 = document.getElementById("image2");
var legenda2 = document.getElementById("legenda2");
imagem2.addEventListener("mouseover", function () {
    legenda2.style.display = "block";
});
imagem2.addEventListener("mouseout", function () {
    legenda2.style.display = "none";
});

var imagem3 = document.getElementById("image3");
var legenda3 = document.getElementById("legenda3");
imagem3.addEventListener("mouseover", function () {
    legenda3.style.display = "block";
});
imagem3.addEventListener("mouseout", function () {
    legenda3.style.display = "none";
});

var imagem4 = document.getElementById("image4");
var legenda4 = document.getElementById("legenda4");
imagem4.addEventListener("mouseover", function () {
    legenda4.style.display = "inline-block";
});
imagem4.addEventListener("mouseout", function () {
    legenda4.style.display = "none";
});

//SETAS ARTIGOS
const element = document.querySelector('#div_artigo1');
const trigger = document.querySelector('#seta1');
trigger.addEventListener('click', () => {
    // Scroll to the element with smooth scroll behavior
    element.scrollIntoView({behavior: 'smooth'});
    /*    var barra_lateral = document.getElementsByClassName("barra_lateral");
        for (let i = 0; i < barra_lateral.length; i++) {
            barra_lateral[i].style.color = "white";
        }*/
});

const element2 = document.querySelector('#div_artigo2');
const trigger2 = document.querySelector('#seta2');
trigger2.addEventListener('click', () => {
    // Scroll to the element with smooth scroll behavior
    element2.scrollIntoView({behavior: 'smooth'});
});

//BARRA LATERAL
/*const homepage = document.querySelector('#homepage');
const homepage_barra = document.querySelector('#homepage_barra');
homepage_barra.addEventListener('click', () => {
    // Scroll to the element with smooth scroll behavior
    homepage.scrollIntoView({behavior: 'smooth'});
});

const editorial = document.querySelector('#editorial');
const editorial_barra = document.querySelector('#editorial_barra');
editorial_barra.addEventListener('click', () => {
    // Scroll to the element with smooth scroll behavior
    editorial.scrollIntoView({behavior: 'smooth'});
});

const pagina_artigos = document.querySelector('#pagina_artigos');
const artigos_barra = document.querySelector('#artigos_barra');
artigos_barra.addEventListener('click', () => {
    // Scroll to the element with smooth scroll behavior
    pagina_artigos.scrollIntoView({behavior: 'smooth'});
});

const div_artigo1 = document.querySelector('#div_artigo1');
const artigo1_barra = document.querySelector('#artigo1_barra');
artigo1_barra.addEventListener('click', () => {
    // Scroll to the element with smooth scroll behavior
    div_artigo1.scrollIntoView({behavior: 'smooth'});
});

const div_artigo2 = document.querySelector('#div_artigo2');
const artigo2_barra = document.querySelector('#artigo2_barra');
artigo2_barra.addEventListener('click', () => {
    // Scroll to the element with smooth scroll behavior
    div_artigo2.scrollIntoView({behavior: 'smooth'});
});*/


var isInViewport = function (elem) {
    var distance = elem.getBoundingClientRect();
    return (
        distance.top >= 0 &&
        distance.left >= 0 &&
        distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        distance.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

var typeface_page = document.querySelector('#typeface_page');
typeface_page.addEventListener('mouseover', function (event) {
    if (isInViewport(typeface_page)) {
        var textoisa = document.getElementsByClassName("textosobreanimacaoisa");
        var imagem1 = document.querySelector("#image1");
        imagem1.style.opacity = "1";
        for (let i = 0; i < textoisa.length; i++) {
            textoisa[i].style.position = "absolute"
            textoisa[i].style.left = "0";
            textoisa[i].style.bottom = "0";
        }
    } else {
        console.log('Não');
    }
}, false);


var valences_page = document.querySelector('#valences_page');
valences_page.addEventListener('mouseover', function (event) {
    if (isInViewport(valences_page)) {
        var textoisa = document.getElementsByClassName("textosobreanimacaoDireita");
        var imagem2 = document.querySelector("#image2");
        imagem2.style.opacity = "1";
        for (let i = 0; i < textoisa.length; i++) {
            textoisa[i].style.position = "absolute"
            textoisa[i].style.right = "0";
        }
    } else {
        console.log('Não');
    }
}, false);

valences_page.addEventListener('mouseover', function (event) {
    if (isInViewport(valences_page)) {
        var textoisa = document.getElementsByClassName("textosobreanimacaoDireita");
        var imagem3 = document.querySelector("#image3");
        imagem3.style.opacity = "1";
        for (let i = 0; i < textoisa.length; i++) {
            textoisa[i].style.position = "absolute"
            textoisa[i].style.right = "0";
        }
    } else {
        console.log('Não');
    }
}, false);

var types_page = document.querySelector('#types_page');
types_page.addEventListener('mouseover', function (event) {
    if (isInViewport(types_page)) {
        var textoisa = document.getElementsByClassName("textosobreanimacaoisa1");
        var imagem4 = document.querySelector("#image4");
        imagem4.style.opacity = "1";
        for (let i = 0; i < textoisa.length; i++) {
            textoisa[i].style.position = "relative";
            textoisa[i].style.left = "0";
            textoisa[i].style.bottom = "0";
        }
    } else {
        console.log('Não');
    }
}, false);

