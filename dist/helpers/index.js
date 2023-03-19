"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationSelect = exports.removeClass = exports.addClass = void 0;
var addClass = function (element, className) {
    var input = document.getElementById(element);
    if (input && input.classList && !input.classList.contains(className)) {
        input.classList.add(className);
    }
};
exports.addClass = addClass;
var removeClass = function (element, className) {
    var input = document.getElementById(element);
    if (input && input.classList && input.classList.contains(className)) {
        input.classList.remove(className);
    }
};
exports.removeClass = removeClass;
var validationSelect = function (value, componentId, className) {
    if (value === '') {
        (0, exports.addClass)(componentId, className);
        return false;
    }
    else {
        (0, exports.removeClass)(componentId, className);
        return true;
    }
};
exports.validationSelect = validationSelect;
//# sourceMappingURL=index.js.map