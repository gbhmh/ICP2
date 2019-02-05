import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WeatherService } from './weather.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app=routing.module';

@NgModule({
  declarations: [
    AppComponent,
  // WeatherService,
   // AppRoutingModule
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule
    // WeatherService
  ],
  providers:  [ WeatherService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
