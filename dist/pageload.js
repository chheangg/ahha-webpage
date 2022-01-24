/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/pageload.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mainLoad": () => (/* binding */ mainLoad)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./src/config.js");
// This function will check for the tab that is being passed and load the content
// accordingly to the current tab the user is in.



function mainLoad(tab, contents) {
    const contentHolder = document.getElementById('content');
    contentHolder.textContent = '';

    let currentTab;

    if (currentTab === tab) {
        return true;
    }

    currentTab = tab;

    if (tab === 'Home') {
        let contentWrapper = document.createElement('div');
        contentWrapper.classList.add('main-content');

        contentHolder.appendChild(contentWrapper);
        contentLoader.loadPost(contents);
        contentLoader.loadMap();
    }

    if (tab === 'Order') {
        let tableContainer = document.createElement('div');
        tableContainer.classList.add('second-content');
        contentHolder.appendChild(tableContainer);

        contentLoader.loadTableContent(contents);
    }

    if (tab === 'Contact') {
        let title = document.createElement('p');
        let contactContainerWrapper = document.createElement('div');
        let contactContainer = document.createElement('div');

        title.classList.add('contact-title');
        contactContainer.classList.add('contact-wrapper');
        contactContainerWrapper.classList.add('contact-container-wrapper');

        title.textContent = 'Meet our teams...'

        contactContainerWrapper.appendChild(title);
        contactContainerWrapper.appendChild(contactContainer);
        contentHolder.appendChild(contactContainerWrapper);

        contentLoader.loadContact(contents);
    }
    
}


// This content loader module will give the function the ability to load the type of post
// according to the tab presented above.

