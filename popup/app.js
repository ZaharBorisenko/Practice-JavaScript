const openPopupOrder = document.querySelector('.open-popup__order');
const closePopupOrder = document.querySelector('.popup__order-close');
const popupOrder = document.querySelector('.popup__order');

openPopupOrder.addEventListener('click', e => {
    e.preventDefault(); // убираем у кнопки возможность перехода при клике
    popupOrder.classList.add('active');
})
closePopupOrder.addEventListener('click', () => {
    popupOrder.classList.remove('active');
})


const popupImg = document.querySelector('.popup__img');
const openPopupImg = document.querySelector('.open-popup__img');
const closePopupImg = document.querySelector('.popup__img-close');

openPopupImg.addEventListener('click', (e) => {
    e.preventDefault();
    popupImg.classList.add('active')
})
closePopupImg.addEventListener('click', () => {
    popupImg.classList.remove('active');
})


