import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { IgxHierarchicalGridComponent } from "igniteui-angular";
import { CUSTOMERS } from "../data";

@Component({
    selector: "app-hierarchical-grid-column-group-selection",
    templateUrl: "./hierarchical-grid-column-group-selection.component.html",
    styleUrls: ["./hierarchical-grid-column-group-selection.component.css"]
})
export class HierarchicalGridColumnGroupSelectionComponent implements OnInit, AfterViewInit {

    public data;

    @ViewChild(IgxHierarchicalGridComponent, { static: true })
    private hGrid: IgxHierarchicalGridComponent;

    public ngOnInit(): void {
        this.data = CUSTOMERS;
    }

    public ngAfterViewInit() {
        this.hGrid.selectColumns(["CompanyName", "ContactName", "ContactTitle", "City"]);
    }

}
