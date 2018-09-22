import { Injectable } from '@angular/core';
import { BitcoinModule } from './bitcoin/bitcoin.module';
@Injectable({
  providedIn: BitcoinModule
})
export class CoindeskapiService {
  constructor() {}
}
