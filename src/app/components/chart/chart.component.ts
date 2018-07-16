import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  @Input('dataCtrl') dataCtrl: any;

  chart = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: `` 
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Issues',
        data: [3, 2, 7]
      }
    ]
  });
 

  constructor() { }

  ngOnInit() {
  }

}
