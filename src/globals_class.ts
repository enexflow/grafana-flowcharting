import _ from 'lodash';
import chroma from 'chroma-js';
class GFCONSTANT {
  // CONFIG
  CONF_PATH_LIBS = 'libs/';
  CONF_PATH_DRAWIO = 'libs/drawio/';
  CONF_PATH_STATIC = 'static/';
  CONF_PATH_PARTIALS = 'partials/';
  CONF_PATH_STYLES = 'styles/';
  CONF_FILE_PLUGINJSON = './plugin.json';
  CONF_FILE_DEFAULTDIO = 'static/defaultGraph.drawio';
  CONF_FILE_DEFAULTCSV = 'static/defaultGraph.csv';
  CONF_FILE_SHAPESTXT = 'static/shapes.txt';
  CONF_FILE_APPJS = 'libs/drawio/js/app.min.js';
  CONF_FILE_SHAPESJS = 'libs/drawio/js/shapes.min.js';
  // CONF_FILE_VIEWERJS = 'libs/drawio/js/viewer.min.js';
  CONF_FILE_VIEWERJS = 'libs/drawio/js/viewer-static.min.js';
  CONF_FILE_PRECONFIGJS = 'libs/drawio/js/PreConfig.js';
  CONF_FILE_POSTCONFIGJS = 'libs/drawio/js/PostConfig.js';
  CONF_TOOLTIPS_DELAY = 200;
  CONF_GRAPHHOVER_DELAY = 50;
  CONF_COLORS_STEPS = 5;
  CONF_COLORS_MS = 50;
  CONF_ANIMS_STEP = 5;
  CONF_ANIMS_MS = 50;
  CONF_GFMESSAGE_MS = 5000;
  CONF_BLINK_COLOR = '#f5f242';
  CONF_HIGHTLIGHT_COLOR = '#99ff33';

  // GLOBAL VARIABLE
  VAR_STG_SHAPES = 'shapestext';
  VAR_TBL_SHAPES = 'shapesarray';
  VAR_STR_VIEWERJS = 'viewer.min.js';
  VAR_STR_SHAPESJS = 'shapes.min.js';
  VAR_STG_CTXROOT = 'contextroot';
  VAR_NUM_GHTIMESTAMP = 'graph-hover-timestamp';
  VAR_OBJ_TEMPLATESRV = 'templatesrv';
  // VAR_OBJ_CTRL = 'ctrl';
  // VAR_OBJ_SCOPE = 'scope';
  VAR_OBJ_DASHBOARD = 'dashboard';
  VAR_MAP_INTERVAL = 'interval';
  VAR_MAP_TIMEOUT = 'timeout';
  VAR_STR_RULENAME: gf.TVariableKeys = '_rule';
  VAR_NUM_LEVEL: gf.TVariableKeys = '_level';
  VAR_NUM_VALUE: gf.TVariableKeys = '_value';
  VAR_STR_FORMATED: gf.TVariableKeys = '_formated';
  VAR_STR_COLOR: gf.TVariableKeys = '_color';
  VAR_STR_DATE: gf.TVariableKeys = '_date';
  VAR_STR_METRIC: gf.TVariableKeys = '_metric';

  // FLOWCHART CHANGE KEY FLAG
  FLOWCHART_CHG_SOURCES: gf.TFlowchartFlagKeys = 'sources';
  FLOWCHART_CHG_OPTIONS: gf.TFlowchartFlagKeys = 'options';
  FLOWCHART_APL_OPTIONS: gf.TFlowchartFlagKeys = 'applyOptions';
  FLOWCHART_CHG_DATAS: gf.TFlowchartFlagKeys = 'datas';
  FLOWCHART_CHG_RULES: gf.TFlowchartFlagKeys = 'rules';
  FLOWCHART_CHG_GRAPHHOVER: gf.TFlowchartFlagKeys = 'graphHover';
  FLOWCHART_CHG_HIDDENCHANGE: gf.TFlowchartFlagKeys = 'hiddenChange';

  // TRACE AND DEBUG
  VAR_GF_TRACE_PERF = true;

  // MXGRAPH
  MXGRAPH_STYLES_COLOR: gf.TStyleColorKeys[] = [
    'fillColor',
    'strokeColor',
    'gradientColor',
    'fontColor',
    'labelBackgroundColor',
    'labelBorderColor',
    'imageBorder',
    'imageBackground',
  ];
  MXGRAPH_STYLES_EVENT_ANIM: gf.TStyleAnimEventKey[] = [
    'barPos',
    'gaugePos',
    'fontSize',
    'opacity',
    'textOpacity',
    'rotation',
  ];
  MXGRAPH_STYLES_EVENT_STATIC: gf.TStyleStaticEventKeys[] = [
    'shape',
    'endArrow',
    'startArrow',
    'flipH',
    'flipV',
    'gradientDirection',
    'image',
  ];
  MXGRAPH_STYLES_EVENT: gf.TStyleEventKeys[] = [...this.MXGRAPH_STYLES_EVENT_ANIM, ...this.MXGRAPH_STYLES_EVENT_STATIC];
  MXGRAPH_STYLES_ANIM: gf.TStyleAnimKeys[] = [...this.MXGRAPH_STYLES_COLOR, ...this.MXGRAPH_STYLES_EVENT_ANIM];
  MXGRAPH_STYLES_STATIC: gf.TStyleStaticKeys[] = [...this.MXGRAPH_STYLES_EVENT_STATIC];
  MXGRAPH_STYLES: gf.TStyleKeys[] = [...this.MXGRAPH_STYLES_ANIM, ...this.MXGRAPH_STYLES_STATIC];

  // COMPARATORS
  COMP_LT: any = 'lt';
  COMP_LE: any = 'le';
  COMP_EQ: any = 'eq';
  COMP_NE: any = 'ne';
  COMP_GE: any = 'ge';
  COMP_GT: any = 'gt';
  COMP_AL: any = 'al';

  // CONDITIONS
  TOOLTIP_APPLYON: gf.TTooltipOnList = [
    { text: 'Warning / Critical', value: 'wc' },
    { text: 'Always', value: 'a' },
  ];
  COLOR_APPLYON: gf.TColorOnList = [
    { text: 'Never', value: 'n' },
    { text: 'Warning / Critical', value: 'wc' },
    { text: 'Always', value: 'a' },
  ];
  TEXT_APPLYON: gf.TTextOnList = [
    { text: 'Never', value: 'n' },
    { text: 'When Metric Displayed', value: 'wmd' },
    { text: 'Warning / Critical', value: 'wc' },
    { text: 'Critical Only', value: 'co' },
  ];
  LINK_APPLYON: gf.TLinkOnList = [
    { text: 'Warning / Critical', value: 'wc' },
    { text: 'Always', value: 'a' },
  ];

