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
/* harmony export */   "firstMenu": () => (/* binding */ firstMenu),
/* harmony export */   "secondMenu": () => (/* binding */ secondMenu),
/* harmony export */   "thirdMenu": () => (/* binding */ thirdMenu),
/* harmony export */   "fourthMenu": () => (/* binding */ fourthMenu),
/* harmony export */   "fifthMenu": () => (/* binding */ fifthMenu),
/* harmony export */   "contacts": () => (/* binding */ contacts)
/* harmony export */ });
function Post(title, content, type) {
    return { title, content, type }
}

function Menu(name, price, recipe) {
    return { name, price, recipe }
};

function Contact(name, position, contact) {
    return { name, position, contact }
}

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

const firstMenu =  [
    Menu('Kimchi Fried Rice and Fried Gyoza set.', 
    '10000៛', 
    'Kimchi fried rice, Fried Gyoza set, and Beverages'),
    Menu('Teriyaki Chicken with rice set.',
    '10000៛',
    'Teriyaki Chicken, Kimchi/Pickled raddish, and Beverages'),
    Menu('Pasta Set.',
    '10000៛',
    'Mou\'s special pasta, Hasbrown. and Beverages'),
]

const secondMenu = [
    Menu('Kimchi Onigiri (cheese is optional)',
    '5000៛',
    'Kimchi, Rice, Egg/Spam/Ham'),
    Menu('Teriyaki Chicken Rice',
    '6500៛',
    'Chicken, Rice, Special sauce'),
    Menu('Mou\'s special pasta (Shrimp is optional)',
    '6500៛',
    'Special recipe'),
    Menu('Quesadilla',
    '5000៛',
    'Tortilla, Vegetables, Cheese, Meats'),
]

const thirdMenu = [
    Menu('Fried Gyoza (4 pieces)',
    '5000៛',
    'Pork/Shrimp dumping'),
    Menu('Cheese bites (6 pieces)',
    '2500៛',
    'Cheese blocks'),
    Menu('Chicken nuggets (4 pieces)',
    '5000៛',
    'Chicken breast, special mixture and spices'),
    Menu('BBQ Skweres (2 sticks)',
    '3500៛',
    'Beet Bell peppers, Onion, and stuffs'),
    Menu('Hashbrown (1 piece)',
    '2500៛',
    'Potato, special mixture, and spices'),
]

const fourthMenu = [
    Menu('Fruity smoothie',
    '7500៛',
    'Banana/Strawberry/Blueberry'),
    Menu('Chia seeds drink',
    '9000៛',
    'Chia seeds'),
    Menu('Sparkling Chia Lemonade with berries',
    '4500៛',
    'Strawberry/Blueberry/Kiwi/Mixed'),
    Menu('Beverages',
    '-៛',
    'Dasani/Coke/Sprite'),
]

const fifthMenu = [
    Menu('S\'more',
    '2000៛',
    'Marshmellow, crackers, choclate'),
    Menu('Shaved ice',
    '2500៛',
    'Green/red bean, ice, syrup'),
    Menu('Candied fruits',
    '2000៛',
    'Strawberry/Apple/Banana with caramel or chocolate.'),
    Menu('Matcha cake',
    '5000៛',
    'Special recipe (limited edition)'),
]

