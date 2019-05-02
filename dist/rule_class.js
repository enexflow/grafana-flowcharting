"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _kbn = _interopRequireDefault(require("app/core/utils/kbn"));

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Rule =
/*#__PURE__*/
function () {
  /** @ngInject */
  function Rule(pattern, data) {
    _classCallCheck(this, Rule);

    this.data = data;
    this.data.pattern = pattern;
    this.shapeMaps = [];
    this.textMaps = [];
    this.linkMaps = [];
    this.valueMaps = [];
    this.rangeMaps = [];
    this.import(data);
  }

  _createClass(Rule, [{
    key: "getData",
    value: function getData() {
      return this.data;
    }
  }, {
    key: "export",
    value: function _export() {
      return JSON.stringify(this);
    }
  }, {
    key: "import",
    value: function _import(obj) {
      var _this = this;

      this.data.unit = obj.unit || 'short';
      this.data.type = obj.type || 'number';
      this.data.alias = obj.alias || 'No name';
      this.data.aggregation = obj.aggregation || 'current';
      this.data.decimals = obj.decimals || 2;
      this.data.colors = obj.colors || ['rgba(245, 54, 54, 0.9)', 'rgba(237, 129, 40, 0.89)', 'rgba(50, 172, 45, 0.97)'];
      this.data.style = obj.style || obj.colorMode || 'fillColor';
      this.data.colorOn = obj.colorOn || 'a';
      this.data.link = obj.link !== undefined ? obj.link : false;
      this.data.linkOn = obj.colorOn || 'a';
      this.data.linkUrl = obj.linkUrl || '';
      this.data.textOn = obj.textOn || 'wmd';
      this.data.textReplace = obj.textReplace || 'content';
      this.data.textPattern = obj.textPattern || '/.*/';
      this.data.pattern = obj.pattern || this.data.pattern;
      this.data.dateFormat = obj.dateFormat || 'YYYY-MM-DD HH:mm:ss';
      this.data.thresholds = obj.thresholds || [];
      this.data.invert = obj.invert !== undefined ? obj.invert : false;
      this.data.overlayIcon = obj.overlayIcon !== undefined ? obj.overlayIcon : false;
      var maps = []; // SHAPES

      this.data.shapeProp = obj.shapeProp || 'id';
      this.data.shapeData = []; // For 0.2.0

      maps = [];
      if (obj.shapeMaps !== undefined && obj.shapeMaps !== null && obj.shapeMaps.length > 0) maps = obj.shapeMaps;else maps = obj.shapeData;

      if (maps !== undefined && maps !== null && maps.length > 0) {
        maps.forEach(function (map) {
          var newData = {};
          var sm = new ShapeMap(map.pattern, newData);
          sm.import(map);

          _this.shapeMaps.push(sm);

          _this.data.shapeData.push(newData);
        });
      } // TEXT


      this.data.textProp = obj.textProp || 'id';
      this.data.textData = []; // For 0.2.0

      maps = [];
      if (obj.shapeMaps !== undefined && obj.shapeMaps !== null && obj.shapeMaps.length > 0) maps = obj.textMaps;else maps = obj.textData;

      if (maps !== undefined && maps != null && maps.length > 0) {
        maps.forEach(function (map) {
          var newData = {};
          var tm = new TextMap(map.pattern, newData);
          tm.import(map);

          _this.textMaps.push(tm);

          _this.data.textData.push(newData);
        });
      } // LINK


      this.data.linkProp = obj.linkProp || 'id';
      this.data.linkData = [];

      if (obj.linkData !== undefined && obj.linkData != null && obj.linkData.length > 0) {
        obj.linkData.forEach(function (map) {
          var newData = {};
          var lm = new LinkMap(map.pattern, newData);
          lm.import(map);

          _this.linkMaps.push(lm);

          _this.data.linkData.push(newData);
        });
      }

      this.data.mappingType = obj.mappingType || 1; // VALUES

      this.data.valueData = [];

      if (obj.valueData !== undefined && obj.valueData != null && obj.valueData.length > 0) {
        obj.valueData.forEach(function (map) {
          var newData = {};
          var vm = new ValueMap(map.value, map.text, newData);
          vm.import(map);

          _this.valueMaps.push(vm);

          _this.data.valueData.push(newData);
        });
      } // RANGE


      this.data.rangeData = [];

      if (obj.rangeData !== undefined && obj.rangeData != null && obj.rangeData.length > 0) {
        obj.rangeData.forEach(function (map) {
          var newData = {};
          var rm = new RangeMap(map.from, map.to, map.text, newData);

          _this.rangeMaps.push(rm);

          _this.data.rangeData.push(newData);
        });
      }

      this.data.sanitize = obj.sanitize || false;
    }
  }, {
    key: "invertColorOrder",
    value: function invertColorOrder() {
      var ref = this.data.colors;
      var copy = ref[0];
      ref[0] = ref[2];
      ref[2] = copy;
      if (this.data.invert) this.data.invert = false;else this.data.invert = true;
    } //
    // Conditions
    //

  }, {
    key: "toColorize",
    value: function toColorize(value) {
      if (this.data.colorOn === 'a') return true;
      if (this.data.colorOn === 'wc' && this.getThresholdLevel(value) >= 1) return true;
      return false;
    }
  }, {
    key: "toValorize",
    value: function toValorize(value) {
      if (this.data.textOn === 'wmd' && value !== undefined) return true;
      if (this.data.textOn === 'wmd' && value === undefined) return false;
      if (this.data.textOn === 'n') return false;
      if (this.data.textOn === 'wc' && this.getThresholdLevel(value) >= 1) return true;
      if (this.data.textOn === 'co' && this.getThresholdLevel(value) >= 2) return true;
      return false;
    }
  }, {
    key: "toIconize",
    value: function toIconize(value) {
      if (this.data.overlayIcon === false) return false;
      if (this.data.overlayIcon === true && this.getThresholdLevel(value) >= 1) return true;
      return false;
    }
  }, {
    key: "toLinkable",
    value: function toLinkable(value) {
      if (this.data.link === false) return false;
      if (this.data.linkOn === 'a') return true;
      if (this.data.linkOn === 'wc' && this.getThresholdLevel(value) >= 1) return true;
      return false;
    } //
    // Series
    //

  }, {
    key: "matchSerie",
    value: function matchSerie(serie) {
      if (this.data.pattern === null || this.data.pattern === undefined) return false;
      return u.matchString(serie.alias, this.data.pattern);
    } //
    // SHAPE MAPS
    //

  }, {
    key: "addShapeMap",
    value: function addShapeMap(pattern) {
      var data = {};
      var m = new ShapeMap(pattern, data);
      m.import(data);
      this.shapeMaps.push(m);
      this.data.shapeData.push(data);
    }
  }, {
    key: "removeShapeMap",
    value: function removeShapeMap(index) {
      this.data.shapeData.splice(index, 1);
      this.shapeMaps.splice(index, 1);
    }
  }, {
    key: "getShapeMap",
    value: function getShapeMap(index) {
      return this.shapeMaps[index];
    }
  }, {
    key: "getShapeMaps",
    value: function getShapeMaps() {
      return this.shapeMaps;
    }
  }, {
    key: "matchShape",
    value: function matchShape(pattern) {
      var found = false;
      this.shapeMaps.forEach(function (element) {
        if (element.match(pattern)) found = true;
      });
      return found;
    } //
    // TEXT MAPS
    //

  }, {
    key: "addTextMap",
    value: function addTextMap(pattern) {
      var data = {};
      var m = new TextMap(pattern, data);
      m.import(data);
      this.textMaps.push(m);
      this.data.textData.push(data);
    }
  }, {
    key: "removeTextMap",
    value: function removeTextMap(index) {
      this.data.textData.splice(index, 1);
      this.textMaps.splice(index, 1);
    }
  }, {
    key: "getTextMap",
    value: function getTextMap(index) {
      return this.textMaps[index];
    }
  }, {
    key: "getTextMaps",
    value: function getTextMaps() {
      return this.textMaps;
    }
  }, {
    key: "matchText",
    value: function matchText(pattern) {
      var found = false;
      this.textMaps.forEach(function (element) {
        if (element.match(pattern)) found = true;
      });
      return found;
    } //
    // LINK MAPS
    //

  }, {
    key: "addLinkMap",
    value: function addLinkMap(pattern) {
      u.log(1, "Rule.addLinkMap()");
      var data = {};
      var m = new LinkMap(pattern, data);
      m.import(data);
      this.linkMaps.push(m);
      this.data.linkData.push(data);
    }
  }, {
    key: "removeLinkMap",
    value: function removeLinkMap(index) {
      this.data.linkData.splice(index, 1);
      this.linkMaps.splice(index, 1);
    }
  }, {
    key: "getLinkMap",
    value: function getLinkMap(index) {
      return this.linkMaps[index];
    }
  }, {
    key: "getLinkMaps",
    value: function getLinkMaps() {
      return this.linkMaps;
    }
  }, {
    key: "matchLink",
    value: function matchLink(pattern) {
      var found = false;
      this.linkMaps.forEach(function (element) {
        if (element.match(pattern)) found = true;
      });
      return found;
    } //
    // STRING VALUE MAPS
    //

  }, {
    key: "addValueMap",
    value: function addValueMap(value, text) {
      var data = {};
      var m = new ValueMap(value, text, data);
      m.import(data);
      this.valueMaps.push(m);
      this.data.valueData.push(data);
    }
  }, {
    key: "removeValueMap",
    value: function removeValueMap(index) {
      this.data.valueData.splice(index, 1);
      this.valueMaps.splice(index, 1);
    }
  }, {
    key: "getValueMap",
    value: function getValueMap(index) {
      return this.valueMaps[index];
    }
  }, {
    key: "getValueMaps",
    value: function getValueMaps() {
      return this.valueMaps;
    } //
    // STRING RANGE VALUE MAPS
    //

  }, {
    key: "addRangeMap",
    value: function addRangeMap(from, to, text) {
      var data = {};
      var m = new RangeMap(from, to, text, data);
      this.rangeMaps.push(m);
      this.data.rangeData.push(data);
    }
  }, {
    key: "removeRangeMap",
    value: function removeRangeMap(index) {
      this.data.rangeData.splice(index, 1);
      this.rangeMaps.splice(index, 1);
    }
  }, {
    key: "getRangeMap",
    value: function getRangeMap(index) {
      return this.rangeMaps[index];
    }
  }, {
    key: "getRangeMaps",
    value: function getRangeMaps() {
      return this.rangeMaps;
    }
  }, {
    key: "hideRangeMap",
    value: function hideRangeMap(index) {
      this.rangeMaps[index].hide();
    }
  }, {
    key: "showRangeMap",
    value: function showRangeMap(index) {
      this.rangeMaps[index].show();
    } //
    // Format value
    //

  }, {
    key: "getColorForValue",
    value: function getColorForValue(value) {
      if (!this.data.thresholds || this.data.thresholds.length === 0) {
        return null;
      }

      for (var i = this.data.thresholds.length; i > 0; i -= 1) {
        if (value >= this.data.thresholds[i - 1]) {
          return this.data.colors[i];
        }
      }

      return _.first(this.data.colors);
    }
  }, {
    key: "getThresholdLevel",
    value: function getThresholdLevel(value) {
      var thresholdLevel = 0;
      var thresholds = this.data.thresholds;
      if (thresholds === undefined || thresholds.length === 0) return -1;
      if (thresholds.length !== 2) return -1; // non invert

      if (!this.data.invert) {
        thresholdLevel = 2;
        if (value >= thresholds[0]) thresholdLevel = 1;
        if (value >= thresholds[1]) thresholdLevel = 0;
      } else {
        thresholdLevel = 0;
        if (value >= thresholds[0]) thresholdLevel = 1;
        if (value >= thresholds[1]) thresholdLevel = 2;
      }

      return thresholdLevel;
    }
  }, {
    key: "getValueForSerie",
    value: function getValueForSerie(serie) {
      if (this.matchSerie(serie)) {
        var value = _.get(serie.stats, this.data.aggregation);

        if (value === undefined || value === null) {
          value = serie.datapoints[serie.datapoints.length - 1][0];
        }

        return value;
      }

      return '-';
    }
  }, {
    key: "getFormattedValueForSerie",
    value: function getFormattedValueForSerie(serie) {
      var formattedValue = this.getValueForSerie(serie);
      return this.getFormattedValue(formattedValue);
    }
  }, {
    key: "getLink",
    value: function getLink() {
      return this.data.linkUrl;
    }
  }, {
    key: "getFormattedValue",
    value: function getFormattedValue(value) {
      // Number
      if (this.data.type === 'number') {
        if (!_.isFinite(value)) return 'Invalid Number';

        if (value === null || value === void 0) {
          return '-';
        }

        var decimals = this.decimalPlaces(value);
        decimals = typeof this.data.decimals === 'number' ? Math.min(this.data.decimals, decimals) : decimals;
        return formatValue(value, this.data.unit, this.data.decimals);
      }

      if (this.data.type === 'string') {
        if (_.isArray(value)) {
          value = value.join(', ');
        }

        var mappingType = this.data.mappingType || 0;

        if (mappingType === 1 && this.valueMaps) {
          for (var i = 0; i < this.valueMaps.length; i += 1) {
            var map = this.valueMaps[i];
            if (map.match(value)) return map.getFormattedText(value);
          }

          return value.toString();
        }

        if (mappingType === 2 && this.rangeMaps) {
          for (var _i = 0; _i < this.rangeMaps.length; _i += 1) {
            var _map = this.rangeMaps[_i];
            if (_map.match(value)) return _map.getFormattedText(value);
          }

          return value.toString();
        }

        if (value === null || value === void 0) {
          return '-';
        }
      }

      if (this.data.type === 'date') {
        if (value === undefined || value === null) {
          return '-';
        }

        if (_.isArray(value)) {
          value = value[0];
        }

        var date = (0, _moment.default)(value); // if (this.dashboard.isTimezoneUtc()) {
        //     date = date.utc();
        // }

        return date.format(this.data.dateFormat);
      }

      return value;
    }
  }, {
    key: "getReplaceText",
    value: function getReplaceText(text, FormattedValue) {
      if (this.data.textReplace === 'content') return FormattedValue;
      var regexVal = u.stringToJsRegex(this.data.textPattern);
      if (text.toString().match(regexVal)) return text.toString().replace(regexVal, FormattedValue);
      return text;
    }
  }, {
    key: "defaultValueFormatter",
    value: function defaultValueFormatter(value) {
      if (value === null || value === void 0 || value === undefined) {
        return '';
      }

      if (_.isArray(value)) {
        value = value.join(', ');
      }

      if (this.sanitize) {
        return this.$sanitize(value);
      }

      return _.escape(value);
    }
  }, {
    key: "decimalPlaces",
    value: function decimalPlaces(num) {
      var match = ('' + num).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);

      if (!match) {
        return 0;
      }

      return Math.max(0, // Number of digits right of decimal point.
      (match[1] ? match[1].length : 0) - ( // Adjust for scientific notation.
      match[2] ? +match[2] : 0));
    }
  }]);

  return Rule;
}(); //
// ShapeMap Class
//


