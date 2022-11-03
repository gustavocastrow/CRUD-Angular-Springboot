import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  exports: [
    MatCardModule,
    MatToolbarModule,
    BrowserModule

  ],

})
export class AppMaterialModule { }
