import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleChartsModule } from 'angular-google-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatIconModule } from '@angular/material/icon'; // Import MatIconModule
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GestionProduitsComponent } from './gestion-produits/gestion-produits.component';
import { RapportsComponent } from './rapports/rapports.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FonctionnalitesComponent } from './fonctionnalites/fonctionnalites.component';
import { AuthModule } from '@auth0/auth0-angular';
import { ContactComponent } from './contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    
    HomeComponent,
    DashboardComponent,
    GestionProduitsComponent,
    RapportsComponent,
    HeaderComponent,
    FooterComponent,
    FonctionnalitesComponent,
    ContactComponent
  ],
  imports: [
    MatIconModule,
    GoogleChartsModule,
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
        domain: 'dev-cjxhb-x9.eu.auth0.com',
        clientId: 'IPh5p5GOcigu4AT9yVSfr20NwKa5Wp4B',
        authorizationParams: {
          redirect_uri: window.location.origin,
        },
      }),
    BrowserAnimationsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
