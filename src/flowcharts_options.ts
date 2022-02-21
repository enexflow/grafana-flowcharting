import { FlowchartHandler } from './flowchartHandler';
import XGraph from './graph_class';
import { Flowchart } from './flowchart_class';
import { $GF, GFTable } from './globals_class';

export class FlowchartsOptionsCtrl {
  $scope: gf.TIFlowchartOptionsScope;
  ctrl: any; //TODO: redefine any
  flowchartHandler: FlowchartHandler;
  panel: any;
  sourceTypes = $GF.CONSTANTS.SOURCE_TYPES;
  themes = $GF.CONSTANTS.DIOTHEME_TYPES;
  errorSourceFlag = false;
  errorSourceMsg = '';
  errorDownloadFlag = false;
  errorDownloadMsg = '';
  editMode = false;
  currentFlowchart: Flowchart | undefined;
  newName = '';
  currentFlowchartName = 'Main';
  flowchartsTableData: gf.TTableData;
  flowchartsTable: GFTable;
  // onColorChange : () => any;

  /** @ngInject */
  constructor($scope: gf.TIFlowchartOptionsScope) {
    $scope.editor = this;
    $scope.$GF = $GF.me();
    this.$scope = $scope;
    this.ctrl = $scope.ctrl;
    this.panel = this.ctrl.panel;
    this.flowchartHandler = this.ctrl.flowchartHandler;
    this.currentFlowchart = this.flowchartHandler.getFlowchart();
    let index = 0;

    // this.onColorChange = () => {
    //   const name = this.flowchartHandler.getCurrentFlowchartName();
    //   this.flowchartHandler.onOptionsChange(name);
    //   this.render();
    // }

    this.flowchartsTableData = {
      data: [],
      columns: [
        {
          index: index++,
          id: 'expand',
          label: '',
          desc: 'Expand/collapse',
          width: '30px',
          sort: 'asc',
          select: false,
        },
        {
          index: index++,
          id: 'name',
          label: 'Flowchart name',
          desc: 'Flowchart Name',
          width: '120px',
          sort: 'asc',
          select: false,
        },
        {
          index: index++,
          id: 'type',
          label: 'Type',
          desc: 'XML or CSV',
          width: '45px',
          sort: 'asc',
          select: false,
        },
        {
          index: index++,
          id: 'source',
          label: 'source',
          desc: 'Src. origin',
          width: '60px',
          sort: 'asc',
          select: false,
        },
        {
          index: index++,
          id: 'background',
          label: 'BG Col.',
          desc: 'Background color',
          width: '60px',
          sort: 'asc',
          select: false,
        },
        {
          index: index++,
          id: 'options',
          label: 'Options',
          desc: 'Checked options',
          width: '150px',
          sort: 'asc',
          select: false,
        },
        // {
        //   index: 6,
        //   id: 'scale',
        //   label: 'Fit',
        //   desc: 'Fit/scale diagram',
        //   width: '40px',
        //   sort: 'asc',
        //   select: false,
        // },
        // {
        //   index: 7,
        //   id: 'center',
        //   label: 'Center',
        //   desc: 'Center diagram in panel',
        //   width: '55px',
        //   sort: 'asc',
        //   select: false,
        // },
        // {
        //   index: 8,
        //   id: 'grid',
        //   label: 'Grid',
        //   desc: 'Display grid',
        //   width: '50px',
        //   sort: 'asc',
        //   select: false,
        // },
        // {
        //   index: 10,
        //   id: 'anim',
        //   label: 'Anim.',
        //   desc: 'Enable/Disable animations on diagram',
        //   width: '40px',
        //   sort: 'asc',
        //   select: false,
        // },
        // {
        //   index: 11,
        //   id: 'tooltip',
        //   label: 'Tooltip',
        //   desc: 'Enable/Disable tooltip on diagram',
        //   width: '40px',
        //   sort: 'asc',
        //   select: false,
        // },
      ],
    };
    this.flowchartsTable = new GFTable(this.flowchartsTableData);
  }

  /**
   * Render
   *
   * @memberof FlowchartOptionsCtrl
   */
  render() {
    this.flowchartHandler.render();
  }

  /**
   * onSourceChange event when source changes
   *
   * @memberof FlowchartOptionsCtrl
   */
  onSourceChange() {
    const name = this.flowchartHandler.getCurrentFlowchartName();
    this.flowchartHandler.onSourceChange(name);
    this.flowchartHandler.onRulesChange();
    this.onOptionChange();
    this.render();
  }

  onColorChange(index: number) {
    return (newColor: any) => {
      const fc = this.flowchartHandler.getFlowcharts()[index];
      fc.data.bgColor = newColor;
      this.onOptionChange();
    };
  }

  /**
   * onOptionChange event when options change
   *
   * @memberof FlowchartOptionsCtrl
   */
  onOptionChange() {
    const name = this.flowchartHandler.getCurrentFlowchartName();
    this.flowchartHandler.onOptionsChange(name);
    this.render();
  }

  checkSource_onSourceChange(source: string): boolean {
    const bool = XGraph.isValidXml(source);
    this.errorSourceFlag = !bool;
    if (!bool) {
      this.ctrl.notify('Invalid Xml definition', 'error');
    } else {
      this.ctrl.clearNotify();
      this.onSourceChange();
      this.$scope.$applyAsync();
    }
    return bool;
  }

