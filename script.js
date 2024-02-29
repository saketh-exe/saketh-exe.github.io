var screenWidth = window.innerWidth;
console.log('Current screen width: ' + screenWidth + ' pixels');

let item = document.getElementById('pop-up');
let item2 = document.getElementById('pop-up2');
let item3 = document.getElementById('pop-up3');


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
  
        