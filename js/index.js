//dropdown//
const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");
//productos//
const totalItems = document.getElementById("totalItems");
const totalProducts = document.getElementById("totalProducts");
const cartWrapper = document.getElementById("cartWrapper");

//dropdown//
function toggleMenu() {
    menu.classList.toggle("menu_opened");
}

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);

//Animacion//
let animacion = document.querySelectorAll('.animacion');

function hacerScroll() {
    let posicionscroll = document.documentElement.scrollTop;
    for (var i = 0; i < animacion.length; i++) {
        let alturaAnimacion = animacion[i].offsetTop;
        if (alturaAnimacion - 600 < posicionscroll) {
            animacion[i].style.animation = 'mover 3s ease-in-out';
        }
    }
}

window.addEventListener('scroll', hacerScroll);

//productos//
let products = [];
console.log(products)

const setCount = () => {
    let totalCount = 0;

    for (const i in products) {
        totalCount += products[i].count;
    }

    totalItems.innerText = totalCount.toString();
    return totalCount;
};

const totalPrice = () => {
    let totalCart = 0;

    for (const i in products) {
        totalCart += products[i].price * products[i].count;
    }
    totalProducts.innerHTML = totalCart.toString();
    return totalCart;
};

const productsList = () => {
    cartWrapper.innerHTML = products.map((product) => {
        return `
      <div class="cart-item">
        <div class="cart-item-content">
          <span>${product.product}</span>
          <span>Cantidad deseada: ${product.count}</span>
          </div>
            <span> $ ${product.price}</span>
        </div>
      </div>
    `;
    });
};

const addProduct = (product, price, count) => {
    console.log(products)
    for (const i in products) {
        if (products[i].product === product) {
            products[i].count++;
            setCount();
            totalPrice();
            productsList();
            return;
        }
    }

    products.push({ product, price, count });
    setCount();
    totalPrice();
    productsList();
};