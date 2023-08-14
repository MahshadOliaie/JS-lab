


let header = document.querySelector(".header");



let positionY = 0;
function stickyHeader() {
    let scroll = window.scrollY;

    if (scroll < positionY) {
        header.classList.add("scroll")



    } else {
        header.classList.remove("scroll")

    }

    positionY = scroll;
}





window.addEventListener("scroll", stickyHeader);