var screenWidth = window.innerWidth;
var screenHeight = window.innerHeight;
console.log('Current screen width: ' + screenWidth + ' pixels');
console.log('Current screen width: ' + screenHeight + ' pixels');

let item = document.getElementById('pop-up');
let item2 = document.getElementById('pop-up2');
let item3 = document.getElementById('pop-up3');
let item4 = document.getElementById('vi');
let item5 = document.getElementById('vi1');
let item6 = document.getElementById('vi2');
let body = document.body;



function Displaypopup(){
    item.style.display = "flex";
    item.style.animation="Fade_Top 0.4s ease 1";
    
}
function Remove() {
    item.style.animation = "Fade_Down 0.4s ease 1";
    setTimeout(function() {
        item.style.display = "none";
    }, 400);
}


    function Displaypopup2(){
        item2.style.display = "flex";
        item2.style.animation="Fade_Top 0.4s ease 1";
      
        
    }
    function Remove2(){
    
        item2.style.animation = "Fade_Down 0.4s ease 1";
        setTimeout(function() {
            item2.style.display = "none";
        }, 400);}


    function Displaypopup3(){
        
        
        item3.style.display = "flex";
    item3.style.animation="Fade_Top 0.4s ease 1";
        
    }
    function Remove3(){
    
        item3.style.animation = "Fade_Down 0.4s ease 1";
    setTimeout(function() {
        item3.style.display = "none";
    }, 400);}
  
    function Video(){
        item4.style.display = "block"
       
    }

    function vi_r(){
        item4.style.display = "none"
       
    }
    function Video1(){
        item5.style.display = "block"
       
    }

    function vi_r1(){
        item5.style.display = "none"
       
    }
    function Video2(){
        item6.style.display = "block"
       
    }

    function vi_r2(){
        item6.style.display = "none"
       
    }




function theme_change(){
    console.log("theme changed")
    let white_theme = document.querySelector("body.White_theme");
    let HC_theme = document.querySelector("body.High-contrast");
    let G_theme = document.querySelector("body.Gold");
    let P_theme = document.querySelector("body.Pink");
    let Purp_theme = document.querySelector("body.Purple_theme");
    let norm_theme = document.querySelector("body.norm");
    if(white_theme != null){
        white_theme.style.setProperty('--main-accent', 'rgb(0, 102, 88)');
        white_theme.style.setProperty('--orginal-bg', 'rgb(224, 210, 210)');
        white_theme.style.setProperty('--sub-accent', 'black');
    }
    if(HC_theme != null){
        HC_theme.style.setProperty('--main-accent', 'white');
        HC_theme.style.setProperty('--orginal-bg', 'black');
       HC_theme.style.setProperty('--sub-accent', 'white');
    }
    if(G_theme != null){
        G_theme.style.setProperty('--main-accent', 'gold');
        G_theme.style.setProperty('--orginal-bg', 'rgb(29, 29, 29)');
       G_theme.style.setProperty('--sub-accent', 'gold');
    }
    if(P_theme != null){
        console.log("pink")
        P_theme.style.setProperty('--main-accent', 'rebeccapurple');
        P_theme.style.setProperty('--orginal-bg', 'pink');
       P_theme.style.setProperty('--sub-accent', 'black');
    }
    if(Purp_theme != null){
        Purp_theme.style.setProperty('--main-accent', 'aqua');
        Purp_theme.style.setProperty('--orginal-bg', 'rgb(27, 22, 31)');
       Purp_theme.style.setProperty('--sub-accent', 'white');
    }
    if(norm_theme != null){
        norm_theme.style.setProperty('--main-accent', 'rgb(0 245 211)');
        norm_theme.style.setProperty('--orginal-bg', 'rgb(28, 28, 28)');
       norm_theme.style.setProperty('--sub-accent', 'white');
    }
}

let button_white = document.getElementById("white");
let button_pink = document.getElementById("pink");
let button_gold = document.getElementById("gold");
let button_purp = document.getElementById("purp");
let button_HC = document.getElementById("high-c");
let button_Norm = document.getElementById("norm");
let theme_close = document.getElementById("theme-c");
theme_close.textContent = "<"

button_white.addEventListener("click",() => {
    body.className = '';
        body.classList.add("White_theme");
        theme_change();
})
button_pink.addEventListener("click",() => {
    body.className = '';
        body.classList.add("Pink");
        theme_change();
})
button_gold.addEventListener("click",() => {
    body.className = '';
        body.classList.add("Gold");
        theme_change();
})
button_purp.addEventListener("click",() => {
    body.className = '';
        body.classList.add("Purple_theme");
        theme_change();
})
button_HC.addEventListener("click",() => {
    body.className = '';
        body.classList.add("High-contrast");
        theme_change();
})
button_Norm.addEventListener("click",() => {
    body.className = '';
    body.classList.add("norm");
        theme_change();
})

let theme_switcher_bool = false;
theme_close.addEventListener("click",() => {
    theme_switcher_bool = !theme_switcher_bool;
    if(theme_switcher_bool){
        document.querySelector(".theme-switcher").style.animation = "theme-open 1s ease 1 forwards"
        theme_close.textContent = "X"
    }
    else{
        document.querySelector(".theme-switcher").style.animation = "theme-close 1s ease 1 forwards"
        theme_close.textContent = "<"
    }
    
})