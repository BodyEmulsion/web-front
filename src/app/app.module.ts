import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MinimalisticUiKitForAngularModule} from "../../projects/minimalistic-ui-kit-for-angular/src/lib/minimalistic-ui-kit-for-angular.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MinimalisticUiKitForAngularModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
