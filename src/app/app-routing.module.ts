import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FonctionnalitesComponent } from './fonctionnalites/fonctionnalites.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactComponent } from './contact/contact.component';
const routes: Routes = [
  {path:'',
    component:HomeComponent
  },
  {
    path:'features',
    component:FonctionnalitesComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'contact',
    component:ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
