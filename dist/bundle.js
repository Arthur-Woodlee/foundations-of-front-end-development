/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/parallax.js":
/*!*********************************!*\
  !*** ./src/scripts/parallax.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setupParallax: () => (/* binding */ setupParallax)
/* harmony export */ });
// ParallaxLayer constructor using object creation
function ParallaxLayer(selector, speed) {
  const element = document.querySelector(selector);
  return {
    update(scrollY) {
      if (element) {
        const offset = scrollY * speed;
        element.style.transform = `translateY(${offset}px)`;
      }
    }
  };
}

// ParallaxManager using closure to encapsulate state
const ParallaxManager = (function () {
  const layers = [];

  return {
    register(selector, speed = 0.5) {
      const layer = ParallaxLayer(selector, speed);
      layers.push(layer);
    },
    updateAll(scrollY) {
      layers.forEach(layer => layer.update(scrollY));
    },
    init() {
      window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        this.updateAll(scrollY);
      });
    }
  };
})();

function setupParallax(selector = '.header', speed = 0.2) {
  ParallaxManager.register(selector, speed);
  ParallaxManager.init();
}

/***/ }),

/***/ "./src/styles/pages/index.scss":
/*!*************************************!*\
  !*** ./src/styles/pages/index.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
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
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!****************************!*\
  !*** ./src/entry/index.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_pages_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/pages/index.scss */ "./src/styles/pages/index.scss");
/* harmony import */ var _scripts_parallax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scripts/parallax */ "./src/scripts/parallax.js");



(0,_scripts_parallax__WEBPACK_IMPORTED_MODULE_1__.setupParallax)();
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map