


const face = document.getElementById("face");
const pupils = document.querySelectorAll(".pupil");




function move(event) {
    let x = (event.clientX / 15);
    let y = (event.clientY / 7);
    let fX = (event.clientX / 20);
    let fY = (event.clientY / 20);

    face.style.transform = `translate(${fX}px,${fY}px)`;
    debugger;

    document.body.style.backgroundColor = `rgba(${y},${x},${fY},50%)`;


    for (const pupil of pupils) {
        pupil.style.transform = `translate(${x}px,${y}px)`;
    }

}





window.addEventListener("mousemove", move); 