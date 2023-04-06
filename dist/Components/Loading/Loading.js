"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Loading = void 0;
var react_1 = __importDefault(require("react"));
var css_1 = require("@emotion/css");
var mainStyle = function (styles) {
    var _a, _b;
    return (0, css_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: ", ";\n  justify-content: ", ";\n  padding: ", ";\n\n  @media (max-width: 600px) {\n    padding: ", ";\n  }\n\n  @media (max-width: 300px) {\n    padding: ", ";\n  }\n"], ["\n  display: ", ";\n  justify-content: ", ";\n  padding: ", ";\n\n  @media (max-width: 600px) {\n    padding: ", ";\n  }\n\n  @media (max-width: 300px) {\n    padding: ", ";\n  }\n"])), styles.display || 'flex', styles.justifyContent || 'center', styles.padding || '170px', ((_a = styles.media600Style) === null || _a === void 0 ? void 0 : _a.padding) || '130px', ((_b = styles.media300Style) === null || _b === void 0 ? void 0 : _b.padding) || '90px');
};
var spin = (0, css_1.keyframes)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    0% { transform: rotate(0deg); }\n    100% { transform: rotate(360deg); }\n"], ["\n    0% { transform: rotate(0deg); }\n    100% { transform: rotate(360deg); }\n"])));
var divStyles = function (styles) { return (0, css_1.css)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  animation: ", " ", ";\n  border: ", ";\n  border-top: ", ";\n  border-radius: ", ";\n  width: ", ";\n  height: ", ";\n"], ["\n  animation: ", " ", ";\n  border: ", ";\n  border-top: ", ";\n  border-radius: ", ";\n  width: ", ";\n  height: ", ";\n"])), spin, styles.animation || '2s linear infinite', styles.border || '6px solid #eee', styles.borderTop || '6px solid #077bb4', styles.borderRadius || '50%', styles.width || '80px', styles.height || '80px'); };
var Loading = function (_a) {
    var _b = _a.mainStyles, mainStyles = _b === void 0 ? {} : _b, _c = _a.classMain, classMain = _c === void 0 ? '' : _c, _d = _a.classDiv, classDiv = _d === void 0 ? '' : _d, _e = _a.divStyle, divStyle = _e === void 0 ? {} : _e;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("main", { className: (0, css_1.cx)(mainStyle(mainStyles), classMain) },
            react_1.default.createElement("div", { className: (0, css_1.cx)(divStyles(divStyle), classDiv) }))));
};
exports.Loading = Loading;
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=Loading.js.map