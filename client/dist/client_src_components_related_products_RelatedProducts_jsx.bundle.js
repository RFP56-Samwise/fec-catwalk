"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmy_webpack_project"] = self["webpackChunkmy_webpack_project"] || []).push([["client_src_components_related_products_RelatedProducts_jsx"],{

/***/ "./client/src/components/related_products/ProductComparisonModal.jsx":
/*!***************************************************************************!*\
  !*** ./client/src/components/related_products/ProductComparisonModal.jsx ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar ProductComparisonModal = function ProductComparisonModal(props) {\n  // [\n  //   {\n  //     name: ..., \n  //     current: ...,\n  //     compared: ...\n  //   }\n  // ]\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"comparison-modal\",\n    onClick: function onClick(e) {\n      return e.stopPropagation();\n    },\n    style: props.darkMode ? {\n      background: 'rgba(82, 82, 82, 0.938)'\n    } : {}\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, props.currentProduct.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, props.comparedProduct.name));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductComparisonModal);\n\n//# sourceURL=webpack://my-webpack-project/./client/src/components/related_products/ProductComparisonModal.jsx?");

/***/ }),

/***/ "./client/src/components/related_products/RelatedProducts.jsx":
/*!********************************************************************!*\
  !*** ./client/src/components/related_products/RelatedProducts.jsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _RelatedProductsItem_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RelatedProductsItem.jsx */ \"./client/src/components/related_products/RelatedProductsItem.jsx\");\n/* harmony import */ var _ProductComparisonModal_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductComparisonModal.jsx */ \"./client/src/components/related_products/ProductComparisonModal.jsx\");\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/md */ \"./node_modules/react-icons/md/index.esm.js\");\n/* harmony import */ var _useOutsideClick_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../useOutsideClick.js */ \"./client/src/components/useOutsideClick.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\nvar _this = undefined;\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n\n\nvar RelatedProducts = function RelatedProducts(props) {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),\n      _useState2 = _slicedToArray(_useState, 2),\n      relatedProducts = _useState2[0],\n      setRelatedProducts = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),\n      _useState4 = _slicedToArray(_useState3, 2),\n      scrollPosition = _useState4[0],\n      setScrollPosition = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(500),\n      _useState6 = _slicedToArray(_useState5, 2),\n      scrollLength = _useState6[0],\n      setScrollLength = _useState6[1];\n\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),\n      _useState8 = _slicedToArray(_useState7, 2),\n      productData = _useState8[0],\n      setProductData = _useState8[1];\n\n  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      _useState10 = _slicedToArray(_useState9, 2),\n      showModal = _useState10[0],\n      setShowModal = _useState10[1];\n\n  var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    fetchRelatedProducts(); // cleanup/reset state after unmount\n\n    return function () {\n      setRelatedProducts(null);\n    };\n  }, []);\n\n  var fetchRelatedProducts = function fetchRelatedProducts() {\n    axios__WEBPACK_IMPORTED_MODULE_4___default().get(\"/products/\".concat(props.currentProduct.id, \"/related\")).then(function (res) {\n      setRelatedProducts(res.data);\n    })[\"catch\"](function (error) {\n      console.log(error);\n    });\n  };\n\n  var slide = function slide(direction) {\n    var element = document.getElementById('products-slide');\n    setScrollLength(element.scrollHeight);\n\n    if (direction === 'right') {\n      setScrollPosition(element.scrollLeft += 800);\n    } else {\n      setScrollPosition(element.scrollLeft -= 680);\n    }\n  };\n\n  var handleLeftArrow = function handleLeftArrow() {\n    slide('left');\n  };\n\n  var handleRightArrow = function handleRightArrow() {\n    slide('right');\n  };\n\n  var handleModalClick = function handleModalClick(clickedProductData) {\n    setProductData(clickedProductData);\n    setShowModal(true);\n  };\n\n  (0,_useOutsideClick_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(ref, function () {\n    if (showModal) {\n      setShowModal(false);\n    }\n  });\n\n  if (relatedProducts === null) {\n    return '';\n  } else {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"products-container\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", {\n      className: \"list-title\"\n    }, \"RELATED PRODUCTS\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      ref: ref\n    }, showModal && productData ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ProductComparisonModal_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      currentProduct: props.currentProduct,\n      comparedProduct: productData,\n      darkMode: props.darkMode\n    }) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"scroll-container\"\n    }, scrollPosition > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n      className: \"arrow\",\n      \"aria-label\": \"Justify\",\n      onClick: handleLeftArrow.bind(_this)\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_5__.MdArrowBackIos, {\n      onClick: handleLeftArrow.bind(_this)\n    })) : '', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"horizontal-slide\",\n      id: \"products-slide\"\n    }, relatedProducts.map(function (productId, index) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_RelatedProductsItem_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        productId: productId,\n        fetchNewProduct: props.fetchNewProduct.bind(_this),\n        currentProduct: props.currentProduct,\n        key: index,\n        handleModalClick: handleModalClick,\n        darkMode: props.darkMode\n      });\n    })), relatedProducts.length > 4 && scrollPosition < scrollLength ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n      className: \"arrow\",\n      \"aria-label\": \"Justify\",\n      onClick: handleRightArrow.bind(_this)\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_5__.MdArrowForwardIos, {\n      onClick: handleRightArrow.bind(_this)\n    })) : ''));\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RelatedProducts);\n\n//# sourceURL=webpack://my-webpack-project/./client/src/components/related_products/RelatedProducts.jsx?");

