import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './CustomerApp.HomeComponent';
import { MasterPageComponent } from './CustomerApp.MasterPageComponent';
import { RouterModule } from '@angular/router';
import { MainRoutes } from '../Routing/CustomerApp.MainRouting';
import {
  DbLogger,
  BaseLogger,
  ConsoleLogger
} from '../Utility/CustomerApp.Logger';

var providerscoll: any = [];
// http call get this from the server
providerscoll.push({ provide: '1', useClass: DbLogger });
providerscoll.push({ provide: '2', useClass: ConsoleLogger });
providerscoll.push({ provide: BaseLogger, useClass: ConsoleLogger });
@NgModule({
  declarations: [HomeComponent, MasterPageComponent],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(MainRoutes)],
  providers: [providerscoll],
  bootstrap: [MasterPageComponent]
})
export class MainModule {}
