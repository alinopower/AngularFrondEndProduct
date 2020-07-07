import { Component, OnInit } from '@angular/core';
import { ChartProduitService } from 'src/services/chart-produit.service';
import {Chart} from 'chart.js';
import { Produit } from '../shared/produit';
import { DataChartModel } from 'src/Models/data-chart-model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  produit: Produit;
  datachartmodel: DataChartModel[];
  chart=[];
  ref=[];
  Quant=[];

constructor(private chartproduit: ChartProduitService) { }

  ngOnInit(): void 
  {

     this.chartproduit.getWeather()
     .subscribe((res: DataChartModel[]) => 
    {
      
      res.forEach(y => {
        this.ref.push(y.ref);
        this.Quant.push(y.quant);
      });
      var ctx = document.getElementById('myChart');
      this.chart = new Chart('ctx', 
      {
        type: 'line',
        data: 
        {
          labels: this.ref,
          datasets: [
            {
              //labels: this.Quant,
              data: this.Quant,
              borderColor: '#3cba9f',
              fill: false
            }
          ]



        },
        options: {
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              display: true
            }],
            yAxes: [{
              display: true
            }],
          }
        }
      });
    });
  }
}