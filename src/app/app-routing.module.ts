import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FonctionnalitesComponent } from './fonctionnalites/fonctionnalites.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactComponent } from './contact/contact.component';
import { GestionProduitsComponent } from './gestion-produits/gestion-produits.component';
import { PeremptionComponent } from './peremption/peremption.component';
import { AlerteComponent } from './alerte/alerte.component';
const routes: Routes = [
  {path:'',
    component:HomeComponent
  },
  {path:'alerte',
    component:AlerteComponent
  },
  {path:'peremption',
    component:PeremptionComponent
  },
  {path:'gestion',
    component:GestionProduitsComponent
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
