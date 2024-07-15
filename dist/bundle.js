/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ (() => {

eval("(function() {\r\n    // https://dashboard.emailjs.com/admin/account\r\n    emailjs.init(`${\"mI62WskSC-u4po9oO\"}`);\r\n})();\r\n\r\nwindow.onload = function() {\r\n    document.getElementById('contact-form').addEventListener('submit', function(event) {\r\n        event.preventDefault();\r\n        \r\n        emailjs.sendForm(`${\"service_ss1po4w\"}`, `${\"template_g32gu89\"}`, this)\r\n            .then(function() {\r\n                console.log('SUCCESS!');\r\n                alert('Mensaje enviado con éxito!');\r\n            }, function(error) {\r\n                console.log('FAILED...', error);\r\n                alert('Error al enviar el mensaje. Por favor, intenta de nuevo.');\r\n            });\r\n    });\r\n}\n\n//# sourceURL=webpack://rndevelo.github.io/./index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./index.js"]();
/******/ 	
/******/ })()
;