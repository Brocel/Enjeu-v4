import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'enjeu-home-auth-card',
  templateUrl: './home-auth-card.component.html',
  styleUrls: ['./home-auth-card.component.scss']
})
export class HomeAuthCardComponent implements OnInit {

  @Input() title: string;
  @Input() icon: string;
  @Input() description: string;
  @Input() action: string;

  constructor() { }

  ngOnInit() {
  }

}