  // TYPES
  VALUE_TYPES: gf.TValueTypeList = [
    { text: 'Number', value: 'number' },
    { text: 'String', value: 'string' },
    { text: 'Date', value: 'date' },
  ];
  METRIC_TYPES: gf.TMetricTypeList = [
    { text: 'Series', value: 'serie' },
    { text: 'Table', value: 'table' },
  ];
  SOURCE_TYPES: gf.TSourceTypeList = [
    { text: 'XML', value: 'xml' },
    { text: 'CSV', value: 'csv' },
  ];
  DIOTHEME_TYPES: gf.TDioThemeList = [
    { text: 'Dark', value: 'dark' },
    { text: 'Light', value: 'kennedy' },
    { text: 'Mobile', value: 'minimal' },
    { text: 'atlas', value: 'atlas' },
  ];
  IDENT_TYPES: { text: string; value: gf.TPropertieKey }[] = [
    { text: 'Id', value: 'id' },
    { text: 'Label', value: 'value' },
    { text: 'Metadata', value: 'metadata' },
  ];
  AGGREGATION_TYPES: gf.TAggregationList = [
    { text: 'First', value: 'first' },
    { text: 'First (not null)', value: 'first_notnull' },
    { text: 'Last', value: 'current' },
    { text: 'Last (not null)', value: 'current_notnull' },
    { text: 'Min', value: 'min' },
    { text: 'Max', value: 'max' },
    { text: 'Sum', value: 'total' },
    { text: 'Avg', value: 'avg' },
    { text: 'Count', value: 'count' },
    { text: 'Delta', value: 'delta' },
    { text: 'Range', value: 'range' },
    { text: 'Diff', value: 'diff' },
    { text: 'Time of last point', value: 'last_time' },
  ];

  TOOLTIP_GRAPH_TYPES: gf.TGraphTypeList = [
    { text: 'Line', value: 'line' },
    { text: 'Histogram', value: 'bar' },
  ];

  TOOLTIP_GRAPH_SCALE_TYPES: gf.TGraphScaleList = [
    { text: 'Linear', value: 'linear' },
    { text: 'Logarithmic', value: 'log' },
  ];

  TOOLTIP_GRAPH_SIZE_TYPES: gf.TGraphSizeList = [
    { text: 'Adjustable', value: '100%' },
    { text: 'Small', value: '100px' },
    { text: 'Medium', value: '200px' },
    { text: 'Large', value: '400px' },
  ];

  TOOLTIP_DIRECTION_TYPES: gf.TDirectionList = [
    { text: 'Vertical', value: 'v' },
    { text: 'Horizontal ', value: 'h' },
  ];

  COMPARATOR_TYPES: gf.TComparatorList = [
    { text: 'Always', value: 'al' },
    { text: 'Less than', value: 'lt' },
    { text: 'Less than or equal to', value: 'le' },
    { text: 'Equal to', value: 'eq' },
    { text: 'Not equal to', value: 'ne' },
    { text: 'Greater than or equal to', value: 'ge' },
    { text: 'Greater than ', value: 'gt' },
  ];

  VALUE_DATEFORMAT_TYPES: gf.TDateFormatList = [
    { text: 'YYYY-MM-DD HH:mm:ss', value: 'YYYY-MM-DD HH:mm:ss' },
    { text: 'YYYY-MM-DD HH:mm:ss.SSS', value: 'YYYY-MM-DD HH:mm:ss.SSS' },
    { text: 'MM/DD/YY h:mm:ss a', value: 'MM/DD/YY h:mm:ss a' },
    { text: 'MMMM D, YYYY LT', value: 'MMMM D, YYYY LT' },
    { text: 'YYYY-MM-DD', value: 'YYYY-MM-DD' },
  ];

  VALUEMAPPINGTYPES: gf.TValueMappingList = [
    { text: 'Value to text', value: 1 },
    { text: 'Range to text', value: 2 },
  ];

  // METHODS
  TEXTMETHODS: gf.TTextMethodList = [
    { text: 'All content', value: 'content' },
    { text: 'Substring', value: 'pattern', placeholder: '/RegEx/' },
    { text: 'Append (Space) ', value: 'as' },
    { text: 'Append (New line) ', value: 'anl' },
  ];
  COLORMETHODS: gf.TStyleColorList = [
    { text: 'Shape Stroke/Border', value: 'strokeColor' },
    { text: 'Shape Fill', value: 'fillColor' },
    { text: 'Shape Gradient', value: 'gradientColor' },
    { text: 'Label font color', value: 'fontColor' },
    { text: 'Label background color', value: 'labelBackgroundColor' },
    { text: 'Label border color', value: 'labelBorderColor' },
    { text: 'Image background', value: 'imageBackground' },
    { text: 'Image border', value: 'imageBorder' },
  ];
  EVENTMETHODS: gf.TTypeEventList = [
    { text: 'Shape : Change form (text)', value: 'shape', type: 'text', placeholder: 'Shape name' },
    { text: 'Shape : Rotate Shape (0-360)', value: 'rotation', type: 'number', placeholder: '0-360', default: 0 },
    { text: 'Shape : Blink (frequence ms)', value: 'blink', type: 'number', placeholder: 'Number in ms', default: 500 },
    { text: 'Shape : Hide/Show (0|1)', value: 'visibility', type: 'number', placeholder: '0 or 1', typeahead: '0|1' },
    { text: 'Shape : Height (number)', value: 'height', type: 'number', placeholder: 'Number of px' },
    { text: 'Shape : Width (number)', value: 'width', type: 'number', placeholder: 'Number of px' },
    { text: 'Shape : Resize (percent)', value: 'size', type: 'number', placeholder: 'percent' },
    { text: 'Shape : Opacity (0-100)', value: 'opacity', type: 'number', placeholder: '0-100', default: 100 },
    {
      text: 'Shape : Gradient direction',
      value: 'gradientDirection',
      type: 'text',
      placeholder: 'Direction name',
      default: 'south',
      typeahead: 'south|east|north|west',
    },
    {
      text: 'Shape : Collapse/Expande (0|1)',
      value: 'fold',
      type: 'number',
      placeholder: '0 or 1',
      typeahead: '0|1',
      default: '1',
    },
    { text: 'Shape : Change position in Bar (0-100)', value: 'barPos', type: 'number', placeholder: '0-100' },
    { text: 'Shape : Change position in Gauge (0-100)', value: 'gaugePos', type: 'number', placeholder: '0-100' },
    {
      text: 'Shape : Flip horizontally (0|1)',
      value: 'flipH',
      type: 'number',
      placeholder: '0 or 1',
      typeahead: '0|1',
    },
    { text: 'Shape : Flip vertically (0|1)', value: 'flipV', type: 'number', placeholder: '0 or 1', typeahead: '0|1' },
    {
      text: 'Arrow : change start marker (text)',
      value: 'startArrow',
      type: 'text',
      placeholder: 'Marker',
      typeahead:
        'none|classic|classicThin|block|blockThin|open|openThin|oval|diamond|diamondThin|openAsync|async|box|halfCircle|dash|cross|circlePlus|circle|ERone|ERmandOne|ERoneToMany|ERzeroToOne',
    },
    {
      text: 'Arrow : change end marker (text)',
      value: 'endArrow',
      type: 'text',
      placeholder: 'Marker',
      typeahead:
        'none|classic|classicThin|block|blockThin|open|openThin|oval|diamond|diamondThin|openAsync|async|box|halfCircle|dash|cross|circlePlus|circle|ERone|ERmandOne|ERoneToMany|ERzeroToOne',
    },
    {
      text: 'Arrow : Anime flow (frequence ms)',
      value: 'class_mxEdgeFlow',
      type: 'number',
      placeholder: 'Number in ms',
    },
    { text: 'Label : Replace text (text)', value: 'text', type: 'text', placeholder: 'Text' },
    { text: 'Label : Font Size (numeric)', value: 'fontSize', type: 'number', placeholder: 'Number' },
    { text: 'Label : Opacity (numeric)', value: 'textOpacity', type: 'number', placeholder: '0-100', default: 100 },
    { text: 'Image : Change URL (text)', value: 'image', type: 'text', placeholder: 'Url' },
    { text: 'Tooltip : Add/Change tooltip text', value: 'tpText', type: 'text', placeholder: 'text' },
    {
      text: 'Tooltip : Add/Change metadata key and value',
      value: 'tpMetadata',
      type: 'text',
      placeholder: 'key@value',
    },
  ];

