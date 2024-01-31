"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriCurrencies = useGafpriCurrencies;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _helpers = require("../helpers");
var _Context = require("../Context");
var _Constans = require("../Constans");
var _Validations = require("../Validations");
var _Changes = require("../Changes");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function useGafpriCurrencies(_ref) {
  var _currencies$data;
  var token = _ref.token,
    useError = _ref.useError;
  var _useState = (0, _react.useState)(''),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    name = _useState2[0],
    setName = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    nameValid = _useState4[0],
    setNameValid = _useState4[1];
  var _useState5 = (0, _react.useState)(''),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    symbol = _useState6[0],
    setSymbol = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
    symbolValid = _useState8[0],
    setSymbolValid = _useState8[1];
  var _useState9 = (0, _react.useState)(false),
    _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
    isReady = _useState10[0],
    setIsReady = _useState10[1];
  var _useState11 = (0, _react.useState)(false),
    _useState12 = (0, _slicedToArray2["default"])(_useState11, 2),
    isFetching = _useState12[0],
    setIsFetching = _useState12[1];
  var _useState13 = (0, _react.useState)(true),
    _useState14 = (0, _slicedToArray2["default"])(_useState13, 2),
    isInit = _useState14[0],
    setIsInit = _useState14[1];
  var _useState15 = (0, _react.useState)(false),
    _useState16 = (0, _slicedToArray2["default"])(_useState15, 2),
    isAdd = _useState16[0],
    setIsAdd = _useState16[1];
  var _useState17 = (0, _react.useState)(false),
    _useState18 = (0, _slicedToArray2["default"])(_useState17, 2),
    isUpdate = _useState18[0],
    setIsUpdate = _useState18[1];
  var _useState19 = (0, _react.useState)({
      data: {
        items: (0, _Context.getItem)(_Constans.CURRENCIES_STORAGE, null)
      }
    }),
    _useState20 = (0, _slicedToArray2["default"])(_useState19, 2),
    currencies = _useState20[0],
    setCurrencies = _useState20[1];
  var error = useError.states.error;
  var _useState21 = (0, _react.useState)(0),
    _useState22 = (0, _slicedToArray2["default"])(_useState21, 2),
    currentId = _useState22[0],
    setCurrentId = _useState22[1];
  var _useState23 = (0, _react.useState)('asc'),
    _useState24 = (0, _slicedToArray2["default"])(_useState23, 2),
    orderList = _useState24[0],
    setOrderList = _useState24[1];
  var _useState25 = (0, _react.useState)(''),
    _useState26 = (0, _slicedToArray2["default"])(_useState25, 2),
    searchTerm = _useState26[0],
    setSearchTerm = _useState26[1];
  var _useState27 = (0, _react.useState)(1),
    _useState28 = (0, _slicedToArray2["default"])(_useState27, 2),
    currentPage = _useState28[0],
    setCurrentPage = _useState28[1];
  var itemsPerPage = 6;
  var infoReset = function infoReset() {
    setName('');
    setSymbol('');
    setNameValid(false);
    setSymbolValid(false);
    useError.actions.changeError([]);
  };
  var onFetching = function onFetching() {
    setIsFetching(true);
    setIsInit(false);
    setIsAdd(false);
    setIsUpdate(false);
  };
  var onInit = function onInit() {
    setIsFetching(false);
    setIsInit(true);
    setIsAdd(false);
    setIsUpdate(false);
  };
  var onAdd = function onAdd() {
    setIsFetching(false);
    setIsInit(false);
    setIsAdd(true);
    setIsUpdate(false);
  };
  var onUpdate = function onUpdate() {
    setIsFetching(false);
    setIsInit(false);
    setIsAdd(false);
    setIsUpdate(true);
  };
  var onIsReady = function onIsReady() {
    setIsReady(true);
  };
  var notReady = function notReady() {
    setIsReady(false);
  };
  var goUpdate = function goUpdate(id) {
    infoReset();
    setCurrentId(id);
    onUpdate();
  };
  var goAdd = function goAdd() {
    infoReset();
    onAdd();
  };

  // Funciones de Validacion
  var validationName = function validationName(value) {
    return (0, _Validations.generalValidationName)(value, setNameValid, nameValid);
  };
  var validationSymbol = function validationSymbol(newValue) {
    return (0, _Validations.generalValidationCurrenciesSymbol)(newValue, setSymbolValid, symbolValid);
  };
  var validationButtonNext = function validationButtonNext() {
    (0, _Validations.generalValidationButtonNext)([nameValid, symbolValid]);
  };

  // Funciones de cambios
  var changeName = function changeName(value) {
    (0, _Changes.generalChangeName)(value, validationName, setName);
  };
  var changeSymbol = function changeSymbol(value) {
    (0, _Changes.generalChangeCurrenciesSymbol)(value, validationSymbol, setSymbol);
  };

  // Manejo de la data de Currencies

  var getLastItem = (_currencies$data = currencies.data) !== null && _currencies$data !== void 0 && _currencies$data.items ? currencies.data.items.sort(function (a, b) {
    return new Date(b.modifiedAt).getTime() - new Date(a.modifiedAt).getTime();
  })[0] : null;
  var setCurrenciesDataStorage = function setCurrenciesDataStorage(newData) {
    (0, _Context.saveItem)(_Constans.CURRENCIES_STORAGE, newData.data.items);
  };
  var setCurrenciesData = function setCurrenciesData(newData) {
    setCurrencies(newData);
    setCurrenciesDataStorage(newData);
  };
  var onCurrencies = function onCurrencies(newData) {
    setCurrenciesData(newData);
    onIsReady();
  };
  var offCurrencies = function offCurrencies() {
    setCurrenciesData({
      data: {
        items: null
      }
    });
    notReady();
  };
  var getCurrencies = /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
      var _currencies$data$item;
      var lastEntryDateAndCount, lastDate, count;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _helpers.getLastEntryDateAndCount)('currencies');
          case 2:
            lastEntryDateAndCount = _context.sent;
            lastDate = (getLastItem === null || getLastItem === void 0 ? void 0 : getLastItem.modifiedAt) || null;
            count = ((_currencies$data$item = currencies.data.items) === null || _currencies$data$item === void 0 ? void 0 : _currencies$data$item.length) || 0;
            if (currencies.data.items === null || "".concat(lastEntryDateAndCount === null || lastEntryDateAndCount === void 0 ? void 0 : lastEntryDateAndCount.date) !== "".concat(lastDate) || "".concat(lastEntryDateAndCount === null || lastEntryDateAndCount === void 0 ? void 0 : lastEntryDateAndCount.count) !== "".concat(count)) {
              if (token) {
                (0, _helpers.gafpriFetch)({
                  initMethod: 'GET',
                  initRoute: _Constans.CURRENCIES_ROUTE,
                  initToken: {
                    token: token
                  },
                  functionFetching: notReady,
                  functionSuccess: onCurrencies
                });
              } else {
                notReady();
              }
            } else {
              onIsReady();
            }
          case 6:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function getCurrencies() {
      return _ref2.apply(this, arguments);
    };
  }();
  var handleNewCurrency = function handleNewCurrency(newCurrency) {
    setCurrencies(function (prevState) {
      var newData = {
        data: {
          items: [].concat((0, _toConsumableArray2["default"])(prevState.data.items || []), [newCurrency])
        }
      };
      setCurrenciesDataStorage(newData);
      return newData;
    });
  };
  var handleUpdatedCurrency = function handleUpdatedCurrency(updatedCurrency) {
    setCurrencies(function (prevState) {
      var _prevState$data$items;
      var updatedItems = ((_prevState$data$items = prevState.data.items) === null || _prevState$data$items === void 0 ? void 0 : _prevState$data$items.map(function (currency) {
        return currency.id === updatedCurrency.id ? updatedCurrency : currency;
      })) || [];
      var newData = {
        data: {
          items: updatedItems
        }
      };
      setCurrenciesDataStorage(newData);
      return newData;
    });
  };
  var handleDeletedCurrency = function handleDeletedCurrency(_ref3) {
    var itemId = _ref3.itemId;
    setCurrencies(function (prevState) {
      var _prevState$data$items2;
      var filteredItems = ((_prevState$data$items2 = prevState.data.items) === null || _prevState$data$items2 === void 0 ? void 0 : _prevState$data$items2.filter(function (currency) {
        return "".concat(currency.id) !== "".concat(itemId);
      })) || [];
      var newData = {
        data: {
          items: filteredItems
        }
      };
      setCurrenciesDataStorage(newData);
      return newData;
    });
  };
  var returnInit = function returnInit() {
    infoReset();
    onInit();
  };
  var newError = function newError(newErrorValue) {
    useError.actions.newError({
      newErrorValue: newErrorValue,
      functionAction: onAdd
    });
  };
  var newErrorDelete = function newErrorDelete(newErrorValue) {
    useError.actions.newError({
      newErrorValue: newErrorValue,
      functionAction: onInit
    });
  };
  var addCurrencies = function addCurrencies() {
    if (nameValid && symbolValid && token) {
      (0, _helpers.gafpriFetch)({
        initMethod: 'POST',
        initRoute: _Constans.CURRENCIES_ROUTE,
        initCredentials: {
          name: name,
          symbol: symbol
        },
        initToken: {
          token: token
        },
        functionFetching: onFetching,
        functionSuccess: returnInit,
        functionError: newError
      });
    }
  };
  function getById(id) {
    var _currencies$data$item2;
    return ((_currencies$data$item2 = currencies.data.items) === null || _currencies$data$item2 === void 0 ? void 0 : _currencies$data$item2.find(function (currency) {
      return currency.id === id;
    })) || null;
  }
  var updateCurrency = function updateCurrency() {
    if (nameValid && symbolValid && token) {
      (0, _helpers.gafpriFetch)({
        initMethod: 'PATCH',
        initRoute: "".concat(_Constans.CURRENCIES_ROUTE, "/").concat(currentId),
        initCredentials: {
          name: name,
          symbol: symbol
        },
        initToken: {
          token: token
        },
        functionFetching: onFetching,
        functionSuccess: returnInit,
        functionError: newError
      });
    }
  };
  var deleteCurrency = function deleteCurrency(id) {
    if (token) {
      (0, _helpers.gafpriFetch)({
        initMethod: 'DELETE',
        initRoute: "".concat(_Constans.CURRENCIES_ROUTE, "/").concat(id),
        initToken: {
          token: token
        },
        functionFetching: onFetching,
        functionSuccess: returnInit,
        functionError: newErrorDelete
      });
    }
  };
  function sortCurrenciesByName(itemCurrencies, order) {
    if (itemCurrencies) {
      return itemCurrencies.slice().sort(function (a, b) {
        var comparison = a.name.localeCompare(b.name, undefined, {
          sensitivity: 'base'
        });
        return order === 'asc' ? comparison : -comparison;
      });
    }
    return null;
  }
  var filterCurrenciesByName = function filterCurrenciesByName(search) {
    if (currencies.data.items) {
      return currencies.data.items.filter(function (currency) {
        return currency.name.toLowerCase().includes(search.toLowerCase());
      });
    }
    return null;
  };
  var getPaginatedCurrencies = function getPaginatedCurrencies(itemCurrencies, page, itemPerPage) {
    var startIndex = (page - 1) * itemPerPage;
    var endIndex = startIndex + itemPerPage;
    if (itemCurrencies) {
      return itemCurrencies.slice(startIndex, endIndex);
    }
    return null;
  };

  /**
   * Effects
   *
   *
   */

  _react["default"].useEffect(function () {
    getCurrencies();
  }, [token]); // eslint-disable-line react-hooks/exhaustive-deps

  _react["default"].useEffect(function () {
    setCurrentPage(1);
  }, [searchTerm]);

  /**
   * Export
   *
   *
   */
  var states = {
    name: name,
    nameValid: nameValid,
    symbol: symbol,
    symbolValid: symbolValid,
    isReady: isReady,
    isFetching: isFetching,
    isAdd: isAdd,
    isInit: isInit,
    isUpdate: isUpdate,
    currencies: currencies,
    currentId: currentId,
    error: error,
    orderList: orderList,
    searchTerm: searchTerm,
    currentPage: currentPage,
    itemsPerPage: itemsPerPage
  };
  var actions = {
    changeName: changeName,
    validationName: validationName,
    changeSymbol: changeSymbol,
    validationSymbol: validationSymbol,
    validationButtonNext: validationButtonNext,
    setIsReady: setIsReady,
    onFetching: onFetching,
    onInit: onInit,
    returnInit: returnInit,
    onAdd: onAdd,
    goAdd: goAdd,
    onUpdate: onUpdate,
    addCurrencies: addCurrencies,
    updateCurrency: updateCurrency,
    getById: getById,
    goUpdate: goUpdate,
    offCurrencies: offCurrencies,
    sortCurrenciesByName: sortCurrenciesByName,
    setOrderList: setOrderList,
    setSearchTerm: setSearchTerm,
    filterCurrenciesByName: filterCurrenciesByName,
    setCurrentPage: setCurrentPage,
    getPaginatedCurrencies: getPaginatedCurrencies,
    deleteCurrency: deleteCurrency,
    handleNewCurrency: handleNewCurrency,
    handleUpdatedCurrency: handleUpdatedCurrency,
    handleDeletedCurrency: handleDeletedCurrency
  };
  return {
    states: states,
    actions: actions
  };
}