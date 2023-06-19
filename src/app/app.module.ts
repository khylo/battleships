import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GridComponent } from './grid/grid.component';
import { BoardComponent } from './board/board.component';
import { ShipComponent } from './ship/ship.component';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    BoardComponent,
    ShipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
