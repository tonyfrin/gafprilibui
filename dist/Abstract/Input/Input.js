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
exports.GsSelect = exports.Input = void 0;
var react_1 = __importDefault(require("react"));
var css_1 = require("@emotion/css");
var react_select_1 = __importDefault(require("react-select"));
var Containers_1 = require("../Containers");
var InputStyles = function (styles) {
    var _a, _b, _c;
    return (0, css_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: ", ";\n  border: ", ";\n  padding: ", ";\n  text-align: ", ";\n  outline: ", ";\n  border-radius: ", ";\n  background-color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  color: ", ";\n  box-sizing: border-box;\n\n  ::placeholder {\n    font-weight: 300;\n    color: #8d8d8d;\n  }\n\n  @media (max-width: 750px) {\n    font-size: ", ";\n  }\n\n  @media (max-width: 400px) {\n    font-size: ", ";\n  }\n\n  @media (max-width: 300px) {\n    font-size: ", ";\n  }\n"], ["\n  width: ", ";\n  border: ", ";\n  padding: ", ";\n  text-align: ", ";\n  outline: ", ";\n  border-radius: ", ";\n  background-color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  color: ", ";\n  box-sizing: border-box;\n\n  ::placeholder {\n    font-weight: 300;\n    color: #8d8d8d;\n  }\n\n  @media (max-width: 750px) {\n    font-size: ", ";\n  }\n\n  @media (max-width: 400px) {\n    font-size: ", ";\n  }\n\n  @media (max-width: 300px) {\n    font-size: ", ";\n  }\n"])), styles.width || '100%', styles.border || '2px solid #eaeaea', styles.padding || '8px 19px', styles.textAlign || 'left', styles.outline || 0, styles.borderRadius || '6px', styles.backgroundColor || '#fff', styles.fontSize || '15px', styles.fontWeight || 300, styles.color || '#8D8D8D', ((_a = styles.media750Style) === null || _a === void 0 ? void 0 : _a.fontSize) || '12px', ((_b = styles.media400Style) === null || _b === void 0 ? void 0 : _b.fontSize) || '10px', ((_c = styles.media300Style) === null || _c === void 0 ? void 0 : _c.fontSize) || '8px');
};
var Input = function (_a) {
    var _b = _a.styles, styles = _b === void 0 ? {} : _b, _c = _a.inputClass, inputClass = _c === void 0 ? '' : _c, _d = _a.inputProps, inputProps = _d === void 0 ? {} : _d, _e = _a.containerStyles, containerStyles = _e === void 0 ? {} : _e, _f = _a.containerRowClass, containerRowClass = _f === void 0 ? '' : _f, _g = _a.containerClass, containerClass = _g === void 0 ? '' : _g;
    return (react_1.default.createElement(Containers_1.ContainerInput, { styles: containerStyles, rowClass: containerRowClass, containerClass: containerClass },
        react_1.default.createElement("input", __assign({ className: (0, css_1.cx)(InputStyles(styles), inputClass) }, inputProps))));
};
exports.Input = Input;
var SelectStyles = function (styles) {
    var _a, _b, _c, _d;
    return (0, css_1.css)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-size: ", ";\n  font-weight: ", ";\n  color: ", ";\n  font-family: ", ";\n\n  ::placeholder {\n    font-weight: 300;\n    color: #8d8d8d;\n  }\n\n  @media (max-width: 600px) {\n    width: ", ";\n    font-size: ", ";\n  }\n\n  @media (max-width: 400px) {\n    width: ", ";\n    font-size: ", ";\n  }\n"], ["\n  font-size: ", ";\n  font-weight: ", ";\n  color: ", ";\n  font-family: ", ";\n\n  ::placeholder {\n    font-weight: 300;\n    color: #8d8d8d;\n  }\n\n  @media (max-width: 600px) {\n    width: ", ";\n    font-size: ", ";\n  }\n\n  @media (max-width: 400px) {\n    width: ", ";\n    font-size: ", ";\n  }\n"])), styles.fontSize || '15px', styles.fontWeight || '300', styles.color || '#8D8D8D', styles.fontFamily || 'var(--font-main)', ((_a = styles.media600Style) === null || _a === void 0 ? void 0 : _a.width) || '106%', ((_b = styles.media600Style) === null || _b === void 0 ? void 0 : _b.fontSize) || '12px', ((_c = styles.media400Style) === null || _c === void 0 ? void 0 : _c.width) || '108%', ((_d = styles.media400Style) === null || _d === void 0 ? void 0 : _d.fontSize) || '10px');
};
var GsSelect = function (_a) {
    var _b = _a.styles, styles = _b === void 0 ? {} : _b, _c = _a.Class, Class = _c === void 0 ? '' : _c, options = _a.options, id = _a.id, onChange = _a.onChange, placeholder = _a.placeholder, _d = _a.containerStyles, containerStyles = _d === void 0 ? {} : _d, _e = _a.containerRowClass, containerRowClass = _e === void 0 ? '' : _e, _f = _a.containerClass, containerClass = _f === void 0 ? '' : _f, defaultValue = _a.defaultValue;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Containers_1.ContainerInput, { styles: containerStyles, rowClass: containerRowClass, containerClass: containerClass },
            react_1.default.createElement(react_select_1.default, { className: (0, css_1.cx)(SelectStyles(styles), Class), options: options, id: id ? id : undefined, onChange: onChange, placeholder: placeholder ? placeholder : undefined, defaultValue: defaultValue }))));
};
exports.GsSelect = GsSelect;
var templateObject_1, templateObject_2;
//# sourceMappingURL=Input.js.map