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



const btnLogin = document.querySelector(".btn-iniciar");


const saveData = (e)=>{
 e.preventDefault();   
 let name = document.querySelector(".name-user").value;
 let gmail = document.querySelector(".gmail").value;
 let password = document.querySelector(".password").value;

 if (name.length <=2 || name.length > 24) {
    alert("Por favor envitar que el nombre tenga menos de 2 caracteres o mas de 24 caracteres")
 }else{
    localStorage.setItem("name-user",name)
 }

 if (gmail.includes("@") == false || gmail.includes(".com") == false || gmail.includes("gmail") == false ) {
       alert("gmail Incorrecto")
 }else{
    localStorage.setItem("gmail",gmail)
 }

 if (password.length <=6) {
     alert("password Debil")
 }else{
    localStorage.setItem("password",password)
}
 history.go(0)
}



btnLogin.addEventListener("click",saveData)

const setDatas = () =>{
    if (localStorage.getItem("name-user")) {
    let btnLoginSecun = document.querySelector(".btn-signup-secun");    
    let btnLogin = document.querySelector(".btn-login");
    let contentAvatar = document.querySelector(".user-avatar");
    let conteinerAvatarDos = document.querySelector(".avatar-dos");
    btnLogin.style.display = "none";
    btnLoginSecun.style.display = "none";
    contentAvatar.style.display = "flex";
    conteinerAvatarDos.style.display = "flex";

    let imgAvatar = document.createElement("IMG");
    if (localStorage.getItem("url-avatar")) {
        imgAvatar.setAttribute("src",localStorage.getItem("url-avatar"))
        conteinerAvatarDos.appendChild(imgAvatar);
      let span = document.createElement("P");
      span.classList.add("name-user-save");
      span.textContent = localStorage.getItem("name-user");
      conteinerAvatarDos.appendChild(span);
      
    }else{
      let iAvatar = document.createElement("I");
      iAvatar.classList.add("ri-user-fill")
      let span = document.createElement("P");
      span.classList.add("name-user-save");
      span.textContent = localStorage.getItem("name-user");
      conteinerAvatarDos.appendChild(iAvatar);
      conteinerAvatarDos.appendChild(span);
    }

    let nameFavorite = document.querySelectorAll(".name-of-user");
    for (let i = 0; i < nameFavorite.length; i++) {
        nameFavorite[i].children[0].textContent = localStorage.getItem("name-user");
    }
 }  
}

window.addEventListener("DOMContentLoaded",setDatas)



const infoMusic = [
    
      music = {
        name:"Alone",
        siglas: "AW",
        artista: "Alan Walker" ,
        img:"alone.jpg",
        urlUdio :"alone.mp3"

        },
       music = {
        name:"Attack Of The Sloth",
        artista: "Goblins from mars",
        siglas:"GBM",
        img :"sloth.jpg",
        urlUdio :"attackSloth.mp3" 
        },
      music = {
          name : "Stay With Me",
          artista : "Mendum",
          siglas : "M",
          img :"ncs.png",
          urlUdio :"stayWithMe.mp3"
      },
      music = {
          name : "Stay",
          artista : "The Kid LAROI, Justin Bieber",
          siglas : "TK",
          img :"stay.jpg",
          urlUdio :"stay.mp3"
      }, 
      music = {
        name:"Forbidden Voices",
        artista: "Martin Garrix",
        siglas : "Ma",
        img :"prohibido.jpg",
        urlUdio :"prohibido.mp3"  
        },
       music = {
        name:"The Only Way Is Up",
        artista: "Martin Garrix & Tiesto",
        siglas : "Mar",
        img :"MxT.jpg",
        urlUdio :"isUp.mp3"
        },
      music = {
          name : "Vintage 1930's Jazz Tove Lo",
          artista : "Haley Reinhart",
          siglas : "tove",
          img :"vintage.jpg",
          urlUdio :"habiets.mp3"
      },
      music = {
          name : "Byte",
          artista : "Martin Garrix",
          siglas : "Byt",
          img :"byte.jpg",
          urlUdio :"byte.mp3"
      }, 
      music = {
        name:"In The Name Of Love",
        artista: "Martin Garrix & Bebe Rexha",
        siglas : "In The name",
        img :"theLove.jpg",
        urlUdio :"nameLove.mp3"  
        },
       music = {
        name:"Arcade",
        artista: "Duncan Laurence",
        siglas : "Arca",
        img :"arcade.jpg",
        urlUdio :"Arcade.mp3"  
        },
      music = {
          name : "Wasting my Young Years",
          artista : "London Grammar",
          siglas  : "Wasting",
          img :"moose.jpg",
          urlUdio :"moon.mp3"
      },
      music = {
          name : "Fearless",
          artista : "Lost Sky  Feat.Chris Linton",
          siglas : "Fear",
          img :"fearless.jpg",
          urlUdio :"fearless.mp3"
      },
      music = {
          name : "Tragedia, Comedia y Ficción",
          artista : "Canserbero",
          siglas : "Canser",
          img :"can.jpg",
          urlUdio :"comedia&ficcion.mp3"
      },
      music = {
          name : "Need To Know",
          artista : "Doja Cat",
          siglas : "DJ",
          img :"doja.jpg",
          urlUdio :"toKnow.mp3"
      },
      music = {
          name : "Juicy",
          artista : "Doja Cat & Tyga",
          siglas : "JC",
          img :"doja.jpg",
          urlUdio :"juicy.mp3"
      },
      music = {
          name : "Send Me On My Way ",
          artista : "Rusted Root",
          siglas : "SMOMM",
          img :"musicIce.jpg",
          urlUdio :"musicIce.mp3"
      },
      music = {
          name : "Chill Song",
          artista : "Kamakawiwoʻole",
          siglas : "CS",
          img :"chill.jpg",
          urlUdio :"chill.mp3"
      },
      music = {
          name : "I Took a Pill In Ibiza",
          artista : "Mike Posner",
          siglas : "ITAPII",
          img :"iTook.jpg",
          urlUdio :"iTook.mp3"
      },
      music = {
          name : "This Is What You Came For",
          artista : "Calvin Harris ft.Rihanna",
          siglas : "TIWYCF",
          img :"thisIS.jpg",
          urlUdio :"thisIS.mp3"
      }                                                                 
]

