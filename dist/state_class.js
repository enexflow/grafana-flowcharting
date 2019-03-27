"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var State =
/*#__PURE__*/
function () {
  /** @ngInject */
  function State(mxcell, graph) {
    var _this = this;

    _classCallCheck(this, State);

    this.cell = mxcell;
    this.cellId = mxcell.id;
    this.graph = graph;
    this.matched = false;
    this.matchedShape = false;
    this.matchedText = false;
    this.matchedLink = false;
    this.globalLevel = -1;
    this.styles = ["fillColor", "strokeColor", "fontColor"];
    this.level = {
      fillColor: -1,
      strokeColor: -1,
      fontColor: -1
    };
    this.currentColors = {};
    this.originalColors = {};
    this.originalValue = mxcell.getValue();
    this.currentValue = mxcell.getValue();
    this.originalLink = mxcell.getAttribute("link");
    this.currentLink = mxcell.getAttribute("link");
    this.styles.forEach(function (style) {
      var color = _this.graph.getStyleCell(mxcell, style);

      _this.currentColors[style] = color;
      _this.originalColors[style] = color;
    });
  }

  _createClass(State, [{
    key: "setState",
    value: function setState(rule, serie) {
      var _this2 = this;

      if (rule.matchSerie(serie)) {
        var shapeMaps = rule.getShapeMaps();
        var textMaps = rule.getTextMaps();
        var linkMaps = rule.getTextMaps();
        var value = rule.getValueForSerie(serie);
        var FormattedValue = rule.getFormattedValue(value);
        var level = rule.getThresholdLevel(value); //SHAPE

        var cellProp = this.getCellProp(rule.shapeProp);
        shapeMaps.forEach(function (shape) {
          if (!shape.isHidden() && shape.match(cellProp)) {
            _this2.matchedShape = true;
            _this2.matched = true;

            if (_this2.globalLevel <= level) {
              _this2.setLevelStyle(rule.style, level);

              if (rule.toColorize()) {
                _this2.setColorStyle(rule.style, rule.getColorForValue(value));
              }
            }
          }
        }); //TEXT

        cellProp = this.getCellProp(rule.textProp);
        textMaps.forEach(function (text) {
          if (!text.isHidden() && text.match(cellProp)) {
            _this2.matchedText = true;
            _this2.matched = true;

            if (_this2.globalLevel <= level) {
              _this2.setText(rule.getReplaceText(_this2.originalValue, FormattedValue));
            }
          }
        }); // LINK

        cellProp = this.getCellProp(rule.linkProp);
        linkMaps.forEach(function (link) {
          if (!link.isHidden() && link.match(cellProp)) {
            _this2.matchedLink = true;
            _this2.matched = true;
          }
        });
      }
    }
  }, {
    key: "unsetState",
    value: function unsetState() {
      this.unsetLevel();
      this.unsetColor();
      this.unsetText();
      this.unsetLink();
      this.matched = false;
      this.matchedShape = false;
      this.matchedText = false;
      this.matchedLink = false;
    }
  }, {
    key: "getCellProp",
    value: function getCellProp(prop) {
      if (prop === "id") return this.cellId;
      if (prop === "value") return this.originalValue;
    }
  }, {
    key: "setColorStyle",
    value: function setColorStyle(style, color) {
      this.currentColors[style] = color; // this.graph.setCellStyles(style, color, [this.cell]);
    }
  }, {
    key: "unsetColorStyle",
    value: function unsetColorStyle(style) {
      var color = this.originalColors[style];
      this.currentColors[style] = color; // this.graph.setCellStyles(style, color, [this.cell]);
    }
  }, {
    key: "unsetColor",
    value: function unsetColor() {
      var _this3 = this;

      this.styles.forEach(function (style) {
        _this3.unsetColorStyle(style);
      });
    }
  }, {
    key: "getCurrentColorStyle",
    value: function getCurrentColorStyle(style) {
      return this.currentColors[style];
    }
  }, {
    key: "unsetLevelStyle",
    value: function unsetLevelStyle(style) {
      this.level[style] = -1;
    }
  }, {
    key: "unsetLevel",
    value: function unsetLevel() {
      var _this4 = this;

      this.styles.forEach(function (style) {
        _this4.unsetLevelStyle(style);
      });
    }
  }, {
    key: "setLevelStyle",
    value: function setLevelStyle(style, level) {
      this.level[style] = level;
      if (this.globalLevel < level) this.globalLevel = level;
    }
  }, {
    key: "getLevelStyle",
    value: function getLevelStyle(style) {
      return this.level[style];
    }
  }, {
    key: "getLevel",
    value: function getLevel() {
      return this.globalLevel;
    }
  }, {
    key: "setText",
    value: function setText(text) {
      this.currentValue = text; // this.cell.setValue(text);
    }
  }, {
    key: "getCurrentText",
    value: function getCurrentText() {
      return this.currentValue;
    }
  }, {
    key: "unsetText",
    value: function unsetText() {
      this.currentValue = this.originalValue;
    }
  }, {
    key: "setLink",
    value: function setLink(url) {
      this.currentLink = url;
    }
  }, {
    key: "unsetLink",
    value: function unsetLink() {
      this.currentLink = this.originalLink;
    }
  }, {
    key: "getCurrentLink",
    value: function getCurrentLink() {
      return this.currentLink;
    }
  }, {
    key: "isGradient",
    value: function isGradient() {//TODO:
    }
  }, {
    key: "isShape",
    value: function isShape() {
      return this.cell.isVertex();
    }
  }, {
    key: "isConnector",
    value: function isConnector() {
      return this.cell.isEdge();
    }
  }, {
    key: "updateCell",
    value: function updateCell() {
      var _this5 = this;

      if (this.matchedShape) {
        this.styles.forEach(function (style) {
          _this5.graph.setStyleCell(_this5.mxcell, style, _this5.getCurrentColorStyle(style));
        });
      }

      if (this.matchedText) {
        this.graph.getValueCell(this.getCurrentText(), text);
      } //TODO:LINK

    }
  }, {
    key: "restoreCell",
    value: function restoreCell() {
      var _this6 = this;

      this.unsetState();
      this.styles.forEach(function (style) {
        _this6.graph.setCellStyles(style, _this6.getCurrentColorStyle(style), [_this6.cell]);
      });
      this.cell.setValue(this.getCurrentText());
      this.cell.setAttribut("link", this.getCurrentLink());
    }
  }, {
    key: "reinit",
    value: function reinit() {
      var _this7 = this;

      this.cell.matched = false;
      this.matchedShape = false;
      this.matchedText = false;
      this.matchedLink = false;
      this.styles.forEach(function (style) {
        _this7.level[style] = -1;
      });
      this.globalLevel = -1;
    }
  }]);

  return State;
}();

exports.default = State;
