"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Box1 = void 0;
var react_1 = __importDefault(require("react"));
var css_1 = require("@emotion/css");
var Box1Styles = function (styles) {
    var _a, _b, _c, _d, _e, _f;
    return (0, css_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: ", ";\n  padding: ", ";\n  width: ", ";\n  border-radius: ", ";\n  height: ", ";\n\n  margin: 30px auto;\n\n  @media (max-width: 500px) {\n    padding: ", ";\n    width: ", ";\n  }\n\n  @media (max-width: 400px) {\n    padding: ", ";\n    width: ", ";\n  }\n\n  @media (max-width: 300px) {\n    padding: ", ";\n    width: ", ";\n  }\n"], ["\n  background-color: ", ";\n  padding: ", ";\n  width: ", ";\n  border-radius: ", ";\n  height: ", ";\n\n  margin: 30px auto;\n\n  @media (max-width: 500px) {\n    padding: ", ";\n    width: ", ";\n  }\n\n  @media (max-width: 400px) {\n    padding: ", ";\n    width: ", ";\n  }\n\n  @media (max-width: 300px) {\n    padding: ", ";\n    width: ", ";\n  }\n"])), styles.backgroundColor || '#fff', styles.padding || '40px', styles.width || '70%', styles.borderRadius || '10px', styles.height || '60vh', ((_a = styles.media500Style) === null || _a === void 0 ? void 0 : _a.padding) || '15px 35px', ((_b = styles.media500Style) === null || _b === void 0 ? void 0 : _b.width) || '75%', ((_c = styles.media400Style) === null || _c === void 0 ? void 0 : _c.padding) || '15px 35px', ((_d = styles.media400Style) === null || _d === void 0 ? void 0 : _d.width) || '78%', ((_e = styles.media400Style) === null || _e === void 0 ? void 0 : _e.padding) || '15px 40px 15px 8px', ((_f = styles.media400Style) === null || _f === void 0 ? void 0 : _f.width) || '80%');
};
var Box1 = function (_a) {
    var _b = _a.styles, styles = _b === void 0 ? {} : _b, children = _a.children;
    return react_1.default.createElement("div", { className: Box1Styles(styles) }, children);
};
exports.Box1 = Box1;
var templateObject_1;
//# sourceMappingURL=Box.js.map