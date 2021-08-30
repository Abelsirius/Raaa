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

