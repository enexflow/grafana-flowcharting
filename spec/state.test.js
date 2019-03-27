import * as angular from 'angular';
import MxGraph from "../src/graph_class";
import State from "../src/state_class";
import Rule from "../src/rule_class";

var xmlGraph = '<mxGraphModel dx="1073" dy="521" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="0" pageScale="1" pageWidth="827" pageHeight="1169" math="0" shadow="0"><root><mxCell id="0"/><mxCell id="1" parent="0"/><mxCell id="arrow-1" style="edgeStyle=orthogonalEdgeStyle;rounded=0;html=1;exitX=1;exitY=0.5;exitDx=0;exitDy=0;entryX=0;entryY=0.5;entryDx=0;entryDy=0;jettySize=auto;orthogonalLoop=1;strokeWidth=4;shadow=1;" parent="1" source="shape-grafana" target="shape-love" edge="1"><mxGeometry relative="1" as="geometry"/></mxCell><object label="Grafana" href="www.google.fr" id="shape-grafana"><mxCell style="rounded=1;whiteSpace=wrap;html=1;fillColor=#ffe6cc;strokeColor=#d79b00;shadow=1;" parent="1" vertex="1"><mxGeometry x="10" y="10" width="120" height="60" as="geometry"/></mxCell></object><mxCell id="arrow-2" style="edgeStyle=orthogonalEdgeStyle;rounded=0;html=1;exitX=1;exitY=0.5;exitDx=0;exitDy=0;entryX=0;entryY=0.5;entryDx=0;entryDy=0;jettySize=auto;orthogonalLoop=1;strokeWidth=4;shadow=1;" parent="1" source="shape-love" target="shape-mxgraph" edge="1"><mxGeometry relative="1" as="geometry"/></mxCell><mxCell id="shape-love" value="loves" style="triangle;whiteSpace=wrap;html=1;fillColor=#e1d5e7;strokeColor=#9673a6;shadow=1;" parent="1" vertex="1"><mxGeometry x="210" width="60" height="80" as="geometry"/></mxCell><mxCell id="shape-mxgraph" value="mxGraph" style="ellipse;whiteSpace=wrap;html=1;fillColor=#d5e8d4;strokeColor=#82b366;shadow=1;" parent="1" vertex="1"><mxGeometry x="340" width="120" height="80" as="geometry"/></mxCell><mxCell id="text-grafana" value="MyText : TextVal" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;" parent="1" vertex="1"><mxGeometry x="9" y="50" width="120" height="20" as="geometry"/></mxCell><mxCell id="text-arrow1" value="Text 2" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;" parent="1" vertex="1"><mxGeometry x="150" y="20" width="40" height="20" as="geometry"/></mxCell><mxCell id="text-arrow2" value="Text 3" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;" parent="1" vertex="1"><mxGeometry x="280" y="20" width="40" height="20" as="geometry"/></mxCell><mxCell id="text-mxgraph" value="Text 4" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;" parent="1" vertex="1"><mxGeometry x="380" y="50" width="40" height="20" as="geometry"/></mxCell></root></mxGraphModel>';
document.body.innerHTML = '<div id="MyContainer">Beer</div>';
var series = [{ "datapoints": [[87.2288864455515, 1553029068638], [87.3044867732176, 1553029069138], [87.41570847045853, 1553029069638]], "label": "A-series", "id": "A-series", "alias": "A-series", "aliasEscaped": "A-series", "bars": {}, "stats": { "total": 50819.34737192067, "max": 90.15954449591173, "min": 78.19373234740918, "logmin": 78.19373234740918, "avg": 84.69891228653445, "current": 79.17554249669148, "first": 87.2288864455515, "delta": 12316.4939445703, "diff": -8.053343948860018, "range": 11.96581214850255, "timeStep": 500, "count": 600 }, "legend": true, "hasMsResolution": true, "allIsNull": false, "allIsZero": false, "flotpairs": [[1553029068638, 87.2288864455515], [1553029069138, 87.3044867732176], [1553029069638, 87.41570847045853]] }];
var container = document.getElementById("MyContainer");
var mx = new MxGraph(container, xmlGraph);
mx.drawGraph();


describe("MxGraph", () => {

    test('with properties', () => {
        expect(mx).toMatchObject({ "lock": true, "xmlGraph": xmlGraph, "container": container });
    });

    test('original by id', () => {
        expect(mx.getOrignalCells("id")).toContain("text-mxgraph");
        expect(mx.getOrignalCells("id")).toContain("shape-mxgraph");
        expect(mx.getOrignalCells("id")).toContain("shape-grafana");
    });

    test('original by value', () => {
        expect(mx.getOrignalCells("value")).toContain("loves");
        expect(mx.getOrignalCells("value")).toContain("mxGraph");
        expect(mx.getOrignalCells("value")).toContain("Text 4");
    });

});

describe("Create State", () => {
    var cellId = "shape-love";
    var cellValue = "loves"
    var cell = mx.findCurrentMxCells("id", cellId);
    test('Cell not null', () => {
        expect(cell.length).toBeGreaterThan(0);
    });

    test('Create State of cell', () => {
        let state = new State(cell[0], mx);
        expect(state).toMatchObject({ "cellId": cell[0].id, "matched": false })
    });

    test('test small methods', () => {
        let state = new State(cell[0], mx);

        expect(state.isShape()).toBeTruthy();
        expect(state.getCellProp("id")).toBe(cellId);
        expect(state.getCurrentText()).toBe(cellValue);
        expect(state.getLevel()).toBe(-1);
        expect(state.getCurrentColorStyle("fillColor")).toBe("#e1d5e7");
        expect(state.getCurrentColorStyle("strokeColor")).toBe("#9673a6");
        expect(state.getCurrentColorStyle("fontColor")).toBe("#774400");
    });
});

describe("State", () => {
    var cellId = "shape-love";
    var cell = mx.findCurrentMxCells("id", cellId)[0];
    var rule = new Rule("/.*/");
    rule.thresholds = [50, 80];
    var state = new State(cell, mx);
    var serie = series[0];
    test('test requirements', () => {
        expect(state.getCurrentColorStyle("fillColor")).toBe("#e1d5e7");
        expect(rule.getValueForSerie(serie)).toBe(79.17554249669148);
        expect(rule.matchSerie(serie)).toBeTruthy();
    });
});

//TODO : When object Cell Value not work : Backup Graph.js ?

