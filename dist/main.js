/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/events.js":
/*!***********************!*\
  !*** ./src/events.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "searchBtn": () => (/* binding */ searchBtn)
/* harmony export */ });
/* harmony import */ var _fetchData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchData */ "./src/fetchData.js");


;


const searchBtn = document.getElementById('searchBtn')

searchBtn.addEventListener('click', () => {
    ;(0,_fetchData__WEBPACK_IMPORTED_MODULE_0__.getID)()
})



/***/ }),

/***/ "./src/fetchData.js":
/*!**************************!*\
  !*** ./src/fetchData.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "executeSearch": () => (/* binding */ executeSearch),
/* harmony export */   "getID": () => (/* binding */ getID)
/* harmony export */ });


// import{}



const searchBar = document.getElementById('searchBar')
const searchModal = document.getElementById('searchModal')

async function executeSearch() {

    let response = await fetch('http://api.openweathermap.org/data/2.5/forecast?id=4593142&appid=b553abef78d7459ae8fd13980b3e30b0', {mode: 'cors'})
    let fetchedData = await response.json()
    console.log(fetchedData)
}

async function getID() {
    
    try {
        let response = await fetch (`http://api.openweathermap.org/geo/1.0/direct?q=${searchBar.value}&limit=5&appid=b553abef78d7459ae8fd13980b3e30b0`, {mode: 'cors'})
        let fetchedData = await response.json()

        let optionOne = `${fetchedData[0].name}, ${fetchedData[0].state}, ${fetchedData[0].country}`;
        let optionTwo = `${fetchedData[1].name}, ${fetchedData[1].state}, ${fetchedData[1].country}`;
        let optionThree = `${fetchedData[2].name}, ${fetchedData[2].state}, ${fetchedData[2].country}`;
        let optionFour = `${fetchedData[3].name}, ${fetchedData[3].state}, ${fetchedData[3].country}`;
        let optionFive = `${fetchedData[4].name}, ${fetchedData[4].state}, ${fetchedData[4].country}`;

        createModalHeader()
        createOption(optionOne)
        createOption(optionTwo)
        createOption(optionThree)
        createOption(optionFour)
        createOption(optionFive)
        createModalClose()
        searchModal.showModal()
    } catch {
        createModalErr()
        createModalClose()
        searchModal.showModal()
    }
}

function createOption(option) {
    let optionBtn = document.createElement('button')
    optionBtn.classList.add('option-button')
    optionBtn.textContent = option
    searchModal.appendChild(optionBtn)
}

function createModalHeader() {
    let modalHeader = document.createElement('h1')
    modalHeader.textContent = "We're you searching for.."
    searchModal.appendChild(modalHeader)
}

function createModalErr() {
    let modalErr = document.createElement('h2')
    modalErr.classList.add('modal-error')
    modalErr.textContent = "We could not find your search. Please try again."
    searchModal.appendChild(modalErr)
}

function createModalClose() {
    let closeBtn = document.createElement('h4')
    closeBtn.classList.add('close-button')
    closeBtn.onclick = () => {
        searchModal.replaceChildren()
        searchModal.close()
    }
    closeBtn.textContent = 'Close & Try Again'
    searchModal.appendChild(closeBtn)
}











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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fetchData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchData */ "./src/fetchData.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events */ "./src/events.js");


;




const getLocation = document.getElementById('location')
const date = document.getElementById('date')
const tempurature = document.getElementById('tempurature')
const sunriseText = document.getElementById('sunriseText')
const sunsetText = document.getElementById('sunsetText')
const humidity = document.getElementById('humidity')
const dewPoint = document.getElementById('dewPoint')
const wind = document.getElementById('wind')
const visibility = document.getElementById('visibility')


const hrTextOne = document.getElementById('hrTextOne')
const hrTextTwo = document.getElementById('hrTextTwo')
const hrTextThree = document.getElementById('hrTextThree')
const hrTextFour = document.getElementById('hrTextFour')
const hrTextFive = document.getElementById('hrTextFive')
const hrTextSix = document.getElementById('hrTextSix')
const hrTextSeven = document.getElementById('hrTextSeven')
const hrTextEight = document.getElementById('hrTextEight')

const hrImgOne = document.getElementById('hrImgOne')
const hrImgTwo = document.getElementById('hrImgTwo')
const hrImgThree = document.getElementById('hrImgThree')
const hrImgFour = document.getElementById('hrImgFour')
const hrImgFive = document.getElementById('hrImgFive')
const hrImgSix = document.getElementById('hrImgSix')
const hrImgSeven = document.getElementById('hrImgSeven')
const hrImgEight = document.getElementById('hrImgEight')

