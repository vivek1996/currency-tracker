import { Injectable } from '@angular/core';
import { BitcoinModule } from './bitcoin.module';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: BitcoinModule
})
export class CoindeskService {
  constructor(private http: HttpClient) {}
}