exports.default = Rule;

var ShapeMap =
/*#__PURE__*/
function () {
  function ShapeMap(pattern, data) {
    _classCallCheck(this, ShapeMap);

    this.data = data;
    this.id = u.uniqueID();
    this.data.pattern = undefined;
    this.data.pattern = pattern;
    this.import(data);
  }

  _createClass(ShapeMap, [{
    key: "import",
    value: function _import(obj) {
      this.data.pattern = obj.pattern || '';
      this.data.hidden = obj.hidden || false;
    }
  }, {
    key: "match",
    value: function match(text) {
      if (text === undefined || text === null || text.length === 0) return false;
      return u.matchString(text, this.data.pattern);
    }
  }, {
    key: "getId",
    value: function getId() {
      return this.id;
    }
  }, {
    key: "show",
    value: function show() {
      this.data.hidden = false;
    }
  }, {
    key: "hide",
    value: function hide() {
      this.data.hidden = true;
    }
  }, {
    key: "isHidden",
    value: function isHidden() {
      return this.data.hidden;
    }
  }, {
    key: "export",
    value: function _export() {
      return {
        pattern: this.data.pattern,
        hidden: this.data.hidden
      };
    }
  }, {
    key: "toColorize",
    value: function toColorize(value) {
      if (this.data.hidden) return false;
      return this.rule.toColorize(value);
    }
  }, {
    key: "toVisible",
    value: function toVisible() {
      if (this.data.hidden) return false;
      return true;
    }
  }]);

  return ShapeMap;
}(); //
// TextMap Class
//


