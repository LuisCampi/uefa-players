import { Component, OnInit, Input } from '@angular/core';
import { ChartType } from 'angular-google-charts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

 

  @Input() title = "chart"
  @Input() type=ChartType.PieChart;
  myOptions:any; 
  

  @Input() myData:any[]=[];


  constructor() {
    
  }

  ngOnInit(): void {
    const color_arr:any = [];
    this.myData.forEach(element=>{
      var randomColor = this.getRandomColor();
      color_arr.push(randomColor);
    })
    this.myOptions = {
      title: this.title,
      legend: { position: 'right'},
      colors: color_arr,
    };
    console.log(this.myData,this.title);
  }
  
  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

}
