"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainFooter = void 0;
var react_1 = __importDefault(require("react"));
var css_1 = require("@emotion/css");
var footerStyles = function (styles) { return (0, css_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    background-color: ", ";\n    color: ", ";\n    position: ", ";\n    bottom: ", ";\n    left: ", ";\n    right: ", ";\n    z-index: ", ";\n"], ["\n    background-color: ", ";\n    color: ", ";\n    position: ", ";\n    bottom: ", ";\n    left: ", ";\n    right: ", ";\n    z-index: ", ";\n"])), styles.backgroundColor || '#30679e', styles.color || '#ffffff', styles.position || 'fixed', styles.bottom || 0, styles.left || 0, styles.right || 0, styles.right || 996); };
var footerDivStyles = function () { return (0, css_1.css)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    display: flex;\n    justify-content: center;\n    padding: 10px 0;\n"], ["\n    display: flex;\n    justify-content: center;\n    padding: 10px 0;\n"]))); };
var footerPStyles = function () { return (0, css_1.css)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    font-weight: 300;\n    font-size: 12px;\n    margin: 0px;\n\n    @media (max-width: 750px) {\n        font-size: 10px;\n    }\n\n    @media (max-width: 750px) {\n        font-size: 10px;\n    }\n\n    @media (max-width: 500px) {\n        font-size: 6px;\n    }\n"], ["\n    font-weight: 300;\n    font-size: 12px;\n    margin: 0px;\n\n    @media (max-width: 750px) {\n        font-size: 10px;\n    }\n\n    @media (max-width: 750px) {\n        font-size: 10px;\n    }\n\n    @media (max-width: 500px) {\n        font-size: 6px;\n    }\n"]))); };
var footerSeparatorStyles = function () { return (0, css_1.css)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    padding: 0 0.5em;\n    font-size: 12px;\n\n    @media (max-width: 600px) {\n        font-size: 10px;\n    }\n\n    @media (max-width: 500px) {\n        font-size: 6px;\n    }\n"], ["\n    padding: 0 0.5em;\n    font-size: 12px;\n\n    @media (max-width: 600px) {\n        font-size: 10px;\n    }\n\n    @media (max-width: 500px) {\n        font-size: 6px;\n    }\n"]))); };
var footerOutStyles = function () { return (0, css_1.css)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    cursor: pointer;\n    font-weight: 400;\n    font-size: 12px;\n    color: #fff;\n\n    @media (max-width: 600px) {\n        font-size: 10px;\n    }\n\n    @media (max-width: 500px) {\n        font-size: 6px;\n    }\n"], ["\n    cursor: pointer;\n    font-weight: 400;\n    font-size: 12px;\n    color: #fff;\n\n    @media (max-width: 600px) {\n        font-size: 10px;\n    }\n\n    @media (max-width: 500px) {\n        font-size: 6px;\n    }\n"]))); };
var MainFooter = function (_a) {
    var _b = _a.footerClass, footerClass = _b === void 0 ? '' : _b, _c = _a.footerDivClass, footerDivClass = _c === void 0 ? '' : _c, _d = _a.footerPClass, footerPClass = _d === void 0 ? '' : _d, _e = _a.styles, styles = _e === void 0 ? {} : _e, isLogin = _a.isLogin, _f = _a.year, year = _f === void 0 ? '2023' : _f, onLogOut = _a.onLogOut;
    return (react_1.default.createElement("footer", { className: (0, css_1.cx)(footerStyles(styles), footerClass) },
        react_1.default.createElement("div", { className: (0, css_1.cx)(footerDivStyles(), footerDivClass) },
            react_1.default.createElement("p", { className: (0, css_1.cx)(footerPStyles(), footerPClass) }, "\u00A9 Copyright ".concat(year, " Gafpri Corp - Todos los derechos reservados")),
            isLogin ?
                react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("span", { className: footerSeparatorStyles() }, " / "),
                    react_1.default.createElement("span", { onClick: onLogOut, className: footerOutStyles() }, "Salir"))
                : '')));
};
exports.MainFooter = MainFooter;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=Footer.js.map