const qtyContainer = document.querySelector('.product__qty');
const qty = document.querySelector('.product__qty-number');
const increaseBtn = document.querySelector('.product__qty--increase');
const decreaseBtn = document.querySelector('.product__qty--decrease');

const pricePerItem = +document.querySelector('.product__price-now').textContent.slice(1);
const priceAmount = document.querySelector('.cart__item--price-amount');
const priceTotal = document.querySelector('.cart__item--price-total');

const addToCart = document.querySelector('.product__add');
const cart = document.querySelector('.header__profile--cart');
const cartBadge = document.querySelector('.header__profile--cart-badge');
const cartBox = document.querySelector('.cart');
const cartEmpty = document.querySelector('.cart__content--empty');
const cartItem = document.querySelector('.cart__item');
const deleteCart = document.querySelector('.cart__item--delete');

const thumbnails = document.querySelector('.product__thumbnails');
const thumbnail = document.querySelectorAll('.product__thumbnail');

const productImg = document.querySelector('.product__img');

let qtyValue = 0;
let productId = 1;

qtyContainer.addEventListener('click', (e) => {
  const btn = e.target.closest('.product__qty-btn');

  // guard clause
  if (!btn) return;

  // update quantity value wheather it is increase or decrease
  if (btn === decreaseBtn) qtyValue = qtyValue === 0 ? 0 : --qtyValue;
  else if (btn === increaseBtn) qtyValue = ++qtyValue;

  qty.textContent = qtyValue;
});

addToCart.addEventListener('click', (e) => {
  // open cart component
  cartBox.classList.remove('hidden');

  if (qtyValue > 0) {
    // show cart item component
    cartEmpty.classList.add('hidden');
    cartItem.classList.remove('hidden');

    // show cart badge
    cartBadge.classList.remove('hidden');

    // update item quantity and total price
    priceAmount.textContent = qtyValue;
    priceTotal.textContent = `$${(+pricePerItem * qtyValue).toFixed(2)}`;
    cartBadge.textContent = qtyValue;
  }
});

deleteCart.addEventListener('click', (e) => {
  // hidden cart item component
  cartEmpty.classList.remove('hidden');
  cartItem.classList.add('hidden');

  // hide cart badge
  cartBadge.classList.add('hidden');
});

cart.addEventListener('click', (e) => {
  // toggle cart component
  cartBox.classList.toggle('hidden');
});

thumbnails.addEventListener('click', (e) => {
  // set current focused thumbnail and id
  const currentThumbnail = e.target.closest('.product__thumbnail');
  productId = currentThumbnail.id;

  // set unfocused thumbnail to normal style
  thumbnail.forEach((t) => {
    if (t !== currentThumbnail) {
      t.style.removeProperty('opacity');
      t.style.removeProperty('outline');
    }
  });

  currentThumbnail.style.setProperty('opacity', 'var(--opacity-lightbox-bg)');
  currentThumbnail.style.setProperty('outline', '3px solid var(--color-orange)');

  // set product image correspond to current focused thumbnail
  productImg.src = `./images/image-product-${productId}.jpg`;
});

const init = () => {
  // set item quantity = 0
  qty.textContent = qtyValue;

  // hide cart component & set cart list to empty
  cartBox.classList.add('hidden');
  cartEmpty.classList.remove('hidden');
  cartItem.classList.add('hidden');

  // hide cart badge & set to 0
  cartBadge.classList.add('hidden');
  cartBadge.textContent = qtyValue;
};

init();
