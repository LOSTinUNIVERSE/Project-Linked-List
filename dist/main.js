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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("\nconst Node = (value) => ({ value })\n\n\nfunction append(value,) {\n    let newNode = Node(value)\n    if (!this.head) {\n        this.head = newNode\n        newNode.next = null\n        const lastChild = newNode\n        this.lastChild = lastChild\n    }\n\n    else {\n        newNode = this.lastChild\n    }\n}\nconst LinkedList = () => ({ head: null, append })\n\nconst test2 = LinkedList()\ntest2.append('g')\ntest2.append('b')\n// test2.append('bbb')\n\nconsole.log(test2);\n\n\n//# sourceURL=webpack://template/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;