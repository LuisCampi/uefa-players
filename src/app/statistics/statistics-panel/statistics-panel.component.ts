import { Component, OnInit } from '@angular/core';
import {ChartType} from "angular-google-charts"
import { PlayersService } from '../../players.service';

@Component({
  selector: 'app-statistics-panel',
  templateUrl: './statistics-panel.component.html',
  styleUrls: ['./statistics-panel.component.css']
})
export class StatisticsPanelComponent implements OnInit {

  title = "chart"
  type = ChartType
  myOptions = {
    title: 'Country Populations',
    legend: { position: 'right'},
    colors: ['green'],
  };
  chartColumns = [
    { type: 'string' },
    { type: 'number' },
  ];
  myData:any[]=[];

  jugadores:any;
  jugadoresPorEdad:any[]=[];
  jugadoresPorAltura:any[]=[];
  jugadoresPorNAcionalidad:any[]=[];
  jugadoresPorMaximoValor:any[]=[];
  jugadoresPorPrecioActual:any[]=[];
  jugadoresPorBirth:any[]=[];
  jugadoresPorPosition:any[]=[];


  constructor(private playerService : PlayersService) {
    const ligaActual = this.playerService.ligaActual || JSON.parse(localStorage.getItem("liga_actual")!);
    this.playerService.obtenerPlayers(ligaActual).subscribe((result:any)=>{
      this.jugadores = result
      this.getPlayersDataAge();
      this.getPlayersDataHeight();
      this.getPlayersDataNationality();
      this.getPlayersDataMaxPrice();
      this.getPlayersDataCurrentPrice();
      this.getPlayersDataPlaceOfBirth();
      this.getPlayersDataPosition();
    })
  }

  ngOnInit(): void {
  }

  getPlayersDataAge(){
    this.jugadores.forEach((element:any) => {
      this.jugadoresPorEdad.push([element.name, element.age]);
    });
  }

  getPlayersDataHeight(){
    this.jugadores.forEach((element:any) => {
      this.jugadoresPorAltura.push([element.name, element.height]);
    });
  }

  getPlayersDataNationality(){
    const tmep:any={};

    this.jugadores.forEach((element:any) => {
      if(!tmep[element.nationality]){
        tmep[element.nationality] = 1;
      }else{
        tmep[element.nationality] = tmep[element.nationality] + 1;
      }
    });
    this.jugadoresPorNAcionalidad = Object.entries(tmep);
  }

  getPlayersDataMaxPrice(){
    this.jugadores.forEach((element:any) => {
      this.jugadoresPorMaximoValor.push([element.name, element.max_price]);
    });
  }

  getPlayersDataCurrentPrice(){
    this.jugadores.forEach((element:any) => {
      this.jugadoresPorPrecioActual.push([element.name, element.price]);
    });
  }

  getPlayersDataPlaceOfBirth(){
    const tmep:any={};

    this.jugadores.forEach((element:any) => {
      if(!tmep[element.place_of_birth]){
        tmep[element.place_of_birth] = 1;
      }else{
        tmep[element.place_of_birth] = tmep[element.place_of_birth] + 1;
      }
    });
    this.jugadoresPorBirth = Object.entries(tmep);
  }

  getPlayersDataPosition(){
    const tmep:any={};

    this.jugadores.forEach((element:any) => {
      if(!tmep[element.position]){
        tmep[element.position] = 1;
      }else{
        tmep[element.position] = tmep[element.position] + 1;
      }
    });
    this.jugadoresPorPosition = Object.entries(tmep);
  }

}