/***/ }),

/***/ "./client/src/components/related_products/RelatedProductsItem.jsx":
/*!************************************************************************!*\
  !*** ./client/src/components/related_products/RelatedProductsItem.jsx ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _review_reviewmain_StarRating_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../review/reviewmain/StarRating.jsx */ \"./client/src/components/review/reviewmain/StarRating.jsx\");\n/* harmony import */ var _useOutsideClick_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../useOutsideClick.js */ \"./client/src/components/useOutsideClick.js\");\n/* harmony import */ var _ProductComparisonModal_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProductComparisonModal.jsx */ \"./client/src/components/related_products/ProductComparisonModal.jsx\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var _TrackerHOC_Track_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../TrackerHOC/Track.js */ \"./client/src/components/TrackerHOC/Track.js\");\nvar _this = undefined;\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n\n\n\nvar RelatedProductsItem = function RelatedProductsItem(props) {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),\n      _useState2 = _slicedToArray(_useState, 2),\n      productData = _useState2[0],\n      setProductData = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),\n      _useState4 = _slicedToArray(_useState3, 2),\n      styleData = _useState4[0],\n      setStyleData = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),\n      _useState6 = _slicedToArray(_useState5, 2),\n      reviewData = _useState6[0],\n      setReviewData = _useState6[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    fetchProductData();\n    fetchStyleData();\n    fetchReviewData(); // cleanup/reset state after unmount\n\n    return function () {\n      setProductData(null);\n      setStyleData(null);\n      setReviewData(null);\n    };\n  }, []);\n\n  var fetchProductData = function fetchProductData() {\n    axios__WEBPACK_IMPORTED_MODULE_1___default().get(\"/products/\".concat(props.productId)).then(function (res) {\n      setProductData(res.data);\n    })[\"catch\"](function (error) {\n      console.log(error);\n    });\n  };\n\n  var fetchStyleData = function fetchStyleData() {\n    axios__WEBPACK_IMPORTED_MODULE_1___default().get(\"/products/\".concat(props.productId, \"/styles\")).then(function (res) {\n      setStyleData(res.data.results[0]);\n    })[\"catch\"](function (error) {\n      console.log(error);\n    });\n  };\n\n  var fetchReviewData = function fetchReviewData() {\n    axios__WEBPACK_IMPORTED_MODULE_1___default().get(\"/reviews/\".concat(props.productId)).then(function (res) {\n      setReviewData(res.data.results);\n    })[\"catch\"](function (error) {\n      console.log(error);\n    });\n  };\n\n  var onClickCard = function onClickCard() {\n    props.fetchNewProduct(props.productId);\n  };\n\n  var toggleModal = function toggleModal(e) {\n    e.stopPropagation();\n    props.handleModalClick(productData);\n  };\n\n  if (productData === null || styleData === null || reviewData === null) {\n    return '';\n  } else {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_TrackerHOC_Track_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      eventName: \"Product - \".concat(productData.name, \" was clicked\"),\n      module: \"Related Products\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"product-card\",\n      onClick: onClickCard.bind(_this),\n      style: props.darkMode ? {\n        backgroundColor: '#2a2c29',\n        border: '1px solid #808080'\n      } : {}\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"info-container\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaRegStar, {\n      onClick: toggleModal.bind(_this),\n      className: \"info-btn\"\n    }), styleData.photos[0].thumbnail_url ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n      src: styleData.photos[0].thumbnail_url,\n      height: \"220\",\n      alt: 'product img for ' + styleData.name\n    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n      src: \"./img/image-not-found.webp\",\n      height: \"220\",\n      alt: \"product img not available\"\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h3\", null, \"CATEGORY: \", productData.category.toUpperCase()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", {\n      className: \"product-name\"\n    }, productData.name), styleData.sale_price ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h3\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n      style: {\n        color: 'red',\n        'fontWeight': 'bold'\n      }\n    }, \"$\", styleData.sale_price), \" \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n      style: {\n        'textDecorationLine': 'line-through'\n      }\n    }, \"$\", styleData.original_price)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h3\", null, \"$\", styleData.original_price), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_review_reviewmain_StarRating_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      rating: reviewData.reduce(function (total, obj) {\n        return obj.rating + total;\n      }, 0) / reviewData.length\n    })));\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RelatedProductsItem);\n\n//# sourceURL=webpack://my-webpack-project/./client/src/components/related_products/RelatedProductsItem.jsx?");

/***/ }),

