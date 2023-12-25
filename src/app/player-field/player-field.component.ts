import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core';
import { Card } from '../Models/card';

@Component({
  selector: 'app-player-field',
  templateUrl: './player-field.component.html',
  styleUrls: ['./player-field.component.scss'],
})
export class PlayerFieldComponent  implements OnInit {
  @Input() player: string | undefined;
  @ViewChild(IonModal) modal!: IonModal;
  @Input() playerName: string = "Player";
  cards: Array<Card>;

  constructor() {
    this.cards = new Array<Card>();
   }

  ngOnInit() {
    if(this.player === undefined)
      this.player = "PlayerX";
    this.cards.push(new Card("Test 1",1,1));
    this.cards.push(new Card("Test 2",2,3));
  }

  test(){
    alert(`Hello ${this.player}. Make a change so when the player taps on the card thats when it asks for counters to be added/removed when doing it manually.`);
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.playerName, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      alert("changes!")
    }
  }

  addCard(): void{
    this.test();
  }

}
