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
/*!*************************!*\
  !*** ./src/pageload.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mainLoad": () => (/* binding */ mainLoad)
/* harmony export */ });
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
        let tableWrapper = document.createElement('table');
        let tableTitle = document.createElement('caption');

        tableTitle.textContent = 'Meals of the day!';

        tableContainer.classList.add('second-content');
        tableWrapper.classList.add('menu');

        tableWrapper.appendChild(tableTitle)
        tableContainer.appendChild(tableWrapper);
        contentHolder.appendChild(tableContainer);
        contentLoader.loadTableContent(contents);
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
    function loadTableContent(contents) {
        let table = document.querySelector('table');
        let tableHeader = document.createElement('thead');
        let tableBody = document.createElement('tbody');
        let rowHeader = document.createElement('tr');
        let headerData = ['Meals', 'Price'];

        headerData.forEach((value) => {
            let headerContent = document.createElement('th');
            headerContent.textContent = value;

            rowHeader.appendChild(headerContent);
        })

        rowHeader.classList.add('menu-header');

        tableHeader.appendChild(rowHeader);
        table.appendChild(tableHeader);
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

        table.appendChild(tableBody);
    }

    return {loadPost, unloadContent, loadTableContent, loadMap};
})();



/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZWxvYWQuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUEsWUFBWTtBQUNaLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZWxvYWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgY2hlY2sgZm9yIHRoZSB0YWIgdGhhdCBpcyBiZWluZyBwYXNzZWQgYW5kIGxvYWQgdGhlIGNvbnRlbnRcbi8vIGFjY29yZGluZ2x5IHRvIHRoZSBjdXJyZW50IHRhYiB0aGUgdXNlciBpcyBpbi5cblxuZnVuY3Rpb24gbWFpbkxvYWQodGFiLCBjb250ZW50cykge1xuICAgIGNvbnN0IGNvbnRlbnRIb2xkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIGNvbnRlbnRIb2xkZXIudGV4dENvbnRlbnQgPSAnJztcblxuICAgIGxldCBjdXJyZW50VGFiO1xuXG4gICAgaWYgKGN1cnJlbnRUYWIgPT09IHRhYikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBjdXJyZW50VGFiID0gdGFiO1xuXG4gICAgaWYgKHRhYiA9PT0gJ0hvbWUnKSB7XG4gICAgICAgIGxldCBjb250ZW50V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb250ZW50V3JhcHBlci5jbGFzc0xpc3QuYWRkKCdtYWluLWNvbnRlbnQnKTtcblxuICAgICAgICBjb250ZW50SG9sZGVyLmFwcGVuZENoaWxkKGNvbnRlbnRXcmFwcGVyKTtcbiAgICAgICAgY29udGVudExvYWRlci5sb2FkUG9zdChjb250ZW50cyk7XG4gICAgICAgIGNvbnRlbnRMb2FkZXIubG9hZE1hcCgpO1xuICAgIH1cblxuICAgIGlmICh0YWIgPT09ICdPcmRlcicpIHtcbiAgICAgICAgbGV0IHRhYmxlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxldCB0YWJsZVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0YWJsZScpO1xuICAgICAgICBsZXQgdGFibGVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhcHRpb24nKTtcblxuICAgICAgICB0YWJsZVRpdGxlLnRleHRDb250ZW50ID0gJ01lYWxzIG9mIHRoZSBkYXkhJztcblxuICAgICAgICB0YWJsZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzZWNvbmQtY29udGVudCcpO1xuICAgICAgICB0YWJsZVdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnbWVudScpO1xuXG4gICAgICAgIHRhYmxlV3JhcHBlci5hcHBlbmRDaGlsZCh0YWJsZVRpdGxlKVxuICAgICAgICB0YWJsZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YWJsZVdyYXBwZXIpO1xuICAgICAgICBjb250ZW50SG9sZGVyLmFwcGVuZENoaWxkKHRhYmxlQ29udGFpbmVyKTtcbiAgICAgICAgY29udGVudExvYWRlci5sb2FkVGFibGVDb250ZW50KGNvbnRlbnRzKTtcbiAgICB9XG4gICAgXG59XG5cblxuLy8gVGhpcyBjb250ZW50IGxvYWRlciBtb2R1bGUgd2lsbCBnaXZlIHRoZSBmdW5jdGlvbiB0aGUgYWJpbGl0eSB0byBsb2FkIHRoZSB0eXBlIG9mIHBvc3Rcbi8vIGFjY29yZGluZyB0byB0aGUgdGFiIHByZXNlbnRlZCBhYm92ZS5cblxuY29uc3QgY29udGVudExvYWRlciA9IChmdW5jdGlvbigpIHtcbiAgICAvLyBGb3IgZnJvbnQgcGFnZSBwb3N0IGJsb2ctaXNoIHR5cGUuXG4gICAgZnVuY3Rpb24gdW5sb2FkQ29udGVudChjb250ZW50KSB7XG4gICAgICAgIGNvbnRlbnQudGV4dENvbnRlbnQgPSAnJztcbiAgICB9XG4gICAgZnVuY3Rpb24gbG9hZFBvc3QoY29udGVudHMpIHtcbiAgICAgICAgY29udGVudHMuZm9yRWFjaCgoY29udGVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29udGVudFdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1jb250ZW50Jyk7XG4gICAgICAgICAgICBpZiAoIGNvbnRlbnRbJ3R5cGUnXSA9PT0gJ21haW4nICkge1xuICAgICAgICAgICAgICAgIGxldCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICAgICAgICAgICAgbGV0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgICAgICAgICAgICAgICBoMS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICAgICAgICAgICAgICAgIHAuY2xhc3NMaXN0LmFkZCgnbWFpbi10ZXh0Jyk7XG5cbiAgICAgICAgICAgICAgICBoMS50ZXh0Q29udGVudCA9IGNvbnRlbnRbJ3RpdGxlJ107XG4gICAgICAgICAgICAgICAgcC50ZXh0Q29udGVudCA9IGNvbnRlbnRbJ2NvbnRlbnQnXTtcblxuICAgICAgICAgICAgICAgIGNvbnRlbnRXcmFwcGVyLmFwcGVuZENoaWxkKGgxKVxuICAgICAgICAgICAgICAgIGNvbnRlbnRXcmFwcGVyLmFwcGVuZENoaWxkKHApXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCBjb250ZW50Wyd0eXBlJ10gPT09ICdzdWInKSB7XG4gICAgICAgICAgICAgICAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICAgICAgbGV0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcblxuICAgICAgICAgICAgICAgIHNwYW4udGV4dENvbnRlbnQgPSBjb250ZW50Wyd0aXRsZSddO1xuXG4gICAgICAgICAgICAgICAgaDIuYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgICAgICAgICAgICAgY29udGVudFdyYXBwZXIuYXBwZW5kQ2hpbGQoaDIpXG4gICAgICAgICAgICAgICAgaWYgKGNvbnRlbnRbJ2NvbnRlbnQnXSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgICAgICAgICAgcC5pbm5lckhUTUwgPSBjb250ZW50Wydjb250ZW50J107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRXcmFwcGVyLmFwcGVuZENoaWxkKHApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8vIExvYWQgaWZyYW1lIG1hcFxuICAgIGZ1bmN0aW9uIGxvYWRNYXAoKSB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnRXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGVudCcpO1xuICAgICAgICBsZXQgbWFwV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZXQgaWZyYW1lTWFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XG5cbiAgICAgICAgbWFwV3JhcHBlci5jbGFzc0xpc3QuYWRkKCdtYXAtd3JhcHBlcicpO1xuICAgICAgICBpZnJhbWVNYXAuc2V0QXR0cmlidXRlKCdzcmMnLCBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9lbWJlZD9wYj0hMW0xOCExbTEyITFtMyExZDc4MTcuMTE3MTE1OTI5NDkhMmQxMDQuODg1NDk5MjQwMzM5NDghM2QxMS41ODM0NzA4NTg1MTYwMDMhMm0zITFmMCEyZjAhM2YwITNtMiExaTEwMjQhMmk3NjghNGYxMy4xITNtMyExbTIhMXMweDMxMDk1MTllNjFlNzI1MWIlM0EweDMwOGIwYzJlNTkzY2U4YjghMnNXZXN0ZXJuJTIwSW50ZXJuYXRpb25hbCUyMFNjaG9vbCUyMC0lMjBTdGFkaXVtJTIwQ2FtcHVzITVlMCEzbTIhMXNlbiEyc2toITR2MTY0MjkxMTA1ODg3MSE1bTIhMXNlbiEyc2toXCIpO1xuICAgICAgICBpZnJhbWVNYXAuc2V0QXR0cmlidXRlKCd3aWR0aCcsICc2MDAnKTtcbiAgICAgICAgaWZyYW1lTWFwLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgJzQ1MCcpO1xuICAgICAgICBpZnJhbWVNYXAuc2V0QXR0cmlidXRlKCdzdHlsZScsICdib3JkZXI6MCcpO1xuICAgICAgICBpZnJhbWVNYXAuc2V0QXR0cmlidXRlKCdhbGxvd2Z1bGxzY3JlZW4nLCBcIlwiKTtcbiAgICAgICAgaWZyYW1lTWFwLnNldEF0dHJpYnV0ZSgnbG9hZGluZycsICdsYXp5Jyk7XG5cbiAgICAgICAgbWFwV3JhcHBlci5hcHBlbmRDaGlsZChpZnJhbWVNYXApO1xuICAgICAgICBjb250ZW50V3JhcHBlci5hcHBlbmRDaGlsZChtYXBXcmFwcGVyKTtcbiAgICB9XG5cbiAgICAvLyBMb2FkIHRhYmxlIGNvbnRlbnRcbiAgICBmdW5jdGlvbiBsb2FkVGFibGVDb250ZW50KGNvbnRlbnRzKSB7XG4gICAgICAgIGxldCB0YWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3RhYmxlJyk7XG4gICAgICAgIGxldCB0YWJsZUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoZWFkJyk7XG4gICAgICAgIGxldCB0YWJsZUJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0Ym9keScpO1xuICAgICAgICBsZXQgcm93SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgICAgICAgbGV0IGhlYWRlckRhdGEgPSBbJ01lYWxzJywgJ1ByaWNlJ107XG5cbiAgICAgICAgaGVhZGVyRGF0YS5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgbGV0IGhlYWRlckNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpO1xuICAgICAgICAgICAgaGVhZGVyQ29udGVudC50ZXh0Q29udGVudCA9IHZhbHVlO1xuXG4gICAgICAgICAgICByb3dIZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyQ29udGVudCk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgcm93SGVhZGVyLmNsYXNzTGlzdC5hZGQoJ21lbnUtaGVhZGVyJyk7XG5cbiAgICAgICAgdGFibGVIZWFkZXIuYXBwZW5kQ2hpbGQocm93SGVhZGVyKTtcbiAgICAgICAgdGFibGUuYXBwZW5kQ2hpbGQodGFibGVIZWFkZXIpO1xuICAgICAgICBjb250ZW50cy5mb3JFYWNoKChjb250ZW50KSA9PiB7XG4gICAgICAgICAgICBsZXQgZmlyc3RSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgICAgICAgICAgbGV0IHNlY29uZFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG5cbiAgICAgICAgICAgIGZvciAoIGxldCB2YWx1ZSBpbiBjb250ZW50ICkge1xuICAgICAgICAgICAgICAgIGxldCBkYXRhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICAgICAgICAgICAgICBpZiAoIHZhbHVlID09PSAnbmFtZScgfHwgdmFsdWUgPT09ICdwcmljZScgKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEudGV4dENvbnRlbnQgPSBjb250ZW50W3ZhbHVlXTtcbiAgICAgICAgICAgICAgICAgICAgZmlyc3RSb3cuYXBwZW5kQ2hpbGQoZGF0YSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICggdmFsdWUgPT09ICdyZWNpcGUnICkge1xuICAgICAgICAgICAgICAgICAgICBkYXRhLnRleHRDb250ZW50ID0gY29udGVudFt2YWx1ZV07XG4gICAgICAgICAgICAgICAgICAgIHNlY29uZFJvdy5hcHBlbmRDaGlsZChkYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRhYmxlQm9keS5hcHBlbmRDaGlsZChmaXJzdFJvdyk7XG4gICAgICAgICAgICB0YWJsZUJvZHkuYXBwZW5kQ2hpbGQoc2Vjb25kUm93KTtcbiAgICAgICAgfSlcblxuICAgICAgICB0YWJsZS5hcHBlbmRDaGlsZCh0YWJsZUJvZHkpO1xuICAgIH1cblxuICAgIHJldHVybiB7bG9hZFBvc3QsIHVubG9hZENvbnRlbnQsIGxvYWRUYWJsZUNvbnRlbnQsIGxvYWRNYXB9O1xufSkoKTtcblxuXG5leHBvcnQge21haW5Mb2FkfTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=