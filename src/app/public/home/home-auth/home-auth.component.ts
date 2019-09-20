import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'enjeu-home-auth',
  templateUrl: './home-auth.component.html',
  styles: []
})
export class HomeAuthComponent implements OnInit {
  features;

  constructor() { }
  ngOnInit() {
    this.features = [
      {
        action: 'Se connecter',
        title: 'Rejoindre la Table de Jeu',
        signForm: 'signInForm',
        invalid:'signInForm.invalid'
      },
      {
        action: 'Créer un compte',
        title: "Enregistrement d'un nouveau Joueur",
        signForm: 'signUpForm',
        invalid:'signUpForm.invalid'
      }
    ];
  }
}
