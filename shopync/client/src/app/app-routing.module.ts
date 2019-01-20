import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './home-page/navbar/contact/contact.component';
import { LoginComponent } from './home-page/navbar/login/login.component';
import { PartnersComponent } from './home-page/navbar/partners/partners.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch : 'full'},
  { path: 'partners', component: PartnersComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'login', component: LoginComponent},
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
