import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailRoutingModule } from './detail-routing.module';
import { CoinDetailComponent } from './coin-detail/coin-detail.component';

@NgModule({
  imports: [
    CommonModule,
    DetailRoutingModule
  ],
  declarations: [CoinDetailComponent]
})
export class DetailModule { }
