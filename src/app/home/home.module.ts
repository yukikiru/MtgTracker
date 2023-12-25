import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { PlayerFieldComponent } from '../player-field/player-field.component';
import { CardTileComponent } from '../Components/card-tile/card-tile.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, PlayerFieldComponent, CardTileComponent]
})
export class HomePageModule {}