  LOCALVARIABLENAMES: gf.TVariableList = [
    { text: 'Name of the rule', value: this.VAR_STR_RULENAME },
    { text: 'Current date', value: this.VAR_STR_DATE },
    { text: 'Current color according to the thresholds', value: this.VAR_STR_COLOR },
    { text: 'Current raw value according to the aggregation', value: this.VAR_NUM_VALUE },
    { text: 'Current level according to the thresholds', value: this.VAR_NUM_LEVEL },
    { text: 'Current formated value accordingto the type', value: this.VAR_STR_FORMATED },
  ];
}

export class GFVariables {
  _variables: Map<string, any>;
  constructor() {
    this._variables = new Map();
  }

  /**
   * Get the full available vars names
   *
   * @static
   * @returns {string[]}
   * @memberof GFVariables
   */
  static getAvailableLocalVarNames(): string[] {
    return $GF.CONSTANTS.LOCALVARIABLENAMES.map((x) => '${' + x.value + '}');
  }

  /**
   * set or redefine varaible
   *
   * @param {string} key
   * @param {*} value
   * @returns {this}
   * @memberof GFVariables
   */
  set(key: gf.TVariableKeys, value: any): this {
    this._variables.set(key, value);
    return this;
  }

  unset(key: gf.TVariableKeys): this {
    this._variables.delete(key);
    return this;
  }

  /**
   * Get variable value
   *
   * @param {string} key
   * @returns {*}
   * @memberof GFVariables
   */
  get(key: gf.TVariableKeys): any {
    return this._variables.get(key);
  }

  /**
   * Return the name of variables without ${}
   *
   * @returns {string[]}
   * @memberof GFVariables
   */
  keys(): string[] {
    return Array.from(this._variables.keys());
  }

  /**
   * Return all local declared variables and grafana variables
   *
   * @returns {string[]}
   * @memberof GFVariables
   */
  getFullVarsNames(): string[] {
    return $GF.getGrafanaVars().concat(this.getVarsNames());
  }

  /**
   * Get the full names of declared local vars
   *
   * @returns {string[]}
   * @memberof GFVariables
   */
  getVarsNames(): string[] {
    return this.keys().map((x) => '${' + x + '}');
  }

  /**
   * Clear all variables
   *
   * @returns {this}
   * @memberof GFVariables
   */
  clear(): this {
    this._variables.clear();
    return this;
  }

  /**
   * Replace text with variables
   *
   * @param {string} text
   * @returns {string}
   * @memberof GFVariables
   */
  replaceText(text: string): string {
    try {
      let templateSrv = $GF.getVar($GF.CONSTANTS.VAR_OBJ_TEMPLATESRV);
      text = templateSrv !== undefined ? templateSrv.replaceWithText(text) : text;
      for (let [key, value] of this._variables) {
        text = text.replace('${' + key + '}', value);
      }
    } catch (error) {
      return text;
    }
    return text;
  }

  /**
   * Replace and eval text with variables
   *
   * @param {string} text
   * @returns {string}
   * @memberof GFVariables
   */
  eval(text: string): string {
    let t = this.replaceText(text);
    return $GF.utils.evalIt(t);
  }
}

class GFLog {
  static DEBUG = 0;
  static INFO = 1;
  static WARN = 2;
  static ERROR = 3;
  static logLevel = GFLog.WARN;
  static logDisplay = true;
  constructor() {}

  static init(): GFLog {
    return new GFLog();
  }

  /**
   * If message must be displayed
   *
   * @param {number} level (DEBUG : 0, INFO : 1, WARN:2, ERROR:3)
   * @returns {boolean}
   * @memberof Log
   */
  static toDisplay(level: number): boolean {
    if (GFLog.logDisplay !== undefined && GFLog.logDisplay === true) {
      if (GFLog.logLevel !== undefined && level >= GFLog.logLevel) {
        return true;
      }
    }
    return false;
  }

  /**
   * Display debug message in console
   *
   * @param {string} title
   * @param {((any | undefined))} obj
   * @memberof Log
   */
  async debug(...args) {
    if (GFLog.toDisplay(GFLog.DEBUG)) {
      const title = args.shift();
      console.debug(`GF DEBUG : ${title}`, ...args);
    }
  }

  /**
   * Display warn message in console
   *
   * @param {string} title
   * @param {((any | undefined))} obj
   * @memberof Log
   */
  async warn(...args) {
    if (GFLog.toDisplay(GFLog.WARN)) {
      const title = args.shift();
      console.warn(`GF WARN : ${title}`, ...args);
    }
  }

  /**
   * Display info message in console
   *
   * @param {string} title
   * @param {((any | undefined))} obj
   * @memberof Log
   */
  async info(...args) {
    if (GFLog.toDisplay(GFLog.INFO)) {
      const title = args.shift();
      console.info(`GF INFO : ${title}`, ...args);
    }
  }

