// import '../scss/style.scss';
Fancybox.bind('[data-fancybox="gallery"]', {
  // Your custom options
});

// Гамбургер!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const body = document.body;

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

//Оживление табов!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
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

//Отправка формы в консоль!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
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

//Из V-спринта модульное окно
// // получаем ширину отображенного содержимого и толщину ползунка прокрутки
const windowInnerWidth = document.documentElement.clientWidth;
const scrollbarWidth = parseInt(window.innerWidth) - parseInt(windowInnerWidth);

// // привязываем необходимые элементы
const bodyElementHTML = document.getElementsByTagName("body")[0];
const modalBackground = document.getElementsByClassName("modalBackground")[0];
const modalClose = document.getElementsByClassName("modalClose")[0];
const modalActive = document.getElementsByClassName("modalActive")[0];

// // функция для корректировки положения body при появлении ползунка прокрутки
function bodyMargin() {
    bodyElementHTML.style.marginRight = "-" + scrollbarWidth + "px";
}

// // при длинной странице - корректируем сразу
bodyMargin();

// // событие нажатия на триггер открытия модального окна
for (let i = 0; i < 7; i++) {
  const modalTrigger = document.getElementsByClassName("btn")[i];
  modalTrigger.addEventListener("click", function () {
      // делаем модальное окно видимым
      modalBackground.style.display = "block";
  
      // если размер экрана больше 1366 пикселей (т.е. на мониторе может появиться ползунок)
      if (windowInnerWidth >= 1366) {
          bodyMargin();
      }
  
      // позиционируем наше окно по середине, где 175 - половина ширины модального окна
      modalActive.style.left = "calc(50% - " + (175 - scrollbarWidth / 2) + "px)";
  });
}

for (let k = 0; k < 4; k++) {
  const modalTrigger = document.getElementsByClassName("masters__image")[k];
  modalTrigger.addEventListener("click", function () {
    // делаем модальное окно видимым
    modalBackground.style.display = "block";

    // если размер экрана больше 1366 пикселей (т.е. на мониторе может появиться ползунок)
    if (windowInnerWidth >= 1366) {
        bodyMargin();
    }

    // позиционируем наше окно по середине, где 175 - половина ширины модального окна
    modalActive.style.left = "calc(50% - " + (175 - scrollbarWidth / 2) + "px)";
});
}

// // нажатие на крестик закрытия модального окна
modalClose.addEventListener("click", function () {
    modalBackground.style.display = "none";
    if (windowInnerWidth >= 1366) {
        bodyMargin();
    }
});

// // закрытие модального окна на зону вне окна, т.е. на фон
modalBackground.addEventListener("click", function (event) {
    if (event.target === modalBackground) {
        modalBackground.style.display = "none";
        if (windowInnerWidth >= 1366) {
            bodyMargin();
        }
    }
});



