/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nconst layout = {\n  getMenu() {\n    return `<section class=\"control__btn-wrap\">\n          <input\n            type=\"radio\"\n            name=\"control\"\n            id=\"control__new-task\"\n            class=\"control__input visually-hidden\"\n          />\n          <label for=\"control__new-task\" class=\"control__label control__label--new-task\"\n            >+ ADD NEW TASK</label\n          >\n          <input\n            type=\"radio\"\n            name=\"control\"\n            id=\"control__task\"\n            class=\"control__input visually-hidden\"\n            checked\n          />\n          <label for=\"control__task\" class=\"control__label\">TASKS</label>\n          <input\n            type=\"radio\"\n            name=\"control\"\n            id=\"control__statistic\"\n            class=\"control__input visually-hidden\"\n          />\n          <label for=\"control__statistic\" class=\"control__label\"\n            >STATISTICS</label\n          >\n        </section>`;\n  },\n  getSearch() {\n    return `\n    <section class=\"main__search search container\">\n        <input\n          type=\"text\"\n          id=\"search__input\"\n          class=\"search__input\"\n          placeholder=\"START TYPING — SEARCH BY WORD, #HASHTAG OR DATE\"\n        />\n        <label class=\"visually-hidden\" for=\"search__input\">Search</label>\n      </section>`;\n  },\n  getFilters() {\n    return `\n    <section class=\"main__filter filter container\">\n        <input\n          type=\"radio\"\n          id=\"filter__all\"\n          class=\"filter__input visually-hidden\"\n          name=\"filter\"\n          checked\n        />\n        <label for=\"filter__all\" class=\"filter__label\">\n          All <span class=\"filter__all-count\">13</span></label\n        >\n        <input\n          type=\"radio\"\n          id=\"filter__overdue\"\n          class=\"filter__input visually-hidden\"\n          name=\"filter\"\n          disabled\n        />\n        <label for=\"filter__overdue\" class=\"filter__label\"\n          >Overdue <span class=\"filter__overdue-count\">0</span></label\n        >\n        <input\n          type=\"radio\"\n          id=\"filter__today\"\n          class=\"filter__input visually-hidden\"\n          name=\"filter\"\n          disabled\n        />\n        <label for=\"filter__today\" class=\"filter__label\"\n          >Today <span class=\"filter__today-count\">0</span></label\n        >\n        <input\n          type=\"radio\"\n          id=\"filter__favorites\"\n          class=\"filter__input visually-hidden\"\n          name=\"filter\"\n        />\n        <label for=\"filter__favorites\" class=\"filter__label\"\n          >Favorites <span class=\"filter__favorites-count\">1</span></label\n        >\n        <input\n          type=\"radio\"\n          id=\"filter__repeating\"\n          class=\"filter__input visually-hidden\"\n          name=\"filter\"\n        />\n        <label for=\"filter__repeating\" class=\"filter__label\"\n          >Repeating <span class=\"filter__repeating-count\">1</span></label\n        >\n        <input\n          type=\"radio\"\n          id=\"filter__tags\"\n          class=\"filter__input visually-hidden\"\n          name=\"filter\"\n        />\n        <label for=\"filter__tags\" class=\"filter__label\"\n          >Tags <span class=\"filter__tags-count\">1</span></label\n        >\n        <input\n          type=\"radio\"\n          id=\"filter__archive\"\n          class=\"filter__input visually-hidden\"\n          name=\"filter\"\n        />\n        <label for=\"filter__archive\" class=\"filter__label\"\n          >Archive <span class=\"filter__archive-count\">115</span></label\n        >\n      </section>`;\n  },\n  getBoard() {\n    return `<section class=\"board container\">\n        <div class=\"board__filter-list\">\n          <a href=\"#\" class=\"board__filter\">SORT BY DEFAULT</a>\n          <a href=\"#\" class=\"board__filter\">SORT BY DATE up</a>\n          <a href=\"#\" class=\"board__filter\">SORT BY DATE down</a>\n        </div>\n\n        <div class=\"board__tasks\"></div>\n      </section>`;\n  },\n  getLoadMoreButton() {\n    return `<button class=\"load-more\" type=\"button\">load more</button>`;\n  }\n};\n\nconst cardLayout = {\n  getEditCard() {\n    return `<article class=\"card card--edit card--yellow card--repeat\">\n            <form class=\"card__form\" method=\"get\">\n              <div class=\"card__inner\">\n                <div class=\"card__control\">\n                  <button type=\"button\" class=\"card__btn card__btn--archive\">\n                    archive\n                  </button>\n                  <button\n                    type=\"button\"\n                    class=\"card__btn card__btn--favorites card__btn--disabled\"\n                  >\n                    favorites\n                  </button>\n                </div>\n\n                <div class=\"card__color-bar\">\n                  <svg class=\"card__color-bar-wave\" width=\"100%\" height=\"10\">\n                    <use xlink:href=\"#wave\"></use>\n                  </svg>\n                </div>\n\n                <div class=\"card__textarea-wrap\">\n                  <label>\n                    <textarea\n                      class=\"card__text\"\n                      placeholder=\"Start typing your text here...\"\n                      name=\"text\"\n                    >Here is a card with filled data</textarea>\n                  </label>\n                </div>\n\n                <div class=\"card__settings\">\n                  <div class=\"card__details\">\n                    <div class=\"card__dates\">\n                      <button class=\"card__date-deadline-toggle\" type=\"button\">\n                        date: <span class=\"card__date-status\">yes</span>\n                      </button>\n\n                      <fieldset class=\"card__date-deadline\">\n                        <label class=\"card__input-deadline-wrap\">\n                          <input\n                            class=\"card__date\"\n                            type=\"text\"\n                            placeholder=\"\"\n                            name=\"date\"\n                            value=\"23 September 11:15 PM\"\n                          />\n                        </label>\n                      </fieldset>\n\n                      <button class=\"card__repeat-toggle\" type=\"button\">\n                        repeat:<span class=\"card__repeat-status\">yes</span>\n                      </button>\n\n                      <fieldset class=\"card__repeat-days\">\n                        <div class=\"card__repeat-days-inner\">\n                          <input\n                            class=\"visually-hidden card__repeat-day-input\"\n                            type=\"checkbox\"\n                            id=\"repeat-mo-4\"\n                            name=\"repeat\"\n                            value=\"mo\"\n                          />\n                          <label class=\"card__repeat-day\" for=\"repeat-mo-4\"\n                            >mo</label\n                          >\n                          <input\n                            class=\"visually-hidden card__repeat-day-input\"\n                            type=\"checkbox\"\n                            id=\"repeat-tu-4\"\n                            name=\"repeat\"\n                            value=\"tu\"\n                            checked\n                          />\n                          <label class=\"card__repeat-day\" for=\"repeat-tu-4\"\n                            >tu</label\n                          >\n                          <input\n                            class=\"visually-hidden card__repeat-day-input\"\n                            type=\"checkbox\"\n                            id=\"repeat-we-4\"\n                            name=\"repeat\"\n                            value=\"we\"\n                          />\n                          <label class=\"card__repeat-day\" for=\"repeat-we-4\"\n                            >we</label\n                          >\n                          <input\n                            class=\"visually-hidden card__repeat-day-input\"\n                            type=\"checkbox\"\n                            id=\"repeat-th-4\"\n                            name=\"repeat\"\n                            value=\"th\"\n                          />\n                          <label class=\"card__repeat-day\" for=\"repeat-th-4\"\n                            >th</label\n                          >\n                          <input\n                            class=\"visually-hidden card__repeat-day-input\"\n                            type=\"checkbox\"\n                            id=\"repeat-fr-4\"\n                            name=\"repeat\"\n                            value=\"fr\"\n                            checked\n                          />\n                          <label class=\"card__repeat-day\" for=\"repeat-fr-4\"\n                            >fr</label\n                          >\n                          <input\n                            class=\"visually-hidden card__repeat-day-input\"\n                            type=\"checkbox\"\n                            name=\"repeat\"\n                            value=\"sa\"\n                            id=\"repeat-sa-4\"\n                          />\n                          <label class=\"card__repeat-day\" for=\"repeat-sa-4\"\n                            >sa</label\n                          >\n                          <input\n                            class=\"visually-hidden card__repeat-day-input\"\n                            type=\"checkbox\"\n                            id=\"repeat-su-4\"\n                            name=\"repeat\"\n                            value=\"su\"\n                            checked\n                          />\n                          <label class=\"card__repeat-day\" for=\"repeat-su-4\"\n                            >su</label\n                          >\n                        </div>\n                      </fieldset>\n                    </div>\n\n                    <div class=\"card__hashtag\">\n                      <div class=\"card__hashtag-list\">\n                        <span class=\"card__hashtag-inner\">\n                          <input\n                            type=\"hidden\"\n                            name=\"hashtag\"\n                            value=\"repeat\"\n                            class=\"card__hashtag-hidden-input\"\n                          />\n                          <p class=\"card__hashtag-name\">\n                            #repeat\n                          </p>\n                          <button type=\"button\" class=\"card__hashtag-delete\">\n                            delete\n                          </button>\n                        </span>\n\n                        <span class=\"card__hashtag-inner\">\n                          <input\n                            type=\"hidden\"\n                            name=\"hashtag\"\n                            value=\"repeat\"\n                            class=\"card__hashtag-hidden-input\"\n                          />\n                          <p class=\"card__hashtag-name\">\n                            #cinema\n                          </p>\n                          <button type=\"button\" class=\"card__hashtag-delete\">\n                            delete\n                          </button>\n                        </span>\n\n                        <span class=\"card__hashtag-inner\">\n                          <input\n                            type=\"hidden\"\n                            name=\"hashtag\"\n                            value=\"repeat\"\n                            class=\"card__hashtag-hidden-input\"\n                          />\n                          <p class=\"card__hashtag-name\">\n                            #entertaiment\n                          </p>\n                          <button type=\"button\" class=\"card__hashtag-delete\">\n                            delete\n                          </button>\n                        </span>\n                      </div>\n\n                      <label>\n                        <input\n                          type=\"text\"\n                          class=\"card__hashtag-input\"\n                          name=\"hashtag-input\"\n                          placeholder=\"Type new hashtag here\"\n                        />\n                      </label>\n                    </div>\n                  </div>\n\n                  <div class=\"card__colors-inner\">\n                    <h3 class=\"card__colors-title\">Color</h3>\n                    <div class=\"card__colors-wrap\">\n                      <input\n                        type=\"radio\"\n                        id=\"color-black-4\"\n                        class=\"card__color-input card__color-input--black visually-hidden\"\n                        name=\"color\"\n                        value=\"black\"\n                      />\n                      <label\n                        for=\"color-black-4\"\n                        class=\"card__color card__color--black\"\n                        >black</label\n                      >\n                      <input\n                        type=\"radio\"\n                        id=\"color-yellow-4\"\n                        class=\"card__color-input card__color-input--yellow visually-hidden\"\n                        name=\"color\"\n                        value=\"yellow\"\n                        checked\n                      />\n                      <label\n                        for=\"color-yellow-4\"\n                        class=\"card__color card__color--yellow\"\n                        >yellow</label\n                      >\n                      <input\n                        type=\"radio\"\n                        id=\"color-blue-4\"\n                        class=\"card__color-input card__color-input--blue visually-hidden\"\n                        name=\"color\"\n                        value=\"blue\"\n                      />\n                      <label\n                        for=\"color-blue-4\"\n                        class=\"card__color card__color--blue\"\n                        >blue</label\n                      >\n                      <input\n                        type=\"radio\"\n                        id=\"color-green-4\"\n                        class=\"card__color-input card__color-input--green visually-hidden\"\n                        name=\"color\"\n                        value=\"green\"\n                      />\n                      <label\n                        for=\"color-green-4\"\n                        class=\"card__color card__color--green\"\n                        >green</label\n                      >\n                      <input\n                        type=\"radio\"\n                        id=\"color-pink-4\"\n                        class=\"card__color-input card__color-input--pink visually-hidden\"\n                        name=\"color\"\n                        value=\"pink\"\n                      />\n                      <label\n                        for=\"color-pink-4\"\n                        class=\"card__color card__color--pink\"\n                        >pink</label\n                      >\n                    </div>\n                  </div>\n                </div>\n\n                <div class=\"card__status-btns\">\n                  <button class=\"card__save\" type=\"submit\">save</button>\n                  <button class=\"card__delete\" type=\"button\">delete</button>\n                </div>\n              </div>\n            </form>\n          </article>`;\n  },\n  getSimpleCard(color) {\n    return `<article class=\"card card--${color}\">\n            <div class=\"card__form\">\n              <div class=\"card__inner\">\n                <div class=\"card__control\">\n                  <button type=\"button\" class=\"card__btn card__btn--edit\">\n                    edit\n                  </button>\n                  <button type=\"button\" class=\"card__btn card__btn--archive\">\n                    archive\n                  </button>\n                  <button\n                    type=\"button\"\n                    class=\"card__btn card__btn--favorites card__btn--disabled\"\n                  >\n                    favorites\n                  </button>\n                </div>\n\n                <div class=\"card__color-bar\">\n                  <svg class=\"card__color-bar-wave\" width=\"100%\" height=\"10\">\n                    <use xlink:href=\"#wave\"></use>\n                  </svg>\n                </div>\n\n                <div class=\"card__textarea-wrap\">\n                  <p class=\"card__text\">Example default task with default color.</p>\n                </div>\n\n                <div class=\"card__settings\">\n                  <div class=\"card__details\">\n                    <div class=\"card__dates\">\n                      <div class=\"card__date-deadline\">\n                        <p class=\"card__input-deadline-wrap\">\n                          <span class=\"card__date\">23 September</span>\n                          <span class=\"card__time\">11:15 PM</span>\n                        </p>\n                      </div>\n                    </div>\n\n                    <div class=\"card__hashtag\">\n                      <div class=\"card__hashtag-list\">\n                        <span class=\"card__hashtag-inner\">\n                          <span class=\"card__hashtag-name\">\n                            #todo\n                          </span>\n                        </span>\n\n                        <span class=\"card__hashtag-inner\">\n                          <span class=\"card__hashtag-name\">\n                            #personal\n                          </span>\n                        </span>\n\n                        <span class=\"card__hashtag-inner\">\n                          <span class=\"card__hashtag-name\">\n                            #important\n                          </span>\n                        </span>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </article>`;\n  }\n};\n\nconst renderTemplateInComponent = (component, template) => {\n  component.insertAdjacentHTML(`beforeend`, template);\n};\n\nconst mainBlock = document.querySelector(`.main`);\nconst mainControlBlock = mainBlock.querySelector(`.main__control`);\n\nrenderTemplateInComponent(mainControlBlock, layout.getMenu());\nrenderTemplateInComponent(mainBlock, layout.getSearch());\nrenderTemplateInComponent(mainBlock, layout.getFilters());\nrenderTemplateInComponent(mainBlock, layout.getBoard());\n\nconst boardContainer = document.querySelector(`.board.container`);\nconst boardTasksContainer = boardContainer.querySelector(`.board__tasks`);\n\nrenderTemplateInComponent(boardTasksContainer, cardLayout.getEditCard());\nrenderTemplateInComponent(boardTasksContainer, cardLayout.getSimpleCard(`black`));\nrenderTemplateInComponent(boardTasksContainer, cardLayout.getSimpleCard(`blue`));\nrenderTemplateInComponent(boardTasksContainer, cardLayout.getSimpleCard(`yellow`));\nrenderTemplateInComponent(boardContainer, layout.getLoadMoreButton());\n\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ })

/******/ });