import { Component } from '@angular/core';
import * as firebase from 'firebase';
import * as api from './api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculo';

  constructor() {
    firebase.initializeApp(api.config);
  }
}

