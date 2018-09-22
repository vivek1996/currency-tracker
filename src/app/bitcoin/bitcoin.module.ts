import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BitcoinRoutingModule } from './bitcoin-routing.module';
import { CoinComponent } from './coin/coin.component';

@NgModule({
  imports: [
    CommonModule,
    BitcoinRoutingModule
  ],
  declarations: [CoinComponent]
})
export class BitcoinModule { }
