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
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { ArticleService } from 'src/services/article.service';
import { FormsModule } from '@angular/forms';
import { AlerteComponent } from './alerte/alerte.component';
import { PeremptionComponent } from './peremption/peremption.component';

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
    ContactComponent,
    AlerteComponent,
    PeremptionComponent
  ],
  imports: [
    MatIconModule,
    FormsModule,
    GoogleChartsModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AuthModule.forRoot(environment.auth0),
    BrowserAnimationsModule,
    ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
