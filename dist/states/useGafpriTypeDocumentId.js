"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriTypeDocumentId = useGafpriTypeDocumentId;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _helpers = require("../helpers");
var _Context = require("../Context");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function useGafpriTypeDocumentId(_ref) {
  var _typeDocumentId$data;
  var token = _ref.token;
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
    country = _useState6[0],
    setCountry = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
    countryValid = _useState8[0],
    setCountryValid = _useState8[1];
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
        items: (0, _Context.getItem)('GS_TYPE_DOCUMENT_ID_V2', null)
      }
    }),
    _useState20 = (0, _slicedToArray2["default"])(_useState19, 2),
    typeDocumentId = _useState20[0],
    setTypeDocumentId = _useState20[1];
  var _useState21 = (0, _react.useState)([]),
    _useState22 = (0, _slicedToArray2["default"])(_useState21, 2),
    error = _useState22[0],
    setError = _useState22[1];
  var _useState23 = (0, _react.useState)(0),
    _useState24 = (0, _slicedToArray2["default"])(_useState23, 2),
    currentId = _useState24[0],
    setCurrentId = _useState24[1];
  var _useState25 = (0, _react.useState)('asc'),
    _useState26 = (0, _slicedToArray2["default"])(_useState25, 2),
    orderList = _useState26[0],
    setOrderList = _useState26[1];
  var _useState27 = (0, _react.useState)(''),
    _useState28 = (0, _slicedToArray2["default"])(_useState27, 2),
    searchTerm = _useState28[0],
    setSearchTerm = _useState28[1];
  var _useState29 = (0, _react.useState)(1),
    _useState30 = (0, _slicedToArray2["default"])(_useState29, 2),
    currentPage = _useState30[0],
    setCurrentPage = _useState30[1];
  var itemsPerPage = 6;
  var infoReset = function infoReset() {
    setName('');
    setCountry('');
    setNameValid(false);
    setCountryValid(false);
    setError([]);
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
  var goAddVzla = function goAddVzla() {
    infoReset();
    setCountry('VE');
    onAdd();
  };
  var goAddUsa = function goAddUsa() {
    infoReset();
    setCountry('US');
    onAdd();
  };

  // Funciones de Validacion
  var validationName = function validationName(value) {
    return (0, _helpers.validationInputName)({
      name: value,
      inputId: "nameTypeDocumentId",
      setValid: setNameValid
    });
  };
  var validationCountry = function validationCountry(newValue) {
    var valid = (0, _helpers.validationInput)(newValue, /US|VE/, 'countryTypeDocumentId', 'gs-input-alert', true);
    setCountryValid(valid);
    return valid;
  };
  var validationButtonNext = function validationButtonNext() {
    if (nameValid && countryValid) {
      (0, _helpers.removeClass)("buttonNext", 'gs-disabled');
    } else {
      (0, _helpers.addClass)("buttonNext", 'gs-disabled');
    }
  };

  // Funciones de cambios
  var changeName = function changeName(value) {
    var newName = (0, _helpers.toTitleCase)(value);
    (0, _helpers.changeInputText)({
      value: newName,
      validation: validationName,
      setValue: setName
    });
  };
  var changeCountry = function changeCountry(newValue) {
    (0, _helpers.changeInputText)({
      value: newValue,
      validation: validationCountry,
      setValue: setCountry
    });
  };

  // Manejo de la data de TypeDocumentId

  var getLastItem = (_typeDocumentId$data = typeDocumentId.data) !== null && _typeDocumentId$data !== void 0 && _typeDocumentId$data.items ? typeDocumentId.data.items.sort(function (a, b) {
    return new Date(b.modifiedAt).getTime() - new Date(a.modifiedAt).getTime();
  })[0] : null;
  var setDataStorage = function setDataStorage(newData) {
    (0, _Context.saveItem)('GS_TYPE_DOCUMENT_ID_V2', newData.data.items);
  };
  var setData = function setData(newData) {
    setTypeDocumentId(newData);
    setDataStorage(newData);
  };
  var onTypeDocumentId = function onTypeDocumentId(newData) {
    setData(newData);
    onIsReady();
  };
  var offTypeDocumentId = function offTypeDocumentId() {
    setData({
      data: {
        items: null
      }
    });
    notReady();
  };
  var getTypeDocumentId = /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
      var _typeDocumentId$data$;
      var lastEntryDateAndCount, lastDate, count;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _helpers.getLastEntryDateAndCount)('type-document-id');
          case 2:
            lastEntryDateAndCount = _context.sent;
            lastDate = (getLastItem === null || getLastItem === void 0 ? void 0 : getLastItem.modifiedAt) || null;
            count = ((_typeDocumentId$data$ = typeDocumentId.data.items) === null || _typeDocumentId$data$ === void 0 ? void 0 : _typeDocumentId$data$.length) || 0;
            if (typeDocumentId.data.items === null || "".concat(lastEntryDateAndCount === null || lastEntryDateAndCount === void 0 ? void 0 : lastEntryDateAndCount.date) !== "".concat(lastDate) || "".concat(lastEntryDateAndCount === null || lastEntryDateAndCount === void 0 ? void 0 : lastEntryDateAndCount.count) !== "".concat(count)) {
              if (token) {
                (0, _helpers.gafpriFetch)({
                  initMethod: 'GET',
                  initApi: 'http://localhost:4000',
                  initRoute: 'api/v1/type-document-id',
                  initToken: {
                    token: token
                  },
                  functionFetching: notReady,
                  functionSuccess: onTypeDocumentId
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
    return function getTypeDocumentId() {
      return _ref2.apply(this, arguments);
    };
  }();
  var handleNewTypeDocumentId = function handleNewTypeDocumentId(newTypeDocumentId) {
    setTypeDocumentId(function (prevState) {
      var newData = {
        data: {
          items: [].concat((0, _toConsumableArray2["default"])(prevState.data.items || []), [newTypeDocumentId])
        }
      };
      setDataStorage(newData);
      return newData;
    });
  };
  var handleUpdatedTypeDocumentId = function handleUpdatedTypeDocumentId(updatedTypeDocumentId) {
    setTypeDocumentId(function (prevState) {
      var _prevState$data$items;
      var updatedItems = ((_prevState$data$items = prevState.data.items) === null || _prevState$data$items === void 0 ? void 0 : _prevState$data$items.map(function (item) {
        return "".concat(item.id) === "".concat(updatedTypeDocumentId.id) ? updatedTypeDocumentId : item;
      })) || [];
      var newData = {
        data: {
          items: updatedItems
        }
      };
      setDataStorage(newData);
      return newData;
    });
  };
  var handleDeletedTypeDocumentId = function handleDeletedTypeDocumentId(_ref3) {
    var itemId = _ref3.itemId;
    setTypeDocumentId(function (prevState) {
      var _prevState$data$items2;
      var filteredItems = ((_prevState$data$items2 = prevState.data.items) === null || _prevState$data$items2 === void 0 ? void 0 : _prevState$data$items2.filter(function (item) {
        return "".concat(item.id) !== "".concat(itemId);
      })) || [];
      var newData = {
        data: {
          items: filteredItems
        }
      };
      setDataStorage(newData);
      return newData;
    });
  };
  var returnInit = function returnInit() {
    infoReset();
    onInit();
  };
  var newError = function newError(newErrorValue) {
    if ((0, _helpers.isErrorResponse)(newErrorValue)) {
      setError([newErrorValue.message]);
      onAdd();
    } else if ((0, _helpers.isCustomErrorResponse)(newErrorValue)) {
      var errorMessage = newErrorValue.errors.map(function (item) {
        return item.message;
      });
      setError(errorMessage);
      onAdd();
    } else {
      setError(["".concat(newErrorValue)]);
      onAdd();
    }
    setTimeout(function () {
      setError([]);
    }, 5000);
  };
  var newErrorDelete = function newErrorDelete(newErrorValue) {
    if ((0, _helpers.isErrorResponse)(newErrorValue)) {
      setError([newErrorValue.message]);
      onInit();
    } else if ((0, _helpers.isCustomErrorResponse)(newErrorValue)) {
      var errorMessage = newErrorValue.errors.map(function (item) {
        return item.message;
      });
      setError(errorMessage);
      onInit();
    } else {
      setError(["".concat(newErrorValue)]);
      onInit();
    }
    setTimeout(function () {
      setError([]);
    }, 5000);
  };
  var add = function add() {
    if (nameValid && countryValid && token) {
      (0, _helpers.gafpriFetch)({
        initMethod: 'POST',
        initApi: 'http://localhost:4000',
        initRoute: 'api/v1/type-document-id',
        initToken: {
          token: token
        },
        initCredentials: {
          name: name,
          country: country
        },
        functionFetching: onFetching,
        functionSuccess: returnInit,
        functionError: newError
      });
    }
  };
  function getById(id) {
    var _typeDocumentId$data$2;
    return ((_typeDocumentId$data$2 = typeDocumentId.data.items) === null || _typeDocumentId$data$2 === void 0 ? void 0 : _typeDocumentId$data$2.find(function (item) {
      return item.id === id;
    })) || null;
  }
  var update = function update() {
    if (nameValid && countryValid && token) {
      (0, _helpers.gafpriFetch)({
        initMethod: 'PATCH',
        initApi: 'http://localhost:4000',
        initRoute: "api/v1/type-document-id/".concat(currentId),
        initToken: {
          token: token
        },
        initCredentials: {
          name: name,
          country: country
        },
        functionFetching: onFetching,
        functionSuccess: returnInit,
        functionError: newError
      });
    }
  };
  var deleteTypeDocumentId = function deleteTypeDocumentId(id) {
    if (token) {
      (0, _helpers.gafpriFetch)({
        initMethod: 'DELETE',
        initApi: 'http://localhost:4000',
        initRoute: "api/v1/type-document-id/".concat(id),
        initToken: {
          token: token
        },
        functionFetching: onFetching,
        functionSuccess: returnInit,
        functionError: newErrorDelete
      });
    }
  };
  function sortByName(items, order) {
    if (items) {
      return items.slice().sort(function (a, b) {
        var comparison = a.name.localeCompare(b.name, undefined, {
          sensitivity: 'base'
        });
        return order === 'asc' ? comparison : -comparison;
      });
    }
    return null;
  }
  var filterByName = function filterByName(search) {
    if (typeDocumentId.data.items) {
      return typeDocumentId.data.items.filter(function (item) {
        return item.name.toLowerCase().includes(search.toLowerCase());
      });
    }
    return null;
  };
  var getPaginated = function getPaginated(items, page, itemPerPage) {
    var startIndex = (page - 1) * itemPerPage;
    var endIndex = startIndex + itemPerPage;
    if (items) {
      return items.slice(startIndex, endIndex);
    }
    return null;
  };

  /**
   * Effects
   *
   *
   */

  _react["default"].useEffect(function () {
    getTypeDocumentId();
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
    country: country,
    countryValid: countryValid,
    isReady: isReady,
    isFetching: isFetching,
    isAdd: isAdd,
    isInit: isInit,
    isUpdate: isUpdate,
    typeDocumentId: typeDocumentId,
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
    changeCountry: changeCountry,
    validationCountry: validationCountry,
    validationButtonNext: validationButtonNext,
    setIsReady: setIsReady,
    onFetching: onFetching,
    onInit: onInit,
    returnInit: returnInit,
    onAdd: onAdd,
    goAdd: goAdd,
    goAddVzla: goAddVzla,
    goAddUsa: goAddUsa,
    onUpdate: onUpdate,
    offTypeDocumentId: offTypeDocumentId,
    add: add,
    update: update,
    getById: getById,
    goUpdate: goUpdate,
    sortByName: sortByName,
    setOrderList: setOrderList,
    setSearchTerm: setSearchTerm,
    filterByName: filterByName,
    setCurrentPage: setCurrentPage,
    getPaginated: getPaginated,
    deleteTypeDocumentId: deleteTypeDocumentId,
    handleNewTypeDocumentId: handleNewTypeDocumentId,
    handleUpdatedTypeDocumentId: handleUpdatedTypeDocumentId,
    handleDeletedTypeDocumentId: handleDeletedTypeDocumentId
  };
  return {
    states: states,
    actions: actions
  };
}