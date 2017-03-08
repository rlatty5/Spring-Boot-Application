import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';


import './rxjs-extensions';
import { AppComponent } from './app.component';
import { AppRoutingModule, routedComponents } from './app-routing.module';

import {CSSCarouselComponent} from "../carousel.component/carousel.component";
import {StudentList} from "../student-list.component/student-list.component";
import {BackendService} from "../../services/BackendService";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    JsonpModule,
    HttpModule
    ],
  declarations: [
    AppComponent,
    routedComponents,
    CSSCarouselComponent,
    StudentList
  ],
  providers: [
     BackendService,
    routedComponents
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
