import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AService } from './a.service';
import { CService } from './c.service';
import { DService } from './d.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    AService,
    CService,
    DService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
