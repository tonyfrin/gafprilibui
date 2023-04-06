"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddCategoryProjects = void 0;
var react_1 = __importDefault(require("react"));
var index_1 = require("./../index");
var AddCategoryProjects = function (_a) {
    var use = _a.use, type = _a.type;
    react_1.default.useEffect(function () {
        use.actions.validationName(use.states.name);
        use.actions.validationDescription(use.states.description);
    }, [use.states.name, use.states.description]);
    react_1.default.useEffect(function () {
        use.actions.validationButtonNext();
    }, [use.states.nameValid, use.states.descriptionValid]);
    return (react_1.default.createElement(index_1.ContainerForm, null,
        react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(index_1.Input, { inputProps: {
                    placeholder: 'Nombre',
                    type: 'text',
                    id: "name".concat(type),
                    onKeyUp: function (event) {
                        return use.actions.changeName(event.target.value);
                    },
                    defaultValue: use.states.name,
                } }),
            react_1.default.createElement(index_1.Input, { inputProps: {
                    placeholder: 'Descripción',
                    type: 'text',
                    id: "description".concat(type),
                    onKeyUp: function (event) {
                        return use.actions.changeDescription(event.target.value);
                    },
                    defaultValue: use.states.description,
                } }))));
};
exports.AddCategoryProjects = AddCategoryProjects;
//# sourceMappingURL=AddCategoryProjects.js.map