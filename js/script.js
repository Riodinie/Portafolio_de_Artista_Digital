
const cloud = document.getElementById("logo-icon");
const barraLateral = document.querySelector(".sidebar");
const spans = document.querySelectorAll("span");
const palanca = document.querySelector(".switch");
const circle = document.querySelector(".circle");
const sidebarmenu = document.querySelector(".sidebar-menu");
const main = document.querySelector("main");

sidebarmenu.addEventListener("click",()=>{
    barraLateral.classList.toggle("max-sidebar");
    if(barraLateral.classList.contains("max-sidebar")){
        sidebarmenu.children[0].style.display = "none";
        sidebarmenu.children[1].style.display = "block";
    }
    else{
        sidebarmenu.children[0].style.display = "block";
        sidebarmenu.children[1].style.display = "none";
    }
    if(window.innerWidth<=320){
        barraLateral.classList.add("mini-sidebar");
        main.classList.add("min-main");
        spans.forEach((span)=>{
            span.classList.add("hidden");
        })
    }
});

palanca.addEventListener("click",()=>{
    let body = document.body;
    body.classList.toggle("");
    circle.classList.toggle("on");
});

cloud.addEventListener("click",()=>{
    barraLateral.classList.toggle("mini-sidebar");
    main.classList.toggle("min-main");
    spans.forEach((span)=>{
        span.classList.toggle("hidden");
    });
});

/* Carrusel */

document.addEventListener('DOMContentLoaded', function(){
    let imagenes = [
    
        {img: 'img/1_1.jpg'},
        {img: 'img/3_2.jpg'},
        {img: 'img/2_3.jpg'},
        {img: 'img/2_1.jpg'},
        {img: 'img/1_2.jpg'},
        {img: 'img/3_3.jpg'},
        {img: 'img/3_1.jpg'},
        {img: 'img/2_2.jpg'},
        {img: 'img/1_3.jpg'},
    
    ]
    
     let contador = 0;
    
    const contenedor = document.querySelector('.slideshow');
    const overlay = document.querySelector('.overlay');
    const galeria_img = document.querySelectorAll('.gallery-body img');
    const img_slideshow = document.querySelector('.slideshow img');
     
     contenedor.addEventListener('click', function(event){
    
        let Previous = contenedor.querySelector('.Previous'),
            Next= contenedor.querySelector('.Next'),
            img= contenedor.querySelector('img'),
            tgt = event.target 
    
            if(tgt==Previous){
    
              if(contador > 0){
                 img.src = imagenes[contador - 1].img
                 contador --
              }else{
               img.src = imagenes[imagenes.length - 1].img
               contador = imagenes.length - 1
              }
    
            }else if(tgt == Next){
    
                if(contador < imagenes.length - 1){
                    img.src = imagenes[contador + 1].img
                    contador ++
                 }else{
                  img.src = imagenes[0].img
                  contador = 0
                 }
    
    
            }
     });
    
     Array.from(galeria_img).forEach(img => {
        img.addEventListener('click', event => 
        {
         const imagen_selec =+event.target.dataset.imgMostrar
         img_slideshow.src= imagenes[imagen_selec].img
         contador = imagen_selec;
         overlay.style.opacity =1;
         overlay.style.visibility ='visible';
        });
    
    });
    
     document.querySelector('.btn_close').addEventListener('click',() =>{
        overlay.style.opacity = 0;
        overlay.style.visibility ='hidden';
     });
    
    
    });

    
    function ejecuta() {

        let button_1= document.getElementById("button_1");
        let button_2= document.getElementById("button_2");
        let button_3= document.getElementById("button_3");
        button_1.addEventListener('click',text_1)
        button_2.addEventListener('click',text_2)
        button_3.addEventListener('click',text_3)
    }
    
    function text_1() {
    
        var text_c = " Mi nombre es Nicolle Diaz, soy de Colombia y nací el 2 de marzo de 2004. Soy ilustradora y animadora Independiente. Desde toda mi vida me han apasionado los dibujos animados, el anime y los videojuegos. Mi objetivo es hacer algo tan grande como lo que me ha inspirado desde que era pequeña. Mi trabajo es ser ilustrador y animador independiente que trabaja en línea para el extranjero."
        var tex_a= ""
        var tex_b=""
        document.getElementById("one").innerHTML = text_c;
        document.getElementById("one_img").innerHTML = tex_a;
        document.getElementById("two_img").innerHTML = tex_b;
        
    }
    
    function text_2() {
    
        var text_c = ""
        var tex_a ='<figure><a href="https://twitter.com/wafferscotch"><img src="img/artista_1.png" alt=""><figcaption>Wafferscotch</figcaption></figure></a><figure><a href="https://twitter.com/kianamaiart"><img src="img/artista_2.png" alt=""><figcaption>Kiana Mai</figcaption></figure></a><figure><a href="https://twitter.com/toorurii"><img src="img/artista_3.png" alt=""><figcaption>Clem</figcaption></figure></a>'
        var tex_b= '<figure><a href="https://twitter.com/Yuto___Sano"><img src="img/artista_4.png" alt=""><figcaption>佐乃夕斗</figcaption></figure></a><figure><a href="https://twitter.com/takeo72"><img src="img/artista_5.png" alt=""><figcaption>たけじい</figcaption></figure></a><figure><a href="https://twitter.com/PapayaParty"><img src="img/artista_6.png" alt=""><figcaption>PapayaParty</figcaption></figure></a>'
        document.getElementById("one").innerHTML = text_c;
        document.getElementById("one_img").innerHTML = tex_a;
        document.getElementById("two_img").innerHTML = tex_b;
        
    }
    
    function text_3() {
    
        var text_c = "Tengo experiencia en el sector del dibujo digital, he utilizado el diseño gráfico para hacer ilustraciones de todo tipo, fanarts, tributes, comisiones. Conozco bien las nuevas herramientas digitales para la ilustración y me gusta mantenerme informado de todas las novedades que puedan mejorar mi trabajo. Soy una persona que valora el orden y la perfección, soy creativa y trato de dar lo mejor de mí en cada momento."
        var tex_a= '<br><br><figure><img src="img/ps.png" alt=""></figure><figure><img src="img/ado.png" alt=""></figure><figure><img src="img/clip.png" alt=""></figure>'
        var tex_b=""
        document.getElementById("one").innerHTML = text_c;
        document.getElementById("one_img").innerHTML = tex_a;
        document.getElementById("two_img").innerHTML = tex_b;
        
    }
    
    window.addEventListener("load",ejecuta,false);
    
        
    
    