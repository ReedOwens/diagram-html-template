import { Component, ViewEncapsulation, ViewChild } from "@angular/core";
import { extend } from "@syncfusion/ej2-base";
import { isNullOrUndefined as isNOU } from "@syncfusion/ej2-base";
import { ChartComponent } from "@syncfusion/ej2-angular-charts";
import {
  IAccTextRenderEventArgs,
  IAccLoadedEventArgs,
  AccumulationChartComponent,
  IAccAnimationCompleteEventArgs,
  ILoadedEventArgs
} from "@syncfusion/ej2-angular-charts";
import {
  DiagramComponent,
  DiagramTools,
  NodeModel,
  NodeConstraints, IExportOptions
} from "@syncfusion/ej2-angular-diagrams";
import { GridComponent } from "@syncfusion/ej2-angular-grids";
import { expenseData, startDate, endDate } from "./complexShapes.data";
import { Query, DataManager, Predicate } from "@syncfusion/ej2-data";
import { RangeEventArgs } from "@syncfusion/ej2-calendars";
import { DateRangePickerComponent } from "@syncfusion/ej2-angular-calendars";

/**
 * Sample for ComplexShapes
 */

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  @ViewChild("diagram") diagram: DiagramComponent;

  // custom code end
  // define the JSON of data
  public nodes: NodeModel[] = [
    {
      id: "node1_template1",
      addInfo: {name: "Steve Wonder", manager: "Sam T Jones", hr: "Teress Mit"},
      offsetX: 409,
      offsetY: 400,
      width: 200,
      height: 175,
      shape: { type: "HTML" }
    },
       {
      id: "node1_template2",
      addInfo: {name: "Wonder Woman", manager: "Super Man", vp: "Ryan Dunn"},
      offsetX: 409,
      offsetY: 200,
      width: 200,
      height: 175,
      shape: { type: "HTML" }
    }

  ];

  public targetElement: HTMLElement;

  public created(): void {}

  badge(u) {
    console.log(u)
    console.log(u.addInfo);
    alert("HI " + u.addInfo.name)
  }

  updateName() {
    const n = this.diagram.nodes[0];
    console.log(n.addInfo);
    n.addInfo['name'] = "Hardcoded is me";
        console.log(n.addInfo);
    this.diagram.dataBind();
    this.diagram.refresh();
   // alert('Changed')
  }
   public exportIt() {
     console.log("Exporting")
        let exportOptions: IExportOptions = {};
        exportOptions.format = "PNG";
        exportOptions.mode = 'Download';
        exportOptions.region = 'PageSettings';
        exportOptions.multiplePage = false;
        exportOptions.fileName = 'Export';
        exportOptions.pageHeight = 400;
        exportOptions.pageWidth = 400;
        this.diagram.exportDiagram(exportOptions);
    }
}
// custom code end
