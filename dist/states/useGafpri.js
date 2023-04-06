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
exports.useGafpri = void 0;
var react_1 = __importDefault(require("react"));
var helpers_1 = require("../helpers");
var initialState = function () { return ({
    source: {
        api: 'http://localhost:4000',
        url: 'https://prueba.tiendasgafpri.com',
    },
    isInstalled: true,
    isFetching: false,
}); };
var actionTypes = {
    isInstalled: 'INSTALLED',
    isFetching: 'FETCHING',
    notInstalled: 'NOT_INSTALLED',
};
var reducerObject = (_a = {},
    _a[actionTypes.isInstalled] = function (state) { return (__assign(__assign({}, state), { isInstalled: true, isFetching: false })); },
    _a[actionTypes.isFetching] = function (state) { return (__assign(__assign({}, state), { isInstalled: false, isFetching: true })); },
    _a[actionTypes.notInstalled] = function (state) { return (__assign(__assign({}, state), { isInstalled: false, isFetching: false })); },
    _a);
var reducer = function (state, action) {
    return reducerObject[action.type](state, action.payload) || state;
};
function useGafpri() {
    var _a = react_1.default.useReducer(reducer, initialState()), state = _a[0], dispatch = _a[1];
    var 
    // state
    source = state.source, isInstalled = state.isInstalled, isFetching = state.isFetching;
    /**
     * CURRENCY
     *
     *
     */
    var onInstalled = function () {
        return dispatch({
            type: actionTypes.isInstalled,
        });
    };
    var onFetching = function () {
        return dispatch({
            type: actionTypes.isFetching,
        });
    };
    var notInstalled = function () {
        return dispatch({
            type: actionTypes.notInstalled,
        });
    };
    var successCheck = function (data) {
        if (data.success) {
            notInstalled();
        }
        else {
            onInstalled();
        }
    };
    var check = function () {
        (0, helpers_1.gafpriFetch)({
            initMethod: 'GET',
            initApi: 'http://localhost:4000',
            initRoute: 'api/v1/install/check',
            functionFetching: onFetching,
            functionSuccess: successCheck,
            functionError: successCheck,
        });
    };
    react_1.default.useEffect(function () {
        check();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
    /**
     * Export
     *
     *
     */
    var states = {
        isInstalled: isInstalled,
        isFetching: isFetching,
        source: source,
    };
    var actions = {
        onInstalled: onInstalled,
        onFetching: onFetching,
    };
    return {
        states: states,
        actions: actions,
    };
}
exports.useGafpri = useGafpri;
//# sourceMappingURL=useGafpri.js.map