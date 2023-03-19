"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GloboTitle = exports.Title2 = exports.Title1 = void 0;
var react_1 = __importDefault(require("react"));
var css_1 = require("@emotion/css");
var Title1Styles = function (styles) {
    var _a, _b, _c;
    return (0, css_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  text-align: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  margin-bottom: ", ";\n  margin-top: ", ";\n\n  @media (max-width: 750px) {\n    font-size: ", ";\n  }\n\n  @media (max-width: 400px) {\n    font-size: ", ";\n  }\n\n  @media (max-width: 300px) {\n    font-size: ", ";\n  }\n"], ["\n  text-align: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  margin-bottom: ", ";\n  margin-top: ", ";\n\n  @media (max-width: 750px) {\n    font-size: ", ";\n  }\n\n  @media (max-width: 400px) {\n    font-size: ", ";\n  }\n\n  @media (max-width: 300px) {\n    font-size: ", ";\n  }\n"])), styles.textAlign || 'left', styles.fontSize || '28px', styles.fontWeight || '600', styles.marginBottom || '5px', styles.marginTop || '0px', ((_a = styles.media750Style) === null || _a === void 0 ? void 0 : _a.fontSize) || '20px', ((_b = styles.media400Style) === null || _b === void 0 ? void 0 : _b.fontSize) || '18px', ((_c = styles.media300Style) === null || _c === void 0 ? void 0 : _c.fontSize) || '16px');
};
var Title1 = function (_a) {
    var _b = _a.styles, styles = _b === void 0 ? {} : _b, title = _a.title;
    return react_1.default.createElement("h1", { className: Title1Styles(styles) }, title);
};
exports.Title1 = Title1;
var Title2Styles = function (styles) {
    var _a, _b, _c;
    return (0, css_1.css)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-size: ", ";\n  text-transform: ", ";\n  font-weight: ", ";\n  margin: ", ";\n\n  @media (max-width: 750px) {\n    font-size: ", ";\n  }\n\n  @media (max-width: 400px) {\n    font-size: ", ";\n  }\n\n  @media (max-width: 300px) {\n    font-size: ", ";\n  }\n"], ["\n  font-size: ", ";\n  text-transform: ", ";\n  font-weight: ", ";\n  margin: ", ";\n\n  @media (max-width: 750px) {\n    font-size: ", ";\n  }\n\n  @media (max-width: 400px) {\n    font-size: ", ";\n  }\n\n  @media (max-width: 300px) {\n    font-size: ", ";\n  }\n"])), styles.fontSize || '18px', styles.textTransform || 'capitalize', styles.fontWeight || '400', styles.margin || '0px 0px 10px 0px', ((_a = styles.media750Style) === null || _a === void 0 ? void 0 : _a.fontSize) || '14px', ((_b = styles.media400Style) === null || _b === void 0 ? void 0 : _b.fontSize) || '12px', ((_c = styles.media300Style) === null || _c === void 0 ? void 0 : _c.fontSize) || '10px');
};
var Title2 = function (_a) {
    var _b = _a.styles, styles = _b === void 0 ? {} : _b, title = _a.title;
    return react_1.default.createElement("h1", { className: Title2Styles(styles) }, title);
};
exports.Title2 = Title2;
var GloboTitleStyles = function (styles) { return (0, css_1.css)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n"], ["\n  margin: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n"])), styles.margin || 'auto 0px', styles.fontSize || '20px', styles.fontWeight || '800'); };
var GloboTitle = function (_a) {
    var _b = _a.styles, styles = _b === void 0 ? {} : _b, title = _a.title, _c = _a.globoTitleClass, globoTitleClass = _c === void 0 ? '' : _c;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("span", { className: (0, css_1.cx)(GloboTitleStyles(styles), globoTitleClass) }, title)));
};
exports.GloboTitle = GloboTitle;
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=Title.js.map