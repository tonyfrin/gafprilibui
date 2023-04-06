"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
var react_1 = __importDefault(require("react"));
var Abstract_1 = require("../../Abstract");
var Abstract_2 = require("../../Abstract");
var Category = function (_a) {
    var actions = _a.actions, useCategory = _a.useCategory;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Abstract_1.Step, { step: "6", title: "Agregar Categor\u00EDa de Producto", buttonReturnTitle: "Atr\u00E1s", buttonReturnStyles: {
                backgroundColor: '#c12429',
            }, buttonReturnProps: {
                onClick: actions.onUser,
            }, buttonNextTitle: "Siguiente", buttonNextProps: {
                onClick: actions.nextCategory,
                id: 'buttonNextCategory',
            } }),
        react_1.default.createElement(Abstract_2.AddCategoryProjects, { use: useCategory, type: 'Category' })));
};
exports.Category = Category;
//# sourceMappingURL=Category.js.map