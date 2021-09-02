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


let file = document.querySelector(".load-avatar");

file.addEventListener("change",()=>{
   let avatar = file.files[0];
   mostrarAvatar(avatar);
})



const mostrarAvatar = (archivo) =>{

    const render = new FileReader();
    render.readAsDataURL(archivo);
    render.addEventListener("load",(e)=>{
        let url =  e.currentTarget.result;
        let urlSaveAvatar = localStorage.setItem("url-avatar", url);
        let avatar = document.querySelector(".content-avatar");
        let pickAvatar = document.querySelector(".pick-photo");
        let contentAvatar = document.querySelector(".content-file-avatar");
        let img = document.createElement("IMG");
        avatar.style.display = "none";
        img.setAttribute("src",url);
        img.style.position= "absolute";
        img.style.objectFit ="fill";
        if (contentAvatar.children.length == 1) {
            contentAvatar.appendChild(img);
        }else{
            contentAvatar.removeChild(contentAvatar.children[1]);
            contentAvatar.appendChild(img);
        }
     })

}


const cargarAvatar = () =>{
   if (localStorage.getItem("url-avatar")) {
      let url =  localStorage.getItem("url-avatar");
      let img = document.createElement("IMG");
      let contentAvatar = document.querySelector(".content-file-avatar"); 
        img.setAttribute("src",url);
        img.style.position= "absolute";
        img.style.objectFit ="fill";
        if (contentAvatar.children.length == 1) {
            contentAvatar.appendChild(img);
        }else{
            contentAvatar.removeChild(contentAvatar.children[1]);
            contentAvatar.appendChild(img);
        }
      
   }else{
      console.log("no existe un avatar")
   }
}


window.addEventListener("load",cargarAvatar)


const avatarDescription = document.querySelector(".content-avatar-description");
const settingsAvatar = document.querySelector(".icon-config");
const settingsAvatarSave = document.getElementById("ri-pencil-line");

const contentEditable = ()=>{
    if (settingsAvatar.classList.toString().includes("active") != true) {
    settingsAvatar.classList.add("active");
    settingsAvatar.children[0].classList.replace("ri-settings-3-fill","ri-pencil-line");
    settingsAvatar.children[0].style.color = "#ccc";
    settingsAvatar.children[0].style.fontSize = "25px";
    let arrEditable = [avatarDescription.children[1],avatarDescription.children[2]]
    for (let i = 0; i < arrEditable.length; i++) {
      arrEditable[i].classList.add("bg-editable");  
      arrEditable[i].children[0].setAttribute("contenteditable","true");
    }

    }
    else {
          let arrEditable = [avatarDescription.children[1],avatarDescription.children[2]]
          settingsAvatar.classList.remove("active");
         if (arrEditable[0].children[0].textContent.length > 13 || arrEditable[1].children[0].textContent.length > 24) {
            console.log(arrEditable[0],arrEditable[1])
             alert(" el nombre de  tu play list, porfavor intenta q no sea mas de 13 caracteres y en tu nombre no mas de 24 , lo justo y necesario pe chato:V")
         }else{
            contentEditableSave();
         }
         }
   }



const contentEditableSave = () =>{
 settingsAvatar.children[0].classList.replace("ri-pencil-line","ri-settings-3-fill");
 let arrEditable = [avatarDescription.children[1],avatarDescription.children[2]]
 for (let i = 0; i < arrEditable.length; i++) {
     arrEditable[i].children[0].removeAttribute("contenteditable");
     arrEditable[i].classList.remove("bg-editable");
 }

}

 let arrEditable = [avatarDescription.children[1],avatarDescription.children[2]]

 for (let i = 0; i < arrEditable.length; i++) {
     arrEditable[i].addEventListener("keyup",(e)=>{
        let parentNode = document.querySelector(".bg-editable");
         if (parentNode.children[0] == undefined){
            let h2 = document.createElement("H2");
            h2.classList.add("miLista");
            h2.style.padding = "0px 5px";
            parentNode.appendChild(h2)
         }
         if (e.keyCode == 13) {
            if (e.target.childNodes.length != 1) {
                for (let i = 1; i < e.target.childNodes.length; i++) {
                    e.target.removeChild(e.target.childNodes[i]);
                    if (e.target.childNodes[0].textContent.length > 13) {
                        alert("el nombre de  tu play list, porfavor intenta q no sea mas de 13 caracteres y en tu nombre no mas de 24 , lo justo y necesario  pe chato:V")
                    }else{
                        contentEditableSave()
                    }
                }
            }
         }
     })
 }

settingsAvatar.addEventListener("click",contentEditable)



let rowPlayPause = document.querySelectorAll(".row-info-music");

// const playRow = ()=>{
//     let audio = document.querySelector(".row-music");
//     if (audio.paused) {
//         audio.play();
//     }else{
//         audio.pause();
//     }
// }

const playRow = (e) =>{
   let cajaPadre = e.currentTarget.children[0].children[1];
   let contentspectro = document.querySelector(".number-music");
   console.log(cajaPadre)
   if (cajaPadre.paused){
    let audio = document.querySelectorAll(".row-music");
       for (let i = 0 ; i < audio.length; i++) {
           if (audio[i].paused) {
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
  e.stopPropagation();
}

for (let i = 0; i < rowPlayPause.length; i++) {
    rowPlayPause[i].addEventListener("click",playRow)
}