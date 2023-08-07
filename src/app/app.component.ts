import { Component } from '@angular/core';
import { PlayersService } from './players.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'uefa_players';

  ligas:any;
  players:any = [];

  constructor(private playersService:PlayersService, private router: Router) {
    this.playersService.obtenerLeagues().subscribe(result=>{
      this.ligas = result;
    })
  }



  mostrarJUgadores(liga:any){
    this.playersService.ligaActual = liga;
    this.router.navigate(['/player-panel',liga])
  }
}
