let root = document.querySelector(".container");



const request = new XMLHttpRequest();

request.open("get", "https://jsonplaceholder.ir/users");


function getData() {
    let data = JSON.parse(request.responseText);
    render(data);
}

function more(id){
    document.getElementById(`${id}`).classList.toggle("flip")
    document.getElementById(`card${id}`).classList.toggle("show");
}


function render(data) {
    let template = data.map(user => {
        const { avatar, username, id, name, email, phone, website, company } = user;
        const {country , city, street, alley, number} = user.address;
        return `<div class="card" onclick="more(${id})" id="${id}">
        <div class="avatar"><img src=${avatar} alt="userAvatar"></div>
        <div class="text">
            <h2 class="username">${username}</h2>
            <p class="userId">ID: <span>${id}</span></p>
        </div>
        <div class="moreAbout" id="card${id}">
            <h2 class="name">${name}</h2>
            <p class="address">آدرس: <span>${country}، ${city}، ${street}، ${alley}، پلاک ${number}</span></p>
            <p class="email">ایمیل: <span>${email}</span></p>
            <p class="phone">موبایل: <span>${phone}</span></p>
            <p class="website">وبسایت: <span>${website}</span></p>
            <p class="company">شرکت: <span>${company}</span></p>
        </div>
    </div>`
    }).join("");


    root.innerHTML = template;

}



request.addEventListener("load", getData);
request.send();