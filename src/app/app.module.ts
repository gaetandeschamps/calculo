import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { CalculService } from './calcul.service';
import { CalculComponent } from './calcul/calcul.component';
import { DefiComponent } from './defi/defi.component';

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
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    CalculComponent,
    DefiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    CalculService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
