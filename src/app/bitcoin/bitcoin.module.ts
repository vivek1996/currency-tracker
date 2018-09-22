import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BitcoinRoutingModule } from './bitcoin-routing.module';
import { CoinComponent } from './coin/coin.component';
import { ChartModule } from 'angular2-chartjs';
@NgModule({
  imports: [
    CommonModule,
    BitcoinRoutingModule,
    ChartModule
  ],
  declarations: [CoinComponent]
})
export class BitcoinModule { }
