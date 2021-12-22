import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';

import { OfficesComponent } from './offices/offices.component';
import { OfficeDetailsComponent } from './offices/office-details/office-details.component';
import { OfficeListComponent } from './offices/office-list/office-list.component';
import { OfficeItemComponent } from './offices/office-list/office-item/office-item.component';

@NgModule({
  declarations: [
    AppComponent,
    OfficesComponent,
    OfficeDetailsComponent,
    OfficeListComponent,
    OfficeItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