var TextMap =
/*#__PURE__*/
function () {
  function TextMap(pattern, data) {
    _classCallCheck(this, TextMap);

    this.data = data;
    this.id = u.uniqueID();
    this.data.pattern = pattern;
    this.import(data);
  }

  _createClass(TextMap, [{
    key: "import",
    value: function _import(obj) {
      this.data.pattern = obj.pattern || this.data.pattern;
      this.data.hidden = obj.hidden || false;
    }
  }, {
    key: "match",
    value: function match(text) {
      if (text === undefined || text === null || text.length === 0) return false;
      return u.matchString(text, this.data.pattern);
    }
  }, {
    key: "getId",
    value: function getId() {
      return this.id;
    }
  }, {
    key: "show",
    value: function show() {
      this.data.hidden = false;
    }
  }, {
    key: "hide",
    value: function hide() {
      this.data.hidden = true;
    }
  }, {
    key: "isHidden",
    value: function isHidden() {
      return this.data.hidden;
    }
  }, {
    key: "export",
    value: function _export() {
      return {
        pattern: this.data.pattern,
        hidden: this.data.hidden
      };
    }
  }]);

  return TextMap;
}(); //
// LinkMap Class
//


var LinkMap =
/*#__PURE__*/
function () {
  function LinkMap(pattern, data) {
    _classCallCheck(this, LinkMap);

    this.data = data;
    this.id = u.uniqueID();
    this.data.pattern = pattern;
    this.import(data);
  }

  _createClass(LinkMap, [{
    key: "import",
    value: function _import(obj) {
      this.data.pattern = obj.pattern || this.data.pattern || '';
      this.data.hidden = obj.hidden || false;
    }
  }, {
    key: "match",
    value: function match(text) {
      if (text === undefined || text === null || text.length === 0) return false;
      return u.matchString(text, this.data.pattern);
    }
  }, {
    key: "getId",
    value: function getId() {
      return this.id;
    }
  }, {
    key: "show",
    value: function show() {
      this.data.hidden = false;
    }
  }, {
    key: "hide",
    value: function hide() {
      this.data.hidden = true;
    }
  }, {
    key: "isHidden",
    value: function isHidden() {
      return this.data.hidden;
    }
  }, {
    key: "export",
    value: function _export() {
      return {
        pattern: this.data.pattern,
        hidden: this.data.hidden
      };
    }
  }]);

  return LinkMap;
}(); //
// RangeMap Class
//


