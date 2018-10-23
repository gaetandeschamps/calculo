import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { CalculService } from './calcul.service';
import { CalculComponent } from './calcul/calcul.component';
import { DefiComponent } from './defi/defi.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { ProfilComponent } from './profil/profil.component';



const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'connexion',
    pathMatch: 'full'
  },
  {
    path: 'accueil',
    component: AccueilComponent
  },
  {
    path: 'defi',
    component: DefiComponent
  },
  {
    path: 'connexion',
    component: ConnexionComponent
  },{
    path: 'profil',
    component: ProfilComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    CalculComponent,
    DefiComponent,
    ConnexionComponent,
    ProfilComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [
    CalculService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