  /**
   * Display error message in console
   *
   * @param {string} title
   * @param {((any | undefined))} obj
   * @memberof Log
   */
  async error(...args) {
    if (GFLog.toDisplay(GFLog.ERROR)) {
      const title = args.shift();
      console.error(`GF ERROR : ${title}`, ...args);
    }
  }
}

class GFPlugin {
  static data: any = require('./plugin.json');
  static defaultContextRoot = '/public/plugins/agenty-flowcharting-panel/';
  static contextRoot: string;
  constructor() {}

  /**
   * init GFPlugin
   *
   * @static
   * @param {*} $scope
   * @param {*} templateSrv
   * @returns {GFPlugin}
   * @memberof GFPlugin
   */
  static init($scope: any, templateSrv: any, dashboard: any, ctrl: any): GFPlugin {
    let plug = new GFPlugin();
    this.contextRoot = GFPlugin.defaultContextRoot;
    if ($scope === undefined) {
      this.contextRoot = __dirname;
      if (this.contextRoot.length > 0) {
        $GF.setVar($GF.CONSTANTS.VAR_STG_CTXROOT, this.contextRoot);
      }
    } else {
      this.contextRoot = $scope.$root.appSubUrl + this.defaultContextRoot;
    }
    $GF.setVar($GF.CONSTANTS.VAR_OBJ_TEMPLATESRV, templateSrv);
    $GF.setVar($GF.CONSTANTS.VAR_STG_CTXROOT, this.contextRoot);
    $GF.setVar($GF.CONSTANTS.VAR_OBJ_DASHBOARD, dashboard);
    // $GF.setVar($GF.CONSTANTS.VAR_OBJ_CTRL, ctrl);
    // $GF.setVar($GF.CONSTANTS.VAR_OBJ_SCOPE, $scope);
    return plug;
  }

  getRepo(): string {
    let url = '';
    GFPlugin.data.info.links.forEach((link: { name: string; url: string }) => {
      if (link.name === 'Documentation') {
        url = link.url;
      }
    });
    return url;
  }

  /**
   * Get version of plugin
   *
   * @returns {string}
   * @memberof GFPlugin
   */
  getVersion(): string {
    return GFPlugin.data.info.version;
  }

  /**
   * Get root path
   *
   * @returns {string}
   * @memberof GFPlugin
   */
  getRootPath(): string {
    return $GF.getVar($GF.CONSTANTS.VAR_STG_CTXROOT);
  }

  /**
   * Get libs path
   *
   * @returns {string}
   * @memberof GFPlugin
   */
  getLibsPath(): string {
    return `${$GF.getVar($GF.CONSTANTS.VAR_STG_CTXROOT)}libs/`;
  }

  /**
   * Get Draw.io libs path
   *
   * @returns {string}
   * @memberof GFPlugin
   */
  getDrawioPath(): string {
    return `${this.getLibsPath()}drawio/`;
  }

  /**
   * Get statics path
   *
   * @returns {string}
   * @memberof GFPlugin
   */
  getStaticPath(): string {
    return `${this.getRootPath()}static/`;
  }

  /**
   * Get mxBasePath
   * mxBasePath: Specifies the path in mxClient.basePath.
   *
   * @returns {string}
   * @memberof GFPlugin
   */
  getMxBasePath(): string {
    return `${this.getDrawioPath()}mxgraph/`;
  }

  /**
   * Return Style path
   *
   * @returns {string}
   * @memberof GFPlugin
   */
  getMxStylePath(): string {
    return `${this.getDrawioPath()}styles/`;
  }

  /**
   * Return shapes xml path for draw.io
   *
   * @returns {string}
   * @memberof GFPlugin
   */
  getShapesPath(): string {
    return `${this.getDrawioPath()}/shapes/`;
  }

  /**
   * Return partial path
   *
   * @returns {string}
   * @memberof GFPlugin
   */
  getPartialPath(): string {
    return `${this.getRootPath()}partials/`;
  }

  /**
   * Return stencils js path for draw.io
   *
   * @returns {string}
   * @memberof GFPlugin
   */
  getStencilsPath(): string {
    return `${this.getDrawioPath()}/stencils/`;
  }

  getMxCssPath(): string {
    return `${this.getDrawioPath()}styles/`;
  }

  getMxResourcePath(): string {
    return `${this.getMxBasePath()}css/`;
  }

  getMxImagePath(): string {
    return `${this.getMxBasePath()}images/`;
  }
}

// class GFMessage {
//   static container: HTMLDivElement;
//   static message: HTMLSpanElement;
//   static ERROR_MESSAGE = 'error';
//   static ERROR_COLOR = 'red';
//   static INFO_MESSAGE = 'info';
//   static INFO_COLOR = 'white';
//   static WARNING_MESSAGE = 'warning';
//   static WARNING_COLOR = 'yellow';

//   constructor(parent: HTMLDivElement) {
//     const container = parent;
//     if (container !== null) {
//       GFMessage.container = container;
//       const span = container.querySelector<HTMLSpanElement>('#message-text');
//       if (span === null) {
//         GFMessage.message = document.createElement('span');
//         GFMessage.container.appendChild(GFMessage.message);
//       } else {
//         GFMessage.message = span;
//       }
//     }
//   }

//   static init(parentDiv: HTMLDivElement): GFMessage {
//     return new GFMessage(parentDiv);
//   }

//   async setMessage(message: string, type: string = GFMessage.INFO_MESSAGE) {
//     if (GFMessage.container && GFMessage.message) {
//       GFMessage.message.innerHTML = message;
//       switch (type) {
//         case GFMessage.INFO_MESSAGE:
//           GFMessage.message.style.color = GFMessage.INFO_COLOR;
//           break;
//         case GFMessage.ERROR_MESSAGE:
//           GFMessage.message.style.color = GFMessage.ERROR_COLOR;
//           break;
//         case GFMessage.WARNING_MESSAGE:
//           GFMessage.message.style.color = GFMessage.WARNING_COLOR;
//           break;

//         default:
//           GFMessage.message.style.color = GFMessage.INFO_COLOR;
//           break;
//       }
//       GFMessage.container.style.display = '';
//       $GF.setUniqTimeOut(this.clearMessage, $GF.CONSTANTS.CONF_GFMESSAGE_MS, 'flowcharting-message');
//     }
//   }

//   clearMessage() {
//     if (GFMessage.container && GFMessage.message) {
//       GFMessage.container.style.display = 'none';
//       GFMessage.message.innerHTML = '';
//     }
//     $GF.clearUniqTimeOut('flowcharting-message');
//   }
// }

/**
 * Trace Perf class
 *
 * @class GFTrace
 */
