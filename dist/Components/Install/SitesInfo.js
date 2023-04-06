"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SitesInfo = void 0;
var react_1 = __importDefault(require("react"));
var Abstract_1 = require("../../Abstract");
var SitesInfo = function (_a) {
    var actions = _a.actions, useSites = _a.useSites;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Abstract_1.Step, { step: "2", title: "Informaci\u00F3n del sitio", buttonReturnTitle: "Atr\u00E1s", buttonReturnStyles: {
                backgroundColor: '#c12429',
            }, buttonReturnProps: {
                onClick: actions.onConfig,
            }, buttonNextTitle: "Siguiente", buttonNextProps: {
                onClick: actions.nextInfoSite,
                id: 'buttonNextInfoSite',
            } }),
        react_1.default.createElement(Abstract_1.SiteInfo, { useSites: useSites })));
};
exports.SitesInfo = SitesInfo;
//# sourceMappingURL=SitesInfo.js.map