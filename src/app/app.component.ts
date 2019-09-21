import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'enjeu-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    const firebaseConfig = {
    apiKey: "AIzaSyCQQ8z6sNICXhX_Pod1L0-YCYZVAeZstps",
    authDomain: "enjeu-8215e.firebaseapp.com",
    databaseURL: "https://enjeu-8215e.firebaseio.com",
    projectId: "enjeu-8215e",
    storageBucket: "",
    messagingSenderId: "933409621573",
    appId: "1:933409621573:web:7bbe1c281413291258852c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  }
}
