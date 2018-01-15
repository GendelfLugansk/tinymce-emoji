/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _emoji = __webpack_require__(1);

var _emoji2 = _interopRequireDefault(_emoji);

var _twemoji = __webpack_require__(5);

var _twemoji2 = _interopRequireDefault(_twemoji);

var _domify = __webpack_require__(3);

var _domify2 = _interopRequireDefault(_domify);

var _objectPath = __webpack_require__(4);

var _objectPath2 = _interopRequireDefault(_objectPath);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var plugin = function plugin(editor) {
  var add_space = true;
  if ("emoji_add_space" in editor.settings) {
    add_space = editor.settings.emoji_add_space;
  }

  var show_groups = true;
  if ("emoji_show_groups" in editor.settings) {
    show_groups = editor.settings.emoji_show_groups;
  }

  var show_subgroups = true;
  if ("emoji_show_subgroups" in editor.settings) {
    show_subgroups = editor.settings.emoji_show_subgroups;
  }

  var show_tab_icons = true;
  if ("emoji_show_tab_icons" in editor.settings) {
    show_tab_icons = editor.settings.emoji_show_tab_icons;
  }

  var dialog_width = void 0;
  if ("emoji_dialog_width" in editor.settings) {
    dialog_width = editor.settings.emoji_dialog_width;
  }

  var dialog_height = void 0;
  if ("emoji_dialog_height" in editor.settings) {
    dialog_height = editor.settings.emoji_dialog_height;
  }

  var show_twemoji = false;
  if ("emoji_show_twemoji" in editor.settings) {
    show_twemoji = editor.settings.emoji_show_twemoji;
  }

  var twemoji_size = 36;
  if ("emoji_twemoji_size" in editor.settings) {
    twemoji_size = editor.settings.emoji_twemoji_size;
  }

  var twemoji_preview_size = 72;
  if ("emoji_twemoji_preview_size" in editor.settings) {
    twemoji_preview_size = editor.settings.emoji_twemoji_preview_size;
  }

  var twemoji_attrs = {};
  if ("emoji_twemoji_attrs" in editor.settings) {
    twemoji_attrs = editor.settings.emoji_twemoji_attrs;
  }

  var twemoji_base = void 0;
  if ("emoji_twemoji_base" in editor.settings) {
    twemoji_base = editor.settings.emoji_twemoji_base;
  }

  var twemoji_ext = void 0;
  if ("emoji_twemoji_ext" in editor.settings) {
    twemoji_ext = editor.settings.emoji_twemoji_ext;
  }

  var twemoji_class_name = 'emoji';
  if ("emoji_twemoji_class_name" in editor.settings) {
    twemoji_class_name = editor.settings.emoji_twemoji_class_name;
  }

  var twemoji_folder = '72x72';
  if ("emoji_twemoji_folder" in editor.settings) {
    twemoji_folder = editor.settings.emoji_twemoji_folder;
  }

  var appendStyle = function appendStyle(orig, appendix) {
    var newStyleStr = orig;

    if (typeof newStyleStr !== 'string') {
      newStyleStr = '';
    } else if (newStyleStr !== '' && newStyleStr.search(/;(\s*)?$/gi) === -1) {
      newStyleStr += '; ';
    }
    newStyleStr += appendix;

    return newStyleStr;
  };

  var twemoji_params = {
    attributes: function attributes() {
      var attrs = JSON.parse(JSON.stringify(twemoji_attrs));
      attrs.style = appendStyle(attrs.style, 'width: ' + twemoji_size + 'px; height: ' + twemoji_size + 'px;');
      return attrs;
    },

    base: twemoji_base,
    ext: twemoji_ext,
    className: twemoji_class_name,
    folder: twemoji_folder
  };

  var twemoji_params_preview = JSON.parse(JSON.stringify(twemoji_params));
  twemoji_params_preview.attributes = function () {
    var attrs = JSON.parse(JSON.stringify(twemoji_attrs));
    attrs.style = appendStyle(attrs.style, 'width: ' + twemoji_preview_size + 'px; height: ' + twemoji_preview_size + 'px;');

    return attrs;
  };

  function getItems() {
    var onclick = function onclick(e) {
      var target = e.target;
      var span = void 0;
      if (/^(SPAN)$/.test(target.nodeName)) {
        span = target;
      } else if (/^(IMG)$/.test(target.nodeName) && target.classList && target.classList.contains(twemoji_class_name)) {
        span = target.closest('span');
      }
      if (span) {
        if (span.hasAttribute('data-chr')) {
          var char = span.getAttribute('data-chr');
          editor.execCommand('mceInsertContent', false, char + (add_space ? ' ' : ''));
        }
      }
    };

    var onmouseover = function onmouseover(e) {
      if (!show_twemoji) {
        return;
      }

      var target = e.target;
      if (/^(SPAN)$/.test(target.nodeName) && target.hasAttribute('data-chr')) {
        var body = target.closest('.mce-window-body');
        if (body) {
          var previewZone = body.querySelector('.tinymce-emoji-preview');
          if (previewZone) {
            var img = (0, _domify2.default)(_twemoji2.default.parse(target.getAttribute('data-chr'), twemoji_params_preview));
            var oldImg = previewZone.querySelector('img');
            if (oldImg) {
              previewZone.replaceChild(img, oldImg);
            } else {
              previewZone.appendChild(img);
            }
          }
        }
      }
    };

    var items = [];

    if (show_twemoji) {
      var previewPanel = new tinymce.ui.FloatPanel({
        type: 'floatPanel',
        title: 'Preview',
        html: '<div class="tinymce-emoji-preview" style="text-align: center; padding: 10px; height: ' + twemoji_preview_size + 'px">' + _twemoji2.default.parse(_objectPath2.default.get(_emoji2.default, '0.subGroups.0.emojis.0.emoji', ''), twemoji_params_preview) + '</div>',
        style: "top: auto; position: fixed;"
      });
      previewPanel.on('postrender', function (e) {
        if (e.target && e.target.$el && e.target.$el[0]) {

          /**
           * As I have no f🤬ing idea at what moment tinymce changes top to 0px, I'll use timer
           */
          var el = e.target.$el[0];
          var updater = function updater() {
            if (el && el.style && el.parentNode) {
              el.style.top = "auto";
              setTimeout(updater, 100);
            } else {
              el = null;
            }
          };
          updater();
        }
      });
      items.push(previewPanel);
    }

    var tabItems = [];
    var containerHTML = '';
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = _emoji2.default[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var group = _step.value;

        var groupHTML = '';

        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = group.subGroups[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var subgroup = _step2.value;

            if (show_subgroups) {
              groupHTML += '<div style="clear:both"><strong style="font-weight: bold;">' + subgroup.name.split('-').join(' ').replace(/\b\w/g, function (l) {
                return l.toUpperCase();
              }) + '</strong></div>';
            }

            groupHTML += '<div>';
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
              for (var _iterator3 = subgroup.emojis[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                var emoji = _step3.value;

                groupHTML += '<span style="float:left; padding: 4px; font-size: 1.5em; cursor: pointer;" data-chr="' + emoji.emoji + '">' + emoji.emoji + '</span>';
              }
            } catch (err) {
              _didIteratorError3 = true;
              _iteratorError3 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion3 && _iterator3.return) {
                  _iterator3.return();
                }
              } finally {
                if (_didIteratorError3) {
                  throw _iteratorError3;
                }
              }
            }

            groupHTML += '</div>';
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }

        if (show_groups) {
          tabItems.push({
            type: 'container',
            title: show_tab_icons ? _objectPath2.default.get(group, 'subGroups.0.emojis.0.emoji', '') + ' ' + group.name : group.name,
            html: '<div style="padding: 10px;">' + groupHTML + '</div>'
          });
        } else {
          containerHTML += groupHTML;
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    if (show_groups) {
      items.push({
        type: 'tabPanel',
        items: tabItems,
        onclick: onclick,
        onmouseover: onmouseover
      });
    } else {
      items.push({
        type: 'container',
        html: '<div style="padding: 10px;">' + containerHTML + '</div>',
        onclick: onclick,
        onmouseover: onmouseover
      });
    }

    return items;
  }

  var default_dialog_width = show_tab_icons ? 1000 : 800;

  function showDialog() {
    var win = editor.windowManager.open({
      autoScroll: true,
      width: dialog_width ? dialog_width : default_dialog_width,
      height: dialog_height ? dialog_height : 600,
      title: 'Insert Emoji',
      layout: 'flex',
      direction: 'column',
      align: 'stretch',
      items: getItems(),
      buttons: [{
        text: 'Close',
        onclick: function onclick() {
          win.close();
        }
      }]
    });
  }

  editor.addCommand('emojiShowDialog', showDialog);

  editor.addButton('tinymceEmoji', {
    text: '😀',
    icon: false,
    cmd: 'emojiShowDialog'
  });

  editor.addMenuItem('tinymceEmoji', {
    text: 'Emoji',
    icon: 'emoticons',
    context: 'insert',
    cmd: 'emojiShowDialog'
  });

  editor.on('beforeSetContent', function (e) {
    if (e.content && show_twemoji) {
      e.content = _twemoji2.default.parse((0, _domify2.default)('<div>' + e.content + '</div>'), twemoji_params).innerHTML;
    }
  });

  editor.on('postProcess', function (e) {
    if (e.set && e.content && show_twemoji) {
      e.content = _twemoji2.default.parse((0, _domify2.default)('<div>' + e.content + '</div>'), twemoji_params).innerHTML;
    }

    if (e.get && e.content && show_twemoji) {
      var el = (0, _domify2.default)('<div>' + e.content + '</div>');
      el.querySelectorAll('img').forEach(function (img) {
        if (img.classList && img.classList.contains(twemoji_class_name) && img.hasAttribute('alt')) {
          img.parentNode.replaceChild(document.createTextNode(img.getAttribute('alt')), img);
        }
      });
      e.content = el.innerHTML;
    }
  });
};

exports.default = plugin;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = [{
  "name": "Smileys & People",
  "subGroups": [{
    "name": "face-positive",
    "emojis": [{
      "codes": ["1F600"],
      "status": "fully-qualified",
      "emoji": "😀",
      "name": "grinning face"
    }, {
      "codes": ["1F601"],
      "status": "fully-qualified",
      "emoji": "😁",
      "name": "beaming face with smiling eyes"
    }, {
      "codes": ["1F602"],
      "status": "fully-qualified",
      "emoji": "😂",
      "name": "face with tears of joy"
    }, {
      "codes": ["1F923"],
      "status": "fully-qualified",
      "emoji": "🤣",
      "name": "rolling on the floor laughing"
    }, {
      "codes": ["1F603"],
      "status": "fully-qualified",
      "emoji": "😃",
      "name": "grinning face with big eyes"
    }, {
      "codes": ["1F604"],
      "status": "fully-qualified",
      "emoji": "😄",
      "name": "grinning face with smiling eyes"
    }, {
      "codes": ["1F605"],
      "status": "fully-qualified",
      "emoji": "😅",
      "name": "grinning face with sweat"
    }, {
      "codes": ["1F606"],
      "status": "fully-qualified",
      "emoji": "😆",
      "name": "grinning squinting face"
    }, {
      "codes": ["1F609"],
      "status": "fully-qualified",
      "emoji": "😉",
      "name": "winking face"
    }, {
      "codes": ["1F60A"],
      "status": "fully-qualified",
      "emoji": "😊",
      "name": "smiling face with smiling eyes"
    }, {
      "codes": ["1F60B"],
      "status": "fully-qualified",
      "emoji": "😋",
      "name": "face savoring food"
    }, {
      "codes": ["1F60E"],
      "status": "fully-qualified",
      "emoji": "😎",
      "name": "smiling face with sunglasses"
    }, {
      "codes": ["1F60D"],
      "status": "fully-qualified",
      "emoji": "😍",
      "name": "smiling face with heart-eyes"
    }, {
      "codes": ["1F618"],
      "status": "fully-qualified",
      "emoji": "😘",
      "name": "face blowing a kiss"
    }, {
      "codes": ["1F617"],
      "status": "fully-qualified",
      "emoji": "😗",
      "name": "kissing face"
    }, {
      "codes": ["1F619"],
      "status": "fully-qualified",
      "emoji": "😙",
      "name": "kissing face with smiling eyes"
    }, {
      "codes": ["1F61A"],
      "status": "fully-qualified",
      "emoji": "😚",
      "name": "kissing face with closed eyes"
    }, {
      "codes": ["263A", "FE0F"],
      "status": "fully-qualified",
      "emoji": "☺️",
      "name": "smiling face"
    }, {
      "codes": ["263A"],
      "status": "non-fully-qualified",
      "emoji": "☺",
      "name": "smiling face"
    }, {
      "codes": ["1F642"],
      "status": "fully-qualified",
      "emoji": "🙂",
      "name": "slightly smiling face"
    }, {
      "codes": ["1F917"],
      "status": "fully-qualified",
      "emoji": "🤗",
      "name": "hugging face"
    }, {
      "codes": ["1F929"],
      "status": "fully-qualified",
      "emoji": "🤩",
      "name": "star-struck"
    }]
  }, {
    "name": "face-neutral",
    "emojis": [{
      "codes": ["1F914"],
      "status": "fully-qualified",
      "emoji": "🤔",
      "name": "thinking face"
    }, {
      "codes": ["1F928"],
      "status": "fully-qualified",
      "emoji": "🤨",
      "name": "face with raised eyebrow"
    }, {
      "codes": ["1F610"],
      "status": "fully-qualified",
      "emoji": "😐",
      "name": "neutral face"
    }, {
      "codes": ["1F611"],
      "status": "fully-qualified",
      "emoji": "😑",
      "name": "expressionless face"
    }, {
      "codes": ["1F636"],
      "status": "fully-qualified",
      "emoji": "😶",
      "name": "face without mouth"
    }, {
      "codes": ["1F644"],
      "status": "fully-qualified",
      "emoji": "🙄",
      "name": "face with rolling eyes"
    }, {
      "codes": ["1F60F"],
      "status": "fully-qualified",
      "emoji": "😏",
      "name": "smirking face"
    }, {
      "codes": ["1F623"],
      "status": "fully-qualified",
      "emoji": "😣",
      "name": "persevering face"
    }, {
      "codes": ["1F625"],
      "status": "fully-qualified",
      "emoji": "😥",
      "name": "sad but relieved face"
    }, {
      "codes": ["1F62E"],
      "status": "fully-qualified",
      "emoji": "😮",
      "name": "face with open mouth"
    }, {
      "codes": ["1F910"],
      "status": "fully-qualified",
      "emoji": "🤐",
      "name": "zipper-mouth face"
    }, {
      "codes": ["1F62F"],
      "status": "fully-qualified",
      "emoji": "😯",
      "name": "hushed face"
    }, {
      "codes": ["1F62A"],
      "status": "fully-qualified",
      "emoji": "😪",
      "name": "sleepy face"
    }, {
      "codes": ["1F62B"],
      "status": "fully-qualified",
      "emoji": "😫",
      "name": "tired face"
    }, {
      "codes": ["1F634"],
      "status": "fully-qualified",
      "emoji": "😴",
      "name": "sleeping face"
    }, {
      "codes": ["1F60C"],
      "status": "fully-qualified",
      "emoji": "😌",
      "name": "relieved face"
    }, {
      "codes": ["1F61B"],
      "status": "fully-qualified",
      "emoji": "😛",
      "name": "face with tongue"
    }, {
      "codes": ["1F61C"],
      "status": "fully-qualified",
      "emoji": "😜",
      "name": "winking face with tongue"
    }, {
      "codes": ["1F61D"],
      "status": "fully-qualified",
      "emoji": "😝",
      "name": "squinting face with tongue"
    }, {
      "codes": ["1F924"],
      "status": "fully-qualified",
      "emoji": "🤤",
      "name": "drooling face"
    }, {
      "codes": ["1F612"],
      "status": "fully-qualified",
      "emoji": "😒",
      "name": "unamused face"
    }, {
      "codes": ["1F613"],
      "status": "fully-qualified",
      "emoji": "😓",
      "name": "downcast face with sweat"
    }, {
      "codes": ["1F614"],
      "status": "fully-qualified",
      "emoji": "😔",
      "name": "pensive face"
    }, {
      "codes": ["1F615"],
      "status": "fully-qualified",
      "emoji": "😕",
      "name": "confused face"
    }, {
      "codes": ["1F643"],
      "status": "fully-qualified",
      "emoji": "🙃",
      "name": "upside-down face"
    }, {
      "codes": ["1F911"],
      "status": "fully-qualified",
      "emoji": "🤑",
      "name": "money-mouth face"
    }, {
      "codes": ["1F632"],
      "status": "fully-qualified",
      "emoji": "😲",
      "name": "astonished face"
    }]
  }, {
    "name": "face-negative",
    "emojis": [{
      "codes": ["2639", "FE0F"],
      "status": "fully-qualified",
      "emoji": "☹️",
      "name": "frowning face"
    }, {
      "codes": ["2639"],
      "status": "non-fully-qualified",
      "emoji": "☹",
      "name": "frowning face"
    }, {
      "codes": ["1F641"],
      "status": "fully-qualified",
      "emoji": "🙁",
      "name": "slightly frowning face"
    }, {
      "codes": ["1F616"],
      "status": "fully-qualified",
      "emoji": "😖",
      "name": "confounded face"
    }, {
      "codes": ["1F61E"],
      "status": "fully-qualified",
      "emoji": "😞",
      "name": "disappointed face"
    }, {
      "codes": ["1F61F"],
      "status": "fully-qualified",
      "emoji": "😟",
      "name": "worried face"
    }, {
      "codes": ["1F624"],
      "status": "fully-qualified",
      "emoji": "😤",
      "name": "face with steam from nose"
    }, {
      "codes": ["1F622"],
      "status": "fully-qualified",
      "emoji": "😢",
      "name": "crying face"
    }, {
      "codes": ["1F62D"],
      "status": "fully-qualified",
      "emoji": "😭",
      "name": "loudly crying face"
    }, {
      "codes": ["1F626"],
      "status": "fully-qualified",
      "emoji": "😦",
      "name": "frowning face with open mouth"
    }, {
      "codes": ["1F627"],
      "status": "fully-qualified",
      "emoji": "😧",
      "name": "anguished face"
    }, {
      "codes": ["1F628"],
      "status": "fully-qualified",
      "emoji": "😨",
      "name": "fearful face"
    }, {
      "codes": ["1F629"],
      "status": "fully-qualified",
      "emoji": "😩",
      "name": "weary face"
    }, {
      "codes": ["1F92F"],
      "status": "fully-qualified",
      "emoji": "🤯",
      "name": "exploding head"
    }, {
      "codes": ["1F62C"],
      "status": "fully-qualified",
      "emoji": "😬",
      "name": "grimacing face"
    }, {
      "codes": ["1F630"],
      "status": "fully-qualified",
      "emoji": "😰",
      "name": "anxious face with sweat"
    }, {
      "codes": ["1F631"],
      "status": "fully-qualified",
      "emoji": "😱",
      "name": "face screaming in fear"
    }, {
      "codes": ["1F633"],
      "status": "fully-qualified",
      "emoji": "😳",
      "name": "flushed face"
    }, {
      "codes": ["1F92A"],
      "status": "fully-qualified",
      "emoji": "🤪",
      "name": "crazy face"
    }, {
      "codes": ["1F635"],
      "status": "fully-qualified",
      "emoji": "😵",
      "name": "dizzy face"
    }, {
      "codes": ["1F621"],
      "status": "fully-qualified",
      "emoji": "😡",
      "name": "pouting face"
    }, {
      "codes": ["1F620"],
      "status": "fully-qualified",
      "emoji": "😠",
      "name": "angry face"
    }, {
      "codes": ["1F92C"],
      "status": "fully-qualified",
      "emoji": "🤬",
      "name": "face with symbols on mouth"
    }]
  }, {
    "name": "face-sick",
    "emojis": [{
      "codes": ["1F637"],
      "status": "fully-qualified",
      "emoji": "😷",
      "name": "face with medical mask"
    }, {
      "codes": ["1F912"],
      "status": "fully-qualified",
      "emoji": "🤒",
      "name": "face with thermometer"
    }, {
      "codes": ["1F915"],
      "status": "fully-qualified",
      "emoji": "🤕",
      "name": "face with head-bandage"
    }, {
      "codes": ["1F922"],
      "status": "fully-qualified",
      "emoji": "🤢",
      "name": "nauseated face"
    }, {
      "codes": ["1F92E"],
      "status": "fully-qualified",
      "emoji": "🤮",
      "name": "face vomiting"
    }, {
      "codes": ["1F927"],
      "status": "fully-qualified",
      "emoji": "🤧",
      "name": "sneezing face"
    }]
  }, {
    "name": "face-role",
    "emojis": [{
      "codes": ["1F607"],
      "status": "fully-qualified",
      "emoji": "😇",
      "name": "smiling face with halo"
    }, {
      "codes": ["1F920"],
      "status": "fully-qualified",
      "emoji": "🤠",
      "name": "cowboy hat face"
    }, {
      "codes": ["1F921"],
      "status": "fully-qualified",
      "emoji": "🤡",
      "name": "clown face"
    }, {
      "codes": ["1F925"],
      "status": "fully-qualified",
      "emoji": "🤥",
      "name": "lying face"
    }, {
      "codes": ["1F92B"],
      "status": "fully-qualified",
      "emoji": "🤫",
      "name": "shushing face"
    }, {
      "codes": ["1F92D"],
      "status": "fully-qualified",
      "emoji": "🤭",
      "name": "face with hand over mouth"
    }, {
      "codes": ["1F9D0"],
      "status": "fully-qualified",
      "emoji": "🧐",
      "name": "face with monocle"
    }, {
      "codes": ["1F913"],
      "status": "fully-qualified",
      "emoji": "🤓",
      "name": "nerd face"
    }]
  }, {
    "name": "face-fantasy",
    "emojis": [{
      "codes": ["1F608"],
      "status": "fully-qualified",
      "emoji": "😈",
      "name": "smiling face with horns"
    }, {
      "codes": ["1F47F"],
      "status": "fully-qualified",
      "emoji": "👿",
      "name": "angry face with horns"
    }, {
      "codes": ["1F479"],
      "status": "fully-qualified",
      "emoji": "👹",
      "name": "ogre"
    }, {
      "codes": ["1F47A"],
      "status": "fully-qualified",
      "emoji": "👺",
      "name": "goblin"
    }, {
      "codes": ["1F480"],
      "status": "fully-qualified",
      "emoji": "💀",
      "name": "skull"
    }, {
      "codes": ["2620", "FE0F"],
      "status": "fully-qualified",
      "emoji": "☠️",
      "name": "skull and crossbones"
    }, {
      "codes": ["2620"],
      "status": "non-fully-qualified",
      "emoji": "☠",
      "name": "skull and crossbones"
    }, {
      "codes": ["1F47B"],
      "status": "fully-qualified",
      "emoji": "👻",
      "name": "ghost"
    }, {
      "codes": ["1F47D"],
      "status": "fully-qualified",
      "emoji": "👽",
      "name": "alien"
    }, {
      "codes": ["1F47E"],
      "status": "fully-qualified",
      "emoji": "👾",
      "name": "alien monster"
    }, {
      "codes": ["1F916"],
      "status": "fully-qualified",
      "emoji": "🤖",
      "name": "robot face"
    }, {
      "codes": ["1F4A9"],
      "status": "fully-qualified",
      "emoji": "💩",
      "name": "pile of poo"
    }]
  }, {
    "name": "cat-face",
    "emojis": [{
      "codes": ["1F63A"],
      "status": "fully-qualified",
      "emoji": "😺",
      "name": "grinning cat face"
    }, {
      "codes": ["1F638"],
      "status": "fully-qualified",
      "emoji": "😸",
      "name": "grinning cat face with smiling eyes"
    }, {
      "codes": ["1F639"],
      "status": "fully-qualified",
      "emoji": "😹",
      "name": "cat face with tears of joy"
    }, {
      "codes": ["1F63B"],
      "status": "fully-qualified",
      "emoji": "😻",
      "name": "smiling cat face with heart-eyes"
    }, {
      "codes": ["1F63C"],
      "status": "fully-qualified",
      "emoji": "😼",
      "name": "cat face with wry smile"
    }, {
      "codes": ["1F63D"],
      "status": "fully-qualified",
      "emoji": "😽",
      "name": "kissing cat face"
    }, {
      "codes": ["1F640"],
      "status": "fully-qualified",
      "emoji": "🙀",
      "name": "weary cat face"
    }, {
      "codes": ["1F63F"],
      "status": "fully-qualified",
      "emoji": "😿",
      "name": "crying cat face"
    }, {
      "codes": ["1F63E"],
      "status": "fully-qualified",
      "emoji": "😾",
      "name": "pouting cat face"
    }]
  }, {
    "name": "monkey-face",
    "emojis": [{
      "codes": ["1F648"],
      "status": "fully-qualified",
      "emoji": "🙈",
      "name": "see-no-evil monkey"
    }, {
      "codes": ["1F649"],
      "status": "fully-qualified",
      "emoji": "🙉",
      "name": "hear-no-evil monkey"
    }, {
      "codes": ["1F64A"],
      "status": "fully-qualified",
      "emoji": "🙊",
      "name": "speak-no-evil monkey"
    }]
  }, {
    "name": "person",
    "emojis": [{
      "codes": ["1F476"],
      "status": "fully-qualified",
      "emoji": "👶",
      "name": "baby"
    }, {
      "codes": ["1F476", "1F3FB"],
      "status": "fully-qualified",
      "emoji": "👶🏻",
      "name": "baby: light skin tone"
    }, {
      "codes": ["1F476", "1F3FC"],
      "status": "fully-qualified",
      "emoji": "👶🏼",
      "name": "baby: medium-light skin tone"
    }, {
      "codes": ["1F476", "1F3FD"],
      "status": "fully-qualified",
      "emoji": "👶🏽",
      "name": "baby: medium skin tone"
    }, {
      "codes": ["1F476", "1F3FE"],
      "status": "fully-qualified",
      "emoji": "👶🏾",
      "name": "baby: medium-dark skin tone"
    }, {
      "codes": ["1F476", "1F3FF"],
      "status": "fully-qualified",
      "emoji": "👶🏿",
      "name": "baby: dark skin tone"
    }, {
      "codes": ["1F9D2"],
      "status": "fully-qualified",
      "emoji": "🧒",
      "name": "child"
    }, {
      "codes": ["1F9D2", "1F3FB"],
      "status": "fully-qualified",
      "emoji": "🧒🏻",
      "name": "child: light skin tone"
    }, {
      "codes": ["1F9D2", "1F3FC"],
      "status": "fully-qualified",
      "emoji": "🧒🏼",
      "name": "child: medium-light skin tone"
    }, {
      "codes": ["1F9D2", "1F3FD"],
      "status": "fully-qualified",
      "emoji": "🧒🏽",
      "name": "child: medium skin tone"
    }, {
      "codes": ["1F9D2", "1F3FE"],
      "status": "fully-qualified",
      "emoji": "🧒🏾",
      "name": "child: medium-dark skin tone"
    }, {
      "codes": ["1F9D2", "1F3FF"],
      "status": "fully-qualified",
      "emoji": "🧒🏿",
      "name": "child: dark skin tone"
    }, {
      "codes": ["1F466"],
      "status": "fully-qualified",
      "emoji": "👦",
      "name": "boy"
    }, {
      "codes": ["1F466", "1F3FB"],
      "status": "fully-qualified",
      "emoji": "👦🏻",
      "name": "boy: light skin tone"
    }, {
      "codes": ["1F466", "1F3FC"],
      "status": "fully-qualified",
      "emoji": "👦🏼",
      "name": "boy: medium-light skin tone"
    }, {
      "codes": ["1F466", "1F3FD"],
      "status": "fully-qualified",
      "emoji": "👦🏽",
      "name": "boy: medium skin tone"
    }, {
      "codes": ["1F466", "1F3FE"],
      "status": "fully-qualified",
      "emoji": "👦🏾",
      "name": "boy: medium-dark skin tone"
    }, {
      "codes": ["1F466", "1F3FF"],
      "status": "fully-qualified",
      "emoji": "👦🏿",
      "name": "boy: dark skin tone"
    }, {
      "codes": ["1F467"],
      "status": "fully-qualified",
      "emoji": "👧",
      "name": "girl"
    }, {
      "codes": ["1F467", "1F3FB"],
      "status": "fully-qualified",
      "emoji": "👧🏻",
      "name": "girl: light skin tone"
    }, {
      "codes": ["1F467", "1F3FC"],
      "status": "fully-qualified",
      "emoji": "👧🏼",
      "name": "girl: medium-light skin tone"
    }, {
      "codes": ["1F467", "1F3FD"],
      "status": "fully-qualified",
      "emoji": "👧🏽",
      "name": "girl: medium skin tone"
    }, {
      "codes": ["1F467", "1F3FE"],
      "status": "fully-qualified",
      "emoji": "👧🏾",
      "name": "girl: medium-dark skin tone"
    }, {
      "codes": ["1F467", "1F3FF"],
      "status": "fully-qualified",
      "emoji": "👧🏿",
      "name": "girl: dark skin tone"
    }, {
      "codes": ["1F9D1"],
      "status": "fully-qualified",
      "emoji": "🧑",
      "name": "adult"
    }, {
      "codes": ["1F9D1", "1F3FB"],
      "status": "fully-qualified",
      "emoji": "🧑🏻",
      "name": "adult: light skin tone"
    }, {
      "codes": ["1F9D1", "1F3FC"],
      "status": "fully-qualified",
      "emoji": "🧑🏼",
      "name": "adult: medium-light skin tone"
    }, {
      "codes": ["1F9D1", "1F3FD"],
      "status": "fully-qualified",
      "emoji": "🧑🏽",
      "name": "adult: medium skin tone"
    }, {
      "codes": ["1F9D1", "1F3FE"],
      "status": "fully-qualified",
      "emoji": "🧑🏾",
      "name": "adult: medium-dark skin tone"
    }, {
      "codes": ["1F9D1", "1F3FF"],
      "status": "fully-qualified",
      "emoji": "🧑🏿",
      "name": "adult: dark skin tone"
    }, {
      "codes": ["1F468"],
      "status": "fully-qualified",
      "emoji": "👨",
      "name": "man"
    }, {
      "codes": ["1F468", "1F3FB"],
      "status": "fully-qualified",
      "emoji": "👨🏻",
      "name": "man: light skin tone"
    }, {
      "codes": ["1F468", "1F3FC"],
      "status": "fully-qualified",
      "emoji": "👨🏼",
      "name": "man: medium-light skin tone"
    }, {
      "codes": ["1F468", "1F3FD"],
      "status": "fully-qualified",
      "emoji": "👨🏽",
      "name": "man: medium skin tone"
    }, {
      "codes": ["1F468", "1F3FE"],
      "status": "fully-qualified",
      "emoji": "👨🏾",
      "name": "man: medium-dark skin tone"
    }, {
      "codes": ["1F468", "1F3FF"],
      "status": "fully-qualified",
      "emoji": "👨🏿",
      "name": "man: dark skin tone"
    }, {
      "codes": ["1F469"],
      "status": "fully-qualified",
      "emoji": "👩",
      "name": "woman"
    }, {
      "codes": ["1F469", "1F3FB"],
      "status": "fully-qualified",
      "emoji": "👩🏻",
      "name": "woman: light skin tone"
    }, {
      "codes": ["1F469", "1F3FC"],
      "status": "fully-qualified",
      "emoji": "👩🏼",
      "name": "woman: medium-light skin tone"
    }, {
      "codes": ["1F469", "1F3FD"],
      "status": "fully-qualified",
      "emoji": "👩🏽",
      "name": "woman: medium skin tone"
    }, {
      "codes": ["1F469", "1F3FE"],
      "status": "fully-qualified",
      "emoji": "👩🏾",
      "name": "woman: medium-dark skin tone"
    }, {
      "codes": ["1F469", "1F3FF"],
      "status": "fully-qualified",
      "emoji": "👩🏿",
      "name": "woman: dark skin tone"
    }, {
      "codes": ["1F9D3"],
      "status": "fully-qualified",
      "emoji": "🧓",
      "name": "older adult"
    }, {
      "codes": ["1F9D3", "1F3FB"],
      "status": "fully-qualified",
      "emoji": "🧓🏻",
      "name": "older adult: light skin tone"
    }, {
      "codes": ["1F9D3", "1F3FC"],
      "status": "fully-qualified",
      "emoji": "🧓🏼",
      "name": "older adult: medium-light skin tone"
    }, {
      "codes": ["1F9D3", "1F3FD"],
      "status": "fully-qualified",
      "emoji": "🧓🏽",
      "name": "older adult: medium skin tone"
    }, {
      "codes": ["1F9D3", "1F3FE"],
      "status": "fully-qualified",
      "emoji": "🧓🏾",
      "name": "older adult: medium-dark skin tone"
    }, {
      "codes": ["1F9D3", "1F3FF"],
      "status": "fully-qualified",
      "emoji": "🧓🏿",
      "name": "older adult: dark skin tone"
    }, {
      "codes": ["1F474"],
      "status": "fully-qualified",
      "emoji": "👴",
      "name": "old man"
    }, {
      "codes": ["1F474", "1F3FB"],
      "status": "fully-qualified",
      "emoji": "👴🏻",
      "name": "old man: light skin tone"
    }, {
      "codes": ["1F474", "1F3FC"],
      "status": "fully-qualified",
      "emoji": "👴🏼",
      "name": "old man: medium-light skin tone"
    }, {
      "codes": ["1F474", "1F3FD"],
      "status": "fully-qualified",
      "emoji": "👴🏽",
      "name": "old man: medium skin tone"
    }, {
      "codes": ["1F474", "1F3FE"],
      "status": "fully-qualified",
      "emoji": "👴🏾",
      "name": "old man: medium-dark skin tone"
    }, {
      "codes": ["1F474", "1F3FF"],
      "status": "fully-qualified",
      "emoji": "👴🏿",
      "name": "old man: dark skin tone"
    }, {
      "codes": ["1F475"],
      "status": "fully-qualified",
      "emoji": "👵",
      "name": "old woman"
    }, {
      "codes": ["1F475", "1F3FB"],
      "status": "fully-qualified",
      "emoji": "👵🏻",
      "name": "old woman: light skin tone"
    }, {
      "codes": ["1F475", "1F3FC"],
      "status": "fully-qualified",
      "emoji": "👵🏼",
      "name": "old woman: medium-light skin tone"
    }, {
      "codes": ["1F475", "1F3FD"],
      "status": "fully-qualified",
      "emoji": "👵🏽",
      "name": "old woman: medium skin tone"
    }, {
      "codes": ["1F475", "1F3FE"],
      "status": "fully-qualified",
      "emoji": "👵🏾",
      "name": "old woman: medium-dark skin tone"
    }, {
      "codes": ["1F475", "1F3FF"],
      "status": "fully-qualified",
      "emoji": "👵🏿",
      "name": "old woman: dark skin tone"
    }]
  }, {
    "name": "person-role",
    "emojis": [{
      "codes": ["1F46E"],
      "status": "fully-qualified",
      "emoji": "👮",
      "name": "police officer"
    }, {
      "codes": ["1F46E", "1F3FB"],
      "status": "fully-qualified",
      "emoji": "👮🏻",
      "name": "police officer: light skin tone"
    }, {
      "codes": ["1F46E", "1F3FC"],
      "status": "fully-qualified",
      "emoji": "👮🏼",
      "name": "police officer: medium-light skin tone"
    }, {
      "codes": ["1F46E", "1F3FD"],
      "status": "fully-qualified",
      "emoji": "👮🏽",
      "name": "police officer: medium skin tone"
    }, {
      "codes": ["1F46E", "1F3FE"],
      "status": "fully-qualified",
      "emoji": "👮🏾",
      "name": "police officer: medium-dark skin tone"
    }, {
      "codes": ["1F46E", "1F3FF"],
      "status": "fully-qualified",
      "emoji": "👮🏿",
      "name": "police officer: dark skin tone"
    }, {
      "codes": ["1F575", "FE0F"],
      "status": "fully-qualified",
      "emoji": "🕵️",
      "name": "detective"
    }, {
      "codes": ["1F575"],
      "status": "non-fully-qualified",
      "emoji": "🕵",
      "name": "detective"
    }, {
      "codes": ["1F575", "1F3FB"],
      "status": "fully-qualified",
      "emoji": "🕵🏻",
      "name": "detective: light skin tone"
    }, {
      "codes": ["1F575", "1F3FC"],
      "status": "fully-qualified",
      "emoji": "🕵🏼",
      "name": "detective: medium-light skin tone"
    }, {
      "codes": ["1F575", "1F3FD"],
      "status": "fully-qualified",
      "emoji": "🕵🏽",
      "name": "detective: medium skin tone"
    }, {
      "codes": ["1F575", "1F3FE"],
      "status": "fully-qualified",
      "emoji": "🕵🏾",
      "name": "detective: medium-dark skin tone"
    }, {
      "codes": ["1F575", "1F3FF"],
      "status": "fully-qualified",
      "emoji": "🕵🏿",
      "name": "detective: dark skin tone"
    }, {
      "codes": ["1F482"],
      "status": "fully-qualified",
      "emoji": "💂",
      "name": "guard"
    }, {
      "codes": ["1F482", "1F3FB"],
      "status": "fully-qualified",
      "emoji": "💂🏻",
      "name": "guard: light skin tone"
    }, {
      "codes": ["1F482", "1F3FC"],
      "status": "fully-qualified",
      "emoji": "💂🏼",
      "name": "guard: medium-light skin tone"
    }, {
      "codes": ["1F482", "1F3FD"],
      "status": "fully-qualified",
      "emoji": "💂🏽",
      "name": "guard: medium skin tone"
    }, {
      "codes": ["1F482", "1F3FE"],
      "status": "fully-qualified",
      "emoji": "💂🏾",
      "name": "guard: medium-dark skin tone"
    }, {
      "codes": ["1F482", "1F3FF"],
      "status": "fully-qualified",
      "emoji": "💂🏿",
      "name": "guard: dark skin tone"
    }, {
      "codes": ["1F477"],
      "status": "fully-qualified",
      "emoji": "👷",
      "name": "construction worker"
    }, {
      "codes": ["1F477", "1F3FB"],
      "status": "fully-qualified",
      "emoji": "👷🏻",
      "name": "construction worker: light skin tone"
    }, {
      "codes": ["1F477", "1F3FC"],
      "status": "fully-qualified",
      "emoji": "👷🏼",
      "name": "construction worker: medium-light skin tone"
    }, {
      "codes": ["1F477", "1F3FD"],
      "status": "fully-qualified",
      "emoji": "👷🏽",
      "name": "construction worker: medium skin tone"
    }, {
      "codes": ["1F477", "1F3FE"],
      "status": "fully-qualified",
      "emoji": "👷🏾",
      "name": "construction worker: medium-dark skin tone"
    }, {
      "codes": ["1F477", "1F3FF"],
      "status": "fully-qualified",
      "emoji": "👷🏿",
      "name": "construction worker: dark skin tone"
    }, {
      "codes": ["1F934"],
      "status": "fully-qualified",
      "emoji": "🤴",
      "name": "prince"
    }, {
      "codes": ["1F934", "1F3FB"],
      "status": "fully-qualified",
      "emoji": "🤴🏻",
      "name": "prince: light skin tone"
    }, {
      "codes": ["1F934", "1F3FC"],
      "status": "fully-qualified",
      "emoji": "🤴🏼",
      "name": "prince: medium-light skin tone"
    }, {
      "codes": ["1F934", "1F3FD"],
      "status": "fully-qualified",
      "emoji": "🤴🏽",
      "name": "prince: medium skin tone"
    }, {
      "codes": ["1F934", "1F3FE"],
      "status": "fully-qualified",
      "emoji": "🤴🏾",
      "name": "prince: medium-dark skin tone"
    }, {
      "codes": ["1F934", "1F3FF"],
      "status": "fully-qualified",
      "emoji": "🤴🏿",
      "name": "prince: dark skin tone"
    }, {
      "codes": ["1F478"],
      "status": "fully-qualified",
      "emoji": "👸",
      "name": "princess"
    }, {
      "codes": ["1F478", "1F3FB"],
      "status": "fully-qualified",
      "emoji": "👸🏻",
      "name": "princess: light skin tone"
    }, {
      "codes": ["1F478", "1F3FC"],
      "status": "fully-qualified",
      "emoji": "👸🏼",
      "name": "princess: medium-light skin tone"
    }, {
      "codes": ["1F478", "1F3FD"],
      "status": "fully-qualified",
      "emoji": "👸🏽",
      "name": "princess: medium skin tone"
    }, {
      "codes": ["1F478", "1F3FE"],
      "status": "fully-qualified",
      "emoji": "👸🏾",
      "name": "princess: medium-dark skin tone"
    }, {
      "codes": ["1F478", "1F3FF"],
      "status": "fully-qualified",
      "emoji": "👸🏿",
      "name": "princess: dark skin tone"
    }, {
      "codes": ["1F473"],
      "status": "fully-qualified",
      "emoji": "👳",
      "name": "person wearing turban"
    }, {
      "codes": ["1F473", "1F3FB"],
      "status": "fully-qualified",
      "emoji": "👳🏻",
      "name": "person wearing turban: light skin tone"
    }, {
      "codes": ["1F473", "1F3FC"],
      "status": "fully-qualified",
      "emoji": "👳🏼",
      "name": "person wearing turban: medium-light skin tone"
    }, {
      "codes": ["1F473", "1F3FD"],
      "status": "fully-qualified",
      "emoji": "👳🏽",
      "name": "person wearing turban: medium skin tone"
    }, {
      "codes": ["1F473", "1F3FE"],
      "status": "fully-qualified",
      "emoji": "👳🏾",
      "name": "person wearing turban: medium-dark skin tone"
    }, {
      "codes": ["1F473", "1F3FF"],
      "status": "fully-qualified",
      "emoji": "👳🏿",
      "name": "person wearing turban: dark skin tone"
    }, {
      "codes": ["1F472"],
      "status": "fully-qualified",
      "emoji": "👲",
      "name": "man with Chinese cap"
    }, {
      "codes": ["1F472", "1F3FB"],
      "status": "fully-qualified",
      "emoji": "👲🏻",
      "name": "man with Chinese cap: light skin tone"
    }, {
      "codes": ["1F472", "1F3FC"],
      "status": "fully-qualified",
      "emoji": "👲🏼",
      "name": "man with Chinese cap: medium-light skin tone"
    }, {
      "codes": ["1F472", "1F3FD"],
      "status": "fully-qualified",
      "emoji": "👲🏽",
      "name": "man with Chinese cap: medium skin tone"
    }, {
      "codes": ["1F472", "1F3FE"],
      "status": "fully-qualified",
      "emoji": "👲🏾",
      "name": "man with Chinese cap: medium-dark skin tone"
    }, {
      "codes": ["1F472", "1F3FF"],
      "status": "fully-qualified",
      "emoji": "👲🏿",
      "name": "man with Chinese cap: dark skin tone"
    }, {
      "codes": ["1F9D5"],
      "status": "fully-qualified",
      "emoji": "🧕",
      "name": "woman with headscarf"
    }, {
      "codes": ["1F9D5", "1F3FB"],
      "status": "fully-qualified",
      "emoji": "🧕🏻",
      "name": "woman with headscarf: light skin tone"
    }, {
      "codes": ["1F9D5", "1F3FC"],
      "status": "fully-qualified",
      "emoji": "🧕🏼",
      "name": "woman with headscarf: medium-light skin tone"
    }, {
      "codes": ["1F9D5", "1F3FD"],
      "status": "fully-qualified",
      "emoji": "🧕🏽",
      "name": "woman with headscarf: medium skin tone"
    }, {
      "codes": ["1F9D5", "1F3FE"],
      "status": "fully-qualified",
      "emoji": "🧕🏾",
      "name": "woman with headscarf: medium-dark skin tone"
    }, {
      "codes": ["1F9D5", "1F3FF"],
      "status": "fully-qualified",
      "emoji": "🧕🏿",
      "name": "woman with headscarf: dark skin tone"
    }, {
      "codes": ["1F9D4"],
      "status": "fully-qualified",
      "emoji": "🧔",
      "name": "bearded person"
    }, {
      "codes": ["1F9D4", "1F3FB"],
      "status": "fully-qualified",
      "emoji": "🧔🏻",
      "name": "bearded person: light skin tone"
    }, {
      "codes": ["1F9D4", "1F3FC"],
      "status": "fully-qualified",
      "emoji": "🧔🏼",
      "name": "bearded person: medium-light skin tone"
    }, {
      "codes": ["1F9D4", "1F3FD"],
      "status": "fully-qualified",
      "emoji": "🧔🏽",
      "name": "bearded person: medium skin tone"
    }, {
      "codes": ["1F9D4", "1F3FE"],
      "status": "fully-qualified",
      "emoji": "🧔🏾",
      "name": "bearded person: medium-dark skin tone"
    }, {
      "codes": ["1F9D4", "1F3FF"],
      "status": "fully-qualified",
      "emoji": "🧔🏿",
      "name": "bearded person: dark skin tone"
    }, {
      "codes": ["1F471"],
      "status": "fully-qualified",
      "emoji": "👱",
      "name": "blond-haired person"
    }, {
      "codes": ["1F471", "1F3FB"],
      "status": "fully-qualified",
      "emoji": "👱🏻",
      "name": "blond-haired person: light skin tone"
    }, {
      "codes": ["1F471", "1F3FC"],
      "status": "fully-qualified",
      "emoji": "👱🏼",
      "name": "blond-haired person: medium-light skin tone"
    }, {
      "codes": ["1F471", "1F3FD"],
      "status": "fully-qualified",
      "emoji": "👱🏽",
      "name": "blond-haired person: medium skin tone"
    }, {
      "codes": ["1F471", "1F3FE"],
      "status": "fully-qualified",
      "emoji": "👱🏾",
      "name": "blond-haired person: medium-dark skin tone"
    }, {
      "codes": ["1F471", "1F3FF"],
      "status": "fully-qualified",
      "emoji": "👱🏿",
      "name": "blond-haired person: dark skin tone"
    }, {
      "codes": ["1F935"],
      "status": "fully-qualified",
      "emoji": "🤵",
      "name": "man in tuxedo"
    }, {
      "codes": ["1F935", "1F3FB"],
      "status": "fully-qualified",
      "emoji": "🤵🏻",
      "name": "man in tuxedo: light skin tone"
    }, {
      "codes": ["1F935", "1F3FC"],
      "status": "fully-qualified",
      "emoji": "🤵🏼",
      "name": "man in tuxedo: medium-light skin tone"
    }, {
      "codes": ["1F935", "1F3FD"],
      "status": "fully-qualified",
      "emoji": "🤵🏽",
      "name": "man in tuxedo: medium skin tone"
    }, {
      "codes": ["1F935", "1F3FE"],
      "status": "fully-qualified",
      "emoji": "🤵🏾",
      "name": "man in tuxedo: medium-dark skin tone"
    }, {
      "codes": ["1F935", "1F3FF"],
      "status": "fully-qualified",
      "emoji": "🤵🏿",
      "name": "man in tuxedo: dark skin tone"
    }, {
      "codes": ["1F470"],
      "status": "fully-qualified",
      "emoji": "👰",
      "name": "bride with veil"
    }, {
      "codes": ["1F470", "1F3FB"],
      "status": "fully-qualified",
      "emoji": "👰🏻",
      "name": "bride with veil: light skin tone"
    }, {
      "codes": ["1F470", "1F3FC"],
      "status": "fully-qualified",
      "emoji": "👰🏼",
      "name": "bride with veil: medium-light skin tone"
    }, {
      "codes": ["1F470", "1F3FD"],
      "status": "fully-qualified",
      "emoji": "👰🏽",
      "name": "bride with veil: medium skin tone"
    }, {
      "codes": ["1F470", "1F3FE"],
      "status": "fully-qualified",
      "emoji": "👰🏾",
      "name": "bride with veil: medium-dark skin tone"
    }, {
      "codes": ["1F470", "1F3FF"],
      "status": "fully-qualified",
      "emoji": "👰🏿",
      "name": "bride with veil: dark skin tone"
    }, {
      "codes": ["1F930"],
      "status": "fully-qualified",
      "emoji": "🤰",
      "name": "pregnant woman"
    }, {
      "codes": ["1F930", "1F3FB"],
      "status": "fully-qualified",
      "emoji": "🤰🏻",
      "name": "pregnant woman: light skin tone"
    }, {
      "codes": ["1F930", "1F3FC"],
      "status": "fully-qualified",
      "emoji": "🤰🏼",
      "name": "pregnant woman: medium-light skin tone"
    }, {
      "codes": ["1F930", "1F3FD"],
      "status": "fully-qualified",
      "emoji": "🤰🏽",
      "name": "pregnant woman: medium skin tone"
    }, {
      "codes": ["1F930", "1F3FE"],
      "status": "fully-qualified",
      "emoji": "🤰🏾",
      "name": "pregnant woman: medium-dark skin tone"
    }, {
      "codes": ["1F930", "1F3FF"],
      "status": "fully-qualified",
      "emoji": "🤰🏿",
      "name": "pregnant woman: dark skin tone"
    }, {
      "codes": ["1F931"],
      "status": "fully-qualified",
      "emoji": "🤱",
      "name": "breast-feeding"
    }, {
      "codes": ["1F931", "1F3FB"],
      "status": "fully-qualified",
      "emoji": "🤱🏻",
      "name": "breast-feeding: light skin tone"
    }, {
      "codes": ["1F931", "1F3FC"],
      "status": "fully-qualified",
      "emoji": "🤱🏼",
      "name": "breast-feeding: medium-light skin tone"
    }, {
      "codes": ["1F931", "1F3FD"],
      "status": "fully-qualified",
      "emoji": "🤱🏽",
      "name": "breast-feeding: medium skin tone"
    }, {
      "codes": ["1F931", "1F3FE"],
      "status": "fully-qualified",
      "emoji": "🤱🏾",
      "name": "breast-feeding: medium-dark skin tone"
    }, {
      "codes": ["1F931", "1F3FF"],
      "status": "fully-qualified",
      "emoji": "🤱🏿",
      "name": "breast-feeding: dark skin tone"
    }]
  }, {
    "name": "person-fantasy",
    "emojis": [{
      "codes": ["1F47C"],
      "status": "fully-qualified",
      "emoji": "👼",
      "name": "baby angel"
    }, {
      "codes": ["1F47C", "1F3FB"],
      "status": "fully-qualified",
      "emoji": "👼🏻",
      "name": "baby angel: light skin tone"
    }, {
      "codes": ["1F47C", "1F3FC"],
      "status": "fully-qualified",
      "emoji": "👼🏼",
      "name": "baby angel: medium-light skin tone"
    }, {
      "codes": ["1F47C", "1F3FD"],
      "status": "fully-qualified",
      "emoji": "👼🏽",
      "name": "baby angel: medium skin tone"
    }, {
      "codes": ["1F47C", "1F3FE"],
      "status": "fully-qualified",
      "emoji": "👼🏾",
      "name": "baby angel: medium-dark skin tone"
    }, {
      "codes": ["1F47C", "1F3FF"],
      "status": "fully-qualified",
      "emoji": "👼🏿",
      "name": "baby angel: dark skin tone"
    }, {
      "codes": ["1F385"],
      "status": "fully-qualified",
      "emoji": "🎅",
      "name": "Santa Claus"
    }, {
      "codes": ["1F385", "1F3FB"],
      "status": "fully-qualified",
      "emoji": "🎅🏻",
      "name": "Santa Claus: light skin tone"
    }, {
      "codes": ["1F385", "1F3FC"],
      "status": "fully-qualified",
      "emoji": "🎅🏼",
      "name": "Santa Claus: medium-light skin tone"
    }, {
      "codes": ["1F385", "1F3FD"],
      "status": "fully-qualified",
      "emoji": "🎅🏽",
      "name": "Santa Claus: medium skin tone"
    }, {
      "codes": ["1F385", "1F3FE"],
      "status": "fully-qualified",
      "emoji": "🎅🏾",
      "name": "Santa Claus: medium-dark skin tone"
    }, {
      "codes": ["1F385", "1F3FF"],
      "status": "fully-qualified",
      "emoji": "🎅🏿",
      "name": "Santa Claus: dark skin tone"
    }, {
      "codes": ["1F936"],
      "status": "fully-qualified",
      "emoji": "🤶",
      "name": "Mrs. Claus"
    }, {
      "codes": ["1F936", "1F3FB"],
      "status": "fully-qualified",
      "emoji": "🤶🏻",
      "name": "Mrs. Claus: light skin tone"
    }, {
      "codes": ["1F936", "1F3FC"],
      "status": "fully-qualified",
      "emoji": "🤶🏼",
      "name": "Mrs. Claus: medium-light skin tone"
    }, {
      "codes": ["1F936", "1F3FD"],
      "status": "fully-qualified",
      "emoji": "🤶🏽",
      "name": "Mrs. Claus: medium skin tone"
    }, {
      "codes": ["1F936", "1F3FE"],
      "status": "fully-qualified",
      "emoji": "🤶🏾",
      "name": "Mrs. Claus: medium-dark skin tone"
    }, {
      "codes": ["1F936", "1F3FF"],
      "status": "fully-qualified",
      "emoji": "🤶🏿",
      "name": "Mrs. Claus: dark skin tone"
    }, {
      "codes": ["1F9D9"],
      "status": "fully-qualified",
      "emoji": "🧙",
      "name": "mage"
    }, {
      "codes": ["1F9D9", "1F3FB"],
      "status": "fully-qualified",
      "emoji": "🧙🏻",
      "name": "mage: light skin tone"
    }, {
      "codes": ["1F9D9", "1F3FC"],
      "status": "fully-qualified",
      "emoji": "🧙🏼",
      "name": "mage: medium-light skin tone"
    }, {
      "codes": ["1F9D9", "1F3FD"],
      "status": "fully-qualified",
      "emoji": "🧙🏽",
      "name": "mage: medium skin tone"
    }, {
      "codes": ["1F9D9", "1F3FE"],
      "status": "fully-qualified",
      "emoji": "🧙🏾",
      "name": "mage: medium-dark skin tone"
    }, {
      "codes": ["1F9D9", "1F3FF"],
      "status": "fully-qualified",
      "emoji": "🧙🏿",
      "name": "mage: dark skin tone"
    }, {
      "codes": ["1F9DA"],
      "status": "fully-qualified",
      "emoji": "🧚",
      "name": "fairy"
    }, {
      "codes": ["1F9DA", "1F3FB"],
      "status": "fully-qualified",
      "emoji": "🧚🏻",
      "name": "fairy: light skin tone"
    }, {
      "codes": ["1F9DA", "1F3FC"],
      "status": "fully-qualified",
      "emoji": "🧚🏼",
      "name": "fairy: medium-light skin tone"
    }, {
      "codes": ["1F9DA", "1F3FD"],
      "status": "fully-qualified",
      "emoji": "🧚🏽",
      "name": "fairy: medium skin tone"
    }, {
      "codes": ["1F9DA", "1F3FE"],
      "status": "fully-qualified",
      "emoji": "🧚🏾",
      "name": "fairy: medium-dark skin tone"
    }, {
      "codes": ["1F9DA", "1F3FF"],
      "status": "fully-qualified",
      "emoji": "🧚🏿",
      "name": "fairy: dark skin tone"
    }, {
      "codes": ["1F9DB"],
      "status": "fully-qualified",
      "emoji": "🧛",
      "name": "vampire"
    }, {
      "codes": ["1F9DB", "1F3FB"],
      "status": "fully-qualified",
      "emoji": "🧛🏻",
      "name": "vampire: light skin tone"
    }, {
      "codes": ["1F9DB", "1F3FC"],
      "status": "fully-qualified",
      "emoji": "🧛🏼",
      "name": "vampire: medium-light skin tone"
    }, {
      "codes": ["1F9DB", "1F3FD"],
      "status": "fully-qualified",
      "emoji": "🧛🏽",
      "name": "vampire: medium skin tone"
    }, {
      "codes": ["1F9DB", "1F3FE"],
      "status": "fully-qualified",
      "emoji": "🧛🏾",
      "name": "vampire: medium-dark skin tone"
    }, {
      "codes": ["1F9DB", "1F3FF"],
      "status": "fully-qualified",
      "emoji": "🧛🏿",
      "name": "vampire: dark skin tone"
    }, {
      "codes": ["1F9DC"],
      "status": "fully-qualified",
      "emoji": "🧜",
      "name": "merperson"
    }, {
      "codes": ["1F9DC", "1F3FB"],
      "status": "fully-qualified",
      "emoji": "🧜🏻",
      "name": "merperson: light skin tone"
    }, {
      "codes": ["1F9DC", "1F3FC"],
      "status": "fully-qualified",
      "emoji": "🧜🏼",
      "name": "merperson: medium-light skin tone"
    }, {
      "codes": ["1F9DC", "1F3FD"],
      "status": "fully-qualified",
      "emoji": "🧜🏽",
      "name": "merperson: medium skin tone"
    }, {
      "codes": ["1F9DC", "1F3FE"],
      "status": "fully-qualified",
      "emoji": "🧜🏾",
      "name": "merperson: medium-dark skin tone"
    }, {
      "codes": ["1F9DC", "1F3FF"],
      "status": "fully-qualified",
      "emoji": "🧜🏿",
      "name": "merperson: dark skin tone"
    }, {
      "codes": ["1F9DD"],
      "status": "fully-qualified",
      "emoji": "🧝",
      "name": "elf"
    }, {
      "codes": ["1F9DD", "1F3FB"],
      "status": "fully-qualified",
      "emoji": "🧝🏻",
      "name": "elf: light skin tone"
    }, {
      "codes": ["1F9DD", "1F3FC"],
      "status": "fully-qualified",
      "emoji": "🧝🏼",
      "name": "elf: medium-light skin tone"
    }, {
      "codes": ["1F9DD", "1F3FD"],
      "status": "fully-qualified",
      "emoji": "🧝🏽",
      "name": "elf: medium skin tone"
    }, {
      "codes": ["1F9DD", "1F3FE"],
      "status": "fully-qualified",
      "emoji": "🧝🏾",
      "name": "elf: medium-dark skin tone"
    }, {
      "codes": ["1F9DD", "1F3FF"],
      "status": "fully-qualified",
      "emoji": "🧝🏿",
      "name": "elf: dark skin tone"
    }, {
      "codes": ["1F9DE"],
      "status": "fully-qualified",
      "emoji": "🧞",
      "name": "genie"
    }, {
      "codes": ["1F9DF"],
      "status": "fully-qualified",
      "emoji": "🧟",
      "name": "zombie"
    }]
  }, {
    "name": "person-gesture",
    "emojis": [{
      "codes": ["1F64D"],
      "status": "fully-qualified",
      "emoji": "🙍",
      "name": "person frowning"
    }, {
      "codes": ["1F64D", "1F3FB"],
      "status": "fully-qualified",
      "emoji": "🙍🏻",
      "name": "person frowning: light skin tone"
    }, {
      "codes": ["1F64D", "1F3FC"],
      "status": "fully-qualified",
      "emoji": "🙍🏼",
      "name": "person frowning: medium-light skin tone"
    }, {
      "codes": ["1F64D", "1F3FD"],
      "status": "fully-qualified",
      "emoji": "🙍🏽",
      "name": "person frowning: medium skin tone"
    }, {
      "codes": ["1F64D", "1F3FE"],
      "status": "fully-qualified",
      "emoji": "🙍🏾",
      "name": "person frowning: medium-dark skin tone"
    }, {
      "codes": ["1F64D", "1F3FF"],
      "status": "fully-qualified",
      "emoji": "🙍🏿",
      "name": "person frowning: dark skin tone"
    }, {
      "codes": ["1F64E"],
      "status": "fully-qualified",
      "emoji": "🙎",
      "name": "person pouting"
    }, {
      "codes": ["1F64E", "1F3FB"],
      "status": "fully-qualified",
      "emoji": "🙎🏻",
      "name": "person pouting: light skin tone"
    }, {
      "codes": ["1F64E", "1F3FC"],
      "status": "fully-qualified",
      "emoji": "🙎🏼",
      "name": "person pouting: medium-light skin tone"
    }, {
      "codes": ["1F64E", "1F3FD"],
      "status": "fully-qualified",
      "emoji": "🙎🏽",
      "name": "person pouting: medium skin tone"
    }, {
      "codes": ["1F64E", "1F3FE"],
      "status": "fully-qualified",
      "emoji": "🙎🏾",
      "name": "person pouting: medium-dark skin tone"
    }, {
      "codes": ["1F64E", "1F3FF"],
      "status": "fully-qualified",
      "emoji": "🙎🏿",
      "name": "person pouting: dark skin tone"
    }, {
      "codes": ["1F645"],
      "status": "fully-qualified",
      "emoji": "🙅",
      "name": "person gesturing NO"
    }, {
      "codes": ["1F645", "1F3FB"],
      "status": "fully-qualified",
      "emoji": "🙅🏻",
      "name": "person gesturing NO: light skin tone"
    }, {
      "codes": ["1F645", "1F3FC"],
      "status": "fully-qualified",
      "emoji": "🙅🏼",
      "name": "person gesturing NO: medium-light skin tone"
    }, {
      "codes": ["1F645", "1F3FD"],
      "status": "fully-qualified",
      "emoji": "🙅🏽",
      "name": "person gesturing NO: medium skin tone"
    }, {
      "codes": ["1F645", "1F3FE"],
      "status": "fully-qualified",
      "emoji": "🙅🏾",
      "name": "person gesturing NO: medium-dark skin tone"
    }, {
      "codes": ["1F645", "1F3FF"],
      "status": "fully-qualified",
      "emoji": "🙅🏿",
      "name": "person gesturing NO: dark skin tone"
    }, {
      "codes": ["1F646"],
      "status": "fully-qualified",
      "emoji": "🙆",
      "name": "person gesturing OK"
    }, {
      "codes": ["1F646", "1F3FB"],
      "status": "fully-qualified",
      "emoji": "🙆🏻",
      "name": "person gesturing OK: light skin tone"
    }, {
      "codes": ["1F646", "1F3FC"],
      "status": "fully-qualified",
      "emoji": "🙆🏼",
      "name": "person gesturing OK: medium-light skin tone"
    }, {
      "codes": ["1F646", "1F3FD"],
      "status": "fully-qualified",
      "emoji": "🙆🏽",
      "name": "person gesturing OK: medium skin tone"
    }, {
      "codes": ["1F646", "1F3FE"],
      "status": "fully-qualified",
      "emoji": "🙆🏾",
      "name": "person gesturing OK: medium-dark skin tone"
    }, {
      "codes": ["1F646", "1F3FF"],
      "status": "fully-qualified",
      "emoji": "🙆🏿",
      "name": "person gesturing OK: dark skin tone"
    }, {
      "codes": ["1F481"],
      "status": "fully-qualified",
      "emoji": "💁",
      "name": "person tipping hand"
    }, {
      "codes": ["1F481", "1F3FB"],
      "status": "fully-qualified",
      "emoji": "💁🏻",
      "name": "person tipping hand: light skin tone"
    }, {
      "codes": ["1F481", "1F3FC"],
      "status": "fully-qualified",
      "emoji": "💁🏼",
      "name": "person tipping hand: medium-light skin tone"
    }, {
      "codes": ["1F481", "1F3FD"],
      "status": "fully-qualified",
      "emoji": "💁🏽",
      "name": "person tipping hand: medium skin tone"
    }, {
      "codes": ["1F481", "1F3FE"],
      "status": "fully-qualified",
      "emoji": "💁🏾",
      "name": "person tipping hand: medium-dark skin tone"
    }, {
      "codes": ["1F481", "1F3FF"],
      "status": "fully-qualified",
      "emoji": "💁🏿",
      "name": "person tipping hand: dark skin tone"
    }, {
      "codes": ["1F64B"],
      "status": "fully-qualified",
      "emoji": "🙋",
      "name": "person raising hand"
    }, {
      "codes": ["1F64B", "1F3FB"],
      "status": "fully-qualified",
      "emoji": "🙋🏻",
      "name": "person raising hand: light skin tone"
    }, {
      "codes": ["1F64B", "1F3FC"],
      "status": "fully-qualified",
      "emoji": "🙋🏼",
      "name": "person raising hand: medium-light skin tone"
    }, {
      "codes": ["1F64B", "1F3FD"],
      "status": "fully-qualified",
      "emoji": "🙋🏽",
      "name": "person raising hand: medium skin tone"
    }, {
      "codes": ["1F64B", "1F3FE"],
      "status": "fully-qualified",
      "emoji": "🙋🏾",
      "name": "person raising hand: medium-dark skin tone"
    }, {
      "codes": ["1F64B", "1F3FF"],
      "status": "fully-qualified",
      "emoji": "🙋🏿",
      "name": "person raising hand: dark skin tone"
    }, {
      "codes": ["1F647"],
      "status": "fully-qualified",
      "emoji": "🙇",
      "name": "person bowing"
    }, {
      "codes": ["1F647", "1F3FB"],
      "status": "fully-qualified",
      "emoji": "🙇🏻",
      "name": "person bowing: light skin tone"
    }, {
      "codes": ["1F647", "1F3FC"],
      "status": "fully-qualified",
      "emoji": "🙇🏼",
      "name": "person bowing: medium-light skin tone"
    }, {
      "codes": ["1F647", "1F3FD"],
      "status": "fully-qualified",
      "emoji": "🙇🏽",
      "name": "person bowing: medium skin tone"
    }, {
      "codes": ["1F647", "1F3FE"],
      "status": "fully-qualified",
      "emoji": "🙇🏾",
      "name": "person bowing: medium-dark skin tone"
    }, {
      "codes": ["1F647", "1F3FF"],
      "status": "fully-qualified",
      "emoji": "🙇🏿",
      "name": "person bowing: dark skin tone"
    }, {
      "codes": ["1F926"],
      "status": "fully-qualified",
      "emoji": "🤦",
      "name": "person facepalming"
    }, {
      "codes": ["1F926", "1F3FB"],
      "status": "fully-qualified",
      "emoji": "🤦🏻",
      "name": "person facepalming: light skin tone"
    }, {
      "codes": ["1F926", "1F3FC"],
      "status": "fully-qualified",
      "emoji": "🤦🏼",
      "name": "person facepalming: medium-light skin tone"
    }, {
      "codes": ["1F926", "1F3FD"],
      "status": "fully-qualified",
      "emoji": "🤦🏽",
      "name": "person facepalming: medium skin tone"
    }, {
      "codes": ["1F926", "1F3FE"],
      "status": "fully-qualified",
      "emoji": "🤦🏾",
      "name": "person facepalming: medium-dark skin tone"
    }, {
      "codes": ["1F926", "1F3FF"],
      "status": "fully-qualified",
      "emoji": "🤦🏿",
      "name": "person facepalming: dark skin tone"
    }, {
      "codes": ["1F937"],
      "status": "fully-qualified",
      "emoji": "🤷",
      "name": "person shrugging"
    }, {
      "codes": ["1F937", "1F3FB"],
      "status": "fully-qualified",
      "emoji": "🤷🏻",
      "name": "person shrugging: light skin tone"
    }, {
      "codes": ["1F937", "1F3FC"],
      "status": "fully-qualified",
      "emoji": "🤷🏼",
      "name": "person shrugging: medium-light skin tone"
    }, {
      "codes": ["1F937", "1F3FD"],
      "status": "fully-qualified",
      "emoji": "🤷🏽",
      "name": "person shrugging: medium skin tone"
    }, {
      "codes": ["1F937", "1F3FE"],
      "status": "fully-qualified",
      "emoji": "🤷🏾",
      "name": "person shrugging: medium-dark skin tone"
    }, {
      "codes": ["1F937", "1F3FF"],
      "status": "fully-qualified",
      "emoji": "🤷🏿",
      "name": "person shrugging: dark skin tone"
    }]
  }, {
    "name": "person-activity",
    "emojis": [{
      "codes": ["1F486"],
      "status": "fully-qualified",
      "emoji": "💆",
      "name": "person getting massage"
    }, {
      "codes": ["1F486", "1F3FB"],
      "status": "fully-qualified",
      "emoji": "💆🏻",
      "name": "person getting massage: light skin tone"
    }, {
      "codes": ["1F486", "1F3FC"],
      "status": "fully-qualified",
      "emoji": "💆🏼",
      "name": "person getting massage: medium-light skin tone"
    }, {
      "codes": ["1F486", "1F3FD"],
      "status": "fully-qualified",
      "emoji": "💆🏽",
      "name": "person getting massage: medium skin tone"
    }, {
      "codes": ["1F486", "1F3FE"],
      "status": "fully-qualified",
      "emoji": "💆🏾",
      "name": "person getting massage: medium-dark skin tone"
    }, {
      "codes": ["1F486", "1F3FF"],
      "status": "fully-qualified",
      "emoji": "💆🏿",
      "name": "person getting massage: dark skin tone"
    }, {
      "codes": ["1F487"],
      "status": "fully-qualified",
      "emoji": "💇",
      "name": "person getting haircut"
    }, {
      "codes": ["1F487", "1F3FB"],
      "status": "fully-qualified",
      "emoji": "💇🏻",
      "name": "person getting haircut: light skin tone"
    }, {
      "codes": ["1F487", "1F3FC"],
      "status": "fully-qualified",
      "emoji": "💇🏼",
      "name": "person getting haircut: medium-light skin tone"
    }, {
      "codes": ["1F487", "1F3FD"],
      "status": "fully-qualified",
      "emoji": "💇🏽",
      "name": "person getting haircut: medium skin tone"
    }, {
      "codes": ["1F487", "1F3FE"],
      "status": "fully-qualified",
      "emoji": "💇🏾",
      "name": "person getting haircut: medium-dark skin tone"
    }, {
      "codes": ["1F487", "1F3FF"],
      "status": "fully-qualified",
      "emoji": "💇🏿",
      "name": "person getting haircut: dark skin tone"
    }, {
      "codes": ["1F6B6"],
      "status": "fully-qualified",
      "emoji": "🚶",
      "name": "person walking"
    }, {
      "codes": ["1F6B6", "1F3FB"],
      "status": "fully-qualified",
      "emoji": "🚶🏻",
      "name": "person walking: light skin tone"
    }, {
      "codes": ["1F6B6", "1F3FC"],
      "status": "fully-qualified",
      "emoji": "🚶🏼",
      "name": "person walking: medium-light skin tone"
    }, {
      "codes": ["1F6B6", "1F3FD"],
      "status": "fully-qualified",
      "emoji": "🚶🏽",
      "name": "person walking: medium skin tone"
    }, {
      "codes": ["1F6B6", "1F3FE"],
      "status": "fully-qualified",
      "emoji": "🚶🏾",
      "name": "person walking: medium-dark skin tone"
    }, {
      "codes": ["1F6B6", "1F3FF"],
      "status": "fully-qualified",
      "emoji": "🚶🏿",
      "name": "person walking: dark skin tone"
    }, {
      "codes": ["1F3C3"],
      "status": "fully-qualified",
      "emoji": "🏃",
      "name": "person running"
    }, {
      "codes": ["1F3C3", "1F3FB"],
      "status": "fully-qualified",
      "emoji": "🏃🏻",
      "name": "person running: light skin tone"
    }, {
      "codes": ["1F3C3", "1F3FC"],
      "status": "fully-qualified",
      "emoji": "🏃🏼",
      "name": "person running: medium-light skin tone"
    }, {
      "codes": ["1F3C3", "1F3FD"],
      "status": "fully-qualified",
      "emoji": "🏃🏽",
      "name": "person running: medium skin tone"
    }, {
      "codes": ["1F3C3", "1F3FE"],
      "status": "fully-qualified",
      "emoji": "🏃🏾",
      "name": "person running: medium-dark skin tone"
    }, {
      "codes": ["1F3C3", "1F3FF"],
      "status": "fully-qualified",
      "emoji": "🏃🏿",
      "name": "person running: dark skin tone"
    }, {
      "codes": ["1F483"],
      "status": "fully-qualified",
      "emoji": "💃",
      "name": "woman dancing"
    }, {
      "codes": ["1F483", "1F3FB"],
      "status": "fully-qualified",
      "emoji": "💃🏻",
      "name": "woman dancing: light skin tone"
    }, {
      "codes": ["1F483", "1F3FC"],
      "status": "fully-qualified",
      "emoji": "💃🏼",
      "name": "woman dancing: medium-light skin tone"
    }, {
      "codes": ["1F483", "1F3FD"],
      "status": "fully-qualified",
      "emoji": "💃🏽",
      "name": "woman dancing: medium skin tone"
    }, {
      "codes": ["1F483", "1F3FE"],
      "status": "fully-qualified",
      "emoji": "💃🏾",
      "name": "woman dancing: medium-dark skin tone"
    }, {
      "codes": ["1F483", "1F3FF"],
      "status": "fully-qualified",
      "emoji": "💃🏿",
      "name": "woman dancing: dark skin tone"
    }, {
      "codes": ["1F57A"],
      "status": "fully-qualified",
      "emoji": "🕺",
      "name": "man dancing"
    }, {
      "codes": ["1F57A", "1F3FB"],
      "status": "fully-qualified",
      "emoji": "🕺🏻",
      "name": "man dancing: light skin tone"
    }, {
      "codes": ["1F57A", "1F3FC"],
      "status": "fully-qualified",
      "emoji": "🕺🏼",
      "name": "man dancing: medium-light skin tone"
    }, {
      "codes": ["1F57A", "1F3FD"],
      "status": "fully-qualified",
      "emoji": "🕺🏽",
      "name": "man dancing: medium skin tone"
    }, {
      "codes": ["1F57A", "1F3FE"],
      "status": "fully-qualified",
      "emoji": "🕺🏾",
      "name": "man dancing: medium-dark skin tone"
    }, {
      "codes": ["1F57A", "1F3FF"],
      "status": "fully-qualified",
      "emoji": "🕺🏿",
      "name": "man dancing: dark skin tone"
    }, {
      "codes": ["1F46F"],
      "status": "fully-qualified",
      "emoji": "👯",
      "name": "people with bunny ears"
    }, {
      "codes": ["1F9D6"],
      "status": "fully-qualified",
      "emoji": "🧖",
      "name": "person in steamy room"
    }, {
      "codes": ["1F9D6", "1F3FB"],
      "status": "fully-qualified",
      "emoji": "🧖🏻",
      "name": "person in steamy room: light skin tone"
    }, {
      "codes": ["1F9D6", "1F3FC"],
      "status": "fully-qualified",
      "emoji": "🧖🏼",
      "name": "person in steamy room: medium-light skin tone"
    }, {
      "codes": ["1F9D6", "1F3FD"],
      "status": "fully-qualified",
      "emoji": "🧖🏽",
      "name": "person in steamy room: medium skin tone"
    }, {
      "codes": ["1F9D6", "1F3FE"],
      "status": "fully-qualified",
      "emoji": "🧖🏾",
      "name": "person in steamy room: medium-dark skin tone"
    }, {
      "codes": ["1F9D6", "1F3FF"],
      "status": "fully-qualified",
      "emoji": "🧖🏿",
      "name": "person in steamy room: dark skin tone"
    }, {
      "codes": ["1F9D7"],
      "status": "fully-qualified",
      "emoji": "🧗",
      "name": "person climbing"
    }, {
      "codes": ["1F9D7", "1F3FB"],
      "status": "fully-qualified",
      "emoji": "🧗🏻",
      "name": "person climbing: light skin tone"
    }, {
      "codes": ["1F9D7", "1F3FC"],
      "status": "fully-qualified",
      "emoji": "🧗🏼",
      "name": "person climbing: medium-light skin tone"
    }, {
      "codes": ["1F9D7", "1F3FD"],
      "status": "fully-qualified",
      "emoji": "🧗🏽",
      "name": "person climbing: medium skin tone"
    }, {
      "codes": ["1F9D7", "1F3FE"],
      "status": "fully-qualified",
      "emoji": "🧗🏾",
      "name": "person climbing: medium-dark skin tone"
    }, {
      "codes": ["1F9D7", "1F3FF"],
      "status": "fully-qualified",
      "emoji": "🧗🏿",
      "name": "person climbing: dark skin tone"
    }, {
      "codes": ["1F9D8"],
      "status": "fully-qualified",
      "emoji": "🧘",
      "name": "person in lotus position"
    }, {
      "codes": ["1F9D8", "1F3FB"],
      "status": "fully-qualified",
      "emoji": "🧘🏻",
      "name": "person in lotus position: light skin tone"
    }, {
      "codes": ["1F9D8", "1F3FC"],
      "status": "fully-qualified",
      "emoji": "🧘🏼",
      "name": "person in lotus position: medium-light skin tone"
    }, {
      "codes": ["1F9D8", "1F3FD"],
      "status": "fully-qualified",
      "emoji": "🧘🏽",
      "name": "person in lotus position: medium skin tone"
    }, {
      "codes": ["1F9D8", "1F3FE"],
      "status": "fully-qualified",
      "emoji": "🧘🏾",
      "name": "person in lotus position: medium-dark skin tone"
    }, {
      "codes": ["1F9D8", "1F3FF"],
      "status": "fully-qualified",
      "emoji": "🧘🏿",
      "name": "person in lotus position: dark skin tone"
    }, {
      "codes": ["1F6C0"],
      "status": "fully-qualified",
      "emoji": "🛀",
      "name": "person taking bath"
    }, {
      "codes": ["1F6C0", "1F3FB"],
      "status": "fully-qualified",
      "emoji": "🛀🏻",
      "name": "person taking bath: light skin tone"
    }, {
      "codes": ["1F6C0", "1F3FC"],
      "status": "fully-qualified",
      "emoji": "🛀🏼",
      "name": "person taking bath: medium-light skin tone"
    }, {
      "codes": ["1F6C0", "1F3FD"],
      "status": "fully-qualified",
      "emoji": "🛀🏽",
      "name": "person taking bath: medium skin tone"
    }, {
      "codes": ["1F6C0", "1F3FE"],
      "status": "fully-qualified",
      "emoji": "🛀🏾",
      "name": "person taking bath: medium-dark skin tone"
    }, {
      "codes": ["1F6C0", "1F3FF"],
      "status": "fully-qualified",
      "emoji": "🛀🏿",
      "name": "person taking bath: dark skin tone"
    }, {
      "codes": ["1F6CC"],
      "status": "fully-qualified",
      "emoji": "🛌",
      "name": "person in bed"
    }, {
      "codes": ["1F6CC", "1F3FB"],
      "status": "fully-qualified",
      "emoji": "🛌🏻",
      "name": "person in bed: light skin tone"
    }, {
      "codes": ["1F6CC", "1F3FC"],
      "status": "fully-qualified",
      "emoji": "🛌🏼",
      "name": "person in bed: medium-light skin tone"
    }, {
      "codes": ["1F6CC", "1F3FD"],
      "status": "fully-qualified",
      "emoji": "🛌🏽",
      "name": "person in bed: medium skin tone"
    }, {
      "codes": ["1F6CC", "1F3FE"],
      "status": "fully-qualified",
      "emoji": "🛌🏾",
      "name": "person in bed: medium-dark skin tone"
    }, {
      "codes": ["1F6CC", "1F3FF"],
      "status": "fully-qualified",
      "emoji": "🛌🏿",
      "name": "person in bed: dark skin tone"
    }, {
      "codes": ["1F574", "FE0F"],
      "status": "fully-qualified",
      "emoji": "🕴️",
      "name": "man in suit levitating"
    }, {
      "codes": ["1F574"],
      "status": "non-fully-qualified",
      "emoji": "🕴",
      "name": "man in suit levitating"
    }, {
      "codes": ["1F574", "1F3FB"],
      "status": "fully-qualified",
      "emoji": "🕴🏻",
      "name": "man in suit levitating: light skin tone"
    }, {
      "codes": ["1F574", "1F3FC"],
      "status": "fully-qualified",
      "emoji": "🕴🏼",
      "name": "man in suit levitating: medium-light skin tone"
    }, {
      "codes": ["1F574", "1F3FD"],
      "status": "fully-qualified",
      "emoji": "🕴🏽",
      "name": "man in suit levitating: medium skin tone"
    }, {
      "codes": ["1F574", "1F3FE"],
      "status": "fully-qualified",
      "emoji": "🕴🏾",
      "name": "man in suit levitating: medium-dark skin tone"
    }, {
      "codes": ["1F574", "1F3FF"],
      "status": "fully-qualified",
      "emoji": "🕴🏿",
      "name": "man in suit levitating: dark skin tone"
    }, {
      "codes": ["1F5E3", "FE0F"],
      "status": "fully-qualified",
      "emoji": "🗣️",
      "name": "speaking head"
    }, {
      "codes": ["1F5E3"],
      "status": "non-fully-qualified",
      "emoji": "🗣",
      "name": "speaking head"
    }, {
      "codes": ["1F464"],
      "status": "fully-qualified",
      "emoji": "👤",
      "name": "bust in silhouette"
    }, {
      "codes": ["1F465"],
      "status": "fully-qualified",
      "emoji": "👥",
      "name": "busts in silhouette"
    }]
  }, {
    "name": "person-sport",
    "emojis": [{
      "codes": ["1F93A"],
      "status": "fully-qualified",
      "emoji": "🤺",
      "name": "person fencing"
    }, {
      "codes": ["1F3C7"],
      "status": "fully-qualified",
      "emoji": "🏇",
      "name": "horse racing"
    }, {
      "codes": ["1F3C7", "1F3FB"],
      "status": "fully-qualified",
      "emoji": "🏇🏻",
      "name": "horse racing: light skin tone"
    }, {
      "codes": ["1F3C7", "1F3FC"],
      "status": "fully-qualified",
      "emoji": "🏇🏼",
      "name": "horse racing: medium-light skin tone"
    }, {
      "codes": ["1F3C7", "1F3FD"],
      "status": "fully-qualified",
      "emoji": "🏇🏽",
      "name": "horse racing: medium skin tone"
    }, {
      "codes": ["1F3C7", "1F3FE"],
      "status": "fully-qualified",
      "emoji": "🏇🏾",
      "name": "horse racing: medium-dark skin tone"
    }, {
      "codes": ["1F3C7", "1F3FF"],
      "status": "fully-qualified",
      "emoji": "🏇🏿",
      "name": "horse racing: dark skin tone"
    }, {
      "codes": ["26F7", "FE0F"],
      "status": "fully-qualified",
      "emoji": "⛷️",
      "name": "skier"
    }, {
      "codes": ["26F7"],
      "status": "non-fully-qualified",
      "emoji": "⛷",
      "name": "skier"
    }, {
      "codes": ["1F3C2"],
      "status": "fully-qualified",
      "emoji": "🏂",
      "name": "snowboarder"
    }, {
      "codes": ["1F3C2", "1F3FB"],
      "status": "fully-qualified",
      "emoji": "🏂🏻",
      "name": "snowboarder: light skin tone"
    }, {
      "codes": ["1F3C2", "1F3FC"],
      "status": "fully-qualified",
      "emoji": "🏂🏼",
      "name": "snowboarder: medium-light skin tone"
    }, {
      "codes": ["1F3C2", "1F3FD"],
      "status": "fully-qualified",
      "emoji": "🏂🏽",
      "name": "snowboarder: medium skin tone"
    }, {
      "codes": ["1F3C2", "1F3FE"],
      "status": "fully-qualified",
      "emoji": "🏂🏾",
      "name": "snowboarder: medium-dark skin tone"
    }, {
      "codes": ["1F3C2", "1F3FF"],
      "status": "fully-qualified",
      "emoji": "🏂🏿",
      "name": "snowboarder: dark skin tone"
    }, {
      "codes": ["1F3CC", "FE0F"],
      "status": "fully-qualified",
      "emoji": "🏌️",
      "name": "person golfing"
    }, {
      "codes": ["1F3CC"],
      "status": "non-fully-qualified",
      "emoji": "🏌",
      "name": "person golfing"
    }, {
      "codes": ["1F3CC", "1F3FB"],
      "status": "fully-qualified",
      "emoji": "🏌🏻",
      "name": "person golfing: light skin tone"
    }, {
      "codes": ["1F3CC", "1F3FC"],
      "status": "fully-qualified",
      "emoji": "🏌🏼",
      "name": "person golfing: medium-light skin tone"
    }, {
      "codes": ["1F3CC", "1F3FD"],
      "status": "fully-qualified",
      "emoji": "🏌🏽",
      "name": "person golfing: medium skin tone"
    }, {
      "codes": ["1F3CC", "1F3FE"],
      "status": "fully-qualified",
      "emoji": "🏌🏾",
      "name": "person golfing: medium-dark skin tone"
    }, {
      "codes": ["1F3CC", "1F3FF"],
      "status": "fully-qualified",
      "emoji": "🏌🏿",
      "name": "person golfing: dark skin tone"
    }, {
      "codes": ["1F3C4"],
      "status": "fully-qualified",
      "emoji": "🏄",
      "name": "person surfing"
    }, {
      "codes": ["1F3C4", "1F3FB"],
      "status": "fully-qualified",
      "emoji": "🏄🏻",
      "name": "person surfing: light skin tone"
    }, {
      "codes": ["1F3C4", "1F3FC"],
      "status": "fully-qualified",
      "emoji": "🏄🏼",
      "name": "person surfing: medium-light skin tone"
    }, {
      "codes": ["1F3C4", "1F3FD"],
      "status": "fully-qualified",
      "emoji": "🏄🏽",
      "name": "person surfing: medium skin tone"
    }, {
      "codes": ["1F3C4", "1F3FE"],
      "status": "fully-qualified",
      "emoji": "🏄🏾",
      "name": "person surfing: medium-dark skin tone"
    }, {
      "codes": ["1F3C4", "1F3FF"],
      "status": "fully-qualified",
      "emoji": "🏄🏿",
      "name": "person surfing: dark skin tone"
    }, {
      "codes": ["1F6A3"],
      "status": "fully-qualified",
      "emoji": "🚣",
      "name": "person rowing boat"
    }, {
      "codes": ["1F6A3", "1F3FB"],
      "status": "fully-qualified",
      "emoji": "🚣🏻",
      "name": "person rowing boat: light skin tone"
    }, {
      "codes": ["1F6A3", "1F3FC"],
      "status": "fully-qualified",
      "emoji": "🚣🏼",
      "name": "person rowing boat: medium-light skin tone"
    }, {
      "codes": ["1F6A3", "1F3FD"],
      "status": "fully-qualified",
      "emoji": "🚣🏽",
      "name": "person rowing boat: medium skin tone"
    }, {
      "codes": ["1F6A3", "1F3FE"],
      "status": "fully-qualified",
      "emoji": "🚣🏾",
      "name": "person rowing boat: medium-dark skin tone"
    }, {
      "codes": ["1F6A3", "1F3FF"],
      "status": "fully-qualified",
      "emoji": "🚣🏿",
      "name": "person rowing boat: dark skin tone"
    }, {
      "codes": ["1F3CA"],
      "status": "fully-qualified",
      "emoji": "🏊",
      "name": "person swimming"
    }, {
      "codes": ["1F3CA", "1F3FB"],
      "status": "fully-qualified",
      "emoji": "🏊🏻",
      "name": "person swimming: light skin tone"
    }, {
      "codes": ["1F3CA", "1F3FC"],
      "status": "fully-qualified",
      "emoji": "🏊🏼",
      "name": "person swimming: medium-light skin tone"
    }, {
      "codes": ["1F3CA", "1F3FD"],
      "status": "fully-qualified",
      "emoji": "🏊🏽",
      "name": "person swimming: medium skin tone"
    }, {
      "codes": ["1F3CA", "1F3FE"],
      "status": "fully-qualified",
      "emoji": "🏊🏾",
      "name": "person swimming: medium-dark skin tone"
    }, {
      "codes": ["1F3CA", "1F3FF"],
      "status": "fully-qualified",
      "emoji": "🏊🏿",
      "name": "person swimming: dark skin tone"
    }, {
      "codes": ["26F9", "FE0F"],
      "status": "fully-qualified",
      "emoji": "⛹️",
      "name": "person bouncing ball"
    }, {
      "codes": ["26F9"],
      "status": "non-fully-qualified",
      "emoji": "⛹",
      "name": "person bouncing ball"
    }, {
      "codes": ["26F9", "1F3FB"],
      "status": "fully-qualified",
      "emoji": "⛹🏻",
      "name": "person bouncing ball: light skin tone"
    }, {
      "codes": ["26F9", "1F3FC"],
      "status": "fully-qualified",
      "emoji": "⛹🏼",
      "name": "person bouncing ball: medium-light skin tone"
    }, {
      "codes": ["26F9", "1F3FD"],
      "status": "fully-qualified",
      "emoji": "⛹🏽",
      "name": "person bouncing ball: medium skin tone"
    }, {
      "codes": ["26F9", "1F3FE"],
      "status": "fully-qualified",
      "emoji": "⛹🏾",
      "name": "person bouncing ball: medium-dark skin tone"
    }, {
      "codes": ["26F9", "1F3FF"],
      "status": "fully-qualified",
      "emoji": "⛹🏿",
      "name": "person bouncing ball: dark skin tone"
    }, {
      "codes": ["1F3CB", "FE0F"],
      "status": "fully-qualified",
      "emoji": "🏋️",
      "name": "person lifting weights"
    }, {
      "codes": ["1F3CB"],
      "status": "non-fully-qualified",
      "emoji": "🏋",
      "name": "person lifting weights"
    }, {
      "codes": ["1F3CB", "1F3FB"],
      "status": "fully-qualified",
      "emoji": "🏋🏻",
      "name": "person lifting weights: light skin tone"
    }, {
      "codes": ["1F3CB", "1F3FC"],
      "status": "fully-qualified",
      "emoji": "🏋🏼",
      "name": "person lifting weights: medium-light skin tone"
    }, {
      "codes": ["1F3CB", "1F3FD"],
      "status": "fully-qualified",
      "emoji": "🏋🏽",
      "name": "person lifting weights: medium skin tone"
    }, {
      "codes": ["1F3CB", "1F3FE"],
      "status": "fully-qualified",
      "emoji": "🏋🏾",
      "name": "person lifting weights: medium-dark skin tone"
    }, {
      "codes": ["1F3CB", "1F3FF"],
      "status": "fully-qualified",
      "emoji": "🏋🏿",
      "name": "person lifting weights: dark skin tone"
    }, {
      "codes": ["1F6B4"],
      "status": "fully-qualified",
      "emoji": "🚴",
      "name": "person biking"
    }, {
      "codes": ["1F6B4", "1F3FB"],
      "status": "fully-qualified",
      "emoji": "🚴🏻",
      "name": "person biking: light skin tone"
    }, {
      "codes": ["1F6B4", "1F3FC"],
      "status": "fully-qualified",
      "emoji": "🚴🏼",
      "name": "person biking: medium-light skin tone"
    }, {
      "codes": ["1F6B4", "1F3FD"],
      "status": "fully-qualified",
      "emoji": "🚴🏽",
      "name": "person biking: medium skin tone"
    }, {
      "codes": ["1F6B4", "1F3FE"],
      "status": "fully-qualified",
      "emoji": "🚴🏾",
      "name": "person biking: medium-dark skin tone"
    }, {
      "codes": ["1F6B4", "1F3FF"],
      "status": "fully-qualified",
      "emoji": "🚴🏿",
      "name": "person biking: dark skin tone"
    }, {
      "codes": ["1F6B5"],
      "status": "fully-qualified",
      "emoji": "🚵",
      "name": "person mountain biking"
    }, {
      "codes": ["1F6B5", "1F3FB"],
      "status": "fully-qualified",
      "emoji": "🚵🏻",
      "name": "person mountain biking: light skin tone"
    }, {
      "codes": ["1F6B5", "1F3FC"],
      "status": "fully-qualified",
      "emoji": "🚵🏼",
      "name": "person mountain biking: medium-light skin tone"
    }, {
      "codes": ["1F6B5", "1F3FD"],
      "status": "fully-qualified",
      "emoji": "🚵🏽",
      "name": "person mountain biking: medium skin tone"
    }, {
      "codes": ["1F6B5", "1F3FE"],
      "status": "fully-qualified",
      "emoji": "🚵🏾",
      "name": "person mountain biking: medium-dark skin tone"
    }, {
      "codes": ["1F6B5", "1F3FF"],
      "status": "fully-qualified",
      "emoji": "🚵🏿",
      "name": "person mountain biking: dark skin tone"
    }, {
      "codes": ["1F3CE", "FE0F"],
      "status": "fully-qualified",
      "emoji": "🏎️",
      "name": "racing car"
    }, {
      "codes": ["1F3CE"],
      "status": "non-fully-qualified",
      "emoji": "🏎",
      "name": "racing car"
    }, {
      "codes": ["1F3CD", "FE0F"],
      "status": "fully-qualified",
      "emoji": "🏍️",
      "name": "motorcycle"
    }, {
      "codes": ["1F3CD"],
      "status": "non-fully-qualified",
      "emoji": "🏍",
      "name": "motorcycle"
    }, {
      "codes": ["1F938"],
      "status": "fully-qualified",
      "emoji": "🤸",
      "name": "person cartwheeling"
    }, {
      "codes": ["1F938", "1F3FB"],
      "status": "fully-qualified",
      "emoji": "🤸🏻",
      "name": "person cartwheeling: light skin tone"
    }, {
      "codes": ["1F938", "1F3FC"],
      "status": "fully-qualified",
      "emoji": "🤸🏼",
      "name": "person cartwheeling: medium-light skin tone"
    }, {
      "codes": ["1F938", "1F3FD"],
      "status": "fully-qualified",
      "emoji": "🤸🏽",
      "name": "person cartwheeling: medium skin tone"
    }, {
      "codes": ["1F938", "1F3FE"],
      "status": "fully-qualified",
      "emoji": "🤸🏾",
      "name": "person cartwheeling: medium-dark skin tone"
    }, {
      "codes": ["1F938", "1F3FF"],
      "status": "fully-qualified",
      "emoji": "🤸🏿",
      "name": "person cartwheeling: dark skin tone"
    }, {
      "codes": ["1F93C"],
      "status": "fully-qualified",
      "emoji": "🤼",
      "name": "people wrestling"
    }, {
      "codes": ["1F93D"],
      "status": "fully-qualified",
      "emoji": "🤽",
      "name": "person playing water polo"
    }, {
      "codes": ["1F93D", "1F3FB"],
      "status": "fully-qualified",
      "emoji": "🤽🏻",
      "name": "person playing water polo: light skin tone"
    }, {
      "codes": ["1F93D", "1F3FC"],
      "status": "fully-qualified",
      "emoji": "🤽🏼",
      "name": "person playing water polo: medium-light skin tone"
    }, {
      "codes": ["1F93D", "1F3FD"],
      "status": "fully-qualified",
      "emoji": "🤽🏽",
      "name": "person playing water polo: medium skin tone"
    }, {
      "codes": ["1F93D", "1F3FE"],
      "status": "fully-qualified",
      "emoji": "🤽🏾",
      "name": "person playing water polo: medium-dark skin tone"
    }, {
      "codes": ["1F93D", "1F3FF"],
      "status": "fully-qualified",
      "emoji": "🤽🏿",
      "name": "person playing water polo: dark skin tone"
    }, {
      "codes": ["1F93E"],
      "status": "fully-qualified",
      "emoji": "🤾",
      "name": "person playing handball"
    }, {
      "codes": ["1F93E", "1F3FB"],
      "status": "fully-qualified",
      "emoji": "🤾🏻",
      "name": "person playing handball: light skin tone"
    }, {
      "codes": ["1F93E", "1F3FC"],
      "status": "fully-qualified",
      "emoji": "🤾🏼",
      "name": "person playing handball: medium-light skin tone"
    }, {
      "codes": ["1F93E", "1F3FD"],
      "status": "fully-qualified",
      "emoji": "🤾🏽",
      "name": "person playing handball: medium skin tone"
    }, {
      "codes": ["1F93E", "1F3FE"],
      "status": "fully-qualified",
      "emoji": "🤾🏾",
      "name": "person playing handball: medium-dark skin tone"
    }, {
      "codes": ["1F93E", "1F3FF"],
      "status": "fully-qualified",
      "emoji": "🤾🏿",
      "name": "person playing handball: dark skin tone"
    }, {
      "codes": ["1F939"],
      "status": "fully-qualified",
      "emoji": "🤹",
      "name": "person juggling"
    }, {
      "codes": ["1F939", "1F3FB"],
      "status": "fully-qualified",
      "emoji": "🤹🏻",
      "name": "person juggling: light skin tone"
    }, {
      "codes": ["1F939", "1F3FC"],
      "status": "fully-qualified",
      "emoji": "🤹🏼",
      "name": "person juggling: medium-light skin tone"
    }, {
      "codes": ["1F939", "1F3FD"],
      "status": "fully-qualified",
      "emoji": "🤹🏽",
      "name": "person juggling: medium skin tone"
    }, {
      "codes": ["1F939", "1F3FE"],
      "status": "fully-qualified",
      "emoji": "🤹🏾",
      "name": "person juggling: medium-dark skin tone"
    }, {
      "codes": ["1F939", "1F3FF"],
      "status": "fully-qualified",
      "emoji": "🤹🏿",
      "name": "person juggling: dark skin tone"
    }]
  }, {
    "name": "family",
    "emojis": [{
      "codes": ["1F46B"],
      "status": "fully-qualified",
      "emoji": "👫",
      "name": "man and woman holding hands"
    }, {
      "codes": ["1F46C"],
      "status": "fully-qualified",
      "emoji": "👬",
      "name": "two men holding hands"
    }, {
      "codes": ["1F46D"],
      "status": "fully-qualified",
      "emoji": "👭",
      "name": "two women holding hands"
    }, {
      "codes": ["1F48F"],
      "status": "fully-qualified",
      "emoji": "💏",
      "name": "kiss"
    }, {
      "codes": ["1F491"],
      "status": "fully-qualified",
      "emoji": "💑",
      "name": "couple with heart"
    }, {
      "codes": ["1F46A"],
      "status": "fully-qualified",
      "emoji": "👪",
      "name": "family"
    }]
  }, {
    "name": "body",
    "emojis": [{
      "codes": ["1F933"],
      "status": "fully-qualified",
      "emoji": "🤳",
      "name": "selfie"
    }, {
      "codes": ["1F933", "1F3FB"],
      "status": "fully-qualified",
      "emoji": "🤳🏻",
      "name": "selfie: light skin tone"
    }, {
      "codes": ["1F933", "1F3FC"],
      "status": "fully-qualified",
      "emoji": "🤳🏼",
      "name": "selfie: medium-light skin tone"
    }, {
      "codes": ["1F933", "1F3FD"],
      "status": "fully-qualified",
      "emoji": "🤳🏽",
      "name": "selfie: medium skin tone"
    }, {
      "codes": ["1F933", "1F3FE"],
      "status": "fully-qualified",
      "emoji": "🤳🏾",
      "name": "selfie: medium-dark skin tone"
    }, {
      "codes": ["1F933", "1F3FF"],
      "status": "fully-qualified",
      "emoji": "🤳🏿",
      "name": "selfie: dark skin tone"
    }, {
      "codes": ["1F4AA"],
      "status": "fully-qualified",
      "emoji": "💪",
      "name": "flexed biceps"
    }, {
      "codes": ["1F4AA", "1F3FB"],
      "status": "fully-qualified",
      "emoji": "💪🏻",
      "name": "flexed biceps: light skin tone"
    }, {
      "codes": ["1F4AA", "1F3FC"],
      "status": "fully-qualified",
      "emoji": "💪🏼",
      "name": "flexed biceps: medium-light skin tone"
    }, {
      "codes": ["1F4AA", "1F3FD"],
      "status": "fully-qualified",
      "emoji": "💪🏽",
      "name": "flexed biceps: medium skin tone"
    }, {
      "codes": ["1F4AA", "1F3FE"],
      "status": "fully-qualified",
      "emoji": "💪🏾",
      "name": "flexed biceps: medium-dark skin tone"
    }, {
      "codes": ["1F4AA", "1F3FF"],
      "status": "fully-qualified",
      "emoji": "💪🏿",
      "name": "flexed biceps: dark skin tone"
    }, {
      "codes": ["1F448"],
      "status": "fully-qualified",
      "emoji": "👈",
      "name": "backhand index pointing left"
    }, {
      "codes": ["1F448", "1F3FB"],
      "status": "fully-qualified",
      "emoji": "👈🏻",
      "name": "backhand index pointing left: light skin tone"
    }, {
      "codes": ["1F448", "1F3FC"],
      "status": "fully-qualified",
      "emoji": "👈🏼",
      "name": "backhand index pointing left: medium-light skin tone"
    }, {
      "codes": ["1F448", "1F3FD"],
      "status": "fully-qualified",
      "emoji": "👈🏽",
      "name": "backhand index pointing left: medium skin tone"
    }, {
      "codes": ["1F448", "1F3FE"],
      "status": "fully-qualified",
      "emoji": "👈🏾",
      "name": "backhand index pointing left: medium-dark skin tone"
    }, {
      "codes": ["1F448", "1F3FF"],
      "status": "fully-qualified",
      "emoji": "👈🏿",
      "name": "backhand index pointing left: dark skin tone"
    }, {
      "codes": ["1F449"],
      "status": "fully-qualified",
      "emoji": "👉",
      "name": "backhand index pointing right"
    }, {
      "codes": ["1F449", "1F3FB"],
      "status": "fully-qualified",
      "emoji": "👉🏻",
      "name": "backhand index pointing right: light skin tone"
    }, {
      "codes": ["1F449", "1F3FC"],
      "status": "fully-qualified",
      "emoji": "👉🏼",
      "name": "backhand index pointing right: medium-light skin tone"
    }, {
      "codes": ["1F449", "1F3FD"],
      "status": "fully-qualified",
      "emoji": "👉🏽",
      "name": "backhand index pointing right: medium skin tone"
    }, {
      "codes": ["1F449", "1F3FE"],
      "status": "fully-qualified",
      "emoji": "👉🏾",
      "name": "backhand index pointing right: medium-dark skin tone"
    }, {
      "codes": ["1F449", "1F3FF"],
      "status": "fully-qualified",
      "emoji": "👉🏿",
      "name": "backhand index pointing right: dark skin tone"
    }, {
      "codes": ["261D", "FE0F"],
      "status": "fully-qualified",
      "emoji": "☝️",
      "name": "index pointing up"
    }, {
      "codes": ["261D"],
      "status": "non-fully-qualified",
      "emoji": "☝",
      "name": "index pointing up"
    }, {
      "codes": ["261D", "1F3FB"],
      "status": "fully-qualified",
      "emoji": "☝🏻",
      "name": "index pointing up: light skin tone"
    }, {
      "codes": ["261D", "1F3FC"],
      "status": "fully-qualified",
      "emoji": "☝🏼",
      "name": "index pointing up: medium-light skin tone"
    }, {
      "codes": ["261D", "1F3FD"],
      "status": "fully-qualified",
      "emoji": "☝🏽",
      "name": "index pointing up: medium skin tone"
    }, {
      "codes": ["261D", "1F3FE"],
      "status": "fully-qualified",
      "emoji": "☝🏾",
      "name": "index pointing up: medium-dark skin tone"
    }, {
      "codes": ["261D", "1F3FF"],
      "status": "fully-qualified",
      "emoji": "☝🏿",
      "name": "index pointing up: dark skin tone"
    }, {
      "codes": ["1F446"],
      "status": "fully-qualified",
      "emoji": "👆",
      "name": "backhand index pointing up"
    }, {
      "codes": ["1F446", "1F3FB"],
      "status": "fully-qualified",
      "emoji": "👆🏻",
      "name": "backhand index pointing up: light skin tone"
    }, {
      "codes": ["1F446", "1F3FC"],
      "status": "fully-qualified",
      "emoji": "👆🏼",
      "name": "backhand index pointing up: medium-light skin tone"
    }, {
      "codes": ["1F446", "1F3FD"],
      "status": "fully-qualified",
      "emoji": "👆🏽",
      "name": "backhand index pointing up: medium skin tone"
    }, {
      "codes": ["1F446", "1F3FE"],
      "status": "fully-qualified",
      "emoji": "👆🏾",
      "name": "backhand index pointing up: medium-dark skin tone"
    }, {
      "codes": ["1F446", "1F3FF"],
      "status": "fully-qualified",
      "emoji": "👆🏿",
      "name": "backhand index pointing up: dark skin tone"
    }, {
      "codes": ["1F595"],
      "status": "fully-qualified",
      "emoji": "🖕",
      "name": "middle finger"
    }, {
      "codes": ["1F595", "1F3FB"],
      "status": "fully-qualified",
      "emoji": "🖕🏻",
      "name": "middle finger: light skin tone"
    }, {
      "codes": ["1F595", "1F3FC"],
      "status": "fully-qualified",
      "emoji": "🖕🏼",
      "name": "middle finger: medium-light skin tone"
    }, {
      "codes": ["1F595", "1F3FD"],
      "status": "fully-qualified",
      "emoji": "🖕🏽",
      "name": "middle finger: medium skin tone"
    }, {
      "codes": ["1F595", "1F3FE"],
      "status": "fully-qualified",
      "emoji": "🖕🏾",
      "name": "middle finger: medium-dark skin tone"
    }, {
      "codes": ["1F595", "1F3FF"],
      "status": "fully-qualified",
      "emoji": "🖕🏿",
      "name": "middle finger: dark skin tone"
    }, {
      "codes": ["1F447"],
      "status": "fully-qualified",
      "emoji": "👇",
      "name": "backhand index pointing down"
    }, {
      "codes": ["1F447", "1F3FB"],
      "status": "fully-qualified",
      "emoji": "👇🏻",
      "name": "backhand index pointing down: light skin tone"
    }, {
      "codes": ["1F447", "1F3FC"],
      "status": "fully-qualified",
      "emoji": "👇🏼",
      "name": "backhand index pointing down: medium-light skin tone"
    }, {
      "codes": ["1F447", "1F3FD"],
      "status": "fully-qualified",
      "emoji": "👇🏽",
      "name": "backhand index pointing down: medium skin tone"
    }, {
      "codes": ["1F447", "1F3FE"],
      "status": "fully-qualified",
      "emoji": "👇🏾",
      "name": "backhand index pointing down: medium-dark skin tone"
    }, {
      "codes": ["1F447", "1F3FF"],
      "status": "fully-qualified",
      "emoji": "👇🏿",
      "name": "backhand index pointing down: dark skin tone"
    }, {
      "codes": ["270C", "FE0F"],
      "status": "fully-qualified",
      "emoji": "✌️",
      "name": "victory hand"
    }, {
      "codes": ["270C"],
      "status": "non-fully-qualified",
      "emoji": "✌",
      "name": "victory hand"
    }, {
      "codes": ["270C", "1F3FB"],
      "status": "fully-qualified",
      "emoji": "✌🏻",
      "name": "victory hand: light skin tone"
    }, {
      "codes": ["270C", "1F3FC"],
      "status": "fully-qualified",
      "emoji": "✌🏼",
      "name": "victory hand: medium-light skin tone"
    }, {
      "codes": ["270C", "1F3FD"],
      "status": "fully-qualified",
      "emoji": "✌🏽",
      "name": "victory hand: medium skin tone"
    }, {
      "codes": ["270C", "1F3FE"],
      "status": "fully-qualified",
      "emoji": "✌🏾",
      "name": "victory hand: medium-dark skin tone"
    }, {
      "codes": ["270C", "1F3FF"],
      "status": "fully-qualified",
      "emoji": "✌🏿",
      "name": "victory hand: dark skin tone"
    }, {
      "codes": ["1F91E"],
      "status": "fully-qualified",
      "emoji": "🤞",
      "name": "crossed fingers"
    }, {
      "codes": ["1F91E", "1F3FB"],
      "status": "fully-qualified",
      "emoji": "🤞🏻",
      "name": "crossed fingers: light skin tone"
    }, {
      "codes": ["1F91E", "1F3FC"],
      "status": "fully-qualified",
      "emoji": "🤞🏼",
      "name": "crossed fingers: medium-light skin tone"
    }, {
      "codes": ["1F91E", "1F3FD"],
      "status": "fully-qualified",
      "emoji": "🤞🏽",
      "name": "crossed fingers: medium skin tone"
    }, {
      "codes": ["1F91E", "1F3FE"],
      "status": "fully-qualified",
      "emoji": "🤞🏾",
      "name": "crossed fingers: medium-dark skin tone"
    }, {
      "codes": ["1F91E", "1F3FF"],
      "status": "fully-qualified",
      "emoji": "🤞🏿",
      "name": "crossed fingers: dark skin tone"
    }, {
      "codes": ["1F596"],
      "status": "fully-qualified",
      "emoji": "🖖",
      "name": "vulcan salute"
    }, {
      "codes": ["1F596", "1F3FB"],
      "status": "fully-qualified",
      "emoji": "🖖🏻",
      "name": "vulcan salute: light skin tone"
    }, {
      "codes": ["1F596", "1F3FC"],
      "status": "fully-qualified",
      "emoji": "🖖🏼",
      "name": "vulcan salute: medium-light skin tone"
    }, {
      "codes": ["1F596", "1F3FD"],
      "status": "fully-qualified",
      "emoji": "🖖🏽",
      "name": "vulcan salute: medium skin tone"
    }, {
      "codes": ["1F596", "1F3FE"],
      "status": "fully-qualified",
      "emoji": "🖖🏾",
      "name": "vulcan salute: medium-dark skin tone"
    }, {
      "codes": ["1F596", "1F3FF"],
      "status": "fully-qualified",
      "emoji": "🖖🏿",
      "name": "vulcan salute: dark skin tone"
    }, {
      "codes": ["1F918"],
      "status": "fully-qualified",
      "emoji": "🤘",
      "name": "sign of the horns"
    }, {
      "codes": ["1F918", "1F3FB"],
      "status": "fully-qualified",
      "emoji": "🤘🏻",
      "name": "sign of the horns: light skin tone"
    }, {
      "codes": ["1F918", "1F3FC"],
      "status": "fully-qualified",
      "emoji": "🤘🏼",
      "name": "sign of the horns: medium-light skin tone"
    }, {
      "codes": ["1F918", "1F3FD"],
      "status": "fully-qualified",
      "emoji": "🤘🏽",
      "name": "sign of the horns: medium skin tone"
    }, {
      "codes": ["1F918", "1F3FE"],
      "status": "fully-qualified",
      "emoji": "🤘🏾",
      "name": "sign of the horns: medium-dark skin tone"
    }, {
      "codes": ["1F918", "1F3FF"],
      "status": "fully-qualified",
      "emoji": "🤘🏿",
      "name": "sign of the horns: dark skin tone"
    }, {
      "codes": ["1F919"],
      "status": "fully-qualified",
      "emoji": "🤙",
      "name": "call me hand"
    }, {
      "codes": ["1F919", "1F3FB"],
      "status": "fully-qualified",
      "emoji": "🤙🏻",
      "name": "call me hand: light skin tone"
    }, {
      "codes": ["1F919", "1F3FC"],
      "status": "fully-qualified",
      "emoji": "🤙🏼",
      "name": "call me hand: medium-light skin tone"
    }, {
      "codes": ["1F919", "1F3FD"],
      "status": "fully-qualified",
      "emoji": "🤙🏽",
      "name": "call me hand: medium skin tone"
    }, {
      "codes": ["1F919", "1F3FE"],
      "status": "fully-qualified",
      "emoji": "🤙🏾",
      "name": "call me hand: medium-dark skin tone"
    }, {
      "codes": ["1F919", "1F3FF"],
      "status": "fully-qualified",
      "emoji": "🤙🏿",
      "name": "call me hand: dark skin tone"
    }, {
      "codes": ["1F590", "FE0F"],
      "status": "fully-qualified",
      "emoji": "🖐️",
      "name": "hand with fingers splayed"
    }, {
      "codes": ["1F590"],
      "status": "non-fully-qualified",
      "emoji": "🖐",
      "name": "hand with fingers splayed"
    }, {
      "codes": ["1F590", "1F3FB"],
      "status": "fully-qualified",
      "emoji": "🖐🏻",
      "name": "hand with fingers splayed: light skin tone"
    }, {
      "codes": ["1F590", "1F3FC"],
      "status": "fully-qualified",
      "emoji": "🖐🏼",
      "name": "hand with fingers splayed: medium-light skin tone"
    }, {
      "codes": ["1F590", "1F3FD"],
      "status": "fully-qualified",
      "emoji": "🖐🏽",
      "name": "hand with fingers splayed: medium skin tone"
    }, {
      "codes": ["1F590", "1F3FE"],
      "status": "fully-qualified",
      "emoji": "🖐🏾",
      "name": "hand with fingers splayed: medium-dark skin tone"
    }, {
      "codes": ["1F590", "1F3FF"],
      "status": "fully-qualified",
      "emoji": "🖐🏿",
      "name": "hand with fingers splayed: dark skin tone"
    }, {
      "codes": ["270B"],
      "status": "fully-qualified",
      "emoji": "✋",
      "name": "raised hand"
    }, {
      "codes": ["270B", "1F3FB"],
      "status": "fully-qualified",
      "emoji": "✋🏻",
      "name": "raised hand: light skin tone"
    }, {
      "codes": ["270B", "1F3FC"],
      "status": "fully-qualified",
      "emoji": "✋🏼",
      "name": "raised hand: medium-light skin tone"
    }, {
      "codes": ["270B", "1F3FD"],
      "status": "fully-qualified",
      "emoji": "✋🏽",
      "name": "raised hand: medium skin tone"
    }, {
      "codes": ["270B", "1F3FE"],
      "status": "fully-qualified",
      "emoji": "✋🏾",
      "name": "raised hand: medium-dark skin tone"
    }, {
      "codes": ["270B", "1F3FF"],
      "status": "fully-qualified",
      "emoji": "✋🏿",
      "name": "raised hand: dark skin tone"
    }, {
      "codes": ["1F44C"],
      "status": "fully-qualified",
      "emoji": "👌",
      "name": "OK hand"
    }, {
      "codes": ["1F44C", "1F3FB"],
      "status": "fully-qualified",
      "emoji": "👌🏻",
      "name": "OK hand: light skin tone"
    }, {
      "codes": ["1F44C", "1F3FC"],
      "status": "fully-qualified",
      "emoji": "👌🏼",
      "name": "OK hand: medium-light skin tone"
    }, {
      "codes": ["1F44C", "1F3FD"],
      "status": "fully-qualified",
      "emoji": "👌🏽",
      "name": "OK hand: medium skin tone"
    }, {
      "codes": ["1F44C", "1F3FE"],
      "status": "fully-qualified",
      "emoji": "👌🏾",
      "name": "OK hand: medium-dark skin tone"
    }, {
      "codes": ["1F44C", "1F3FF"],
      "status": "fully-qualified",
      "emoji": "👌🏿",
      "name": "OK hand: dark skin tone"
    }, {
      "codes": ["1F44D"],
      "status": "fully-qualified",
      "emoji": "👍",
      "name": "thumbs up"
    }, {
      "codes": ["1F44D", "1F3FB"],
      "status": "fully-qualified",
      "emoji": "👍🏻",
      "name": "thumbs up: light skin tone"
    }, {
      "codes": ["1F44D", "1F3FC"],
      "status": "fully-qualified",
      "emoji": "👍🏼",
      "name": "thumbs up: medium-light skin tone"
    }, {
      "codes": ["1F44D", "1F3FD"],
      "status": "fully-qualified",
      "emoji": "👍🏽",
      "name": "thumbs up: medium skin tone"
    }, {
      "codes": ["1F44D", "1F3FE"],
      "status": "fully-qualified",
      "emoji": "👍🏾",
      "name": "thumbs up: medium-dark skin tone"
    }, {
      "codes": ["1F44D", "1F3FF"],
      "status": "fully-qualified",
      "emoji": "👍🏿",
      "name": "thumbs up: dark skin tone"
    }, {
      "codes": ["1F44E"],
      "status": "fully-qualified",
      "emoji": "👎",
      "name": "thumbs down"
    }, {
      "codes": ["1F44E", "1F3FB"],
      "status": "fully-qualified",
      "emoji": "👎🏻",
      "name": "thumbs down: light skin tone"
    }, {
      "codes": ["1F44E", "1F3FC"],
      "status": "fully-qualified",
      "emoji": "👎🏼",
      "name": "thumbs down: medium-light skin tone"
    }, {
      "codes": ["1F44E", "1F3FD"],
      "status": "fully-qualified",
      "emoji": "👎🏽",
      "name": "thumbs down: medium skin tone"
    }, {
      "codes": ["1F44E", "1F3FE"],
      "status": "fully-qualified",
      "emoji": "👎🏾",
      "name": "thumbs down: medium-dark skin tone"
    }, {
      "codes": ["1F44E", "1F3FF"],
      "status": "fully-qualified",
      "emoji": "👎🏿",
      "name": "thumbs down: dark skin tone"
    }, {
      "codes": ["270A"],
      "status": "fully-qualified",
      "emoji": "✊",
      "name": "raised fist"
    }, {
      "codes": ["270A", "1F3FB"],
      "status": "fully-qualified",
      "emoji": "✊🏻",
      "name": "raised fist: light skin tone"
    }, {
      "codes": ["270A", "1F3FC"],
      "status": "fully-qualified",
      "emoji": "✊🏼",
      "name": "raised fist: medium-light skin tone"
    }, {
      "codes": ["270A", "1F3FD"],
      "status": "fully-qualified",
      "emoji": "✊🏽",
      "name": "raised fist: medium skin tone"
    }, {
      "codes": ["270A", "1F3FE"],
      "status": "fully-qualified",
      "emoji": "✊🏾",
      "name": "raised fist: medium-dark skin tone"
    }, {
      "codes": ["270A", "1F3FF"],
      "status": "fully-qualified",
      "emoji": "✊🏿",
      "name": "raised fist: dark skin tone"
    }, {
      "codes": ["1F44A"],
      "status": "fully-qualified",
      "emoji": "👊",
      "name": "oncoming fist"
    }, {
      "codes": ["1F44A", "1F3FB"],
      "status": "fully-qualified",
      "emoji": "👊🏻",
      "name": "oncoming fist: light skin tone"
    }, {
      "codes": ["1F44A", "1F3FC"],
      "status": "fully-qualified",
      "emoji": "👊🏼",
      "name": "oncoming fist: medium-light skin tone"
    }, {
      "codes": ["1F44A", "1F3FD"],
      "status": "fully-qualified",
      "emoji": "👊🏽",
      "name": "oncoming fist: medium skin tone"
    }, {
      "codes": ["1F44A", "1F3FE"],
      "status": "fully-qualified",
      "emoji": "👊🏾",
      "name": "oncoming fist: medium-dark skin tone"
    }, {
      "codes": ["1F44A", "1F3FF"],
      "status": "fully-qualified",
      "emoji": "👊🏿",
      "name": "oncoming fist: dark skin tone"
    }, {
      "codes": ["1F91B"],
      "status": "fully-qualified",
      "emoji": "🤛",
      "name": "left-facing fist"
    }, {
      "codes": ["1F91B", "1F3FB"],
      "status": "fully-qualified",
      "emoji": "🤛🏻",
      "name": "left-facing fist: light skin tone"
    }, {
      "codes": ["1F91B", "1F3FC"],
      "status": "fully-qualified",
      "emoji": "🤛🏼",
      "name": "left-facing fist: medium-light skin tone"
    }, {
      "codes": ["1F91B", "1F3FD"],
      "status": "fully-qualified",
      "emoji": "🤛🏽",
      "name": "left-facing fist: medium skin tone"
    }, {
      "codes": ["1F91B", "1F3FE"],
      "status": "fully-qualified",
      "emoji": "🤛🏾",
      "name": "left-facing fist: medium-dark skin tone"
    }, {
      "codes": ["1F91B", "1F3FF"],
      "status": "fully-qualified",
      "emoji": "🤛🏿",
      "name": "left-facing fist: dark skin tone"
    }, {
      "codes": ["1F91C"],
      "status": "fully-qualified",
      "emoji": "🤜",
      "name": "right-facing fist"
    }, {
      "codes": ["1F91C", "1F3FB"],
      "status": "fully-qualified",
      "emoji": "🤜🏻",
      "name": "right-facing fist: light skin tone"
    }, {
      "codes": ["1F91C", "1F3FC"],
      "status": "fully-qualified",
      "emoji": "🤜🏼",
      "name": "right-facing fist: medium-light skin tone"
    }, {
      "codes": ["1F91C", "1F3FD"],
      "status": "fully-qualified",
      "emoji": "🤜🏽",
      "name": "right-facing fist: medium skin tone"
    }, {
      "codes": ["1F91C", "1F3FE"],
      "status": "fully-qualified",
      "emoji": "🤜🏾",
      "name": "right-facing fist: medium-dark skin tone"
    }, {
      "codes": ["1F91C", "1F3FF"],
      "status": "fully-qualified",
      "emoji": "🤜🏿",
      "name": "right-facing fist: dark skin tone"
    }, {
      "codes": ["1F91A"],
      "status": "fully-qualified",
      "emoji": "🤚",
      "name": "raised back of hand"
    }, {
      "codes": ["1F91A", "1F3FB"],
      "status": "fully-qualified",
      "emoji": "🤚🏻",
      "name": "raised back of hand: light skin tone"
    }, {
      "codes": ["1F91A", "1F3FC"],
      "status": "fully-qualified",
      "emoji": "🤚🏼",
      "name": "raised back of hand: medium-light skin tone"
    }, {
      "codes": ["1F91A", "1F3FD"],
      "status": "fully-qualified",
      "emoji": "🤚🏽",
      "name": "raised back of hand: medium skin tone"
    }, {
      "codes": ["1F91A", "1F3FE"],
      "status": "fully-qualified",
      "emoji": "🤚🏾",
      "name": "raised back of hand: medium-dark skin tone"
    }, {
      "codes": ["1F91A", "1F3FF"],
      "status": "fully-qualified",
      "emoji": "🤚🏿",
      "name": "raised back of hand: dark skin tone"
    }, {
      "codes": ["1F44B"],
      "status": "fully-qualified",
      "emoji": "👋",
      "name": "waving hand"
    }, {
      "codes": ["1F44B", "1F3FB"],
      "status": "fully-qualified",
      "emoji": "👋🏻",
      "name": "waving hand: light skin tone"
    }, {
      "codes": ["1F44B", "1F3FC"],
      "status": "fully-qualified",
      "emoji": "👋🏼",
      "name": "waving hand: medium-light skin tone"
    }, {
      "codes": ["1F44B", "1F3FD"],
      "status": "fully-qualified",
      "emoji": "👋🏽",
      "name": "waving hand: medium skin tone"
    }, {
      "codes": ["1F44B", "1F3FE"],
      "status": "fully-qualified",
      "emoji": "👋🏾",
      "name": "waving hand: medium-dark skin tone"
    }, {
      "codes": ["1F44B", "1F3FF"],
      "status": "fully-qualified",
      "emoji": "👋🏿",
      "name": "waving hand: dark skin tone"
    }, {
      "codes": ["1F91F"],
      "status": "fully-qualified",
      "emoji": "🤟",
      "name": "love-you gesture"
    }, {
      "codes": ["1F91F", "1F3FB"],
      "status": "fully-qualified",
      "emoji": "🤟🏻",
      "name": "love-you gesture: light skin tone"
    }, {
      "codes": ["1F91F", "1F3FC"],
      "status": "fully-qualified",
      "emoji": "🤟🏼",
      "name": "love-you gesture: medium-light skin tone"
    }, {
      "codes": ["1F91F", "1F3FD"],
      "status": "fully-qualified",
      "emoji": "🤟🏽",
      "name": "love-you gesture: medium skin tone"
    }, {
      "codes": ["1F91F", "1F3FE"],
      "status": "fully-qualified",
      "emoji": "🤟🏾",
      "name": "love-you gesture: medium-dark skin tone"
    }, {
      "codes": ["1F91F", "1F3FF"],
      "status": "fully-qualified",
      "emoji": "🤟🏿",
      "name": "love-you gesture: dark skin tone"
    }, {
      "codes": ["270D", "FE0F"],
      "status": "fully-qualified",
      "emoji": "✍️",
      "name": "writing hand"
    }, {
      "codes": ["270D"],
      "status": "non-fully-qualified",
      "emoji": "✍",
      "name": "writing hand"
    }, {
      "codes": ["270D", "1F3FB"],
      "status": "fully-qualified",
      "emoji": "✍🏻",
      "name": "writing hand: light skin tone"
    }, {
      "codes": ["270D", "1F3FC"],
      "status": "fully-qualified",
      "emoji": "✍🏼",
      "name": "writing hand: medium-light skin tone"
    }, {
      "codes": ["270D", "1F3FD"],
      "status": "fully-qualified",
      "emoji": "✍🏽",
      "name": "writing hand: medium skin tone"
    }, {
      "codes": ["270D", "1F3FE"],
      "status": "fully-qualified",
      "emoji": "✍🏾",
      "name": "writing hand: medium-dark skin tone"
    }, {
      "codes": ["270D", "1F3FF"],
      "status": "fully-qualified",
      "emoji": "✍🏿",
      "name": "writing hand: dark skin tone"
    }, {
      "codes": ["1F44F"],
      "status": "fully-qualified",
      "emoji": "👏",
      "name": "clapping hands"
    }, {
      "codes": ["1F44F", "1F3FB"],
      "status": "fully-qualified",
      "emoji": "👏🏻",
      "name": "clapping hands: light skin tone"
    }, {
      "codes": ["1F44F", "1F3FC"],
      "status": "fully-qualified",
      "emoji": "👏🏼",
      "name": "clapping hands: medium-light skin tone"
    }, {
      "codes": ["1F44F", "1F3FD"],
      "status": "fully-qualified",
      "emoji": "👏🏽",
      "name": "clapping hands: medium skin tone"
    }, {
      "codes": ["1F44F", "1F3FE"],
      "status": "fully-qualified",
      "emoji": "👏🏾",
      "name": "clapping hands: medium-dark skin tone"
    }, {
      "codes": ["1F44F", "1F3FF"],
      "status": "fully-qualified",
      "emoji": "👏🏿",
      "name": "clapping hands: dark skin tone"
    }, {
      "codes": ["1F450"],
      "status": "fully-qualified",
      "emoji": "👐",
      "name": "open hands"
    }, {
      "codes": ["1F450", "1F3FB"],
      "status": "fully-qualified",
      "emoji": "👐🏻",
      "name": "open hands: light skin tone"
    }, {
      "codes": ["1F450", "1F3FC"],
      "status": "fully-qualified",
      "emoji": "👐🏼",
      "name": "open hands: medium-light skin tone"
    }, {
      "codes": ["1F450", "1F3FD"],
      "status": "fully-qualified",
      "emoji": "👐🏽",
      "name": "open hands: medium skin tone"
    }, {
      "codes": ["1F450", "1F3FE"],
      "status": "fully-qualified",
      "emoji": "👐🏾",
      "name": "open hands: medium-dark skin tone"
    }, {
      "codes": ["1F450", "1F3FF"],
      "status": "fully-qualified",
      "emoji": "👐🏿",
      "name": "open hands: dark skin tone"
    }, {
      "codes": ["1F64C"],
      "status": "fully-qualified",
      "emoji": "🙌",
      "name": "raising hands"
    }, {
      "codes": ["1F64C", "1F3FB"],
      "status": "fully-qualified",
      "emoji": "🙌🏻",
      "name": "raising hands: light skin tone"
    }, {
      "codes": ["1F64C", "1F3FC"],
      "status": "fully-qualified",
      "emoji": "🙌🏼",
      "name": "raising hands: medium-light skin tone"
    }, {
      "codes": ["1F64C", "1F3FD"],
      "status": "fully-qualified",
      "emoji": "🙌🏽",
      "name": "raising hands: medium skin tone"
    }, {
      "codes": ["1F64C", "1F3FE"],
      "status": "fully-qualified",
      "emoji": "🙌🏾",
      "name": "raising hands: medium-dark skin tone"
    }, {
      "codes": ["1F64C", "1F3FF"],
      "status": "fully-qualified",
      "emoji": "🙌🏿",
      "name": "raising hands: dark skin tone"
    }, {
      "codes": ["1F932"],
      "status": "fully-qualified",
      "emoji": "🤲",
      "name": "palms up together"
    }, {
      "codes": ["1F932", "1F3FB"],
      "status": "fully-qualified",
      "emoji": "🤲🏻",
      "name": "palms up together: light skin tone"
    }, {
      "codes": ["1F932", "1F3FC"],
      "status": "fully-qualified",
      "emoji": "🤲🏼",
      "name": "palms up together: medium-light skin tone"
    }, {
      "codes": ["1F932", "1F3FD"],
      "status": "fully-qualified",
      "emoji": "🤲🏽",
      "name": "palms up together: medium skin tone"
    }, {
      "codes": ["1F932", "1F3FE"],
      "status": "fully-qualified",
      "emoji": "🤲🏾",
      "name": "palms up together: medium-dark skin tone"
    }, {
      "codes": ["1F932", "1F3FF"],
      "status": "fully-qualified",
      "emoji": "🤲🏿",
      "name": "palms up together: dark skin tone"
    }, {
      "codes": ["1F64F"],
      "status": "fully-qualified",
      "emoji": "🙏",
      "name": "folded hands"
    }, {
      "codes": ["1F64F", "1F3FB"],
      "status": "fully-qualified",
      "emoji": "🙏🏻",
      "name": "folded hands: light skin tone"
    }, {
      "codes": ["1F64F", "1F3FC"],
      "status": "fully-qualified",
      "emoji": "🙏🏼",
      "name": "folded hands: medium-light skin tone"
    }, {
      "codes": ["1F64F", "1F3FD"],
      "status": "fully-qualified",
      "emoji": "🙏🏽",
      "name": "folded hands: medium skin tone"
    }, {
      "codes": ["1F64F", "1F3FE"],
      "status": "fully-qualified",
      "emoji": "🙏🏾",
      "name": "folded hands: medium-dark skin tone"
    }, {
      "codes": ["1F64F", "1F3FF"],
      "status": "fully-qualified",
      "emoji": "🙏🏿",
      "name": "folded hands: dark skin tone"
    }, {
      "codes": ["1F91D"],
      "status": "fully-qualified",
      "emoji": "🤝",
      "name": "handshake"
    }, {
      "codes": ["1F485"],
      "status": "fully-qualified",
      "emoji": "💅",
      "name": "nail polish"
    }, {
      "codes": ["1F485", "1F3FB"],
      "status": "fully-qualified",
      "emoji": "💅🏻",
      "name": "nail polish: light skin tone"
    }, {
      "codes": ["1F485", "1F3FC"],
      "status": "fully-qualified",
      "emoji": "💅🏼",
      "name": "nail polish: medium-light skin tone"
    }, {
      "codes": ["1F485", "1F3FD"],
      "status": "fully-qualified",
      "emoji": "💅🏽",
      "name": "nail polish: medium skin tone"
    }, {
      "codes": ["1F485", "1F3FE"],
      "status": "fully-qualified",
      "emoji": "💅🏾",
      "name": "nail polish: medium-dark skin tone"
    }, {
      "codes": ["1F485", "1F3FF"],
      "status": "fully-qualified",
      "emoji": "💅🏿",
      "name": "nail polish: dark skin tone"
    }, {
      "codes": ["1F442"],
      "status": "fully-qualified",
      "emoji": "👂",
      "name": "ear"
    }, {
      "codes": ["1F442", "1F3FB"],
      "status": "fully-qualified",
      "emoji": "👂🏻",
      "name": "ear: light skin tone"
    }, {
      "codes": ["1F442", "1F3FC"],
      "status": "fully-qualified",
      "emoji": "👂🏼",
      "name": "ear: medium-light skin tone"
    }, {
      "codes": ["1F442", "1F3FD"],
      "status": "fully-qualified",
      "emoji": "👂🏽",
      "name": "ear: medium skin tone"
    }, {
      "codes": ["1F442", "1F3FE"],
      "status": "fully-qualified",
      "emoji": "👂🏾",
      "name": "ear: medium-dark skin tone"
    }, {
      "codes": ["1F442", "1F3FF"],
      "status": "fully-qualified",
      "emoji": "👂🏿",
      "name": "ear: dark skin tone"
    }, {
      "codes": ["1F443"],
      "status": "fully-qualified",
      "emoji": "👃",
      "name": "nose"
    }, {
      "codes": ["1F443", "1F3FB"],
      "status": "fully-qualified",
      "emoji": "👃🏻",
      "name": "nose: light skin tone"
    }, {
      "codes": ["1F443", "1F3FC"],
      "status": "fully-qualified",
      "emoji": "👃🏼",
      "name": "nose: medium-light skin tone"
    }, {
      "codes": ["1F443", "1F3FD"],
      "status": "fully-qualified",
      "emoji": "👃🏽",
      "name": "nose: medium skin tone"
    }, {
      "codes": ["1F443", "1F3FE"],
      "status": "fully-qualified",
      "emoji": "👃🏾",
      "name": "nose: medium-dark skin tone"
    }, {
      "codes": ["1F443", "1F3FF"],
      "status": "fully-qualified",
      "emoji": "👃🏿",
      "name": "nose: dark skin tone"
    }, {
      "codes": ["1F463"],
      "status": "fully-qualified",
      "emoji": "👣",
      "name": "footprints"
    }, {
      "codes": ["1F440"],
      "status": "fully-qualified",
      "emoji": "👀",
      "name": "eyes"
    }, {
      "codes": ["1F441", "FE0F"],
      "status": "fully-qualified",
      "emoji": "👁️",
      "name": "eye"
    }, {
      "codes": ["1F441"],
      "status": "non-fully-qualified",
      "emoji": "👁",
      "name": "eye"
    }, {
      "codes": ["1F9E0"],
      "status": "fully-qualified",
      "emoji": "🧠",
      "name": "brain"
    }, {
      "codes": ["1F445"],
      "status": "fully-qualified",
      "emoji": "👅",
      "name": "tongue"
    }, {
      "codes": ["1F444"],
      "status": "fully-qualified",
      "emoji": "👄",
      "name": "mouth"
    }]
  }, {
    "name": "emotion",
    "emojis": [{
      "codes": ["1F48B"],
      "status": "fully-qualified",
      "emoji": "💋",
      "name": "kiss mark"
    }, {
      "codes": ["1F498"],
      "status": "fully-qualified",
      "emoji": "💘",
      "name": "heart with arrow"
    }, {
      "codes": ["2764", "FE0F"],
      "status": "fully-qualified",
      "emoji": "❤️",
      "name": "red heart"
    }, {
      "codes": ["2764"],
      "status": "non-fully-qualified",
      "emoji": "❤",
      "name": "red heart"
    }, {
      "codes": ["1F493"],
      "status": "fully-qualified",
      "emoji": "💓",
      "name": "beating heart"
    }, {
      "codes": ["1F494"],
      "status": "fully-qualified",
      "emoji": "💔",
      "name": "broken heart"
    }, {
      "codes": ["1F495"],
      "status": "fully-qualified",
      "emoji": "💕",
      "name": "two hearts"
    }, {
      "codes": ["1F496"],
      "status": "fully-qualified",
      "emoji": "💖",
      "name": "sparkling heart"
    }, {
      "codes": ["1F497"],
      "status": "fully-qualified",
      "emoji": "💗",
      "name": "growing heart"
    }, {
      "codes": ["1F499"],
      "status": "fully-qualified",
      "emoji": "💙",
      "name": "blue heart"
    }, {
      "codes": ["1F49A"],
      "status": "fully-qualified",
      "emoji": "💚",
      "name": "green heart"
    }, {
      "codes": ["1F49B"],
      "status": "fully-qualified",
      "emoji": "💛",
      "name": "yellow heart"
    }, {
      "codes": ["1F9E1"],
      "status": "fully-qualified",
      "emoji": "🧡",
      "name": "orange heart"
    }, {
      "codes": ["1F49C"],
      "status": "fully-qualified",
      "emoji": "💜",
      "name": "purple heart"
    }, {
      "codes": ["1F5A4"],
      "status": "fully-qualified",
      "emoji": "🖤",
      "name": "black heart"
    }, {
      "codes": ["1F49D"],
      "status": "fully-qualified",
      "emoji": "💝",
      "name": "heart with ribbon"
    }, {
      "codes": ["1F49E"],
      "status": "fully-qualified",
      "emoji": "💞",
      "name": "revolving hearts"
    }, {
      "codes": ["1F49F"],
      "status": "fully-qualified",
      "emoji": "💟",
      "name": "heart decoration"
    }, {
      "codes": ["2763", "FE0F"],
      "status": "fully-qualified",
      "emoji": "❣️",
      "name": "heavy heart exclamation"
    }, {
      "codes": ["2763"],
      "status": "non-fully-qualified",
      "emoji": "❣",
      "name": "heavy heart exclamation"
    }, {
      "codes": ["1F48C"],
      "status": "fully-qualified",
      "emoji": "💌",
      "name": "love letter"
    }, {
      "codes": ["1F4A4"],
      "status": "fully-qualified",
      "emoji": "💤",
      "name": "zzz"
    }, {
      "codes": ["1F4A2"],
      "status": "fully-qualified",
      "emoji": "💢",
      "name": "anger symbol"
    }, {
      "codes": ["1F4A3"],
      "status": "fully-qualified",
      "emoji": "💣",
      "name": "bomb"
    }, {
      "codes": ["1F4A5"],
      "status": "fully-qualified",
      "emoji": "💥",
      "name": "collision"
    }, {
      "codes": ["1F4A6"],
      "status": "fully-qualified",
      "emoji": "💦",
      "name": "sweat droplets"
    }, {
      "codes": ["1F4A8"],
      "status": "fully-qualified",
      "emoji": "💨",
      "name": "dashing away"
    }, {
      "codes": ["1F4AB"],
      "status": "fully-qualified",
      "emoji": "💫",
      "name": "dizzy"
    }, {
      "codes": ["1F4AC"],
      "status": "fully-qualified",
      "emoji": "💬",
      "name": "speech balloon"
    }, {
      "codes": ["1F5E8", "FE0F"],
      "status": "fully-qualified",
      "emoji": "🗨️",
      "name": "left speech bubble"
    }, {
      "codes": ["1F5E8"],
      "status": "non-fully-qualified",
      "emoji": "🗨",
      "name": "left speech bubble"
    }, {
      "codes": ["1F5EF", "FE0F"],
      "status": "fully-qualified",
      "emoji": "🗯️",
      "name": "right anger bubble"
    }, {
      "codes": ["1F5EF"],
      "status": "non-fully-qualified",
      "emoji": "🗯",
      "name": "right anger bubble"
    }, {
      "codes": ["1F4AD"],
      "status": "fully-qualified",
      "emoji": "💭",
      "name": "thought balloon"
    }, {
      "codes": ["1F573", "FE0F"],
      "status": "fully-qualified",
      "emoji": "🕳️",
      "name": "hole"
    }, {
      "codes": ["1F573"],
      "status": "non-fully-qualified",
      "emoji": "🕳",
      "name": "hole"
    }]
  }, {
    "name": "clothing",
    "emojis": [{
      "codes": ["1F453"],
      "status": "fully-qualified",
      "emoji": "👓",
      "name": "glasses"
    }, {
      "codes": ["1F576", "FE0F"],
      "status": "fully-qualified",
      "emoji": "🕶️",
      "name": "sunglasses"
    }, {
      "codes": ["1F576"],
      "status": "non-fully-qualified",
      "emoji": "🕶",
      "name": "sunglasses"
    }, {
      "codes": ["1F454"],
      "status": "fully-qualified",
      "emoji": "👔",
      "name": "necktie"
    }, {
      "codes": ["1F455"],
      "status": "fully-qualified",
      "emoji": "👕",
      "name": "t-shirt"
    }, {
      "codes": ["1F456"],
      "status": "fully-qualified",
      "emoji": "👖",
      "name": "jeans"
    }, {
      "codes": ["1F9E3"],
      "status": "fully-qualified",
      "emoji": "🧣",
      "name": "scarf"
    }, {
      "codes": ["1F9E4"],
      "status": "fully-qualified",
      "emoji": "🧤",
      "name": "gloves"
    }, {
      "codes": ["1F9E5"],
      "status": "fully-qualified",
      "emoji": "🧥",
      "name": "coat"
    }, {
      "codes": ["1F9E6"],
      "status": "fully-qualified",
      "emoji": "🧦",
      "name": "socks"
    }, {
      "codes": ["1F457"],
      "status": "fully-qualified",
      "emoji": "👗",
      "name": "dress"
    }, {
      "codes": ["1F458"],
      "status": "fully-qualified",
      "emoji": "👘",
      "name": "kimono"
    }, {
      "codes": ["1F459"],
      "status": "fully-qualified",
      "emoji": "👙",
      "name": "bikini"
    }, {
      "codes": ["1F45A"],
      "status": "fully-qualified",
      "emoji": "👚",
      "name": "woman’s clothes"
    }, {
      "codes": ["1F45B"],
      "status": "fully-qualified",
      "emoji": "👛",
      "name": "purse"
    }, {
      "codes": ["1F45C"],
      "status": "fully-qualified",
      "emoji": "👜",
      "name": "handbag"
    }, {
      "codes": ["1F45D"],
      "status": "fully-qualified",
      "emoji": "👝",
      "name": "clutch bag"
    }, {
      "codes": ["1F6CD", "FE0F"],
      "status": "fully-qualified",
      "emoji": "🛍️",
      "name": "shopping bags"
    }, {
      "codes": ["1F6CD"],
      "status": "non-fully-qualified",
      "emoji": "🛍",
      "name": "shopping bags"
    }, {
      "codes": ["1F392"],
      "status": "fully-qualified",
      "emoji": "🎒",
      "name": "school backpack"
    }, {
      "codes": ["1F45E"],
      "status": "fully-qualified",
      "emoji": "👞",
      "name": "man’s shoe"
    }, {
      "codes": ["1F45F"],
      "status": "fully-qualified",
      "emoji": "👟",
      "name": "running shoe"
    }, {
      "codes": ["1F460"],
      "status": "fully-qualified",
      "emoji": "👠",
      "name": "high-heeled shoe"
    }, {
      "codes": ["1F461"],
      "status": "fully-qualified",
      "emoji": "👡",
      "name": "woman’s sandal"
    }, {
      "codes": ["1F462"],
      "status": "fully-qualified",
      "emoji": "👢",
      "name": "woman’s boot"
    }, {
      "codes": ["1F451"],
      "status": "fully-qualified",
      "emoji": "👑",
      "name": "crown"
    }, {
      "codes": ["1F452"],
      "status": "fully-qualified",
      "emoji": "👒",
      "name": "woman’s hat"
    }, {
      "codes": ["1F3A9"],
      "status": "fully-qualified",
      "emoji": "🎩",
      "name": "top hat"
    }, {
      "codes": ["1F393"],
      "status": "fully-qualified",
      "emoji": "🎓",
      "name": "graduation cap"
    }, {
      "codes": ["1F9E2"],
      "status": "fully-qualified",
      "emoji": "🧢",
      "name": "billed cap"
    }, {
      "codes": ["26D1", "FE0F"],
      "status": "fully-qualified",
      "emoji": "⛑️",
      "name": "rescue worker’s helmet"
    }, {
      "codes": ["26D1"],
      "status": "non-fully-qualified",
      "emoji": "⛑",
      "name": "rescue worker’s helmet"
    }, {
      "codes": ["1F4FF"],
      "status": "fully-qualified",
      "emoji": "📿",
      "name": "prayer beads"
    }, {
      "codes": ["1F484"],
      "status": "fully-qualified",
      "emoji": "💄",
      "name": "lipstick"
    }, {
      "codes": ["1F48D"],
      "status": "fully-qualified",
      "emoji": "💍",
      "name": "ring"
    }, {
      "codes": ["1F48E"],
      "status": "fully-qualified",
      "emoji": "💎",
      "name": "gem stone"
    }]
  }]
}, {
  "name": "Animals & Nature",
  "subGroups": [{
    "name": "animal-mammal",
    "emojis": [{
      "codes": ["1F435"],
      "status": "fully-qualified",
      "emoji": "🐵",
      "name": "monkey face"
    }, {
      "codes": ["1F412"],
      "status": "fully-qualified",
      "emoji": "🐒",
      "name": "monkey"
    }, {
      "codes": ["1F98D"],
      "status": "fully-qualified",
      "emoji": "🦍",
      "name": "gorilla"
    }, {
      "codes": ["1F436"],
      "status": "fully-qualified",
      "emoji": "🐶",
      "name": "dog face"
    }, {
      "codes": ["1F415"],
      "status": "fully-qualified",
      "emoji": "🐕",
      "name": "dog"
    }, {
      "codes": ["1F429"],
      "status": "fully-qualified",
      "emoji": "🐩",
      "name": "poodle"
    }, {
      "codes": ["1F43A"],
      "status": "fully-qualified",
      "emoji": "🐺",
      "name": "wolf face"
    }, {
      "codes": ["1F98A"],
      "status": "fully-qualified",
      "emoji": "🦊",
      "name": "fox face"
    }, {
      "codes": ["1F431"],
      "status": "fully-qualified",
      "emoji": "🐱",
      "name": "cat face"
    }, {
      "codes": ["1F408"],
      "status": "fully-qualified",
      "emoji": "🐈",
      "name": "cat"
    }, {
      "codes": ["1F981"],
      "status": "fully-qualified",
      "emoji": "🦁",
      "name": "lion face"
    }, {
      "codes": ["1F42F"],
      "status": "fully-qualified",
      "emoji": "🐯",
      "name": "tiger face"
    }, {
      "codes": ["1F405"],
      "status": "fully-qualified",
      "emoji": "🐅",
      "name": "tiger"
    }, {
      "codes": ["1F406"],
      "status": "fully-qualified",
      "emoji": "🐆",
      "name": "leopard"
    }, {
      "codes": ["1F434"],
      "status": "fully-qualified",
      "emoji": "🐴",
      "name": "horse face"
    }, {
      "codes": ["1F40E"],
      "status": "fully-qualified",
      "emoji": "🐎",
      "name": "horse"
    }, {
      "codes": ["1F984"],
      "status": "fully-qualified",
      "emoji": "🦄",
      "name": "unicorn face"
    }, {
      "codes": ["1F993"],
      "status": "fully-qualified",
      "emoji": "🦓",
      "name": "zebra"
    }, {
      "codes": ["1F98C"],
      "status": "fully-qualified",
      "emoji": "🦌",
      "name": "deer"
    }, {
      "codes": ["1F42E"],
      "status": "fully-qualified",
      "emoji": "🐮",
      "name": "cow face"
    }, {
      "codes": ["1F402"],
      "status": "fully-qualified",
      "emoji": "🐂",
      "name": "ox"
    }, {
      "codes": ["1F403"],
      "status": "fully-qualified",
      "emoji": "🐃",
      "name": "water buffalo"
    }, {
      "codes": ["1F404"],
      "status": "fully-qualified",
      "emoji": "🐄",
      "name": "cow"
    }, {
      "codes": ["1F437"],
      "status": "fully-qualified",
      "emoji": "🐷",
      "name": "pig face"
    }, {
      "codes": ["1F416"],
      "status": "fully-qualified",
      "emoji": "🐖",
      "name": "pig"
    }, {
      "codes": ["1F417"],
      "status": "fully-qualified",
      "emoji": "🐗",
      "name": "boar"
    }, {
      "codes": ["1F43D"],
      "status": "fully-qualified",
      "emoji": "🐽",
      "name": "pig nose"
    }, {
      "codes": ["1F40F"],
      "status": "fully-qualified",
      "emoji": "🐏",
      "name": "ram"
    }, {
      "codes": ["1F411"],
      "status": "fully-qualified",
      "emoji": "🐑",
      "name": "ewe"
    }, {
      "codes": ["1F410"],
      "status": "fully-qualified",
      "emoji": "🐐",
      "name": "goat"
    }, {
      "codes": ["1F42A"],
      "status": "fully-qualified",
      "emoji": "🐪",
      "name": "camel"
    }, {
      "codes": ["1F42B"],
      "status": "fully-qualified",
      "emoji": "🐫",
      "name": "two-hump camel"
    }, {
      "codes": ["1F992"],
      "status": "fully-qualified",
      "emoji": "🦒",
      "name": "giraffe"
    }, {
      "codes": ["1F418"],
      "status": "fully-qualified",
      "emoji": "🐘",
      "name": "elephant"
    }, {
      "codes": ["1F98F"],
      "status": "fully-qualified",
      "emoji": "🦏",
      "name": "rhinoceros"
    }, {
      "codes": ["1F42D"],
      "status": "fully-qualified",
      "emoji": "🐭",
      "name": "mouse face"
    }, {
      "codes": ["1F401"],
      "status": "fully-qualified",
      "emoji": "🐁",
      "name": "mouse"
    }, {
      "codes": ["1F400"],
      "status": "fully-qualified",
      "emoji": "🐀",
      "name": "rat"
    }, {
      "codes": ["1F439"],
      "status": "fully-qualified",
      "emoji": "🐹",
      "name": "hamster face"
    }, {
      "codes": ["1F430"],
      "status": "fully-qualified",
      "emoji": "🐰",
      "name": "rabbit face"
    }, {
      "codes": ["1F407"],
      "status": "fully-qualified",
      "emoji": "🐇",
      "name": "rabbit"
    }, {
      "codes": ["1F43F", "FE0F"],
      "status": "fully-qualified",
      "emoji": "🐿️",
      "name": "chipmunk"
    }, {
      "codes": ["1F43F"],
      "status": "non-fully-qualified",
      "emoji": "🐿",
      "name": "chipmunk"
    }, {
      "codes": ["1F994"],
      "status": "fully-qualified",
      "emoji": "🦔",
      "name": "hedgehog"
    }, {
      "codes": ["1F987"],
      "status": "fully-qualified",
      "emoji": "🦇",
      "name": "bat"
    }, {
      "codes": ["1F43B"],
      "status": "fully-qualified",
      "emoji": "🐻",
      "name": "bear face"
    }, {
      "codes": ["1F428"],
      "status": "fully-qualified",
      "emoji": "🐨",
      "name": "koala"
    }, {
      "codes": ["1F43C"],
      "status": "fully-qualified",
      "emoji": "🐼",
      "name": "panda face"
    }, {
      "codes": ["1F43E"],
      "status": "fully-qualified",
      "emoji": "🐾",
      "name": "paw prints"
    }]
  }, {
    "name": "animal-bird",
    "emojis": [{
      "codes": ["1F983"],
      "status": "fully-qualified",
      "emoji": "🦃",
      "name": "turkey"
    }, {
      "codes": ["1F414"],
      "status": "fully-qualified",
      "emoji": "🐔",
      "name": "chicken"
    }, {
      "codes": ["1F413"],
      "status": "fully-qualified",
      "emoji": "🐓",
      "name": "rooster"
    }, {
      "codes": ["1F423"],
      "status": "fully-qualified",
      "emoji": "🐣",
      "name": "hatching chick"
    }, {
      "codes": ["1F424"],
      "status": "fully-qualified",
      "emoji": "🐤",
      "name": "baby chick"
    }, {
      "codes": ["1F425"],
      "status": "fully-qualified",
      "emoji": "🐥",
      "name": "front-facing baby chick"
    }, {
      "codes": ["1F426"],
      "status": "fully-qualified",
      "emoji": "🐦",
      "name": "bird"
    }, {
      "codes": ["1F427"],
      "status": "fully-qualified",
      "emoji": "🐧",
      "name": "penguin"
    }, {
      "codes": ["1F54A", "FE0F"],
      "status": "fully-qualified",
      "emoji": "🕊️",
      "name": "dove"
    }, {
      "codes": ["1F54A"],
      "status": "non-fully-qualified",
      "emoji": "🕊",
      "name": "dove"
    }, {
      "codes": ["1F985"],
      "status": "fully-qualified",
      "emoji": "🦅",
      "name": "eagle"
    }, {
      "codes": ["1F986"],
      "status": "fully-qualified",
      "emoji": "🦆",
      "name": "duck"
    }, {
      "codes": ["1F989"],
      "status": "fully-qualified",
      "emoji": "🦉",
      "name": "owl"
    }]
  }, {
    "name": "animal-amphibian",
    "emojis": [{
      "codes": ["1F438"],
      "status": "fully-qualified",
      "emoji": "🐸",
      "name": "frog face"
    }]
  }, {
    "name": "animal-reptile",
    "emojis": [{
      "codes": ["1F40A"],
      "status": "fully-qualified",
      "emoji": "🐊",
      "name": "crocodile"
    }, {
      "codes": ["1F422"],
      "status": "fully-qualified",
      "emoji": "🐢",
      "name": "turtle"
    }, {
      "codes": ["1F98E"],
      "status": "fully-qualified",
      "emoji": "🦎",
      "name": "lizard"
    }, {
      "codes": ["1F40D"],
      "status": "fully-qualified",
      "emoji": "🐍",
      "name": "snake"
    }, {
      "codes": ["1F432"],
      "status": "fully-qualified",
      "emoji": "🐲",
      "name": "dragon face"
    }, {
      "codes": ["1F409"],
      "status": "fully-qualified",
      "emoji": "🐉",
      "name": "dragon"
    }, {
      "codes": ["1F995"],
      "status": "fully-qualified",
      "emoji": "🦕",
      "name": "sauropod"
    }, {
      "codes": ["1F996"],
      "status": "fully-qualified",
      "emoji": "🦖",
      "name": "T-Rex"
    }]
  }, {
    "name": "animal-marine",
    "emojis": [{
      "codes": ["1F433"],
      "status": "fully-qualified",
      "emoji": "🐳",
      "name": "spouting whale"
    }, {
      "codes": ["1F40B"],
      "status": "fully-qualified",
      "emoji": "🐋",
      "name": "whale"
    }, {
      "codes": ["1F42C"],
      "status": "fully-qualified",
      "emoji": "🐬",
      "name": "dolphin"
    }, {
      "codes": ["1F41F"],
      "status": "fully-qualified",
      "emoji": "🐟",
      "name": "fish"
    }, {
      "codes": ["1F420"],
      "status": "fully-qualified",
      "emoji": "🐠",
      "name": "tropical fish"
    }, {
      "codes": ["1F421"],
      "status": "fully-qualified",
      "emoji": "🐡",
      "name": "blowfish"
    }, {
      "codes": ["1F988"],
      "status": "fully-qualified",
      "emoji": "🦈",
      "name": "shark"
    }, {
      "codes": ["1F419"],
      "status": "fully-qualified",
      "emoji": "🐙",
      "name": "octopus"
    }, {
      "codes": ["1F41A"],
      "status": "fully-qualified",
      "emoji": "🐚",
      "name": "spiral shell"
    }, {
      "codes": ["1F980"],
      "status": "fully-qualified",
      "emoji": "🦀",
      "name": "crab"
    }, {
      "codes": ["1F990"],
      "status": "fully-qualified",
      "emoji": "🦐",
      "name": "shrimp"
    }, {
      "codes": ["1F991"],
      "status": "fully-qualified",
      "emoji": "🦑",
      "name": "squid"
    }]
  }, {
    "name": "animal-bug",
    "emojis": [{
      "codes": ["1F40C"],
      "status": "fully-qualified",
      "emoji": "🐌",
      "name": "snail"
    }, {
      "codes": ["1F98B"],
      "status": "fully-qualified",
      "emoji": "🦋",
      "name": "butterfly"
    }, {
      "codes": ["1F41B"],
      "status": "fully-qualified",
      "emoji": "🐛",
      "name": "bug"
    }, {
      "codes": ["1F41C"],
      "status": "fully-qualified",
      "emoji": "🐜",
      "name": "ant"
    }, {
      "codes": ["1F41D"],
      "status": "fully-qualified",
      "emoji": "🐝",
      "name": "honeybee"
    }, {
      "codes": ["1F41E"],
      "status": "fully-qualified",
      "emoji": "🐞",
      "name": "lady beetle"
    }, {
      "codes": ["1F997"],
      "status": "fully-qualified",
      "emoji": "🦗",
      "name": "cricket"
    }, {
      "codes": ["1F577", "FE0F"],
      "status": "fully-qualified",
      "emoji": "🕷️",
      "name": "spider"
    }, {
      "codes": ["1F577"],
      "status": "non-fully-qualified",
      "emoji": "🕷",
      "name": "spider"
    }, {
      "codes": ["1F578", "FE0F"],
      "status": "fully-qualified",
      "emoji": "🕸️",
      "name": "spider web"
    }, {
      "codes": ["1F578"],
      "status": "non-fully-qualified",
      "emoji": "🕸",
      "name": "spider web"
    }, {
      "codes": ["1F982"],
      "status": "fully-qualified",
      "emoji": "🦂",
      "name": "scorpion"
    }]
  }, {
    "name": "plant-flower",
    "emojis": [{
      "codes": ["1F490"],
      "status": "fully-qualified",
      "emoji": "💐",
      "name": "bouquet"
    }, {
      "codes": ["1F338"],
      "status": "fully-qualified",
      "emoji": "🌸",
      "name": "cherry blossom"
    }, {
      "codes": ["1F4AE"],
      "status": "fully-qualified",
      "emoji": "💮",
      "name": "white flower"
    }, {
      "codes": ["1F3F5", "FE0F"],
      "status": "fully-qualified",
      "emoji": "🏵️",
      "name": "rosette"
    }, {
      "codes": ["1F3F5"],
      "status": "non-fully-qualified",
      "emoji": "🏵",
      "name": "rosette"
    }, {
      "codes": ["1F339"],
      "status": "fully-qualified",
      "emoji": "🌹",
      "name": "rose"
    }, {
      "codes": ["1F940"],
      "status": "fully-qualified",
      "emoji": "🥀",
      "name": "wilted flower"
    }, {
      "codes": ["1F33A"],
      "status": "fully-qualified",
      "emoji": "🌺",
      "name": "hibiscus"
    }, {
      "codes": ["1F33B"],
      "status": "fully-qualified",
      "emoji": "🌻",
      "name": "sunflower"
    }, {
      "codes": ["1F33C"],
      "status": "fully-qualified",
      "emoji": "🌼",
      "name": "blossom"
    }, {
      "codes": ["1F337"],
      "status": "fully-qualified",
      "emoji": "🌷",
      "name": "tulip"
    }]
  }, {
    "name": "plant-other",
    "emojis": [{
      "codes": ["1F331"],
      "status": "fully-qualified",
      "emoji": "🌱",
      "name": "seedling"
    }, {
      "codes": ["1F332"],
      "status": "fully-qualified",
      "emoji": "🌲",
      "name": "evergreen tree"
    }, {
      "codes": ["1F333"],
      "status": "fully-qualified",
      "emoji": "🌳",
      "name": "deciduous tree"
    }, {
      "codes": ["1F334"],
      "status": "fully-qualified",
      "emoji": "🌴",
      "name": "palm tree"
    }, {
      "codes": ["1F335"],
      "status": "fully-qualified",
      "emoji": "🌵",
      "name": "cactus"
    }, {
      "codes": ["1F33E"],
      "status": "fully-qualified",
      "emoji": "🌾",
      "name": "sheaf of rice"
    }, {
      "codes": ["1F33F"],
      "status": "fully-qualified",
      "emoji": "🌿",
      "name": "herb"
    }, {
      "codes": ["2618", "FE0F"],
      "status": "fully-qualified",
      "emoji": "☘️",
      "name": "shamrock"
    }, {
      "codes": ["2618"],
      "status": "non-fully-qualified",
      "emoji": "☘",
      "name": "shamrock"
    }, {
      "codes": ["1F340"],
      "status": "fully-qualified",
      "emoji": "🍀",
      "name": "four leaf clover"
    }, {
      "codes": ["1F341"],
      "status": "fully-qualified",
      "emoji": "🍁",
      "name": "maple leaf"
    }, {
      "codes": ["1F342"],
      "status": "fully-qualified",
      "emoji": "🍂",
      "name": "fallen leaf"
    }, {
      "codes": ["1F343"],
      "status": "fully-qualified",
      "emoji": "🍃",
      "name": "leaf fluttering in wind"
    }]
  }]
}, {
  "name": "Food & Drink",
  "subGroups": [{
    "name": "food-fruit",
    "emojis": [{
      "codes": ["1F347"],
      "status": "fully-qualified",
      "emoji": "🍇",
      "name": "grapes"
    }, {
      "codes": ["1F348"],
      "status": "fully-qualified",
      "emoji": "🍈",
      "name": "melon"
    }, {
      "codes": ["1F349"],
      "status": "fully-qualified",
      "emoji": "🍉",
      "name": "watermelon"
    }, {
      "codes": ["1F34A"],
      "status": "fully-qualified",
      "emoji": "🍊",
      "name": "tangerine"
    }, {
      "codes": ["1F34B"],
      "status": "fully-qualified",
      "emoji": "🍋",
      "name": "lemon"
    }, {
      "codes": ["1F34C"],
      "status": "fully-qualified",
      "emoji": "🍌",
      "name": "banana"
    }, {
      "codes": ["1F34D"],
      "status": "fully-qualified",
      "emoji": "🍍",
      "name": "pineapple"
    }, {
      "codes": ["1F34E"],
      "status": "fully-qualified",
      "emoji": "🍎",
      "name": "red apple"
    }, {
      "codes": ["1F34F"],
      "status": "fully-qualified",
      "emoji": "🍏",
      "name": "green apple"
    }, {
      "codes": ["1F350"],
      "status": "fully-qualified",
      "emoji": "🍐",
      "name": "pear"
    }, {
      "codes": ["1F351"],
      "status": "fully-qualified",
      "emoji": "🍑",
      "name": "peach"
    }, {
      "codes": ["1F352"],
      "status": "fully-qualified",
      "emoji": "🍒",
      "name": "cherries"
    }, {
      "codes": ["1F353"],
      "status": "fully-qualified",
      "emoji": "🍓",
      "name": "strawberry"
    }, {
      "codes": ["1F95D"],
      "status": "fully-qualified",
      "emoji": "🥝",
      "name": "kiwi fruit"
    }, {
      "codes": ["1F345"],
      "status": "fully-qualified",
      "emoji": "🍅",
      "name": "tomato"
    }, {
      "codes": ["1F965"],
      "status": "fully-qualified",
      "emoji": "🥥",
      "name": "coconut"
    }]
  }, {
    "name": "food-vegetable",
    "emojis": [{
      "codes": ["1F951"],
      "status": "fully-qualified",
      "emoji": "🥑",
      "name": "avocado"
    }, {
      "codes": ["1F346"],
      "status": "fully-qualified",
      "emoji": "🍆",
      "name": "eggplant"
    }, {
      "codes": ["1F954"],
      "status": "fully-qualified",
      "emoji": "🥔",
      "name": "potato"
    }, {
      "codes": ["1F955"],
      "status": "fully-qualified",
      "emoji": "🥕",
      "name": "carrot"
    }, {
      "codes": ["1F33D"],
      "status": "fully-qualified",
      "emoji": "🌽",
      "name": "ear of corn"
    }, {
      "codes": ["1F336", "FE0F"],
      "status": "fully-qualified",
      "emoji": "🌶️",
      "name": "hot pepper"
    }, {
      "codes": ["1F336"],
      "status": "non-fully-qualified",
      "emoji": "🌶",
      "name": "hot pepper"
    }, {
      "codes": ["1F952"],
      "status": "fully-qualified",
      "emoji": "🥒",
      "name": "cucumber"
    }, {
      "codes": ["1F966"],
      "status": "fully-qualified",
      "emoji": "🥦",
      "name": "broccoli"
    }, {
      "codes": ["1F344"],
      "status": "fully-qualified",
      "emoji": "🍄",
      "name": "mushroom"
    }, {
      "codes": ["1F95C"],
      "status": "fully-qualified",
      "emoji": "🥜",
      "name": "peanuts"
    }, {
      "codes": ["1F330"],
      "status": "fully-qualified",
      "emoji": "🌰",
      "name": "chestnut"
    }]
  }, {
    "name": "food-prepared",
    "emojis": [{
      "codes": ["1F35E"],
      "status": "fully-qualified",
      "emoji": "🍞",
      "name": "bread"
    }, {
      "codes": ["1F950"],
      "status": "fully-qualified",
      "emoji": "🥐",
      "name": "croissant"
    }, {
      "codes": ["1F956"],
      "status": "fully-qualified",
      "emoji": "🥖",
      "name": "baguette bread"
    }, {
      "codes": ["1F968"],
      "status": "fully-qualified",
      "emoji": "🥨",
      "name": "pretzel"
    }, {
      "codes": ["1F95E"],
      "status": "fully-qualified",
      "emoji": "🥞",
      "name": "pancakes"
    }, {
      "codes": ["1F9C0"],
      "status": "fully-qualified",
      "emoji": "🧀",
      "name": "cheese wedge"
    }, {
      "codes": ["1F356"],
      "status": "fully-qualified",
      "emoji": "🍖",
      "name": "meat on bone"
    }, {
      "codes": ["1F357"],
      "status": "fully-qualified",
      "emoji": "🍗",
      "name": "poultry leg"
    }, {
      "codes": ["1F969"],
      "status": "fully-qualified",
      "emoji": "🥩",
      "name": "cut of meat"
    }, {
      "codes": ["1F953"],
      "status": "fully-qualified",
      "emoji": "🥓",
      "name": "bacon"
    }, {
      "codes": ["1F354"],
      "status": "fully-qualified",
      "emoji": "🍔",
      "name": "hamburger"
    }, {
      "codes": ["1F35F"],
      "status": "fully-qualified",
      "emoji": "🍟",
      "name": "french fries"
    }, {
      "codes": ["1F355"],
      "status": "fully-qualified",
      "emoji": "🍕",
      "name": "pizza"
    }, {
      "codes": ["1F32D"],
      "status": "fully-qualified",
      "emoji": "🌭",
      "name": "hot dog"
    }, {
      "codes": ["1F96A"],
      "status": "fully-qualified",
      "emoji": "🥪",
      "name": "sandwich"
    }, {
      "codes": ["1F32E"],
      "status": "fully-qualified",
      "emoji": "🌮",
      "name": "taco"
    }, {
      "codes": ["1F32F"],
      "status": "fully-qualified",
      "emoji": "🌯",
      "name": "burrito"
    }, {
      "codes": ["1F959"],
      "status": "fully-qualified",
      "emoji": "🥙",
      "name": "stuffed flatbread"
    }, {
      "codes": ["1F95A"],
      "status": "fully-qualified",
      "emoji": "🥚",
      "name": "egg"
    }, {
      "codes": ["1F373"],
      "status": "fully-qualified",
      "emoji": "🍳",
      "name": "cooking"
    }, {
      "codes": ["1F958"],
      "status": "fully-qualified",
      "emoji": "🥘",
      "name": "shallow pan of food"
    }, {
      "codes": ["1F372"],
      "status": "fully-qualified",
      "emoji": "🍲",
      "name": "pot of food"
    }, {
      "codes": ["1F963"],
      "status": "fully-qualified",
      "emoji": "🥣",
      "name": "bowl with spoon"
    }, {
      "codes": ["1F957"],
      "status": "fully-qualified",
      "emoji": "🥗",
      "name": "green salad"
    }, {
      "codes": ["1F37F"],
      "status": "fully-qualified",
      "emoji": "🍿",
      "name": "popcorn"
    }, {
      "codes": ["1F96B"],
      "status": "fully-qualified",
      "emoji": "🥫",
      "name": "canned food"
    }]
  }, {
    "name": "food-asian",
    "emojis": [{
      "codes": ["1F371"],
      "status": "fully-qualified",
      "emoji": "🍱",
      "name": "bento box"
    }, {
      "codes": ["1F358"],
      "status": "fully-qualified",
      "emoji": "🍘",
      "name": "rice cracker"
    }, {
      "codes": ["1F359"],
      "status": "fully-qualified",
      "emoji": "🍙",
      "name": "rice ball"
    }, {
      "codes": ["1F35A"],
      "status": "fully-qualified",
      "emoji": "🍚",
      "name": "cooked rice"
    }, {
      "codes": ["1F35B"],
      "status": "fully-qualified",
      "emoji": "🍛",
      "name": "curry rice"
    }, {
      "codes": ["1F35C"],
      "status": "fully-qualified",
      "emoji": "🍜",
      "name": "steaming bowl"
    }, {
      "codes": ["1F35D"],
      "status": "fully-qualified",
      "emoji": "🍝",
      "name": "spaghetti"
    }, {
      "codes": ["1F360"],
      "status": "fully-qualified",
      "emoji": "🍠",
      "name": "roasted sweet potato"
    }, {
      "codes": ["1F362"],
      "status": "fully-qualified",
      "emoji": "🍢",
      "name": "oden"
    }, {
      "codes": ["1F363"],
      "status": "fully-qualified",
      "emoji": "🍣",
      "name": "sushi"
    }, {
      "codes": ["1F364"],
      "status": "fully-qualified",
      "emoji": "🍤",
      "name": "fried shrimp"
    }, {
      "codes": ["1F365"],
      "status": "fully-qualified",
      "emoji": "🍥",
      "name": "fish cake with swirl"
    }, {
      "codes": ["1F361"],
      "status": "fully-qualified",
      "emoji": "🍡",
      "name": "dango"
    }, {
      "codes": ["1F95F"],
      "status": "fully-qualified",
      "emoji": "🥟",
      "name": "dumpling"
    }, {
      "codes": ["1F960"],
      "status": "fully-qualified",
      "emoji": "🥠",
      "name": "fortune cookie"
    }, {
      "codes": ["1F961"],
      "status": "fully-qualified",
      "emoji": "🥡",
      "name": "takeout box"
    }]
  }, {
    "name": "food-sweet",
    "emojis": [{
      "codes": ["1F366"],
      "status": "fully-qualified",
      "emoji": "🍦",
      "name": "soft ice cream"
    }, {
      "codes": ["1F367"],
      "status": "fully-qualified",
      "emoji": "🍧",
      "name": "shaved ice"
    }, {
      "codes": ["1F368"],
      "status": "fully-qualified",
      "emoji": "🍨",
      "name": "ice cream"
    }, {
      "codes": ["1F369"],
      "status": "fully-qualified",
      "emoji": "🍩",
      "name": "doughnut"
    }, {
      "codes": ["1F36A"],
      "status": "fully-qualified",
      "emoji": "🍪",
      "name": "cookie"
    }, {
      "codes": ["1F382"],
      "status": "fully-qualified",
      "emoji": "🎂",
      "name": "birthday cake"
    }, {
      "codes": ["1F370"],
      "status": "fully-qualified",
      "emoji": "🍰",
      "name": "shortcake"
    }, {
      "codes": ["1F967"],
      "status": "fully-qualified",
      "emoji": "🥧",
      "name": "pie"
    }, {
      "codes": ["1F36B"],
      "status": "fully-qualified",
      "emoji": "🍫",
      "name": "chocolate bar"
    }, {
      "codes": ["1F36C"],
      "status": "fully-qualified",
      "emoji": "🍬",
      "name": "candy"
    }, {
      "codes": ["1F36D"],
      "status": "fully-qualified",
      "emoji": "🍭",
      "name": "lollipop"
    }, {
      "codes": ["1F36E"],
      "status": "fully-qualified",
      "emoji": "🍮",
      "name": "custard"
    }, {
      "codes": ["1F36F"],
      "status": "fully-qualified",
      "emoji": "🍯",
      "name": "honey pot"
    }]
  }, {
    "name": "drink",
    "emojis": [{
      "codes": ["1F37C"],
      "status": "fully-qualified",
      "emoji": "🍼",
      "name": "baby bottle"
    }, {
      "codes": ["1F95B"],
      "status": "fully-qualified",
      "emoji": "🥛",
      "name": "glass of milk"
    }, {
      "codes": ["2615"],
      "status": "fully-qualified",
      "emoji": "☕",
      "name": "hot beverage"
    }, {
      "codes": ["1F375"],
      "status": "fully-qualified",
      "emoji": "🍵",
      "name": "teacup without handle"
    }, {
      "codes": ["1F376"],
      "status": "fully-qualified",
      "emoji": "🍶",
      "name": "sake"
    }, {
      "codes": ["1F37E"],
      "status": "fully-qualified",
      "emoji": "🍾",
      "name": "bottle with popping cork"
    }, {
      "codes": ["1F377"],
      "status": "fully-qualified",
      "emoji": "🍷",
      "name": "wine glass"
    }, {
      "codes": ["1F378"],
      "status": "fully-qualified",
      "emoji": "🍸",
      "name": "cocktail glass"
    }, {
      "codes": ["1F379"],
      "status": "fully-qualified",
      "emoji": "🍹",
      "name": "tropical drink"
    }, {
      "codes": ["1F37A"],
      "status": "fully-qualified",
      "emoji": "🍺",
      "name": "beer mug"
    }, {
      "codes": ["1F37B"],
      "status": "fully-qualified",
      "emoji": "🍻",
      "name": "clinking beer mugs"
    }, {
      "codes": ["1F942"],
      "status": "fully-qualified",
      "emoji": "🥂",
      "name": "clinking glasses"
    }, {
      "codes": ["1F943"],
      "status": "fully-qualified",
      "emoji": "🥃",
      "name": "tumbler glass"
    }, {
      "codes": ["1F964"],
      "status": "fully-qualified",
      "emoji": "🥤",
      "name": "cup with straw"
    }]
  }, {
    "name": "dishware",
    "emojis": [{
      "codes": ["1F962"],
      "status": "fully-qualified",
      "emoji": "🥢",
      "name": "chopsticks"
    }, {
      "codes": ["1F37D", "FE0F"],
      "status": "fully-qualified",
      "emoji": "🍽️",
      "name": "fork and knife with plate"
    }, {
      "codes": ["1F37D"],
      "status": "non-fully-qualified",
      "emoji": "🍽",
      "name": "fork and knife with plate"
    }, {
      "codes": ["1F374"],
      "status": "fully-qualified",
      "emoji": "🍴",
      "name": "fork and knife"
    }, {
      "codes": ["1F944"],
      "status": "fully-qualified",
      "emoji": "🥄",
      "name": "spoon"
    }, {
      "codes": ["1F52A"],
      "status": "fully-qualified",
      "emoji": "🔪",
      "name": "kitchen knife"
    }, {
      "codes": ["1F3FA"],
      "status": "fully-qualified",
      "emoji": "🏺",
      "name": "amphora"
    }]
  }]
}, {
  "name": "Travel & Places",
  "subGroups": [{
    "name": "place-map",
    "emojis": [{
      "codes": ["1F30D"],
      "status": "fully-qualified",
      "emoji": "🌍",
      "name": "globe showing Europe-Africa"
    }, {
      "codes": ["1F30E"],
      "status": "fully-qualified",
      "emoji": "🌎",
      "name": "globe showing Americas"
    }, {
      "codes": ["1F30F"],
      "status": "fully-qualified",
      "emoji": "🌏",
      "name": "globe showing Asia-Australia"
    }, {
      "codes": ["1F310"],
      "status": "fully-qualified",
      "emoji": "🌐",
      "name": "globe with meridians"
    }, {
      "codes": ["1F5FA", "FE0F"],
      "status": "fully-qualified",
      "emoji": "🗺️",
      "name": "world map"
    }, {
      "codes": ["1F5FA"],
      "status": "non-fully-qualified",
      "emoji": "🗺",
      "name": "world map"
    }, {
      "codes": ["1F5FE"],
      "status": "fully-qualified",
      "emoji": "🗾",
      "name": "map of Japan"
    }]
  }, {
    "name": "place-geographic",
    "emojis": [{
      "codes": ["1F3D4", "FE0F"],
      "status": "fully-qualified",
      "emoji": "🏔️",
      "name": "snow-capped mountain"
    }, {
      "codes": ["1F3D4"],
      "status": "non-fully-qualified",
      "emoji": "🏔",
      "name": "snow-capped mountain"
    }, {
      "codes": ["26F0", "FE0F"],
      "status": "fully-qualified",
      "emoji": "⛰️",
      "name": "mountain"
    }, {
      "codes": ["26F0"],
      "status": "non-fully-qualified",
      "emoji": "⛰",
      "name": "mountain"
    }, {
      "codes": ["1F30B"],
      "status": "fully-qualified",
      "emoji": "🌋",
      "name": "volcano"
    }, {
      "codes": ["1F5FB"],
      "status": "fully-qualified",
      "emoji": "🗻",
      "name": "mount fuji"
    }, {
      "codes": ["1F3D5", "FE0F"],
      "status": "fully-qualified",
      "emoji": "🏕️",
      "name": "camping"
    }, {
      "codes": ["1F3D5"],
      "status": "non-fully-qualified",
      "emoji": "🏕",
      "name": "camping"
    }, {
      "codes": ["1F3D6", "FE0F"],
      "status": "fully-qualified",
      "emoji": "🏖️",
      "name": "beach with umbrella"
    }, {
      "codes": ["1F3D6"],
      "status": "non-fully-qualified",
      "emoji": "🏖",
      "name": "beach with umbrella"
    }, {
      "codes": ["1F3DC", "FE0F"],
      "status": "fully-qualified",
      "emoji": "🏜️",
      "name": "desert"
    }, {
      "codes": ["1F3DC"],
      "status": "non-fully-qualified",
      "emoji": "🏜",
      "name": "desert"
    }, {
      "codes": ["1F3DD", "FE0F"],
      "status": "fully-qualified",
      "emoji": "🏝️",
      "name": "desert island"
    }, {
      "codes": ["1F3DD"],
      "status": "non-fully-qualified",
      "emoji": "🏝",
      "name": "desert island"
    }, {
      "codes": ["1F3DE", "FE0F"],
      "status": "fully-qualified",
      "emoji": "🏞️",
      "name": "national park"
    }, {
      "codes": ["1F3DE"],
      "status": "non-fully-qualified",
      "emoji": "🏞",
      "name": "national park"
    }]
  }, {
    "name": "place-building",
    "emojis": [{
      "codes": ["1F3DF", "FE0F"],
      "status": "fully-qualified",
      "emoji": "🏟️",
      "name": "stadium"
    }, {
      "codes": ["1F3DF"],
      "status": "non-fully-qualified",
      "emoji": "🏟",
      "name": "stadium"
    }, {
      "codes": ["1F3DB", "FE0F"],
      "status": "fully-qualified",
      "emoji": "🏛️",
      "name": "classical building"
    }, {
      "codes": ["1F3DB"],
      "status": "non-fully-qualified",
      "emoji": "🏛",
      "name": "classical building"
    }, {
      "codes": ["1F3D7", "FE0F"],
      "status": "fully-qualified",
      "emoji": "🏗️",
      "name": "building construction"
    }, {
      "codes": ["1F3D7"],
      "status": "non-fully-qualified",
      "emoji": "🏗",
      "name": "building construction"
    }, {
      "codes": ["1F3D8", "FE0F"],
      "status": "fully-qualified",
      "emoji": "🏘️",
      "name": "houses"
    }, {
      "codes": ["1F3D8"],
      "status": "non-fully-qualified",
      "emoji": "🏘",
      "name": "houses"
    }, {
      "codes": ["1F3D9", "FE0F"],
      "status": "fully-qualified",
      "emoji": "🏙️",
      "name": "cityscape"
    }, {
      "codes": ["1F3D9"],
      "status": "non-fully-qualified",
      "emoji": "🏙",
      "name": "cityscape"
    }, {
      "codes": ["1F3DA", "FE0F"],
      "status": "fully-qualified",
      "emoji": "🏚️",
      "name": "derelict house"
    }, {
      "codes": ["1F3DA"],
      "status": "non-fully-qualified",
      "emoji": "🏚",
      "name": "derelict house"
    }, {
      "codes": ["1F3E0"],
      "status": "fully-qualified",
      "emoji": "🏠",
      "name": "house"
    }, {
      "codes": ["1F3E1"],
      "status": "fully-qualified",
      "emoji": "🏡",
      "name": "house with garden"
    }, {
      "codes": ["1F3E2"],
      "status": "fully-qualified",
      "emoji": "🏢",
      "name": "office building"
    }, {
      "codes": ["1F3E3"],
      "status": "fully-qualified",
      "emoji": "🏣",
      "name": "Japanese post office"
    }, {
      "codes": ["1F3E4"],
      "status": "fully-qualified",
      "emoji": "🏤",
      "name": "post office"
    }, {
      "codes": ["1F3E5"],
      "status": "fully-qualified",
      "emoji": "🏥",
      "name": "hospital"
    }, {
      "codes": ["1F3E6"],
      "status": "fully-qualified",
      "emoji": "🏦",
      "name": "bank"
    }, {
      "codes": ["1F3E8"],
      "status": "fully-qualified",
      "emoji": "🏨",
      "name": "hotel"
    }, {
      "codes": ["1F3E9"],
      "status": "fully-qualified",
      "emoji": "🏩",
      "name": "love hotel"
    }, {
      "codes": ["1F3EA"],
      "status": "fully-qualified",
      "emoji": "🏪",
      "name": "convenience store"
    }, {
      "codes": ["1F3EB"],
      "status": "fully-qualified",
      "emoji": "🏫",
      "name": "school"
    }, {
      "codes": ["1F3EC"],
      "status": "fully-qualified",
      "emoji": "🏬",
      "name": "department store"
    }, {
      "codes": ["1F3ED"],
      "status": "fully-qualified",
      "emoji": "🏭",
      "name": "factory"
    }, {
      "codes": ["1F3EF"],
      "status": "fully-qualified",
      "emoji": "🏯",
      "name": "Japanese castle"
    }, {
      "codes": ["1F3F0"],
      "status": "fully-qualified",
      "emoji": "🏰",
      "name": "castle"
    }, {
      "codes": ["1F492"],
      "status": "fully-qualified",
      "emoji": "💒",
      "name": "wedding"
    }, {
      "codes": ["1F5FC"],
      "status": "fully-qualified",
      "emoji": "🗼",
      "name": "Tokyo tower"
    }, {
      "codes": ["1F5FD"],
      "status": "fully-qualified",
      "emoji": "🗽",
      "name": "Statue of Liberty"
    }]
  }, {
    "name": "place-religious",
    "emojis": [{
      "codes": ["26EA"],
      "status": "fully-qualified",
      "emoji": "⛪",
      "name": "church"
    }, {
      "codes": ["1F54C"],
      "status": "fully-qualified",
      "emoji": "🕌",
      "name": "mosque"
    }, {
      "codes": ["1F54D"],
      "status": "fully-qualified",
      "emoji": "🕍",
      "name": "synagogue"
    }, {
      "codes": ["26E9", "FE0F"],
      "status": "fully-qualified",
      "emoji": "⛩️",
      "name": "shinto shrine"
    }, {
      "codes": ["26E9"],
      "status": "non-fully-qualified",
      "emoji": "⛩",
      "name": "shinto shrine"
    }, {
      "codes": ["1F54B"],
      "status": "fully-qualified",
      "emoji": "🕋",
      "name": "kaaba"
    }]
  }, {
    "name": "place-other",
    "emojis": [{
      "codes": ["26F2"],
      "status": "fully-qualified",
      "emoji": "⛲",
      "name": "fountain"
    }, {
      "codes": ["26FA"],
      "status": "fully-qualified",
      "emoji": "⛺",
      "name": "tent"
    }, {
      "codes": ["1F301"],
      "status": "fully-qualified",
      "emoji": "🌁",
      "name": "foggy"
    }, {
      "codes": ["1F303"],
      "status": "fully-qualified",
      "emoji": "🌃",
      "name": "night with stars"
    }, {
      "codes": ["1F304"],
      "status": "fully-qualified",
      "emoji": "🌄",
      "name": "sunrise over mountains"
    }, {
      "codes": ["1F305"],
      "status": "fully-qualified",
      "emoji": "🌅",
      "name": "sunrise"
    }, {
      "codes": ["1F306"],
      "status": "fully-qualified",
      "emoji": "🌆",
      "name": "cityscape at dusk"
    }, {
      "codes": ["1F307"],
      "status": "fully-qualified",
      "emoji": "🌇",
      "name": "sunset"
    }, {
      "codes": ["1F309"],
      "status": "fully-qualified",
      "emoji": "🌉",
      "name": "bridge at night"
    }, {
      "codes": ["2668", "FE0F"],
      "status": "fully-qualified",
      "emoji": "♨️",
      "name": "hot springs"
    }, {
      "codes": ["2668"],
      "status": "non-fully-qualified",
      "emoji": "♨",
      "name": "hot springs"
    }, {
      "codes": ["1F30C"],
      "status": "fully-qualified",
      "emoji": "🌌",
      "name": "milky way"
    }, {
      "codes": ["1F3A0"],
      "status": "fully-qualified",
      "emoji": "🎠",
      "name": "carousel horse"
    }, {
      "codes": ["1F3A1"],
      "status": "fully-qualified",
      "emoji": "🎡",
      "name": "ferris wheel"
    }, {
      "codes": ["1F3A2"],
      "status": "fully-qualified",
      "emoji": "🎢",
      "name": "roller coaster"
    }, {
      "codes": ["1F488"],
      "status": "fully-qualified",
      "emoji": "💈",
      "name": "barber pole"
    }, {
      "codes": ["1F3AA"],
      "status": "fully-qualified",
      "emoji": "🎪",
      "name": "circus tent"
    }, {
      "codes": ["1F3AD"],
      "status": "fully-qualified",
      "emoji": "🎭",
      "name": "performing arts"
    }, {
      "codes": ["1F5BC", "FE0F"],
      "status": "fully-qualified",
      "emoji": "🖼️",
      "name": "framed picture"
    }, {
      "codes": ["1F5BC"],
      "status": "non-fully-qualified",
      "emoji": "🖼",
      "name": "framed picture"
    }, {
      "codes": ["1F3A8"],
      "status": "fully-qualified",
      "emoji": "🎨",
      "name": "artist palette"
    }, {
      "codes": ["1F3B0"],
      "status": "fully-qualified",
      "emoji": "🎰",
      "name": "slot machine"
    }]
  }, {
    "name": "transport-ground",
    "emojis": [{
      "codes": ["1F682"],
      "status": "fully-qualified",
      "emoji": "🚂",
      "name": "locomotive"
    }, {
      "codes": ["1F683"],
      "status": "fully-qualified",
      "emoji": "🚃",
      "name": "railway car"
    }, {
      "codes": ["1F684"],
      "status": "fully-qualified",
      "emoji": "🚄",
      "name": "high-speed train"
    }, {
      "codes": ["1F685"],
      "status": "fully-qualified",
      "emoji": "🚅",
      "name": "bullet train"
    }, {
      "codes": ["1F686"],
      "status": "fully-qualified",
      "emoji": "🚆",
      "name": "train"
    }, {
      "codes": ["1F687"],
      "status": "fully-qualified",
      "emoji": "🚇",
      "name": "metro"
    }, {
      "codes": ["1F688"],
      "status": "fully-qualified",
      "emoji": "🚈",
      "name": "light rail"
    }, {
      "codes": ["1F689"],
      "status": "fully-qualified",
      "emoji": "🚉",
      "name": "station"
    }, {
      "codes": ["1F68A"],
      "status": "fully-qualified",
      "emoji": "🚊",
      "name": "tram"
    }, {
      "codes": ["1F69D"],
      "status": "fully-qualified",
      "emoji": "🚝",
      "name": "monorail"
    }, {
      "codes": ["1F69E"],
      "status": "fully-qualified",
      "emoji": "🚞",
      "name": "mountain railway"
    }, {
      "codes": ["1F68B"],
      "status": "fully-qualified",
      "emoji": "🚋",
      "name": "tram car"
    }, {
      "codes": ["1F68C"],
      "status": "fully-qualified",
      "emoji": "🚌",
      "name": "bus"
    }, {
      "codes": ["1F68D"],
      "status": "fully-qualified",
      "emoji": "🚍",
      "name": "oncoming bus"
    }, {
      "codes": ["1F68E"],
      "status": "fully-qualified",
      "emoji": "🚎",
      "name": "trolleybus"
    }, {
      "codes": ["1F690"],
      "status": "fully-qualified",
      "emoji": "🚐",
      "name": "minibus"
    }, {
      "codes": ["1F691"],
      "status": "fully-qualified",
      "emoji": "🚑",
      "name": "ambulance"
    }, {
      "codes": ["1F692"],
      "status": "fully-qualified",
      "emoji": "🚒",
      "name": "fire engine"
    }, {
      "codes": ["1F693"],
      "status": "fully-qualified",
      "emoji": "🚓",
      "name": "police car"
    }, {
      "codes": ["1F694"],
      "status": "fully-qualified",
      "emoji": "🚔",
      "name": "oncoming police car"
    }, {
      "codes": ["1F695"],
      "status": "fully-qualified",
      "emoji": "🚕",
      "name": "taxi"
    }, {
      "codes": ["1F696"],
      "status": "fully-qualified",
      "emoji": "🚖",
      "name": "oncoming taxi"
    }, {
      "codes": ["1F697"],
      "status": "fully-qualified",
      "emoji": "🚗",
      "name": "automobile"
    }, {
      "codes": ["1F698"],
      "status": "fully-qualified",
      "emoji": "🚘",
      "name": "oncoming automobile"
    }, {
      "codes": ["1F699"],
      "status": "fully-qualified",
      "emoji": "🚙",
      "name": "sport utility vehicle"
    }, {
      "codes": ["1F69A"],
      "status": "fully-qualified",
      "emoji": "🚚",
      "name": "delivery truck"
    }, {
      "codes": ["1F69B"],
      "status": "fully-qualified",
      "emoji": "🚛",
      "name": "articulated lorry"
    }, {
      "codes": ["1F69C"],
      "status": "fully-qualified",
      "emoji": "🚜",
      "name": "tractor"
    }, {
      "codes": ["1F6B2"],
      "status": "fully-qualified",
      "emoji": "🚲",
      "name": "bicycle"
    }, {
      "codes": ["1F6F4"],
      "status": "fully-qualified",
      "emoji": "🛴",
      "name": "kick scooter"
    }, {
      "codes": ["1F6F5"],
      "status": "fully-qualified",
      "emoji": "🛵",
      "name": "motor scooter"
    }, {
      "codes": ["1F68F"],
      "status": "fully-qualified",
      "emoji": "🚏",
      "name": "bus stop"
    }, {
      "codes": ["1F6E3", "FE0F"],
      "status": "fully-qualified",
      "emoji": "🛣️",
      "name": "motorway"
    }, {
      "codes": ["1F6E3"],
      "status": "non-fully-qualified",
      "emoji": "🛣",
      "name": "motorway"
    }, {
      "codes": ["1F6E4", "FE0F"],
      "status": "fully-qualified",
      "emoji": "🛤️",
      "name": "railway track"
    }, {
      "codes": ["1F6E4"],
      "status": "non-fully-qualified",
      "emoji": "🛤",
      "name": "railway track"
    }, {
      "codes": ["26FD"],
      "status": "fully-qualified",
      "emoji": "⛽",
      "name": "fuel pump"
    }, {
      "codes": ["1F6A8"],
      "status": "fully-qualified",
      "emoji": "🚨",
      "name": "police car light"
    }, {
      "codes": ["1F6A5"],
      "status": "fully-qualified",
      "emoji": "🚥",
      "name": "horizontal traffic light"
    }, {
      "codes": ["1F6A6"],
      "status": "fully-qualified",
      "emoji": "🚦",
      "name": "vertical traffic light"
    }, {
      "codes": ["1F6A7"],
      "status": "fully-qualified",
      "emoji": "🚧",
      "name": "construction"
    }, {
      "codes": ["1F6D1"],
      "status": "fully-qualified",
      "emoji": "🛑",
      "name": "stop sign"
    }]
  }, {
    "name": "transport-water",
    "emojis": [{
      "codes": ["2693"],
      "status": "fully-qualified",
      "emoji": "⚓",
      "name": "anchor"
    }, {
      "codes": ["26F5"],
      "status": "fully-qualified",
      "emoji": "⛵",
      "name": "sailboat"
    }, {
      "codes": ["1F6F6"],
      "status": "fully-qualified",
      "emoji": "🛶",
      "name": "canoe"
    }, {
      "codes": ["1F6A4"],
      "status": "fully-qualified",
      "emoji": "🚤",
      "name": "speedboat"
    }, {
      "codes": ["1F6F3", "FE0F"],
      "status": "fully-qualified",
      "emoji": "🛳️",
      "name": "passenger ship"
    }, {
      "codes": ["1F6F3"],
      "status": "non-fully-qualified",
      "emoji": "🛳",
      "name": "passenger ship"
    }, {
      "codes": ["26F4", "FE0F"],
      "status": "fully-qualified",
      "emoji": "⛴️",
      "name": "ferry"
    }, {
      "codes": ["26F4"],
      "status": "non-fully-qualified",
      "emoji": "⛴",
      "name": "ferry"
    }, {
      "codes": ["1F6E5", "FE0F"],
      "status": "fully-qualified",
      "emoji": "🛥️",
      "name": "motor boat"
    }, {
      "codes": ["1F6E5"],
      "status": "non-fully-qualified",
      "emoji": "🛥",
      "name": "motor boat"
    }, {
      "codes": ["1F6A2"],
      "status": "fully-qualified",
      "emoji": "🚢",
      "name": "ship"
    }]
  }, {
    "name": "transport-air",
    "emojis": [{
      "codes": ["2708", "FE0F"],
      "status": "fully-qualified",
      "emoji": "✈️",
      "name": "airplane"
    }, {
      "codes": ["2708"],
      "status": "non-fully-qualified",
      "emoji": "✈",
      "name": "airplane"
    }, {
      "codes": ["1F6E9", "FE0F"],
      "status": "fully-qualified",
      "emoji": "🛩️",
      "name": "small airplane"
    }, {
      "codes": ["1F6E9"],
      "status": "non-fully-qualified",
      "emoji": "🛩",
      "name": "small airplane"
    }, {
      "codes": ["1F6EB"],
      "status": "fully-qualified",
      "emoji": "🛫",
      "name": "airplane departure"
    }, {
      "codes": ["1F6EC"],
      "status": "fully-qualified",
      "emoji": "🛬",
      "name": "airplane arrival"
    }, {
      "codes": ["1F4BA"],
      "status": "fully-qualified",
      "emoji": "💺",
      "name": "seat"
    }, {
      "codes": ["1F681"],
      "status": "fully-qualified",
      "emoji": "🚁",
      "name": "helicopter"
    }, {
      "codes": ["1F69F"],
      "status": "fully-qualified",
      "emoji": "🚟",
      "name": "suspension railway"
    }, {
      "codes": ["1F6A0"],
      "status": "fully-qualified",
      "emoji": "🚠",
      "name": "mountain cableway"
    }, {
      "codes": ["1F6A1"],
      "status": "fully-qualified",
      "emoji": "🚡",
      "name": "aerial tramway"
    }, {
      "codes": ["1F6F0", "FE0F"],
      "status": "fully-qualified",
      "emoji": "🛰️",
      "name": "satellite"
    }, {
      "codes": ["1F6F0"],
      "status": "non-fully-qualified",
      "emoji": "🛰",
      "name": "satellite"
    }, {
      "codes": ["1F680"],
      "status": "fully-qualified",
      "emoji": "🚀",
      "name": "rocket"
    }, {
      "codes": ["1F6F8"],
      "status": "fully-qualified",
      "emoji": "🛸",
      "name": "flying saucer"
    }]
  }, {
    "name": "hotel",
    "emojis": [{
      "codes": ["1F6CE", "FE0F"],
      "status": "fully-qualified",
      "emoji": "🛎️",
      "name": "bellhop bell"
    }, {
      "codes": ["1F6CE"],
      "status": "non-fully-qualified",
      "emoji": "🛎",
      "name": "bellhop bell"
    }, {
      "codes": ["1F6AA"],
      "status": "fully-qualified",
      "emoji": "🚪",
      "name": "door"
    }, {
      "codes": ["1F6CF", "FE0F"],
      "status": "fully-qualified",
      "emoji": "🛏️",
      "name": "bed"
    }, {
      "codes": ["1F6CF"],
      "status": "non-fully-qualified",
      "emoji": "🛏",
      "name": "bed"
    }, {
      "codes": ["1F6CB", "FE0F"],
      "status": "fully-qualified",
      "emoji": "🛋️",
      "name": "couch and lamp"
    }, {
      "codes": ["1F6CB"],
      "status": "non-fully-qualified",
      "emoji": "🛋",
      "name": "couch and lamp"
    }, {
      "codes": ["1F6BD"],
      "status": "fully-qualified",
      "emoji": "🚽",
      "name": "toilet"
    }, {
      "codes": ["1F6BF"],
      "status": "fully-qualified",
      "emoji": "🚿",
      "name": "shower"
    }, {
      "codes": ["1F6C1"],
      "status": "fully-qualified",
      "emoji": "🛁",
      "name": "bathtub"
    }]
  }, {
    "name": "time",
    "emojis": [{
      "codes": ["231B"],
      "status": "fully-qualified",
      "emoji": "⌛",
      "name": "hourglass done"
    }, {
      "codes": ["23F3"],
      "status": "fully-qualified",
      "emoji": "⏳",
      "name": "hourglass not done"
    }, {
      "codes": ["231A"],
      "status": "fully-qualified",
      "emoji": "⌚",
      "name": "watch"
    }, {
      "codes": ["23F0"],
      "status": "fully-qualified",
      "emoji": "⏰",
      "name": "alarm clock"
    }, {
      "codes": ["23F1", "FE0F"],
      "status": "fully-qualified",
      "emoji": "⏱️",
      "name": "stopwatch"
    }, {
      "codes": ["23F1"],
      "status": "non-fully-qualified",
      "emoji": "⏱",
      "name": "stopwatch"
    }, {
      "codes": ["23F2", "FE0F"],
      "status": "fully-qualified",
      "emoji": "⏲️",
      "name": "timer clock"
    }, {
      "codes": ["23F2"],
      "status": "non-fully-qualified",
      "emoji": "⏲",
      "name": "timer clock"
    }, {
      "codes": ["1F570", "FE0F"],
      "status": "fully-qualified",
      "emoji": "🕰️",
      "name": "mantelpiece clock"
    }, {
      "codes": ["1F570"],
      "status": "non-fully-qualified",
      "emoji": "🕰",
      "name": "mantelpiece clock"
    }, {
      "codes": ["1F55B"],
      "status": "fully-qualified",
      "emoji": "🕛",
      "name": "twelve o’clock"
    }, {
      "codes": ["1F567"],
      "status": "fully-qualified",
      "emoji": "🕧",
      "name": "twelve-thirty"
    }, {
      "codes": ["1F550"],
      "status": "fully-qualified",
      "emoji": "🕐",
      "name": "one o’clock"
    }, {
      "codes": ["1F55C"],
      "status": "fully-qualified",
      "emoji": "🕜",
      "name": "one-thirty"
    }, {
      "codes": ["1F551"],
      "status": "fully-qualified",
      "emoji": "🕑",
      "name": "two o’clock"
    }, {
      "codes": ["1F55D"],
      "status": "fully-qualified",
      "emoji": "🕝",
      "name": "two-thirty"
    }, {
      "codes": ["1F552"],
      "status": "fully-qualified",
      "emoji": "🕒",
      "name": "three o’clock"
    }, {
      "codes": ["1F55E"],
      "status": "fully-qualified",
      "emoji": "🕞",
      "name": "three-thirty"
    }, {
      "codes": ["1F553"],
      "status": "fully-qualified",
      "emoji": "🕓",
      "name": "four o’clock"
    }, {
      "codes": ["1F55F"],
      "status": "fully-qualified",
      "emoji": "🕟",
      "name": "four-thirty"
    }, {
      "codes": ["1F554"],
      "status": "fully-qualified",
      "emoji": "🕔",
      "name": "five o’clock"
    }, {
      "codes": ["1F560"],
      "status": "fully-qualified",
      "emoji": "🕠",
      "name": "five-thirty"
    }, {
      "codes": ["1F555"],
      "status": "fully-qualified",
      "emoji": "🕕",
      "name": "six o’clock"
    }, {
      "codes": ["1F561"],
      "status": "fully-qualified",
      "emoji": "🕡",
      "name": "six-thirty"
    }, {
      "codes": ["1F556"],
      "status": "fully-qualified",
      "emoji": "🕖",
      "name": "seven o’clock"
    }, {
      "codes": ["1F562"],
      "status": "fully-qualified",
      "emoji": "🕢",
      "name": "seven-thirty"
    }, {
      "codes": ["1F557"],
      "status": "fully-qualified",
      "emoji": "🕗",
      "name": "eight o’clock"
    }, {
      "codes": ["1F563"],
      "status": "fully-qualified",
      "emoji": "🕣",
      "name": "eight-thirty"
    }, {
      "codes": ["1F558"],
      "status": "fully-qualified",
      "emoji": "🕘",
      "name": "nine o’clock"
    }, {
      "codes": ["1F564"],
      "status": "fully-qualified",
      "emoji": "🕤",
      "name": "nine-thirty"
    }, {
      "codes": ["1F559"],
      "status": "fully-qualified",
      "emoji": "🕙",
      "name": "ten o’clock"
    }, {
      "codes": ["1F565"],
      "status": "fully-qualified",
      "emoji": "🕥",
      "name": "ten-thirty"
    }, {
      "codes": ["1F55A"],
      "status": "fully-qualified",
      "emoji": "🕚",
      "name": "eleven o’clock"
    }, {
      "codes": ["1F566"],
      "status": "fully-qualified",
      "emoji": "🕦",
      "name": "eleven-thirty"
    }]
  }, {
    "name": "sky & weather",
    "emojis": [{
      "codes": ["1F311"],
      "status": "fully-qualified",
      "emoji": "🌑",
      "name": "new moon"
    }, {
      "codes": ["1F312"],
      "status": "fully-qualified",
      "emoji": "🌒",
      "name": "waxing crescent moon"
    }, {
      "codes": ["1F313"],
      "status": "fully-qualified",
      "emoji": "🌓",
      "name": "first quarter moon"
    }, {
      "codes": ["1F314"],
      "status": "fully-qualified",
      "emoji": "🌔",
      "name": "waxing gibbous moon"
    }, {
      "codes": ["1F315"],
      "status": "fully-qualified",
      "emoji": "🌕",
      "name": "full moon"
    }, {
      "codes": ["1F316"],
      "status": "fully-qualified",
      "emoji": "🌖",
      "name": "waning gibbous moon"
    }, {
      "codes": ["1F317"],
      "status": "fully-qualified",
      "emoji": "🌗",
      "name": "last quarter moon"
    }, {
      "codes": ["1F318"],
      "status": "fully-qualified",
      "emoji": "🌘",
      "name": "waning crescent moon"
    }, {
      "codes": ["1F319"],
      "status": "fully-qualified",
      "emoji": "🌙",
      "name": "crescent moon"
    }, {
      "codes": ["1F31A"],
      "status": "fully-qualified",
      "emoji": "🌚",
      "name": "new moon face"
    }, {
      "codes": ["1F31B"],
      "status": "fully-qualified",
      "emoji": "🌛",
      "name": "first quarter moon face"
    }, {
      "codes": ["1F31C"],
      "status": "fully-qualified",
      "emoji": "🌜",
      "name": "last quarter moon face"
    }, {
      "codes": ["1F321", "FE0F"],
      "status": "fully-qualified",
      "emoji": "🌡️",
      "name": "thermometer"
    }, {
      "codes": ["1F321"],
      "status": "non-fully-qualified",
      "emoji": "🌡",
      "name": "thermometer"
    }, {
      "codes": ["2600", "FE0F"],
      "status": "fully-qualified",
      "emoji": "☀️",
      "name": "sun"
    }, {
      "codes": ["2600"],
      "status": "non-fully-qualified",
      "emoji": "☀",
      "name": "sun"
    }, {
      "codes": ["1F31D"],
      "status": "fully-qualified",
      "emoji": "🌝",
      "name": "full moon face"
    }, {
      "codes": ["1F31E"],
      "status": "fully-qualified",
      "emoji": "🌞",
      "name": "sun with face"
    }, {
      "codes": ["2B50"],
      "status": "fully-qualified",
      "emoji": "⭐",
      "name": "white medium star"
    }, {
      "codes": ["1F31F"],
      "status": "fully-qualified",
      "emoji": "🌟",
      "name": "glowing star"
    }, {
      "codes": ["1F320"],
      "status": "fully-qualified",
      "emoji": "🌠",
      "name": "shooting star"
    }, {
      "codes": ["2601", "FE0F"],
      "status": "fully-qualified",
      "emoji": "☁️",
      "name": "cloud"
    }, {
      "codes": ["2601"],
      "status": "non-fully-qualified",
      "emoji": "☁",
      "name": "cloud"
    }, {
      "codes": ["26C5"],
      "status": "fully-qualified",
      "emoji": "⛅",
      "name": "sun behind cloud"
    }, {
      "codes": ["26C8", "FE0F"],
      "status": "fully-qualified",
      "emoji": "⛈️",
      "name": "cloud with lightning and rain"
    }, {
      "codes": ["26C8"],
      "status": "non-fully-qualified",
      "emoji": "⛈",
      "name": "cloud with lightning and rain"
    }, {
      "codes": ["1F324", "FE0F"],
      "status": "fully-qualified",
      "emoji": "🌤️",
      "name": "sun behind small cloud"
    }, {
      "codes": ["1F324"],
      "status": "non-fully-qualified",
      "emoji": "🌤",
      "name": "sun behind small cloud"
    }, {
      "codes": ["1F325", "FE0F"],
      "status": "fully-qualified",
      "emoji": "🌥️",
      "name": "sun behind large cloud"
    }, {
      "codes": ["1F325"],
      "status": "non-fully-qualified",
      "emoji": "🌥",
      "name": "sun behind large cloud"
    }, {
      "codes": ["1F326", "FE0F"],
      "status": "fully-qualified",
      "emoji": "🌦️",
      "name": "sun behind rain cloud"
    }, {
      "codes": ["1F326"],
      "status": "non-fully-qualified",
      "emoji": "🌦",
      "name": "sun behind rain cloud"
    }, {
      "codes": ["1F327", "FE0F"],
      "status": "fully-qualified",
      "emoji": "🌧️",
      "name": "cloud with rain"
    }, {
      "codes": ["1F327"],
      "status": "non-fully-qualified",
      "emoji": "🌧",
      "name": "cloud with rain"
    }, {
      "codes": ["1F328", "FE0F"],
      "status": "fully-qualified",
      "emoji": "🌨️",
      "name": "cloud with snow"
    }, {
      "codes": ["1F328"],
      "status": "non-fully-qualified",
      "emoji": "🌨",
      "name": "cloud with snow"
    }, {
      "codes": ["1F329", "FE0F"],
      "status": "fully-qualified",
      "emoji": "🌩️",
      "name": "cloud with lightning"
    }, {
      "codes": ["1F329"],
      "status": "non-fully-qualified",
      "emoji": "🌩",
      "name": "cloud with lightning"
    }, {
      "codes": ["1F32A", "FE0F"],
      "status": "fully-qualified",
      "emoji": "🌪️",
      "name": "tornado"
    }, {
      "codes": ["1F32A"],
      "status": "non-fully-qualified",
      "emoji": "🌪",
      "name": "tornado"
    }, {
      "codes": ["1F32B", "FE0F"],
      "status": "fully-qualified",
      "emoji": "🌫️",
      "name": "fog"
    }, {
      "codes": ["1F32B"],
      "status": "non-fully-qualified",
      "emoji": "🌫",
      "name": "fog"
    }, {
      "codes": ["1F32C", "FE0F"],
      "status": "fully-qualified",
      "emoji": "🌬️",
      "name": "wind face"
    }, {
      "codes": ["1F32C"],
      "status": "non-fully-qualified",
      "emoji": "🌬",
      "name": "wind face"
    }, {
      "codes": ["1F300"],
      "status": "fully-qualified",
      "emoji": "🌀",
      "name": "cyclone"
    }, {
      "codes": ["1F308"],
      "status": "fully-qualified",
      "emoji": "🌈",
      "name": "rainbow"
    }, {
      "codes": ["1F302"],
      "status": "fully-qualified",
      "emoji": "🌂",
      "name": "closed umbrella"
    }, {
      "codes": ["2602", "FE0F"],
      "status": "fully-qualified",
      "emoji": "☂️",
      "name": "umbrella"
    }, {
      "codes": ["2602"],
      "status": "non-fully-qualified",
      "emoji": "☂",
      "name": "umbrella"
    }, {
      "codes": ["2614"],
      "status": "fully-qualified",
      "emoji": "☔",
      "name": "umbrella with rain drops"
    }, {
      "codes": ["26F1", "FE0F"],
      "status": "fully-qualified",
      "emoji": "⛱️",
      "name": "umbrella on ground"
    }, {
      "codes": ["26F1"],
      "status": "non-fully-qualified",
      "emoji": "⛱",
      "name": "umbrella on ground"
    }, {
      "codes": ["26A1"],
      "status": "fully-qualified",
      "emoji": "⚡",
      "name": "high voltage"
    }, {
      "codes": ["2744", "FE0F"],
      "status": "fully-qualified",
      "emoji": "❄️",
      "name": "snowflake"
    }, {
      "codes": ["2744"],
      "status": "non-fully-qualified",
      "emoji": "❄",
      "name": "snowflake"
    }, {
      "codes": ["2603", "FE0F"],
      "status": "fully-qualified",
      "emoji": "☃️",
      "name": "snowman"
    }, {
      "codes": ["2603"],
      "status": "non-fully-qualified",
      "emoji": "☃",
      "name": "snowman"
    }, {
      "codes": ["26C4"],
      "status": "fully-qualified",
      "emoji": "⛄",
      "name": "snowman without snow"
    }, {
      "codes": ["2604", "FE0F"],
      "status": "fully-qualified",
      "emoji": "☄️",
      "name": "comet"
    }, {
      "codes": ["2604"],
      "status": "non-fully-qualified",
      "emoji": "☄",
      "name": "comet"
    }, {
      "codes": ["1F525"],
      "status": "fully-qualified",
      "emoji": "🔥",
      "name": "fire"
    }, {
      "codes": ["1F4A7"],
      "status": "fully-qualified",
      "emoji": "💧",
      "name": "droplet"
    }, {
      "codes": ["1F30A"],
      "status": "fully-qualified",
      "emoji": "🌊",
      "name": "water wave"
    }]
  }]
}, {
  "name": "Activities",
  "subGroups": [{
    "name": "event",
    "emojis": [{
      "codes": ["1F383"],
      "status": "fully-qualified",
      "emoji": "🎃",
      "name": "jack-o-lantern"
    }, {
      "codes": ["1F384"],
      "status": "fully-qualified",
      "emoji": "🎄",
      "name": "Christmas tree"
    }, {
      "codes": ["1F386"],
      "status": "fully-qualified",
      "emoji": "🎆",
      "name": "fireworks"
    }, {
      "codes": ["1F387"],
      "status": "fully-qualified",
      "emoji": "🎇",
      "name": "sparkler"
    }, {
      "codes": ["2728"],
      "status": "fully-qualified",
      "emoji": "✨",
      "name": "sparkles"
    }, {
      "codes": ["1F388"],
      "status": "fully-qualified",
      "emoji": "🎈",
      "name": "balloon"
    }, {
      "codes": ["1F389"],
      "status": "fully-qualified",
      "emoji": "🎉",
      "name": "party popper"
    }, {
      "codes": ["1F38A"],
      "status": "fully-qualified",
      "emoji": "🎊",
      "name": "confetti ball"
    }, {
      "codes": ["1F38B"],
      "status": "fully-qualified",
      "emoji": "🎋",
      "name": "tanabata tree"
    }, {
      "codes": ["1F38D"],
      "status": "fully-qualified",
      "emoji": "🎍",
      "name": "pine decoration"
    }, {
      "codes": ["1F38E"],
      "status": "fully-qualified",
      "emoji": "🎎",
      "name": "Japanese dolls"
    }, {
      "codes": ["1F38F"],
      "status": "fully-qualified",
      "emoji": "🎏",
      "name": "carp streamer"
    }, {
      "codes": ["1F390"],
      "status": "fully-qualified",
      "emoji": "🎐",
      "name": "wind chime"
    }, {
      "codes": ["1F391"],
      "status": "fully-qualified",
      "emoji": "🎑",
      "name": "moon viewing ceremony"
    }, {
      "codes": ["1F380"],
      "status": "fully-qualified",
      "emoji": "🎀",
      "name": "ribbon"
    }, {
      "codes": ["1F381"],
      "status": "fully-qualified",
      "emoji": "🎁",
      "name": "wrapped gift"
    }, {
      "codes": ["1F397", "FE0F"],
      "status": "fully-qualified",
      "emoji": "🎗️",
      "name": "reminder ribbon"
    }, {
      "codes": ["1F397"],
      "status": "non-fully-qualified",
      "emoji": "🎗",
      "name": "reminder ribbon"
    }, {
      "codes": ["1F39F", "FE0F"],
      "status": "fully-qualified",
      "emoji": "🎟️",
      "name": "admission tickets"
    }, {
      "codes": ["1F39F"],
      "status": "non-fully-qualified",
      "emoji": "🎟",
      "name": "admission tickets"
    }, {
      "codes": ["1F3AB"],
      "status": "fully-qualified",
      "emoji": "🎫",
      "name": "ticket"
    }]
  }, {
    "name": "award-medal",
    "emojis": [{
      "codes": ["1F396", "FE0F"],
      "status": "fully-qualified",
      "emoji": "🎖️",
      "name": "military medal"
    }, {
      "codes": ["1F396"],
      "status": "non-fully-qualified",
      "emoji": "🎖",
      "name": "military medal"
    }, {
      "codes": ["1F3C6"],
      "status": "fully-qualified",
      "emoji": "🏆",
      "name": "trophy"
    }, {
      "codes": ["1F3C5"],
      "status": "fully-qualified",
      "emoji": "🏅",
      "name": "sports medal"
    }, {
      "codes": ["1F947"],
      "status": "fully-qualified",
      "emoji": "🥇",
      "name": "1st place medal"
    }, {
      "codes": ["1F948"],
      "status": "fully-qualified",
      "emoji": "🥈",
      "name": "2nd place medal"
    }, {
      "codes": ["1F949"],
      "status": "fully-qualified",
      "emoji": "🥉",
      "name": "3rd place medal"
    }]
  }, {
    "name": "sport",
    "emojis": [{
      "codes": ["26BD"],
      "status": "fully-qualified",
      "emoji": "⚽",
      "name": "soccer ball"
    }, {
      "codes": ["26BE"],
      "status": "fully-qualified",
      "emoji": "⚾",
      "name": "baseball"
    }, {
      "codes": ["1F3C0"],
      "status": "fully-qualified",
      "emoji": "🏀",
      "name": "basketball"
    }, {
      "codes": ["1F3D0"],
      "status": "fully-qualified",
      "emoji": "🏐",
      "name": "volleyball"
    }, {
      "codes": ["1F3C8"],
      "status": "fully-qualified",
      "emoji": "🏈",
      "name": "american football"
    }, {
      "codes": ["1F3C9"],
      "status": "fully-qualified",
      "emoji": "🏉",
      "name": "rugby football"
    }, {
      "codes": ["1F3BE"],
      "status": "fully-qualified",
      "emoji": "🎾",
      "name": "tennis"
    }, {
      "codes": ["1F3B1"],
      "status": "fully-qualified",
      "emoji": "🎱",
      "name": "pool 8 ball"
    }, {
      "codes": ["1F3B3"],
      "status": "fully-qualified",
      "emoji": "🎳",
      "name": "bowling"
    }, {
      "codes": ["1F3CF"],
      "status": "fully-qualified",
      "emoji": "🏏",
      "name": "cricket game"
    }, {
      "codes": ["1F3D1"],
      "status": "fully-qualified",
      "emoji": "🏑",
      "name": "field hockey"
    }, {
      "codes": ["1F3D2"],
      "status": "fully-qualified",
      "emoji": "🏒",
      "name": "ice hockey"
    }, {
      "codes": ["1F3D3"],
      "status": "fully-qualified",
      "emoji": "🏓",
      "name": "ping pong"
    }, {
      "codes": ["1F3F8"],
      "status": "fully-qualified",
      "emoji": "🏸",
      "name": "badminton"
    }, {
      "codes": ["1F94A"],
      "status": "fully-qualified",
      "emoji": "🥊",
      "name": "boxing glove"
    }, {
      "codes": ["1F94B"],
      "status": "fully-qualified",
      "emoji": "🥋",
      "name": "martial arts uniform"
    }, {
      "codes": ["1F945"],
      "status": "fully-qualified",
      "emoji": "🥅",
      "name": "goal net"
    }, {
      "codes": ["1F3AF"],
      "status": "fully-qualified",
      "emoji": "🎯",
      "name": "direct hit"
    }, {
      "codes": ["26F3"],
      "status": "fully-qualified",
      "emoji": "⛳",
      "name": "flag in hole"
    }, {
      "codes": ["26F8", "FE0F"],
      "status": "fully-qualified",
      "emoji": "⛸️",
      "name": "ice skate"
    }, {
      "codes": ["26F8"],
      "status": "non-fully-qualified",
      "emoji": "⛸",
      "name": "ice skate"
    }, {
      "codes": ["1F3A3"],
      "status": "fully-qualified",
      "emoji": "🎣",
      "name": "fishing pole"
    }, {
      "codes": ["1F3BD"],
      "status": "fully-qualified",
      "emoji": "🎽",
      "name": "running shirt"
    }, {
      "codes": ["1F3BF"],
      "status": "fully-qualified",
      "emoji": "🎿",
      "name": "skis"
    }, {
      "codes": ["1F6F7"],
      "status": "fully-qualified",
      "emoji": "🛷",
      "name": "sled"
    }, {
      "codes": ["1F94C"],
      "status": "fully-qualified",
      "emoji": "🥌",
      "name": "curling stone"
    }]
  }, {
    "name": "game",
    "emojis": [{
      "codes": ["1F3AE"],
      "status": "fully-qualified",
      "emoji": "🎮",
      "name": "video game"
    }, {
      "codes": ["1F579", "FE0F"],
      "status": "fully-qualified",
      "emoji": "🕹️",
      "name": "joystick"
    }, {
      "codes": ["1F579"],
      "status": "non-fully-qualified",
      "emoji": "🕹",
      "name": "joystick"
    }, {
      "codes": ["1F3B2"],
      "status": "fully-qualified",
      "emoji": "🎲",
      "name": "game die"
    }, {
      "codes": ["2660", "FE0F"],
      "status": "fully-qualified",
      "emoji": "♠️",
      "name": "spade suit"
    }, {
      "codes": ["2660"],
      "status": "non-fully-qualified",
      "emoji": "♠",
      "name": "spade suit"
    }, {
      "codes": ["2665", "FE0F"],
      "status": "fully-qualified",
      "emoji": "♥️",
      "name": "heart suit"
    }, {
      "codes": ["2665"],
      "status": "non-fully-qualified",
      "emoji": "♥",
      "name": "heart suit"
    }, {
      "codes": ["2666", "FE0F"],
      "status": "fully-qualified",
      "emoji": "♦️",
      "name": "diamond suit"
    }, {
      "codes": ["2666"],
      "status": "non-fully-qualified",
      "emoji": "♦",
      "name": "diamond suit"
    }, {
      "codes": ["2663", "FE0F"],
      "status": "fully-qualified",
      "emoji": "♣️",
      "name": "club suit"
    }, {
      "codes": ["2663"],
      "status": "non-fully-qualified",
      "emoji": "♣",
      "name": "club suit"
    }, {
      "codes": ["1F0CF"],
      "status": "fully-qualified",
      "emoji": "🃏",
      "name": "joker"
    }, {
      "codes": ["1F004"],
      "status": "fully-qualified",
      "emoji": "🀄",
      "name": "mahjong red dragon"
    }, {
      "codes": ["1F3B4"],
      "status": "fully-qualified",
      "emoji": "🎴",
      "name": "flower playing cards"
    }]
  }]
}, {
  "name": "Objects",
  "subGroups": [{
    "name": "sound",
    "emojis": [{
      "codes": ["1F507"],
      "status": "fully-qualified",
      "emoji": "🔇",
      "name": "muted speaker"
    }, {
      "codes": ["1F508"],
      "status": "fully-qualified",
      "emoji": "🔈",
      "name": "speaker low volume"
    }, {
      "codes": ["1F509"],
      "status": "fully-qualified",
      "emoji": "🔉",
      "name": "speaker medium volume"
    }, {
      "codes": ["1F50A"],
      "status": "fully-qualified",
      "emoji": "🔊",
      "name": "speaker high volume"
    }, {
      "codes": ["1F4E2"],
      "status": "fully-qualified",
      "emoji": "📢",
      "name": "loudspeaker"
    }, {
      "codes": ["1F4E3"],
      "status": "fully-qualified",
      "emoji": "📣",
      "name": "megaphone"
    }, {
      "codes": ["1F4EF"],
      "status": "fully-qualified",
      "emoji": "📯",
      "name": "postal horn"
    }, {
      "codes": ["1F514"],
      "status": "fully-qualified",
      "emoji": "🔔",
      "name": "bell"
    }, {
      "codes": ["1F515"],
      "status": "fully-qualified",
      "emoji": "🔕",
      "name": "bell with slash"
    }]
  }, {
    "name": "music",
    "emojis": [{
      "codes": ["1F3BC"],
      "status": "fully-qualified",
      "emoji": "🎼",
      "name": "musical score"
    }, {
      "codes": ["1F3B5"],
      "status": "fully-qualified",
      "emoji": "🎵",
      "name": "musical note"
    }, {
      "codes": ["1F3B6"],
      "status": "fully-qualified",
      "emoji": "🎶",
      "name": "musical notes"
    }, {
      "codes": ["1F399", "FE0F"],
      "status": "fully-qualified",
      "emoji": "🎙️",
      "name": "studio microphone"
    }, {
      "codes": ["1F399"],
      "status": "non-fully-qualified",
      "emoji": "🎙",
      "name": "studio microphone"
    }, {
      "codes": ["1F39A", "FE0F"],
      "status": "fully-qualified",
      "emoji": "🎚️",
      "name": "level slider"
    }, {
      "codes": ["1F39A"],
      "status": "non-fully-qualified",
      "emoji": "🎚",
      "name": "level slider"
    }, {
      "codes": ["1F39B", "FE0F"],
      "status": "fully-qualified",
      "emoji": "🎛️",
      "name": "control knobs"
    }, {
      "codes": ["1F39B"],
      "status": "non-fully-qualified",
      "emoji": "🎛",
      "name": "control knobs"
    }, {
      "codes": ["1F3A4"],
      "status": "fully-qualified",
      "emoji": "🎤",
      "name": "microphone"
    }, {
      "codes": ["1F3A7"],
      "status": "fully-qualified",
      "emoji": "🎧",
      "name": "headphone"
    }, {
      "codes": ["1F4FB"],
      "status": "fully-qualified",
      "emoji": "📻",
      "name": "radio"
    }]
  }, {
    "name": "musical-instrument",
    "emojis": [{
      "codes": ["1F3B7"],
      "status": "fully-qualified",
      "emoji": "🎷",
      "name": "saxophone"
    }, {
      "codes": ["1F3B8"],
      "status": "fully-qualified",
      "emoji": "🎸",
      "name": "guitar"
    }, {
      "codes": ["1F3B9"],
      "status": "fully-qualified",
      "emoji": "🎹",
      "name": "musical keyboard"
    }, {
      "codes": ["1F3BA"],
      "status": "fully-qualified",
      "emoji": "🎺",
      "name": "trumpet"
    }, {
      "codes": ["1F3BB"],
      "status": "fully-qualified",
      "emoji": "🎻",
      "name": "violin"
    }, {
      "codes": ["1F941"],
      "status": "fully-qualified",
      "emoji": "🥁",
      "name": "drum"
    }]
  }, {
    "name": "phone",
    "emojis": [{
      "codes": ["1F4F1"],
      "status": "fully-qualified",
      "emoji": "📱",
      "name": "mobile phone"
    }, {
      "codes": ["1F4F2"],
      "status": "fully-qualified",
      "emoji": "📲",
      "name": "mobile phone with arrow"
    }, {
      "codes": ["260E", "FE0F"],
      "status": "fully-qualified",
      "emoji": "☎️",
      "name": "telephone"
    }, {
      "codes": ["260E"],
      "status": "non-fully-qualified",
      "emoji": "☎",
      "name": "telephone"
    }, {
      "codes": ["1F4DE"],
      "status": "fully-qualified",
      "emoji": "📞",
      "name": "telephone receiver"
    }, {
      "codes": ["1F4DF"],
      "status": "fully-qualified",
      "emoji": "📟",
      "name": "pager"
    }, {
      "codes": ["1F4E0"],
      "status": "fully-qualified",
      "emoji": "📠",
      "name": "fax machine"
    }]
  }, {
    "name": "computer",
    "emojis": [{
      "codes": ["1F50B"],
      "status": "fully-qualified",
      "emoji": "🔋",
      "name": "battery"
    }, {
      "codes": ["1F50C"],
      "status": "fully-qualified",
      "emoji": "🔌",
      "name": "electric plug"
    }, {
      "codes": ["1F4BB"],
      "status": "fully-qualified",
      "emoji": "💻",
      "name": "laptop computer"
    }, {
      "codes": ["1F5A5", "FE0F"],
      "status": "fully-qualified",
      "emoji": "🖥️",
      "name": "desktop computer"
    }, {
      "codes": ["1F5A5"],
      "status": "non-fully-qualified",
      "emoji": "🖥",
      "name": "desktop computer"
    }, {
      "codes": ["1F5A8", "FE0F"],
      "status": "fully-qualified",
      "emoji": "🖨️",
      "name": "printer"
    }, {
      "codes": ["1F5A8"],
      "status": "non-fully-qualified",
      "emoji": "🖨",
      "name": "printer"
    }, {
      "codes": ["2328", "FE0F"],
      "status": "fully-qualified",
      "emoji": "⌨️",
      "name": "keyboard"
    }, {
      "codes": ["2328"],
      "status": "non-fully-qualified",
      "emoji": "⌨",
      "name": "keyboard"
    }, {
      "codes": ["1F5B1", "FE0F"],
      "status": "fully-qualified",
      "emoji": "🖱️",
      "name": "computer mouse"
    }, {
      "codes": ["1F5B1"],
      "status": "non-fully-qualified",
      "emoji": "🖱",
      "name": "computer mouse"
    }, {
      "codes": ["1F5B2", "FE0F"],
      "status": "fully-qualified",
      "emoji": "🖲️",
      "name": "trackball"
    }, {
      "codes": ["1F5B2"],
      "status": "non-fully-qualified",
      "emoji": "🖲",
      "name": "trackball"
    }, {
      "codes": ["1F4BD"],
      "status": "fully-qualified",
      "emoji": "💽",
      "name": "computer disk"
    }, {
      "codes": ["1F4BE"],
      "status": "fully-qualified",
      "emoji": "💾",
      "name": "floppy disk"
    }, {
      "codes": ["1F4BF"],
      "status": "fully-qualified",
      "emoji": "💿",
      "name": "optical disk"
    }, {
      "codes": ["1F4C0"],
      "status": "fully-qualified",
      "emoji": "📀",
      "name": "dvd"
    }]
  }, {
    "name": "light & video",
    "emojis": [{
      "codes": ["1F3A5"],
      "status": "fully-qualified",
      "emoji": "🎥",
      "name": "movie camera"
    }, {
      "codes": ["1F39E", "FE0F"],
      "status": "fully-qualified",
      "emoji": "🎞️",
      "name": "film frames"
    }, {
      "codes": ["1F39E"],
      "status": "non-fully-qualified",
      "emoji": "🎞",
      "name": "film frames"
    }, {
      "codes": ["1F4FD", "FE0F"],
      "status": "fully-qualified",
      "emoji": "📽️",
      "name": "film projector"
    }, {
      "codes": ["1F4FD"],
      "status": "non-fully-qualified",
      "emoji": "📽",
      "name": "film projector"
    }, {
      "codes": ["1F3AC"],
      "status": "fully-qualified",
      "emoji": "🎬",
      "name": "clapper board"
    }, {
      "codes": ["1F4FA"],
      "status": "fully-qualified",
      "emoji": "📺",
      "name": "television"
    }, {
      "codes": ["1F4F7"],
      "status": "fully-qualified",
      "emoji": "📷",
      "name": "camera"
    }, {
      "codes": ["1F4F8"],
      "status": "fully-qualified",
      "emoji": "📸",
      "name": "camera with flash"
    }, {
      "codes": ["1F4F9"],
      "status": "fully-qualified",
      "emoji": "📹",
      "name": "video camera"
    }, {
      "codes": ["1F4FC"],
      "status": "fully-qualified",
      "emoji": "📼",
      "name": "videocassette"
    }, {
      "codes": ["1F50D"],
      "status": "fully-qualified",
      "emoji": "🔍",
      "name": "magnifying glass tilted left"
    }, {
      "codes": ["1F50E"],
      "status": "fully-qualified",
      "emoji": "🔎",
      "name": "magnifying glass tilted right"
    }, {
      "codes": ["1F52C"],
      "status": "fully-qualified",
      "emoji": "🔬",
      "name": "microscope"
    }, {
      "codes": ["1F52D"],
      "status": "fully-qualified",
      "emoji": "🔭",
      "name": "telescope"
    }, {
      "codes": ["1F4E1"],
      "status": "fully-qualified",
      "emoji": "📡",
      "name": "satellite antenna"
    }, {
      "codes": ["1F56F", "FE0F"],
      "status": "fully-qualified",
      "emoji": "🕯️",
      "name": "candle"
    }, {
      "codes": ["1F56F"],
      "status": "non-fully-qualified",
      "emoji": "🕯",
      "name": "candle"
    }, {
      "codes": ["1F4A1"],
      "status": "fully-qualified",
      "emoji": "💡",
      "name": "light bulb"
    }, {
      "codes": ["1F526"],
      "status": "fully-qualified",
      "emoji": "🔦",
      "name": "flashlight"
    }, {
      "codes": ["1F3EE"],
      "status": "fully-qualified",
      "emoji": "🏮",
      "name": "red paper lantern"
    }]
  }, {
    "name": "book-paper",
    "emojis": [{
      "codes": ["1F4D4"],
      "status": "fully-qualified",
      "emoji": "📔",
      "name": "notebook with decorative cover"
    }, {
      "codes": ["1F4D5"],
      "status": "fully-qualified",
      "emoji": "📕",
      "name": "closed book"
    }, {
      "codes": ["1F4D6"],
      "status": "fully-qualified",
      "emoji": "📖",
      "name": "open book"
    }, {
      "codes": ["1F4D7"],
      "status": "fully-qualified",
      "emoji": "📗",
      "name": "green book"
    }, {
      "codes": ["1F4D8"],
      "status": "fully-qualified",
      "emoji": "📘",
      "name": "blue book"
    }, {
      "codes": ["1F4D9"],
      "status": "fully-qualified",
      "emoji": "📙",
      "name": "orange book"
    }, {
      "codes": ["1F4DA"],
      "status": "fully-qualified",
      "emoji": "📚",
      "name": "books"
    }, {
      "codes": ["1F4D3"],
      "status": "fully-qualified",
      "emoji": "📓",
      "name": "notebook"
    }, {
      "codes": ["1F4D2"],
      "status": "fully-qualified",
      "emoji": "📒",
      "name": "ledger"
    }, {
      "codes": ["1F4C3"],
      "status": "fully-qualified",
      "emoji": "📃",
      "name": "page with curl"
    }, {
      "codes": ["1F4DC"],
      "status": "fully-qualified",
      "emoji": "📜",
      "name": "scroll"
    }, {
      "codes": ["1F4C4"],
      "status": "fully-qualified",
      "emoji": "📄",
      "name": "page facing up"
    }, {
      "codes": ["1F4F0"],
      "status": "fully-qualified",
      "emoji": "📰",
      "name": "newspaper"
    }, {
      "codes": ["1F5DE", "FE0F"],
      "status": "fully-qualified",
      "emoji": "🗞️",
      "name": "rolled-up newspaper"
    }, {
      "codes": ["1F5DE"],
      "status": "non-fully-qualified",
      "emoji": "🗞",
      "name": "rolled-up newspaper"
    }, {
      "codes": ["1F4D1"],
      "status": "fully-qualified",
      "emoji": "📑",
      "name": "bookmark tabs"
    }, {
      "codes": ["1F516"],
      "status": "fully-qualified",
      "emoji": "🔖",
      "name": "bookmark"
    }, {
      "codes": ["1F3F7", "FE0F"],
      "status": "fully-qualified",
      "emoji": "🏷️",
      "name": "label"
    }, {
      "codes": ["1F3F7"],
      "status": "non-fully-qualified",
      "emoji": "🏷",
      "name": "label"
    }]
  }, {
    "name": "money",
    "emojis": [{
      "codes": ["1F4B0"],
      "status": "fully-qualified",
      "emoji": "💰",
      "name": "money bag"
    }, {
      "codes": ["1F4B4"],
      "status": "fully-qualified",
      "emoji": "💴",
      "name": "yen banknote"
    }, {
      "codes": ["1F4B5"],
      "status": "fully-qualified",
      "emoji": "💵",
      "name": "dollar banknote"
    }, {
      "codes": ["1F4B6"],
      "status": "fully-qualified",
      "emoji": "💶",
      "name": "euro banknote"
    }, {
      "codes": ["1F4B7"],
      "status": "fully-qualified",
      "emoji": "💷",
      "name": "pound banknote"
    }, {
      "codes": ["1F4B8"],
      "status": "fully-qualified",
      "emoji": "💸",
      "name": "money with wings"
    }, {
      "codes": ["1F4B3"],
      "status": "fully-qualified",
      "emoji": "💳",
      "name": "credit card"
    }, {
      "codes": ["1F4B9"],
      "status": "fully-qualified",
      "emoji": "💹",
      "name": "chart increasing with yen"
    }, {
      "codes": ["1F4B1"],
      "status": "fully-qualified",
      "emoji": "💱",
      "name": "currency exchange"
    }, {
      "codes": ["1F4B2"],
      "status": "fully-qualified",
      "emoji": "💲",
      "name": "heavy dollar sign"
    }]
  }, {
    "name": "mail",
    "emojis": [{
      "codes": ["2709", "FE0F"],
      "status": "fully-qualified",
      "emoji": "✉️",
      "name": "envelope"
    }, {
      "codes": ["2709"],
      "status": "non-fully-qualified",
      "emoji": "✉",
      "name": "envelope"
    }, {
      "codes": ["1F4E7"],
      "status": "fully-qualified",
      "emoji": "📧",
      "name": "e-mail"
    }, {
      "codes": ["1F4E8"],
      "status": "fully-qualified",
      "emoji": "📨",
      "name": "incoming envelope"
    }, {
      "codes": ["1F4E9"],
      "status": "fully-qualified",
      "emoji": "📩",
      "name": "envelope with arrow"
    }, {
      "codes": ["1F4E4"],
      "status": "fully-qualified",
      "emoji": "📤",
      "name": "outbox tray"
    }, {
      "codes": ["1F4E5"],
      "status": "fully-qualified",
      "emoji": "📥",
      "name": "inbox tray"
    }, {
      "codes": ["1F4E6"],
      "status": "fully-qualified",
      "emoji": "📦",
      "name": "package"
    }, {
      "codes": ["1F4EB"],
      "status": "fully-qualified",
      "emoji": "📫",
      "name": "closed mailbox with raised flag"
    }, {
      "codes": ["1F4EA"],
      "status": "fully-qualified",
      "emoji": "📪",
      "name": "closed mailbox with lowered flag"
    }, {
      "codes": ["1F4EC"],
      "status": "fully-qualified",
      "emoji": "📬",
      "name": "open mailbox with raised flag"
    }, {
      "codes": ["1F4ED"],
      "status": "fully-qualified",
      "emoji": "📭",
      "name": "open mailbox with lowered flag"
    }, {
      "codes": ["1F4EE"],
      "status": "fully-qualified",
      "emoji": "📮",
      "name": "postbox"
    }, {
      "codes": ["1F5F3", "FE0F"],
      "status": "fully-qualified",
      "emoji": "🗳️",
      "name": "ballot box with ballot"
    }, {
      "codes": ["1F5F3"],
      "status": "non-fully-qualified",
      "emoji": "🗳",
      "name": "ballot box with ballot"
    }]
  }, {
    "name": "writing",
    "emojis": [{
      "codes": ["270F", "FE0F"],
      "status": "fully-qualified",
      "emoji": "✏️",
      "name": "pencil"
    }, {
      "codes": ["270F"],
      "status": "non-fully-qualified",
      "emoji": "✏",
      "name": "pencil"
    }, {
      "codes": ["2712", "FE0F"],
      "status": "fully-qualified",
      "emoji": "✒️",
      "name": "black nib"
    }, {
      "codes": ["2712"],
      "status": "non-fully-qualified",
      "emoji": "✒",
      "name": "black nib"
    }, {
      "codes": ["1F58B", "FE0F"],
      "status": "fully-qualified",
      "emoji": "🖋️",
      "name": "fountain pen"
    }, {
      "codes": ["1F58B"],
      "status": "non-fully-qualified",
      "emoji": "🖋",
      "name": "fountain pen"
    }, {
      "codes": ["1F58A", "FE0F"],
      "status": "fully-qualified",
      "emoji": "🖊️",
      "name": "pen"
    }, {
      "codes": ["1F58A"],
      "status": "non-fully-qualified",
      "emoji": "🖊",
      "name": "pen"
    }, {
      "codes": ["1F58C", "FE0F"],
      "status": "fully-qualified",
      "emoji": "🖌️",
      "name": "paintbrush"
    }, {
      "codes": ["1F58C"],
      "status": "non-fully-qualified",
      "emoji": "🖌",
      "name": "paintbrush"
    }, {
      "codes": ["1F58D", "FE0F"],
      "status": "fully-qualified",
      "emoji": "🖍️",
      "name": "crayon"
    }, {
      "codes": ["1F58D"],
      "status": "non-fully-qualified",
      "emoji": "🖍",
      "name": "crayon"
    }, {
      "codes": ["1F4DD"],
      "status": "fully-qualified",
      "emoji": "📝",
      "name": "memo"
    }]
  }, {
    "name": "office",
    "emojis": [{
      "codes": ["1F4BC"],
      "status": "fully-qualified",
      "emoji": "💼",
      "name": "briefcase"
    }, {
      "codes": ["1F4C1"],
      "status": "fully-qualified",
      "emoji": "📁",
      "name": "file folder"
    }, {
      "codes": ["1F4C2"],
      "status": "fully-qualified",
      "emoji": "📂",
      "name": "open file folder"
    }, {
      "codes": ["1F5C2", "FE0F"],
      "status": "fully-qualified",
      "emoji": "🗂️",
      "name": "card index dividers"
    }, {
      "codes": ["1F5C2"],
      "status": "non-fully-qualified",
      "emoji": "🗂",
      "name": "card index dividers"
    }, {
      "codes": ["1F4C5"],
      "status": "fully-qualified",
      "emoji": "📅",
      "name": "calendar"
    }, {
      "codes": ["1F4C6"],
      "status": "fully-qualified",
      "emoji": "📆",
      "name": "tear-off calendar"
    }, {
      "codes": ["1F5D2", "FE0F"],
      "status": "fully-qualified",
      "emoji": "🗒️",
      "name": "spiral notepad"
    }, {
      "codes": ["1F5D2"],
      "status": "non-fully-qualified",
      "emoji": "🗒",
      "name": "spiral notepad"
    }, {
      "codes": ["1F5D3", "FE0F"],
      "status": "fully-qualified",
      "emoji": "🗓️",
      "name": "spiral calendar"
    }, {
      "codes": ["1F5D3"],
      "status": "non-fully-qualified",
      "emoji": "🗓",
      "name": "spiral calendar"
    }, {
      "codes": ["1F4C7"],
      "status": "fully-qualified",
      "emoji": "📇",
      "name": "card index"
    }, {
      "codes": ["1F4C8"],
      "status": "fully-qualified",
      "emoji": "📈",
      "name": "chart increasing"
    }, {
      "codes": ["1F4C9"],
      "status": "fully-qualified",
      "emoji": "📉",
      "name": "chart decreasing"
    }, {
      "codes": ["1F4CA"],
      "status": "fully-qualified",
      "emoji": "📊",
      "name": "bar chart"
    }, {
      "codes": ["1F4CB"],
      "status": "fully-qualified",
      "emoji": "📋",
      "name": "clipboard"
    }, {
      "codes": ["1F4CC"],
      "status": "fully-qualified",
      "emoji": "📌",
      "name": "pushpin"
    }, {
      "codes": ["1F4CD"],
      "status": "fully-qualified",
      "emoji": "📍",
      "name": "round pushpin"
    }, {
      "codes": ["1F4CE"],
      "status": "fully-qualified",
      "emoji": "📎",
      "name": "paperclip"
    }, {
      "codes": ["1F587", "FE0F"],
      "status": "fully-qualified",
      "emoji": "🖇️",
      "name": "linked paperclips"
    }, {
      "codes": ["1F587"],
      "status": "non-fully-qualified",
      "emoji": "🖇",
      "name": "linked paperclips"
    }, {
      "codes": ["1F4CF"],
      "status": "fully-qualified",
      "emoji": "📏",
      "name": "straight ruler"
    }, {
      "codes": ["1F4D0"],
      "status": "fully-qualified",
      "emoji": "📐",
      "name": "triangular ruler"
    }, {
      "codes": ["2702", "FE0F"],
      "status": "fully-qualified",
      "emoji": "✂️",
      "name": "scissors"
    }, {
      "codes": ["2702"],
      "status": "non-fully-qualified",
      "emoji": "✂",
      "name": "scissors"
    }, {
      "codes": ["1F5C3", "FE0F"],
      "status": "fully-qualified",
      "emoji": "🗃️",
      "name": "card file box"
    }, {
      "codes": ["1F5C3"],
      "status": "non-fully-qualified",
      "emoji": "🗃",
      "name": "card file box"
    }, {
      "codes": ["1F5C4", "FE0F"],
      "status": "fully-qualified",
      "emoji": "🗄️",
      "name": "file cabinet"
    }, {
      "codes": ["1F5C4"],
      "status": "non-fully-qualified",
      "emoji": "🗄",
      "name": "file cabinet"
    }, {
      "codes": ["1F5D1", "FE0F"],
      "status": "fully-qualified",
      "emoji": "🗑️",
      "name": "wastebasket"
    }, {
      "codes": ["1F5D1"],
      "status": "non-fully-qualified",
      "emoji": "🗑",
      "name": "wastebasket"
    }]
  }, {
    "name": "lock",
    "emojis": [{
      "codes": ["1F512"],
      "status": "fully-qualified",
      "emoji": "🔒",
      "name": "locked"
    }, {
      "codes": ["1F513"],
      "status": "fully-qualified",
      "emoji": "🔓",
      "name": "unlocked"
    }, {
      "codes": ["1F50F"],
      "status": "fully-qualified",
      "emoji": "🔏",
      "name": "locked with pen"
    }, {
      "codes": ["1F510"],
      "status": "fully-qualified",
      "emoji": "🔐",
      "name": "locked with key"
    }, {
      "codes": ["1F511"],
      "status": "fully-qualified",
      "emoji": "🔑",
      "name": "key"
    }, {
      "codes": ["1F5DD", "FE0F"],
      "status": "fully-qualified",
      "emoji": "🗝️",
      "name": "old key"
    }, {
      "codes": ["1F5DD"],
      "status": "non-fully-qualified",
      "emoji": "🗝",
      "name": "old key"
    }]
  }, {
    "name": "tool",
    "emojis": [{
      "codes": ["1F528"],
      "status": "fully-qualified",
      "emoji": "🔨",
      "name": "hammer"
    }, {
      "codes": ["26CF", "FE0F"],
      "status": "fully-qualified",
      "emoji": "⛏️",
      "name": "pick"
    }, {
      "codes": ["26CF"],
      "status": "non-fully-qualified",
      "emoji": "⛏",
      "name": "pick"
    }, {
      "codes": ["2692", "FE0F"],
      "status": "fully-qualified",
      "emoji": "⚒️",
      "name": "hammer and pick"
    }, {
      "codes": ["2692"],
      "status": "non-fully-qualified",
      "emoji": "⚒",
      "name": "hammer and pick"
    }, {
      "codes": ["1F6E0", "FE0F"],
      "status": "fully-qualified",
      "emoji": "🛠️",
      "name": "hammer and wrench"
    }, {
      "codes": ["1F6E0"],
      "status": "non-fully-qualified",
      "emoji": "🛠",
      "name": "hammer and wrench"
    }, {
      "codes": ["1F5E1", "FE0F"],
      "status": "fully-qualified",
      "emoji": "🗡️",
      "name": "dagger"
    }, {
      "codes": ["1F5E1"],
      "status": "non-fully-qualified",
      "emoji": "🗡",
      "name": "dagger"
    }, {
      "codes": ["2694", "FE0F"],
      "status": "fully-qualified",
      "emoji": "⚔️",
      "name": "crossed swords"
    }, {
      "codes": ["2694"],
      "status": "non-fully-qualified",
      "emoji": "⚔",
      "name": "crossed swords"
    }, {
      "codes": ["1F52B"],
      "status": "fully-qualified",
      "emoji": "🔫",
      "name": "pistol"
    }, {
      "codes": ["1F3F9"],
      "status": "fully-qualified",
      "emoji": "🏹",
      "name": "bow and arrow"
    }, {
      "codes": ["1F6E1", "FE0F"],
      "status": "fully-qualified",
      "emoji": "🛡️",
      "name": "shield"
    }, {
      "codes": ["1F6E1"],
      "status": "non-fully-qualified",
      "emoji": "🛡",
      "name": "shield"
    }, {
      "codes": ["1F527"],
      "status": "fully-qualified",
      "emoji": "🔧",
      "name": "wrench"
    }, {
      "codes": ["1F529"],
      "status": "fully-qualified",
      "emoji": "🔩",
      "name": "nut and bolt"
    }, {
      "codes": ["2699", "FE0F"],
      "status": "fully-qualified",
      "emoji": "⚙️",
      "name": "gear"
    }, {
      "codes": ["2699"],
      "status": "non-fully-qualified",
      "emoji": "⚙",
      "name": "gear"
    }, {
      "codes": ["1F5DC", "FE0F"],
      "status": "fully-qualified",
      "emoji": "🗜️",
      "name": "clamp"
    }, {
      "codes": ["1F5DC"],
      "status": "non-fully-qualified",
      "emoji": "🗜",
      "name": "clamp"
    }, {
      "codes": ["2697", "FE0F"],
      "status": "fully-qualified",
      "emoji": "⚗️",
      "name": "alembic"
    }, {
      "codes": ["2697"],
      "status": "non-fully-qualified",
      "emoji": "⚗",
      "name": "alembic"
    }, {
      "codes": ["2696", "FE0F"],
      "status": "fully-qualified",
      "emoji": "⚖️",
      "name": "balance scale"
    }, {
      "codes": ["2696"],
      "status": "non-fully-qualified",
      "emoji": "⚖",
      "name": "balance scale"
    }, {
      "codes": ["1F517"],
      "status": "fully-qualified",
      "emoji": "🔗",
      "name": "link"
    }, {
      "codes": ["26D3", "FE0F"],
      "status": "fully-qualified",
      "emoji": "⛓️",
      "name": "chains"
    }, {
      "codes": ["26D3"],
      "status": "non-fully-qualified",
      "emoji": "⛓",
      "name": "chains"
    }]
  }, {
    "name": "medical",
    "emojis": [{
      "codes": ["1F489"],
      "status": "fully-qualified",
      "emoji": "💉",
      "name": "syringe"
    }, {
      "codes": ["1F48A"],
      "status": "fully-qualified",
      "emoji": "💊",
      "name": "pill"
    }]
  }, {
    "name": "other-object",
    "emojis": [{
      "codes": ["1F6AC"],
      "status": "fully-qualified",
      "emoji": "🚬",
      "name": "cigarette"
    }, {
      "codes": ["26B0", "FE0F"],
      "status": "fully-qualified",
      "emoji": "⚰️",
      "name": "coffin"
    }, {
      "codes": ["26B0"],
      "status": "non-fully-qualified",
      "emoji": "⚰",
      "name": "coffin"
    }, {
      "codes": ["26B1", "FE0F"],
      "status": "fully-qualified",
      "emoji": "⚱️",
      "name": "funeral urn"
    }, {
      "codes": ["26B1"],
      "status": "non-fully-qualified",
      "emoji": "⚱",
      "name": "funeral urn"
    }, {
      "codes": ["1F5FF"],
      "status": "fully-qualified",
      "emoji": "🗿",
      "name": "moai"
    }, {
      "codes": ["1F6E2", "FE0F"],
      "status": "fully-qualified",
      "emoji": "🛢️",
      "name": "oil drum"
    }, {
      "codes": ["1F6E2"],
      "status": "non-fully-qualified",
      "emoji": "🛢",
      "name": "oil drum"
    }, {
      "codes": ["1F52E"],
      "status": "fully-qualified",
      "emoji": "🔮",
      "name": "crystal ball"
    }, {
      "codes": ["1F6D2"],
      "status": "fully-qualified",
      "emoji": "🛒",
      "name": "shopping cart"
    }]
  }]
}, {
  "name": "Symbols",
  "subGroups": [{
    "name": "transport-sign",
    "emojis": [{
      "codes": ["1F3E7"],
      "status": "fully-qualified",
      "emoji": "🏧",
      "name": "ATM sign"
    }, {
      "codes": ["1F6AE"],
      "status": "fully-qualified",
      "emoji": "🚮",
      "name": "litter in bin sign"
    }, {
      "codes": ["1F6B0"],
      "status": "fully-qualified",
      "emoji": "🚰",
      "name": "potable water"
    }, {
      "codes": ["267F"],
      "status": "fully-qualified",
      "emoji": "♿",
      "name": "wheelchair symbol"
    }, {
      "codes": ["1F6B9"],
      "status": "fully-qualified",
      "emoji": "🚹",
      "name": "men’s room"
    }, {
      "codes": ["1F6BA"],
      "status": "fully-qualified",
      "emoji": "🚺",
      "name": "women’s room"
    }, {
      "codes": ["1F6BB"],
      "status": "fully-qualified",
      "emoji": "🚻",
      "name": "restroom"
    }, {
      "codes": ["1F6BC"],
      "status": "fully-qualified",
      "emoji": "🚼",
      "name": "baby symbol"
    }, {
      "codes": ["1F6BE"],
      "status": "fully-qualified",
      "emoji": "🚾",
      "name": "water closet"
    }, {
      "codes": ["1F6C2"],
      "status": "fully-qualified",
      "emoji": "🛂",
      "name": "passport control"
    }, {
      "codes": ["1F6C3"],
      "status": "fully-qualified",
      "emoji": "🛃",
      "name": "customs"
    }, {
      "codes": ["1F6C4"],
      "status": "fully-qualified",
      "emoji": "🛄",
      "name": "baggage claim"
    }, {
      "codes": ["1F6C5"],
      "status": "fully-qualified",
      "emoji": "🛅",
      "name": "left luggage"
    }]
  }, {
    "name": "warning",
    "emojis": [{
      "codes": ["26A0", "FE0F"],
      "status": "fully-qualified",
      "emoji": "⚠️",
      "name": "warning"
    }, {
      "codes": ["26A0"],
      "status": "non-fully-qualified",
      "emoji": "⚠",
      "name": "warning"
    }, {
      "codes": ["1F6B8"],
      "status": "fully-qualified",
      "emoji": "🚸",
      "name": "children crossing"
    }, {
      "codes": ["26D4"],
      "status": "fully-qualified",
      "emoji": "⛔",
      "name": "no entry"
    }, {
      "codes": ["1F6AB"],
      "status": "fully-qualified",
      "emoji": "🚫",
      "name": "prohibited"
    }, {
      "codes": ["1F6B3"],
      "status": "fully-qualified",
      "emoji": "🚳",
      "name": "no bicycles"
    }, {
      "codes": ["1F6AD"],
      "status": "fully-qualified",
      "emoji": "🚭",
      "name": "no smoking"
    }, {
      "codes": ["1F6AF"],
      "status": "fully-qualified",
      "emoji": "🚯",
      "name": "no littering"
    }, {
      "codes": ["1F6B1"],
      "status": "fully-qualified",
      "emoji": "🚱",
      "name": "non-potable water"
    }, {
      "codes": ["1F6B7"],
      "status": "fully-qualified",
      "emoji": "🚷",
      "name": "no pedestrians"
    }, {
      "codes": ["1F4F5"],
      "status": "fully-qualified",
      "emoji": "📵",
      "name": "no mobile phones"
    }, {
      "codes": ["1F51E"],
      "status": "fully-qualified",
      "emoji": "🔞",
      "name": "no one under eighteen"
    }, {
      "codes": ["2622", "FE0F"],
      "status": "fully-qualified",
      "emoji": "☢️",
      "name": "radioactive"
    }, {
      "codes": ["2622"],
      "status": "non-fully-qualified",
      "emoji": "☢",
      "name": "radioactive"
    }, {
      "codes": ["2623", "FE0F"],
      "status": "fully-qualified",
      "emoji": "☣️",
      "name": "biohazard"
    }, {
      "codes": ["2623"],
      "status": "non-fully-qualified",
      "emoji": "☣",
      "name": "biohazard"
    }]
  }, {
    "name": "arrow",
    "emojis": [{
      "codes": ["2B06", "FE0F"],
      "status": "fully-qualified",
      "emoji": "⬆️",
      "name": "up arrow"
    }, {
      "codes": ["2B06"],
      "status": "non-fully-qualified",
      "emoji": "⬆",
      "name": "up arrow"
    }, {
      "codes": ["2197", "FE0F"],
      "status": "fully-qualified",
      "emoji": "↗️",
      "name": "up-right arrow"
    }, {
      "codes": ["2197"],
      "status": "non-fully-qualified",
      "emoji": "↗",
      "name": "up-right arrow"
    }, {
      "codes": ["27A1", "FE0F"],
      "status": "fully-qualified",
      "emoji": "➡️",
      "name": "right arrow"
    }, {
      "codes": ["27A1"],
      "status": "non-fully-qualified",
      "emoji": "➡",
      "name": "right arrow"
    }, {
      "codes": ["2198", "FE0F"],
      "status": "fully-qualified",
      "emoji": "↘️",
      "name": "down-right arrow"
    }, {
      "codes": ["2198"],
      "status": "non-fully-qualified",
      "emoji": "↘",
      "name": "down-right arrow"
    }, {
      "codes": ["2B07", "FE0F"],
      "status": "fully-qualified",
      "emoji": "⬇️",
      "name": "down arrow"
    }, {
      "codes": ["2B07"],
      "status": "non-fully-qualified",
      "emoji": "⬇",
      "name": "down arrow"
    }, {
      "codes": ["2199", "FE0F"],
      "status": "fully-qualified",
      "emoji": "↙️",
      "name": "down-left arrow"
    }, {
      "codes": ["2199"],
      "status": "non-fully-qualified",
      "emoji": "↙",
      "name": "down-left arrow"
    }, {
      "codes": ["2B05", "FE0F"],
      "status": "fully-qualified",
      "emoji": "⬅️",
      "name": "left arrow"
    }, {
      "codes": ["2B05"],
      "status": "non-fully-qualified",
      "emoji": "⬅",
      "name": "left arrow"
    }, {
      "codes": ["2196", "FE0F"],
      "status": "fully-qualified",
      "emoji": "↖️",
      "name": "up-left arrow"
    }, {
      "codes": ["2196"],
      "status": "non-fully-qualified",
      "emoji": "↖",
      "name": "up-left arrow"
    }, {
      "codes": ["2195", "FE0F"],
      "status": "fully-qualified",
      "emoji": "↕️",
      "name": "up-down arrow"
    }, {
      "codes": ["2195"],
      "status": "non-fully-qualified",
      "emoji": "↕",
      "name": "up-down arrow"
    }, {
      "codes": ["2194", "FE0F"],
      "status": "fully-qualified",
      "emoji": "↔️",
      "name": "left-right arrow"
    }, {
      "codes": ["2194"],
      "status": "non-fully-qualified",
      "emoji": "↔",
      "name": "left-right arrow"
    }, {
      "codes": ["21A9", "FE0F"],
      "status": "fully-qualified",
      "emoji": "↩️",
      "name": "right arrow curving left"
    }, {
      "codes": ["21A9"],
      "status": "non-fully-qualified",
      "emoji": "↩",
      "name": "right arrow curving left"
    }, {
      "codes": ["21AA", "FE0F"],
      "status": "fully-qualified",
      "emoji": "↪️",
      "name": "left arrow curving right"
    }, {
      "codes": ["21AA"],
      "status": "non-fully-qualified",
      "emoji": "↪",
      "name": "left arrow curving right"
    }, {
      "codes": ["2934", "FE0F"],
      "status": "fully-qualified",
      "emoji": "⤴️",
      "name": "right arrow curving up"
    }, {
      "codes": ["2934"],
      "status": "non-fully-qualified",
      "emoji": "⤴",
      "name": "right arrow curving up"
    }, {
      "codes": ["2935", "FE0F"],
      "status": "fully-qualified",
      "emoji": "⤵️",
      "name": "right arrow curving down"
    }, {
      "codes": ["2935"],
      "status": "non-fully-qualified",
      "emoji": "⤵",
      "name": "right arrow curving down"
    }, {
      "codes": ["1F503"],
      "status": "fully-qualified",
      "emoji": "🔃",
      "name": "clockwise vertical arrows"
    }, {
      "codes": ["1F504"],
      "status": "fully-qualified",
      "emoji": "🔄",
      "name": "counterclockwise arrows button"
    }, {
      "codes": ["1F519"],
      "status": "fully-qualified",
      "emoji": "🔙",
      "name": "BACK arrow"
    }, {
      "codes": ["1F51A"],
      "status": "fully-qualified",
      "emoji": "🔚",
      "name": "END arrow"
    }, {
      "codes": ["1F51B"],
      "status": "fully-qualified",
      "emoji": "🔛",
      "name": "ON! arrow"
    }, {
      "codes": ["1F51C"],
      "status": "fully-qualified",
      "emoji": "🔜",
      "name": "SOON arrow"
    }, {
      "codes": ["1F51D"],
      "status": "fully-qualified",
      "emoji": "🔝",
      "name": "TOP arrow"
    }]
  }, {
    "name": "religion",
    "emojis": [{
      "codes": ["1F6D0"],
      "status": "fully-qualified",
      "emoji": "🛐",
      "name": "place of worship"
    }, {
      "codes": ["269B", "FE0F"],
      "status": "fully-qualified",
      "emoji": "⚛️",
      "name": "atom symbol"
    }, {
      "codes": ["269B"],
      "status": "non-fully-qualified",
      "emoji": "⚛",
      "name": "atom symbol"
    }, {
      "codes": ["1F549", "FE0F"],
      "status": "fully-qualified",
      "emoji": "🕉️",
      "name": "om"
    }, {
      "codes": ["1F549"],
      "status": "non-fully-qualified",
      "emoji": "🕉",
      "name": "om"
    }, {
      "codes": ["2721", "FE0F"],
      "status": "fully-qualified",
      "emoji": "✡️",
      "name": "star of David"
    }, {
      "codes": ["2721"],
      "status": "non-fully-qualified",
      "emoji": "✡",
      "name": "star of David"
    }, {
      "codes": ["2638", "FE0F"],
      "status": "fully-qualified",
      "emoji": "☸️",
      "name": "wheel of dharma"
    }, {
      "codes": ["2638"],
      "status": "non-fully-qualified",
      "emoji": "☸",
      "name": "wheel of dharma"
    }, {
      "codes": ["262F", "FE0F"],
      "status": "fully-qualified",
      "emoji": "☯️",
      "name": "yin yang"
    }, {
      "codes": ["262F"],
      "status": "non-fully-qualified",
      "emoji": "☯",
      "name": "yin yang"
    }, {
      "codes": ["271D", "FE0F"],
      "status": "fully-qualified",
      "emoji": "✝️",
      "name": "latin cross"
    }, {
      "codes": ["271D"],
      "status": "non-fully-qualified",
      "emoji": "✝",
      "name": "latin cross"
    }, {
      "codes": ["2626", "FE0F"],
      "status": "fully-qualified",
      "emoji": "☦️",
      "name": "orthodox cross"
    }, {
      "codes": ["2626"],
      "status": "non-fully-qualified",
      "emoji": "☦",
      "name": "orthodox cross"
    }, {
      "codes": ["262A", "FE0F"],
      "status": "fully-qualified",
      "emoji": "☪️",
      "name": "star and crescent"
    }, {
      "codes": ["262A"],
      "status": "non-fully-qualified",
      "emoji": "☪",
      "name": "star and crescent"
    }, {
      "codes": ["262E", "FE0F"],
      "status": "fully-qualified",
      "emoji": "☮️",
      "name": "peace symbol"
    }, {
      "codes": ["262E"],
      "status": "non-fully-qualified",
      "emoji": "☮",
      "name": "peace symbol"
    }, {
      "codes": ["1F54E"],
      "status": "fully-qualified",
      "emoji": "🕎",
      "name": "menorah"
    }, {
      "codes": ["1F52F"],
      "status": "fully-qualified",
      "emoji": "🔯",
      "name": "dotted six-pointed star"
    }]
  }, {
    "name": "zodiac",
    "emojis": [{
      "codes": ["2648"],
      "status": "fully-qualified",
      "emoji": "♈",
      "name": "Aries"
    }, {
      "codes": ["2649"],
      "status": "fully-qualified",
      "emoji": "♉",
      "name": "Taurus"
    }, {
      "codes": ["264A"],
      "status": "fully-qualified",
      "emoji": "♊",
      "name": "Gemini"
    }, {
      "codes": ["264B"],
      "status": "fully-qualified",
      "emoji": "♋",
      "name": "Cancer"
    }, {
      "codes": ["264C"],
      "status": "fully-qualified",
      "emoji": "♌",
      "name": "Leo"
    }, {
      "codes": ["264D"],
      "status": "fully-qualified",
      "emoji": "♍",
      "name": "Virgo"
    }, {
      "codes": ["264E"],
      "status": "fully-qualified",
      "emoji": "♎",
      "name": "Libra"
    }, {
      "codes": ["264F"],
      "status": "fully-qualified",
      "emoji": "♏",
      "name": "Scorpius"
    }, {
      "codes": ["2650"],
      "status": "fully-qualified",
      "emoji": "♐",
      "name": "Sagittarius"
    }, {
      "codes": ["2651"],
      "status": "fully-qualified",
      "emoji": "♑",
      "name": "Capricorn"
    }, {
      "codes": ["2652"],
      "status": "fully-qualified",
      "emoji": "♒",
      "name": "Aquarius"
    }, {
      "codes": ["2653"],
      "status": "fully-qualified",
      "emoji": "♓",
      "name": "Pisces"
    }, {
      "codes": ["26CE"],
      "status": "fully-qualified",
      "emoji": "⛎",
      "name": "Ophiuchus"
    }]
  }, {
    "name": "av-symbol",
    "emojis": [{
      "codes": ["1F500"],
      "status": "fully-qualified",
      "emoji": "🔀",
      "name": "shuffle tracks button"
    }, {
      "codes": ["1F501"],
      "status": "fully-qualified",
      "emoji": "🔁",
      "name": "repeat button"
    }, {
      "codes": ["1F502"],
      "status": "fully-qualified",
      "emoji": "🔂",
      "name": "repeat single button"
    }, {
      "codes": ["25B6", "FE0F"],
      "status": "fully-qualified",
      "emoji": "▶️",
      "name": "play button"
    }, {
      "codes": ["25B6"],
      "status": "non-fully-qualified",
      "emoji": "▶",
      "name": "play button"
    }, {
      "codes": ["23E9"],
      "status": "fully-qualified",
      "emoji": "⏩",
      "name": "fast-forward button"
    }, {
      "codes": ["23ED", "FE0F"],
      "status": "fully-qualified",
      "emoji": "⏭️",
      "name": "next track button"
    }, {
      "codes": ["23ED"],
      "status": "non-fully-qualified",
      "emoji": "⏭",
      "name": "next track button"
    }, {
      "codes": ["23EF", "FE0F"],
      "status": "fully-qualified",
      "emoji": "⏯️",
      "name": "play or pause button"
    }, {
      "codes": ["23EF"],
      "status": "non-fully-qualified",
      "emoji": "⏯",
      "name": "play or pause button"
    }, {
      "codes": ["25C0", "FE0F"],
      "status": "fully-qualified",
      "emoji": "◀️",
      "name": "reverse button"
    }, {
      "codes": ["25C0"],
      "status": "non-fully-qualified",
      "emoji": "◀",
      "name": "reverse button"
    }, {
      "codes": ["23EA"],
      "status": "fully-qualified",
      "emoji": "⏪",
      "name": "fast reverse button"
    }, {
      "codes": ["23EE", "FE0F"],
      "status": "fully-qualified",
      "emoji": "⏮️",
      "name": "last track button"
    }, {
      "codes": ["23EE"],
      "status": "non-fully-qualified",
      "emoji": "⏮",
      "name": "last track button"
    }, {
      "codes": ["1F53C"],
      "status": "fully-qualified",
      "emoji": "🔼",
      "name": "up button"
    }, {
      "codes": ["23EB"],
      "status": "fully-qualified",
      "emoji": "⏫",
      "name": "fast up button"
    }, {
      "codes": ["1F53D"],
      "status": "fully-qualified",
      "emoji": "🔽",
      "name": "down button"
    }, {
      "codes": ["23EC"],
      "status": "fully-qualified",
      "emoji": "⏬",
      "name": "fast down button"
    }, {
      "codes": ["23F8", "FE0F"],
      "status": "fully-qualified",
      "emoji": "⏸️",
      "name": "pause button"
    }, {
      "codes": ["23F8"],
      "status": "non-fully-qualified",
      "emoji": "⏸",
      "name": "pause button"
    }, {
      "codes": ["23F9", "FE0F"],
      "status": "fully-qualified",
      "emoji": "⏹️",
      "name": "stop button"
    }, {
      "codes": ["23F9"],
      "status": "non-fully-qualified",
      "emoji": "⏹",
      "name": "stop button"
    }, {
      "codes": ["23FA", "FE0F"],
      "status": "fully-qualified",
      "emoji": "⏺️",
      "name": "record button"
    }, {
      "codes": ["23FA"],
      "status": "non-fully-qualified",
      "emoji": "⏺",
      "name": "record button"
    }, {
      "codes": ["23CF", "FE0F"],
      "status": "fully-qualified",
      "emoji": "⏏️",
      "name": "eject button"
    }, {
      "codes": ["23CF"],
      "status": "non-fully-qualified",
      "emoji": "⏏",
      "name": "eject button"
    }, {
      "codes": ["1F3A6"],
      "status": "fully-qualified",
      "emoji": "🎦",
      "name": "cinema"
    }, {
      "codes": ["1F505"],
      "status": "fully-qualified",
      "emoji": "🔅",
      "name": "dim button"
    }, {
      "codes": ["1F506"],
      "status": "fully-qualified",
      "emoji": "🔆",
      "name": "bright button"
    }, {
      "codes": ["1F4F6"],
      "status": "fully-qualified",
      "emoji": "📶",
      "name": "antenna bars"
    }, {
      "codes": ["1F4F3"],
      "status": "fully-qualified",
      "emoji": "📳",
      "name": "vibration mode"
    }, {
      "codes": ["1F4F4"],
      "status": "fully-qualified",
      "emoji": "📴",
      "name": "mobile phone off"
    }]
  }, {
    "name": "other-symbol",
    "emojis": [{
      "codes": ["2640", "FE0F"],
      "status": "fully-qualified",
      "emoji": "♀️",
      "name": "female sign"
    }, {
      "codes": ["2640"],
      "status": "non-fully-qualified",
      "emoji": "♀",
      "name": "female sign"
    }, {
      "codes": ["2642", "FE0F"],
      "status": "fully-qualified",
      "emoji": "♂️",
      "name": "male sign"
    }, {
      "codes": ["2642"],
      "status": "non-fully-qualified",
      "emoji": "♂",
      "name": "male sign"
    }, {
      "codes": ["2695", "FE0F"],
      "status": "fully-qualified",
      "emoji": "⚕️",
      "name": "medical symbol"
    }, {
      "codes": ["2695"],
      "status": "non-fully-qualified",
      "emoji": "⚕",
      "name": "medical symbol"
    }, {
      "codes": ["267B", "FE0F"],
      "status": "fully-qualified",
      "emoji": "♻️",
      "name": "recycling symbol"
    }, {
      "codes": ["267B"],
      "status": "non-fully-qualified",
      "emoji": "♻",
      "name": "recycling symbol"
    }, {
      "codes": ["269C", "FE0F"],
      "status": "fully-qualified",
      "emoji": "⚜️",
      "name": "fleur-de-lis"
    }, {
      "codes": ["269C"],
      "status": "non-fully-qualified",
      "emoji": "⚜",
      "name": "fleur-de-lis"
    }, {
      "codes": ["1F531"],
      "status": "fully-qualified",
      "emoji": "🔱",
      "name": "trident emblem"
    }, {
      "codes": ["1F4DB"],
      "status": "fully-qualified",
      "emoji": "📛",
      "name": "name badge"
    }, {
      "codes": ["1F530"],
      "status": "fully-qualified",
      "emoji": "🔰",
      "name": "Japanese symbol for beginner"
    }, {
      "codes": ["2B55"],
      "status": "fully-qualified",
      "emoji": "⭕",
      "name": "heavy large circle"
    }, {
      "codes": ["2705"],
      "status": "fully-qualified",
      "emoji": "✅",
      "name": "white heavy check mark"
    }, {
      "codes": ["2611", "FE0F"],
      "status": "fully-qualified",
      "emoji": "☑️",
      "name": "ballot box with check"
    }, {
      "codes": ["2611"],
      "status": "non-fully-qualified",
      "emoji": "☑",
      "name": "ballot box with check"
    }, {
      "codes": ["2714", "FE0F"],
      "status": "fully-qualified",
      "emoji": "✔️",
      "name": "heavy check mark"
    }, {
      "codes": ["2714"],
      "status": "non-fully-qualified",
      "emoji": "✔",
      "name": "heavy check mark"
    }, {
      "codes": ["2716", "FE0F"],
      "status": "fully-qualified",
      "emoji": "✖️",
      "name": "heavy multiplication x"
    }, {
      "codes": ["2716"],
      "status": "non-fully-qualified",
      "emoji": "✖",
      "name": "heavy multiplication x"
    }, {
      "codes": ["274C"],
      "status": "fully-qualified",
      "emoji": "❌",
      "name": "cross mark"
    }, {
      "codes": ["274E"],
      "status": "fully-qualified",
      "emoji": "❎",
      "name": "cross mark button"
    }, {
      "codes": ["2795"],
      "status": "fully-qualified",
      "emoji": "➕",
      "name": "heavy plus sign"
    }, {
      "codes": ["2796"],
      "status": "fully-qualified",
      "emoji": "➖",
      "name": "heavy minus sign"
    }, {
      "codes": ["2797"],
      "status": "fully-qualified",
      "emoji": "➗",
      "name": "heavy division sign"
    }, {
      "codes": ["27B0"],
      "status": "fully-qualified",
      "emoji": "➰",
      "name": "curly loop"
    }, {
      "codes": ["27BF"],
      "status": "fully-qualified",
      "emoji": "➿",
      "name": "double curly loop"
    }, {
      "codes": ["303D", "FE0F"],
      "status": "fully-qualified",
      "emoji": "〽️",
      "name": "part alternation mark"
    }, {
      "codes": ["303D"],
      "status": "non-fully-qualified",
      "emoji": "〽",
      "name": "part alternation mark"
    }, {
      "codes": ["2733", "FE0F"],
      "status": "fully-qualified",
      "emoji": "✳️",
      "name": "eight-spoked asterisk"
    }, {
      "codes": ["2733"],
      "status": "non-fully-qualified",
      "emoji": "✳",
      "name": "eight-spoked asterisk"
    }, {
      "codes": ["2734", "FE0F"],
      "status": "fully-qualified",
      "emoji": "✴️",
      "name": "eight-pointed star"
    }, {
      "codes": ["2734"],
      "status": "non-fully-qualified",
      "emoji": "✴",
      "name": "eight-pointed star"
    }, {
      "codes": ["2747", "FE0F"],
      "status": "fully-qualified",
      "emoji": "❇️",
      "name": "sparkle"
    }, {
      "codes": ["2747"],
      "status": "non-fully-qualified",
      "emoji": "❇",
      "name": "sparkle"
    }, {
      "codes": ["203C", "FE0F"],
      "status": "fully-qualified",
      "emoji": "‼️",
      "name": "double exclamation mark"
    }, {
      "codes": ["203C"],
      "status": "non-fully-qualified",
      "emoji": "‼",
      "name": "double exclamation mark"
    }, {
      "codes": ["2049", "FE0F"],
      "status": "fully-qualified",
      "emoji": "⁉️",
      "name": "exclamation question mark"
    }, {
      "codes": ["2049"],
      "status": "non-fully-qualified",
      "emoji": "⁉",
      "name": "exclamation question mark"
    }, {
      "codes": ["2753"],
      "status": "fully-qualified",
      "emoji": "❓",
      "name": "question mark"
    }, {
      "codes": ["2754"],
      "status": "fully-qualified",
      "emoji": "❔",
      "name": "white question mark"
    }, {
      "codes": ["2755"],
      "status": "fully-qualified",
      "emoji": "❕",
      "name": "white exclamation mark"
    }, {
      "codes": ["2757"],
      "status": "fully-qualified",
      "emoji": "❗",
      "name": "exclamation mark"
    }, {
      "codes": ["3030", "FE0F"],
      "status": "fully-qualified",
      "emoji": "〰️",
      "name": "wavy dash"
    }, {
      "codes": ["3030"],
      "status": "non-fully-qualified",
      "emoji": "〰",
      "name": "wavy dash"
    }, {
      "codes": ["00A9", "FE0F"],
      "status": "fully-qualified",
      "emoji": "©️",
      "name": "copyright"
    }, {
      "codes": ["00A9"],
      "status": "non-fully-qualified",
      "emoji": "©",
      "name": "copyright"
    }, {
      "codes": ["00AE", "FE0F"],
      "status": "fully-qualified",
      "emoji": "®️",
      "name": "registered"
    }, {
      "codes": ["00AE"],
      "status": "non-fully-qualified",
      "emoji": "®",
      "name": "registered"
    }, {
      "codes": ["2122", "FE0F"],
      "status": "fully-qualified",
      "emoji": "™️",
      "name": "trade mark"
    }, {
      "codes": ["2122"],
      "status": "non-fully-qualified",
      "emoji": "™",
      "name": "trade mark"
    }]
  }, {
    "name": "keycap",
    "emojis": [{
      "codes": ["0023", "20E3"],
      "status": "non-fully-qualified",
      "emoji": "#⃣",
      "name": "keycap: #"
    }, {
      "codes": ["002A", "20E3"],
      "status": "non-fully-qualified",
      "emoji": "*⃣",
      "name": "keycap: *"
    }, {
      "codes": ["0030", "20E3"],
      "status": "non-fully-qualified",
      "emoji": "0⃣",
      "name": "keycap: 0"
    }, {
      "codes": ["0031", "20E3"],
      "status": "non-fully-qualified",
      "emoji": "1⃣",
      "name": "keycap: 1"
    }, {
      "codes": ["0032", "20E3"],
      "status": "non-fully-qualified",
      "emoji": "2⃣",
      "name": "keycap: 2"
    }, {
      "codes": ["0033", "20E3"],
      "status": "non-fully-qualified",
      "emoji": "3⃣",
      "name": "keycap: 3"
    }, {
      "codes": ["0034", "20E3"],
      "status": "non-fully-qualified",
      "emoji": "4⃣",
      "name": "keycap: 4"
    }, {
      "codes": ["0035", "20E3"],
      "status": "non-fully-qualified",
      "emoji": "5⃣",
      "name": "keycap: 5"
    }, {
      "codes": ["0036", "20E3"],
      "status": "non-fully-qualified",
      "emoji": "6⃣",
      "name": "keycap: 6"
    }, {
      "codes": ["0037", "20E3"],
      "status": "non-fully-qualified",
      "emoji": "7⃣",
      "name": "keycap: 7"
    }, {
      "codes": ["0038", "20E3"],
      "status": "non-fully-qualified",
      "emoji": "8⃣",
      "name": "keycap: 8"
    }, {
      "codes": ["0039", "20E3"],
      "status": "non-fully-qualified",
      "emoji": "9⃣",
      "name": "keycap: 9"
    }, {
      "codes": ["1F51F"],
      "status": "fully-qualified",
      "emoji": "🔟",
      "name": "keycap 10"
    }]
  }, {
    "name": "alphanum",
    "emojis": [{
      "codes": ["1F4AF"],
      "status": "fully-qualified",
      "emoji": "💯",
      "name": "hundred points"
    }, {
      "codes": ["1F520"],
      "status": "fully-qualified",
      "emoji": "🔠",
      "name": "input latin uppercase"
    }, {
      "codes": ["1F521"],
      "status": "fully-qualified",
      "emoji": "🔡",
      "name": "input latin lowercase"
    }, {
      "codes": ["1F522"],
      "status": "fully-qualified",
      "emoji": "🔢",
      "name": "input numbers"
    }, {
      "codes": ["1F523"],
      "status": "fully-qualified",
      "emoji": "🔣",
      "name": "input symbols"
    }, {
      "codes": ["1F524"],
      "status": "fully-qualified",
      "emoji": "🔤",
      "name": "input latin letters"
    }, {
      "codes": ["1F170", "FE0F"],
      "status": "fully-qualified",
      "emoji": "🅰️",
      "name": "A button (blood type)"
    }, {
      "codes": ["1F170"],
      "status": "non-fully-qualified",
      "emoji": "🅰",
      "name": "A button (blood type)"
    }, {
      "codes": ["1F18E"],
      "status": "fully-qualified",
      "emoji": "🆎",
      "name": "AB button (blood type)"
    }, {
      "codes": ["1F171", "FE0F"],
      "status": "fully-qualified",
      "emoji": "🅱️",
      "name": "B button (blood type)"
    }, {
      "codes": ["1F171"],
      "status": "non-fully-qualified",
      "emoji": "🅱",
      "name": "B button (blood type)"
    }, {
      "codes": ["1F191"],
      "status": "fully-qualified",
      "emoji": "🆑",
      "name": "CL button"
    }, {
      "codes": ["1F192"],
      "status": "fully-qualified",
      "emoji": "🆒",
      "name": "COOL button"
    }, {
      "codes": ["1F193"],
      "status": "fully-qualified",
      "emoji": "🆓",
      "name": "FREE button"
    }, {
      "codes": ["2139", "FE0F"],
      "status": "fully-qualified",
      "emoji": "ℹ️",
      "name": "information"
    }, {
      "codes": ["2139"],
      "status": "non-fully-qualified",
      "emoji": "ℹ",
      "name": "information"
    }, {
      "codes": ["1F194"],
      "status": "fully-qualified",
      "emoji": "🆔",
      "name": "ID button"
    }, {
      "codes": ["24C2", "FE0F"],
      "status": "fully-qualified",
      "emoji": "Ⓜ️",
      "name": "circled M"
    }, {
      "codes": ["24C2"],
      "status": "non-fully-qualified",
      "emoji": "Ⓜ",
      "name": "circled M"
    }, {
      "codes": ["1F195"],
      "status": "fully-qualified",
      "emoji": "🆕",
      "name": "NEW button"
    }, {
      "codes": ["1F196"],
      "status": "fully-qualified",
      "emoji": "🆖",
      "name": "NG button"
    }, {
      "codes": ["1F17E", "FE0F"],
      "status": "fully-qualified",
      "emoji": "🅾️",
      "name": "O button (blood type)"
    }, {
      "codes": ["1F17E"],
      "status": "non-fully-qualified",
      "emoji": "🅾",
      "name": "O button (blood type)"
    }, {
      "codes": ["1F197"],
      "status": "fully-qualified",
      "emoji": "🆗",
      "name": "OK button"
    }, {
      "codes": ["1F17F", "FE0F"],
      "status": "fully-qualified",
      "emoji": "🅿️",
      "name": "P button"
    }, {
      "codes": ["1F17F"],
      "status": "non-fully-qualified",
      "emoji": "🅿",
      "name": "P button"
    }, {
      "codes": ["1F198"],
      "status": "fully-qualified",
      "emoji": "🆘",
      "name": "SOS button"
    }, {
      "codes": ["1F199"],
      "status": "fully-qualified",
      "emoji": "🆙",
      "name": "UP! button"
    }, {
      "codes": ["1F19A"],
      "status": "fully-qualified",
      "emoji": "🆚",
      "name": "VS button"
    }, {
      "codes": ["1F201"],
      "status": "fully-qualified",
      "emoji": "🈁",
      "name": "Japanese “here” button"
    }, {
      "codes": ["1F202", "FE0F"],
      "status": "fully-qualified",
      "emoji": "🈂️",
      "name": "Japanese “service charge” button"
    }, {
      "codes": ["1F202"],
      "status": "non-fully-qualified",
      "emoji": "🈂",
      "name": "Japanese “service charge” button"
    }, {
      "codes": ["1F237", "FE0F"],
      "status": "fully-qualified",
      "emoji": "🈷️",
      "name": "Japanese “monthly amount” button"
    }, {
      "codes": ["1F237"],
      "status": "non-fully-qualified",
      "emoji": "🈷",
      "name": "Japanese “monthly amount” button"
    }, {
      "codes": ["1F236"],
      "status": "fully-qualified",
      "emoji": "🈶",
      "name": "Japanese “not free of charge” button"
    }, {
      "codes": ["1F22F"],
      "status": "fully-qualified",
      "emoji": "🈯",
      "name": "Japanese “reserved” button"
    }, {
      "codes": ["1F250"],
      "status": "fully-qualified",
      "emoji": "🉐",
      "name": "Japanese “bargain” button"
    }, {
      "codes": ["1F239"],
      "status": "fully-qualified",
      "emoji": "🈹",
      "name": "Japanese “discount” button"
    }, {
      "codes": ["1F21A"],
      "status": "fully-qualified",
      "emoji": "🈚",
      "name": "Japanese “free of charge” button"
    }, {
      "codes": ["1F232"],
      "status": "fully-qualified",
      "emoji": "🈲",
      "name": "Japanese “prohibited” button"
    }, {
      "codes": ["1F251"],
      "status": "fully-qualified",
      "emoji": "🉑",
      "name": "Japanese “acceptable” button"
    }, {
      "codes": ["1F238"],
      "status": "fully-qualified",
      "emoji": "🈸",
      "name": "Japanese “application” button"
    }, {
      "codes": ["1F234"],
      "status": "fully-qualified",
      "emoji": "🈴",
      "name": "Japanese “passing grade” button"
    }, {
      "codes": ["1F233"],
      "status": "fully-qualified",
      "emoji": "🈳",
      "name": "Japanese “vacancy” button"
    }, {
      "codes": ["3297", "FE0F"],
      "status": "fully-qualified",
      "emoji": "㊗️",
      "name": "Japanese “congratulations” button"
    }, {
      "codes": ["3297"],
      "status": "non-fully-qualified",
      "emoji": "㊗",
      "name": "Japanese “congratulations” button"
    }, {
      "codes": ["3299", "FE0F"],
      "status": "fully-qualified",
      "emoji": "㊙️",
      "name": "Japanese “secret” button"
    }, {
      "codes": ["3299"],
      "status": "non-fully-qualified",
      "emoji": "㊙",
      "name": "Japanese “secret” button"
    }, {
      "codes": ["1F23A"],
      "status": "fully-qualified",
      "emoji": "🈺",
      "name": "Japanese “open for business” button"
    }, {
      "codes": ["1F235"],
      "status": "fully-qualified",
      "emoji": "🈵",
      "name": "Japanese “no vacancy” button"
    }]
  }, {
    "name": "geometric",
    "emojis": [{
      "codes": ["25AA", "FE0F"],
      "status": "fully-qualified",
      "emoji": "▪️",
      "name": "black small square"
    }, {
      "codes": ["25AA"],
      "status": "non-fully-qualified",
      "emoji": "▪",
      "name": "black small square"
    }, {
      "codes": ["25AB", "FE0F"],
      "status": "fully-qualified",
      "emoji": "▫️",
      "name": "white small square"
    }, {
      "codes": ["25AB"],
      "status": "non-fully-qualified",
      "emoji": "▫",
      "name": "white small square"
    }, {
      "codes": ["25FB", "FE0F"],
      "status": "fully-qualified",
      "emoji": "◻️",
      "name": "white medium square"
    }, {
      "codes": ["25FB"],
      "status": "non-fully-qualified",
      "emoji": "◻",
      "name": "white medium square"
    }, {
      "codes": ["25FC", "FE0F"],
      "status": "fully-qualified",
      "emoji": "◼️",
      "name": "black medium square"
    }, {
      "codes": ["25FC"],
      "status": "non-fully-qualified",
      "emoji": "◼",
      "name": "black medium square"
    }, {
      "codes": ["25FD"],
      "status": "fully-qualified",
      "emoji": "◽",
      "name": "white medium-small square"
    }, {
      "codes": ["25FE"],
      "status": "fully-qualified",
      "emoji": "◾",
      "name": "black medium-small square"
    }, {
      "codes": ["2B1B"],
      "status": "fully-qualified",
      "emoji": "⬛",
      "name": "black large square"
    }, {
      "codes": ["2B1C"],
      "status": "fully-qualified",
      "emoji": "⬜",
      "name": "white large square"
    }, {
      "codes": ["1F536"],
      "status": "fully-qualified",
      "emoji": "🔶",
      "name": "large orange diamond"
    }, {
      "codes": ["1F537"],
      "status": "fully-qualified",
      "emoji": "🔷",
      "name": "large blue diamond"
    }, {
      "codes": ["1F538"],
      "status": "fully-qualified",
      "emoji": "🔸",
      "name": "small orange diamond"
    }, {
      "codes": ["1F539"],
      "status": "fully-qualified",
      "emoji": "🔹",
      "name": "small blue diamond"
    }, {
      "codes": ["1F53A"],
      "status": "fully-qualified",
      "emoji": "🔺",
      "name": "red triangle pointed up"
    }, {
      "codes": ["1F53B"],
      "status": "fully-qualified",
      "emoji": "🔻",
      "name": "red triangle pointed down"
    }, {
      "codes": ["1F4A0"],
      "status": "fully-qualified",
      "emoji": "💠",
      "name": "diamond with a dot"
    }, {
      "codes": ["1F518"],
      "status": "fully-qualified",
      "emoji": "🔘",
      "name": "radio button"
    }, {
      "codes": ["1F532"],
      "status": "fully-qualified",
      "emoji": "🔲",
      "name": "black square button"
    }, {
      "codes": ["1F533"],
      "status": "fully-qualified",
      "emoji": "🔳",
      "name": "white square button"
    }, {
      "codes": ["26AA"],
      "status": "fully-qualified",
      "emoji": "⚪",
      "name": "white circle"
    }, {
      "codes": ["26AB"],
      "status": "fully-qualified",
      "emoji": "⚫",
      "name": "black circle"
    }, {
      "codes": ["1F534"],
      "status": "fully-qualified",
      "emoji": "🔴",
      "name": "red circle"
    }, {
      "codes": ["1F535"],
      "status": "fully-qualified",
      "emoji": "🔵",
      "name": "blue circle"
    }]
  }]
}, {
  "name": "Flags",
  "subGroups": [{
    "name": "flag",
    "emojis": [{
      "codes": ["1F3C1"],
      "status": "fully-qualified",
      "emoji": "🏁",
      "name": "chequered flag"
    }, {
      "codes": ["1F6A9"],
      "status": "fully-qualified",
      "emoji": "🚩",
      "name": "triangular flag"
    }, {
      "codes": ["1F38C"],
      "status": "fully-qualified",
      "emoji": "🎌",
      "name": "crossed flags"
    }, {
      "codes": ["1F3F4"],
      "status": "fully-qualified",
      "emoji": "🏴",
      "name": "black flag"
    }, {
      "codes": ["1F3F3", "FE0F"],
      "status": "fully-qualified",
      "emoji": "🏳️",
      "name": "white flag"
    }, {
      "codes": ["1F3F3"],
      "status": "non-fully-qualified",
      "emoji": "🏳",
      "name": "white flag"
    }]
  }, {
    "name": "country-flag",
    "emojis": [{
      "codes": ["1F1E6", "1F1E8"],
      "status": "fully-qualified",
      "emoji": "🇦🇨",
      "name": "Ascension Island"
    }, {
      "codes": ["1F1E6", "1F1E9"],
      "status": "fully-qualified",
      "emoji": "🇦🇩",
      "name": "Andorra"
    }, {
      "codes": ["1F1E6", "1F1EA"],
      "status": "fully-qualified",
      "emoji": "🇦🇪",
      "name": "United Arab Emirates"
    }, {
      "codes": ["1F1E6", "1F1EB"],
      "status": "fully-qualified",
      "emoji": "🇦🇫",
      "name": "Afghanistan"
    }, {
      "codes": ["1F1E6", "1F1EC"],
      "status": "fully-qualified",
      "emoji": "🇦🇬",
      "name": "Antigua & Barbuda"
    }, {
      "codes": ["1F1E6", "1F1EE"],
      "status": "fully-qualified",
      "emoji": "🇦🇮",
      "name": "Anguilla"
    }, {
      "codes": ["1F1E6", "1F1F1"],
      "status": "fully-qualified",
      "emoji": "🇦🇱",
      "name": "Albania"
    }, {
      "codes": ["1F1E6", "1F1F2"],
      "status": "fully-qualified",
      "emoji": "🇦🇲",
      "name": "Armenia"
    }, {
      "codes": ["1F1E6", "1F1F4"],
      "status": "fully-qualified",
      "emoji": "🇦🇴",
      "name": "Angola"
    }, {
      "codes": ["1F1E6", "1F1F6"],
      "status": "fully-qualified",
      "emoji": "🇦🇶",
      "name": "Antarctica"
    }, {
      "codes": ["1F1E6", "1F1F7"],
      "status": "fully-qualified",
      "emoji": "🇦🇷",
      "name": "Argentina"
    }, {
      "codes": ["1F1E6", "1F1F8"],
      "status": "fully-qualified",
      "emoji": "🇦🇸",
      "name": "American Samoa"
    }, {
      "codes": ["1F1E6", "1F1F9"],
      "status": "fully-qualified",
      "emoji": "🇦🇹",
      "name": "Austria"
    }, {
      "codes": ["1F1E6", "1F1FA"],
      "status": "fully-qualified",
      "emoji": "🇦🇺",
      "name": "Australia"
    }, {
      "codes": ["1F1E6", "1F1FC"],
      "status": "fully-qualified",
      "emoji": "🇦🇼",
      "name": "Aruba"
    }, {
      "codes": ["1F1E6", "1F1FD"],
      "status": "fully-qualified",
      "emoji": "🇦🇽",
      "name": "Åland Islands"
    }, {
      "codes": ["1F1E6", "1F1FF"],
      "status": "fully-qualified",
      "emoji": "🇦🇿",
      "name": "Azerbaijan"
    }, {
      "codes": ["1F1E7", "1F1E6"],
      "status": "fully-qualified",
      "emoji": "🇧🇦",
      "name": "Bosnia & Herzegovina"
    }, {
      "codes": ["1F1E7", "1F1E7"],
      "status": "fully-qualified",
      "emoji": "🇧🇧",
      "name": "Barbados"
    }, {
      "codes": ["1F1E7", "1F1E9"],
      "status": "fully-qualified",
      "emoji": "🇧🇩",
      "name": "Bangladesh"
    }, {
      "codes": ["1F1E7", "1F1EA"],
      "status": "fully-qualified",
      "emoji": "🇧🇪",
      "name": "Belgium"
    }, {
      "codes": ["1F1E7", "1F1EB"],
      "status": "fully-qualified",
      "emoji": "🇧🇫",
      "name": "Burkina Faso"
    }, {
      "codes": ["1F1E7", "1F1EC"],
      "status": "fully-qualified",
      "emoji": "🇧🇬",
      "name": "Bulgaria"
    }, {
      "codes": ["1F1E7", "1F1ED"],
      "status": "fully-qualified",
      "emoji": "🇧🇭",
      "name": "Bahrain"
    }, {
      "codes": ["1F1E7", "1F1EE"],
      "status": "fully-qualified",
      "emoji": "🇧🇮",
      "name": "Burundi"
    }, {
      "codes": ["1F1E7", "1F1EF"],
      "status": "fully-qualified",
      "emoji": "🇧🇯",
      "name": "Benin"
    }, {
      "codes": ["1F1E7", "1F1F1"],
      "status": "fully-qualified",
      "emoji": "🇧🇱",
      "name": "St. Barthélemy"
    }, {
      "codes": ["1F1E7", "1F1F2"],
      "status": "fully-qualified",
      "emoji": "🇧🇲",
      "name": "Bermuda"
    }, {
      "codes": ["1F1E7", "1F1F3"],
      "status": "fully-qualified",
      "emoji": "🇧🇳",
      "name": "Brunei"
    }, {
      "codes": ["1F1E7", "1F1F4"],
      "status": "fully-qualified",
      "emoji": "🇧🇴",
      "name": "Bolivia"
    }, {
      "codes": ["1F1E7", "1F1F6"],
      "status": "fully-qualified",
      "emoji": "🇧🇶",
      "name": "Caribbean Netherlands"
    }, {
      "codes": ["1F1E7", "1F1F7"],
      "status": "fully-qualified",
      "emoji": "🇧🇷",
      "name": "Brazil"
    }, {
      "codes": ["1F1E7", "1F1F8"],
      "status": "fully-qualified",
      "emoji": "🇧🇸",
      "name": "Bahamas"
    }, {
      "codes": ["1F1E7", "1F1F9"],
      "status": "fully-qualified",
      "emoji": "🇧🇹",
      "name": "Bhutan"
    }, {
      "codes": ["1F1E7", "1F1FB"],
      "status": "fully-qualified",
      "emoji": "🇧🇻",
      "name": "Bouvet Island"
    }, {
      "codes": ["1F1E7", "1F1FC"],
      "status": "fully-qualified",
      "emoji": "🇧🇼",
      "name": "Botswana"
    }, {
      "codes": ["1F1E7", "1F1FE"],
      "status": "fully-qualified",
      "emoji": "🇧🇾",
      "name": "Belarus"
    }, {
      "codes": ["1F1E7", "1F1FF"],
      "status": "fully-qualified",
      "emoji": "🇧🇿",
      "name": "Belize"
    }, {
      "codes": ["1F1E8", "1F1E6"],
      "status": "fully-qualified",
      "emoji": "🇨🇦",
      "name": "Canada"
    }, {
      "codes": ["1F1E8", "1F1E8"],
      "status": "fully-qualified",
      "emoji": "🇨🇨",
      "name": "Cocos (Keeling) Islands"
    }, {
      "codes": ["1F1E8", "1F1E9"],
      "status": "fully-qualified",
      "emoji": "🇨🇩",
      "name": "Congo - Kinshasa"
    }, {
      "codes": ["1F1E8", "1F1EB"],
      "status": "fully-qualified",
      "emoji": "🇨🇫",
      "name": "Central African Republic"
    }, {
      "codes": ["1F1E8", "1F1EC"],
      "status": "fully-qualified",
      "emoji": "🇨🇬",
      "name": "Congo - Brazzaville"
    }, {
      "codes": ["1F1E8", "1F1ED"],
      "status": "fully-qualified",
      "emoji": "🇨🇭",
      "name": "Switzerland"
    }, {
      "codes": ["1F1E8", "1F1EE"],
      "status": "fully-qualified",
      "emoji": "🇨🇮",
      "name": "Côte d’Ivoire"
    }, {
      "codes": ["1F1E8", "1F1F0"],
      "status": "fully-qualified",
      "emoji": "🇨🇰",
      "name": "Cook Islands"
    }, {
      "codes": ["1F1E8", "1F1F1"],
      "status": "fully-qualified",
      "emoji": "🇨🇱",
      "name": "Chile"
    }, {
      "codes": ["1F1E8", "1F1F2"],
      "status": "fully-qualified",
      "emoji": "🇨🇲",
      "name": "Cameroon"
    }, {
      "codes": ["1F1E8", "1F1F3"],
      "status": "fully-qualified",
      "emoji": "🇨🇳",
      "name": "China"
    }, {
      "codes": ["1F1E8", "1F1F4"],
      "status": "fully-qualified",
      "emoji": "🇨🇴",
      "name": "Colombia"
    }, {
      "codes": ["1F1E8", "1F1F5"],
      "status": "fully-qualified",
      "emoji": "🇨🇵",
      "name": "Clipperton Island"
    }, {
      "codes": ["1F1E8", "1F1F7"],
      "status": "fully-qualified",
      "emoji": "🇨🇷",
      "name": "Costa Rica"
    }, {
      "codes": ["1F1E8", "1F1FA"],
      "status": "fully-qualified",
      "emoji": "🇨🇺",
      "name": "Cuba"
    }, {
      "codes": ["1F1E8", "1F1FB"],
      "status": "fully-qualified",
      "emoji": "🇨🇻",
      "name": "Cape Verde"
    }, {
      "codes": ["1F1E8", "1F1FC"],
      "status": "fully-qualified",
      "emoji": "🇨🇼",
      "name": "Curaçao"
    }, {
      "codes": ["1F1E8", "1F1FD"],
      "status": "fully-qualified",
      "emoji": "🇨🇽",
      "name": "Christmas Island"
    }, {
      "codes": ["1F1E8", "1F1FE"],
      "status": "fully-qualified",
      "emoji": "🇨🇾",
      "name": "Cyprus"
    }, {
      "codes": ["1F1E8", "1F1FF"],
      "status": "fully-qualified",
      "emoji": "🇨🇿",
      "name": "Czechia"
    }, {
      "codes": ["1F1E9", "1F1EA"],
      "status": "fully-qualified",
      "emoji": "🇩🇪",
      "name": "Germany"
    }, {
      "codes": ["1F1E9", "1F1EC"],
      "status": "fully-qualified",
      "emoji": "🇩🇬",
      "name": "Diego Garcia"
    }, {
      "codes": ["1F1E9", "1F1EF"],
      "status": "fully-qualified",
      "emoji": "🇩🇯",
      "name": "Djibouti"
    }, {
      "codes": ["1F1E9", "1F1F0"],
      "status": "fully-qualified",
      "emoji": "🇩🇰",
      "name": "Denmark"
    }, {
      "codes": ["1F1E9", "1F1F2"],
      "status": "fully-qualified",
      "emoji": "🇩🇲",
      "name": "Dominica"
    }, {
      "codes": ["1F1E9", "1F1F4"],
      "status": "fully-qualified",
      "emoji": "🇩🇴",
      "name": "Dominican Republic"
    }, {
      "codes": ["1F1E9", "1F1FF"],
      "status": "fully-qualified",
      "emoji": "🇩🇿",
      "name": "Algeria"
    }, {
      "codes": ["1F1EA", "1F1E6"],
      "status": "fully-qualified",
      "emoji": "🇪🇦",
      "name": "Ceuta & Melilla"
    }, {
      "codes": ["1F1EA", "1F1E8"],
      "status": "fully-qualified",
      "emoji": "🇪🇨",
      "name": "Ecuador"
    }, {
      "codes": ["1F1EA", "1F1EA"],
      "status": "fully-qualified",
      "emoji": "🇪🇪",
      "name": "Estonia"
    }, {
      "codes": ["1F1EA", "1F1EC"],
      "status": "fully-qualified",
      "emoji": "🇪🇬",
      "name": "Egypt"
    }, {
      "codes": ["1F1EA", "1F1ED"],
      "status": "fully-qualified",
      "emoji": "🇪🇭",
      "name": "Western Sahara"
    }, {
      "codes": ["1F1EA", "1F1F7"],
      "status": "fully-qualified",
      "emoji": "🇪🇷",
      "name": "Eritrea"
    }, {
      "codes": ["1F1EA", "1F1F8"],
      "status": "fully-qualified",
      "emoji": "🇪🇸",
      "name": "Spain"
    }, {
      "codes": ["1F1EA", "1F1F9"],
      "status": "fully-qualified",
      "emoji": "🇪🇹",
      "name": "Ethiopia"
    }, {
      "codes": ["1F1EA", "1F1FA"],
      "status": "fully-qualified",
      "emoji": "🇪🇺",
      "name": "European Union"
    }, {
      "codes": ["1F1EB", "1F1EE"],
      "status": "fully-qualified",
      "emoji": "🇫🇮",
      "name": "Finland"
    }, {
      "codes": ["1F1EB", "1F1EF"],
      "status": "fully-qualified",
      "emoji": "🇫🇯",
      "name": "Fiji"
    }, {
      "codes": ["1F1EB", "1F1F0"],
      "status": "fully-qualified",
      "emoji": "🇫🇰",
      "name": "Falkland Islands"
    }, {
      "codes": ["1F1EB", "1F1F2"],
      "status": "fully-qualified",
      "emoji": "🇫🇲",
      "name": "Micronesia"
    }, {
      "codes": ["1F1EB", "1F1F4"],
      "status": "fully-qualified",
      "emoji": "🇫🇴",
      "name": "Faroe Islands"
    }, {
      "codes": ["1F1EB", "1F1F7"],
      "status": "fully-qualified",
      "emoji": "🇫🇷",
      "name": "France"
    }, {
      "codes": ["1F1EC", "1F1E6"],
      "status": "fully-qualified",
      "emoji": "🇬🇦",
      "name": "Gabon"
    }, {
      "codes": ["1F1EC", "1F1E7"],
      "status": "fully-qualified",
      "emoji": "🇬🇧",
      "name": "United Kingdom"
    }, {
      "codes": ["1F1EC", "1F1E9"],
      "status": "fully-qualified",
      "emoji": "🇬🇩",
      "name": "Grenada"
    }, {
      "codes": ["1F1EC", "1F1EA"],
      "status": "fully-qualified",
      "emoji": "🇬🇪",
      "name": "Georgia"
    }, {
      "codes": ["1F1EC", "1F1EB"],
      "status": "fully-qualified",
      "emoji": "🇬🇫",
      "name": "French Guiana"
    }, {
      "codes": ["1F1EC", "1F1EC"],
      "status": "fully-qualified",
      "emoji": "🇬🇬",
      "name": "Guernsey"
    }, {
      "codes": ["1F1EC", "1F1ED"],
      "status": "fully-qualified",
      "emoji": "🇬🇭",
      "name": "Ghana"
    }, {
      "codes": ["1F1EC", "1F1EE"],
      "status": "fully-qualified",
      "emoji": "🇬🇮",
      "name": "Gibraltar"
    }, {
      "codes": ["1F1EC", "1F1F1"],
      "status": "fully-qualified",
      "emoji": "🇬🇱",
      "name": "Greenland"
    }, {
      "codes": ["1F1EC", "1F1F2"],
      "status": "fully-qualified",
      "emoji": "🇬🇲",
      "name": "Gambia"
    }, {
      "codes": ["1F1EC", "1F1F3"],
      "status": "fully-qualified",
      "emoji": "🇬🇳",
      "name": "Guinea"
    }, {
      "codes": ["1F1EC", "1F1F5"],
      "status": "fully-qualified",
      "emoji": "🇬🇵",
      "name": "Guadeloupe"
    }, {
      "codes": ["1F1EC", "1F1F6"],
      "status": "fully-qualified",
      "emoji": "🇬🇶",
      "name": "Equatorial Guinea"
    }, {
      "codes": ["1F1EC", "1F1F7"],
      "status": "fully-qualified",
      "emoji": "🇬🇷",
      "name": "Greece"
    }, {
      "codes": ["1F1EC", "1F1F8"],
      "status": "fully-qualified",
      "emoji": "🇬🇸",
      "name": "South Georgia & South Sandwich Islands"
    }, {
      "codes": ["1F1EC", "1F1F9"],
      "status": "fully-qualified",
      "emoji": "🇬🇹",
      "name": "Guatemala"
    }, {
      "codes": ["1F1EC", "1F1FA"],
      "status": "fully-qualified",
      "emoji": "🇬🇺",
      "name": "Guam"
    }, {
      "codes": ["1F1EC", "1F1FC"],
      "status": "fully-qualified",
      "emoji": "🇬🇼",
      "name": "Guinea-Bissau"
    }, {
      "codes": ["1F1EC", "1F1FE"],
      "status": "fully-qualified",
      "emoji": "🇬🇾",
      "name": "Guyana"
    }, {
      "codes": ["1F1ED", "1F1F0"],
      "status": "fully-qualified",
      "emoji": "🇭🇰",
      "name": "Hong Kong SAR China"
    }, {
      "codes": ["1F1ED", "1F1F2"],
      "status": "fully-qualified",
      "emoji": "🇭🇲",
      "name": "Heard & McDonald Islands"
    }, {
      "codes": ["1F1ED", "1F1F3"],
      "status": "fully-qualified",
      "emoji": "🇭🇳",
      "name": "Honduras"
    }, {
      "codes": ["1F1ED", "1F1F7"],
      "status": "fully-qualified",
      "emoji": "🇭🇷",
      "name": "Croatia"
    }, {
      "codes": ["1F1ED", "1F1F9"],
      "status": "fully-qualified",
      "emoji": "🇭🇹",
      "name": "Haiti"
    }, {
      "codes": ["1F1ED", "1F1FA"],
      "status": "fully-qualified",
      "emoji": "🇭🇺",
      "name": "Hungary"
    }, {
      "codes": ["1F1EE", "1F1E8"],
      "status": "fully-qualified",
      "emoji": "🇮🇨",
      "name": "Canary Islands"
    }, {
      "codes": ["1F1EE", "1F1E9"],
      "status": "fully-qualified",
      "emoji": "🇮🇩",
      "name": "Indonesia"
    }, {
      "codes": ["1F1EE", "1F1EA"],
      "status": "fully-qualified",
      "emoji": "🇮🇪",
      "name": "Ireland"
    }, {
      "codes": ["1F1EE", "1F1F1"],
      "status": "fully-qualified",
      "emoji": "🇮🇱",
      "name": "Israel"
    }, {
      "codes": ["1F1EE", "1F1F2"],
      "status": "fully-qualified",
      "emoji": "🇮🇲",
      "name": "Isle of Man"
    }, {
      "codes": ["1F1EE", "1F1F3"],
      "status": "fully-qualified",
      "emoji": "🇮🇳",
      "name": "India"
    }, {
      "codes": ["1F1EE", "1F1F4"],
      "status": "fully-qualified",
      "emoji": "🇮🇴",
      "name": "British Indian Ocean Territory"
    }, {
      "codes": ["1F1EE", "1F1F6"],
      "status": "fully-qualified",
      "emoji": "🇮🇶",
      "name": "Iraq"
    }, {
      "codes": ["1F1EE", "1F1F7"],
      "status": "fully-qualified",
      "emoji": "🇮🇷",
      "name": "Iran"
    }, {
      "codes": ["1F1EE", "1F1F8"],
      "status": "fully-qualified",
      "emoji": "🇮🇸",
      "name": "Iceland"
    }, {
      "codes": ["1F1EE", "1F1F9"],
      "status": "fully-qualified",
      "emoji": "🇮🇹",
      "name": "Italy"
    }, {
      "codes": ["1F1EF", "1F1EA"],
      "status": "fully-qualified",
      "emoji": "🇯🇪",
      "name": "Jersey"
    }, {
      "codes": ["1F1EF", "1F1F2"],
      "status": "fully-qualified",
      "emoji": "🇯🇲",
      "name": "Jamaica"
    }, {
      "codes": ["1F1EF", "1F1F4"],
      "status": "fully-qualified",
      "emoji": "🇯🇴",
      "name": "Jordan"
    }, {
      "codes": ["1F1EF", "1F1F5"],
      "status": "fully-qualified",
      "emoji": "🇯🇵",
      "name": "Japan"
    }, {
      "codes": ["1F1F0", "1F1EA"],
      "status": "fully-qualified",
      "emoji": "🇰🇪",
      "name": "Kenya"
    }, {
      "codes": ["1F1F0", "1F1EC"],
      "status": "fully-qualified",
      "emoji": "🇰🇬",
      "name": "Kyrgyzstan"
    }, {
      "codes": ["1F1F0", "1F1ED"],
      "status": "fully-qualified",
      "emoji": "🇰🇭",
      "name": "Cambodia"
    }, {
      "codes": ["1F1F0", "1F1EE"],
      "status": "fully-qualified",
      "emoji": "🇰🇮",
      "name": "Kiribati"
    }, {
      "codes": ["1F1F0", "1F1F2"],
      "status": "fully-qualified",
      "emoji": "🇰🇲",
      "name": "Comoros"
    }, {
      "codes": ["1F1F0", "1F1F3"],
      "status": "fully-qualified",
      "emoji": "🇰🇳",
      "name": "St. Kitts & Nevis"
    }, {
      "codes": ["1F1F0", "1F1F5"],
      "status": "fully-qualified",
      "emoji": "🇰🇵",
      "name": "North Korea"
    }, {
      "codes": ["1F1F0", "1F1F7"],
      "status": "fully-qualified",
      "emoji": "🇰🇷",
      "name": "South Korea"
    }, {
      "codes": ["1F1F0", "1F1FC"],
      "status": "fully-qualified",
      "emoji": "🇰🇼",
      "name": "Kuwait"
    }, {
      "codes": ["1F1F0", "1F1FE"],
      "status": "fully-qualified",
      "emoji": "🇰🇾",
      "name": "Cayman Islands"
    }, {
      "codes": ["1F1F0", "1F1FF"],
      "status": "fully-qualified",
      "emoji": "🇰🇿",
      "name": "Kazakhstan"
    }, {
      "codes": ["1F1F1", "1F1E6"],
      "status": "fully-qualified",
      "emoji": "🇱🇦",
      "name": "Laos"
    }, {
      "codes": ["1F1F1", "1F1E7"],
      "status": "fully-qualified",
      "emoji": "🇱🇧",
      "name": "Lebanon"
    }, {
      "codes": ["1F1F1", "1F1E8"],
      "status": "fully-qualified",
      "emoji": "🇱🇨",
      "name": "St. Lucia"
    }, {
      "codes": ["1F1F1", "1F1EE"],
      "status": "fully-qualified",
      "emoji": "🇱🇮",
      "name": "Liechtenstein"
    }, {
      "codes": ["1F1F1", "1F1F0"],
      "status": "fully-qualified",
      "emoji": "🇱🇰",
      "name": "Sri Lanka"
    }, {
      "codes": ["1F1F1", "1F1F7"],
      "status": "fully-qualified",
      "emoji": "🇱🇷",
      "name": "Liberia"
    }, {
      "codes": ["1F1F1", "1F1F8"],
      "status": "fully-qualified",
      "emoji": "🇱🇸",
      "name": "Lesotho"
    }, {
      "codes": ["1F1F1", "1F1F9"],
      "status": "fully-qualified",
      "emoji": "🇱🇹",
      "name": "Lithuania"
    }, {
      "codes": ["1F1F1", "1F1FA"],
      "status": "fully-qualified",
      "emoji": "🇱🇺",
      "name": "Luxembourg"
    }, {
      "codes": ["1F1F1", "1F1FB"],
      "status": "fully-qualified",
      "emoji": "🇱🇻",
      "name": "Latvia"
    }, {
      "codes": ["1F1F1", "1F1FE"],
      "status": "fully-qualified",
      "emoji": "🇱🇾",
      "name": "Libya"
    }, {
      "codes": ["1F1F2", "1F1E6"],
      "status": "fully-qualified",
      "emoji": "🇲🇦",
      "name": "Morocco"
    }, {
      "codes": ["1F1F2", "1F1E8"],
      "status": "fully-qualified",
      "emoji": "🇲🇨",
      "name": "Monaco"
    }, {
      "codes": ["1F1F2", "1F1E9"],
      "status": "fully-qualified",
      "emoji": "🇲🇩",
      "name": "Moldova"
    }, {
      "codes": ["1F1F2", "1F1EA"],
      "status": "fully-qualified",
      "emoji": "🇲🇪",
      "name": "Montenegro"
    }, {
      "codes": ["1F1F2", "1F1EB"],
      "status": "fully-qualified",
      "emoji": "🇲🇫",
      "name": "St. Martin"
    }, {
      "codes": ["1F1F2", "1F1EC"],
      "status": "fully-qualified",
      "emoji": "🇲🇬",
      "name": "Madagascar"
    }, {
      "codes": ["1F1F2", "1F1ED"],
      "status": "fully-qualified",
      "emoji": "🇲🇭",
      "name": "Marshall Islands"
    }, {
      "codes": ["1F1F2", "1F1F0"],
      "status": "fully-qualified",
      "emoji": "🇲🇰",
      "name": "Macedonia"
    }, {
      "codes": ["1F1F2", "1F1F1"],
      "status": "fully-qualified",
      "emoji": "🇲🇱",
      "name": "Mali"
    }, {
      "codes": ["1F1F2", "1F1F2"],
      "status": "fully-qualified",
      "emoji": "🇲🇲",
      "name": "Myanmar (Burma)"
    }, {
      "codes": ["1F1F2", "1F1F3"],
      "status": "fully-qualified",
      "emoji": "🇲🇳",
      "name": "Mongolia"
    }, {
      "codes": ["1F1F2", "1F1F4"],
      "status": "fully-qualified",
      "emoji": "🇲🇴",
      "name": "Macau SAR China"
    }, {
      "codes": ["1F1F2", "1F1F5"],
      "status": "fully-qualified",
      "emoji": "🇲🇵",
      "name": "Northern Mariana Islands"
    }, {
      "codes": ["1F1F2", "1F1F6"],
      "status": "fully-qualified",
      "emoji": "🇲🇶",
      "name": "Martinique"
    }, {
      "codes": ["1F1F2", "1F1F7"],
      "status": "fully-qualified",
      "emoji": "🇲🇷",
      "name": "Mauritania"
    }, {
      "codes": ["1F1F2", "1F1F8"],
      "status": "fully-qualified",
      "emoji": "🇲🇸",
      "name": "Montserrat"
    }, {
      "codes": ["1F1F2", "1F1F9"],
      "status": "fully-qualified",
      "emoji": "🇲🇹",
      "name": "Malta"
    }, {
      "codes": ["1F1F2", "1F1FA"],
      "status": "fully-qualified",
      "emoji": "🇲🇺",
      "name": "Mauritius"
    }, {
      "codes": ["1F1F2", "1F1FB"],
      "status": "fully-qualified",
      "emoji": "🇲🇻",
      "name": "Maldives"
    }, {
      "codes": ["1F1F2", "1F1FC"],
      "status": "fully-qualified",
      "emoji": "🇲🇼",
      "name": "Malawi"
    }, {
      "codes": ["1F1F2", "1F1FD"],
      "status": "fully-qualified",
      "emoji": "🇲🇽",
      "name": "Mexico"
    }, {
      "codes": ["1F1F2", "1F1FE"],
      "status": "fully-qualified",
      "emoji": "🇲🇾",
      "name": "Malaysia"
    }, {
      "codes": ["1F1F2", "1F1FF"],
      "status": "fully-qualified",
      "emoji": "🇲🇿",
      "name": "Mozambique"
    }, {
      "codes": ["1F1F3", "1F1E6"],
      "status": "fully-qualified",
      "emoji": "🇳🇦",
      "name": "Namibia"
    }, {
      "codes": ["1F1F3", "1F1E8"],
      "status": "fully-qualified",
      "emoji": "🇳🇨",
      "name": "New Caledonia"
    }, {
      "codes": ["1F1F3", "1F1EA"],
      "status": "fully-qualified",
      "emoji": "🇳🇪",
      "name": "Niger"
    }, {
      "codes": ["1F1F3", "1F1EB"],
      "status": "fully-qualified",
      "emoji": "🇳🇫",
      "name": "Norfolk Island"
    }, {
      "codes": ["1F1F3", "1F1EC"],
      "status": "fully-qualified",
      "emoji": "🇳🇬",
      "name": "Nigeria"
    }, {
      "codes": ["1F1F3", "1F1EE"],
      "status": "fully-qualified",
      "emoji": "🇳🇮",
      "name": "Nicaragua"
    }, {
      "codes": ["1F1F3", "1F1F1"],
      "status": "fully-qualified",
      "emoji": "🇳🇱",
      "name": "Netherlands"
    }, {
      "codes": ["1F1F3", "1F1F4"],
      "status": "fully-qualified",
      "emoji": "🇳🇴",
      "name": "Norway"
    }, {
      "codes": ["1F1F3", "1F1F5"],
      "status": "fully-qualified",
      "emoji": "🇳🇵",
      "name": "Nepal"
    }, {
      "codes": ["1F1F3", "1F1F7"],
      "status": "fully-qualified",
      "emoji": "🇳🇷",
      "name": "Nauru"
    }, {
      "codes": ["1F1F3", "1F1FA"],
      "status": "fully-qualified",
      "emoji": "🇳🇺",
      "name": "Niue"
    }, {
      "codes": ["1F1F3", "1F1FF"],
      "status": "fully-qualified",
      "emoji": "🇳🇿",
      "name": "New Zealand"
    }, {
      "codes": ["1F1F4", "1F1F2"],
      "status": "fully-qualified",
      "emoji": "🇴🇲",
      "name": "Oman"
    }, {
      "codes": ["1F1F5", "1F1E6"],
      "status": "fully-qualified",
      "emoji": "🇵🇦",
      "name": "Panama"
    }, {
      "codes": ["1F1F5", "1F1EA"],
      "status": "fully-qualified",
      "emoji": "🇵🇪",
      "name": "Peru"
    }, {
      "codes": ["1F1F5", "1F1EB"],
      "status": "fully-qualified",
      "emoji": "🇵🇫",
      "name": "French Polynesia"
    }, {
      "codes": ["1F1F5", "1F1EC"],
      "status": "fully-qualified",
      "emoji": "🇵🇬",
      "name": "Papua New Guinea"
    }, {
      "codes": ["1F1F5", "1F1ED"],
      "status": "fully-qualified",
      "emoji": "🇵🇭",
      "name": "Philippines"
    }, {
      "codes": ["1F1F5", "1F1F0"],
      "status": "fully-qualified",
      "emoji": "🇵🇰",
      "name": "Pakistan"
    }, {
      "codes": ["1F1F5", "1F1F1"],
      "status": "fully-qualified",
      "emoji": "🇵🇱",
      "name": "Poland"
    }, {
      "codes": ["1F1F5", "1F1F2"],
      "status": "fully-qualified",
      "emoji": "🇵🇲",
      "name": "St. Pierre & Miquelon"
    }, {
      "codes": ["1F1F5", "1F1F3"],
      "status": "fully-qualified",
      "emoji": "🇵🇳",
      "name": "Pitcairn Islands"
    }, {
      "codes": ["1F1F5", "1F1F7"],
      "status": "fully-qualified",
      "emoji": "🇵🇷",
      "name": "Puerto Rico"
    }, {
      "codes": ["1F1F5", "1F1F8"],
      "status": "fully-qualified",
      "emoji": "🇵🇸",
      "name": "Palestinian Territories"
    }, {
      "codes": ["1F1F5", "1F1F9"],
      "status": "fully-qualified",
      "emoji": "🇵🇹",
      "name": "Portugal"
    }, {
      "codes": ["1F1F5", "1F1FC"],
      "status": "fully-qualified",
      "emoji": "🇵🇼",
      "name": "Palau"
    }, {
      "codes": ["1F1F5", "1F1FE"],
      "status": "fully-qualified",
      "emoji": "🇵🇾",
      "name": "Paraguay"
    }, {
      "codes": ["1F1F6", "1F1E6"],
      "status": "fully-qualified",
      "emoji": "🇶🇦",
      "name": "Qatar"
    }, {
      "codes": ["1F1F7", "1F1EA"],
      "status": "fully-qualified",
      "emoji": "🇷🇪",
      "name": "Réunion"
    }, {
      "codes": ["1F1F7", "1F1F4"],
      "status": "fully-qualified",
      "emoji": "🇷🇴",
      "name": "Romania"
    }, {
      "codes": ["1F1F7", "1F1F8"],
      "status": "fully-qualified",
      "emoji": "🇷🇸",
      "name": "Serbia"
    }, {
      "codes": ["1F1F7", "1F1FA"],
      "status": "fully-qualified",
      "emoji": "🇷🇺",
      "name": "Russia"
    }, {
      "codes": ["1F1F7", "1F1FC"],
      "status": "fully-qualified",
      "emoji": "🇷🇼",
      "name": "Rwanda"
    }, {
      "codes": ["1F1F8", "1F1E6"],
      "status": "fully-qualified",
      "emoji": "🇸🇦",
      "name": "Saudi Arabia"
    }, {
      "codes": ["1F1F8", "1F1E7"],
      "status": "fully-qualified",
      "emoji": "🇸🇧",
      "name": "Solomon Islands"
    }, {
      "codes": ["1F1F8", "1F1E8"],
      "status": "fully-qualified",
      "emoji": "🇸🇨",
      "name": "Seychelles"
    }, {
      "codes": ["1F1F8", "1F1E9"],
      "status": "fully-qualified",
      "emoji": "🇸🇩",
      "name": "Sudan"
    }, {
      "codes": ["1F1F8", "1F1EA"],
      "status": "fully-qualified",
      "emoji": "🇸🇪",
      "name": "Sweden"
    }, {
      "codes": ["1F1F8", "1F1EC"],
      "status": "fully-qualified",
      "emoji": "🇸🇬",
      "name": "Singapore"
    }, {
      "codes": ["1F1F8", "1F1ED"],
      "status": "fully-qualified",
      "emoji": "🇸🇭",
      "name": "St. Helena"
    }, {
      "codes": ["1F1F8", "1F1EE"],
      "status": "fully-qualified",
      "emoji": "🇸🇮",
      "name": "Slovenia"
    }, {
      "codes": ["1F1F8", "1F1EF"],
      "status": "fully-qualified",
      "emoji": "🇸🇯",
      "name": "Svalbard & Jan Mayen"
    }, {
      "codes": ["1F1F8", "1F1F0"],
      "status": "fully-qualified",
      "emoji": "🇸🇰",
      "name": "Slovakia"
    }, {
      "codes": ["1F1F8", "1F1F1"],
      "status": "fully-qualified",
      "emoji": "🇸🇱",
      "name": "Sierra Leone"
    }, {
      "codes": ["1F1F8", "1F1F2"],
      "status": "fully-qualified",
      "emoji": "🇸🇲",
      "name": "San Marino"
    }, {
      "codes": ["1F1F8", "1F1F3"],
      "status": "fully-qualified",
      "emoji": "🇸🇳",
      "name": "Senegal"
    }, {
      "codes": ["1F1F8", "1F1F4"],
      "status": "fully-qualified",
      "emoji": "🇸🇴",
      "name": "Somalia"
    }, {
      "codes": ["1F1F8", "1F1F7"],
      "status": "fully-qualified",
      "emoji": "🇸🇷",
      "name": "Suriname"
    }, {
      "codes": ["1F1F8", "1F1F8"],
      "status": "fully-qualified",
      "emoji": "🇸🇸",
      "name": "South Sudan"
    }, {
      "codes": ["1F1F8", "1F1F9"],
      "status": "fully-qualified",
      "emoji": "🇸🇹",
      "name": "São Tomé & Príncipe"
    }, {
      "codes": ["1F1F8", "1F1FB"],
      "status": "fully-qualified",
      "emoji": "🇸🇻",
      "name": "El Salvador"
    }, {
      "codes": ["1F1F8", "1F1FD"],
      "status": "fully-qualified",
      "emoji": "🇸🇽",
      "name": "Sint Maarten"
    }, {
      "codes": ["1F1F8", "1F1FE"],
      "status": "fully-qualified",
      "emoji": "🇸🇾",
      "name": "Syria"
    }, {
      "codes": ["1F1F8", "1F1FF"],
      "status": "fully-qualified",
      "emoji": "🇸🇿",
      "name": "Swaziland"
    }, {
      "codes": ["1F1F9", "1F1E6"],
      "status": "fully-qualified",
      "emoji": "🇹🇦",
      "name": "Tristan da Cunha"
    }, {
      "codes": ["1F1F9", "1F1E8"],
      "status": "fully-qualified",
      "emoji": "🇹🇨",
      "name": "Turks & Caicos Islands"
    }, {
      "codes": ["1F1F9", "1F1E9"],
      "status": "fully-qualified",
      "emoji": "🇹🇩",
      "name": "Chad"
    }, {
      "codes": ["1F1F9", "1F1EB"],
      "status": "fully-qualified",
      "emoji": "🇹🇫",
      "name": "French Southern Territories"
    }, {
      "codes": ["1F1F9", "1F1EC"],
      "status": "fully-qualified",
      "emoji": "🇹🇬",
      "name": "Togo"
    }, {
      "codes": ["1F1F9", "1F1ED"],
      "status": "fully-qualified",
      "emoji": "🇹🇭",
      "name": "Thailand"
    }, {
      "codes": ["1F1F9", "1F1EF"],
      "status": "fully-qualified",
      "emoji": "🇹🇯",
      "name": "Tajikistan"
    }, {
      "codes": ["1F1F9", "1F1F0"],
      "status": "fully-qualified",
      "emoji": "🇹🇰",
      "name": "Tokelau"
    }, {
      "codes": ["1F1F9", "1F1F1"],
      "status": "fully-qualified",
      "emoji": "🇹🇱",
      "name": "Timor-Leste"
    }, {
      "codes": ["1F1F9", "1F1F2"],
      "status": "fully-qualified",
      "emoji": "🇹🇲",
      "name": "Turkmenistan"
    }, {
      "codes": ["1F1F9", "1F1F3"],
      "status": "fully-qualified",
      "emoji": "🇹🇳",
      "name": "Tunisia"
    }, {
      "codes": ["1F1F9", "1F1F4"],
      "status": "fully-qualified",
      "emoji": "🇹🇴",
      "name": "Tonga"
    }, {
      "codes": ["1F1F9", "1F1F7"],
      "status": "fully-qualified",
      "emoji": "🇹🇷",
      "name": "Turkey"
    }, {
      "codes": ["1F1F9", "1F1F9"],
      "status": "fully-qualified",
      "emoji": "🇹🇹",
      "name": "Trinidad & Tobago"
    }, {
      "codes": ["1F1F9", "1F1FB"],
      "status": "fully-qualified",
      "emoji": "🇹🇻",
      "name": "Tuvalu"
    }, {
      "codes": ["1F1F9", "1F1FC"],
      "status": "fully-qualified",
      "emoji": "🇹🇼",
      "name": "Taiwan"
    }, {
      "codes": ["1F1F9", "1F1FF"],
      "status": "fully-qualified",
      "emoji": "🇹🇿",
      "name": "Tanzania"
    }, {
      "codes": ["1F1FA", "1F1E6"],
      "status": "fully-qualified",
      "emoji": "🇺🇦",
      "name": "Ukraine"
    }, {
      "codes": ["1F1FA", "1F1EC"],
      "status": "fully-qualified",
      "emoji": "🇺🇬",
      "name": "Uganda"
    }, {
      "codes": ["1F1FA", "1F1F2"],
      "status": "fully-qualified",
      "emoji": "🇺🇲",
      "name": "U.S. Outlying Islands"
    }, {
      "codes": ["1F1FA", "1F1F3"],
      "status": "fully-qualified",
      "emoji": "🇺🇳",
      "name": "United Nations"
    }, {
      "codes": ["1F1FA", "1F1F8"],
      "status": "fully-qualified",
      "emoji": "🇺🇸",
      "name": "United States"
    }, {
      "codes": ["1F1FA", "1F1FE"],
      "status": "fully-qualified",
      "emoji": "🇺🇾",
      "name": "Uruguay"
    }, {
      "codes": ["1F1FA", "1F1FF"],
      "status": "fully-qualified",
      "emoji": "🇺🇿",
      "name": "Uzbekistan"
    }, {
      "codes": ["1F1FB", "1F1E6"],
      "status": "fully-qualified",
      "emoji": "🇻🇦",
      "name": "Vatican City"
    }, {
      "codes": ["1F1FB", "1F1E8"],
      "status": "fully-qualified",
      "emoji": "🇻🇨",
      "name": "St. Vincent & Grenadines"
    }, {
      "codes": ["1F1FB", "1F1EA"],
      "status": "fully-qualified",
      "emoji": "🇻🇪",
      "name": "Venezuela"
    }, {
      "codes": ["1F1FB", "1F1EC"],
      "status": "fully-qualified",
      "emoji": "🇻🇬",
      "name": "British Virgin Islands"
    }, {
      "codes": ["1F1FB", "1F1EE"],
      "status": "fully-qualified",
      "emoji": "🇻🇮",
      "name": "U.S. Virgin Islands"
    }, {
      "codes": ["1F1FB", "1F1F3"],
      "status": "fully-qualified",
      "emoji": "🇻🇳",
      "name": "Vietnam"
    }, {
      "codes": ["1F1FB", "1F1FA"],
      "status": "fully-qualified",
      "emoji": "🇻🇺",
      "name": "Vanuatu"
    }, {
      "codes": ["1F1FC", "1F1EB"],
      "status": "fully-qualified",
      "emoji": "🇼🇫",
      "name": "Wallis & Futuna"
    }, {
      "codes": ["1F1FC", "1F1F8"],
      "status": "fully-qualified",
      "emoji": "🇼🇸",
      "name": "Samoa"
    }, {
      "codes": ["1F1FD", "1F1F0"],
      "status": "fully-qualified",
      "emoji": "🇽🇰",
      "name": "Kosovo"
    }, {
      "codes": ["1F1FE", "1F1EA"],
      "status": "fully-qualified",
      "emoji": "🇾🇪",
      "name": "Yemen"
    }, {
      "codes": ["1F1FE", "1F1F9"],
      "status": "fully-qualified",
      "emoji": "🇾🇹",
      "name": "Mayotte"
    }, {
      "codes": ["1F1FF", "1F1E6"],
      "status": "fully-qualified",
      "emoji": "🇿🇦",
      "name": "South Africa"
    }, {
      "codes": ["1F1FF", "1F1F2"],
      "status": "fully-qualified",
      "emoji": "🇿🇲",
      "name": "Zambia"
    }, {
      "codes": ["1F1FF", "1F1FC"],
      "status": "fully-qualified",
      "emoji": "🇿🇼",
      "name": "Zimbabwe"
    }]
  }, {
    "name": "subdivision-flag",
    "emojis": []
  }]
}];

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _plugin = __webpack_require__(0);

var _plugin2 = _interopRequireDefault(_plugin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

tinymce.PluginManager.add('tinymceEmoji', _plugin2.default);

/***/ }),
/* 3 */
/***/ (function(module, exports) {


/**
 * Expose `parse`.
 */

module.exports = parse;

/**
 * Tests for browser support.
 */

var innerHTMLBug = false;
var bugTestDiv;
if (typeof document !== 'undefined') {
  bugTestDiv = document.createElement('div');
  // Setup
  bugTestDiv.innerHTML = '  <link/><table></table><a href="/a">a</a><input type="checkbox"/>';
  // Make sure that link elements get serialized correctly by innerHTML
  // This requires a wrapper element in IE
  innerHTMLBug = !bugTestDiv.getElementsByTagName('link').length;
  bugTestDiv = undefined;
}

/**
 * Wrap map from jquery.
 */

var map = {
  legend: [1, '<fieldset>', '</fieldset>'],
  tr: [2, '<table><tbody>', '</tbody></table>'],
  col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>'],
  // for script/link/style tags to work in IE6-8, you have to wrap
  // in a div with a non-whitespace character in front, ha!
  _default: innerHTMLBug ? [1, 'X<div>', '</div>'] : [0, '', '']
};

map.td =
map.th = [3, '<table><tbody><tr>', '</tr></tbody></table>'];

map.option =
map.optgroup = [1, '<select multiple="multiple">', '</select>'];

map.thead =
map.tbody =
map.colgroup =
map.caption =
map.tfoot = [1, '<table>', '</table>'];

map.polyline =
map.ellipse =
map.polygon =
map.circle =
map.text =
map.line =
map.path =
map.rect =
map.g = [1, '<svg xmlns="http://www.w3.org/2000/svg" version="1.1">','</svg>'];

/**
 * Parse `html` and return a DOM Node instance, which could be a TextNode,
 * HTML DOM Node of some kind (<div> for example), or a DocumentFragment
 * instance, depending on the contents of the `html` string.
 *
 * @param {String} html - HTML string to "domify"
 * @param {Document} doc - The `document` instance to create the Node for
 * @return {DOMNode} the TextNode, DOM Node, or DocumentFragment instance
 * @api private
 */

function parse(html, doc) {
  if ('string' != typeof html) throw new TypeError('String expected');

  // default to the global `document` object
  if (!doc) doc = document;

  // tag name
  var m = /<([\w:]+)/.exec(html);
  if (!m) return doc.createTextNode(html);

  html = html.replace(/^\s+|\s+$/g, ''); // Remove leading/trailing whitespace

  var tag = m[1];

  // body support
  if (tag == 'body') {
    var el = doc.createElement('html');
    el.innerHTML = html;
    return el.removeChild(el.lastChild);
  }

  // wrap map
  var wrap = map[tag] || map._default;
  var depth = wrap[0];
  var prefix = wrap[1];
  var suffix = wrap[2];
  var el = doc.createElement('div');
  el.innerHTML = prefix + html + suffix;
  while (depth--) el = el.lastChild;

  // one element
  if (el.firstChild == el.lastChild) {
    return el.removeChild(el.firstChild);
  }

  // several elements
  var fragment = doc.createDocumentFragment();
  while (el.firstChild) {
    fragment.appendChild(el.removeChild(el.firstChild));
  }

  return fragment;
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory){
  'use strict';

  /*istanbul ignore next:cant test*/
  if (typeof module === 'object' && typeof module.exports === 'object') {
    module.exports = factory();
  } else if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {
    // Browser globals
    root.objectPath = factory();
  }
})(this, function(){
  'use strict';

  var toStr = Object.prototype.toString;
  function hasOwnProperty(obj, prop) {
    if(obj == null) {
      return false
    }
    //to handle objects with null prototypes (too edge case?)
    return Object.prototype.hasOwnProperty.call(obj, prop)
  }

  function isEmpty(value){
    if (!value) {
      return true;
    }
    if (isArray(value) && value.length === 0) {
        return true;
    } else if (typeof value !== 'string') {
        for (var i in value) {
            if (hasOwnProperty(value, i)) {
                return false;
            }
        }
        return true;
    }
    return false;
  }

  function toString(type){
    return toStr.call(type);
  }

  function isObject(obj){
    return typeof obj === 'object' && toString(obj) === "[object Object]";
  }

  var isArray = Array.isArray || function(obj){
    /*istanbul ignore next:cant test*/
    return toStr.call(obj) === '[object Array]';
  }

  function isBoolean(obj){
    return typeof obj === 'boolean' || toString(obj) === '[object Boolean]';
  }

  function getKey(key){
    var intKey = parseInt(key);
    if (intKey.toString() === key) {
      return intKey;
    }
    return key;
  }

  function factory(options) {
    options = options || {}

    var objectPath = function(obj) {
      return Object.keys(objectPath).reduce(function(proxy, prop) {
        if(prop === 'create') {
          return proxy;
        }

        /*istanbul ignore else*/
        if (typeof objectPath[prop] === 'function') {
          proxy[prop] = objectPath[prop].bind(objectPath, obj);
        }

        return proxy;
      }, {});
    };

    function hasShallowProperty(obj, prop) {
      return (options.includeInheritedProps || (typeof prop === 'number' && Array.isArray(obj)) || hasOwnProperty(obj, prop))
    }

    function getShallowProperty(obj, prop) {
      if (hasShallowProperty(obj, prop)) {
        return obj[prop];
      }
    }

    function set(obj, path, value, doNotReplace){
      if (typeof path === 'number') {
        path = [path];
      }
      if (!path || path.length === 0) {
        return obj;
      }
      if (typeof path === 'string') {
        return set(obj, path.split('.').map(getKey), value, doNotReplace);
      }
      var currentPath = path[0];
      var currentValue = getShallowProperty(obj, currentPath);
      if (path.length === 1) {
        if (currentValue === void 0 || !doNotReplace) {
          obj[currentPath] = value;
        }
        return currentValue;
      }

      if (currentValue === void 0) {
        //check if we assume an array
        if(typeof path[1] === 'number') {
          obj[currentPath] = [];
        } else {
          obj[currentPath] = {};
        }
      }

      return set(obj[currentPath], path.slice(1), value, doNotReplace);
    }

    objectPath.has = function (obj, path) {
      if (typeof path === 'number') {
        path = [path];
      } else if (typeof path === 'string') {
        path = path.split('.');
      }

      if (!path || path.length === 0) {
        return !!obj;
      }

      for (var i = 0; i < path.length; i++) {
        var j = getKey(path[i]);

        if((typeof j === 'number' && isArray(obj) && j < obj.length) ||
          (options.includeInheritedProps ? (j in Object(obj)) : hasOwnProperty(obj, j))) {
          obj = obj[j];
        } else {
          return false;
        }
      }

      return true;
    };

    objectPath.ensureExists = function (obj, path, value){
      return set(obj, path, value, true);
    };

    objectPath.set = function (obj, path, value, doNotReplace){
      return set(obj, path, value, doNotReplace);
    };

    objectPath.insert = function (obj, path, value, at){
      var arr = objectPath.get(obj, path);
      at = ~~at;
      if (!isArray(arr)) {
        arr = [];
        objectPath.set(obj, path, arr);
      }
      arr.splice(at, 0, value);
    };

    objectPath.empty = function(obj, path) {
      if (isEmpty(path)) {
        return void 0;
      }
      if (obj == null) {
        return void 0;
      }

      var value, i;
      if (!(value = objectPath.get(obj, path))) {
        return void 0;
      }

      if (typeof value === 'string') {
        return objectPath.set(obj, path, '');
      } else if (isBoolean(value)) {
        return objectPath.set(obj, path, false);
      } else if (typeof value === 'number') {
        return objectPath.set(obj, path, 0);
      } else if (isArray(value)) {
        value.length = 0;
      } else if (isObject(value)) {
        for (i in value) {
          if (hasShallowProperty(value, i)) {
            delete value[i];
          }
        }
      } else {
        return objectPath.set(obj, path, null);
      }
    };

    objectPath.push = function (obj, path /*, values */){
      var arr = objectPath.get(obj, path);
      if (!isArray(arr)) {
        arr = [];
        objectPath.set(obj, path, arr);
      }

      arr.push.apply(arr, Array.prototype.slice.call(arguments, 2));
    };

    objectPath.coalesce = function (obj, paths, defaultValue) {
      var value;

      for (var i = 0, len = paths.length; i < len; i++) {
        if ((value = objectPath.get(obj, paths[i])) !== void 0) {
          return value;
        }
      }

      return defaultValue;
    };

    objectPath.get = function (obj, path, defaultValue){
      if (typeof path === 'number') {
        path = [path];
      }
      if (!path || path.length === 0) {
        return obj;
      }
      if (obj == null) {
        return defaultValue;
      }
      if (typeof path === 'string') {
        return objectPath.get(obj, path.split('.'), defaultValue);
      }

      var currentPath = getKey(path[0]);
      var nextObj = getShallowProperty(obj, currentPath)
      if (nextObj === void 0) {
        return defaultValue;
      }

      if (path.length === 1) {
        return nextObj;
      }

      return objectPath.get(obj[currentPath], path.slice(1), defaultValue);
    };

    objectPath.del = function del(obj, path) {
      if (typeof path === 'number') {
        path = [path];
      }

      if (obj == null) {
        return obj;
      }

      if (isEmpty(path)) {
        return obj;
      }
      if(typeof path === 'string') {
        return objectPath.del(obj, path.split('.'));
      }

      var currentPath = getKey(path[0]);
      if (!hasShallowProperty(obj, currentPath)) {
        return obj;
      }

      if(path.length === 1) {
        if (isArray(obj)) {
          obj.splice(currentPath, 1);
        } else {
          delete obj[currentPath];
        }
      } else {
        return objectPath.del(obj[currentPath], path.slice(1));
      }

      return obj;
    }

    return objectPath;
  }

  var mod = factory();
  mod.create = factory;
  mod.withInheritedProps = factory({includeInheritedProps: true})
  return mod;
});


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
  /*jslint indent: 2, browser: true, bitwise: true, plusplus: true */
  var twemoji = (function (
    /*! Copyright Twitter Inc. and other contributors. Licensed under MIT *//*
      https://github.com/twitter/twemoji/blob/gh-pages/LICENSE
    */

    // WARNING:   this file is generated automatically via
    //            `node twemoji-generator.js`
    //            please update its `createTwemoji` function
    //            at the bottom of the same file instead.

  ) {
    'use strict';

    /*jshint maxparams:4 */

    var
      // the exported module object
      twemoji = {


      /////////////////////////
      //      properties     //
      /////////////////////////

        // default assets url, by default will be Twitter Inc. CDN
        base: 'https://twemoji.maxcdn.com/2/',

        // default assets file extensions, by default '.png'
        ext: '.png',

        // default assets/folder size, by default "72x72"
        // available via Twitter CDN: 72
        size: '72x72',

        // default class name, by default 'emoji'
        className: 'emoji',

        // basic utilities / helpers to convert code points
        // to JavaScript surrogates and vice versa
        convert: {

          /**
           * Given an HEX codepoint, returns UTF16 surrogate pairs.
           *
           * @param   string  generic codepoint, i.e. '1F4A9'
           * @return  string  codepoint transformed into utf16 surrogates pair,
           *          i.e. \uD83D\uDCA9
           *
           * @example
           *  twemoji.convert.fromCodePoint('1f1e8');
           *  // "\ud83c\udde8"
           *
           *  '1f1e8-1f1f3'.split('-').map(twemoji.convert.fromCodePoint).join('')
           *  // "\ud83c\udde8\ud83c\uddf3"
           */
          fromCodePoint: fromCodePoint,

          /**
           * Given UTF16 surrogate pairs, returns the equivalent HEX codepoint.
           *
           * @param   string  generic utf16 surrogates pair, i.e. \uD83D\uDCA9
           * @param   string  optional separator for double code points, default='-'
           * @return  string  utf16 transformed into codepoint, i.e. '1F4A9'
           *
           * @example
           *  twemoji.convert.toCodePoint('\ud83c\udde8\ud83c\uddf3');
           *  // "1f1e8-1f1f3"
           *
           *  twemoji.convert.toCodePoint('\ud83c\udde8\ud83c\uddf3', '~');
           *  // "1f1e8~1f1f3"
           */
          toCodePoint: toCodePoint
        },


      /////////////////////////
      //       methods       //
      /////////////////////////

        /**
         * User first: used to remove missing images
         * preserving the original text intent when
         * a fallback for network problems is desired.
         * Automatically added to Image nodes via DOM
         * It could be recycled for string operations via:
         *  $('img.emoji').on('error', twemoji.onerror)
         */
        onerror: function onerror() {
          if (this.parentNode) {
            this.parentNode.replaceChild(createText(this.alt, false), this);
          }
        },

        /**
         * Main method/logic to generate either <img> tags or HTMLImage nodes.
         *  "emojify" a generic text or DOM Element.
         *
         * @overloads
         *
         * String replacement for `innerHTML` or server side operations
         *  twemoji.parse(string);
         *  twemoji.parse(string, Function);
         *  twemoji.parse(string, Object);
         *
         * HTMLElement tree parsing for safer operations over existing DOM
         *  twemoji.parse(HTMLElement);
         *  twemoji.parse(HTMLElement, Function);
         *  twemoji.parse(HTMLElement, Object);
         *
         * @param   string|HTMLElement  the source to parse and enrich with emoji.
         *
         *          string              replace emoji matches with <img> tags.
         *                              Mainly used to inject emoji via `innerHTML`
         *                              It does **not** parse the string or validate it,
         *                              it simply replaces found emoji with a tag.
         *                              NOTE: be sure this won't affect security.
         *
         *          HTMLElement         walk through the DOM tree and find emoji
         *                              that are inside **text node only** (nodeType === 3)
         *                              Mainly used to put emoji in already generated DOM
         *                              without compromising surrounding nodes and
         *                              **avoiding** the usage of `innerHTML`.
         *                              NOTE: Using DOM elements instead of strings should
         *                              improve security without compromising too much
         *                              performance compared with a less safe `innerHTML`.
         *
         * @param   Function|Object  [optional]
         *                              either the callback that will be invoked or an object
         *                              with all properties to use per each found emoji.
         *
         *          Function            if specified, this will be invoked per each emoji
         *                              that has been found through the RegExp except
         *                              those follwed by the invariant \uFE0E ("as text").
         *                              Once invoked, parameters will be:
         *
         *                                iconId:string     the lower case HEX code point
         *                                                  i.e. "1f4a9"
         *
         *                                options:Object    all info for this parsing operation
         *
         *                                variant:char      the optional \uFE0F ("as image")
         *                                                  variant, in case this info
         *                                                  is anyhow meaningful.
         *                                                  By default this is ignored.
         *
         *                              If such callback will return a falsy value instead
         *                              of a valid `src` to use for the image, nothing will
         *                              actually change for that specific emoji.
         *
         *
         *          Object              if specified, an object containing the following properties
         *
         *            callback   Function  the callback to invoke per each found emoji.
         *            base       string    the base url, by default twemoji.base
         *            ext        string    the image extension, by default twemoji.ext
         *            size       string    the assets size, by default twemoji.size
         *
         * @example
         *
         *  twemoji.parse("I \u2764\uFE0F emoji!");
         *  // I <img class="emoji" draggable="false" alt="❤️" src="/assets/2764.gif"/> emoji!
         *
         *
         *  twemoji.parse("I \u2764\uFE0F emoji!", function(iconId, options) {
         *    return '/assets/' + iconId + '.gif';
         *  });
         *  // I <img class="emoji" draggable="false" alt="❤️" src="/assets/2764.gif"/> emoji!
         *
         *
         * twemoji.parse("I \u2764\uFE0F emoji!", {
         *   size: 72,
         *   callback: function(iconId, options) {
         *     return '/assets/' + options.size + '/' + iconId + options.ext;
         *   }
         * });
         *  // I <img class="emoji" draggable="false" alt="❤️" src="/assets/72x72/2764.png"/> emoji!
         *
         */
        parse: parse,

        /**
         * Given a string, invokes the callback argument
         *  per each emoji found in such string.
         * This is the most raw version used by
         *  the .parse(string) method itself.
         *
         * @param   string    generic string to parse
         * @param   Function  a generic callback that will be
         *                    invoked to replace the content.
         *                    This calback wil receive standard
         *                    String.prototype.replace(str, callback)
         *                    arguments such:
         *  callback(
         *    rawText,  // the emoji match
         *  );
         *
         *                    and others commonly received via replace.
         */
        replace: replace,

        /**
         * Simplify string tests against emoji.
         *
         * @param   string  some text that might contain emoji
         * @return  boolean true if any emoji was found, false otherwise.
         *
         * @example
         *
         *  if (twemoji.test(someContent)) {
         *    console.log("emoji All The Things!");
         *  }
         */
        test: test
      },

      // used to escape HTML special chars in attributes
      escaper = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
      },

      // RegExp based on emoji's official Unicode standards
      // http://www.unicode.org/Public/UNIDATA/EmojiSources.txt
      re = /\ud83d[\udc68-\udc69](?:\ud83c[\udffb-\udfff])?\u200d(?:\u2695\ufe0f|\u2696\ufe0f|\u2708\ufe0f|\ud83c[\udf3e\udf73\udf93\udfa4\udfa8\udfeb\udfed]|\ud83d[\udcbb\udcbc\udd27\udd2c\ude80\ude92])|(?:\ud83c[\udfcb\udfcc]|\ud83d\udd75|\u26f9)(?:\ufe0f|\ud83c[\udffb-\udfff])\u200d[\u2640\u2642]\ufe0f|(?:\ud83c[\udfc3\udfc4\udfca]|\ud83d[\udc6e\udc71\udc73\udc77\udc81\udc82\udc86\udc87\ude45-\ude47\ude4b\ude4d\ude4e\udea3\udeb4-\udeb6]|\ud83e[\udd26\udd37-\udd39\udd3d\udd3e\uddd6-\udddd])(?:\ud83c[\udffb-\udfff])?\u200d[\u2640\u2642]\ufe0f|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d[\udc68\udc69]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc68|\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d[\udc68\udc69]|\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83c\udff3\ufe0f\u200d\ud83c\udf08|\ud83c\udff4\u200d\u2620\ufe0f|\ud83d\udc41\u200d\ud83d\udde8|\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc6f\u200d\u2640\ufe0f|\ud83d\udc6f\u200d\u2642\ufe0f|\ud83e\udd3c\u200d\u2640\ufe0f|\ud83e\udd3c\u200d\u2642\ufe0f|\ud83e\uddde\u200d\u2640\ufe0f|\ud83e\uddde\u200d\u2642\ufe0f|\ud83e\udddf\u200d\u2640\ufe0f|\ud83e\udddf\u200d\u2642\ufe0f|(?:[\u0023\u002a\u0030-\u0039])\ufe0f?\u20e3|(?:(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75\udd90]|[\u261d\u26f7\u26f9\u270c\u270d])(?:\ufe0f|(?!\ufe0e))|\ud83c[\udf85\udfc2-\udfc4\udfc7\udfca]|\ud83d[\udc42\udc43\udc46-\udc50\udc66-\udc69\udc6e\udc70-\udc78\udc7c\udc81-\udc83\udc85-\udc87\udcaa\udd7a\udd95\udd96\ude45-\ude47\ude4b-\ude4f\udea3\udeb4-\udeb6\udec0\udecc]|\ud83e[\udd18-\udd1c\udd1e\udd1f\udd26\udd30-\udd39\udd3d\udd3e\uddd1-\udddd]|[\u270a\u270b])(?:\ud83c[\udffb-\udfff]|)|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc73\udb40\udc63\udb40\udc74\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc77\udb40\udc6c\udb40\udc73\udb40\udc7f|\ud83c\udde6\ud83c[\udde8-\uddec\uddee\uddf1\uddf2\uddf4\uddf6-\uddfa\uddfc\uddfd\uddff]|\ud83c\udde7\ud83c[\udde6\udde7\udde9-\uddef\uddf1-\uddf4\uddf6-\uddf9\uddfb\uddfc\uddfe\uddff]|\ud83c\udde8\ud83c[\udde6\udde8\udde9\uddeb-\uddee\uddf0-\uddf5\uddf7\uddfa-\uddff]|\ud83c\udde9\ud83c[\uddea\uddec\uddef\uddf0\uddf2\uddf4\uddff]|\ud83c\uddea\ud83c[\udde6\udde8\uddea\uddec\udded\uddf7-\uddfa]|\ud83c\uddeb\ud83c[\uddee-\uddf0\uddf2\uddf4\uddf7]|\ud83c\uddec\ud83c[\udde6\udde7\udde9-\uddee\uddf1-\uddf3\uddf5-\uddfa\uddfc\uddfe]|\ud83c\udded\ud83c[\uddf0\uddf2\uddf3\uddf7\uddf9\uddfa]|\ud83c\uddee\ud83c[\udde8-\uddea\uddf1-\uddf4\uddf6-\uddf9]|\ud83c\uddef\ud83c[\uddea\uddf2\uddf4\uddf5]|\ud83c\uddf0\ud83c[\uddea\uddec-\uddee\uddf2\uddf3\uddf5\uddf7\uddfc\uddfe\uddff]|\ud83c\uddf1\ud83c[\udde6-\udde8\uddee\uddf0\uddf7-\uddfb\uddfe]|\ud83c\uddf2\ud83c[\udde6\udde8-\udded\uddf0-\uddff]|\ud83c\uddf3\ud83c[\udde6\udde8\uddea-\uddec\uddee\uddf1\uddf4\uddf5\uddf7\uddfa\uddff]|\ud83c\uddf4\ud83c\uddf2|\ud83c\uddf5\ud83c[\udde6\uddea-\udded\uddf0-\uddf3\uddf7-\uddf9\uddfc\uddfe]|\ud83c\uddf6\ud83c\udde6|\ud83c\uddf7\ud83c[\uddea\uddf4\uddf8\uddfa\uddfc]|\ud83c\uddf8\ud83c[\udde6-\uddea\uddec-\uddf4\uddf7-\uddf9\uddfb\uddfd-\uddff]|\ud83c\uddf9\ud83c[\udde6\udde8\udde9\uddeb-\udded\uddef-\uddf4\uddf7\uddf9\uddfb\uddfc\uddff]|\ud83c\uddfa\ud83c[\udde6\uddec\uddf2\uddf3\uddf8\uddfe\uddff]|\ud83c\uddfb\ud83c[\udde6\udde8\uddea\uddec\uddee\uddf3\uddfa]|\ud83c\uddfc\ud83c[\uddeb\uddf8]|\ud83c\uddfd\ud83c\uddf0|\ud83c\uddfe\ud83c[\uddea\uddf9]|\ud83c\uddff\ud83c[\udde6\uddf2\uddfc]|\ud800\udc00|\ud83c[\udccf\udd8e\udd91-\udd9a\udde6-\uddff\ude01\ude32-\ude36\ude38-\ude3a\ude50\ude51\udf00-\udf20\udf2d-\udf35\udf37-\udf7c\udf7e-\udf84\udf86-\udf93\udfa0-\udfc1\udfc5\udfc6\udfc8\udfc9\udfcf-\udfd3\udfe0-\udff0\udff4\udff8-\udfff]|\ud83d[\udc00-\udc3e\udc40\udc44\udc45\udc51-\udc65\udc6a-\udc6d\udc6f\udc79-\udc7b\udc7d-\udc80\udc84\udc88-\udca9\udcab-\udcfc\udcff-\udd3d\udd4b-\udd4e\udd50-\udd67\udda4\uddfb-\ude44\ude48-\ude4a\ude80-\udea2\udea4-\udeb3\udeb7-\udebf\udec1-\udec5\uded0-\uded2\udeeb\udeec\udef4-\udef8]|\ud83e[\udd10-\udd17\udd1d\udd20-\udd25\udd27-\udd2f\udd3a\udd3c\udd40-\udd45\udd47-\udd4c\udd50-\udd6b\udd80-\udd97\uddc0\uddd0\uddde-\udde6]|[\u23e9-\u23ec\u23f0\u23f3\u2640\u2642\u2695\u26ce\u2705\u2728\u274c\u274e\u2753-\u2755\u2795-\u2797\u27b0\u27bf\ue50a]|(?:\ud83c[\udc04\udd70\udd71\udd7e\udd7f\ude02\ude1a\ude2f\ude37\udf21\udf24-\udf2c\udf36\udf7d\udf96\udf97\udf99-\udf9b\udf9e\udf9f\udfcd\udfce\udfd4-\udfdf\udff3\udff5\udff7]|\ud83d[\udc3f\udc41\udcfd\udd49\udd4a\udd6f\udd70\udd73\udd76-\udd79\udd87\udd8a-\udd8d\udda5\udda8\uddb1\uddb2\uddbc\uddc2-\uddc4\uddd1-\uddd3\udddc-\uddde\udde1\udde3\udde8\uddef\uddf3\uddfa\udecb\udecd-\udecf\udee0-\udee5\udee9\udef0\udef3]|[\u00a9\u00ae\u203c\u2049\u2122\u2139\u2194-\u2199\u21a9\u21aa\u231a\u231b\u2328\u23cf\u23ed-\u23ef\u23f1\u23f2\u23f8-\u23fa\u24c2\u25aa\u25ab\u25b6\u25c0\u25fb-\u25fe\u2600-\u2604\u260e\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262a\u262e\u262f\u2638-\u263a\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267b\u267f\u2692-\u2694\u2696\u2697\u2699\u269b\u269c\u26a0\u26a1\u26aa\u26ab\u26b0\u26b1\u26bd\u26be\u26c4\u26c5\u26c8\u26cf\u26d1\u26d3\u26d4\u26e9\u26ea\u26f0-\u26f5\u26f8\u26fa\u26fd\u2702\u2708\u2709\u270f\u2712\u2714\u2716\u271d\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u2764\u27a1\u2934\u2935\u2b05-\u2b07\u2b1b\u2b1c\u2b50\u2b55\u3030\u303d\u3297\u3299])(?:\ufe0f|(?!\ufe0e))/g,

      // avoid runtime RegExp creation for not so smart,
      // not JIT based, and old browsers / engines
      UFE0Fg = /\uFE0F/g,

      // avoid using a string literal like '\u200D' here because minifiers expand it inline
      U200D = String.fromCharCode(0x200D),

      // used to find HTML special chars in attributes
      rescaper = /[&<>'"]/g,

      // nodes with type 1 which should **not** be parsed
      shouldntBeParsed = /^(?:iframe|noframes|noscript|script|select|style|textarea)$/,

      // just a private shortcut
      fromCharCode = String.fromCharCode;

    return twemoji;


    /////////////////////////
    //  private functions  //
    //     declaration     //
    /////////////////////////

    /**
     * Shortcut to create text nodes
     * @param   string  text used to create DOM text node
     * @return  Node  a DOM node with that text
     */
    function createText(text, clean) {
      return document.createTextNode(clean ? text.replace(UFE0Fg, '') : text);
    }

    /**
     * Utility function to escape html attribute text
     * @param   string  text use in HTML attribute
     * @return  string  text encoded to use in HTML attribute
     */
    function escapeHTML(s) {
      return s.replace(rescaper, replacer);
    }

    /**
     * Default callback used to generate emoji src
     *  based on Twitter CDN
     * @param   string    the emoji codepoint string
     * @param   string    the default size to use, i.e. "36x36"
     * @return  string    the image source to use
     */
    function defaultImageSrcGenerator(icon, options) {
      return ''.concat(options.base, options.size, '/', icon, options.ext);
    }

    /**
     * Given a generic DOM nodeType 1, walk through all children
     * and store every nodeType 3 (#text) found in the tree.
     * @param   Element a DOM Element with probably some text in it
     * @param   Array the list of previously discovered text nodes
     * @return  Array same list with new discovered nodes, if any
     */
    function grabAllTextNodes(node, allText) {
      var
        childNodes = node.childNodes,
        length = childNodes.length,
        subnode,
        nodeType;
      while (length--) {
        subnode = childNodes[length];
        nodeType = subnode.nodeType;
        // parse emoji only in text nodes
        if (nodeType === 3) {
          // collect them to process emoji later
          allText.push(subnode);
        }
        // ignore all nodes that are not type 1, that are svg, or that
        // should not be parsed as script, style, and others
        else if (nodeType === 1 && !('ownerSVGElement' in subnode) &&
            !shouldntBeParsed.test(subnode.nodeName.toLowerCase())) {
          grabAllTextNodes(subnode, allText);
        }
      }
      return allText;
    }

    /**
     * Used to both remove the possible variant
     *  and to convert utf16 into code points.
     *  If there is a zero-width-joiner (U+200D), leave the variants in.
     * @param   string    the raw text of the emoji match
     * @return  string    the code point
     */
    function grabTheRightIcon(rawText) {
      // if variant is present as \uFE0F
      return toCodePoint(rawText.indexOf(U200D) < 0 ?
        rawText.replace(UFE0Fg, '') :
        rawText
      );
    }

    /**
     * DOM version of the same logic / parser:
     *  emojify all found sub-text nodes placing images node instead.
     * @param   Element   generic DOM node with some text in some child node
     * @param   Object    options  containing info about how to parse
      *
      *            .callback   Function  the callback to invoke per each found emoji.
      *            .base       string    the base url, by default twemoji.base
      *            .ext        string    the image extension, by default twemoji.ext
      *            .size       string    the assets size, by default twemoji.size
      *
     * @return  Element same generic node with emoji in place, if any.
     */
    function parseNode(node, options) {
      var
        allText = grabAllTextNodes(node, []),
        length = allText.length,
        attrib,
        attrname,
        modified,
        fragment,
        subnode,
        text,
        match,
        i,
        index,
        img,
        rawText,
        iconId,
        src;
      while (length--) {
        modified = false;
        fragment = document.createDocumentFragment();
        subnode = allText[length];
        text = subnode.nodeValue;
        i = 0;
        while ((match = re.exec(text))) {
          index = match.index;
          if (index !== i) {
            fragment.appendChild(
              createText(text.slice(i, index), true)
            );
          }
          rawText = match[0];
          iconId = grabTheRightIcon(rawText);
          i = index + rawText.length;
          src = options.callback(iconId, options);
          if (src) {
            img = new Image();
            img.onerror = options.onerror;
            img.setAttribute('draggable', 'false');
            attrib = options.attributes(rawText, iconId);
            for (attrname in attrib) {
              if (
                attrib.hasOwnProperty(attrname) &&
                // don't allow any handlers to be set + don't allow overrides
                attrname.indexOf('on') !== 0 &&
                !img.hasAttribute(attrname)
              ) {
                img.setAttribute(attrname, attrib[attrname]);
              }
            }
            img.className = options.className;
            img.alt = rawText;
            img.src = src;
            modified = true;
            fragment.appendChild(img);
          }
          if (!img) fragment.appendChild(createText(rawText, false));
          img = null;
        }
        // is there actually anything to replace in here ?
        if (modified) {
          // any text left to be added ?
          if (i < text.length) {
            fragment.appendChild(
              createText(text.slice(i), true)
            );
          }
          // replace the text node only, leave intact
          // anything else surrounding such text
          subnode.parentNode.replaceChild(fragment, subnode);
        }
      }
      return node;
    }

    /**
     * String/HTML version of the same logic / parser:
     *  emojify a generic text placing images tags instead of surrogates pair.
     * @param   string    generic string with possibly some emoji in it
     * @param   Object    options  containing info about how to parse
     *
     *            .callback   Function  the callback to invoke per each found emoji.
     *            .base       string    the base url, by default twemoji.base
     *            .ext        string    the image extension, by default twemoji.ext
     *            .size       string    the assets size, by default twemoji.size
     *
     * @return  the string with <img tags> replacing all found and parsed emoji
     */
    function parseString(str, options) {
      return replace(str, function (rawText) {
        var
          ret = rawText,
          iconId = grabTheRightIcon(rawText),
          src = options.callback(iconId, options),
          attrib,
          attrname;
        if (src) {
          // recycle the match string replacing the emoji
          // with its image counter part
          ret = '<img '.concat(
            'class="', options.className, '" ',
            'draggable="false" ',
            // needs to preserve user original intent
            // when variants should be copied and pasted too
            'alt="',
            rawText,
            '"',
            ' src="',
            src,
            '"'
          );
          attrib = options.attributes(rawText, iconId);
          for (attrname in attrib) {
            if (
              attrib.hasOwnProperty(attrname) &&
              // don't allow any handlers to be set + don't allow overrides
              attrname.indexOf('on') !== 0 &&
              ret.indexOf(' ' + attrname + '=') === -1
            ) {
              ret = ret.concat(' ', attrname, '="', escapeHTML(attrib[attrname]), '"');
            }
          }
          ret = ret.concat('/>');
        }
        return ret;
      });
    }

    /**
     * Function used to actually replace HTML special chars
     * @param   string  HTML special char
     * @return  string  encoded HTML special char
     */
    function replacer(m) {
      return escaper[m];
    }

    /**
     * Default options.attribute callback
     * @return  null
     */
    function returnNull() {
      return null;
    }

    /**
     * Given a generic value, creates its squared counterpart if it's a number.
     *  As example, number 36 will return '36x36'.
     * @param   any     a generic value.
     * @return  any     a string representing asset size, i.e. "36x36"
     *                  only in case the value was a number.
     *                  Returns initial value otherwise.
     */
    function toSizeSquaredAsset(value) {
      return typeof value === 'number' ?
        value + 'x' + value :
        value;
    }


    /////////////////////////
    //  exported functions //
    //     declaration     //
    /////////////////////////

    function fromCodePoint(codepoint) {
      var code = typeof codepoint === 'string' ?
            parseInt(codepoint, 16) : codepoint;
      if (code < 0x10000) {
        return fromCharCode(code);
      }
      code -= 0x10000;
      return fromCharCode(
        0xD800 + (code >> 10),
        0xDC00 + (code & 0x3FF)
      );
    }

    function parse(what, how) {
      if (!how || typeof how === 'function') {
        how = {callback: how};
      }
      // if first argument is string, inject html <img> tags
      // otherwise use the DOM tree and parse text nodes only
      return (typeof what === 'string' ? parseString : parseNode)(what, {
        callback:   how.callback || defaultImageSrcGenerator,
        attributes: typeof how.attributes === 'function' ? how.attributes : returnNull,
        base:       typeof how.base === 'string' ? how.base : twemoji.base,
        ext:        how.ext || twemoji.ext,
        size:       how.folder || toSizeSquaredAsset(how.size || twemoji.size),
        className:  how.className || twemoji.className,
        onerror:    how.onerror || twemoji.onerror
      });
    }

    function replace(text, callback) {
      return String(text).replace(re, callback);
    }

    function test(text) {
      // IE6 needs a reset before too
      re.lastIndex = 0;
      var result = re.test(text);
      re.lastIndex = 0;
      return result;
    }

    function toCodePoint(unicodeSurrogates, sep) {
      var
        r = [],
        c = 0,
        p = 0,
        i = 0;
      while (i < unicodeSurrogates.length) {
        c = unicodeSurrogates.charCodeAt(i++);
        if (p) {
          r.push((0x10000 + ((p - 0xD800) << 10) + (c - 0xDC00)).toString(16));
          p = 0;
        } else if (0xD800 <= c && c <= 0xDBFF) {
          p = c;
        } else {
          r.push(c.toString(16));
        }
      }
      return r.join(sep || '-');
    }

  }());
  return twemoji;
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })
/******/ ]);