console.log(infoMusic[12].artista.toLowerCase().includes("canserbero"))



let placeSearch = document.querySelector(".search-place");
let btnSearch = document.querySelector(".ri-search-line");



const createViewMusic = (nMusic,nArtista,urlImg,urlMusic)=>{
   
   let cajaPadreResults = document.querySelector(".search-results");
    cajaPadreResults.style.height = "300px";
    cajaPadreResults.style.transition = ".3s";

    let divResults = document.createElement("DIV");
    let divImgBc = document.createElement("DIV");
    let divNameMusic = document.createElement("DIV");

  
    let img = document.createElement("IMG");
    let p = document.createElement("P");
    let h3 = document.createElement("H3");
   

    divResults.classList.add("result-music");
    divImgBc.classList.add("imgbc");
    divNameMusic.classList.add("name-of-music");

    img.setAttribute("src",urlImg);
    p.textContent = nMusic;
    h3.textContent = nArtista;

    
    divImgBc.appendChild(img);
    divNameMusic.appendChild(p)
    divNameMusic.appendChild(h3)



    divResults.appendChild(divImgBc)
    divResults.appendChild(divNameMusic);


 const  codeReproductorMusic = (imgSong,nMusic,nameArtista)=>{
    
    let body = document.querySelector("body");

    if (body.children.length > 4) {
     for (let i = 0; i < body.children.length; i++) {
        if (body.children[i].classList.contains("reproductor")) {
        let audioSearch = document.querySelectorAll(".music-search");        
        for (let i = 0; i < audioSearch.length; i++) {
               if (audioSearch[i].play) {
                  audioSearch[i].pause();
               }
           }
            body.removeChild(body.children[i]);
        }
    }

    }
    let divContent = document.createElement("DIV");
    divContent.classList.add("reproductor")

    let divBanner = document.createElement("DIV");
    divBanner.classList.add("banner-song");

    let divOptions = document.createElement("DIV");
    divOptions.classList.add("optiones-settings");

    let img = document.createElement("IMG")
    img.setAttribute("src",imgSong)

    let Music = document.createElement("DIV");
    let audio = document.createElement("AUDIO");
    let source = document.createElement("SOURCE");
    let songInfo = document.createElement("DIV");
    songInfo.classList.add("song-info")
    Music.classList.add("content-music-search")
    audio.classList.add("music-search")
   source.setAttribute("src",urlMusic)
   source.setAttribute("type","audio/mp3")
    audio.appendChild(source)
    Music.appendChild(audio)

    let p = document.createElement("P");
    
    p.textContent = nMusic;

    let h3 = document.createElement("H3");

    h3.textContent = nameArtista;


    let divLiked = document.createElement("DIV");
    divLiked.classList.add("liked");

    let i = document.createElement("I");
    i.classList.add("ri-heart-fill");

    let divControls = document.createElement("DIV")
    divControls.classList.add("controls");

    let divControlSuperior = document.createElement("DIV");
    divControlSuperior.classList.add("controls-superior");

    let contentBtnAnterior = document.createElement("DIV");
    contentBtnAnterior.classList.add("iconsControls");

    let imgBtnAnterior = document.createElement("IMG")
    imgBtnAnterior.setAttribute("src","anterior.svg");

    let divPlayPause = document.createElement("DIV");
    divPlayPause.classList.add("iconsControls");

    let btnPlayPause = document.createElement("I")
    btnPlayPause.style.cursor = "pointer";
    btnPlayPause.classList.add("ri-play-fill");

    let contentBtnSiguiente = document.createElement("DIV");
    contentBtnSiguiente.classList.add("iconsControls")

    let imgBtnSiguiente = document.createElement("IMG");
    imgBtnSiguiente.setAttribute("src","siguiente.svg");

    let divDurationSong = document.createElement("DIV");
    divDurationSong.classList.add("song-duration");

    let divLineTime = document.createElement("DIV");
    divLineTime.classList.add("line-time");

    divBanner.appendChild(img)

    songInfo.appendChild(p)
    songInfo.appendChild(h3)

    divBanner.appendChild(songInfo)

    divLiked.appendChild(i)

    divBanner.appendChild(divLiked)

    contentBtnAnterior.appendChild(imgBtnAnterior)
    divControlSuperior.appendChild(contentBtnAnterior)
    divPlayPause.appendChild(btnPlayPause)
    divControlSuperior.appendChild(divPlayPause)
    contentBtnSiguiente.appendChild(imgBtnSiguiente)
    divControlSuperior.appendChild(contentBtnSiguiente)

    divControls.appendChild(divControlSuperior)
    divControls.appendChild(Music)
    divDurationSong.appendChild(divLineTime)
    divOptions.appendChild(divControls)

    divContent.appendChild(divBanner)
    divContent.appendChild(divOptions)
     
     btnPlayPause.addEventListener("click",(e)=>{
       if (audio.paused) {
          e.currentTarget.classList.replace("ri-play-fill","ri-pause-fill");
          audio.play()
       } else{
          e.currentTarget.classList.replace("ri-pause-fill","ri-play-fill");        
          audio.pause();
       }

     })
    body.appendChild(divContent);


}
      divResults.addEventListener("click",(e)=>{ 
        let cajaSerachResult = document.querySelector(".search-results");
        cajaSerachResult.style.height = "0px";
    codeReproductorMusic(urlImg,nMusic,nArtista);
   })
  
    cajaPadreResults.appendChild(divResults);

}

