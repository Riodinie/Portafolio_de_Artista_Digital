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

 let contador = 0

const contenedor = document.querySelector('.slideshow')
const overlay = document.querySelector('.overlay')
const galeria_img = document.querySelectorAll('.prin img')
const img_slideshow = document.querySelector('.slideshow img')
 
 contenedor.addEventListener('click', function(event){

    let atras = contenedor.querySelector('.atras'),
        adelante= contenedor.querySelector('.adelante'),
        img= contenedor.querySelector('img'),
        tgt = event.target 

        if(tgt==atras){

          if(contador > 0){
             img.src = imagenes[contador - 1].img
             contador --
          }else{
           img.src = imagenes[imagenes.length - 1].img
           contador = imagenes.length - 1
          }

        }else if(tgt == adelante){

            if(contador < imagenes.length - 1){
                img.src = imagenes[contador + 1].img
                contador ++
             }else{
              img.src = imagenes[0].img
              contador = 0
             }


        }
 })

 Array.from(galeria_img).forEach(img => {
    img.addEventListener('click', event => 
    {
     const imagen_selec =+event.target.dataset.imgMostrar
     img_slideshow.src= imagenes[imagen_selec].img
     contador = imagen_selec
     overlay.style.opacity =1
     overlay.style.visibility ='visible'
    })

})

 document.querySelector('.btn_cerrar').addEventListener('click',() =>{
    overlay.style.opacity = 0
    overlay.style.visibility ='hidden' 
 })


})