  getFlowcharts(): Flowchart[] {
    return this.flowchartHandler.getFlowcharts();
  }

  addFlowchart() {
    this.editMode = true;
    this.currentFlowchart = this.flowchartHandler.addFlowchart(this.flowchartHandler.getFlowchartTmpName());
    this.flowchartHandler.setCurrentFlowchart(this.currentFlowchart.getName());
    this.ctrl.notify(this.currentFlowchart.getName());
    this.newName = this.currentFlowchart.getName();
  }

  removeFlowchart() {
    const current = this.flowchartHandler.getCurrentFlowchart();
    if (current !== undefined && current.getName() !== 'Main') {
      this.currentFlowchart = this.flowchartHandler.setCurrentFlowchart();
      this.currentFlowchartName = this.flowchartHandler.getCurrentFlowchartName();
      this.ctrl.notify(this.currentFlowchartName);
      this.flowchartHandler.removeFlowchart(current.getName());
    }
  }

  selectFlowchart() {
    this.flowchartHandler.setCurrentFlowchart(this.flowchartHandler.currentFlowchartName);
    this.currentFlowchart = this.flowchartHandler.getCurrentFlowchart();
    if (this.currentFlowchart) {
      this.currentFlowchartName = this.flowchartHandler.getCurrentFlowchartName();
      this.ctrl.notify(this.currentFlowchartName);
    }
  }

  cancelFlowchart() {
    this.editMode = false;
    const canceled = this.currentFlowchart;
    this.currentFlowchart = this.flowchartHandler.setCurrentFlowchart('Main');
    if (canceled) {
      this.flowchartHandler.removeFlowchart(canceled.getName());
      if (this.currentFlowchart) {
        this.currentFlowchartName = this.currentFlowchart.getName();
      }
    }
    this.ctrl.notify(this.currentFlowchartName);
  }

  isValideFlowchart(): boolean {
    const fcs = this.flowchartHandler.getFlowchartNames();
    if (this.newName === undefined) {
      return false;
    }
    if (this.newName.length === 0) {
      return false;
    }
    if (fcs.includes(this.newName) && this.currentFlowchart && this.newName !== this.currentFlowchart.getName()) {
      this.ctrl.notify(`Flowchart with name "${this.newName}" already exist`, 'error');
      return false;
    }
    return true;
  }

  validateFlowchart() {
    this.editMode = false;
    if (this.currentFlowchart) {
      this.currentFlowchart.setName(this.newName);
    }
    this.currentFlowchartName = this.newName;
    this.currentFlowchart = this.flowchartHandler.setCurrentFlowchart(this.newName);
  }

  checkUrl_onSourceChange(url: string): boolean {
    this.errorDownloadFlag = false;
    // this.errorDownloadMsg = '';
    const init: RequestInit = { method: 'GET', mode: 'cors', cache: 'default' };
    try {
      url = $GF.resolveVars(url);
      fetch(url, init)
        .then((response) => {
          if (!(response.status >= 200 && response.status <= 299)) {
            this.errorSourceFlag = true;
            this.ctrl.notify(`Error ${response.status} : ${response.statusText}`, 'error');
            this.$scope.$applyAsync();
          } else {
            response.text().then((text) => {
              const fc = this.flowchartHandler.getCurrentFlowchart();
              if (fc && fc.data.type === 'xml') {
                const bool = XGraph.isValidXml(text);
                this.errorSourceFlag = !bool;
                if (this.errorSourceFlag) {
                  this.ctrl.notify('Response is an invalid Xml definition', 'error');
                  $GF.log.error('Response is an invalid Xml definition');
                } else {
                  this.ctrl.clearNotify();
                  this.onSourceChange();
                }
              } else {
                this.onSourceChange();
              }
              this.$scope.$applyAsync();
            });
          }
        })
        .catch((error) => {
          this.errorSourceFlag = true;
          this.ctrl.notify(`Error : ${error}`, 'error');
          this.$scope.$applyAsync();
        });
    } catch (error) {
      this.errorDownloadFlag = true;
      this.ctrl.notify('Error when call url', 'error');
      // this.errorDownloadMsg = 'Error when call url';
    }
    return true;
  }

  /**
   * Open graph in index in draw.io
   *
   * @param {Number} name - index of graph
   * @memberof FlowchartOptionsCtrl
   * @see flowchartHandler:openDrawEditor
   */
  edit(name: string) {
    const fc = this.flowchartHandler.getFlowchart(name);
    if (fc && !fc.data.download) {
      this.flowchartHandler.openDrawEditor(name);
    }
  }

  getNames(): string[] {
    return this.flowchartHandler.getFlowchartNames();
  }

  getCurrentFlowchart(): Flowchart[] {
    const current = this.flowchartHandler.getCurrentFlowchart();
    if (current) {
      return [current];
    }
    return [this.flowchartHandler.flowcharts[0]];
  }
}

/** @ngInject */
export function flowchartsOptionsTab($q, $sce, uiSegmentSrv) {
  return {
    restrict: 'E',
    scope: true,
    templateUrl: `${$GF.plugin.getPartialPath()}/flowcharts/flowchartsTab.html`,
    controller: FlowchartsOptionsCtrl,
  };
}