class GFTrace {
  static enable = false;
  static trc = new Map();
  static fn = new Map();
  static indent = 0;
  trace:
    | {
        Name: string;
        Id: string;
        Args: any;
        Return: any;
        Before: number;
        End: number | undefined;
        ExecTime: number | undefined;
        Indent: number;
      }
    | undefined;

  constructor(fn?: string) {
    if (GFTrace.enable && fn !== undefined) {
      this.trace = {
        Name: fn,
        Id: $GF.utils.uniqueID(),
        Args: undefined,
        Return: undefined,
        Before: Date.now(),
        End: undefined,
        ExecTime: undefined,
        Indent: GFTrace.indent,
      };
      GFTrace.trc.set(this.trace.Id, this.trace);
    }
  }

  static init(): GFTrace {
    return new GFTrace();
  }

  before(fn: string | undefined):
    | GFTrace
    | {
        after: () => void;
      } {
    if (GFTrace.enable && fn !== undefined) {
      const t = new GFTrace(fn);
      GFTrace.indent++;
      GFTrace._inc(fn);
      return t;
    }
    return { after: () => {} };
  }

  static _inc(fn) {
    let f = GFTrace.fn.get(fn);
    if (f === undefined) {
      f = {
        Calls: 0,
        Function: fn,
        TotalTimes: 0,
      };
    }
    f.Calls++;
    GFTrace.fn.set(fn, f);
  }

  async after() {
    if (GFTrace.enable && this.trace !== undefined) {
      if (this.trace) {
        this.trace.End = Date.now();
        GFTrace.indent--;
      }
    }
  }

  clear() {
    if (GFTrace.enable) {
      GFTrace.trc.clear();
      GFTrace.fn.clear();
    }
  }

  enable() {
    GFTrace.enable = true;
  }

  disable() {
    GFTrace.enable = false;
  }

  isEnabled() {
    return GFTrace.enable;
  }

  async resume() {
    if (GFTrace.enable) {
      let tb: any[] = [];
      let fn: any[] = [];
      GFTrace.trc.forEach((trace) => {
        trace.ExecTime = trace.End - trace.Before;
        const f = GFTrace.fn.get(trace.Name);
        f.TotalTimes += trace.ExecTime;
        tb.push(trace);
      });
      console.table(tb, ['Indent', 'Name', 'ExecTime']);
      GFTrace.fn.forEach((f) => {
        fn.push(f);
      });
      console.table(fn, ['Function', 'Calls', 'TotalTimes']);
      this.clear();
    }
  }
}

export class $GF {
  static _globalvars: GFVariables = new GFVariables();
  static CONSTANTS: GFCONSTANT = new GFCONSTANT();
  static log: GFLog;
  static trace: GFTrace;
  // static message: GFMessage;
  static plugin: GFPlugin;
  static graphHover = false;
  static GHTimeStamp = 0;
  static DEBUG = true;
  static utils: {
    decode: (data: string, encode: boolean, deflate: boolean, base64: boolean) => string;
    encode: (data: string, encode: boolean, deflate: boolean, base64: boolean) => string;
    loadJS: (fname: string) => void;
    sleep: (ms: number, mess?: string) => void;
    uniqueID: () => string;
    // getRatioColor: (ratio: number, colorStart: string, colorEnd: string) => string;
    matchString: (str: string, pattern: string | undefined, regex?: boolean) => boolean;
    stringToJsRegex: (str: string) => RegExp;
    isencoded: (data: string) => boolean;
    minify: (text: string) => string;
    prettify: (text: string) => string;
    getMarky: () => any;
    // getStepColors: (colorStart: string, colorEnd: string, colorCount: number) => string[];
    evalIt: (code: string) => string;
    loadFile: (fname: string) => string;
    $loadFile: (fname: string) => string;
    $evalFile: (fname: string) => void;
    evalRaw: (code: string) => void;
    addScript: (src: string) => void;
  } = require('./utils_raw');

  static init($scope: any, templateSrv: any, dashboard: any, ctrl: any): $GF {
    if (!this.plugin) {
      this.plugin = GFPlugin.init($scope, templateSrv, dashboard, ctrl);
      if (this.DEBUG) {
        console.log('DEBUG Scope', $scope);
        console.log('DEBUG TemplateSrv', templateSrv);
        console.log('DEBUG Theme', dashboard.style);
        console.log('DEBUG dashboard', dashboard);
      }
    }
    if (!this.log) {
      this.log = GFLog.init();
    }
    if (!this.trace) {
      this.trace = GFTrace.init();
    }
    return this;
  }

  static me(): $GF {
    return this;
  }

  /**
   * Recover Meassage div in module.html
   *
   * @static
   * @param {HTMLElement} html
   * @memberof $GF
   */
  // static setMessageDiv(html: HTMLDivElement) {
  //   this.message = GFMessage.init(html);
  // }

  /**
   * Replace/resolve variables
   *
   * @static
   * @param {string} text
   * @memberof $GF
   */
  static resolveVars(text: string) {
    return this.getGlobalVars().replaceText(text);
  }

  /**
   * Return the theme
   *
   * @static
   * @returns {string}
   * @memberof $GF
   */
  static getTheme(): string {
    let templateSrv = $GF.getVar($GF.CONSTANTS.VAR_OBJ_TEMPLATESRV);
    let theme = templateSrv !== undefined ? templateSrv.style : 'dark';
    return theme;
  }

  /**
   * angular $apply
   *
   * @memberof $GF
   */
  // static async refresh() {
  //   const scope = $GF.getVar($GF.CONSTANTS.VAR_OBJ_SCOPE);
  //   await scope.$applyAsync();
  // }

  /**
   * Create and get local variables container
   *
   * @static
   * @returns {GFVariables}
   * @memberof GFGlobal
   */
  static createLocalVars(): GFVariables {
    let _v = new GFVariables();
    return _v;
  }

  /**
   * Return a dynamic GFTable
   *
   * @static
   * @param {*} init
   * @memberof $GF
   */
  static createGFTable(table: gf.TTableData, div?: HTMLDivElement): GFTable {
    return new GFTable(table, div);
  }

  /**
   * Get global variables container
   *
   * @static
   * @returns {GFVariables}
   * @memberof GFGlobal
   */
  static getGlobalVars(): GFVariables {
    if ($GF._globalvars === undefined) {
      $GF._globalvars = new GFVariables();
    }
    return $GF._globalvars;
  }

  static getGrafanaVars(): string[] {
    const templateSrv = $GF.getVar($GF.CONSTANTS.VAR_OBJ_TEMPLATESRV);
    if (templateSrv !== undefined && templateSrv !== null) {
      return _.map(templateSrv.variables, (variable) => `\${${variable.name}}`);
    }
    return [];
  }

