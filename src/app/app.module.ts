import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MinimalisticUiKitForAngularModule} from "../../projects/minimalistic-ui-kit-for-angular/src/lib/minimalistic-ui-kit-for-angular.module";
import { MainPageComponent } from './pages/main-page/main-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    LoginPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MinimalisticUiKitForAngularModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
