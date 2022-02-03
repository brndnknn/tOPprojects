/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ contactPage)\n/* harmony export */ });\n\nfunction contactPage() {\n    const contactPageContent = document.createElement('div');\n    contactPageContent.id = 'pageContent';\n    let location = document.createElement('div');\n    location.innerText = 'Take-out or Delivery in New New York';\n    let phone = document.createElement('div');\n    phone.innerText = 'Call 327-679-6784';\n    contactPageContent.appendChild(location);\n    contactPageContent.appendChild(phone);\n    return contactPageContent;\n}\n\n//# sourceURL=webpack://restaurantproject-webpackpractice/./src/contact.js?");

/***/ }),

/***/ "./src/homePage.js":
/*!*************************!*\
  !*** ./src/homePage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ homePage)\n/* harmony export */ });\n/* harmony import */ var _pizzaLogo_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pizzaLogo.jpg */ \"./src/pizzaLogo.jpg\");\n\n\nfunction homePage() {\n    const homePageContent = document.createElement('div');\n    homePageContent.id = 'pageContent';\n    // const header = document.createElement('h2');\n    // header.innerText = 'Panucci\\'s Pizza';\n    // homePageContent.appendChild(header);\n    const myIcon = new Image();\n    myIcon.src = _pizzaLogo_jpg__WEBPACK_IMPORTED_MODULE_0__;\n    homePageContent.appendChild(document.createElement('br'));\n    homePageContent.appendChild(myIcon);\n\n    return homePageContent;\n}\n\n\n\n//# sourceURL=webpack://restaurantproject-webpackpractice/./src/homePage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _homePage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homePage.js */ \"./src/homePage.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\n// import pizzaLogo from './pizzaLogo.jpg';\n\n\n\n\n// create navBar \nfunction navBar(){\n    const navBar = document.createElement('div');\n    navBar.className = 'navBar';\n    const navElements = ['Home', 'Menu', 'Contact'];\n\n    navElements.forEach(element => {\n        let tab = document.createElement('div');\n        tab.innerText = element;\n        tab.id = element;\n        tab.className = 'navElement';\n        navBar.appendChild(tab);\n    });\n    return navBar;\n}\n\n// create header\nfunction header(){\n    const header = document.createElement('h1');\n    header.innerText = 'Panucci\\'s Pizza';\n    //header.className = 'heading';\n    header.id = 'header';\n    return header;\n}\n\n// page initialization\nconst content = document.getElementById('content');\nconst heading = document.createElement('div');\ncontent.before(heading);\nheading.className = 'heading';\nheading.appendChild(header());\nheading.appendChild(navBar());\ncontent.appendChild((0,_homePage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n\n// function to switch between pages\n\nfunction pageFlipper(tab) {\n    let currContent = document.getElementById('pageContent');\n    currContent.remove();\n\n    switch (tab.id) {\n        case 'Home':\n            content.appendChild((0,_homePage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n            break;\n        \n        case 'Menu':\n            content.appendChild((0,_menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n            break;\n    \n        case 'Contact':\n            content.appendChild((0,_contact_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n            break\n\n        default:\n            break;\n    }\n\n\n\n}\n\n\n\n\n// event listener for pageFlipper function\nconst navTabs = document.querySelectorAll('.navElement');\nnavTabs.forEach(element =>{ element.addEventListener('click', e=> pageFlipper(e.target) ) })\n\n//# sourceURL=webpack://restaurantproject-webpackpractice/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menuPage)\n/* harmony export */ });\n\n\n\nconst menuItems = ['Planet: $9.99', 'Star: $12.99', 'Galaxy: 15.99'];\n\nfunction menuPage() {\n    const menuPageContent = document.createElement('div');\n    menuPageContent.id = 'pageContent';\n    // const header = document.createElement('h2');\n    // header.innerText = 'Panucci\\'s Pizza Menu';\n    // menuPageContent.appendChild(header);\n    const menuItemsList = document.createElement('ul');\n    //const menuItems = ['Planet: $9.99', 'Star: $12.99', 'Galaxy: 15.99'];\n    menuItems.forEach(element => {\n        let item = document.createElement('li');\n        item.innerText = element;\n        menuItemsList.appendChild(item);\n    });\n    menuPageContent.appendChild(menuItemsList);\n    \n    return menuPageContent;\n}\n\n//# sourceURL=webpack://restaurantproject-webpackpractice/./src/menu.js?");

/***/ }),

/***/ "./src/pizzaLogo.jpg":
/*!***************************!*\
  !*** ./src/pizzaLogo.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e39ea648c3e69d1e2f74.jpg\";\n\n//# sourceURL=webpack://restaurantproject-webpackpractice/./src/pizzaLogo.jpg?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;