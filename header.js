let header = document.querySelector("header");


window.addEventListener("scroll",()=>{
    if (window.scrollY > 0) {
    	header.classList.add("activeBg")
    }else{
    	header.classList.remove("activeBg")
    }
})




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
      ,
      music = {
          name : " Kimetsu no Yaiba - Opening Full",
          artista : "LiSA",
          siglas : "KNY",
          img :"DS.jpg",
          urlUdio :"openingDemon.mp3"
      } ,
      music = {
          name : " Kimetsu no Yaiba - no Uta",
          artista : "Masaru Shiina",
          siglas : "KNY",
          img :"DS.jpg",
          urlUdio :"endingDemon.mp3"
      } 
       ,
      music = {
          name : " Death Note - Low Of Solipsism",
          artista : "Yoshihisa Hirano",
          siglas : "LOS",
          img :"yagami.jpg",
          urlUdio :"yagami.mp3"
      }  
        ,
      music = {
          name : " Death Note- Kuroi Light",
          artista : " Kyrie For",
          siglas : "DNKL",
          img :"yagami.jpg",
          urlUdio :"kuroi.mp3"
      }
        ,
      music = {
          name : "akon - lonely",
          artista : "Akon",
          siglas : "L",
          img :"lonely.jpg",
          urlUdio :"lonely.mp3"
      } ,
      music = {
        name : "Macklemore & Ryan Lewis - Can't Hold Us",
        artista : "Macklemore & Ryan Lewis",
        siglas : "M",
        img :"cantHoldUs.jpg",
        urlUdio :"cantHoldUs.mp3"
    }  
    ,
    music = {
      name : "Lil Wayne - What About me",
      artista : "Lil Wayne",
      siglas : "LW",
      img :"aboutMe.jpg",
      urlUdio :"aboutMe.mp3"
  }  
      ,
    music = {
      name : "David Guetta - Play Hard ft. Ne-Yo, Akon",
      artista : "David Guetta",
      siglas : "DG",
      img :"workHard.jpg",
      urlUdio :"workHard.mp3"
  }      
  ,
  music = {
    name : "David Kushman - Daylight",
    artista : "David Kushman",
    siglas : "Dk",
    img :"data:image/jpeg;base64,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",
    urlUdio :"daylight.mp3"
}                                                                  
]

console.log(infoMusic[12].artista.toLowerCase().startsWith("canserbero"))



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
      

    let contentBucle = document.createElement("DIV");
    let bucle = document.createElement("IMG");
    contentBucle.classList.add("content-bucle")
    bucle.setAttribute("src","loop.png")

    contentBucle.appendChild(bucle);
      

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

    let timeStamp = document.createElement("DIV");
    timeStamp.classList.add("tiempo-actual");
    timeStamp.innerText= "00:00" ;

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
   
    let progressMusic = document.createElement("INPUT");

    progressMusic.classList.add("progress");
    progressMusic.setAttribute("id","progress");

    progressMusic.setAttribute("type","range");
    progressMusic.setAttribute("min",0);
    progressMusic.setAttribute("value",100);
    progressMusic.setAttribute("max",100);






    let volumenMusic = document.createElement("INPUT")
    volumenMusic.setAttribute("id","volumen")
    volumenMusic.setAttribute("type","range");
    volumenMusic.setAttribute("min",0);
    volumenMusic.setAttribute("step",0,1);

    volumenMusic.setAttribute("value",80);
    volumenMusic.setAttribute("max",100);

    

   const  activarBucle = (num) =>{
     let contador = 0;
     audio.addEventListener("ended",()=>{
       
       if (contador <= num) {
          audio.play();
          btnPlayPause.classList.replace("ri-play-fill","ri-pause-fill");
       }else{
          contentBucle.classList.remove("active"); 
       }
       
     })


   }
    bucle.addEventListener("click",(e)=>{
          if (contentBucle.classList.contains("active") == false) {
              contentBucle.classList.add("active");
              activarBucle(100);
          }else{
              contentBucle.classList.remove("active");            
          }

    })

    divBanner.appendChild(img)
    divDurationSong.appendChild(timeStamp);
    songInfo.appendChild(p)
    songInfo.appendChild(h3)

    divBanner.appendChild(songInfo)

    divLiked.appendChild(i)

    divBanner.appendChild(divLiked)
    divControlSuperior.appendChild(contentBucle)
    contentBtnAnterior.appendChild(imgBtnAnterior)
    divControlSuperior.appendChild(contentBtnAnterior)
    divPlayPause.appendChild(btnPlayPause)
    divControlSuperior.appendChild(divPlayPause)
    contentBtnSiguiente.appendChild(imgBtnSiguiente)
    divDurationSong.appendChild(progressMusic)
    divControlSuperior.appendChild(contentBtnSiguiente)
    divControlSuperior.appendChild(volumenMusic);
    divControls.appendChild(divControlSuperior)
    divControls.appendChild(divDurationSong)
    divControls.appendChild(Music)
    divOptions.appendChild(divControls)

    divContent.appendChild(divBanner)
    divContent.appendChild(divOptions)



    console.log(volumenMusic)


      let restador = 1;  
      let secondsMusic = Math.round(audio.duration);      



    volumenMusic.addEventListener("input",(e)=>{
        console.log("hola");
        let value = e.target.valueAsNumber / 100;
        audio.volume = value;
    })

    i.addEventListener("click",()=>{
         i.classList.toggle("active")
    })
     btnPlayPause.addEventListener("click",(e)=>{  
        divContent.classList.add("active");

      let restador = 1;  
      let secondsMusic = Math.round(audio.duration);
      let currentTime = Math.round(audio.currentTime);
      console.log(secondsMusic,currentTime)

      progressMusic.addEventListener("change",setVideoTime)
      audio.addEventListener("timeupdate",updateVideoTime);

      function setVideoTime (){
          audio.currentTime = Number((progressMusic.value * audio.duration) / 100);
      }
  
      function updateVideoTime (){
          progressMusic.value = Number((audio.currentTime / audio.duration) * 100)
          let minutes = Math.floor(audio.currentTime / 60);
          if(minutes < 10){
             minutes = "0" + minutes;
          }
          let sec = Math.floor((audio.currentTime % 60));

          if(sec < 10){
            sec = "0" + sec;
          }
          timeStamp.textContent = ` ${minutes}:${sec}`;
      }
      
      
       if (audio.paused) {

          e.currentTarget.classList.replace("ri-play-fill","ri-pause-fill");
          audio.play()
       }
        else{
          e.currentTarget.classList.replace("ri-pause-fill","ri-play-fill");        
          audio.pause();
       }
     })
     audio.addEventListener("ended",(e)=>{
        btnPlayPause.classList.replace("ri-pause-fill","ri-play-fill");   
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
var swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    spaceBetween: 25,
    centeredSlides: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });


const  view = window.matchMedia("(max-width: 700px)");
 function screenTest ( e){
    if(e.matches){
        var swiper = new Swiper('.swiper', {
            slidesPerView: 3,
            spaceBetween: 25,
            centeredSlides: true,
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
          });
      
    }
 }

 view.addListener(screenTest);
// document.querySelector(".mq-value").innerText = mql.matches;
 
// caches.open("archivos-estatics").then(cache=>{
//     cache.addAll("index.htm","style.css","header.js","reproductor.css")
// })