import { Component, OnInit } from "@angular/core";
import {
    CsvFileTypes,
    IColumnExportingEventArgs,
    IGridToolbarExportEventArgs,
    IgxCsvExporterOptions,
    IgxExcelExporterOptions,
    IgxExporterOptionsBase
} from "igniteui-angular";
import { EMPLOYEE_FLAT_AVATARS_DATA } from "../data/employees-flat-avatars";

@Component({
    selector: "tree-grid-toolbar-sample-2",
    styleUrls: ["./tree-grid-toolbar-sample-2.component.css"],
    templateUrl: "./tree-grid-toolbar-sample-2.component.html"
})
export class TreeGridToolbarSample2Component implements OnInit {

    public data: any[];

    public ngOnInit() {
        this.data = EMPLOYEE_FLAT_AVATARS_DATA();
    }

    public toolbarExportingHandler(args: IGridToolbarExportEventArgs) {
        // You can customize the exporting from this event
        const options: IgxExporterOptionsBase = args.options;
        options.fileName = "Custom Title";

        if (options instanceof IgxExcelExporterOptions) {
            const excelOptions = options as IgxExcelExporterOptions;
            excelOptions.columnWidth = 10;
        } else {
            const csvOptions = options as IgxCsvExporterOptions;
            csvOptions.fileType = CsvFileTypes.TSV;
            csvOptions.valueDelimiter = "\t";
        }

        args.exporter.onColumnExport.subscribe((columnArgs: IColumnExportingEventArgs) => {
            // Don't export image field
            columnArgs.cancel = columnArgs.header === "Name";
        });
    }
}