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

let qtyValue = +qty.textContent;

const cartContent = function () {
  if (qtyValue === 0) {
    cartEmpty.classList.remove('hidden');
    cartItem.classList.add('hidden');
  } else {
    cartEmpty.classList.add('hidden');
    cartItem.classList.remove('hidden');
  }
};

qtyContainer.addEventListener('click', function (e) {
  const btn = e.target.closest('.product__qty-btn');

  // guard clause
  if (!btn) return;

  if (btn === decreaseBtn) qtyValue = qtyValue === 0 ? 0 : --qtyValue;
  if (btn === increaseBtn) ++qtyValue;

  qty.textContent = qtyValue;
  priceAmount.textContent = qtyValue;
  cartBadge.textContent = qtyValue;
  priceTotal.textContent = `$${(+pricePerItem * qtyValue).toFixed(2)}`;
});

addToCart.addEventListener('click', function (e) {
  e.preventDefault();

  if (e.target.closest('.product__add') === addToCart) {
    if (qtyValue === 0) return;
    cartBox.classList.remove('hidden');
    cartBadge.classList.remove('hidden');
    cartBadge.textContent = qtyValue;
    cartContent();
  }
});

deleteCart.addEventListener('click', function (e) {
  cartEmpty.classList.remove('hidden');
  cartItem.classList.add('hidden');
  cartBadge.classList.add('hidden');
});

cart.addEventListener('click', function (e) {
  cartBox.classList.toggle('hidden');
});
