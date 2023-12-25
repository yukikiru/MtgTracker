import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  player1Name: string = "Player 1";
  player2Name: string = "Player 2";

  constructor() {}

}
