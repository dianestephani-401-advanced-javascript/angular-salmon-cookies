import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  six: number;
  seven: number;
  eight: number;
  nine: number;
  ten: number;
  eleven: number;
  twelve: number;
  onepm: number;
  twopm: number;
  threepm: number;
  fourpm: number;
  fivepm: number;
  sixpm: number;
  sevenpm: number;
  
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Seattle', six: 10, seven: 6,
  eight: 10, nine: 10, ten: 9,  eleven: 5, twelve: 5, onepm: 7, twopm: 8, threepm: 11, fourpm: 5, fivepm: 7, sixpm: 8, sevenpm: 9, symbol: 'H'},
  // {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  // {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  // {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  // {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  // {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  // {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  // {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  // {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  // {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})


export class SalesComponent implements OnInit {
  
  title = 'angular-salmon-cookies';
  displayedColumns: string[] = ['position', 'name', 'six','seven', 'eight',
  'nine', 'ten', 'eleven','twelve','onepm','twopm','twopm','threepm','fourpm','fivepm', 'sixpm', 'sevenpm','symbol'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
