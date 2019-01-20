import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './home-page/navbar/contact/contact.component';
import { LoginComponent } from './home-page/navbar/login/login.component';
import { PartnersComponent } from './home-page/navbar/partners/partners.component';
import { Page1Component } from './page1/page1.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'homePage', component:HomePageComponent},
  { path: 'partners', component: PartnersComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'login', component: LoginComponent},
  { path: 'page1', component: Page1Component },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports : [RouterModule]
  
})
export class AppRoutingModule { }
