import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeadderComponent } from './components/header.component';
import { BodyComponent } from './components/body.component';

import { FooterComponent } from './components/footer.components';

@NgModule({
  declarations: [
    HeadderComponent,
    AppComponent,
    BodyComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