const hrTempOne = document.getElementById('hrTempOne')
const hrTempTwo = document.getElementById('hrTempTwo')
const hrTempThree = document.getElementById('hrTempThree')
const hrTempFour = document.getElementById('hrTempFour')
const hrTempFive = document.getElementById('hrTempFive')
const hrTempSix = document.getElementById('hrTempSix')
const hrTempSeven = document.getElementById('hrTempSeven')
const hrTempEight = document.getElementById('hrTempEight')

const forecastText = document.getElementById('forecastText')

const dayDateOne = document.getElementById('dayDateOne')
const dayDateTwo = document.getElementById('dayDateTwo')
const dayDateThree = document.getElementById('dayDateThree')
const dayDateFour = document.getElementById('dayDateFour')
const dayDateFive = document.getElementById('dayDateFive')
const dayDateSix = document.getElementById('dayDateSix')
const dayDateSeven = document.getElementById('dayDateSeven')

const dayImgOne = document.getElementById('dayImgOne')
const dayImgTwo = document.getElementById('dayImgTwo')
const dayImgThree = document.getElementById('dayImgThree')
const dayImgFour = document.getElementById('dayImgFour')
const dayImgFive = document.getElementById('dayImgFive')
const dayImgSix = document.getElementById('dayImgSix')
const dayImgSeven = document.getElementById('dayImgSeven')

const forecastOne = document.getElementById('forecastOne')
const forecastTwo = document.getElementById('forecastTwo')
const forecastThree = document.getElementById('forecastThree')
const forecastFour = document.getElementById('forecastFour')
const forecastFive = document.getElementById('forecastFive')
const forecastSix = document.getElementById('forecastSix')
const forecastSeven = document.getElementById('forecastSeven')

const dayRainOne = document.getElementById('dayRainOne')
const dayRainTwo = document.getElementById('dayRainTwo')
const dayRainThree = document.getElementById('dayRainThree')
const dayRainFour = document.getElementById('dayRainFour')
const dayRainFive = document.getElementById('dayRainFive')
const dayRainSix = document.getElementById('dayRainSix')
const dayRainSeven = document.getElementById('dayRainSeven')

