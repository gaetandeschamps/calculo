import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  utilisateur: String = 'thomas';
  pokemon: String = 'pikachu';
  show = true;

  constructor() { }

  ngOnInit() {
  }

  showPokemon() {
    this.show = !this.show;
  }

}
