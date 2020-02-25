import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EmployeeComponent } from './employee/employee.component';
import { TitlePipe } from "./title.pipe";
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PostComponent } from './post/post.component';

import {DataService} from './data.service';

import { from } from 'rxjs';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    TitlePipe,
    EmployeeListComponent,
    PostComponent
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
