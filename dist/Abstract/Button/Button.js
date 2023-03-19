"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
var react_1 = __importDefault(require("react"));
var css_1 = require("@emotion/css");
var ButtonStyles = function (styles) {
    var _a, _b, _c, _d;
    return (0, css_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: ", ";\n  font-size: ", ";\n  border-radius: ", ";\n  padding: ", ";\n  user-select: ", ";\n  text-align: ", ";\n  text-decoration: ", ";\n  vertical-align: ", ";\n  display: ", ";\n  font-weight: ", ";\n  line-height: ", ";\n  color: ", ";\n  cursor: ", ";\n  box-shadow: ", ";\n\n  @media (max-width: 800px) {\n    font-size: ", ";\n  }\n\n  @media (max-width: 750px) {\n    font-size: ", ";\n  }\n\n  @media (max-width: 400px) {\n    font-size: ", ";\n  }\n\n  @media (max-width: 400px) {\n    font-size: ", ";\n  }\n"], ["\n  background-color: ", ";\n  font-size: ", ";\n  border-radius: ", ";\n  padding: ", ";\n  user-select: ", ";\n  text-align: ", ";\n  text-decoration: ", ";\n  vertical-align: ", ";\n  display: ", ";\n  font-weight: ", ";\n  line-height: ", ";\n  color: ", ";\n  cursor: ", ";\n  box-shadow: ", ";\n\n  @media (max-width: 800px) {\n    font-size: ", ";\n  }\n\n  @media (max-width: 750px) {\n    font-size: ", ";\n  }\n\n  @media (max-width: 400px) {\n    font-size: ", ";\n  }\n\n  @media (max-width: 400px) {\n    font-size: ", ";\n  }\n"])), styles.backgroundColor || 'rgb(7, 178, 231)', styles.fontSize || '16px', styles.borderRadius || '0.25rem', styles.padding || '0.375rem 0.75rem', styles.userSelect || 'none', styles.textAlign || 'center', styles.textDecoration || 'none', styles.verticalAlign || 'middle', styles.display || 'inline-block', styles.fontWeight || '400', styles.lineHeight || '1.5', styles.color || '#ffffff', styles.cursor || 'pointer', styles.boxShadow || '0 1px 6px 0 #20212447', ((_a = styles.media800Style) === null || _a === void 0 ? void 0 : _a.fontSize) || '14px', ((_b = styles.media750Style) === null || _b === void 0 ? void 0 : _b.fontSize) || '12px', ((_c = styles.media400Style) === null || _c === void 0 ? void 0 : _c.fontSize) || '10px', ((_d = styles.media300Style) === null || _d === void 0 ? void 0 : _d.fontSize) || '8px');
};
var Button = function (_a) {
    var _b = _a.styles, styles = _b === void 0 ? {} : _b, _c = _a.buttonProps, buttonProps = _c === void 0 ? {} : _c, _d = _a.Class, Class = _d === void 0 ? '' : _d, title = _a.title;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("button", __assign({ className: (0, css_1.cx)(ButtonStyles(styles), Class) }, buttonProps), title)));
};
exports.Button = Button;
var templateObject_1;
//# sourceMappingURL=Button.js.map