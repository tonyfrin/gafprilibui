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
exports.LoginHeader = void 0;
var react_1 = __importDefault(require("react"));
var react_2 = require("react");
var css_1 = require("@emotion/css");
var Logo_1 = require("../../Abstract/Logo");
var headerStyles = function () { return (0, css_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background: linear-gradient(to left, #324375, #07b2e7);\n  width: 100%;\n"], ["\n  background: linear-gradient(to left, #324375, #07b2e7);\n  width: 100%;\n"]))); };
exports.LoginHeader = (0, react_2.forwardRef)(function (props, ref) {
    var image = props.image, _a = props.headerClass, headerClass = _a === void 0 ? '' : _a, imgProps = __rest(props, ["image", "headerClass"]);
    return (react_1.default.createElement("header", { className: (0, css_1.cx)(headerStyles(), headerClass) },
        react_1.default.createElement(Logo_1.LogoContainer, __assign({ image: image }, imgProps, { ref: typeof ref === 'string' ? null : ref }))));
});
var templateObject_1;
//# sourceMappingURL=LoginHeader.js.map