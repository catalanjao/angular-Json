import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { BrowsefileComponent } from './browsefile/browsefile.component'
@NgModule({
  declarations: [
    AppComponent,
    BrowsefileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
