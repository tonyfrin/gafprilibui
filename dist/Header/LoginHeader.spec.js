"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("@testing-library/react");
var LoginHeader_1 = __importDefault(require("./LoginHeader"));
var logo_blanco_png_1 = __importDefault(require("./../../assets/img/logo-blanco.png"));
describe('@components/LogoContainer', function () {
    it('Given a normal component call it should render component', function () {
        //arrange
        var getByRole = (0, react_2.render)(react_1.default.createElement(LoginHeader_1.default, { image: logo_blanco_png_1.default.src })).getByRole;
        //act
        var logoTest = getByRole('logo');
        //assert
        expect(logoTest).toBeDefined();
    });
});
//# sourceMappingURL=LoginHeader.spec.js.map