import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import { AppComponent }  from './app.component';
import {DetailComponent} from './detail.component';


@NgModule({
  imports:      [ BrowserModule ,
                   RouterModule.forRoot([
                    
                     {path:'details',component:AppComponent},
                     {path:'details/:name/:designation/:companyName',component:DetailComponent},
                    
                   ])],
  declarations: [ AppComponent,DetailComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