var RangeMap =
/*#__PURE__*/
function () {
  function RangeMap(from, to, text, data) {
    _classCallCheck(this, RangeMap);

    this.data = data;
    this.id = u.uniqueID();
    this.data.from = from;
    this.data.to = to;
    this.data.text = text;
    this.data.hidden = false;
    this.import(data);
  }

  _createClass(RangeMap, [{
    key: "import",
    value: function _import(obj) {
      this.data.from = obj.from || this.data.from || '';
      this.data.to = obj.to || this.data.to || '';
      this.data.text = obj.text || this.data.text || '';
      this.data.hidden = obj.hidden || this.data.hidden || false;
    }
  }, {
    key: "match",
    value: function match(value) {
      if (this.data.from === 'null' && this.data.to === 'null') {
        return true;
      }

      if (value === null) {
        if (this.data.from === 'null' && this.data.to === 'null') {
          return true;
        }
      }

      if (Number(this.data.from) <= Number(value) && Number(this.data.to) >= Number(value)) {
        return true;
      }

      return false;
    }
  }, {
    key: "getId",
    value: function getId() {
      return this.id;
    }
  }, {
    key: "getFormattedText",
    value: function getFormattedText(value) {
      if (value === null) {
        if (this.data.from === 'null' && this.data.to === 'null') {
          return this.data.text;
        }
      }

      if (this.match(value)) {
        return this.data.text;
      }

      return value;
    }
  }, {
    key: "show",
    value: function show() {
      this.data.hidden = false;
    }
  }, {
    key: "hide",
    value: function hide() {
      this.data.hidden = true;
    }
  }, {
    key: "isHidden",
    value: function isHidden() {
      return this.data.hidden;
    }
  }, {
    key: "export",
    value: function _export() {
      return {
        from: this.data.from,
        to: this.data.to,
        text: this.data.text,
        hidden: this.data.hidden
      };
    }
  }]);

  return RangeMap;
}(); //
// ValueMap Class
//


