/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isWebp": () => (/* binding */ isWebp)
/* harmony export */ });
// проверка поддержки webp, добавление класса webp или no-webp
function isWebp() {
   //проверка поддержки webp
   function testWebP(callback) {

      var webP = new Image();
      webP.onload = webP.onerror = function () {
         callback(webP.height == 2);
      };
      webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
   }

   //добавление класса
   testWebP(function (support) {
      if (support == true) {
         document.querySelector('body').classList.add('webp');
      } else {
         document.querySelector('body').classList.add('no-webp');
      }
   });
}

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.isWebp();


//-----------------БУРГЕР МЕНЮ---------------------------
let iconMenu = document.querySelector('.menu__icon');
let menuBody = document.querySelector('.menu__body');

if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    e.preventDefault();
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
  });
}

document.addEventListener('click', (event) => {
  if (!event.target.closest('.menu__body') && !event.target.closest('.menu__icon')) {
    document.body.classList.remove('_lock');
    iconMenu.classList.remove('_active');
    menuBody.classList.remove('_active');
  }
});


/*--------------------------------------------SUBMENU---------------------------------------------*/
document.addEventListener('DOMContentLoaded', function () {
  function toggleSubmenu(event, submenuId, arrowId) {
    event.preventDefault();
    const submenu = document.getElementById(submenuId);
    const arrowIcon = document.getElementById(arrowId);

    submenu.classList.toggle('active');
    arrowIcon.classList.toggle('active');
  }

  function closeSubmenuOnOutsideClick(event) {
    const menuBody = document.querySelector('.menu__body');
    const submenus = document.querySelectorAll('.submenu');
    const arrowIcon = document.getElementById('arrow1');

    if (!menuBody.contains(event.target)) {
      submenus.forEach(submenu => submenu.classList.remove('active'));
      arrowIcon.classList.remove('active');
    }
  }

  const submenuLink = document.querySelector('.menu__link-with-submenu');
  submenuLink.addEventListener('click', event => toggleSubmenu(event, 'submenu1', 'arrow1'));

  document.addEventListener('click', closeSubmenuOnOutsideClick);

  const closeIcon = document.querySelector('.submenu__close-icon');
  closeIcon.addEventListener('click', () => {
    document.getElementById('submenu1').classList.remove('active');
    document.getElementById('arrow1').classList.remove('active');
  });
});

//-----------------ПЕРЕНОС Иконок---------------------------
var headerButtons = document.querySelector('.header__links');

function moveButtons() {
  menuBody.appendChild(headerButtons);
}

function checkScreenWidth() {
  if (window.innerWidth <= 650) {
    moveButtons();
  }
}

window.onload = checkScreenWidth;
window.onresize = checkScreenWidth;


/*--------------------------------------------Слайдер Главная---------------------------------------------*/
if (typeof Swiper !== 'undefined') {
  const homeSlider = new Swiper('.home__slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    parallax: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    //Включение/отключение перетаскивания на ПК
    simulateTouch: true,
    //Курсор перетаскивания
    grabCursor: true,
    //Переключение при клике на слайд
    slideToClickedSlide: false,
    //Управление клавиатурой
    keyboard: {
      //Включить\Выключить
      enabled: false,
    },
    //Управление колесом мыши
    mousewheel: false,
    //Отключение функционала если слайдов меньше чем нужно
    watchOverflow: true,
    //Свободный режим (перетаскивание без фиксированных позиций)
    freeMode: false,
    //Скорость
    speed: 300,
    slidesPerView: 1,
    effect: 'fade',
    autoplay: {
      delay: 3000, // Задержка между переключениями в миллисекундах (в данном примере 5000 миллисекунд или 5 секунд)
      disableOnInteraction: true, // Если установлено в true, автоплей будет остановлен при взаимодействии пользователя с слайдером
    },
  });
}

/*--------------------------------------------Слайдер продукты на главной---------------------------------------------*/
if (typeof Swiper !== 'undefined') {
  const productSlider = new Swiper('.our-products-slider__slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.our-products-button-next',
      prevEl: '.our-products-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    //Включение/отключение перетаскивания на ПК
    simulateTouch: true,
    //Курсор перетаскивания
    grabCursor: true,
    //Переключение при клике на слайд
    slideToClickedSlide: false,
    //Управление клавиатурой
    keyboard: {
      //Включить\Выключить
      enabled: false,
    },
    //Управление колесом мыши
    mousewheel: false,
    //Отключение функционала если слайдов меньше чем нужно
    watchOverflow: true,
    //Свободный режим (перетаскивание без фиксированных позиций)
    freeMode: false,
    slidesPerView: 2,
    //Скорость
    speed: 300,
    effect: 'slide',
    //Отступы между слайдами в(px)
    spaceBetween: 20,
    autoplay: {
      delay: 2000, // Задержка между переключениями в миллисекундах (в данном примере 5000 миллисекунд или 5 секунд)
      disableOnInteraction: true, // Если установлено в true, автоплей будет остановлен при взаимодействии пользователя с слайдером
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
      },
      480: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 4,
      },
      1000: {
        slidesPerView: 2,
      }
    },
  });
}

/*--------------------------------------------Слайдер в карточке товара---------------------------------------------*/
if (typeof Swiper !== 'undefined') {
  const productSlider = new Swiper('.product-card__swiper', {
    // Optional parameters
    direction: 'horizontal',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    loop: true,
    //Включение/отключение перетаскивания на ПК
    simulateTouch: true,
    //Курсор перетаскивания
    grabCursor: true,
    //Переключение при клике на слайд
    slideToClickedSlide: false,
    //Управление клавиатурой
    keyboard: {
      //Включить\Выключить
      enabled: false,
    },
    //Управление колесом мыши
    mousewheel: false,
    //Отключение функционала если слайдов меньше чем нужно
    watchOverflow: true,
    //Свободный режим (перетаскивание без фиксированных позиций)
    freeMode: false,
    slidesPerView: 1,
    //Скорость
    speed: 300,
    effect: 'slide',
    //Отступы между слайдами в(px)
    spaceBetween: 20,/* 
    autoplay: {
      delay: 2000, // Задержка между переключениями в миллисекундах (в данном примере 5000 миллисекунд или 5 секунд)
      disableOnInteraction: true, // Если установлено в true, автоплей будет остановлен при взаимодействии пользователя с слайдером
    }, */
  });
}

})();

/******/ })()
;