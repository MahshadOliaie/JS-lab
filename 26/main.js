


let header = document.querySelector(".header");



let positionY = 0;
function stickyHeader(){
    let scroll = window.scrollY;
    console.log(scroll)

    if(scroll<positionY){
        header.style.position = "sticky";
        header.style.top = "0";

        
        
    }else{
        header.style.position = "relative";
       
    }

    positionY=scroll;
}





window.addEventListener("scroll",stickyHeader);