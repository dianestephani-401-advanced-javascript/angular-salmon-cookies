import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  sixAm: number;
  sevenAm: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Seattle', sixAm: 1.0079, sevenAme: 'H'},
  {position: 2, name: 'Tokyo', sixAm: 4.0026, symbol: 'He'},
  {position: 3, name: 'Dubai', sixAm: 6.941, symbol: 'Li'},
  {position: 4, name: 'Paris', sixAm: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Lima', sixAm: 10.811, symbol: 'B'},
  {position: 6, name: 'Hourly Total', sixAm: 12.0107, symbol: 'C'},

];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css'],
})

export class SalesComponent implements OnInit {

  title = 'angular-salmon-cookies';
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  constructor() { }
  ngOnInit(): void {
  }
}

