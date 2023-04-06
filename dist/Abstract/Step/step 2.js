"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Step = void 0;
var react_1 = __importDefault(require("react"));
var css_1 = require("@emotion/css");
var Icons_1 = require("../Icons");
var Title_1 = require("../Title");
var Containers_1 = require("../Containers");
var Button_1 = require("../Button");
var StepStyles = function (styles) { return (0, css_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: ", ";\n  padding: ", ";\n  margin: ", ";\n"], ["\n  display: ", ";\n  padding: ", ";\n  margin: ", ";\n"])), styles.display || 'flex', styles.padding || '15px 0px', styles.margin || '10px 0px'); };
var Step = function (_a) {
    var _b = _a.containerStyles, containerStyles = _b === void 0 ? {} : _b, _c = _a.containerClass, containerClass = _c === void 0 ? '' : _c, _d = _a.globoStyles, globoStyles = _d === void 0 ? {} : _d, step = _a.step, _e = _a.globoClass, globoClass = _e === void 0 ? '' : _e, _f = _a.titleStyles, titleStyles = _f === void 0 ? {} : _f, title = _a.title, _g = _a.globoTitleClass, globoTitleClass = _g === void 0 ? '' : _g, _h = _a.styles, styles = _h === void 0 ? {} : _h, _j = _a.Class, Class = _j === void 0 ? '' : _j, _k = _a.buttonReturnStyles, buttonReturnStyles = _k === void 0 ? {} : _k, _l = _a.buttonReturnProps, buttonReturnProps = _l === void 0 ? {} : _l, _m = _a.buttonReturnClass, buttonReturnClass = _m === void 0 ? '' : _m, buttonReturnTitle = _a.buttonReturnTitle, _o = _a.buttonNextStyles, buttonNextStyles = _o === void 0 ? {} : _o, _p = _a.buttonNextProps, buttonNextProps = _p === void 0 ? {} : _p, _q = _a.buttonNextClass, buttonNextClass = _q === void 0 ? '' : _q, buttonNextTitle = _a.buttonNextTitle, _r = _a.containerButtonStyles, containerButtonStyles = _r === void 0 ? {} : _r, _s = _a.containerButtonClass, containerButtonClass = _s === void 0 ? '' : _s;
    return (react_1.default.createElement("div", { className: (0, css_1.cx)(StepStyles(styles), Class) },
        react_1.default.createElement(Containers_1.ContainerGlobo, { styles: containerStyles, containerClass: containerClass },
            react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(Icons_1.Globo, { styles: globoStyles, step: step, globoClass: globoClass }),
                react_1.default.createElement(Title_1.GloboTitle, { styles: titleStyles, title: title, globoTitleClass: globoTitleClass }))),
        react_1.default.createElement(Containers_1.ContainerButton, { styles: containerButtonStyles, Class: containerButtonClass },
            react_1.default.createElement(react_1.default.Fragment, null,
                buttonReturnTitle ? (react_1.default.createElement(Button_1.Button, { styles: buttonReturnStyles, buttonProps: buttonReturnProps, Class: buttonReturnClass, title: buttonReturnTitle })) : (''),
                buttonNextTitle ? (react_1.default.createElement(Button_1.Button, { styles: buttonNextStyles, buttonProps: buttonNextProps, Class: buttonNextClass, title: buttonNextTitle })) : ('')))));
};
exports.Step = Step;
var templateObject_1;
//# sourceMappingURL=step.js.map