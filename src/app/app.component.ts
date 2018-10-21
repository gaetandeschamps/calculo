import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculo';

  constructor()
  {
    var config = {
      apiKey: "AIzaSyAnVF8kdH3YbDCCGuvTlGnlf1l2cXGzIBw",
      authDomain: "calculo-2e33f.firebaseapp.com",
      databaseURL: "https://calculo-2e33f.firebaseio.com",
      projectId: "calculo-2e33f",
      storageBucket: "calculo-2e33f.appspot.com",
      messagingSenderId: "987008510425"
    };
    firebase.initializeApp(config);
  
  }
}

