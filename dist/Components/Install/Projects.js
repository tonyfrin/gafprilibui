"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Projects = void 0;
var react_1 = __importDefault(require("react"));
var Abstract_1 = require("../../Abstract");
var Projects = function (_a) {
    var actions = _a.actions, useProjects = _a.useProjects;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Abstract_1.Step, { step: "7", title: "Agregar Proyecto", buttonReturnTitle: "Atr\u00E1s", buttonReturnStyles: {
                backgroundColor: '#c12429',
            }, buttonReturnProps: {
                onClick: actions.onCategory,
            }, buttonNextTitle: "Instalar", buttonNextProps: {
                onClick: actions.install,
                id: 'buttonNextCategory',
            } }),
        react_1.default.createElement(Abstract_1.AddCategoryProjects, { use: useProjects, type: 'Projects' })));
};
exports.Projects = Projects;
//# sourceMappingURL=Projects.js.map