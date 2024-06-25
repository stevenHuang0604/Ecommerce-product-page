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

const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const modalImg = document.querySelector('.modal__img');
const modalCloseBtn = document.querySelector('.modal__close-btn');
const modalPrevBtn = document.querySelector('.modal__page-btn--prev');
const modalNextBtn = document.querySelector('.modal__page-btn--next');
const modalThumbnails = document.querySelector('.modal__thumbnails');
const modalThumbnail = document.querySelectorAll('.modal__thumbnail');

const menuOpenBtn = document.querySelector('.header__menu');
const menuCloseBtn = document.querySelector('.sidebar__close-btn');
const sidebar = document.querySelector('.sidebar');

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
  let currentModalThumbnail;
  productId = currentThumbnail.id;

  // set unfocused thumbnail to normal style
  thumbnail.forEach((t) => {
    if (t !== currentThumbnail) {
      t.style.removeProperty('opacity');
      t.style.removeProperty('outline');
    }
  });

  modalThumbnail.forEach((mt) => {
    if (mt.id !== productId) {
      mt.style.removeProperty('opacity');
      mt.style.removeProperty('outline');
    } else {
      currentModalThumbnail = mt;
    }
  });

  currentThumbnail.style.setProperty('opacity', 'var(--opacity-lightbox-bg)');
  currentThumbnail.style.setProperty('outline', '3px solid var(--color-orange)');

  currentModalThumbnail.style.setProperty('opacity', 'var(--opacity-lightbox-bg)');
  currentModalThumbnail.style.setProperty('outline', '3px solid var(--color-orange)');

  // set product image correspond to current focused thumbnail
  productImg.src = `./images/image-product-${productId}.jpg`;
  modalImg.src = `./images/image-product-${productId}.jpg`;
});

modalThumbnails.addEventListener('click', (e) => {
  // set current focused thumbnail and id
  const currentModalThumbnail = e.target.closest('.modal__thumbnail');
  let currentThumbnail;
  productId = currentModalThumbnail.id;

  // set unfocused thumbnail to normal style
  modalThumbnail.forEach((mt) => {
    if (mt !== currentModalThumbnail) {
      mt.style.removeProperty('opacity');
      mt.style.removeProperty('outline');
    }
  });

  thumbnail.forEach((t) => {
    if (t.id !== productId) {
      t.style.removeProperty('opacity');
      t.style.removeProperty('outline');
    } else {
      currentThumbnail = t;
    }
  });

  currentThumbnail.style.setProperty('opacity', 'var(--opacity-lightbox-bg)');
  currentThumbnail.style.setProperty('outline', '3px solid var(--color-orange)');

  currentModalThumbnail.style.setProperty('opacity', 'var(--opacity-lightbox-bg)');
  currentModalThumbnail.style.setProperty('outline', '3px solid var(--color-orange)');

  // set product image correspond to current focused thumbnail
  productImg.src = `./images/image-product-${productId}.jpg`;
  modalImg.src = `./images/image-product-${productId}.jpg`;
});

modalPrevBtn.addEventListener('click', (e) => {
  if (+productId === 1) return;
  --productId;

  thumbnail.forEach((t) => {
    if (+t.id !== productId) {
      t.style.removeProperty('opacity');
      t.style.removeProperty('outline');
    } else if (+t.id === productId) {
      t.style.setProperty('opacity', 'var(--opacity-lightbox-bg)');
      t.style.setProperty('outline', '3px solid var(--color-orange)');
    }
  });

  modalThumbnail.forEach((mt) => {
    console.log(mt.id, productId);
    if (+mt.id !== productId) {
      mt.style.removeProperty('opacity');
      mt.style.removeProperty('outline');
    } else if (+mt.id === productId) {
      mt.style.setProperty('opacity', 'var(--opacity-lightbox-bg)');
      mt.style.setProperty('outline', '3px solid var(--color-orange)');
    }
  });

  // set product image correspond to current focused thumbnail
  productImg.src = `./images/image-product-${productId}.jpg`;
  modalImg.src = `./images/image-product-${productId}.jpg`;
});

modalNextBtn.addEventListener('click', (e) => {
  if (+productId === 4) return;
  ++productId;

  thumbnail.forEach((t) => {
    if (+t.id !== productId) {
      t.style.removeProperty('opacity');
      t.style.removeProperty('outline');
    } else if (+t.id === productId) {
      t.style.setProperty('opacity', 'var(--opacity-lightbox-bg)');
      t.style.setProperty('outline', '3px solid var(--color-orange)');
    }
  });

  modalThumbnail.forEach((mt) => {
    console.log(mt.id, productId);
    if (+mt.id !== productId) {
      mt.style.removeProperty('opacity');
      mt.style.removeProperty('outline');
    } else if (+mt.id === productId) {
      mt.style.setProperty('opacity', 'var(--opacity-lightbox-bg)');
      mt.style.setProperty('outline', '3px solid var(--color-orange)');
    }
  });

  // set product image correspond to current focused thumbnail
  productImg.src = `./images/image-product-${productId}.jpg`;
  modalImg.src = `./images/image-product-${productId}.jpg`;
});

// open overlay and modal while clicking product image
productImg.addEventListener('click', (e) => {
  overlay.classList.remove('hidden');
  modal.classList.remove('hidden');
});

const closeModal = () => {
  overlay.classList.add('hidden');
  modal.classList.add('hidden');
};

// close overlay by clicking close button in modal
modalCloseBtn.addEventListener('click', closeModal);

// close overlay and modal whiling clicking overlay
overlay.addEventListener('click', closeModal);

//  close overlay and modal whiling press escape key overlay
window.addEventListener('keydown', (e) => {
  if (overlay.classList.contains('hidden')) return;

  if (e.key === 'Escape') {
    overlay.classList.add('hidden');
    modal.classList.add('hidden');
  }
});

menuOpenBtn.addEventListener('click', (e) => {
  sidebar.classList.remove('hidden');
  overlay.classList.remove('hidden');
});

menuCloseBtn.addEventListener('click', (e) => {
  sidebar.classList.add('hidden');
  overlay.classList.add('hidden');
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
