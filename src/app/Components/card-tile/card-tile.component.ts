import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/Models/card';

@Component({
  selector: 'app-card-tile',
  templateUrl: './card-tile.component.html',
  styleUrls: ['./card-tile.component.scss'],
})
export class CardTileComponent  implements OnInit {
  @Input() card!: Card;

  constructor() { }

  ngOnInit() {

  }

  calculatePower(): number{
    return this.card.modifiedPower + (this.card.plusOnePlusOneCounters + this.card.plusOneZeroCounters) - (this.card.minusOneMinusOneCounters + this.card.minusOneZeroCounters);
  }

  calculateToughness(): number{
    return this.card.modifiedToughness + (this.card.plusOnePlusOneCounters + this.card.plusZeroOneCounters) - (this.card.minusOneMinusOneCounters + this.card.minusZeroOneCounters);
  }

  test(btn: string){
    alert(btn);
  }

}
