"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGafpriCategoryProjects = void 0;
var react_1 = __importDefault(require("react"));
var helpers_1 = require("../helpers");
var actionTypes = {
    name: 'NAME',
    nameValid: 'NAME_VALID',
    description: 'LAST_NAME',
    descriptionValid: 'LAST_NAME_VALID',
};
var reducerObject = (_a = {},
    _a[actionTypes.name] = function (state, payload) {
        if (typeof payload === 'string') {
            return __assign(__assign({}, state), { name: payload });
        }
        return state;
    },
    _a[actionTypes.nameValid] = function (state, payload) {
        if (typeof payload === 'boolean') {
            return __assign(__assign({}, state), { nameValid: payload });
        }
        return state;
    },
    _a[actionTypes.description] = function (state, payload) {
        if (typeof payload === 'string') {
            return __assign(__assign({}, state), { description: payload });
        }
        return state;
    },
    _a[actionTypes.descriptionValid] = function (state, payload) {
        if (typeof payload === 'boolean') {
            return __assign(__assign({}, state), { descriptionValid: payload });
        }
        return state;
    },
    _a);
var reducer = function (state, action) {
    var handler = reducerObject[action.type];
    return handler(state, action.payload);
};
var initialState = function () { return ({
    name: '',
    nameValid: false,
    description: '',
    descriptionValid: false,
}); };
function useGafpriCategoryProjects(_a) {
    var type = _a.type;
    var _b = react_1.default.useReducer(reducer, initialState()), state = _b[0], dispatch = _b[1];
    var name = state.name, nameValid = state.nameValid, description = state.description, descriptionValid = state.descriptionValid;
    /**
     * EFFECT
     *
     *
     */
    // Setear valores de sitio
    var setName = function (value) {
        return dispatch({
            type: actionTypes.name,
            payload: value,
        });
    };
    var setNameValid = function (value) {
        return dispatch({
            type: actionTypes.nameValid,
            payload: value,
        });
    };
    var setDescription = function (value) {
        return dispatch({
            type: actionTypes.description,
            payload: value,
        });
    };
    var setDescriptionValid = function (value) {
        return dispatch({
            type: actionTypes.descriptionValid,
            payload: value,
        });
    };
    // Funciones de Validacion
    var validationName = function (value) {
        return (0, helpers_1.validationInputName)({
            name: value,
            inputId: "name".concat(type),
            setValid: setNameValid,
        });
    };
    var validationDescription = function (value) {
        return (0, helpers_1.validationInputName)({
            name: value,
            inputId: "description".concat(type),
            setValid: setDescriptionValid,
        });
    };
    var validationButtonNext = function () {
        if (nameValid && description) {
            (0, helpers_1.removeClass)("buttonNext".concat(type), 'gs-disabled');
        }
        else {
            (0, helpers_1.addClass)("buttonNext".concat(type), 'gs-disabled');
        }
    };
    // Funciones de cambios
    var changeName = function (value) {
        var newName = (0, helpers_1.toTitleCase)(value);
        (0, helpers_1.changeInputText)({
            value: newName,
            validation: validationName,
            setValue: setName,
        });
    };
    var changeDescription = function (value) {
        var newLastName = (0, helpers_1.toTitleCase)(value);
        (0, helpers_1.changeInputText)({
            value: newLastName,
            validation: validationDescription,
            setValue: setDescription,
        });
    };
    /**
     * Export
     *
     *
     */
    var states = {
        name: name,
        nameValid: nameValid,
        description: description,
        descriptionValid: descriptionValid,
    };
    var actions = {
        changeName: changeName,
        validationName: validationName,
        changeDescription: changeDescription,
        validationDescription: validationDescription,
        validationButtonNext: validationButtonNext,
    };
    return {
        states: states,
        actions: actions,
    };
}
exports.useGafpriCategoryProjects = useGafpriCategoryProjects;
//# sourceMappingURL=useGafpriCategoryProjects.js.map