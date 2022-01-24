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
    if (tab === 'Home') {
        let contentWrapper = document.createElement('div');
        contentWrapper.classList.add('main-content');

        contentHolder.appendChild(contentWrapper);
        contentLoader.loadPost(contents);
        contentLoader.loadMap();
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

    //width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe
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

    return {loadPost, unloadContent, loadMap};
})();



/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZWxvYWQuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBLCtDQUErQztBQUMvQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZWxvYWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgY2hlY2sgZm9yIHRoZSB0YWIgdGhhdCBpcyBiZWluZyBwYXNzZWQgYW5kIGxvYWQgdGhlIGNvbnRlbnRcbi8vIGFjY29yZGluZ2x5IHRvIHRoZSBjdXJyZW50IHRhYiB0aGUgdXNlciBpcyBpbi5cblxuZnVuY3Rpb24gbWFpbkxvYWQodGFiLCBjb250ZW50cykge1xuICAgIGNvbnN0IGNvbnRlbnRIb2xkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIGlmICh0YWIgPT09ICdIb21lJykge1xuICAgICAgICBsZXQgY29udGVudFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udGVudFdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnbWFpbi1jb250ZW50Jyk7XG5cbiAgICAgICAgY29udGVudEhvbGRlci5hcHBlbmRDaGlsZChjb250ZW50V3JhcHBlcik7XG4gICAgICAgIGNvbnRlbnRMb2FkZXIubG9hZFBvc3QoY29udGVudHMpO1xuICAgICAgICBjb250ZW50TG9hZGVyLmxvYWRNYXAoKTtcbiAgICB9XG4gICAgXG59XG5cblxuLy8gVGhpcyBjb250ZW50IGxvYWRlciBtb2R1bGUgd2lsbCBnaXZlIHRoZSBmdW5jdGlvbiB0aGUgYWJpbGl0eSB0byBsb2FkIHRoZSB0eXBlIG9mIHBvc3Rcbi8vIGFjY29yZGluZyB0byB0aGUgdGFiIHByZXNlbnRlZCBhYm92ZS5cblxuY29uc3QgY29udGVudExvYWRlciA9IChmdW5jdGlvbigpIHtcbiAgICAvLyBGb3IgZnJvbnQgcGFnZSBwb3N0IGJsb2ctaXNoIHR5cGUuXG4gICAgZnVuY3Rpb24gdW5sb2FkQ29udGVudChjb250ZW50KSB7XG4gICAgICAgIGNvbnRlbnQudGV4dENvbnRlbnQgPSAnJztcbiAgICB9XG4gICAgZnVuY3Rpb24gbG9hZFBvc3QoY29udGVudHMpIHtcbiAgICAgICAgY29udGVudHMuZm9yRWFjaCgoY29udGVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29udGVudFdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1jb250ZW50Jyk7XG4gICAgICAgICAgICBpZiAoIGNvbnRlbnRbJ3R5cGUnXSA9PT0gJ21haW4nICkge1xuICAgICAgICAgICAgICAgIGxldCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICAgICAgICAgICAgbGV0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgICAgICAgICAgICAgICBoMS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICAgICAgICAgICAgICAgIHAuY2xhc3NMaXN0LmFkZCgnbWFpbi10ZXh0Jyk7XG5cbiAgICAgICAgICAgICAgICBoMS50ZXh0Q29udGVudCA9IGNvbnRlbnRbJ3RpdGxlJ107XG4gICAgICAgICAgICAgICAgcC50ZXh0Q29udGVudCA9IGNvbnRlbnRbJ2NvbnRlbnQnXTtcblxuICAgICAgICAgICAgICAgIGNvbnRlbnRXcmFwcGVyLmFwcGVuZENoaWxkKGgxKVxuICAgICAgICAgICAgICAgIGNvbnRlbnRXcmFwcGVyLmFwcGVuZENoaWxkKHApXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCBjb250ZW50Wyd0eXBlJ10gPT09ICdzdWInKSB7XG4gICAgICAgICAgICAgICAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICAgICAgbGV0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcblxuICAgICAgICAgICAgICAgIHNwYW4udGV4dENvbnRlbnQgPSBjb250ZW50Wyd0aXRsZSddO1xuXG4gICAgICAgICAgICAgICAgaDIuYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgICAgICAgICAgICAgY29udGVudFdyYXBwZXIuYXBwZW5kQ2hpbGQoaDIpXG4gICAgICAgICAgICAgICAgaWYgKGNvbnRlbnRbJ2NvbnRlbnQnXSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgICAgICAgICAgcC5pbm5lckhUTUwgPSBjb250ZW50Wydjb250ZW50J107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRXcmFwcGVyLmFwcGVuZENoaWxkKHApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8vd2lkdGg9XCI2MDBcIiBoZWlnaHQ9XCI0NTBcIiBzdHlsZT1cImJvcmRlcjowO1wiIGFsbG93ZnVsbHNjcmVlbj1cIlwiIGxvYWRpbmc9XCJsYXp5XCI+PC9pZnJhbWVcbiAgICBmdW5jdGlvbiBsb2FkTWFwKCkge1xuICAgICAgICBjb25zdCBjb250ZW50V3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRlbnQnKTtcbiAgICAgICAgbGV0IG1hcFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbGV0IGlmcmFtZU1hcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuXG4gICAgICAgIG1hcFdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnbWFwLXdyYXBwZXInKTtcbiAgICAgICAgaWZyYW1lTWFwLnNldEF0dHJpYnV0ZSgnc3JjJywgXCJodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvZW1iZWQ/cGI9ITFtMTghMW0xMiExbTMhMWQ3ODE3LjExNzExNTkyOTQ5ITJkMTA0Ljg4NTQ5OTI0MDMzOTQ4ITNkMTEuNTgzNDcwODU4NTE2MDAzITJtMyExZjAhMmYwITNmMCEzbTIhMWkxMDI0ITJpNzY4ITRmMTMuMSEzbTMhMW0yITFzMHgzMTA5NTE5ZTYxZTcyNTFiJTNBMHgzMDhiMGMyZTU5M2NlOGI4ITJzV2VzdGVybiUyMEludGVybmF0aW9uYWwlMjBTY2hvb2wlMjAtJTIwU3RhZGl1bSUyMENhbXB1cyE1ZTAhM20yITFzZW4hMnNraCE0djE2NDI5MTEwNTg4NzEhNW0yITFzZW4hMnNraFwiKTtcbiAgICAgICAgaWZyYW1lTWFwLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCAnNjAwJyk7XG4gICAgICAgIGlmcmFtZU1hcC5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsICc0NTAnKTtcbiAgICAgICAgaWZyYW1lTWFwLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnYm9yZGVyOjAnKTtcbiAgICAgICAgaWZyYW1lTWFwLnNldEF0dHJpYnV0ZSgnYWxsb3dmdWxsc2NyZWVuJywgXCJcIik7XG4gICAgICAgIGlmcmFtZU1hcC5zZXRBdHRyaWJ1dGUoJ2xvYWRpbmcnLCAnbGF6eScpO1xuXG4gICAgICAgIG1hcFdyYXBwZXIuYXBwZW5kQ2hpbGQoaWZyYW1lTWFwKTtcbiAgICAgICAgY29udGVudFdyYXBwZXIuYXBwZW5kQ2hpbGQobWFwV3JhcHBlcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtsb2FkUG9zdCwgdW5sb2FkQ29udGVudCwgbG9hZE1hcH07XG59KSgpO1xuXG5cbmV4cG9ydCB7bWFpbkxvYWR9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==