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
import { ConnexionService } from './connexion.service';


const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'accueil',
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
    component : ConnexionComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    CalculComponent,
    DefiComponent,
    ConnexionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [
    CalculService, ConnexionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
