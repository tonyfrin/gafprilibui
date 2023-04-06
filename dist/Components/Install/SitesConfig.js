"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SitesConfig = void 0;
var react_1 = __importDefault(require("react"));
var Abstract_1 = require("../../Abstract");
var SitesConfig = function (_a) {
    var actions = _a.actions, useSitesConfig = _a.useSitesConfig;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Abstract_1.Step, { step: "3", title: "Configuraci\u00F3n del sitio", buttonReturnTitle: "Atr\u00E1s", buttonReturnStyles: {
                backgroundColor: '#c12429',
            }, buttonReturnProps: {
                onClick: actions.onSites,
            }, buttonNextTitle: "Siguiente", buttonNextProps: {
                onClick: actions.nextConfigSite,
                id: 'buttonNextConfigSite',
            } }),
        react_1.default.createElement(Abstract_1.SiteConfig, { useSitesConfig: useSitesConfig })));
};
exports.SitesConfig = SitesConfig;
//# sourceMappingURL=SitesConfig.js.map