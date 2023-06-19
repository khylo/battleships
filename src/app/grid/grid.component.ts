import { Component, Input } from '@angular/core';
import { GridType } from '../model/grid-type';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent {
  @Input() id: number;
  grid_type: GridType;

  constructor() {
    this.id = 0;
    this.grid_type = GridType.Sea;
  }

  getRow(): number {
    return this.id%10+1;
  }

  getCol(): number{
    return Math.floor(this.id / 10);
  }
}