/***/ "./client/src/components/review/reviewmain/StarRating.jsx":
/*!****************************************************************!*\
  !*** ./client/src/components/review/reviewmain/StarRating.jsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ThemeContext_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ThemeContext.js */ \"./client/src/components/ThemeContext.js\");\n\n\n\nvar StarRating = function StarRating(props) {\n  var ratingWidthStyle = {\n    width: \"\".concat(props.rating / 5 * 100, \"%\")\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ThemeContext_js__WEBPACK_IMPORTED_MODULE_1__.ThemeContext.Consumer, null, function (darkMode) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"star-ratings\",\n      style: darkMode ? {\n        width: '80px',\n        'WebkitTextStroke': '1px #999',\n        color: '#1f1e1e'\n      } : {\n        width: '80px'\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"fill-ratings\",\n      style: darkMode ? {\n        width: \"\".concat(props.rating / 5 * 100, \"%\"),\n        color: 'white'\n      } : {\n        width: \"\".concat(props.rating / 5 * 100, \"%\")\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", null, \"\\u2605\\u2605\\u2605\\u2605\\u2605\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"empty-ratings\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", null, \"\\u2605\\u2605\\u2605\\u2605\\u2605\")));\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StarRating);\n\n//# sourceURL=webpack://my-webpack-project/./client/src/components/review/reviewmain/StarRating.jsx?");

/***/ }),

/***/ "./client/src/components/useOutsideClick.js":
/*!**************************************************!*\
  !*** ./client/src/components/useOutsideClick.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar useOutsideClick = function useOutsideClick(ref, callback) {\n  var handleClick = function handleClick(e) {\n    if (ref.current && !ref.current.contains(e.target)) {\n      callback();\n    }\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    document.addEventListener(\"click\", handleClick);\n    return function () {\n      document.removeEventListener(\"click\", handleClick);\n    };\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useOutsideClick);\n\n//# sourceURL=webpack://my-webpack-project/./client/src/components/useOutsideClick.js?");

/***/ })

}]);