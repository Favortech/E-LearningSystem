import { Component } from '@angular/core';
import { AgGridAngular, AgGridModule } from 'ag-grid-angular';
import {  ColDef } from 'ag-grid-community';
@Component({
  selector: 'app-student-record',
  standalone: true,
  imports: [AgGridModule, AgGridAngular, ],
  templateUrl: './student-record.component.html',
  styleUrl: './student-record.component.scss',
})
export class StudentRecordComponent {
  gridAPI: any;
  apiResponse: any = [
    { name: 'Favor', age: ' 19', score: 70},
    { name: 'Raheal', age: '18', score: 65 },
    { name: 'Racheal', age: '16', score: 80 },
    { name: 'Daniel', age: '20', score: 55},
    { name: 'Dara', age: '19', score: 60 },
    { name: 'Jerry', age: '18', score: 70 },
  ];
  colDefs: ColDef[] = [
    { field: "name" },
    { field: "age" },
    { field: "score" },
  ];
  onGridReady(params: any) {
    this.gridAPI = params?.api;
  }
}
