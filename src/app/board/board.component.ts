import { Component } from '@angular/core';
import { GridType } from '../model/grid-type';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {
  cells:number[];
  cols:number[];
  rows:string[];
  constructor() {
    this.cells = Array(100).fill(0).map((x,i)=>i); // [0,1,2,3,4]
    this.cols = Array(10).fill(1).map((x,i)=>i); // [0,1,2,3,4]
    this.rows = Array("A","B","C","D","E","F","G","H","I","J");
  }

   getIdByLetter(row:string, col:number) : number    {
     if(this.rows.indexOf(row) <0) return -1;     
     return (this.rows.indexOf(row)*10) + this.cols.indexOf(col);
   } 
    
   getId(row:number, col:number) : number  {
    if(row <1 || row >10 || col <1 || col >10) return -1;     
    //return (row-1)*10 + this.cols.indexOf(col);
    return (row-1)*10 + this.cols.indexOf(col);
  }

  getType(row:string, col:number): string {
    if(this.rows.indexOf(row) <0) return " ";
    let rown = this.rows.indexOf(row);
    if(col==5){
      if(rown==0)
        return "▲";
      if(rown==9)
        return "▼";
      return "█";
    }
    return " ";
  }
}