  /**
   * Get global variable value
   *
   * @static
   * @param {*} key
   * @returns {*}
   * @memberof GFGlobal
   */
  static getVar(key: any): any {
    return $GF.getGlobalVars().get(key);
  }

  /**
   * set global variable with value
   *
   * @static
   * @param {*} key
   * @param {*} value
   * @memberof GFGlobal
   */
  static setVar(key: any, value: any) {
    $GF.getGlobalVars().set(key, value);
  }

  static unsetVar(key: any) {
    $GF.getGlobalVars().unset(key);
  }

  /**
   * Get all available variables name
   *
   * @static
   * @returns {string[]}
   * @memberof GFGlobal
   */
  static getFullAvailableVarNames(): string[] {
    return GFVariables.getAvailableLocalVarNames().concat($GF.getGrafanaVars());
  }

  /**
   * Return text for a value
   *
   * @static
   * @param {TSelectString[]} list
   * @param {*} value
   * @memberof $GF
   */
  static GetT4V(list: gf.TSelectAny[], value: any): string {
    if (list) {
      for (let i = 0; i < list.length; i++) {
        const element = list[i];
        if (element.value === value) {
          return element.text;
        }
      }
    }
    return 'No text ';
  }

  /**
   * Set focus to id dom
   *
   * @param {string} id
   * @returns
   * @memberof $GF
   */
  static async setFocus(id: string) {
    try {
      setTimeout(() => {
        const elt = document.getElementById(id);
        if (elt) {
          elt.focus();
        }
      }, 100);
      return true;
    } catch (error) {
      return false;
    }
  }

  static calculateIntervalCounter(
    begin: number | undefined,
    end: number | undefined,
    count: number,
    method: gf.TCounterKeys = 'linear'
  ): any[] {
    let result: any[] = [];
    let step: any;
    let current: any;
    if (begin !== undefined && end !== undefined) {
      const distance = end - begin;
      step = Math.round(distance / count);
      current = begin;
    } else {
      step = undefined;
    }
    let index = 0;
    for (index = 0; index < count; index++) {
      if (step !== undefined) {
        current += step;
      } else {
        current = undefined;
      }
      result.push(current);
    }
    result[index] = end;
    return result;
  }

  static setUniqTimeOut(fc: CallableFunction, timer: number, id?: string): string {
    let timeout: Map<string, number> = $GF.getVar($GF.CONSTANTS.VAR_MAP_TIMEOUT);
    if (timeout === undefined) {
      timeout = new Map();
      $GF.setVar($GF.CONSTANTS.VAR_MAP_TIMEOUT, timeout);
    }
    if (id !== undefined) {
      this.clearUniqTimeOut(id);
    }
    const thread = window.setTimeout(fc, timer);
    id = id === undefined ? thread.toString() : id;
    timeout.set(id, thread);
    return id;
  }

  static clearUniqTimeOut(id: string) {
    const timeout: Map<string, number> = $GF.getVar($GF.CONSTANTS.VAR_MAP_TIMEOUT);
    if (timeout !== undefined) {
      try {
        const tm = timeout.get(id);
        if (tm !== undefined) {
          timeout.delete(id);
          window.clearTimeout(tm);
        }
      } catch (error) {
        $GF.log.warn('Failed to clear timeout thread', id, error);
      }
    }
  }