;(0,_fetchData__WEBPACK_IMPORTED_MODULE_0__.executeSearch)()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBWTtBQUNaO0FBQ0EsQ0FBbUM7QUFDakI7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGtEQUFLO0FBQ1QsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7Ozs7O0FDVlk7QUFDWjtBQUNBO0FBQ0E7QUFDNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUlBQXFJLGFBQWE7QUFDbEo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzRkFBc0YsZ0JBQWdCLG1EQUFtRCxhQUFhO0FBQ3RLO0FBQ0E7QUFDQSwyQkFBMkIsb0JBQW9CLElBQUkscUJBQXFCLElBQUksdUJBQXVCO0FBQ25HLDJCQUEyQixvQkFBb0IsSUFBSSxxQkFBcUIsSUFBSSx1QkFBdUI7QUFDbkcsNkJBQTZCLG9CQUFvQixJQUFJLHFCQUFxQixJQUFJLHVCQUF1QjtBQUNyRyw0QkFBNEIsb0JBQW9CLElBQUkscUJBQXFCLElBQUksdUJBQXVCO0FBQ3BHLDRCQUE0QixvQkFBb0IsSUFBSSxxQkFBcUIsSUFBSSx1QkFBdUI7QUFDcEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ2pGQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05ZO0FBQ1o7QUFDQSxDQUFrRDtBQUNkO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUFhLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC1wcm9qZWN0Ly4vc3JjL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC1wcm9qZWN0Ly4vc3JjL2ZldGNoRGF0YS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC1wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAtcHJvamVjdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIlxyXG5cclxuaW1wb3J0IHsgZ2V0SUQgfSBmcm9tIFwiLi9mZXRjaERhdGFcIlxyXG5leHBvcnQge3NlYXJjaEJ0bn1cclxuXHJcbmNvbnN0IHNlYXJjaEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2hCdG4nKVxyXG5cclxuc2VhcmNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgZ2V0SUQoKVxyXG59KVxyXG5cclxuIiwiXCJ1c2Ugc3RyaWN0XCJcclxuXHJcbi8vIGltcG9ydHt9XHJcblxyXG5leHBvcnQge2V4ZWN1dGVTZWFyY2gsIGdldElEfVxyXG5cclxuY29uc3Qgc2VhcmNoQmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaEJhcicpXHJcbmNvbnN0IHNlYXJjaE1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaE1vZGFsJylcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGV4ZWN1dGVTZWFyY2goKSB7XHJcblxyXG4gICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L2ZvcmVjYXN0P2lkPTQ1OTMxNDImYXBwaWQ9YjU1M2FiZWY3OGQ3NDU5YWU4ZmQxMzk4MGIzZTMwYjAnLCB7bW9kZTogJ2NvcnMnfSlcclxuICAgIGxldCBmZXRjaGVkRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG4gICAgY29uc29sZS5sb2coZmV0Y2hlZERhdGEpXHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldElEKCkge1xyXG4gICAgXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoIChgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC9kaXJlY3Q/cT0ke3NlYXJjaEJhci52YWx1ZX0mbGltaXQ9NSZhcHBpZD1iNTUzYWJlZjc4ZDc0NTlhZThmZDEzOTgwYjNlMzBiMGAsIHttb2RlOiAnY29ycyd9KVxyXG4gICAgICAgIGxldCBmZXRjaGVkRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG5cclxuICAgICAgICBsZXQgb3B0aW9uT25lID0gYCR7ZmV0Y2hlZERhdGFbMF0ubmFtZX0sICR7ZmV0Y2hlZERhdGFbMF0uc3RhdGV9LCAke2ZldGNoZWREYXRhWzBdLmNvdW50cnl9YDtcclxuICAgICAgICBsZXQgb3B0aW9uVHdvID0gYCR7ZmV0Y2hlZERhdGFbMV0ubmFtZX0sICR7ZmV0Y2hlZERhdGFbMV0uc3RhdGV9LCAke2ZldGNoZWREYXRhWzFdLmNvdW50cnl9YDtcclxuICAgICAgICBsZXQgb3B0aW9uVGhyZWUgPSBgJHtmZXRjaGVkRGF0YVsyXS5uYW1lfSwgJHtmZXRjaGVkRGF0YVsyXS5zdGF0ZX0sICR7ZmV0Y2hlZERhdGFbMl0uY291bnRyeX1gO1xyXG4gICAgICAgIGxldCBvcHRpb25Gb3VyID0gYCR7ZmV0Y2hlZERhdGFbM10ubmFtZX0sICR7ZmV0Y2hlZERhdGFbM10uc3RhdGV9LCAke2ZldGNoZWREYXRhWzNdLmNvdW50cnl9YDtcclxuICAgICAgICBsZXQgb3B0aW9uRml2ZSA9IGAke2ZldGNoZWREYXRhWzRdLm5hbWV9LCAke2ZldGNoZWREYXRhWzRdLnN0YXRlfSwgJHtmZXRjaGVkRGF0YVs0XS5jb3VudHJ5fWA7XHJcblxyXG4gICAgICAgIGNyZWF0ZU1vZGFsSGVhZGVyKClcclxuICAgICAgICBjcmVhdGVPcHRpb24ob3B0aW9uT25lKVxyXG4gICAgICAgIGNyZWF0ZU9wdGlvbihvcHRpb25Ud28pXHJcbiAgICAgICAgY3JlYXRlT3B0aW9uKG9wdGlvblRocmVlKVxyXG4gICAgICAgIGNyZWF0ZU9wdGlvbihvcHRpb25Gb3VyKVxyXG4gICAgICAgIGNyZWF0ZU9wdGlvbihvcHRpb25GaXZlKVxyXG4gICAgICAgIGNyZWF0ZU1vZGFsQ2xvc2UoKVxyXG4gICAgICAgIHNlYXJjaE1vZGFsLnNob3dNb2RhbCgpXHJcbiAgICB9IGNhdGNoIHtcclxuICAgICAgICBjcmVhdGVNb2RhbEVycigpXHJcbiAgICAgICAgY3JlYXRlTW9kYWxDbG9zZSgpXHJcbiAgICAgICAgc2VhcmNoTW9kYWwuc2hvd01vZGFsKClcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlT3B0aW9uKG9wdGlvbikge1xyXG4gICAgbGV0IG9wdGlvbkJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICBvcHRpb25CdG4uY2xhc3NMaXN0LmFkZCgnb3B0aW9uLWJ1dHRvbicpXHJcbiAgICBvcHRpb25CdG4udGV4dENvbnRlbnQgPSBvcHRpb25cclxuICAgIHNlYXJjaE1vZGFsLmFwcGVuZENoaWxkKG9wdGlvbkJ0bilcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTW9kYWxIZWFkZXIoKSB7XHJcbiAgICBsZXQgbW9kYWxIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXHJcbiAgICBtb2RhbEhlYWRlci50ZXh0Q29udGVudCA9IFwiV2UncmUgeW91IHNlYXJjaGluZyBmb3IuLlwiXHJcbiAgICBzZWFyY2hNb2RhbC5hcHBlbmRDaGlsZChtb2RhbEhlYWRlcilcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTW9kYWxFcnIoKSB7XHJcbiAgICBsZXQgbW9kYWxFcnIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXHJcbiAgICBtb2RhbEVyci5jbGFzc0xpc3QuYWRkKCdtb2RhbC1lcnJvcicpXHJcbiAgICBtb2RhbEVyci50ZXh0Q29udGVudCA9IFwiV2UgY291bGQgbm90IGZpbmQgeW91ciBzZWFyY2guIFBsZWFzZSB0cnkgYWdhaW4uXCJcclxuICAgIHNlYXJjaE1vZGFsLmFwcGVuZENoaWxkKG1vZGFsRXJyKVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVNb2RhbENsb3NlKCkge1xyXG4gICAgbGV0IGNsb3NlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKVxyXG4gICAgY2xvc2VCdG4uY2xhc3NMaXN0LmFkZCgnY2xvc2UtYnV0dG9uJylcclxuICAgIGNsb3NlQnRuLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgc2VhcmNoTW9kYWwucmVwbGFjZUNoaWxkcmVuKClcclxuICAgICAgICBzZWFyY2hNb2RhbC5jbG9zZSgpXHJcbiAgICB9XHJcbiAgICBjbG9zZUJ0bi50ZXh0Q29udGVudCA9ICdDbG9zZSAmIFRyeSBBZ2FpbidcclxuICAgIHNlYXJjaE1vZGFsLmFwcGVuZENoaWxkKGNsb3NlQnRuKVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCJcclxuXHJcbmltcG9ydCB7IGV4ZWN1dGVTZWFyY2gsIGdldElEIH0gZnJvbSBcIi4vZmV0Y2hEYXRhXCJcclxuaW1wb3J0IHsgc2VhcmNoQnRuIH0gZnJvbSBcIi4vZXZlbnRzXCJcclxuXHJcblxyXG5cclxuY29uc3QgZ2V0TG9jYXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9jYXRpb24nKVxyXG5jb25zdCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUnKVxyXG5jb25zdCB0ZW1wdXJhdHVyZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZW1wdXJhdHVyZScpXHJcbmNvbnN0IHN1bnJpc2VUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1bnJpc2VUZXh0JylcclxuY29uc3Qgc3Vuc2V0VGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdW5zZXRUZXh0JylcclxuY29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaHVtaWRpdHknKVxyXG5jb25zdCBkZXdQb2ludCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXdQb2ludCcpXHJcbmNvbnN0IHdpbmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2luZCcpXHJcbmNvbnN0IHZpc2liaWxpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlzaWJpbGl0eScpXHJcblxyXG5cclxuY29uc3QgaHJUZXh0T25lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hyVGV4dE9uZScpXHJcbmNvbnN0IGhyVGV4dFR3byA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoclRleHRUd28nKVxyXG5jb25zdCBoclRleHRUaHJlZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoclRleHRUaHJlZScpXHJcbmNvbnN0IGhyVGV4dEZvdXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaHJUZXh0Rm91cicpXHJcbmNvbnN0IGhyVGV4dEZpdmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaHJUZXh0Rml2ZScpXHJcbmNvbnN0IGhyVGV4dFNpeCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoclRleHRTaXgnKVxyXG5jb25zdCBoclRleHRTZXZlbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoclRleHRTZXZlbicpXHJcbmNvbnN0IGhyVGV4dEVpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hyVGV4dEVpZ2h0JylcclxuXHJcbmNvbnN0IGhySW1nT25lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hySW1nT25lJylcclxuY29uc3QgaHJJbWdUd28gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaHJJbWdUd28nKVxyXG5jb25zdCBockltZ1RocmVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hySW1nVGhyZWUnKVxyXG5jb25zdCBockltZ0ZvdXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaHJJbWdGb3VyJylcclxuY29uc3QgaHJJbWdGaXZlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hySW1nRml2ZScpXHJcbmNvbnN0IGhySW1nU2l4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hySW1nU2l4JylcclxuY29uc3QgaHJJbWdTZXZlbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdockltZ1NldmVuJylcclxuY29uc3QgaHJJbWdFaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdockltZ0VpZ2h0JylcclxuXHJcbmNvbnN0IGhyVGVtcE9uZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoclRlbXBPbmUnKVxyXG5jb25zdCBoclRlbXBUd28gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaHJUZW1wVHdvJylcclxuY29uc3QgaHJUZW1wVGhyZWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaHJUZW1wVGhyZWUnKVxyXG5jb25zdCBoclRlbXBGb3VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hyVGVtcEZvdXInKVxyXG5jb25zdCBoclRlbXBGaXZlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hyVGVtcEZpdmUnKVxyXG5jb25zdCBoclRlbXBTaXggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaHJUZW1wU2l4JylcclxuY29uc3QgaHJUZW1wU2V2ZW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaHJUZW1wU2V2ZW4nKVxyXG5jb25zdCBoclRlbXBFaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoclRlbXBFaWdodCcpXHJcblxyXG5jb25zdCBmb3JlY2FzdFRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9yZWNhc3RUZXh0JylcclxuXHJcbmNvbnN0IGRheURhdGVPbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF5RGF0ZU9uZScpXHJcbmNvbnN0IGRheURhdGVUd28gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF5RGF0ZVR3bycpXHJcbmNvbnN0IGRheURhdGVUaHJlZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXlEYXRlVGhyZWUnKVxyXG5jb25zdCBkYXlEYXRlRm91ciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXlEYXRlRm91cicpXHJcbmNvbnN0IGRheURhdGVGaXZlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RheURhdGVGaXZlJylcclxuY29uc3QgZGF5RGF0ZVNpeCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXlEYXRlU2l4JylcclxuY29uc3QgZGF5RGF0ZVNldmVuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RheURhdGVTZXZlbicpXHJcblxyXG5jb25zdCBkYXlJbWdPbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF5SW1nT25lJylcclxuY29uc3QgZGF5SW1nVHdvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RheUltZ1R3bycpXHJcbmNvbnN0IGRheUltZ1RocmVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RheUltZ1RocmVlJylcclxuY29uc3QgZGF5SW1nRm91ciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXlJbWdGb3VyJylcclxuY29uc3QgZGF5SW1nRml2ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXlJbWdGaXZlJylcclxuY29uc3QgZGF5SW1nU2l4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RheUltZ1NpeCcpXHJcbmNvbnN0IGRheUltZ1NldmVuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RheUltZ1NldmVuJylcclxuXHJcbmNvbnN0IGZvcmVjYXN0T25lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZvcmVjYXN0T25lJylcclxuY29uc3QgZm9yZWNhc3RUd28gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9yZWNhc3RUd28nKVxyXG5jb25zdCBmb3JlY2FzdFRocmVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZvcmVjYXN0VGhyZWUnKVxyXG5jb25zdCBmb3JlY2FzdEZvdXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9yZWNhc3RGb3VyJylcclxuY29uc3QgZm9yZWNhc3RGaXZlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZvcmVjYXN0Rml2ZScpXHJcbmNvbnN0IGZvcmVjYXN0U2l4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZvcmVjYXN0U2l4JylcclxuY29uc3QgZm9yZWNhc3RTZXZlbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JlY2FzdFNldmVuJylcclxuXHJcbmNvbnN0IGRheVJhaW5PbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF5UmFpbk9uZScpXHJcbmNvbnN0IGRheVJhaW5Ud28gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF5UmFpblR3bycpXHJcbmNvbnN0IGRheVJhaW5UaHJlZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXlSYWluVGhyZWUnKVxyXG5jb25zdCBkYXlSYWluRm91ciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXlSYWluRm91cicpXHJcbmNvbnN0IGRheVJhaW5GaXZlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RheVJhaW5GaXZlJylcclxuY29uc3QgZGF5UmFpblNpeCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXlSYWluU2l4JylcclxuY29uc3QgZGF5UmFpblNldmVuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RheVJhaW5TZXZlbicpXHJcblxyXG5leGVjdXRlU2VhcmNoKCkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=