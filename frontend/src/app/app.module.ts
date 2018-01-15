import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WebDetailComponent } from './web-detail/web-detail.component';
import { DataService } from './shared/data.service';

@NgModule({
  declarations: [
    AppComponent,
    WebDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
