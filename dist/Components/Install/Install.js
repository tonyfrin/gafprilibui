"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Install = void 0;
var react_1 = __importDefault(require("react"));
var Abstract_1 = require("../../Abstract");
var states_1 = require("../../states");
var index_1 = require("../index");
var SitesInfo_1 = require("./SitesInfo");
var SitesConfig_1 = require("./SitesConfig");
var TypesDocument_1 = require("./TypesDocument");
var Users_1 = require("./Users");
var Category_1 = require("./Category");
var Projects_1 = require("./Projects");
var Install = function (_a) {
    var mainActions = _a.mainActions, mainState = _a.mainState;
    var useGafpri = {
        actions: mainActions,
        states: mainState,
    };
    var _b = (0, states_1.useGafpriInstall)(useGafpri), states = _b.states, actions = _b.actions, useSites = _b.useSites, useCurrency = _b.useCurrency, useSitesConfig = _b.useSitesConfig, useTypeDocument = _b.useTypeDocument, useUser = _b.useUser, useCategory = _b.useCategory, useProjects = _b.useProjects;
    return (react_1.default.createElement(Abstract_1.Box1, null,
        react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(Abstract_1.Title1, { title: "Configuraci\u00F3n" }),
            react_1.default.createElement(Abstract_1.Title2, { title: "Nueva tienda Gafpri" }),
            states.isConfig ? (react_1.default.createElement(index_1.Curriencies, { states: states, actions: actions, useCurrency: useCurrency })) : (''),
            states.isSites ? (react_1.default.createElement(SitesInfo_1.SitesInfo, { actions: actions, useSites: useSites })) : (''),
            states.isConfigSite ? (react_1.default.createElement(SitesConfig_1.SitesConfig, { actions: actions, useSitesConfig: useSitesConfig })) : (''),
            states.isTypeDucument ? (react_1.default.createElement(TypesDocument_1.TypesDocument, { actions: actions, useTypeDocument: useTypeDocument })) : (''),
            states.isUser ? react_1.default.createElement(Users_1.Users, { actions: actions, useUser: useUser }) : '',
            states.isCategory ? (react_1.default.createElement(Category_1.Category, { actions: actions, useCategory: useCategory })) : (''),
            states.isProjects ? (react_1.default.createElement(Projects_1.Projects, { actions: actions, useProjects: useProjects })) : (''),
            states.isFinal ? react_1.default.createElement("h1", null, "Se instalado la tienda") : '')));
};
exports.Install = Install;
//# sourceMappingURL=Install.js.map