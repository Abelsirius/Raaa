
window.addEventListener("keyup",(e)=>{
     if (e.keyCode == 113) {
       document.querySelector("body").classList.toggle("dark-theme");
     }
})

// let numero = parseInt(prompt("Dime un numero"));

// let numeroSumar = 0;

// while(numeroSumar < numero){
//     numeroSumar++;
//     console.log(numeroSumar)
// }


let saludo = "Hola ";

let name =document.querySelector(".namE");

let btnSubmit = document.querySelector('.btn-submit');


btnSubmit.addEventListener("click",function(){
      if (name.value.length) {
         alert("al menos debe tener el nombre 16 caracteres")
      }else{
            alert(saludo.concat(name.value))
      }
})

let abel = document.querySelector(".Abel");
let array = ["Front-end","Abel"]
let contador = 0;

let interval = 6000;



setInterval(function(){
	  slide();
},interval);


 function slide(){
     
     abel.textContent = array[contador];
     contador++;

     if (contador === array.length) {
     	contador = 0;
     }
 }


 let btnA = document.querySelector(".move1");
 let btnB = document.querySelector(".move2");

 let closeModal = document.querySelector(".ri-close-line");
 let closeModal2 = document.querySelector(".close2");
   let modalDw = document.querySelector(".modal-services");
   	let modalDw2 = document.querySelector(".modal-services2");



closeModal.addEventListener("click",function(){
	cerrarModal(modalDw);
})
closeModal2.addEventListener("click",function(){
	cerrarModal(modalDw2)
})

btnB.addEventListener("click",function(e){
    modalDw.classList.add("active")
    e.preventDefault()
})

btnA.addEventListener("click",function(e){
	modalDw2.classList.add("active")
	e.preventDefault();

})

function cerrarModal(modal){
      	modal.classList.remove("active")
}

let moon = document.querySelector(".ri-moon-fill");

moon.addEventListener("click",function(){

	moon.classList.toggle("ri-sun-fill");

	let body = document.querySelector("body");

	body.classList.toggle("dark-theme")
    
})

// let contentSlide = document.querySelector(".content-slide");

// let viewSlide = document.querySelectorAll(".view-slide");

// let contando = 1;

// let contar = 1;
// let intervalo = 2500;



// let arrowLeft = document.querySelector(".ri-arrow-left-s-line");

// let arrowRight = document.querySelector(".ri-arrow-right-s-line");

// // setInterval(function(){
// //     slider()
// // },intervalo)
 

// arrowRight.addEventListener("click",sliderRight)

// function sliderRight(e){

        
//         let width = viewSlide[0].clientWidth;

//         contentSlide.style.transform = "translate("+ (-width * contando) + "px";
//         contentSlide.style.transition = "transform 1s";
//         contando++;
//         if (contando === viewSlide.length) {
//             contando = 2;
//         }
// }

// arrowLeft.addEventListener("click",sliderleft)
    
  
//   function sliderleft(){
//         let width2 = viewSlide[0].clientWidth;

//         contentSlide.style.transform = "translate("+ (-width2 * contando) + "px";
//         contentSlide.style.transition = "transform 1s";
//         contando--;

//         if (contando === -1) {
//             contando = 0;
//             console.log(contando)
//         }
//   }


  let  swiper = new Swiper('.swiper-container', {
      cssMode: true,
      loop:true,

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable:true,
      },
         mousewheel: true,
    });
       

  let pageOne = document.getElementById('pageOne');
  let pageTwo = document.getElementById('pageTwo');
  let pageTree = document.getElementById('pageTree');



  pageOne.addEventListener("click",()=>{
      window.open("https://abelsirius.github.io/PeruTravel/");
  })


  pageTwo.addEventListener("click",()=>{
      window.open("https://abelsirius.github.io/PaginaWeb/");
  })

  pageTree.addEventListener("click",()=>{
      window.open("file:///C:/Users/PC-011/OneDrive%20-%20CIBERTEC/Desktop/CSS,%20JS%20Y%20HTML/Pagina%20web%203/index.html");
  }) 
         