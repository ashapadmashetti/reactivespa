import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

import { AppComponent }  from './app.component';

import { Routes, RouterModule } from '@angular/router';
import {LocationStrategy, HashLocationStrategy} 
               from '@angular/common';

import {routing} from './app.routing';


import {LoginComponent} from 
       "./components/login.component"

import {ContactListComponent} from 
        './components/contactlist.component';
import {NewContactComponent} from 
       './components/newcontact.component';
import {ShowComponent} from
      './components/show.component';

import {ServiceComponent} from './components/service.component'

@NgModule({
  imports:      [ BrowserModule,FormsModule, routing ],
  declarations: [ 	AppComponent,
                    LoginComponent,
                    ServiceComponent,
  					        ContactListComponent,
  					        NewContactComponent,
  					        ShowComponent],
  providers:[
  {provide: LocationStrategy, useClass: HashLocationStrategy}],    
  bootstrap:    [ AppComponent]
})
export class AppModule { }