let string = "p u t a m a d r e";

console.log(string.replaceAll(" ","")); 

placeSearch.addEventListener("keyup",(e)=>{
   let cajaSerachResult = document.querySelector(".search-results");
   if (cajaSerachResult.children) {
       cajaSerachResult.innerHTML = "";}
    let place = e.target.value
  if (cajaSerachResult.children.length >= 0) {
         cajaSerachResult.style.height = "0px";
         cajaSerachResult.style.transition = ".3s";
        for (let i = 0; i < cajaSerachResult.children.length; i++) {
            cajaSerachResult.removeChild(cajaSerachResult.children[i]);
        }
    }
  if (e.currentTarget.value.length >= 1) {
       for (let i = 0; i < infoMusic.length; i++) {
          if (infoMusic[i].name.toLowerCase().replace(/\s+/g, '').includes(place.toLowerCase().replace(/\s+/g, '')) || infoMusic[i].artista.toLowerCase().replace(/\s+/g, '').includes(place.toLowerCase().replace(/\s+/g, '')) || infoMusic[i].siglas.toLowerCase().replace(/\s+/g, '').includes(place.toLowerCase().replace(/\s+/g, ''))) {
            createViewMusic(infoMusic[i].name,infoMusic[i].artista,infoMusic[i].img,infoMusic[i].urlUdio);   
          }
      }  
  }
   
})




      //  if (e.currentTarget.children[2].children[0].paused) {
      //     let audioSearch = document.querySelectorAll(".music-search")
      //      for (let i = 0; i < audioSearch.length; i++) {
      //          if (audioSearch[i].play) {
      //           audioSearch[i].pause();
      //          }
      //      }
      //   e.currentTarget.children[2].children[0].play();
      // }else{
      //   e.currentTarget.children[2].children[0].pause();
      // }