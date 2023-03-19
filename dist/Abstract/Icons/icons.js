"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Globo = void 0;
var react_1 = __importDefault(require("react"));
var css_1 = require("@emotion/css");
var GloboStyles = function (styles) { return (0, css_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    width: ", ";\n    height: ", ";\n    padding: ", ";\n    background-color: ", ";\n    border-radius: ", ";\n    color: ", ";\n    font-weight: ", ";\n    margin: ", ";\n    font-size: ", ";\n\n    \n"], ["\n    width: ", ";\n    height: ", ";\n    padding: ", ";\n    background-color: ", ";\n    border-radius: ", ";\n    color: ", ";\n    font-weight: ", ";\n    margin: ", ";\n    font-size: ", ";\n\n    \n"])), styles.width || '30px', styles.height || '30px', styles.padding || '5px 15px', styles.backgroundColor || '#324375', styles.borderRadius || '100%', styles.color || '#ffffff', styles.fontWeight || '800', styles.margin || '2% 2% 2% 6%', styles.fontSize || '20px'); };
var Globo = function (_a) {
    var _b = _a.styles, styles = _b === void 0 ? {} : _b, step = _a.step, _c = _a.globoClass, globoClass = _c === void 0 ? '' : _c;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("span", { className: (0, css_1.cx)(GloboStyles(styles), globoClass) }, step)));
};
exports.Globo = Globo;
var templateObject_1;
//# sourceMappingURL=icons.js.map