  static getCurrentDate(): string {
    const currentDateTime = new Date();
    const d =
      currentDateTime.getFullYear() +
      '-' +
      (currentDateTime.getMonth() + 1).toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false,
      }) +
      '-' +
      currentDateTime.getDate().toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false,
      }) +
      ' ' +
      currentDateTime.getHours().toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false,
      }) +
      ':' +
      currentDateTime.getMinutes().toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false,
      }) +
      ':' +
      currentDateTime.getSeconds().toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });
    return d;
  }

  /**
   * Compute a ratio, used for parameters of _getColorForRatio
   *
   * @private
   * @param {number} beginValue
   * @param {number} endValue
   * @param {number} value
   * @returns {number}
   * @memberof Rule
   */
  static calculateRatioForValue(beginValue: number, endValue: number, value: number): number {
    if (value < beginValue || value > endValue) {
      throw new Error(
        `Cannot calculate ratio for value ${value} because value is less than ${beginValue} or greater than ${endValue}`
      );
    }
    let absoluteDistance = endValue - beginValue;
    let valueDistanceFromMin = value - beginValue;
    let ratio = valueDistanceFromMin / absoluteDistance;
    return ratio;
  }

  /**
   * Calulate a value between 2 values with a ratio
   *
   * @private
   * @param {number} beginValue
   * @param {number} endValue
   * @param {number} ratio
   * @returns
   * @memberof Rule
   */
  static calculateValueForRatio(beginValue: number, endValue: number, ratio: number) {
    return beginValue + (endValue - beginValue) * ratio;
  }

  /**
   * Calulate a color between 2 colors with a ratio
   *
   * @private
   * @param {string} beginColor
   * @param {string} endColor
   * @param {number} ratio
   * @returns {string}
   * @memberof Rule
   */
  static calculateColorForRatio(beginColor: string, endColor: string, ratio: number): string {
    let color = endColor;
    try {
      color = chroma.scale([beginColor, endColor]).mode('lrgb')(ratio).hex();
    } catch (error) {
      color = endColor;
    }
    return color;
  }

  /**
   * Add a new Intervall (window.setInterval)
   *
   * @static
   * @param {CallableFunction} fc
   * @param {number} timer
   * @returns {number}
   * @memberof GFGlobal
   */
  static setUniqInterval(fc: CallableFunction, timer: number, id?: string): string {
    let interval: Map<string, number> = $GF.getVar($GF.CONSTANTS.VAR_MAP_INTERVAL);
    if (interval === undefined) {
      interval = new Map();
      $GF.setVar($GF.CONSTANTS.VAR_MAP_INTERVAL, interval);
    }
    if (id !== undefined) {
      this.clearUniqInterval(id);
    }
    const thread = window.setInterval(fc, timer);
    id = id === undefined ? thread.toString() : id;
    interval.set(id, thread);
    return id;
  }

  /**
   * Add/clear a  Intervall (window.clearInterval)
   *
   * @static
   * @param {string} id
   * @memberof GFGlobal
   */
  static clearUniqInterval(id: string) {
    let interval: Map<string, number> = $GF.getVar($GF.CONSTANTS.VAR_MAP_INTERVAL);
    if (interval !== undefined) {
      try {
        const int = interval.get(id);
        interval.delete(id);
        window.clearInterval(int);
      } catch (error) {
        $GF.log.warn('Failed to clear interval thread', id, error);
      }
    }
  }

  /**
   * Load a file into variables
   *
   * @static
   * @param {string} varName
   * @param {string} fileName
   * @memberof GFGlobal
   */
  static async loadLocalFile(varName: string, fileName: string) {
    let v = $GF.getVar(varName);
    if (v === undefined) {
      const contextroot = $GF.getVar($GF.CONSTANTS.VAR_STG_CTXROOT);
      if (contextroot !== undefined) {
        const filePath = `${contextroot}/${fileName}`;
        if (!!window.fetch) {
          // exécuter ma requête fetch ici
          fetch(filePath)
            .then((response) => {
              if (response.ok) {
                response
                  .text()
                  .then((text) => {
                    $GF.log.info('loadLocalFile called succesfully', filePath);
                    $GF.setVar(varName, text);
                    return text;
                  })
                  .catch((error) => $GF.log.error('Error when download text file', filePath, error));
              }
            })
            .catch((error) => $GF.log.error('Error when download file', filePath, error));
        } else {
          // Faire quelque chose avec XMLHttpRequest?
          const txt = $GF.utils.loadFile(fileName);
          if (txt) {
            $GF.setVar(varName, $GF.utils.loadFile(fileName));
            return txt;
          }
        }
      } else {
        $GF.log.warn('loadLocalFile Contexroot : ', contextroot);
      }
    }
    return false;
  }

  static setGraphHover(timestamp: number) {
    if (this.isGraphHoverEnabled()) {
      this.graphHover = true;
      this.GHTimeStamp = timestamp;
    }
  }

  static unsetGraphHover() {
    this.graphHover = false;
    this.GHTimeStamp = 0;
  }

  static hasGraphHover(): boolean {
    return this.graphHover && this.isGraphHoverEnabled();
  }

  static isGraphHoverEnabled(): boolean {
    const dashboard = this.getVar($GF.CONSTANTS.VAR_OBJ_DASHBOARD);
    return dashboard !== undefined && dashboard.sharedTooltipModeEnabled();
  }

  static getGraphHover(): number | undefined {
    if (this.hasGraphHover()) {
      // return this.getVar($GF.CONSTANTS.VAR_NUM_GHTIMESTAMP);
      return this.GHTimeStamp;
    }
    return undefined;
  }

  /**
   * Return true if mouse is in panel
   *
   * @static
   * @returns {boolean}
   * @memberof $GF
   */
  // static isMouseInPanel(): boolean {
  //   const ctrl = this.getVar($GF.CONSTANTS.VAR_OBJ_CTRL);
  //   if (ctrl) {
  //     return ctrl.isMouseIn();
  //   }
  //   return false;
  // }

  /**
   * Return Html for popup with links to documentation
   *
   * @param {string} text
   * @param {string} tagBook
   * @param {string} [tagImage]
   * @returns {string}
   * @memberof $GF
   */
  static popover(text: string, tagBook: string, tagImage?: string): string {
    const url = $GF.plugin.getRepo();
    const images = `${this.plugin.getRepo()}images/`;
    const textEncoded = String(text)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
    const desc = `${textEncoded}`;
    let book = '';
    let image = '';
    if (tagBook) {
      book = `<a href="${url}${tagBook}" target="_blank"><i class="fa fa-book fa-fw"></i>Help</a>`;
    }
    if (tagImage) {
      image = `<a href="${images}${tagImage}.png" target="_blank"><i class="fa fa-image fa-fw"></i>Example</a>`;
    }
    return `
    <div id="popover" style="display:flex;flex-wrap:wrap;width: 100%;">
      <div style="flex:1;height:100px;margin-bottom: 20px;">${desc}</div>
      <div style="flex:1;height:100px;margin-bottom: 20px;">${book}</div>
      <div style="flex-basis: 100%;height:100px;margin-bottom:20px;">${image}</div>
    </div>`;
  }

  static destroy() {
    let interval: Set<any> = $GF.getVar($GF.CONSTANTS.VAR_MAP_INTERVAL);
    if (interval !== undefined) {
      interval.forEach((x) => $GF.clearUniqInterval(x));
      interval.clear();
    }
    let timeout: Set<any> = $GF.getVar($GF.CONSTANTS.VAR_MAP_TIMEOUT);
    if (timeout !== undefined) {
      timeout.forEach((x) => $GF.clearUniqTimeOut(x));
      timeout.clear();
    }
  }
}

export class GFTable {
  tableDiv: HTMLDivElement | undefined;
  tableData: gf.TTableData;
  pressed: boolean = false;
  headerTable: HTMLDivElement | undefined;
  bodyTable: HTMLDivElement | undefined;
  indexTable: number = 0;
  startX: number = 0;
  startWidth: any = 0;

  constructor(table: gf.TTableData, div?: HTMLDivElement) {
    this.tableData = table;
    this.tableDiv = div;
  }

  getWidth(id: string | number): string {
    return this.getColumnProperty(id, 'width');
  }

  getLeft(id: string | number): string {
    let sizes = 0;
    let found = false;
    this.tableData.columns.forEach((c) => {
      if (c.id !== id && found === false) {
        sizes += parseInt(c.width, 10);
      }
      if (c.id === id) {
        found = true;
      }
    });
    return `${sizes}px`;
  }

  getStyle(id: string | number): string {
    // const properties = ['width', 'align'];
    let style = '';
    if (this.haveProperty(id, 'width')) {
      const prop = this.getColumnProperty(id, 'width');
      style = `${style}width: ${prop};`;
    }
    if (this.haveProperty(id, 'align')) {
      const prop = this.getColumnProperty(id, 'align');
      style = `${style}text-align: ${prop};`;
    }
    return style;
  }

  getIndex(id: string): number {
    return this.getColumnProperty(id, 'index');
  }

  getId(index: number): string {
    return this.getColumnProperty(index, 'id');
  }

  getLabel(id: string | number): string {
    return this.getColumnProperty(id, 'label');
  }

  getDesc(id: string | number): string {
    return this.getColumnProperty(id, 'desc');
  }

  getColumnProperty(id: string | number, property: gf.TTableProperty): any {
    let result = `No value for property ${property}`;
    const isNumber = typeof id === 'number';
    for (let index = 0; index < this.tableData.columns.length; index++) {
      const element = this.tableData.columns[index];
      if ((isNumber && id === element.index) || (!isNumber && id === element.id)) {
        return element[property];
      }
    }
    return result;
  }

  haveProperty(id: string | number, property: gf.TTableProperty): boolean {
    const isNumber = typeof id === 'number';
    for (let index = 0; index < this.tableData.columns.length; index++) {
      const element = this.tableData.columns[index];
      if ((isNumber && id === element.index) || (!isNumber && id === element.id)) {
        return element[property] !== undefined && element[property] !== null;
      }
    }
    return false;
  }

