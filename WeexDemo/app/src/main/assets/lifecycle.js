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

	var __weex_template__ = __webpack_require__(5)
	var __weex_style__ = __webpack_require__(6)
	var __weex_script__ = __webpack_require__(7)

	__weex_define__('@weex-component/a5e6811f2eeee55937c9d6f7513df528', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})

	__weex_bootstrap__('@weex-component/a5e6811f2eeee55937c9d6f7513df528',undefined,undefined)

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "tc_support_scroller",
	  "events": {
	    "viewappear": "viewappear",
	    "viewdisappear": "viewdisappear"
	  },
	  "children": [
	    {
	      "type": "tc_support_maintitle",
	      "attr": {
	        "title": "TC_InterAct_Lifecycle"
	      }
	    },
	    {
	      "type": "div",
	      "classList": [
	        "div"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "classList": [
	            "font"
	          ],
	          "style": {
	            "width": 200
	          },
	          "attr": {
	            "value": "created point time:"
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "font"
	          ],
	          "attr": {
	            "value": function () {return this.createdV}
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "div"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "classList": [
	            "font"
	          ],
	          "style": {
	            "width": 200
	          },
	          "attr": {
	            "value": "appear point time:"
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "font"
	          ],
	          "attr": {
	            "value": function () {return this.appearV}
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "cell"
	      ],
	      "repeat": function () {return this.shopList},
	      "append": "tree",
	      "children": [
	        {
	          "type": "div",
	          "classList": [
	            "shopDiv"
	          ],
	          "children": [
	            {
	              "type": "div",
	              "classList": [
	                "shopHeader"
	              ],
	              "style": {
	                "flexDirection": "row"
	              },
	              "children": [
	                {
	                  "type": "div",
	                  "style": {
	                    "flex": 2,
	                    "flexDirection": "row"
	                  },
	                  "children": [
	                    {
	                      "type": "div",
	                      "children": [
	                        {
	                          "type": "image",
	                          "style": {
	                            "width": 60,
	                            "height": 60
	                          },
	                          "attr": {
	                            "src": function () {return this.PersonPhoto}
	                          }
	                        }
	                      ]
	                    },
	                    {
	                      "type": "div",
	                      "style": {
	                        "flexDirection": "column",
	                        "marginLeft": 5
	                      },
	                      "children": [
	                        {
	                          "type": "div",
	                          "style": {
	                            "marginTop": 5
	                          },
	                          "children": [
	                            {
	                              "type": "text",
	                              "style": {
	                                "fontSize": 20
	                              },
	                              "attr": {
	                                "value": function () {return this.PersonName}
	                              }
	                            }
	                          ]
	                        },
	                        {
	                          "type": "div",
	                          "style": {
	                            "marginTop": 5
	                          },
	                          "children": [
	                            {
	                              "type": "text",
	                              "style": {
	                                "fontSize": 20,
	                                "color": "#cccccc"
	                              },
	                              "attr": {
	                                "value": function () {return this.PersonVisitTime}
	                              }
	                            }
	                          ]
	                        }
	                      ]
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "style": {
	                    "flex": 5,
	                    "flexDirection": "row"
	                  },
	                  "children": [
	                    {
	                      "type": "div",
	                      "style": {
	                        "flexDirection": "row",
	                        "marginLeft": 10,
	                        "marginTop": 10
	                      },
	                      "children": [
	                        {
	                          "type": "div",
	                          "children": [
	                            {
	                              "type": "image",
	                              "style": {
	                                "width": 20,
	                                "height": 20
	                              },
	                              "attr": {
	                                "src": "https://img.alicdn.com/tps/i4/TB1zkDeIFXXXXXrXVXX07tlTXXX-200-200.png_88x88xz.jpg"
	                              }
	                            }
	                          ]
	                        },
	                        {
	                          "type": "div",
	                          "children": [
	                            {
	                              "type": "text",
	                              "style": {
	                                "fontSize": 20
	                              },
	                              "attr": {
	                                "value": "希望"
	                              }
	                            }
	                          ]
	                        }
	                      ]
	                    },
	                    {
	                      "type": "div",
	                      "style": {
	                        "position": "absolute",
	                        "left": 90,
	                        "top": 10,
	                        "flexDirection": "row"
	                      },
	                      "children": [
	                        {
	                          "type": "div",
	                          "children": [
	                            {
	                              "type": "image",
	                              "style": {
	                                "width": 20,
	                                "height": 20
	                              },
	                              "attr": {
	                                "src": "https://img.alicdn.com/tps/i2/TB1hRb1IXXXXXX3XVXXXQaP.pXX-87-87.jpeg"
	                              }
	                            }
	                          ]
	                        },
	                        {
	                          "type": "div",
	                          "children": [
	                            {
	                              "type": "text",
	                              "style": {
	                                "fontSize": 20
	                              },
	                              "attr": {
	                                "value": "会员"
	                              }
	                            }
	                          ]
	                        }
	                      ]
	                    },
	                    {
	                      "type": "div",
	                      "style": {
	                        "position": "absolute",
	                        "left": 170,
	                        "top": 10,
	                        "flexDirection": "row"
	                      },
	                      "children": [
	                        {
	                          "type": "div",
	                          "children": [
	                            {
	                              "type": "image",
	                              "style": {
	                                "width": 20,
	                                "height": 20
	                              },
	                              "attr": {
	                                "src": "https://img.alicdn.com/tps/i3/TB1DGkJJFXXXXaZXFXX07tlTXXX-200-200.png"
	                              }
	                            }
	                          ]
	                        },
	                        {
	                          "type": "div",
	                          "children": [
	                            {
	                              "type": "text",
	                              "style": {
	                                "fontSize": 20
	                              },
	                              "attr": {
	                                "value": "认证"
	                              }
	                            }
	                          ]
	                        }
	                      ]
	                    },
	                    {
	                      "type": "div",
	                      "style": {
	                        "position": "absolute",
	                        "left": 250,
	                        "top": 10,
	                        "flexDirection": "row"
	                      },
	                      "children": [
	                        {
	                          "type": "div",
	                          "children": [
	                            {
	                              "type": "image",
	                              "style": {
	                                "width": 20,
	                                "height": 20
	                              },
	                              "attr": {
	                                "src": "https://img.alicdn.com/tps/i1/TB1nFvPIXXXXXbUXXXXUAkPJpXX-87-87.png"
	                              }
	                            }
	                          ]
	                        },
	                        {
	                          "type": "div",
	                          "children": [
	                            {
	                              "type": "text",
	                              "style": {
	                                "fontSize": 20
	                              },
	                              "attr": {
	                                "value": "加友"
	                              }
	                            }
	                          ]
	                        }
	                      ]
	                    },
	                    {
	                      "type": "div",
	                      "style": {
	                        "position": "absolute",
	                        "left": 330,
	                        "top": 10,
	                        "flexDirection": "row"
	                      },
	                      "children": [
	                        {
	                          "type": "div",
	                          "children": [
	                            {
	                              "type": "image",
	                              "style": {
	                                "width": 20,
	                                "height": 20
	                              },
	                              "attr": {
	                                "src": "https://img.alicdn.com/tps/i2/TB1CpD7IXXXXXbSXXXXUAkPJpXX-87-87.png"
	                              }
	                            }
	                          ]
	                        },
	                        {
	                          "type": "div",
	                          "children": [
	                            {
	                              "type": "text",
	                              "style": {
	                                "fontSize": 20
	                              },
	                              "attr": {
	                                "value": "留言"
	                              }
	                            }
	                          ]
	                        }
	                      ]
	                    },
	                    {
	                      "type": "div",
	                      "style": {
	                        "position": "absolute",
	                        "left": 410,
	                        "top": 10,
	                        "flexDirection": "row"
	                      },
	                      "children": [
	                        {
	                          "type": "div",
	                          "children": [
	                            {
	                              "type": "image",
	                              "style": {
	                                "width": 20,
	                                "height": 20
	                              },
	                              "attr": {
	                                "src": "https://gtms02.alicdn.com/tps/i2/TB11ZZfIVXXXXbMXFXXEDhGGXXX-32-32.png"
	                              }
	                            }
	                          ]
	                        },
	                        {
	                          "type": "div",
	                          "children": [
	                            {
	                              "type": "text",
	                              "style": {
	                                "fontSize": 20
	                              },
	                              "attr": {
	                                "value": "达人"
	                              }
	                            }
	                          ]
	                        }
	                      ]
	                    }
	                  ]
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "classList": [
	                "shopBody"
	              ],
	              "style": {
	                "flexDirection": "column"
	              },
	              "children": [
	                {
	                  "type": "div",
	                  "classList": [
	                    "descDiv"
	                  ],
	                  "style": {
	                    "marginTop": 10,
	                    "marginLeft": 10
	                  },
	                  "children": [
	                    {
	                      "type": "text",
	                      "classList": [
	                        "shopDesc"
	                      ],
	                      "style": {
	                        "fontSize": 25
	                      },
	                      "attr": {
	                        "value": function () {return this.shopDesc}
	                      }
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "style": {
	                    "flexDirection": "row"
	                  },
	                  "children": [
	                    {
	                      "type": "div",
	                      "classList": [
	                        "imgDiv"
	                      ],
	                      "style": {
	                        "flex": 1,
	                        "flexDirection": "column",
	                        "margin": 10
	                      },
	                      "repeat": function () {return this.shopImgList},
	                      "children": [
	                        {
	                          "type": "div",
	                          "children": [
	                            {
	                              "type": "image",
	                              "classList": [
	                                "shopImg"
	                              ],
	                              "style": {
	                                "width": function () {return this.shopImgWidth},
	                                "height": function () {return this.shopImgHeight}
	                              },
	                              "attr": {
	                                "src": function () {return this.shopImg}
	                              }
	                            }
	                          ]
	                        },
	                        {
	                          "type": "div",
	                          "style": {
	                            "flex": 1,
	                            "marginTop": 10,
	                            "flexDirection": "row"
	                          },
	                          "children": [
	                            {
	                              "type": "div",
	                              "style": {
	                                "flex": 1,
	                                "justifyContent": "center",
	                                "flexDirection": "row"
	                              },
	                              "children": [
	                                {
	                                  "type": "div",
	                                  "children": [
	                                    {
	                                      "type": "image",
	                                      "style": {
	                                        "width": 20,
	                                        "height": 20
	                                      },
	                                      "attr": {
	                                        "src": "https://img.alicdn.com/tps/i1/TB1nFvPIXXXXXbUXXXXUAkPJpXX-87-87.png"
	                                      }
	                                    }
	                                  ]
	                                },
	                                {
	                                  "type": "div",
	                                  "style": {
	                                    "marginLeft": 5
	                                  },
	                                  "children": [
	                                    {
	                                      "type": "text",
	                                      "style": {
	                                        "fontSize": 20,
	                                        "textAlign": "center"
	                                      },
	                                      "attr": {
	                                        "value": "喜欢"
	                                      }
	                                    }
	                                  ]
	                                }
	                              ]
	                            },
	                            {
	                              "type": "div",
	                              "style": {
	                                "flex": 1,
	                                "justifyContent": "center",
	                                "flexDirection": "row"
	                              },
	                              "children": [
	                                {
	                                  "type": "div",
	                                  "children": [
	                                    {
	                                      "type": "image",
	                                      "style": {
	                                        "width": 20,
	                                        "height": 20
	                                      },
	                                      "attr": {
	                                        "src": "https://img.alicdn.com/tps/i2/TB1CpD7IXXXXXbSXXXXUAkPJpXX-87-87.png"
	                                      }
	                                    }
	                                  ]
	                                },
	                                {
	                                  "type": "div",
	                                  "style": {
	                                    "marginLeft": 5
	                                  },
	                                  "children": [
	                                    {
	                                      "type": "text",
	                                      "style": {
	                                        "fontSize": 20,
	                                        "textAlign": "center"
	                                      },
	                                      "attr": {
	                                        "value": "不爱"
	                                      }
	                                    }
	                                  ]
	                                }
	                              ]
	                            }
	                          ]
	                        }
	                      ]
	                    }
	                  ]
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "classList": [
	                "shopFooter"
	              ],
	              "style": {
	                "flexDirection": "row",
	                "marginTop": 10,
	                "marginLeft": 10,
	                "justifyContent": "flex-end"
	              },
	              "children": [
	                {
	                  "type": "div",
	                  "style": {
	                    "marginRight": 5
	                  },
	                  "children": [
	                    {
	                      "type": "image",
	                      "classList": [
	                        "shopLikeImg",
	                        "smallImg"
	                      ],
	                      "attr": {
	                        "src": function () {return this.shopLikeImg}
	                      }
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "style": {
	                    "marginRight": 15
	                  },
	                  "children": [
	                    {
	                      "type": "text",
	                      "classList": [
	                        "shopLikeText"
	                      ],
	                      "style": {
	                        "fontSize": 20
	                      },
	                      "attr": {
	                        "value": function () {return this.shopLikeText}
	                      }
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "style": {
	                    "marginRight": 5
	                  },
	                  "children": [
	                    {
	                      "type": "image",
	                      "classList": [
	                        "shopCommentImg",
	                        "smallImg"
	                      ],
	                      "attr": {
	                        "src": function () {return this.shopCommentImg}
	                      }
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "style": {
	                    "marginRight": 15
	                  },
	                  "children": [
	                    {
	                      "type": "text",
	                      "classList": [
	                        "shopCommentText"
	                      ],
	                      "style": {
	                        "fontSize": 20
	                      },
	                      "attr": {
	                        "value": function () {return this.shopCommentText}
	                      }
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "style": {
	                    "marginRight": 5
	                  },
	                  "children": [
	                    {
	                      "type": "image",
	                      "classList": [
	                        "shopLookImg",
	                        "smallImg"
	                      ],
	                      "attr": {
	                        "src": function () {return this.shopLookImg}
	                      }
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "style": {
	                    "marginRight": 15
	                  },
	                  "children": [
	                    {
	                      "type": "text",
	                      "classList": [
	                        "shopLookText"
	                      ],
	                      "style": {
	                        "fontSize": 20
	                      },
	                      "attr": {
	                        "value": function () {return this.shopLookText}
	                      }
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "style": {
	                    "marginRight": 5
	                  },
	                  "children": [
	                    {
	                      "type": "image",
	                      "classList": [
	                        "shareImg",
	                        "smallImg"
	                      ],
	                      "attr": {
	                        "src": function () {return this.shareImg}
	                      }
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "style": {
	                    "marginRight": 20
	                  },
	                  "children": [
	                    {
	                      "type": "text",
	                      "classList": [
	                        "shareText"
	                      ],
	                      "style": {
	                        "fontSize": 20
	                      },
	                      "attr": {
	                        "value": function () {return this.shareText}
	                      }
	                    }
	                  ]
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = {
	  "flexRow": {
	    "flexDirection": "row"
	  },
	  "flexColumn": {
	    "flexDirection": "column"
	  },
	  "font": {
	    "fontFamily": "Times New Roman",
	    "fontSize": 30
	  },
	  "div": {
	    "margin": 10,
	    "flexDirection": "row"
	  },
	  "shopImg": {
	    "width": 220,
	    "height": 220
	  },
	  "scroller": {
	    "flexDirection": "column",
	    "overflow": "hidden",
	    "width": 750,
	    "backgroundColor": "#dddddd"
	  },
	  "shopDiv": {
	    "flexDirection": "column",
	    "backgroundColor": "#ffffff",
	    "margin": 5,
	    "padding": 10,
	    "borderWidth": 1,
	    "borderColor": "#cccccc",
	    "overflow": "visible"
	  },
	  "shopRowList": {
	    "flexDirection": "column",
	    "borderWidth": 1,
	    "borderColor": "#cccccc",
	    "overflow": "visible",
	    "margin": 5,
	    "padding": 10,
	    "backgroundColor": "#ffffff"
	  },
	  "shopHeader": {
	    "flexDirection": "row",
	    "width": 720
	  },
	  "shopFooter": {
	    "flexDirection": "row",
	    "width": 720
	  },
	  "smallImg": {
	    "width": 20,
	    "height": 20
	  },
	  "list": {
	    "flexDirection": "column",
	    "overflow": "hidden",
	    "width": 750,
	    "height": 1200,
	    "backgroundColor": "#dddddd"
	  },
	  "cell": {
	    "backgroundColor": "#dddddd",
	    "flexDirection": "column",
	    "width": 750
	  }
	}

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	    data: function () {return {
	        createdV: '',
	        appearV: '',
	        shopList: [{
	            scopeValue: 1,
	            PersonPhoto: 'https://gw.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_60x60.jpg',
	            PersonName: '张三丰',
	            PersonVisitTime: '昨天',
	            shopDesc: '极有家，过我想要过的生活，特卖大放送！～～～～～',
	            shopImgList: [{ shopImgWidth: 220, shopImgHeight: 220, shopImg: 'https://gd2.alicdn.com/bao/uploaded/i2/TB1rtOnHpXXXXXLaXXXXXXXXXXX_!!0-item_pic.jpg_220x220.jpg' }, { shopImgWidth: 220, shopImgHeight: 220, shopImg: 'https://gd4.alicdn.com/bao/uploaded/i4/TB15KrfFVXXXXXJXXXXXXXXXXXX_!!0-item_pic.jpg_220x220.jpg' }, { shopImgWidth: 220, shopImgHeight: 220, shopImg: 'https://gd2.alicdn.com/bao/uploaded/i2/TB1t5YBGVXXXXXcaXXXXXXXXXXX_!!0-item_pic.jpg_220x220.jpg' }],
	            shopLikeImg: 'https://img.alicdn.com/tps/i1/TB1jTxXIVXXXXb8XXXX07tlTXXX-200-200.png_88x88xz.jpg',
	            shopLikeText: '6',
	            shopCommentImg: 'https://img.alicdn.com/tps/i1/TB1kTKyIVXXXXacXFXX07tlTXXX-200-200.png_88x88xz.jpg',
	            shopCommentText: '97',
	            shopLookImg: 'https://img.alicdn.com/imgextra/i4/397746073/TB2IseKeFXXXXcVXXXXXXXXXXXX-397746073.png_88x88xz.jpg',
	            shopLookText: '1003',
	            shareImg: 'https://cbu01.alicdn.com/cms/upload/2015/930/224/2422039_702806130.png_88x88xz.jpg',
	            shareText: "10"

	        }, {
	            scopeValue: 2,
	            PersonPhoto: 'https://gw.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_60x60.jpg',
	            PersonName: '张无忌',
	            PersonVisitTime: '昨天',
	            shopDesc: '女士包包，自由自在！～～～～～',
	            shopImgList: [{ shopImgWidth: 220, shopImgHeight: 220, shopImg: 'https://gd1.alicdn.com/imgextra/i1/2655929383/TB2.qITjpXXXXcIXXXXXXXXXXXX_!!2655929383.jpg_220x220.jpg' }, { shopImgWidth: 220, shopImgHeight: 220, shopImg: 'https://gd3.alicdn.com/imgextra/i3/2655929383/TB2eWwZjpXXXXbHXXXXXXXXXXXX_!!2655929383.jpg_220x220.jpg' }, { shopImgWidth: 220, shopImgHeight: 220, shopImg: 'https://gd2.alicdn.com/imgextra/i2/2655929383/TB2tgQWjpXXXXbZXXXXXXXXXXXX_!!2655929383.jpg_220x220.jpg' }],
	            shopLikeImg: 'https://img.alicdn.com/tps/i1/TB1jTxXIVXXXXb8XXXX07tlTXXX-200-200.png_88x88xz.jpg',
	            shopLikeText: '6',
	            shopCommentImg: 'https://img.alicdn.com/tps/i1/TB1kTKyIVXXXXacXFXX07tlTXXX-200-200.png_88x88xz.jpg',
	            shopCommentText: '97',
	            shopLookImg: 'https://img.alicdn.com/imgextra/i4/397746073/TB2IseKeFXXXXcVXXXXXXXXXXXX-397746073.png_88x88xz.jpg',
	            shopLookText: '1003',
	            shareImg: 'https://cbu01.alicdn.com/cms/upload/2015/930/224/2422039_702806130.png_88x88xz.jpg',
	            shareText: "10"

	        }, {
	            scopeValue: 3,
	            PersonPhoto: 'https://gw.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_60x60.jpg',
	            PersonName: '杨过',
	            PersonVisitTime: '昨天',
	            shopDesc: '一双好鞋，陪你走遍天涯！～～～～～',
	            shopImgList: [{ shopImgWidth: 220, shopImgHeight: 220, shopImg: 'https://gd1.alicdn.com/imgextra/i1/TB1AFz9LXXXXXbrXVXXXXXXXXXX_!!0-item_pic.jpg_220x220.jpg' }, { shopImgWidth: 220, shopImgHeight: 220, shopImg: 'https://gd2.alicdn.com/imgextra/i2/2557954751/TB2is2njXXXXXatXpXXXXXXXXXX_!!2557954751.jpg_220x220.jpg' }, { shopImgWidth: 220, shopImgHeight: 220, shopImg: 'https://gd2.alicdn.com/imgextra/i2/2557954751/TB2PNYGjXXXXXbXXXXXXXXXXXXX_!!2557954751.jpg_220x220.jpg' }],
	            shopLikeImg: 'https://img.alicdn.com/tps/i1/TB1jTxXIVXXXXb8XXXX07tlTXXX-200-200.png_88x88xz.jpg',
	            shopLikeText: '6',
	            shopCommentImg: 'https://img.alicdn.com/tps/i1/TB1kTKyIVXXXXacXFXX07tlTXXX-200-200.png_88x88xz.jpg',
	            shopCommentText: '97',
	            shopLookImg: 'https://img.alicdn.com/imgextra/i4/397746073/TB2IseKeFXXXXcVXXXXXXXXXXXX-397746073.png_88x88xz.jpg',
	            shopLookText: '1003',
	            shareImg: 'https://cbu01.alicdn.com/cms/upload/2015/930/224/2422039_702806130.png_88x88xz.jpg',
	            shareText: "10"

	        }, {
	            scopeValue: 4,
	            PersonPhoto: 'https://gw.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_60x60.jpg',
	            PersonName: '西门吹雪',
	            PersonVisitTime: '今天',
	            shopDesc: '大侠，就要有件好衣服！～～～～～',
	            shopImgList: [{ shopImgWidth: 220, shopImgHeight: 220, shopImg: 'https://gd4.alicdn.com/imgextra/i4/69426324/TB2zbwdfXXXXXa4XpXXXXXXXXXX_!!69426324.jpg_220x220.jpg' }, { shopImgWidth: 220, shopImgHeight: 220, shopImg: 'https://gd4.alicdn.com/imgextra/i4/69426324/TB2L7ZAfXXXXXXOXXXXXXXXXXXX_!!69426324.jpg_220x220.jpg' }, { shopImgWidth: 220, shopImgHeight: 220, shopImg: 'https://gd4.alicdn.com/imgextra/i4/69426324/TB2p9wufXXXXXbiXXXXXXXXXXXX_!!69426324.jpg_220x220.jpg' }],
	            shopLikeImg: 'https://img.alicdn.com/tps/i1/TB1jTxXIVXXXXb8XXXX07tlTXXX-200-200.png_88x88xz.jpg',
	            shopLikeText: '6',
	            shopCommentImg: 'https://img.alicdn.com/tps/i1/TB1kTKyIVXXXXacXFXX07tlTXXX-200-200.png_88x88xz.jpg',
	            shopCommentText: '97',
	            shopLookImg: 'https://img.alicdn.com/imgextra/i4/397746073/TB2IseKeFXXXXcVXXXXXXXXXXXX-397746073.png_88x88xz.jpg',
	            shopLookText: '1003',
	            shareImg: 'https://cbu01.alicdn.com/cms/upload/2015/930/224/2422039_702806130.png_88x88xz.jpg',
	            shareText: "10"

	        }, {
	            scopeValue: 5,
	            PersonPhoto: 'https://gw.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_60x60.jpg',
	            PersonName: '黄蓉',
	            PersonVisitTime: '昨天',
	            shopDesc: '靖哥哥说了，买买买！～～～～～',
	            shopImgList: [{ shopImgWidth: 220, shopImgHeight: 220, shopImg: 'https://gd3.alicdn.com/bao/uploaded/i3/TB1MQ8_KVXXXXaLXVXXXXXXXXXX_!!0-item_pic.jpg_220x220.jpg' }, { shopImgWidth: 220, shopImgHeight: 220, shopImg: 'https://gd2.alicdn.com/imgextra/i2/53218032/TB2bGSqiXXXXXXyXpXXXXXXXXXX_!!53218032.jpg_220x220.jpg' }, { shopImgWidth: 220, shopImgHeight: 220, shopImg: 'https://gd2.alicdn.com/bao/uploaded/i2/TB1kP2zKFXXXXbIXXXXXXXXXXXX_!!0-item_pic.jpg_220x220.jpg' }],
	            shopLikeImg: 'https://img.alicdn.com/tps/i1/TB1jTxXIVXXXXb8XXXX07tlTXXX-200-200.png_88x88xz.jpg',
	            shopLikeText: '6',
	            shopCommentImg: 'https://img.alicdn.com/tps/i1/TB1kTKyIVXXXXacXFXX07tlTXXX-200-200.png_88x88xz.jpg',
	            shopCommentText: '97',
	            shopLookImg: 'https://img.alicdn.com/imgextra/i4/397746073/TB2IseKeFXXXXcVXXXXXXXXXXXX-397746073.png_88x88xz.jpg',
	            shopLookText: '1003',
	            shareImg: 'https://cbu01.alicdn.com/cms/upload/2015/930/224/2422039_702806130.png_88x88xz.jpg',
	            shareText: "10"

	        }, {
	            scopeValue: 1,
	            PersonPhoto: 'https://gw.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_60x60.jpg',
	            PersonName: '乔峰',
	            PersonVisitTime: '昨天',
	            shopDesc: '刀山火海，任我闯荡！～～～～～',
	            shopImgList: [{ shopImgWidth: 220, shopImgHeight: 220, shopImg: 'https://gd4.alicdn.com/bao/uploaded/i4/TB11yFnHXXXXXakaXXXXXXXXXXX_!!0-item_pic.jpg_220x220.jpg' }, { shopImgWidth: 220, shopImgHeight: 220, shopImg: 'https://gd4.alicdn.com/imgextra/i4/32720628/TB2CRJUcXXXXXXwXpXXXXXXXXXX_!!32720628.jpg_220x220.jpg' }, { shopImgWidth: 220, shopImgHeight: 220, shopImg: 'https://gd2.alicdn.com/bao/uploaded/i2/TB17LUzHXXXXXcEaXXXXXXXXXXX_!!0-item_pic.jpg_220x220.jpg' }],
	            shopLikeImg: 'https://img.alicdn.com/tps/i1/TB1jTxXIVXXXXb8XXXX07tlTXXX-200-200.png_88x88xz.jpg',
	            shopLikeText: '6',
	            shopCommentImg: 'https://img.alicdn.com/tps/i1/TB1kTKyIVXXXXacXFXX07tlTXXX-200-200.png_88x88xz.jpg',
	            shopCommentText: '97',
	            shopLookImg: 'https://img.alicdn.com/imgextra/i4/397746073/TB2IseKeFXXXXcVXXXXXXXXXXXX-397746073.png_88x88xz.jpg',
	            shopLookText: '1003',
	            shareImg: 'https://cbu01.alicdn.com/cms/upload/2015/930/224/2422039_702806130.png_88x88xz.jpg',
	            shareText: "10"

	        }, {
	            scopeValue: 2,
	            PersonPhoto: 'https://gw.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_60x60.jpg',
	            PersonName: '段誉',
	            PersonVisitTime: '今天',
	            shopDesc: '凌波微步，非一般的感觉！～～～～～',
	            shopImgList: [{ shopImgWidth: 220, shopImgHeight: 220, shopImg: 'https://gd4.alicdn.com/bao/uploaded/i4/TB1hvNoJXXXXXaMaXXXXXXXXXXX_!!0-item_pic.jpg_220x220.jpg' }, { shopImgWidth: 220, shopImgHeight: 220, shopImg: 'https://gd4.alicdn.com/imgextra/i4/2058567235/TB2V8iygFXXXXaRXpXXXXXXXXXX_!!2058567235.jpg_220x220.jpg' }, { shopImgWidth: 220, shopImgHeight: 220, shopImg: 'https://gd2.alicdn.com/imgextra/i2/2058567235/TB2im1QgFXXXXX8XXXXXXXXXXXX_!!2058567235.jpg_220x220.jpg' }],
	            shopLikeImg: 'https://img.alicdn.com/tps/i1/TB1jTxXIVXXXXb8XXXX07tlTXXX-200-200.png_88x88xz.jpg',
	            shopLikeText: '6',
	            shopCommentImg: 'https://img.alicdn.com/tps/i1/TB1kTKyIVXXXXacXFXX07tlTXXX-200-200.png_88x88xz.jpg',
	            shopCommentText: '97',
	            shopLookImg: 'https://img.alicdn.com/imgextra/i4/397746073/TB2IseKeFXXXXcVXXXXXXXXXXXX-397746073.png_88x88xz.jpg',
	            shopLookText: '1003',
	            shareImg: 'https://cbu01.alicdn.com/cms/upload/2015/930/224/2422039_702806130.png_88x88xz.jpg',
	            shareText: "10"

	        }, {
	            scopeValue: 3,
	            PersonPhoto: 'https://gw.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_60x60.jpg',
	            PersonName: '虚竹',
	            PersonVisitTime: '昨天',
	            shopDesc: '内力深厚，也要保护好这双手！～～～～～',
	            shopImgList: [{ shopImgWidth: 220, shopImgHeight: 220, shopImg: 'https://gd1.alicdn.com/bao/uploaded/i1/TB18BZ2KFXXXXb8XFXXXXXXXXXX_!!0-item_pic.jpg_220x220.jpg' }, { shopImgWidth: 220, shopImgHeight: 220, shopImg: 'https://gd1.alicdn.com/imgextra/i1/2775383848/TB2r012jVXXXXXHXpXXXXXXXXXX_!!2775383848.jpg_220x220.jpg' }, { shopImgWidth: 220, shopImgHeight: 220, shopImg: 'https://gd3.alicdn.com/imgextra/i3/2775383848/TB2iI9VjVXXXXaoXpXXXXXXXXXX_!!2775383848.jpg_220x220.jpg' }],
	            shopLikeImg: 'https://img.alicdn.com/tps/i1/TB1jTxXIVXXXXb8XXXX07tlTXXX-200-200.png_88x88xz.jpg',
	            shopLikeText: '6',
	            shopCommentImg: 'https://img.alicdn.com/tps/i1/TB1kTKyIVXXXXacXFXX07tlTXXX-200-200.png_88x88xz.jpg',
	            shopCommentText: '97',
	            shopLookImg: 'https://img.alicdn.com/imgextra/i4/397746073/TB2IseKeFXXXXcVXXXXXXXXXXXX-397746073.png_88x88xz.jpg',
	            shopLookText: '1003',
	            shareImg: 'https://cbu01.alicdn.com/cms/upload/2015/930/224/2422039_702806130.png_88x88xz.jpg',
	            shareText: "10"

	        }, {
	            scopeValue: 4,
	            PersonPhoto: 'https://gw.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_60x60.jpg',
	            PersonName: '王语嫣',
	            PersonVisitTime: '今天',
	            shopDesc: '记忆好，就要用这款学习机！～～～～～',
	            shopImgList: [{ shopImgWidth: 220, shopImgHeight: 220, shopImg: 'https://gd1.alicdn.com/bao/uploaded/i1/TB1JB.rLpXXXXXLXXXXXXXXXXXX_!!0-item_pic.jpg_220x220.jpg' }, { shopImgWidth: 220, shopImgHeight: 220, shopImg: 'https://gd4.alicdn.com/imgextra/i4/2702739128/TB2JdvmjVXXXXXjXXXXXXXXXXXX_!!2702739128.jpg_220x220.jpg' }, { shopImgWidth: 220, shopImgHeight: 220, shopImg: 'https://gd2.alicdn.com/imgextra/i2/2702739128/TB2A.e6jVXXXXXGXpXXXXXXXXXX_!!2702739128.jpg_220x220.jpg' }],
	            shopLikeImg: 'https://img.alicdn.com/tps/i1/TB1jTxXIVXXXXb8XXXX07tlTXXX-200-200.png_88x88xz.jpg',
	            shopLikeText: '6',
	            shopCommentImg: 'https://img.alicdn.com/tps/i1/TB1kTKyIVXXXXacXFXX07tlTXXX-200-200.png_88x88xz.jpg',
	            shopCommentText: '97',
	            shopLookImg: 'https://img.alicdn.com/imgextra/i4/397746073/TB2IseKeFXXXXcVXXXXXXXXXXXX-397746073.png_88x88xz.jpg',
	            shopLookText: '1003',
	            shareImg: 'https://cbu01.alicdn.com/cms/upload/2015/930/224/2422039_702806130.png_88x88xz.jpg',
	            shareText: "10"

	        }, {
	            scopeValue: 5,
	            PersonPhoto: 'https://gw.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_60x60.jpg',
	            PersonName: '令狐冲',
	            PersonVisitTime: '昨天',
	            shopDesc: '做男人，一定要剑剑剑！～～～～～',
	            shopImgList: [{ shopImgWidth: 220, shopImgHeight: 220, shopImg: 'https://gd3.alicdn.com/bao/uploaded/i3/TB17zXOGXXXXXbEXVXXXXXXXXXX_!!0-item_pic.jpg_220x220.jpg' }, { shopImgWidth: 220, shopImgHeight: 220, shopImg: 'https://gd1.alicdn.com/imgextra/i1/2265445951/TB22ACTbFXXXXXBXXXXXXXXXXXX_!!2265445951.jpg_220x220.jpg' }, { shopImgWidth: 220, shopImgHeight: 220, shopImg: 'https://gd3.alicdn.com/imgextra/i3/2265445951/TB2oXqUbFXXXXXIXXXXXXXXXXXX_!!2265445951.jpg_220x220.jpg' }],
	            shopLikeImg: 'https://img.alicdn.com/tps/i1/TB1jTxXIVXXXXb8XXXX07tlTXXX-200-200.png_88x88xz.jpg',
	            shopLikeText: '6',
	            shopCommentImg: 'https://img.alicdn.com/tps/i1/TB1kTKyIVXXXXacXFXX07tlTXXX-200-200.png_88x88xz.jpg',
	            shopCommentText: '97',
	            shopLookImg: 'https://img.alicdn.com/imgextra/i4/397746073/TB2IseKeFXXXXcVXXXXXXXXXXXX-397746073.png_88x88xz.jpg',
	            shopLookText: '1003',
	            shareImg: 'https://cbu01.alicdn.com/cms/upload/2015/930/224/2422039_702806130.png_88x88xz.jpg',
	            shareText: "10"

	        }, {
	            scopeValue: 1,
	            PersonPhoto: 'https://gw.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_60x60.jpg',
	            PersonName: '林平之',
	            PersonVisitTime: '昨天',
	            shopDesc: '天下武功，唯辟邪剑谱！～～～～～',
	            shopImgList: [{ shopImgWidth: 220, shopImgHeight: 220, shopImg: 'https://gd4.alicdn.com/bao/uploaded/i4/TB1lktpIVXXXXXvaXXXXXXXXXXX_!!0-item_pic.jpg_220x220.jpg' }, { shopImgWidth: 220, shopImgHeight: 220, shopImg: 'https://gd2.alicdn.com/imgextra/i2/481942/TB2buYAiVXXXXcTXXXXXXXXXXXX_!!481942.jpg_220x220.jpg' }, { shopImgWidth: 220, shopImgHeight: 220, shopImg: 'https://gd2.alicdn.com/imgextra/i2/481942/TB24UvFiVXXXXcbXXXXXXXXXXXX_!!481942.jpg_220x220.jpg' }],
	            shopLikeImg: 'https://img.alicdn.com/tps/i1/TB1jTxXIVXXXXb8XXXX07tlTXXX-200-200.png_88x88xz.jpg',
	            shopLikeText: '6',
	            shopCommentImg: 'https://img.alicdn.com/tps/i1/TB1kTKyIVXXXXacXFXX07tlTXXX-200-200.png_88x88xz.jpg',
	            shopCommentText: '97',
	            shopLookImg: 'https://img.alicdn.com/imgextra/i4/397746073/TB2IseKeFXXXXcVXXXXXXXXXXXX-397746073.png_88x88xz.jpg',
	            shopLookText: '1003',
	            shareImg: 'https://cbu01.alicdn.com/cms/upload/2015/930/224/2422039_702806130.png_88x88xz.jpg',
	            shareText: "10"

	        }, {
	            scopeValue: 2,
	            PersonPhoto: 'https://gw.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_60x60.jpg',
	            PersonName: '独孤求败',
	            PersonVisitTime: '昨天',
	            shopDesc: '此生只求一败！～～～～～',
	            shopImgList: [{ shopImgWidth: 220, shopImgHeight: 220, shopImg: 'https://gd2.alicdn.com/bao/uploaded/i2/TB1NuvDLXXXXXaZXFXXXXXXXXXX_!!0-item_pic.jpg_220x220.jpg' }, { shopImgWidth: 220, shopImgHeight: 220, shopImg: 'https://gd4.alicdn.com/imgextra/i4/898225/TB28lpqjXXXXXXRXpXXXXXXXXXX_!!898225.jpg_220x220.jpg' }, { shopImgWidth: 220, shopImgHeight: 220, shopImg: 'https://gd1.alicdn.com/bao/uploaded/i1/TB15ob8JFXXXXaOXVXXXXXXXXXX_!!0-item_pic.jpg_220x220.jpg' }],
	            shopLikeImg: 'https://img.alicdn.com/tps/i1/TB1jTxXIVXXXXb8XXXX07tlTXXX-200-200.png_88x88xz.jpg',
	            shopLikeText: '6',
	            shopCommentImg: 'https://img.alicdn.com/tps/i1/TB1kTKyIVXXXXacXFXX07tlTXXX-200-200.png_88x88xz.jpg',
	            shopCommentText: '97',
	            shopLookImg: 'https://img.alicdn.com/imgextra/i4/397746073/TB2IseKeFXXXXcVXXXXXXXXXXXX-397746073.png_88x88xz.jpg',
	            shopLookText: '1003',
	            shareImg: 'https://cbu01.alicdn.com/cms/upload/2015/930/224/2422039_702806130.png_88x88xz.jpg',
	            shareText: "10"

	        }, {
	            scopeValue: 3,
	            PersonPhoto: 'https://gw.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_60x60.jpg',
	            PersonName: '王重阳',
	            PersonVisitTime: '昨天',
	            shopDesc: '江湖义士，随我一起抗金！～～～～～',
	            shopImgList: [{ shopImgWidth: 220, shopImgHeight: 220, shopImg: 'https://gd3.alicdn.com/bao/uploaded/i3/TB16Fw_KFXXXXcYXFXXXXXXXXXX_!!0-item_pic.jpg_220x220.jpg' }, { shopImgWidth: 220, shopImgHeight: 220, shopImg: 'https://gd1.alicdn.com/imgextra/i1/135961121/TB2WQsMjXXXXXXKXpXXXXXXXXXX_!!135961121.jpg_220x220.jpg' }, { shopImgWidth: 220, shopImgHeight: 220, shopImg: 'https://gd4.alicdn.com/imgextra/i4/135961121/TB2K_o2jXXXXXaZXXXXXXXXXXXX_!!135961121.jpg_220x220.jpg' }],
	            shopLikeImg: 'https://img.alicdn.com/tps/i1/TB1jTxXIVXXXXb8XXXX07tlTXXX-200-200.png_88x88xz.jpg',
	            shopLikeText: '6',
	            shopCommentImg: 'https://img.alicdn.com/tps/i1/TB1kTKyIVXXXXacXFXX07tlTXXX-200-200.png_88x88xz.jpg',
	            shopCommentText: '97',
	            shopLookImg: 'https://img.alicdn.com/imgextra/i4/397746073/TB2IseKeFXXXXcVXXXXXXXXXXXX-397746073.png_88x88xz.jpg',
	            shopLookText: '1003',
	            shareImg: 'https://cbu01.alicdn.com/cms/upload/2015/930/224/2422039_702806130.png_88x88xz.jpg',
	            shareText: "10"

	        }, {
	            scopeValue: 4,
	            PersonPhoto: 'https://gw.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_60x60.jpg',
	            PersonName: '黄药师',
	            PersonVisitTime: '今天',
	            shopDesc: '桃花潭水三千丈！～～～～～',
	            shopImgList: [{ shopImgWidth: 220, shopImgHeight: 220, shopImg: 'https://gd4.alicdn.com/bao/uploaded/i4/2484560624/TB24KY4jFXXXXabXXXXXXXXXXXX_!!2484560624.jpg_220x220.jpg' }, { shopImgWidth: 220, shopImgHeight: 220, shopImg: 'https://gd2.alicdn.com/imgextra/i2/2484560624/TB2tqrxjFXXXXb5XpXXXXXXXXXX_!!2484560624.jpg_220x220.jpg' }, { shopImgWidth: 220, shopImgHeight: 220, shopImg: 'https://gd3.alicdn.com/imgextra/i3/2484560624/TB2EhvqjVXXXXaZXpXXXXXXXXXX_!!2484560624.jpg_220x220.jpg' }],
	            shopLikeImg: 'https://img.alicdn.com/tps/i1/TB1jTxXIVXXXXb8XXXX07tlTXXX-200-200.png_88x88xz.jpg',
	            shopLikeText: '6',
	            shopCommentImg: 'https://img.alicdn.com/tps/i1/TB1kTKyIVXXXXacXFXX07tlTXXX-200-200.png_88x88xz.jpg',
	            shopCommentText: '97',
	            shopLookImg: 'https://img.alicdn.com/imgextra/i4/397746073/TB2IseKeFXXXXcVXXXXXXXXXXXX-397746073.png_88x88xz.jpg',
	            shopLookText: '1003',
	            shareImg: 'https://cbu01.alicdn.com/cms/upload/2015/930/224/2422039_702806130.png_88x88xz.jpg',
	            shareText: "10"

	        }, {
	            scopeValue: 5,
	            PersonPhoto: 'https://gw.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_60x60.jpg',
	            PersonName: '洪七公',
	            PersonVisitTime: '昨天',
	            shopDesc: '年轻人，我拿武功秘籍换只鸡可否！～～～～～',
	            shopImgList: [{ shopImgWidth: 220, shopImgHeight: 220, shopImg: 'https://gd3.alicdn.com/bao/uploaded/i3/TB1TT7oLpXXXXXLXpXXXXXXXXXX_!!0-item_pic.jpg_220x220.jpg' }, { shopImgWidth: 220, shopImgHeight: 220, shopImg: 'https://gd2.alicdn.com/imgextra/i2/2674463756/TB2EuK6jVXXXXa_XpXXXXXXXXXX_!!2674463756.jpg_220x220.jpg' }, { shopImgWidth: 220, shopImgHeight: 220, shopImg: 'https://gd3.alicdn.com/imgextra/i3/2674463756/TB2C02ljVXXXXbPXXXXXXXXXXXX_!!2674463756.jpg_220x220.jpg' }],
	            shopLikeImg: 'https://img.alicdn.com/tps/i1/TB1jTxXIVXXXXb8XXXX07tlTXXX-200-200.png_88x88xz.jpg',
	            shopLikeText: '6',
	            shopCommentImg: 'https://img.alicdn.com/tps/i1/TB1kTKyIVXXXXacXFXX07tlTXXX-200-200.png_88x88xz.jpg',
	            shopCommentText: '97',
	            shopLookImg: 'https://img.alicdn.com/imgextra/i4/397746073/TB2IseKeFXXXXcVXXXXXXXXXXXX-397746073.png_88x88xz.jpg',
	            shopLookText: '1003',
	            shareImg: 'https://cbu01.alicdn.com/cms/upload/2015/930/224/2422039_702806130.png_88x88xz.jpg',
	            shareText: "10"

	        }, {
	            scopeValue: 1,
	            PersonPhoto: 'https://gw.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_60x60.jpg',
	            PersonName: '欧阳锋',
	            PersonVisitTime: '昨天',
	            shopDesc: '天下武功，唯我蛤蟆功！～～～～～',
	            shopImgList: [{ shopImgWidth: 220, shopImgHeight: 220, shopImg: 'https://gd2.alicdn.com/bao/uploaded/i2/TB1UCPkHFXXXXXLXXXXXXXXXXXX_!!0-item_pic.jpg_220x220.jpg' }, { shopImgWidth: 220, shopImgHeight: 220, shopImg: 'https://gd3.alicdn.com/imgextra/i3/T1gCAEFwFeXXXXXXXX_!!0-item_pic.jpg_220x220.jpg' }, { shopImgWidth: 220, shopImgHeight: 220, shopImg: 'https://gd1.alicdn.com/imgextra/i1/391593945/TB2wRS2cFXXXXbBXpXXXXXXXXXX_!!391593945.jpg_220x220.jpg' }],
	            shopLikeImg: 'https://img.alicdn.com/tps/i1/TB1jTxXIVXXXXb8XXXX07tlTXXX-200-200.png_88x88xz.jpg',
	            shopLikeText: '6',
	            shopCommentImg: 'https://img.alicdn.com/tps/i1/TB1kTKyIVXXXXacXFXX07tlTXXX-200-200.png_88x88xz.jpg',
	            shopCommentText: '97',
	            shopLookImg: 'https://img.alicdn.com/imgextra/i4/397746073/TB2IseKeFXXXXcVXXXXXXXXXXXX-397746073.png_88x88xz.jpg',
	            shopLookText: '1003',
	            shareImg: 'https://cbu01.alicdn.com/cms/upload/2015/930/224/2422039_702806130.png_88x88xz.jpg',
	            shareText: "10"

	        }, {
	            scopeValue: 2,
	            PersonPhoto: 'https://gw.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_60x60.jpg',
	            PersonName: '段王爷',
	            PersonVisitTime: '昨天',
	            shopDesc: '皈依我佛，断了凡尘三千烦恼！～～～～～',
	            shopImgList: [{ shopImgWidth: 220, shopImgHeight: 220, shopImg: 'https://gd3.alicdn.com/bao/uploaded/i3/TB1zgRJKpXXXXcTXXXXXXXXXXXX_!!0-item_pic.jpg_220x220.jpg' }, { shopImgWidth: 220, shopImgHeight: 220, shopImg: 'https://gd4.alicdn.com/imgextra/i4/2560666452/TB2rbhqgVXXXXc4XpXXXXXXXXXX_!!2560666452.jpg_220x220.jpg' }, { shopImgWidth: 220, shopImgHeight: 220, shopImg: 'https://gd2.alicdn.com/imgextra/i2/2560666452/TB2gJdWgVXXXXawXXXXXXXXXXXX_!!2560666452.jpg_220x220.jpg' }],
	            shopLikeImg: 'https://img.alicdn.com/tps/i1/TB1jTxXIVXXXXb8XXXX07tlTXXX-200-200.png_88x88xz.jpg',
	            shopLikeText: '6',
	            shopCommentImg: 'https://img.alicdn.com/tps/i1/TB1kTKyIVXXXXacXFXX07tlTXXX-200-200.png_88x88xz.jpg',
	            shopCommentText: '97',
	            shopLookImg: 'https://img.alicdn.com/imgextra/i4/397746073/TB2IseKeFXXXXcVXXXXXXXXXXXX-397746073.png_88x88xz.jpg',
	            shopLookText: '1003',
	            shareImg: 'https://cbu01.alicdn.com/cms/upload/2015/930/224/2422039_702806130.png_88x88xz.jpg',
	            shareText: "10"

	        }, {
	            scopeValue: 3,
	            PersonPhoto: 'https://gw.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_60x60.jpg',
	            PersonName: '周伯通',
	            PersonVisitTime: '昨天',
	            shopDesc: '左右互搏术，一个大于俩！～～～～～',
	            shopImgList: [{ shopImgWidth: 220, shopImgHeight: 220, shopImg: 'https://gd4.alicdn.com/bao/uploaded/i4/TB1wnQtJVXXXXXzXXXXXXXXXXXX_!!0-item_pic.jpg_220x220.jpg' }, { shopImgWidth: 220, shopImgHeight: 220, shopImg: 'https://gd3.alicdn.com/imgextra/i3/TB11QkkJVXXXXXsXpXXXXXXXXXX_!!0-item_pic.jpg_220x220.jpg' }, { shopImgWidth: 220, shopImgHeight: 220, shopImg: 'https://gd2.alicdn.com/imgextra/i2/TB1Ul77FFXXXXaJbXXXXXXXXXXX_!!0-item_pic.jpg_220x220.jpg' }],
	            shopLikeImg: 'https://img.alicdn.com/tps/i1/TB1jTxXIVXXXXb8XXXX07tlTXXX-200-200.png_88x88xz.jpg',
	            shopLikeText: '6',
	            shopCommentImg: 'https://img.alicdn.com/tps/i1/TB1kTKyIVXXXXacXFXX07tlTXXX-200-200.png_88x88xz.jpg',
	            shopCommentText: '97',
	            shopLookImg: 'https://img.alicdn.com/imgextra/i4/397746073/TB2IseKeFXXXXcVXXXXXXXXXXXX-397746073.png_88x88xz.jpg',
	            shopLookText: '1003',
	            shareImg: 'https://cbu01.alicdn.com/cms/upload/2015/930/224/2422039_702806130.png_88x88xz.jpg',
	            shareText: "10"

	        }, {
	            scopeValue: 4,
	            PersonPhoto: 'https://gw.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_60x60.jpg',
	            PersonName: '杨康',
	            PersonVisitTime: '今天',
	            shopDesc: '吾乃金国小王子！～～～～～',
	            shopImgList: [{ shopImgWidth: 220, shopImgHeight: 220, shopImg: 'https://gd4.alicdn.com/bao/uploaded/i4/TB1nQwrLXXXXXaBaXXXXXXXXXXX_!!0-item_pic.jpg_220x220.jpg' }, { shopImgWidth: 220, shopImgHeight: 220, shopImg: 'https://gd1.alicdn.com/imgextra/i1/TB1n3bLJVXXXXXaXFXXXXXXXXXX_!!0-item_pic.jpg_220x220.jpg' }, { shopImgWidth: 220, shopImgHeight: 220, shopImg: 'https://gd1.alicdn.com/imgextra/i1/2324089696/TB2C0jKfFXXXXXbXXXXXXXXXXXX_!!2324089696.jpg_220x220.jpg' }],
	            shopLikeImg: 'https://img.alicdn.com/tps/i1/TB1jTxXIVXXXXb8XXXX07tlTXXX-200-200.png_88x88xz.jpg',
	            shopLikeText: '6',
	            shopCommentImg: 'https://img.alicdn.com/tps/i1/TB1kTKyIVXXXXacXFXX07tlTXXX-200-200.png_88x88xz.jpg',
	            shopCommentText: '97',
	            shopLookImg: 'https://img.alicdn.com/imgextra/i4/397746073/TB2IseKeFXXXXcVXXXXXXXXXXXX-397746073.png_88x88xz.jpg',
	            shopLookText: '1003',
	            shareImg: 'https://cbu01.alicdn.com/cms/upload/2015/930/224/2422039_702806130.png_88x88xz.jpg',
	            shareText: "10"

	        }, {
	            scopeValue: 5,
	            PersonPhoto: 'https://gw.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_60x60.jpg',
	            PersonName: '小龙女',
	            PersonVisitTime: '昨天',
	            shopDesc: '清水出芙蓉，美丽天然成！～～～～～',
	            shopImgList: [{ shopImgWidth: 220, shopImgHeight: 220, shopImg: 'https://gd4.alicdn.com/bao/uploaded/i4/TB1B7bYJXXXXXbvXXXXXXXXXXXX_!!0-item_pic.jpg_220x220.jpg' }, { shopImgWidth: 220, shopImgHeight: 220, shopImg: 'https://gd2.alicdn.com/imgextra/i2/2452441154/TB25SUdbVXXXXbWXpXXXXXXXXXX_!!2452441154.jpg_220x220.jpg' }, { shopImgWidth: 220, shopImgHeight: 220, shopImg: 'https://gd2.alicdn.com/imgextra/i2/2452441154/TB25DD8eFXXXXarXXXXXXXXXXXX_!!2452441154.jpeg_220x220.jpg' }],
	            shopLikeImg: 'https://img.alicdn.com/tps/i1/TB1jTxXIVXXXXb8XXXX07tlTXXX-200-200.png_88x88xz.jpg',
	            shopLikeText: '6',
	            shopCommentImg: 'https://img.alicdn.com/tps/i1/TB1kTKyIVXXXXacXFXX07tlTXXX-200-200.png_88x88xz.jpg',
	            shopCommentText: '97',
	            shopLookImg: 'https://img.alicdn.com/imgextra/i4/397746073/TB2IseKeFXXXXcVXXXXXXXXXXXX-397746073.png_88x88xz.jpg',
	            shopLookText: '1003',
	            shareImg: 'https://cbu01.alicdn.com/cms/upload/2015/930/224/2422039_702806130.png_88x88xz.jpg',
	            shareText: "10"

	        }]
	    }},
	    created: function created() {
	        var myDate = new Date();
	        this.createdV = myDate.getSeconds() + " " + myDate.getMilliseconds() + "";
	    },
	    methods: {
	        viewappear: function viewappear() {
	            var myDate = new Date();
	            this.appearV = myDate.getSeconds() + " " + myDate.getMilliseconds() + "";
	        },
	        viewdisappear: function viewdisappear() {
	            var params = {
	                'message': 'viewdisappear',
	                'okTitle': 'OK'
	            };
	            var self = this;
	            this.$call('modal', 'alert', params, function () {});
	        }
	    }
	};}
	/* generated by weex-loader */


/***/ }
/******/ ]);