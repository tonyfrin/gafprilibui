"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContainerButton = exports.ContainerGlobo = exports.ContainerForm = exports.ContainerInput = void 0;
var react_1 = __importDefault(require("react"));
var css_1 = require("@emotion/css");
var RowStyles = function () { return (0, css_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n"], ["\n  display: flex;\n"]))); };
var ContainerInputStyles = function (styles) { return (0, css_1.css)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: ", ";\n  margin: ", ";\n"], ["\n  width: ", ";\n  margin: ", ";\n"])), styles.width || '91.66667%', styles.margin || '10px 0px'); };
var ContainerInput = function (_a) {
    var _b = _a.styles, styles = _b === void 0 ? {} : _b, _c = _a.rowClass, rowClass = _c === void 0 ? '' : _c, _d = _a.containerClass, containerClass = _d === void 0 ? '' : _d, children = _a.children;
    return (react_1.default.createElement("div", { className: (0, css_1.cx)(RowStyles(), rowClass) },
        react_1.default.createElement("div", { className: (0, css_1.cx)(ContainerInputStyles(styles), containerClass) }, children)));
};
exports.ContainerInput = ContainerInput;
var ContainerFormStyles = function (styles) { return (0, css_1.css)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: ", ";\n  margin: ", ";\n"], ["\n  width: ", ";\n  margin: ", ";\n"])), styles.width || '90%', styles.margin || 'auto'); };
var ContainerForm = function (_a) {
    var _b = _a.styles, styles = _b === void 0 ? {} : _b, _c = _a.containerClass, containerClass = _c === void 0 ? '' : _c, children = _a.children;
    return (react_1.default.createElement("div", { className: (0, css_1.cx)(ContainerFormStyles(styles), containerClass) }, children));
};
exports.ContainerForm = ContainerForm;
var ContainerGloboStyles = function (styles) { return (0, css_1.css)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  width: ", ";\n"], ["\n  width: ", ";\n"])), styles.width || '50%'); };
var ContainerGlobo = function (_a) {
    var _b = _a.styles, styles = _b === void 0 ? {} : _b, _c = _a.containerClass, containerClass = _c === void 0 ? '' : _c, children = _a.children;
    return (react_1.default.createElement("div", { className: (0, css_1.cx)(ContainerGloboStyles(styles), containerClass) }, children));
};
exports.ContainerGlobo = ContainerGlobo;
var ContainerButtonStyles = function (styles) { return (0, css_1.css)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  width: ", ";\n  display: ", ";\n  justify-content: ", ";\n"], ["\n  width: ", ";\n  display: ", ";\n  justify-content: ", ";\n"])), styles.width || '50%', styles.display || 'flex', styles.justifyContent || 'space-around'); };
var ContainerButton = function (_a) {
    var _b = _a.styles, styles = _b === void 0 ? {} : _b, _c = _a.Class, Class = _c === void 0 ? '' : _c, children = _a.children;
    return (react_1.default.createElement("div", { className: (0, css_1.cx)(ContainerButtonStyles(styles), Class) }, children));
};
exports.ContainerButton = ContainerButton;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=Container.js.map