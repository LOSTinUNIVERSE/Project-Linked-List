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

eval("/* eslint-disable no-restricted-syntax */\n\nconst Node = (value) => ({ value })\n\n\nfunction append(value,) {\n    const newNode = Node(value)\n    if (!this.head) {\n        this.head = newNode\n        this.tail = newNode\n        this.tail.next = null\n        this.number++\n    }\n    else {\n        this.tail.next = newNode\n        this.tail = newNode\n        newNode.next = null\n        this.number++\n    }\n    // console.log(this);\n}\nfunction prepend(value) {\n    const newNode = Node(value)\n    newNode.next = this.head\n    this.head = newNode\n    this.number++\n    // console.log(this);\n}\nfunction count() { console.log(this.number) }\nfunction showHead() { console.log(this.head) }\nfunction showTail() { console.log(this.tail) }\n\nlet result = null\n\nconst findByIndex = function (value, number = 1, caller = this.head) {\n    if (value > this.number) { value = this.number; }\n    if (number <= value) {\n        number++\n        result = caller\n        findByIndex(value, number, caller.next)\n    }\n}\n\nfunction pop(value, number = 0, caller = this.head, parent = this) {\n    if (number < value - 1) {\n        number++\n        if (number == value - 1) {\n            caller.next = null\n            parent.tail = caller\n            parent.number -= 1\n        }\n        pop(value, number, caller.next, parent)\n    }\n}\n\nconst LinkedList = () => ({\n    head: null, number: 0, append,\n    prepend, count, showHead,\n    showTail, findByIndex, pop\n})\n\nconst test2 = LinkedList()\ntest2.append('a')\ntest2.append('b')\ntest2.append('c')\ntest2.prepend('k')\n// test2.count()\n// test2.showHead()\n// test2.showTail()\n// test2.findByIndex(3)\n// console.log(result);\ntest2.pop(test2.number)\ntest2.pop(test2.number)\nconsole.log(test2);\n\n\n\n//# sourceURL=webpack://template/./src/index.js?");

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