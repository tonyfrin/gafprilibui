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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogoContainer = void 0;
var react_1 = __importDefault(require("react"));
var react_2 = require("react");
var css_1 = require("@emotion/css");
var sectionStyles = function () { return (0, css_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  margin: 0;\n  padding: 1em;\n"], ["\n  display: flex;\n  margin: 0;\n  padding: 1em;\n"]))); };
var containerStyles = function () { return (0, css_1.css)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 100%;\n  margin: 0 auto;\n  text-align: center;\n"], ["\n  width: 100%;\n  margin: 0 auto;\n  text-align: center;\n"]))); };
var imgStayle = function () { return (0, css_1.css)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin-top: 10px;\n  max-width: 150px;\n\n  @media (max-width: 600px) {\n    margin-top: 5px;\n    max-width: 130px;\n  }\n\n  @media (max-width: 300px) {\n    max-width: 120px;\n  }\n"], ["\n  margin-top: 10px;\n  max-width: 150px;\n\n  @media (max-width: 600px) {\n    margin-top: 5px;\n    max-width: 130px;\n  }\n\n  @media (max-width: 300px) {\n    max-width: 120px;\n  }\n"]))); };
exports.LogoContainer = (0, react_2.forwardRef)(function (props, ref) {
    var image = props.image, _a = props.sectionClass, sectionClass = _a === void 0 ? '' : _a, _b = props.divClass, divClass = _b === void 0 ? '' : _b, _c = props.imgClass, imgClass = _c === void 0 ? '' : _c, imgProps = __rest(props, ["image", "sectionClass", "divClass", "imgClass"]);
    return (react_1.default.createElement("section", { className: (0, css_1.cx)(sectionStyles(), sectionClass) },
        react_1.default.createElement("div", { className: (0, css_1.cx)(containerStyles(), divClass) },
            react_1.default.createElement("img", __assign({ src: image }, imgProps, { className: (0, css_1.cx)(imgStayle(), imgClass), ref: ref, alt: "logo", role: "logo" })))));
});
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=LogoContainer.js.map