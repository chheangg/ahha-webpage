/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "frontPagePost": () => (/* binding */ frontPagePost),
/* harmony export */   "secondPagePost": () => (/* binding */ secondPagePost)
/* harmony export */ });
function Post(title, content, type) {
    return { title, content, type }
}

function Menu(name, recipe, price) {
    return { name, recipe, price }
};

const frontPagePost = [
    Post('A SECOND LIFE!',
    "\"Don't implore your mind to change what was to be, implore your mind to change and change for what's next! this relived version of the project will put to rest of a memory that's bitter.\"",
    'main'),
    Post('WHY AHHA?', 
    "Want a step back from the usual generic food you eat at a conventional food fair? <br>have you tasted a food that you would remember to want to taste for next school fair? <br>No? <br><br>Come here then!",
    'sub'),
    Post('WHEN\'S AHHA?',
    "We'll be hosting the fair for two days from 8:00 A.M to 4:30 P.M! Be sure to check us out at Western International School, Stadium Campus on the 1st and 2nd of February.",
    'sub'), Post('WHERE\'S AHHA EXACTLY?','','sub')
];

const secondPagePost = [
    Menu()
]


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbmZpZy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImZ1bmN0aW9uIFBvc3QodGl0bGUsIGNvbnRlbnQsIHR5cGUpIHtcbiAgICByZXR1cm4geyB0aXRsZSwgY29udGVudCwgdHlwZSB9XG59XG5cbmZ1bmN0aW9uIE1lbnUobmFtZSwgcmVjaXBlLCBwcmljZSkge1xuICAgIHJldHVybiB7IG5hbWUsIHJlY2lwZSwgcHJpY2UgfVxufTtcblxuY29uc3QgZnJvbnRQYWdlUG9zdCA9IFtcbiAgICBQb3N0KCdBIFNFQ09ORCBMSUZFIScsXG4gICAgXCJcXFwiRG9uJ3QgaW1wbG9yZSB5b3VyIG1pbmQgdG8gY2hhbmdlIHdoYXQgd2FzIHRvIGJlLCBpbXBsb3JlIHlvdXIgbWluZCB0byBjaGFuZ2UgYW5kIGNoYW5nZSBmb3Igd2hhdCdzIG5leHQhIHRoaXMgcmVsaXZlZCB2ZXJzaW9uIG9mIHRoZSBwcm9qZWN0IHdpbGwgcHV0IHRvIHJlc3Qgb2YgYSBtZW1vcnkgdGhhdCdzIGJpdHRlci5cXFwiXCIsXG4gICAgJ21haW4nKSxcbiAgICBQb3N0KCdXSFkgQUhIQT8nLCBcbiAgICBcIldhbnQgYSBzdGVwIGJhY2sgZnJvbSB0aGUgdXN1YWwgZ2VuZXJpYyBmb29kIHlvdSBlYXQgYXQgYSBjb252ZW50aW9uYWwgZm9vZCBmYWlyPyA8YnI+aGF2ZSB5b3UgdGFzdGVkIGEgZm9vZCB0aGF0IHlvdSB3b3VsZCByZW1lbWJlciB0byB3YW50IHRvIHRhc3RlIGZvciBuZXh0IHNjaG9vbCBmYWlyPyA8YnI+Tm8/IDxicj48YnI+Q29tZSBoZXJlIHRoZW4hXCIsXG4gICAgJ3N1YicpLFxuICAgIFBvc3QoJ1dIRU5cXCdTIEFISEE/JyxcbiAgICBcIldlJ2xsIGJlIGhvc3RpbmcgdGhlIGZhaXIgZm9yIHR3byBkYXlzIGZyb20gODowMCBBLk0gdG8gNDozMCBQLk0hIEJlIHN1cmUgdG8gY2hlY2sgdXMgb3V0IGF0IFdlc3Rlcm4gSW50ZXJuYXRpb25hbCBTY2hvb2wsIFN0YWRpdW0gQ2FtcHVzIG9uIHRoZSAxc3QgYW5kIDJuZCBvZiBGZWJydWFyeS5cIixcbiAgICAnc3ViJyksIFBvc3QoJ1dIRVJFXFwnUyBBSEhBIEVYQUNUTFk/JywnJywnc3ViJylcbl07XG5cbmNvbnN0IHNlY29uZFBhZ2VQb3N0ID0gW1xuICAgIE1lbnUoKVxuXVxuXG5leHBvcnQge2Zyb250UGFnZVBvc3QsIHNlY29uZFBhZ2VQb3N0fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=