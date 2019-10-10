import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BlueComponent } from './blue/blue.component';
import { GreenComponent } from './green/green.component';
import { RedComponent } from './red/red.component';
import { NavComponent } from './nav/nav.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot([
    { path: 'blue',   component: BlueComponent },
    { path: 'green',  component: GreenComponent },
    { path: 'red',    component: RedComponent },
    { path: '',       redirectTo: 'blue', pathMatch: 'full'},
    { path: '**',     component: ErrorComponent }
  ]) ],
  declarations: [ AppComponent, BlueComponent, GreenComponent, RedComponent, NavComponent, ErrorComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
