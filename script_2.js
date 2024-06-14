function ejecuta() {

    let boton_1= document.getElementById("boton_1");
    let boton_2= document.getElementById("boton_2");
    let boton_3= document.getElementById("boton_3");
    boton_1.addEventListener('click',text_1)
    boton_2.addEventListener('click',text_2)
    boton_3.addEventListener('click',text_3)
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
    var tex_a= '<br><br><br><br><br><br><br><figure><img src="img/ps.png" alt=""></figure><figure><img src="img/ado.png" alt=""></figure><figure><img src="img/clip.png" alt=""></figure>'
    var tex_b=""
    document.getElementById("one").innerHTML = text_c;
    document.getElementById("one_img").innerHTML = tex_a;
    document.getElementById("two_img").innerHTML = tex_b;
    
}

window.addEventListener("load",ejecuta,false);




