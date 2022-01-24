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

function Menu(name, price, recipe) {
    return { name, price, recipe }
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
    Menu('Kimchi Fried Rice and Fried Gyoza set.', 
    '10000៛', 
    'Kimchi fried rice, Fried Gyoza set, and Beverages'),
    Menu('Teriyaki Chicken with rice set.',
    '10000៛',
    'Teriyaki Chicken, Kimchi/Pickled raddish, and Beverages'),
    Menu('Pasta Set.',
    '10000៛',
    'Mou\'s special pasta, Hasbrown. and Beverages'),
    Menu('Kimchi Onigir (cheese is optional)',
    '5000៛',
    'Kimchi, Rice, Egg/Spam/Ham'),
    Menu('Teriyaki Chicken Rice',
    '6500៛',
    'Chicken, Rice, Special sauce'),
    Menu('Mou\'s special pasta (Shrimp is optional)',
    '6500៛',
    'Special recipe',
    Menu('Quesadilla',
    '5000៛',
    'Tortilla, Vegetables, Cheese, Meats'))
]


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb25maWcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJmdW5jdGlvbiBQb3N0KHRpdGxlLCBjb250ZW50LCB0eXBlKSB7XG4gICAgcmV0dXJuIHsgdGl0bGUsIGNvbnRlbnQsIHR5cGUgfVxufVxuXG5mdW5jdGlvbiBNZW51KG5hbWUsIHByaWNlLCByZWNpcGUpIHtcbiAgICByZXR1cm4geyBuYW1lLCBwcmljZSwgcmVjaXBlIH1cbn07XG5cbmNvbnN0IGZyb250UGFnZVBvc3QgPSBbXG4gICAgUG9zdCgnQSBTRUNPTkQgTElGRSEnLFxuICAgIFwiXFxcIkRvbid0IGltcGxvcmUgeW91ciBtaW5kIHRvIGNoYW5nZSB3aGF0IHdhcyB0byBiZSwgaW1wbG9yZSB5b3VyIG1pbmQgdG8gY2hhbmdlIGFuZCBjaGFuZ2UgZm9yIHdoYXQncyBuZXh0ISB0aGlzIHJlbGl2ZWQgdmVyc2lvbiBvZiB0aGUgcHJvamVjdCB3aWxsIHB1dCB0byByZXN0IG9mIGEgbWVtb3J5IHRoYXQncyBiaXR0ZXIuXFxcIlwiLFxuICAgICdtYWluJyksXG4gICAgUG9zdCgnV0hZIEFISEE/JywgXG4gICAgXCJXYW50IGEgc3RlcCBiYWNrIGZyb20gdGhlIHVzdWFsIGdlbmVyaWMgZm9vZCB5b3UgZWF0IGF0IGEgY29udmVudGlvbmFsIGZvb2QgZmFpcj8gPGJyPmhhdmUgeW91IHRhc3RlZCBhIGZvb2QgdGhhdCB5b3Ugd291bGQgcmVtZW1iZXIgdG8gd2FudCB0byB0YXN0ZSBmb3IgbmV4dCBzY2hvb2wgZmFpcj8gPGJyPk5vPyA8YnI+PGJyPkNvbWUgaGVyZSB0aGVuIVwiLFxuICAgICdzdWInKSxcbiAgICBQb3N0KCdXSEVOXFwnUyBBSEhBPycsXG4gICAgXCJXZSdsbCBiZSBob3N0aW5nIHRoZSBmYWlyIGZvciB0d28gZGF5cyBmcm9tIDg6MDAgQS5NIHRvIDQ6MzAgUC5NISBCZSBzdXJlIHRvIGNoZWNrIHVzIG91dCBhdCBXZXN0ZXJuIEludGVybmF0aW9uYWwgU2Nob29sLCBTdGFkaXVtIENhbXB1cyBvbiB0aGUgMXN0IGFuZCAybmQgb2YgRmVicnVhcnkuXCIsXG4gICAgJ3N1YicpLCBQb3N0KCdXSEVSRVxcJ1MgQUhIQSBFWEFDVExZPycsJycsJ3N1YicpXG5dO1xuXG5jb25zdCBzZWNvbmRQYWdlUG9zdCA9IFtcbiAgICBNZW51KCdLaW1jaGkgRnJpZWQgUmljZSBhbmQgRnJpZWQgR3lvemEgc2V0LicsIFxuICAgICcxMDAwMOGfmycsIFxuICAgICdLaW1jaGkgZnJpZWQgcmljZSwgRnJpZWQgR3lvemEgc2V0LCBhbmQgQmV2ZXJhZ2VzJyksXG4gICAgTWVudSgnVGVyaXlha2kgQ2hpY2tlbiB3aXRoIHJpY2Ugc2V0LicsXG4gICAgJzEwMDAw4Z+bJyxcbiAgICAnVGVyaXlha2kgQ2hpY2tlbiwgS2ltY2hpL1BpY2tsZWQgcmFkZGlzaCwgYW5kIEJldmVyYWdlcycpLFxuICAgIE1lbnUoJ1Bhc3RhIFNldC4nLFxuICAgICcxMDAwMOGfmycsXG4gICAgJ01vdVxcJ3Mgc3BlY2lhbCBwYXN0YSwgSGFzYnJvd24uIGFuZCBCZXZlcmFnZXMnKSxcbiAgICBNZW51KCdLaW1jaGkgT25pZ2lyIChjaGVlc2UgaXMgb3B0aW9uYWwpJyxcbiAgICAnNTAwMOGfmycsXG4gICAgJ0tpbWNoaSwgUmljZSwgRWdnL1NwYW0vSGFtJyksXG4gICAgTWVudSgnVGVyaXlha2kgQ2hpY2tlbiBSaWNlJyxcbiAgICAnNjUwMOGfmycsXG4gICAgJ0NoaWNrZW4sIFJpY2UsIFNwZWNpYWwgc2F1Y2UnKSxcbiAgICBNZW51KCdNb3VcXCdzIHNwZWNpYWwgcGFzdGEgKFNocmltcCBpcyBvcHRpb25hbCknLFxuICAgICc2NTAw4Z+bJyxcbiAgICAnU3BlY2lhbCByZWNpcGUnLFxuICAgIE1lbnUoJ1F1ZXNhZGlsbGEnLFxuICAgICc1MDAw4Z+bJyxcbiAgICAnVG9ydGlsbGEsIFZlZ2V0YWJsZXMsIENoZWVzZSwgTWVhdHMnKSlcbl1cblxuZXhwb3J0IHtmcm9udFBhZ2VQb3N0LCBzZWNvbmRQYWdlUG9zdH07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9