  setColumnProperty(id: string | number, property: gf.TTableProperty, value: any): this {
    const isNumber = typeof id === 'number';
    for (let index = 0; index < this.tableData.columns.length; index++) {
      const element = this.tableData.columns[index];
      if ((isNumber && id === element.index) || (!isNumber && id === element.id)) {
        const prop: string = property;
        element[prop] = value;
      }
    }
    return this;
  }

  findTableDiv(elt: HTMLElement): HTMLElement | undefined {
    if (elt !== null && elt !== undefined) {
      // CANT BUILD WITH FORCE CASTING
      let node: any = elt;
      while (node !== null && this.tableDiv === undefined) {
        if (node.classList.contains('gf-table-main')) {
          this.tableDiv = node;
        } else {
          node = node.parentElement;
        }
      }
    }
    return this.tableDiv;
  }

  setTableDiv(div: HTMLDivElement) {
    this.tableDiv = div;
  }

  onMouseMove(event: MouseEvent) {
    if (this.pressed && this.headerTable && this.headerTable.parentNode) {
      const delta = event.pageX - this.startX;
      let width = this.startWidth + delta;
      if (width < 10) {
        width = 10;
      }
      this.headerTable.style.width = `${width}px`;
      if (this.bodyTable) {
        const rows = this.bodyTable.querySelectorAll('.gf-table-rows-resizable');
        Array.from(rows).forEach((r) => {
          const cells = r.querySelectorAll('.gf-table-cells-resizable');
          let index = 0;
          cells.forEach((cell) => {
            // CANT BUILD WITH FORCE CASTING
            const node: any = cell;
            if (index === this.indexTable) {
              node.style.width = `${width}px`;
              this.setColumnProperty(index, 'width', `${width}px`);
            }
            index += 1;
          });
        });
      }
    }
  }
  onMouseDown(event: any) {
    this.pressed = true;
    this.startX = event.pageX;
    // console.log('onMouseDown',event);
    this.headerTable = event.currentTarget.parentElement;
    if (this.headerTable) {
      if (!this.tableDiv) {
        this.findTableDiv(this.headerTable);
      }
      if (this.headerTable.parentNode) {
        this.indexTable = Array.from(this.headerTable.parentNode.children).indexOf(this.headerTable);
      }
      this.headerTable.classList.add('gf-resizing');
      this.startWidth = parseInt(this.headerTable.style.width, 10);
      if (this.tableDiv) {
        // CANT BUILD WITH HTMLDIVELEMENT
        const body: any = this.tableDiv.getElementsByClassName('gf-table-body')[0];
        this.bodyTable = body;
      } else {
        $GF.log.error('Unable to find table definition with class gf-table-main');
      }
    }
  }

  onMouseUp(event: MouseEvent) {
    this.pressed = false;
    if (this.headerTable) {
      this.headerTable.classList.remove('gf-resizing');
    }
  }
}

declare interface GFTimerUnit {
  step: number;
  fn: CallableFunction;
  ms: number;
  running: boolean;
  runned: boolean;
  invalidated: boolean;
  tmId: number;
}
export class GFTimer {
  iteration: number = 0;
  cyclic: boolean = false;
  currentStep: number = 0;
  uniqId: string;
  static timers: Map<string, GFTimer>;
  units: GFTimerUnit[];

  constructor(uniqId: string) {
    if (GFTimer.timers === undefined) {
      GFTimer.timers = new Map();
    }
    this.units = [];
    this.uniqId = uniqId;
  }

  static stop(uniqId?: string) {
    if (GFTimer.timers === undefined) {
      GFTimer.timers = new Map();
    }
    if (uniqId !== undefined) {
      const gftimer = GFTimer.timers.get(uniqId);
      if (gftimer) {
        gftimer.cancel();
        GFTimer.timers.delete(uniqId);
      }
    } else {
      GFTimer.timers.forEach((gftimer, key, map) => {
        gftimer.cancel();
      });
      GFTimer.timers.clear();
    }
  }

  setCyclic(bool: boolean = true): this {
    this.cyclic = bool;
    this.iteration = 0;
    return this;
  }

  setIteration(it: number = 0): this {
    this.iteration = it;
    this.cyclic = false;
    return this;
  }

  _reinit(): this {
    this.currentStep = 0;
    this.units.forEach((u) => {
      u.runned = false;
      u.invalidated = false;
    });
    return this;
  }

  cancel(): this {
    this.units.forEach((t) => {
      GFTimer._cleanUnit(t);
    });
    return this;
  }

  _getDefaultTimerUnit(): GFTimerUnit {
    return {
      step: this.units.length,
      fn: () => {},
      ms: 1000,
      running: false,
      runned: false,
      invalidated: false,
      tmId: 0,
    };
  }

  static _cleanUnit(unit: GFTimerUnit) {
    if (unit !== undefined && unit.invalidated === false && unit.runned === false) {
      unit.invalidated = true;
      GFTimer._stopTimeOut(unit.tmId);
    }
  }

  static _stopTimeOut(id: number) {
    try {
      if (id !== undefined) {
        window.clearTimeout(id);
      }
    } catch (error) {
      $GF.log.warn('Failed to clear timeout thread', id, error);
    }
  }

  static getNewTimer(uniqId): GFTimer {
    GFTimer.stop(uniqId);
    const gftimer = new GFTimer(uniqId);
    GFTimer.timers.set(uniqId, gftimer);
    return gftimer;
  }

  static getTimer(uniqId): GFTimer | undefined {
    if (GFTimer.timers !== undefined) {
      return GFTimer.timers.get(uniqId);
    }
    return undefined;
  }

  add(fn: CallableFunction, ms: number): this {
    const unit = this._getDefaultTimerUnit();
    unit.fn = fn;
    unit.ms = ms;
    this.units.push(unit);
    return this;
  }

  run(): this {
    const length = this.units.length;
    for (let i = 0; i < length; i++) {
      const u = this.units[i];
      u.tmId = window.setTimeout(this._runnable.bind(this, u), u.ms);
    }
    return this;
  }

  _runnable(unit: GFTimerUnit) {
    if (unit.invalidated === false) {
      unit.running = true;
      try {
        for (let i = this.currentStep; i < unit.step; i++) {
          GFTimer._cleanUnit(this.units[i]);
        }
        unit.fn();
      } catch (error) {
        $GF.log.warn('Failed to run fn', error);
      }
      this.currentStep = unit.step;
      unit.running = false;
      unit.runned = true;
      if (unit.step === this.units.length - 1) {
        if (this.cyclic || this.iteration > 0) {
          this._reinit();
          if (this.iteration > 0) {
            this.iteration = this.iteration - 1;
          }
          this.run();
        } else {
          GFTimer.timers.delete(this.uniqId);
        }
      }
    }
  }
}
