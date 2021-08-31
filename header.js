let header = document.querySelector("header");



window.addEventListener("scroll",()=>{
    if (window.scrollY > 0) {
    	header.classList.add("activeBg")
    }else{
    	header.classList.remove("activeBg")
    }
})

     var swiper = new Swiper(".swiper",{
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",

        spaceBetween:0,
        coverflowEffect: {
          rotate: 0,
        },
      });



 const menu = document.querySelector(".ri-menu-line");
let menuOptions = document.querySelector(".type-music"); 
menu.addEventListener("click",function(){
    menuOptions.classList.toggle("active");
 })



 let tercerBtn = document.querySelector(".tercerBtn");
 




let arrBtn = document.querySelectorAll(".btn-pick-music");

let arrIcon = document.querySelectorAll(".play3")

console.log(arrIcon)


const playPauseIcon = (e) =>{
   let cajaPadre = e.target.nextElementSibling;
   if (cajaPadre.paused){
    let audio = document.querySelectorAll(".music-3");
       for (let i = 0 ; i < audio.length; i++) {
           if (audio[i].paused) {
                    e.target.classList.replace("ri-play-fill","ri-pause-fill")
                    e.target.style.color = "#fff";
                    e.target.style.padding = "9px";
                    e.target.style.display = "inline-block"
           }else{
              audio[i].pause()
              for (let i = 0; i < arrIcon.length; i++) {
                  arrIcon[i].classList.replace("ri-pause-fill","ri-play-fill")
              }
           } 

       }
    cajaPadre.play()      
   } 
    
    else{
     cajaPadre.pause();
     e.target.classList.replace("ri-pause-fill","ri-play-fill");
   }
}


for (let i = 0; i < arrBtn.length; i++) {
    arrBtn[i].addEventListener("click",playPauseIcon)
}


let audio = document.querySelectorAll(".music-3"); 

for (let i = 0; i < audio.length; i++) {
    audio[i].addEventListener("ended",(e)=>{
    console.log(e.target)
    e.target.previousElementSibling.classList.replace("ri-pause-fill","ri-play-fill");
  })
}


let search = document.querySelector(".title-music-type-rock");

search.addEventListener("click",()=>{
    let typeMusic = document.querySelector(".type-music");
    if (typeMusic.classList.toString().includes("active")) {
        typeMusic.classList.remove("active");
    }
    let buscardor = document.querySelector(".search");
    buscardor.classList.toggle("active");
})


let crealist = document.querySelector(".option-create-list");


crealist.addEventListener("click",()=>{
    let typeMusic = document.querySelector(".type-music");
    if (typeMusic.classList.toString().includes("active")) {
        typeMusic.classList.remove("active");
    }
    let content = document.querySelector(".conteiner-playList-favorite");   
    let contentPreview = document.querySelector(".content-music-preview");
    let conteinerAvatar = document.querySelector(".conteiner-playList");
    let contentLogin = document.querySelector(".conteiner-login")
    contentPreview.classList.add("hidden");
    if (content.classList.toString().includes("visible") || contentLogin.classList.toString().includes("visible")) {
        contentLogin.classList.remove("visible");
        content.classList.remove("visible");
        conteinerAvatar.classList.add("visible")
    }
    conteinerAvatar.classList.add("visible")
})

let favoriteList = document.querySelector(".option-favorite-music");


favoriteList.addEventListener("click",()=>{
    let typeMusic = document.querySelector(".type-music");
    if (typeMusic.classList.toString().includes("active")) {
        typeMusic.classList.remove("active");
    }
    let content = document.querySelector(".conteiner-playList-favorite");
    let contentPreview = document.querySelector(".content-music-preview");
    let conteinerAvatar = document.querySelector(".conteiner-playList"); 
    let contentLogin = document.querySelector(".conteiner-login");  
    contentPreview.classList.add("hidden");
    if (conteinerAvatar.classList.toString().includes("visible") || contentLogin.classList.toString().includes("visible")) {
        contentLogin.classList.remove("visible");
        conteinerAvatar.classList.remove("visible");
    }
    content.classList.add("visible")
})

let inicioBtn = document.querySelector(".visibily-home");


inicioBtn.addEventListener("click",()=>{
    let typeMusic = document.querySelector(".type-music");
    if (typeMusic.classList.toString().includes("active")) {
        typeMusic.classList.remove("active");
    }
    let content = document.querySelector(".conteiner-playList-favorite");
    let contentPreview = document.querySelector(".content-music-preview");
    let conteinerAvatar = document.querySelector(".conteiner-playList");
    let contentLogin = document.querySelector(".conteiner-login");    

    if (conteinerAvatar.classList.toString().includes("visible") || content.classList.toString().includes("visible") || contentLogin.classList.toString().includes("visible")) {
        contentLogin.classList.remove("visible");
        conteinerAvatar.classList.remove("visible");
        content.classList.remove("visible");
        contentPreview.classList.remove("hidden");
    }  
     contentPreview.classList.remove("hidden");

})

let btnSignIn = document.querySelector(".btn-login");
let btnSignInSecun = document.getElementById("btn-login-secun")

const openSesion = () =>{
    let typeMusic = document.querySelector(".type-music");
    if (typeMusic.classList.toString().includes("active")) {
        typeMusic.classList.remove("active");
    }
    let content = document.querySelector(".conteiner-playList-favorite");
    let contentPreview = document.querySelector(".content-music-preview");
    let conteinerAvatar = document.querySelector(".conteiner-playList");
    let contentLogin = document.querySelector(".conteiner-login");

    if (conteinerAvatar.classList.toString().includes("visible") || content.classList.toString().includes("visible") || contentPreview.classList.toString().includes("hidden") == false) {
        conteinerAvatar.classList.remove("visible");
        content.classList.remove("visible");
        contentPreview.classList.add("hidden");
        contentLogin.classList.add("visible");

    }  
     contentLogin.classList.add("visible");
}

btnSignInSecun.addEventListener("click",openSesion)
btnSignIn.addEventListener("click",openSesion)

let arrNumbers = document.querySelectorAll(".row-info-music");


let contador = 1;
for (let i = 0; i < arrNumbers.length; i++) {
    arrNumbers[i].addEventListener("mouseover",(e)=>{
        let cajaNumber = e.currentTarget.children[0].children[0];
        let number = e.currentTarget.children[0].children[0].children[0];
        if (number != undefined) {
          cajaNumber.removeChild(number);
         let i = document.createElement("I");
         i.classList.add("ri-play-fill");
         i.style.color = "#fff";
         i.style.padding = "padding: 0px 3px";
         i.style.transition = ".3s";
         cajaNumber.appendChild(i);
        }
    })
    arrNumbers[i].addEventListener("mouseleave",(e)=>{
        let cajaNumber = e.currentTarget.children[0].children[0];
        let number = e.currentTarget.children[0].children[0].children[0];

        if (cajaNumber.children[0].classList.toString().includes("ri-play-fill")) {
           if (cajaNumber.children[0] != undefined) {
             cajaNumber.removeChild(cajaNumber.children[0]);
             let span = document.createElement("SPAN");
             span.textContent = i+1;
             cajaNumber.appendChild(span)
           }
        }
    })

}