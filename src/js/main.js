// import Girl from '../images/girl.png';
// import Vector1 from '../images/Vector1.png';
// import Vector2 from '../images/Vector2.png';
// import Vector3 from '../images/Vector3.png';
// import Creame from '../images/creame.png';
// import Creame1 from '../images/Group 25.png';

// import '../scss/style.scss';
console.log("fgfgf")
Fancybox.bind('[data-fancybox="gallery"]', {
  // Your custom options
});

const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const body = document.body;

// // Клонируем меню, чтобы задать свои стили для мобильной версии
// const menu = document.querySelector("#popup").cloneNode(1);

// При клике на иконку hamb вызываем ф-ию hambHandler
hamb.addEventListener("click", hambHandler);

// Выполняем действия при клике ..
function hambHandler(e) {
  e.preventDefault();
  // Переключаем стили элементов при клике
  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
  // renderPopup();
}

// // Здесь мы рендерим элементы в наш попап
// function renderPopup() {
//   popup.appendChild(menu);
// }

// // Код для закрытия меню при нажатии на ссылку
// const links = Array.from(menu.children);

// // Для каждого элемента меню при клике вызываем ф-ию
// links.forEach((link) => {
//   link.addEventListener("click", closeOnClick);
// });

// // Закрытие попапа при клике на меню
// function closeOnClick() {
//   popup.classList.remove("open");
//   hamb.classList.remove("active");
//   body.classList.remove("noscroll");
// }


const pricesInner = document.querySelector('.prices__inner');
const tabs = document.querySelectorAll('.prices__type');
const tabsContent = document.querySelectorAll('.prices__checklist');

tabsContent[0].classList.add('prices--active')
pricesInner.addEventListener('click', function(event) {


//Предварительная очистка всех табов от класса prices__selected
  Array.from(tabs).forEach( item => {
    item.classList.remove('prices__selected')
  });
//И очистка связанного с табами содержимого от класса prices__active
  Array.from(tabsContent).forEach( item => {
    item.classList.remove('prices--active')
  })

//Добавление выбранному табу класса prices__selected
  event.target.classList.add('prices__selected');
  
//И добавление класса prices--active. Отображение контента согласно индексу
  let index = [...tabs].indexOf(event.target);
  if (index === -1) {
    index = 0;
  }
  tabsContent[index].classList.add('prices--active')
 
})

const contactsForm = document.getElementById('menu__form');

contactsForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const {name, phone} = event.target.elements
  console.log({
    name: name.value,
    phone: phone.value
  })
  this.reset();
})


// устанавливаем триггер для модального окна (название можно изменить)
const modalTrigger = document.getElementsByClassName("btn")
console.log(modalTrigger)

// // получаем ширину отображенного содержимого и толщину ползунка прокрутки
// const windowInnerWidth = document.documentElement.clientWidth;
// const scrollbarWidth = parseInt(window.innerWidth) - parseInt(windowInnerWidth);

// // привязываем необходимые элементы
// const bodyElementHTML = document.getElementsByTagName("body")[0];
// const modalBackground = document.getElementsByClassName("modalBackground")[0];
// const modalClose = document.getElementsByClassName("modalClose")[0];
// const modalActive = document.getElementsByClassName("modalActive")[0];

// // функция для корректировки положения body при появлении ползунка прокрутки
// function bodyMargin() {
//     bodyElementHTML.style.marginRight = "-" + scrollbarWidth + "px";
// }

// // при длинной странице - корректируем сразу
// bodyMargin();

// // событие нажатия на триггер открытия модального окна
// modalTrigger.addEventListener("click", function () {
//     // делаем модальное окно видимым
//     modalBackground.style.display = "block";

//     // если размер экрана больше 1366 пикселей (т.е. на мониторе может появиться ползунок)
//     if (windowInnerWidth >= 1366) {
//         bodyMargin();
//     }

//     // позиционируем наше окно по середине, где 175 - половина ширины модального окна
//     modalActive.style.left = "calc(50% - " + (175 - scrollbarWidth / 2) + "px)";
// });

// // нажатие на крестик закрытия модального окна
// modalClose.addEventListener("click", function () {
//     modalBackground.style.display = "none";
//     if (windowInnerWidth >= 1366) {
//         bodyMargin();
//     }
// });

// // закрытие модального окна на зону вне окна, т.е. на фон
// modalBackground.addEventListener("click", function (event) {
//     if (event.target === modalBackground) {
//         modalBackground.style.display = "none";
//         if (windowInnerWidth >= 1366) {
//             bodyMargin();
//         }
//     }
// });



