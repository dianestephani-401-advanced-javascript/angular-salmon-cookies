import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  sixAm: number;
  sevenAm: number;
  eightAm: number;
  nineAm: number;
  tenAm: number;
  elevenAm: number;
  twelvePm: number;
  onePm: number;
  twoPm: number;
  threePm: number;
  fourPm: number;
  fivePm: number;
  sixPm: number;
  sevenPm: number;

}


const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Seattle', sixAm: 1.0079, sevenAm: 5, eightAm: 2, nineAm: 3, tenAm: 4, elevenAm: 5, twelvePm: 6, onePm: 7, twoPm: 8, threePm: 9, fourPm: 10, fivePm: 11, sixPm: 12, sevenPm: 33},
  {position: 2, name: 'Tokyo', sixAm: 4.0026, sevenAm: 5, eightAm: 2, nineAm: 3, tenAm: 4, elevenAm: 5, twelvePm: 6, onePm: 7, twoPm: 8, threePm: 9, fourPm: 10, fivePm: 11, sixPm: 12, sevenPm: 33},
  {position: 3, name: 'Dubai', sixAm: 6.941, sevenAm: 5, eightAm: 2, nineAm: 3, tenAm: 4, elevenAm: 5, twelvePm: 6, onePm: 7, twoPm: 8, threePm: 9, fourPm: 10, fivePm: 11, sixPm: 12, sevenPm: 33},
  {position: 4, name: 'Paris', sixAm: 9.0122, sevenAm: 5, eightAm: 2, nineAm: 3, tenAm: 4, elevenAm: 5, twelvePm: 6, onePm: 7, twoPm: 8, threePm: 9, fourPm: 10, fivePm: 11, sixPm: 12, sevenPm: 33},
  {position: 5, name: 'Lima', sixAm: 10.811, sevenAm: 5, eightAm: 2, nineAm: 3, tenAm: 4, elevenAm: 5, twelvePm: 6, onePm: 7, twoPm: 8, threePm: 9, fourPm: 10, fivePm: 11, sixPm: 12, sevenPm: 33},
  {position: 6, name: 'Hourly Total', sixAm: 12.0107, sevenAm: 5, eightAm: 2, nineAm: 3, tenAm: 4, elevenAm: 5, twelvePm: 6, onePm: 7, twoPm: 8, threePm: 9, fourPm: 10, fivePm: 11, sixPm: 12, sevenPm: 33}

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
  displayedColumns: string[] = ['position', 'name', 'sixAm', 'sevenAm', 'eightAm', 'nineAm', 'tenAm', 'elevenAm', 'twelvePm', 'onePm', 'twoPm', 'threePm', 'fourPm', 'fivePm', 'sixPm', 'sevenPm'];
  dataSource = ELEMENT_DATA;
  constructor() { }
  ngOnInit(): void {
  }
}