const contacts = [
    Contact('Chheang', 'CEO', '069980981'),
    Contact('Puthyrath', 'CEO', 'Prey'),
    Contact('Malin', 'CEO', '0703xx2xx'),
    Contact('Mary', 'CEO', '0103XX2XX'),
    Contact('Monah', 'CEO', '0986XX1XX'),
    Contact('Erissa', 'CEO', '0939XX7XX'),
    Contact('Ponita', 'CEO', '0103XX2XX'),
    Contact('Thika', 'CEO', '0103XX2XX'),
]

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29uZmlnLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZnVuY3Rpb24gUG9zdCh0aXRsZSwgY29udGVudCwgdHlwZSkge1xuICAgIHJldHVybiB7IHRpdGxlLCBjb250ZW50LCB0eXBlIH1cbn1cblxuZnVuY3Rpb24gTWVudShuYW1lLCBwcmljZSwgcmVjaXBlKSB7XG4gICAgcmV0dXJuIHsgbmFtZSwgcHJpY2UsIHJlY2lwZSB9XG59O1xuXG5mdW5jdGlvbiBDb250YWN0KG5hbWUsIHBvc2l0aW9uLCBjb250YWN0KSB7XG4gICAgcmV0dXJuIHsgbmFtZSwgcG9zaXRpb24sIGNvbnRhY3QgfVxufVxuXG5jb25zdCBmcm9udFBhZ2VQb3N0ID0gW1xuICAgIFBvc3QoJ0EgU0VDT05EIExJRkUhJyxcbiAgICBcIlxcXCJEb24ndCBpbXBsb3JlIHlvdXIgbWluZCB0byBjaGFuZ2Ugd2hhdCB3YXMgdG8gYmUsIGltcGxvcmUgeW91ciBtaW5kIHRvIGNoYW5nZSBhbmQgY2hhbmdlIGZvciB3aGF0J3MgbmV4dCEgdGhpcyByZWxpdmVkIHZlcnNpb24gb2YgdGhlIHByb2plY3Qgd2lsbCBwdXQgdG8gcmVzdCBvZiBhIG1lbW9yeSB0aGF0J3MgYml0dGVyLlxcXCJcIixcbiAgICAnbWFpbicpLFxuICAgIFBvc3QoJ1dIWSBBSEhBPycsIFxuICAgIFwiV2FudCBhIHN0ZXAgYmFjayBmcm9tIHRoZSB1c3VhbCBnZW5lcmljIGZvb2QgeW91IGVhdCBhdCBhIGNvbnZlbnRpb25hbCBmb29kIGZhaXI/IDxicj5oYXZlIHlvdSB0YXN0ZWQgYSBmb29kIHRoYXQgeW91IHdvdWxkIHJlbWVtYmVyIHRvIHdhbnQgdG8gdGFzdGUgZm9yIG5leHQgc2Nob29sIGZhaXI/IDxicj5Obz8gPGJyPjxicj5Db21lIGhlcmUgdGhlbiFcIixcbiAgICAnc3ViJyksXG4gICAgUG9zdCgnV0hFTlxcJ1MgQUhIQT8nLFxuICAgIFwiV2UnbGwgYmUgaG9zdGluZyB0aGUgZmFpciBmb3IgdHdvIGRheXMgZnJvbSA4OjAwIEEuTSB0byA0OjMwIFAuTSEgQmUgc3VyZSB0byBjaGVjayB1cyBvdXQgYXQgV2VzdGVybiBJbnRlcm5hdGlvbmFsIFNjaG9vbCwgU3RhZGl1bSBDYW1wdXMgb24gdGhlIDFzdCBhbmQgMm5kIG9mIEZlYnJ1YXJ5LlwiLFxuICAgICdzdWInKSwgUG9zdCgnV0hFUkVcXCdTIEFISEEgRVhBQ1RMWT8nLCcnLCdzdWInKVxuXTtcblxuY29uc3QgZmlyc3RNZW51ID0gIFtcbiAgICBNZW51KCdLaW1jaGkgRnJpZWQgUmljZSBhbmQgRnJpZWQgR3lvemEgc2V0LicsIFxuICAgICcxMDAwMOGfmycsIFxuICAgICdLaW1jaGkgZnJpZWQgcmljZSwgRnJpZWQgR3lvemEgc2V0LCBhbmQgQmV2ZXJhZ2VzJyksXG4gICAgTWVudSgnVGVyaXlha2kgQ2hpY2tlbiB3aXRoIHJpY2Ugc2V0LicsXG4gICAgJzEwMDAw4Z+bJyxcbiAgICAnVGVyaXlha2kgQ2hpY2tlbiwgS2ltY2hpL1BpY2tsZWQgcmFkZGlzaCwgYW5kIEJldmVyYWdlcycpLFxuICAgIE1lbnUoJ1Bhc3RhIFNldC4nLFxuICAgICcxMDAwMOGfmycsXG4gICAgJ01vdVxcJ3Mgc3BlY2lhbCBwYXN0YSwgSGFzYnJvd24uIGFuZCBCZXZlcmFnZXMnKSxcbl1cblxuY29uc3Qgc2Vjb25kTWVudSA9IFtcbiAgICBNZW51KCdLaW1jaGkgT25pZ2lyaSAoY2hlZXNlIGlzIG9wdGlvbmFsKScsXG4gICAgJzUwMDDhn5snLFxuICAgICdLaW1jaGksIFJpY2UsIEVnZy9TcGFtL0hhbScpLFxuICAgIE1lbnUoJ1Rlcml5YWtpIENoaWNrZW4gUmljZScsXG4gICAgJzY1MDDhn5snLFxuICAgICdDaGlja2VuLCBSaWNlLCBTcGVjaWFsIHNhdWNlJyksXG4gICAgTWVudSgnTW91XFwncyBzcGVjaWFsIHBhc3RhIChTaHJpbXAgaXMgb3B0aW9uYWwpJyxcbiAgICAnNjUwMOGfmycsXG4gICAgJ1NwZWNpYWwgcmVjaXBlJyksXG4gICAgTWVudSgnUXVlc2FkaWxsYScsXG4gICAgJzUwMDDhn5snLFxuICAgICdUb3J0aWxsYSwgVmVnZXRhYmxlcywgQ2hlZXNlLCBNZWF0cycpLFxuXVxuXG5jb25zdCB0aGlyZE1lbnUgPSBbXG4gICAgTWVudSgnRnJpZWQgR3lvemEgKDQgcGllY2VzKScsXG4gICAgJzUwMDDhn5snLFxuICAgICdQb3JrL1NocmltcCBkdW1waW5nJyksXG4gICAgTWVudSgnQ2hlZXNlIGJpdGVzICg2IHBpZWNlcyknLFxuICAgICcyNTAw4Z+bJyxcbiAgICAnQ2hlZXNlIGJsb2NrcycpLFxuICAgIE1lbnUoJ0NoaWNrZW4gbnVnZ2V0cyAoNCBwaWVjZXMpJyxcbiAgICAnNTAwMOGfmycsXG4gICAgJ0NoaWNrZW4gYnJlYXN0LCBzcGVjaWFsIG1peHR1cmUgYW5kIHNwaWNlcycpLFxuICAgIE1lbnUoJ0JCUSBTa3dlcmVzICgyIHN0aWNrcyknLFxuICAgICczNTAw4Z+bJyxcbiAgICAnQmVldCBCZWxsIHBlcHBlcnMsIE9uaW9uLCBhbmQgc3R1ZmZzJyksXG4gICAgTWVudSgnSGFzaGJyb3duICgxIHBpZWNlKScsXG4gICAgJzI1MDDhn5snLFxuICAgICdQb3RhdG8sIHNwZWNpYWwgbWl4dHVyZSwgYW5kIHNwaWNlcycpLFxuXVxuXG5jb25zdCBmb3VydGhNZW51ID0gW1xuICAgIE1lbnUoJ0ZydWl0eSBzbW9vdGhpZScsXG4gICAgJzc1MDDhn5snLFxuICAgICdCYW5hbmEvU3RyYXdiZXJyeS9CbHVlYmVycnknKSxcbiAgICBNZW51KCdDaGlhIHNlZWRzIGRyaW5rJyxcbiAgICAnOTAwMOGfmycsXG4gICAgJ0NoaWEgc2VlZHMnKSxcbiAgICBNZW51KCdTcGFya2xpbmcgQ2hpYSBMZW1vbmFkZSB3aXRoIGJlcnJpZXMnLFxuICAgICc0NTAw4Z+bJyxcbiAgICAnU3RyYXdiZXJyeS9CbHVlYmVycnkvS2l3aS9NaXhlZCcpLFxuICAgIE1lbnUoJ0JldmVyYWdlcycsXG4gICAgJy3hn5snLFxuICAgICdEYXNhbmkvQ29rZS9TcHJpdGUnKSxcbl1cblxuY29uc3QgZmlmdGhNZW51ID0gW1xuICAgIE1lbnUoJ1NcXCdtb3JlJyxcbiAgICAnMjAwMOGfmycsXG4gICAgJ01hcnNobWVsbG93LCBjcmFja2VycywgY2hvY2xhdGUnKSxcbiAgICBNZW51KCdTaGF2ZWQgaWNlJyxcbiAgICAnMjUwMOGfmycsXG4gICAgJ0dyZWVuL3JlZCBiZWFuLCBpY2UsIHN5cnVwJyksXG4gICAgTWVudSgnQ2FuZGllZCBmcnVpdHMnLFxuICAgICcyMDAw4Z+bJyxcbiAgICAnU3RyYXdiZXJyeS9BcHBsZS9CYW5hbmEgd2l0aCBjYXJhbWVsIG9yIGNob2NvbGF0ZS4nKSxcbiAgICBNZW51KCdNYXRjaGEgY2FrZScsXG4gICAgJzUwMDDhn5snLFxuICAgICdTcGVjaWFsIHJlY2lwZSAobGltaXRlZCBlZGl0aW9uKScpLFxuXVxuXG5jb25zdCBjb250YWN0cyA9IFtcbiAgICBDb250YWN0KCdDaGhlYW5nJywgJ0NFTycsICcwNjk5ODA5ODEnKSxcbiAgICBDb250YWN0KCdQdXRoeXJhdGgnLCAnQ0VPJywgJ1ByZXknKSxcbiAgICBDb250YWN0KCdNYWxpbicsICdDRU8nLCAnMDcwM3h4Mnh4JyksXG4gICAgQ29udGFjdCgnTWFyeScsICdDRU8nLCAnMDEwM1hYMlhYJyksXG4gICAgQ29udGFjdCgnTW9uYWgnLCAnQ0VPJywgJzA5ODZYWDFYWCcpLFxuICAgIENvbnRhY3QoJ0VyaXNzYScsICdDRU8nLCAnMDkzOVhYN1hYJyksXG4gICAgQ29udGFjdCgnUG9uaXRhJywgJ0NFTycsICcwMTAzWFgyWFgnKSxcbiAgICBDb250YWN0KCdUaGlrYScsICdDRU8nLCAnMDEwM1hYMlhYJyksXG5dXG5leHBvcnQge2Zyb250UGFnZVBvc3QsIGZpcnN0TWVudSwgc2Vjb25kTWVudSwgdGhpcmRNZW51LCBmb3VydGhNZW51LCBmaWZ0aE1lbnUsIGNvbnRhY3RzfTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=