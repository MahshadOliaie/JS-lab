
let root = document.querySelector(".root");




function products() {
    fetch('https://fakestoreapi.com/products')
        .then(Response => Response.json())
        .then(data => render(data));
}




function render(data) {
    let template = data.map(product => {
        const { title, image, price, category, rating } = product;

        return `<div class="card">
        <div class="image">
            <img src="${image}" alt="">
        </div>
    
        <div class="about">
            <h3 class="title">${title}</h3>
            <p class="category">category: ${category}</p>
            <p class="rating">rate: ${rating.rate}</p>
            <p class="price">price: ${price}</p>
        </div>
    </div>`
    }).join("");

    root.innerHTML = template;
}



products();