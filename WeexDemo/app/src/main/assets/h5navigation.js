/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(1)
	var __weex_style__ = __webpack_require__(2)
	var __weex_script__ = __webpack_require__(3)

	__weex_define__('@weex-component/ca1c040be08f003976d959d400f3fa43', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})

	__weex_bootstrap__('@weex-component/ca1c040be08f003976d959d400f3fa43',undefined,undefined)

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "ct"
	  ],
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "st"
	      ],
	      "children": [
	        {
	          "type": "scroller",
	          "append": "tree",
	          "attr": {
	            "showScrollbar": "false",
	            "scrollDirection": "vertical"
	          },
	          "children": [
	            {
	              "type": "div",
	              "classList": [
	                "content"
	              ],
	              "repeat": function () {return this.lists},
	              "events": {
	                "click": "clicked"
	              },
	              "children": [
	                {
	                  "type": "image",
	                  "classList": [
	                    "img"
	                  ],
	                  "attr": {
	                    "src": function () {return this.img}
	                  }
	                },
	                {
	                  "type": "text",
	                  "classList": [
	                    "tx"
	                  ],
	                  "attr": {
	                    "value": function () {return this.text}
	                  }
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "embed",
	      "classList": [
	        "fr"
	      ],
	      "attr": {
	        "src": function () {return this.src},
	        "type": "weex"
	      },
	      "style": {
	        "visibility": "visible"
	      }
	    }
	  ],
	  "attr": {
	    "value": "<"
	  }
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = {
	  "ct": {
	    "width": 600,
	    "flexDirection": "row",
	    "backgroundColor": "#808080"
	  },
	  "st": {
	    "width": 150,
	    "backgroundColor": "#696969"
	  },
	  "content": {
	    "marginTop": 25,
	    "alignItems": "center",
	    "width": 150
	  },
	  "img": {
	    "height": 100,
	    "width": 100
	  },
	  "tx": {
	    "textAlign": "center",
	    "width": 100,
	    "fontSize": 30
	  },
	  "fr": {
	    "flex": 1
	  }
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	    methods: {
	        clicked: function clicked() {
	            console.log('beyondboy', this.$index);
	            var bundleUrl = this.$getConfig().bundleUrl;
	            nativeLog('beyondboy' + bundleUrl);
	            var isAndroidAssets = bundleUrl.indexOf('file://assets/') >= 0;
	            if (isAndroidAssets) {
	                if (this.$index % 2 == 0) this.src = "file://assets/hello.js";else {
	                    this.src = "file://assets/weex-main.js";
	                }
	            } else {
	                this.src = 'http://100.84.251.38:12580/examples/build/hello.js';
	            }
	        }
	    },
	    data: function () {return {
	        lists: [{
	            img: 'https://assets.servedby-buysellads.com/p/manage/asset/id/28536',
	            text: 'hahah'
	        }, {
	            img: 'https://assets.servedby-buysellads.com/p/manage/asset/id/28536',
	            text: 'hahah'
	        }, {
	            img: 'https://assets.servedby-buysellads.com/p/manage/asset/id/28536',
	            text: 'hahah'
	        }, {
	            img: 'https://assets.servedby-buysellads.com/p/manage/asset/id/28536',
	            text: 'hahah'
	        }, {
	            img: 'https://assets.servedby-buysellads.com/p/manage/asset/id/28536',
	            text: 'hahah'
	        }, {
	            img: 'https://assets.servedby-buysellads.com/p/manage/asset/id/28536',
	            text: 'hahah'
	        }, {
	            img: 'https://assets.servedby-buysellads.com/p/manage/asset/id/28536',
	            text: 'hahah'
	        }],
	        src: ''
	    }}
	};}
	/* generated by weex-loader */


/***/ }
/******/ ]);