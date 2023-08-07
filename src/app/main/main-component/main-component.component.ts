import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../../players.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {

  ligas:any;
  players:any = [];

  constructor(private playersService:PlayersService, private router: Router) {
    this.playersService.obtenerLeagues().subscribe(result=>{
      this.ligas = result;
    })
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }



  mostrarJUgadores(liga:any){
    localStorage.setItem("liga_actual", JSON.stringify(liga));
    this.playersService.ligaActual = liga;
    this.router.navigate(['/player-panel',liga])
  }

}
