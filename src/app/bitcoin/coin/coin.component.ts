import { Component, OnInit } from '@angular/core';
import { CoindeskService } from '../coindesk.service';

@Component({
  selector: 'app-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.scss']
})
export class CoinComponent implements OnInit {
  constructor(private _http: CoindeskService) {}

  ngOnInit() {}
}
