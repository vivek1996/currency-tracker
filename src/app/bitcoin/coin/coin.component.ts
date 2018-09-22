import { Component, OnInit } from '@angular/core';
import { CoindeskapiService } from '../../coindeskapi.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.scss']
})
export class CoinComponent implements OnInit {
  coinFullData;
  constructor(private _http: CoindeskapiService) {}
  type = 'line';
  options = {
    responsive: true,
    maintainAspectRatio: false,
    tooltips: {
      enabled: true,
      intersect: false,
      mode: 'label'
    },
    layout: {
      padding: {
        left: 5,
        right: 5,
        top: 0,
        bottom: 0
      }
    },
    hover: {
      animationDuration: 500,
      mode: 'index',
      intersect: true
    },
    scales: {
      xAxes: [
        {
          display: true,
          type: 'time',
          gridLines: {
            display: false,
            drawBorder: false
          },
          ticks: {
            maxRotation: 0,
            minRotation: 0,
            autoSkip: true
          }
        }
      ],
      yAxes: [
        {
          display: true,
          type: 'linear',
          gridLines: {
            display: true,
            drawBorder: false
          },
          ticks: {
            beginAtZero: true
          }
        }
      ]
    },
    elements: {
      point: {
        radius: 0,
        hitRadius: 2,
        pointStyle: 'cross'
      }
    }
  };
  data;
  pipe = new DatePipe('en-IN');
  ngOnInit() {
    this._http.getPrice('INR', '2017-09-21', '2018-09-21').subscribe(
      data => {
        console.log(data);
        this.coinFullData = data;
        this.formatData(this.coinFullData.bpi);
      },
      error => {
        console.log(error);
      }
    );
  }
  formatData(data) {
    const keys = Object.keys(data);
    const timeStamp = keys.map(key => {
      return this.pipe.transform(key, 'mediumDate');
    });
    const values = Object.values(data);
    const price = values.map(value => Math.round(Number(value) * 10) / 10);
    this.data = {
      labels: timeStamp,
      datasets: [
        {
          label: 'Price',
          data: price,
          borderColor: '#3a97ff',
          pointHoverRadius: 0,
          tension: 0,
          spanGaps: true,
          borderWidth: 1,
          borderJoinStyle: 'miter',
          fill: false
        }
      ]
    };
  }
}
