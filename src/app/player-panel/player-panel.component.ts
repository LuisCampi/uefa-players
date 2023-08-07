import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../players.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './player-panel.component.html',
  styleUrls: ['./player-panel.component.css']
})
export class PlayerPanelComponent implements OnInit {
//   title = 'uefa_players';

  liga_Actual:any;
  players:any = [];

  constructor(private playersService:PlayersService, private router:Router) {
    
  }
  ngOnInit(): void {
    this.liga_Actual = this.playersService.ligaActual || JSON.parse(localStorage.getItem("liga_actual")!);
    this.playersService.obtenerPlayers(this.liga_Actual).subscribe(result=>{
        this.players = result;
    })
  }

  mostrarPlayer(player:any){
        localStorage.setItem("actual_player", JSON.stringify(player));
        this.playersService.jugadorActual = player;
        this.router.navigate(['player-card']);
  }
}
