"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
var react_1 = __importDefault(require("react"));
var Abstract_1 = require("../../Abstract");
var Users = function (_a) {
    var actions = _a.actions, useUser = _a.useUser;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Abstract_1.Step, { step: "5", title: "Agregar Usuario", buttonReturnTitle: "Atr\u00E1s", buttonReturnStyles: {
                backgroundColor: '#c12429',
            }, buttonReturnProps: {
                onClick: actions.onTypeDucument,
            }, buttonNextTitle: "Siguiente", buttonNextProps: {
                onClick: actions.nextUser,
                id: 'buttonNextUser',
            } }),
        react_1.default.createElement(Abstract_1.User, { useUser: useUser })));
};
exports.Users = Users;
//# sourceMappingURL=Users.js.map