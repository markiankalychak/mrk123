const ProductsURL = "https://my-json-server.typicode.com/markiankalychak/mrk123/products";
const ProductsContainer = document.querySelector(".products");

fetch(ProductsURL)
    .then( response => response.json() )
    .then( data => {
   
        for (const productData of data) {
            addCard(productData);
        }
    });

function addCard(productData) {

    const{
        name,
        description,
        photo_url,
        price
    } = productData;

    console.log(name, description, photo_url, price);

    const template = `
        <div class="product">
            <h3 class="product__name">${name}</h3>
            <img src="${photo_url}" alt="Product's Photo" class="product__img">
            <p class="product__description" >${description}</p>
            <span class="product__price">
                ${price}
            </span>
            <a href="/seller/index.html?id=0">Seller Page</a>
            <button class="product__button">Buy</button>
        </div>
    `;

    ProductsContainer.insertAdjacentHTML('beforeEnd', template )
}