const contentLoader = (function() {
    // For front page post blog-ish type.
    function unloadContent(content) {
        content.textContent = '';
    }
    function loadPost(contents) {
        contents.forEach((content) => {
            const contentWrapper = document.querySelector('.main-content');
            if ( content['type'] === 'main' ) {
                let h1 = document.createElement('h1');
                let p = document.createElement('p');

                h1.classList.add('title');
                p.classList.add('main-text');

                h1.textContent = content['title'];
                p.textContent = content['content'];

                contentWrapper.appendChild(h1)
                contentWrapper.appendChild(p)
            } else if ( content['type'] === 'sub') {
                let span = document.createElement('span');
                let h2 = document.createElement('h2');

                span.textContent = content['title'];

                h2.appendChild(span);
                contentWrapper.appendChild(h2)
                if (content['content']) {
                    let p = document.createElement('p');
                    p.innerHTML = content['content'];
                    contentWrapper.appendChild(p)
                }
            }
        })
    }

    // Load iframe map
    function loadMap() {
        const contentWrapper = document.querySelector('.main-content');
        let mapWrapper = document.createElement('div');
        let iframeMap = document.createElement('iframe');

        mapWrapper.classList.add('map-wrapper');
        iframeMap.setAttribute('src', "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7817.11711592949!2d104.88549924033948!3d11.583470858516003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109519e61e7251b%3A0x308b0c2e593ce8b8!2sWestern%20International%20School%20-%20Stadium%20Campus!5e0!3m2!1sen!2skh!4v1642911058871!5m2!1sen!2skh");
        iframeMap.setAttribute('width', '600');
        iframeMap.setAttribute('height', '450');
        iframeMap.setAttribute('style', 'border:0');
        iframeMap.setAttribute('allowfullscreen', "");
        iframeMap.setAttribute('loading', 'lazy');

        mapWrapper.appendChild(iframeMap);
        contentWrapper.appendChild(mapWrapper);
    }

    // Load table content
    function loadTableContent(category) {
        category.forEach((contents) => {
            let tableWrapper = document.createElement('table');
            let tableTitle = document.createElement('caption');
            let tableHeader = document.createElement('thead');
            let tableBody = document.createElement('tbody');
            let rowHeader = document.createElement('tr');
            let headerData;

            tableWrapper.classList.add('menu');
            
            tableWrapper.appendChild(tableTitle)

            if ( category[0] === contents ) {
                tableTitle.textContent = 'Valueable Sets!';
                headerData = ['Sets', 'Price'];
            } else if ( category[1] === contents ) {
                tableTitle.textContent = 'Meals of the day!';
                headerData = [ 'Meals', 'Price']
            } else if ( category[2] === contents ) {
                tableTitle.textContent = 'Satiate your appetite';
                headerData = [ 'Appetizers', 'Price']
            } else if ( category[3] === contents) {
                tableTitle.textContent = 'Lactated by Puthyrath :D';
                headerData = [ 'Drinks', 'Price']
            } else if ( category[4] === contents) {
                tableTitle.textContent = 'Always room for it...';
                headerData = [ 'Desserts', 'Price']
            }

            headerData.forEach((value) => {
                let headerContent = document.createElement('th');
                headerContent.textContent = value;

                rowHeader.appendChild(headerContent);
            })

            rowHeader.classList.add('menu-header');

            tableHeader.appendChild(rowHeader);
            tableWrapper.appendChild(tableHeader);

            contents.forEach((content) => {
                let firstRow = document.createElement('tr');
                let secondRow = document.createElement('tr');

                for ( let value in content ) {
                    let data = document.createElement('td');
                    if ( value === 'name' || value === 'price' ) {
                        data.textContent = content[value];
                        firstRow.appendChild(data);
                    } else if ( value === 'recipe' ) {
                        data.textContent = content[value];
                        secondRow.appendChild(data);
                    }
                }
                
                tableBody.appendChild(firstRow);
                tableBody.appendChild(secondRow);
            })

            tableWrapper.appendChild(tableBody);
            document.querySelector('.second-content').appendChild(tableWrapper);
        })
    }

    function loadContact(contents) {
        contents.forEach((content) => {
            let contactWrapper = document.querySelector('.contact-wrapper')
            let contactBox = document.createElement('span');
            let name = document.createElement('p');
            let position = document.createElement('p');
            let number = document.createElement('p');

            contactBox.classList.add('contact-box');
            name.classList.add('name');
            position.classList.add('position');
            number.classList.add('number');

            name.textContent = content['name'];
            position.textContent = content['position'];
            number.textContent = content['contact'];

            contactBox.appendChild(name);
            contactBox.appendChild(position);
            contactBox.appendChild(number);
            contactWrapper.appendChild(contactBox);
        })
    }

    return {loadPost, unloadContent, loadTableContent, loadContact, loadMap};
})();



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Olsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2Vsb2FkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIFBvc3QodGl0bGUsIGNvbnRlbnQsIHR5cGUpIHtcbiAgICByZXR1cm4geyB0aXRsZSwgY29udGVudCwgdHlwZSB9XG59XG5cbmZ1bmN0aW9uIE1lbnUobmFtZSwgcHJpY2UsIHJlY2lwZSkge1xuICAgIHJldHVybiB7IG5hbWUsIHByaWNlLCByZWNpcGUgfVxufTtcblxuZnVuY3Rpb24gQ29udGFjdChuYW1lLCBwb3NpdGlvbiwgY29udGFjdCkge1xuICAgIHJldHVybiB7IG5hbWUsIHBvc2l0aW9uLCBjb250YWN0IH1cbn1cblxuY29uc3QgZnJvbnRQYWdlUG9zdCA9IFtcbiAgICBQb3N0KCdBIFNFQ09ORCBMSUZFIScsXG4gICAgXCJcXFwiRG9uJ3QgaW1wbG9yZSB5b3VyIG1pbmQgdG8gY2hhbmdlIHdoYXQgd2FzIHRvIGJlLCBpbXBsb3JlIHlvdXIgbWluZCB0byBjaGFuZ2UgYW5kIGNoYW5nZSBmb3Igd2hhdCdzIG5leHQhIHRoaXMgcmVsaXZlZCB2ZXJzaW9uIG9mIHRoZSBwcm9qZWN0IHdpbGwgcHV0IHRvIHJlc3Qgb2YgYSBtZW1vcnkgdGhhdCdzIGJpdHRlci5cXFwiXCIsXG4gICAgJ21haW4nKSxcbiAgICBQb3N0KCdXSFkgQUhIQT8nLCBcbiAgICBcIldhbnQgYSBzdGVwIGJhY2sgZnJvbSB0aGUgdXN1YWwgZ2VuZXJpYyBmb29kIHlvdSBlYXQgYXQgYSBjb252ZW50aW9uYWwgZm9vZCBmYWlyPyA8YnI+aGF2ZSB5b3UgdGFzdGVkIGEgZm9vZCB0aGF0IHlvdSB3b3VsZCByZW1lbWJlciB0byB3YW50IHRvIHRhc3RlIGZvciBuZXh0IHNjaG9vbCBmYWlyPyA8YnI+Tm8/IDxicj48YnI+Q29tZSBoZXJlIHRoZW4hXCIsXG4gICAgJ3N1YicpLFxuICAgIFBvc3QoJ1dIRU5cXCdTIEFISEE/JyxcbiAgICBcIldlJ2xsIGJlIGhvc3RpbmcgdGhlIGZhaXIgZm9yIHR3byBkYXlzIGZyb20gODowMCBBLk0gdG8gNDozMCBQLk0hIEJlIHN1cmUgdG8gY2hlY2sgdXMgb3V0IGF0IFdlc3Rlcm4gSW50ZXJuYXRpb25hbCBTY2hvb2wsIFN0YWRpdW0gQ2FtcHVzIG9uIHRoZSAxc3QgYW5kIDJuZCBvZiBGZWJydWFyeS5cIixcbiAgICAnc3ViJyksIFBvc3QoJ1dIRVJFXFwnUyBBSEhBIEVYQUNUTFk/JywnJywnc3ViJylcbl07XG5cbmNvbnN0IGZpcnN0TWVudSA9ICBbXG4gICAgTWVudSgnS2ltY2hpIEZyaWVkIFJpY2UgYW5kIEZyaWVkIEd5b3phIHNldC4nLCBcbiAgICAnMTAwMDDhn5snLCBcbiAgICAnS2ltY2hpIGZyaWVkIHJpY2UsIEZyaWVkIEd5b3phIHNldCwgYW5kIEJldmVyYWdlcycpLFxuICAgIE1lbnUoJ1Rlcml5YWtpIENoaWNrZW4gd2l0aCByaWNlIHNldC4nLFxuICAgICcxMDAwMOGfmycsXG4gICAgJ1Rlcml5YWtpIENoaWNrZW4sIEtpbWNoaS9QaWNrbGVkIHJhZGRpc2gsIGFuZCBCZXZlcmFnZXMnKSxcbiAgICBNZW51KCdQYXN0YSBTZXQuJyxcbiAgICAnMTAwMDDhn5snLFxuICAgICdNb3VcXCdzIHNwZWNpYWwgcGFzdGEsIEhhc2Jyb3duLiBhbmQgQmV2ZXJhZ2VzJyksXG5dXG5cbmNvbnN0IHNlY29uZE1lbnUgPSBbXG4gICAgTWVudSgnS2ltY2hpIE9uaWdpcmkgKGNoZWVzZSBpcyBvcHRpb25hbCknLFxuICAgICc1MDAw4Z+bJyxcbiAgICAnS2ltY2hpLCBSaWNlLCBFZ2cvU3BhbS9IYW0nKSxcbiAgICBNZW51KCdUZXJpeWFraSBDaGlja2VuIFJpY2UnLFxuICAgICc2NTAw4Z+bJyxcbiAgICAnQ2hpY2tlbiwgUmljZSwgU3BlY2lhbCBzYXVjZScpLFxuICAgIE1lbnUoJ01vdVxcJ3Mgc3BlY2lhbCBwYXN0YSAoU2hyaW1wIGlzIG9wdGlvbmFsKScsXG4gICAgJzY1MDDhn5snLFxuICAgICdTcGVjaWFsIHJlY2lwZScpLFxuICAgIE1lbnUoJ1F1ZXNhZGlsbGEnLFxuICAgICc1MDAw4Z+bJyxcbiAgICAnVG9ydGlsbGEsIFZlZ2V0YWJsZXMsIENoZWVzZSwgTWVhdHMnKSxcbl1cblxuY29uc3QgdGhpcmRNZW51ID0gW1xuICAgIE1lbnUoJ0ZyaWVkIEd5b3phICg0IHBpZWNlcyknLFxuICAgICc1MDAw4Z+bJyxcbiAgICAnUG9yay9TaHJpbXAgZHVtcGluZycpLFxuICAgIE1lbnUoJ0NoZWVzZSBiaXRlcyAoNiBwaWVjZXMpJyxcbiAgICAnMjUwMOGfmycsXG4gICAgJ0NoZWVzZSBibG9ja3MnKSxcbiAgICBNZW51KCdDaGlja2VuIG51Z2dldHMgKDQgcGllY2VzKScsXG4gICAgJzUwMDDhn5snLFxuICAgICdDaGlja2VuIGJyZWFzdCwgc3BlY2lhbCBtaXh0dXJlIGFuZCBzcGljZXMnKSxcbiAgICBNZW51KCdCQlEgU2t3ZXJlcyAoMiBzdGlja3MpJyxcbiAgICAnMzUwMOGfmycsXG4gICAgJ0JlZXQgQmVsbCBwZXBwZXJzLCBPbmlvbiwgYW5kIHN0dWZmcycpLFxuICAgIE1lbnUoJ0hhc2hicm93biAoMSBwaWVjZSknLFxuICAgICcyNTAw4Z+bJyxcbiAgICAnUG90YXRvLCBzcGVjaWFsIG1peHR1cmUsIGFuZCBzcGljZXMnKSxcbl1cblxuY29uc3QgZm91cnRoTWVudSA9IFtcbiAgICBNZW51KCdGcnVpdHkgc21vb3RoaWUnLFxuICAgICc3NTAw4Z+bJyxcbiAgICAnQmFuYW5hL1N0cmF3YmVycnkvQmx1ZWJlcnJ5JyksXG4gICAgTWVudSgnQ2hpYSBzZWVkcyBkcmluaycsXG4gICAgJzkwMDDhn5snLFxuICAgICdDaGlhIHNlZWRzJyksXG4gICAgTWVudSgnU3BhcmtsaW5nIENoaWEgTGVtb25hZGUgd2l0aCBiZXJyaWVzJyxcbiAgICAnNDUwMOGfmycsXG4gICAgJ1N0cmF3YmVycnkvQmx1ZWJlcnJ5L0tpd2kvTWl4ZWQnKSxcbiAgICBNZW51KCdCZXZlcmFnZXMnLFxuICAgICct4Z+bJyxcbiAgICAnRGFzYW5pL0Nva2UvU3ByaXRlJyksXG5dXG5cbmNvbnN0IGZpZnRoTWVudSA9IFtcbiAgICBNZW51KCdTXFwnbW9yZScsXG4gICAgJzIwMDDhn5snLFxuICAgICdNYXJzaG1lbGxvdywgY3JhY2tlcnMsIGNob2NsYXRlJyksXG4gICAgTWVudSgnU2hhdmVkIGljZScsXG4gICAgJzI1MDDhn5snLFxuICAgICdHcmVlbi9yZWQgYmVhbiwgaWNlLCBzeXJ1cCcpLFxuICAgIE1lbnUoJ0NhbmRpZWQgZnJ1aXRzJyxcbiAgICAnMjAwMOGfmycsXG4gICAgJ1N0cmF3YmVycnkvQXBwbGUvQmFuYW5hIHdpdGggY2FyYW1lbCBvciBjaG9jb2xhdGUuJyksXG4gICAgTWVudSgnTWF0Y2hhIGNha2UnLFxuICAgICc1MDAw4Z+bJyxcbiAgICAnU3BlY2lhbCByZWNpcGUgKGxpbWl0ZWQgZWRpdGlvbiknKSxcbl1cblxuY29uc3QgY29udGFjdHMgPSBbXG4gICAgQ29udGFjdCgnQ2hoZWFuZycsICdDRU8nLCAnMDY5OTgwOTgxJyksXG4gICAgQ29udGFjdCgnUHV0aHlyYXRoJywgJ0NFTycsICdQcmV5JyksXG4gICAgQ29udGFjdCgnTWFsaW4nLCAnQ0VPJywgJzA3MDN4eDJ4eCcpLFxuICAgIENvbnRhY3QoJ01hcnknLCAnQ0VPJywgJzAxMDNYWDJYWCcpLFxuICAgIENvbnRhY3QoJ01vbmFoJywgJ0NFTycsICcwOTg2WFgxWFgnKSxcbiAgICBDb250YWN0KCdFcmlzc2EnLCAnQ0VPJywgJzA5MzlYWDdYWCcpLFxuICAgIENvbnRhY3QoJ1Bvbml0YScsICdDRU8nLCAnMDEwM1hYMlhYJyksXG4gICAgQ29udGFjdCgnVGhpa2EnLCAnQ0VPJywgJzAxMDNYWDJYWCcpLFxuXVxuZXhwb3J0IHtmcm9udFBhZ2VQb3N0LCBmaXJzdE1lbnUsIHNlY29uZE1lbnUsIHRoaXJkTWVudSwgZm91cnRoTWVudSwgZmlmdGhNZW51LCBjb250YWN0c307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgY2hlY2sgZm9yIHRoZSB0YWIgdGhhdCBpcyBiZWluZyBwYXNzZWQgYW5kIGxvYWQgdGhlIGNvbnRlbnRcbi8vIGFjY29yZGluZ2x5IHRvIHRoZSBjdXJyZW50IHRhYiB0aGUgdXNlciBpcyBpbi5cblxuaW1wb3J0IHsgY29udGFjdHMgfSBmcm9tIFwiLi9jb25maWdcIjtcblxuZnVuY3Rpb24gbWFpbkxvYWQodGFiLCBjb250ZW50cykge1xuICAgIGNvbnN0IGNvbnRlbnRIb2xkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIGNvbnRlbnRIb2xkZXIudGV4dENvbnRlbnQgPSAnJztcblxuICAgIGxldCBjdXJyZW50VGFiO1xuXG4gICAgaWYgKGN1cnJlbnRUYWIgPT09IHRhYikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBjdXJyZW50VGFiID0gdGFiO1xuXG4gICAgaWYgKHRhYiA9PT0gJ0hvbWUnKSB7XG4gICAgICAgIGxldCBjb250ZW50V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb250ZW50V3JhcHBlci5jbGFzc0xpc3QuYWRkKCdtYWluLWNvbnRlbnQnKTtcblxuICAgICAgICBjb250ZW50SG9sZGVyLmFwcGVuZENoaWxkKGNvbnRlbnRXcmFwcGVyKTtcbiAgICAgICAgY29udGVudExvYWRlci5sb2FkUG9zdChjb250ZW50cyk7XG4gICAgICAgIGNvbnRlbnRMb2FkZXIubG9hZE1hcCgpO1xuICAgIH1cblxuICAgIGlmICh0YWIgPT09ICdPcmRlcicpIHtcbiAgICAgICAgbGV0IHRhYmxlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhYmxlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NlY29uZC1jb250ZW50Jyk7XG4gICAgICAgIGNvbnRlbnRIb2xkZXIuYXBwZW5kQ2hpbGQodGFibGVDb250YWluZXIpO1xuXG4gICAgICAgIGNvbnRlbnRMb2FkZXIubG9hZFRhYmxlQ29udGVudChjb250ZW50cyk7XG4gICAgfVxuXG4gICAgaWYgKHRhYiA9PT0gJ0NvbnRhY3QnKSB7XG4gICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgbGV0IGNvbnRhY3RDb250YWluZXJXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxldCBjb250YWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgnY29udGFjdC10aXRsZScpO1xuICAgICAgICBjb250YWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3Qtd3JhcHBlcicpO1xuICAgICAgICBjb250YWN0Q29udGFpbmVyV3JhcHBlci5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWNvbnRhaW5lci13cmFwcGVyJyk7XG5cbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSAnTWVldCBvdXIgdGVhbXMuLi4nXG5cbiAgICAgICAgY29udGFjdENvbnRhaW5lcldyYXBwZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgICBjb250YWN0Q29udGFpbmVyV3JhcHBlci5hcHBlbmRDaGlsZChjb250YWN0Q29udGFpbmVyKTtcbiAgICAgICAgY29udGVudEhvbGRlci5hcHBlbmRDaGlsZChjb250YWN0Q29udGFpbmVyV3JhcHBlcik7XG5cbiAgICAgICAgY29udGVudExvYWRlci5sb2FkQ29udGFjdChjb250ZW50cyk7XG4gICAgfVxuICAgIFxufVxuXG5cbi8vIFRoaXMgY29udGVudCBsb2FkZXIgbW9kdWxlIHdpbGwgZ2l2ZSB0aGUgZnVuY3Rpb24gdGhlIGFiaWxpdHkgdG8gbG9hZCB0aGUgdHlwZSBvZiBwb3N0XG4vLyBhY2NvcmRpbmcgdG8gdGhlIHRhYiBwcmVzZW50ZWQgYWJvdmUuXG5cbmNvbnN0IGNvbnRlbnRMb2FkZXIgPSAoZnVuY3Rpb24oKSB7XG4gICAgLy8gRm9yIGZyb250IHBhZ2UgcG9zdCBibG9nLWlzaCB0eXBlLlxuICAgIGZ1bmN0aW9uIHVubG9hZENvbnRlbnQoY29udGVudCkge1xuICAgICAgICBjb250ZW50LnRleHRDb250ZW50ID0gJyc7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGxvYWRQb3N0KGNvbnRlbnRzKSB7XG4gICAgICAgIGNvbnRlbnRzLmZvckVhY2goKGNvbnRlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnRXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGVudCcpO1xuICAgICAgICAgICAgaWYgKCBjb250ZW50Wyd0eXBlJ10gPT09ICdtYWluJyApIHtcbiAgICAgICAgICAgICAgICBsZXQgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgICAgICAgICAgICAgIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gICAgICAgICAgICAgICAgaDEuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcbiAgICAgICAgICAgICAgICBwLmNsYXNzTGlzdC5hZGQoJ21haW4tdGV4dCcpO1xuXG4gICAgICAgICAgICAgICAgaDEudGV4dENvbnRlbnQgPSBjb250ZW50Wyd0aXRsZSddO1xuICAgICAgICAgICAgICAgIHAudGV4dENvbnRlbnQgPSBjb250ZW50Wydjb250ZW50J107XG5cbiAgICAgICAgICAgICAgICBjb250ZW50V3JhcHBlci5hcHBlbmRDaGlsZChoMSlcbiAgICAgICAgICAgICAgICBjb250ZW50V3JhcHBlci5hcHBlbmRDaGlsZChwKVxuICAgICAgICAgICAgfSBlbHNlIGlmICggY29udGVudFsndHlwZSddID09PSAnc3ViJykge1xuICAgICAgICAgICAgICAgIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgICAgIGxldCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG5cbiAgICAgICAgICAgICAgICBzcGFuLnRleHRDb250ZW50ID0gY29udGVudFsndGl0bGUnXTtcblxuICAgICAgICAgICAgICAgIGgyLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgICAgICAgICAgICAgIGNvbnRlbnRXcmFwcGVyLmFwcGVuZENoaWxkKGgyKVxuICAgICAgICAgICAgICAgIGlmIChjb250ZW50Wydjb250ZW50J10pIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICAgICAgICAgIHAuaW5uZXJIVE1MID0gY29udGVudFsnY29udGVudCddO1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50V3JhcHBlci5hcHBlbmRDaGlsZChwKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyBMb2FkIGlmcmFtZSBtYXBcbiAgICBmdW5jdGlvbiBsb2FkTWFwKCkge1xuICAgICAgICBjb25zdCBjb250ZW50V3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRlbnQnKTtcbiAgICAgICAgbGV0IG1hcFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbGV0IGlmcmFtZU1hcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuXG4gICAgICAgIG1hcFdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnbWFwLXdyYXBwZXInKTtcbiAgICAgICAgaWZyYW1lTWFwLnNldEF0dHJpYnV0ZSgnc3JjJywgXCJodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvZW1iZWQ/cGI9ITFtMTghMW0xMiExbTMhMWQ3ODE3LjExNzExNTkyOTQ5ITJkMTA0Ljg4NTQ5OTI0MDMzOTQ4ITNkMTEuNTgzNDcwODU4NTE2MDAzITJtMyExZjAhMmYwITNmMCEzbTIhMWkxMDI0ITJpNzY4ITRmMTMuMSEzbTMhMW0yITFzMHgzMTA5NTE5ZTYxZTcyNTFiJTNBMHgzMDhiMGMyZTU5M2NlOGI4ITJzV2VzdGVybiUyMEludGVybmF0aW9uYWwlMjBTY2hvb2wlMjAtJTIwU3RhZGl1bSUyMENhbXB1cyE1ZTAhM20yITFzZW4hMnNraCE0djE2NDI5MTEwNTg4NzEhNW0yITFzZW4hMnNraFwiKTtcbiAgICAgICAgaWZyYW1lTWFwLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCAnNjAwJyk7XG4gICAgICAgIGlmcmFtZU1hcC5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsICc0NTAnKTtcbiAgICAgICAgaWZyYW1lTWFwLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnYm9yZGVyOjAnKTtcbiAgICAgICAgaWZyYW1lTWFwLnNldEF0dHJpYnV0ZSgnYWxsb3dmdWxsc2NyZWVuJywgXCJcIik7XG4gICAgICAgIGlmcmFtZU1hcC5zZXRBdHRyaWJ1dGUoJ2xvYWRpbmcnLCAnbGF6eScpO1xuXG4gICAgICAgIG1hcFdyYXBwZXIuYXBwZW5kQ2hpbGQoaWZyYW1lTWFwKTtcbiAgICAgICAgY29udGVudFdyYXBwZXIuYXBwZW5kQ2hpbGQobWFwV3JhcHBlcik7XG4gICAgfVxuXG4gICAgLy8gTG9hZCB0YWJsZSBjb250ZW50XG4gICAgZnVuY3Rpb24gbG9hZFRhYmxlQ29udGVudChjYXRlZ29yeSkge1xuICAgICAgICBjYXRlZ29yeS5mb3JFYWNoKChjb250ZW50cykgPT4ge1xuICAgICAgICAgICAgbGV0IHRhYmxlV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJyk7XG4gICAgICAgICAgICBsZXQgdGFibGVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhcHRpb24nKTtcbiAgICAgICAgICAgIGxldCB0YWJsZUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoZWFkJyk7XG4gICAgICAgICAgICBsZXQgdGFibGVCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGJvZHknKTtcbiAgICAgICAgICAgIGxldCByb3dIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgICAgICAgICAgbGV0IGhlYWRlckRhdGE7XG5cbiAgICAgICAgICAgIHRhYmxlV3JhcHBlci5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRhYmxlV3JhcHBlci5hcHBlbmRDaGlsZCh0YWJsZVRpdGxlKVxuXG4gICAgICAgICAgICBpZiAoIGNhdGVnb3J5WzBdID09PSBjb250ZW50cyApIHtcbiAgICAgICAgICAgICAgICB0YWJsZVRpdGxlLnRleHRDb250ZW50ID0gJ1ZhbHVlYWJsZSBTZXRzISc7XG4gICAgICAgICAgICAgICAgaGVhZGVyRGF0YSA9IFsnU2V0cycsICdQcmljZSddO1xuICAgICAgICAgICAgfSBlbHNlIGlmICggY2F0ZWdvcnlbMV0gPT09IGNvbnRlbnRzICkge1xuICAgICAgICAgICAgICAgIHRhYmxlVGl0bGUudGV4dENvbnRlbnQgPSAnTWVhbHMgb2YgdGhlIGRheSEnO1xuICAgICAgICAgICAgICAgIGhlYWRlckRhdGEgPSBbICdNZWFscycsICdQcmljZSddXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCBjYXRlZ29yeVsyXSA9PT0gY29udGVudHMgKSB7XG4gICAgICAgICAgICAgICAgdGFibGVUaXRsZS50ZXh0Q29udGVudCA9ICdTYXRpYXRlIHlvdXIgYXBwZXRpdGUnO1xuICAgICAgICAgICAgICAgIGhlYWRlckRhdGEgPSBbICdBcHBldGl6ZXJzJywgJ1ByaWNlJ11cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIGNhdGVnb3J5WzNdID09PSBjb250ZW50cykge1xuICAgICAgICAgICAgICAgIHRhYmxlVGl0bGUudGV4dENvbnRlbnQgPSAnTGFjdGF0ZWQgYnkgUHV0aHlyYXRoIDpEJztcbiAgICAgICAgICAgICAgICBoZWFkZXJEYXRhID0gWyAnRHJpbmtzJywgJ1ByaWNlJ11cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIGNhdGVnb3J5WzRdID09PSBjb250ZW50cykge1xuICAgICAgICAgICAgICAgIHRhYmxlVGl0bGUudGV4dENvbnRlbnQgPSAnQWx3YXlzIHJvb20gZm9yIGl0Li4uJztcbiAgICAgICAgICAgICAgICBoZWFkZXJEYXRhID0gWyAnRGVzc2VydHMnLCAnUHJpY2UnXVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBoZWFkZXJEYXRhLmZvckVhY2goKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGhlYWRlckNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpO1xuICAgICAgICAgICAgICAgIGhlYWRlckNvbnRlbnQudGV4dENvbnRlbnQgPSB2YWx1ZTtcblxuICAgICAgICAgICAgICAgIHJvd0hlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJDb250ZW50KTtcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIHJvd0hlYWRlci5jbGFzc0xpc3QuYWRkKCdtZW51LWhlYWRlcicpO1xuXG4gICAgICAgICAgICB0YWJsZUhlYWRlci5hcHBlbmRDaGlsZChyb3dIZWFkZXIpO1xuICAgICAgICAgICAgdGFibGVXcmFwcGVyLmFwcGVuZENoaWxkKHRhYmxlSGVhZGVyKTtcblxuICAgICAgICAgICAgY29udGVudHMuZm9yRWFjaCgoY29udGVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBmaXJzdFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gICAgICAgICAgICAgICAgbGV0IHNlY29uZFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG5cbiAgICAgICAgICAgICAgICBmb3IgKCBsZXQgdmFsdWUgaW4gY29udGVudCApIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIHZhbHVlID09PSAnbmFtZScgfHwgdmFsdWUgPT09ICdwcmljZScgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLnRleHRDb250ZW50ID0gY29udGVudFt2YWx1ZV07XG4gICAgICAgICAgICAgICAgICAgICAgICBmaXJzdFJvdy5hcHBlbmRDaGlsZChkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICggdmFsdWUgPT09ICdyZWNpcGUnICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS50ZXh0Q29udGVudCA9IGNvbnRlbnRbdmFsdWVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2Vjb25kUm93LmFwcGVuZENoaWxkKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRhYmxlQm9keS5hcHBlbmRDaGlsZChmaXJzdFJvdyk7XG4gICAgICAgICAgICAgICAgdGFibGVCb2R5LmFwcGVuZENoaWxkKHNlY29uZFJvdyk7XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICB0YWJsZVdyYXBwZXIuYXBwZW5kQ2hpbGQodGFibGVCb2R5KTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWNvbmQtY29udGVudCcpLmFwcGVuZENoaWxkKHRhYmxlV3JhcHBlcik7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbG9hZENvbnRhY3QoY29udGVudHMpIHtcbiAgICAgICAgY29udGVudHMuZm9yRWFjaCgoY29udGVudCkgPT4ge1xuICAgICAgICAgICAgbGV0IGNvbnRhY3RXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhY3Qtd3JhcHBlcicpXG4gICAgICAgICAgICBsZXQgY29udGFjdEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIGxldCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgbGV0IHBvc2l0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgbGV0IG51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgICAgICAgICAgY29udGFjdEJveC5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWJveCcpO1xuICAgICAgICAgICAgbmFtZS5jbGFzc0xpc3QuYWRkKCduYW1lJyk7XG4gICAgICAgICAgICBwb3NpdGlvbi5jbGFzc0xpc3QuYWRkKCdwb3NpdGlvbicpO1xuICAgICAgICAgICAgbnVtYmVyLmNsYXNzTGlzdC5hZGQoJ251bWJlcicpO1xuXG4gICAgICAgICAgICBuYW1lLnRleHRDb250ZW50ID0gY29udGVudFsnbmFtZSddO1xuICAgICAgICAgICAgcG9zaXRpb24udGV4dENvbnRlbnQgPSBjb250ZW50Wydwb3NpdGlvbiddO1xuICAgICAgICAgICAgbnVtYmVyLnRleHRDb250ZW50ID0gY29udGVudFsnY29udGFjdCddO1xuXG4gICAgICAgICAgICBjb250YWN0Qm94LmFwcGVuZENoaWxkKG5hbWUpO1xuICAgICAgICAgICAgY29udGFjdEJveC5hcHBlbmRDaGlsZChwb3NpdGlvbik7XG4gICAgICAgICAgICBjb250YWN0Qm94LmFwcGVuZENoaWxkKG51bWJlcik7XG4gICAgICAgICAgICBjb250YWN0V3JhcHBlci5hcHBlbmRDaGlsZChjb250YWN0Qm94KTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4ge2xvYWRQb3N0LCB1bmxvYWRDb250ZW50LCBsb2FkVGFibGVDb250ZW50LCBsb2FkQ29udGFjdCwgbG9hZE1hcH07XG59KSgpO1xuXG5cbmV4cG9ydCB7bWFpbkxvYWR9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==