var ValueMap =
/*#__PURE__*/
function () {
  function ValueMap(value, text, data) {
    _classCallCheck(this, ValueMap);

    this.data = data;
    this.id = u.uniqueID();
    this.data.value = value;
    this.data.text = text;
    this.data.hidden = false;
    this.import(data);
  }

  _createClass(ValueMap, [{
    key: "import",
    value: function _import(obj) {
      this.data.value = obj.value || this.data.value || '';
      this.data.text = obj.text || this.data.text || '';
      this.data.hidden = obj.hidden || this.data.hidden || false;
    }
  }, {
    key: "match",
    value: function match(value) {
      if (value === null || value === undefined) {
        if (this.data.value === 'null') {
          return true;
        }

        return false;
      }

      if (!_.isString(value) && Number(this.data.value) === Number(value)) {
        return true;
      }

      return u.matchString(value.toString(), this.data.value);
    }
  }, {
    key: "getId",
    value: function getId() {
      return this.id;
    }
  }, {
    key: "getFormattedText",
    value: function getFormattedText(value) {
      if (value === null) {
        if (this.data.value === 'null') {
          return this.data.text;
        }
      }

      if (this.match(value)) {
        return this.data.text;
      }

      return value;
    }
  }, {
    key: "show",
    value: function show() {
      this.data.hidden = false;
    }
  }, {
    key: "hide",
    value: function hide() {
      this.data.hidden = true;
    }
  }, {
    key: "isHidden",
    value: function isHidden() {
      return this.data.hidden;
    }
  }, {
    key: "export",
    value: function _export() {
      return {
        value: this.data.value,
        text: this.data.text,
        hidden: this.data.hidden
      };
    }
  }]);

  return ValueMap;
}();

function formatValue(value, unit, decimals) {
  return _kbn.default.valueFormats[unit](value, decimals, null).toString();
}
//# sourceMappingURL=rule_class.js.map