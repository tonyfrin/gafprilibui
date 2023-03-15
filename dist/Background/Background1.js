"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Background1 = void 0;
var react_1 = __importDefault(require("react"));
var css_1 = require("@emotion/css");
var Background1Styles = function (image) { return (0, css_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    background-image: url(", ");\n    background-size: 185vh;\n    background-repeat: no-repeat;\n    min-height: 100vh;\n"], ["\n    background-image: url(", ");\n    background-size: 185vh;\n    background-repeat: no-repeat;\n    min-height: 100vh;\n"])), image); };
var Background1 = function (_a) {
    var children = _a.children, image = _a.image;
    return (react_1.default.createElement("div", { className: Background1Styles(image) }, children));
};
exports.Background1 = Background1;
var templateObject_1;
//# sourceMappingURL=Background1.js.map