import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { HomePageComponent } from './home-page/home-page.component';
import { LogoComponent } from './home-page/navbar/logo/logo.component';
import { ContactComponent } from './home-page/navbar/contact/contact.component';
import { LoginComponent } from './home-page/navbar/login/login.component';
import { PartnersComponent } from './home-page/navbar/partners/partners.component';
import { NavbarComponent } from './home-page/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { WelcomeComponent } from './home-page/welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LogoComponent,
    ContactComponent,
    LoginComponent,
    PartnersComponent,
    NavbarComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
