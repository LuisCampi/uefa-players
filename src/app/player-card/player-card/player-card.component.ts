import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PlayersService } from '../../players.service';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.css']
})
export class PlayerCardComponent implements OnInit {

  jugador:any;
  keys:any;
  constructor(private playersService:PlayersService) { 
    this.jugador = this.playersService.jugadorActual || JSON.parse(localStorage.getItem("actual_player")!);
    this.keys = Object.entries(this.jugador);
  }

  ngOnInit(): void {
  }

}
