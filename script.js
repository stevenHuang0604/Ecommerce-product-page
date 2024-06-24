const qtyContainer = document.querySelector('.product__qty');
const qty = document.querySelector('.product__qty-number');
const increaseBtn = document.querySelector('.product__qty--increase');
const decreaseBtn = document.querySelector('.product__qty--decrease');

const pricePerItem = +document.querySelector('.product__price-now').textContent.slice(1);
const priceAmount = document.querySelector('.cart__item--price-amount');
const priceTotal = document.querySelector('.cart__item--price-total');

let qtyValue = +qty.textContent;

qtyContainer.addEventListener('click', function (e) {
  // guard clause
  if (!e.target.closest('.product__qty-btn')) return;

  const btn = e.target.closest('.product__qty-btn');

  if (btn === decreaseBtn) {
    if (qtyValue === 0) {
      qtyValue = 0;
    } else {
      qtyValue--;
    }
  }

  if (btn === increaseBtn) {
    qtyValue++;
  }
  qty.textContent = qtyValue;
  priceAmount.textContent = qtyValue;
  priceTotal.textContent = `$${(+pricePerItem * qtyValue).toFixed(2)}`;
});
