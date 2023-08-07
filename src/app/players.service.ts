import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, Firestore, CollectionReference, DocumentData, query, orderBy, startAt, endAt, doc, getDoc, updateDoc, setDoc, where } from '@angular/fire/firestore';
import { Observable } from 'rxjs/internal/Observable';
import { filter } from 'rxjs/internal/operators/filter';
import { map } from 'rxjs/internal/operators/map';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import { tap } from 'rxjs/internal/operators/tap';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  ligaActual!:string;
  jugadorActual!:any;
  playerRef!:CollectionReference<DocumentData>
  leagueRef!:CollectionReference<DocumentData>
  constructor(private fireStore:Firestore) {
      this.playerRef = collection(this.fireStore, 'players');
      this.leagueRef = collection(this.fireStore, 'league');
  }

  queryPlayers(league:any){
    return query(this.playerRef,
            where("league","==", league)
    );
  }

  queryLeagues(){
    return query(this.leagueRef);
  }

  obtenerPlayers(league:any):Observable<any>{
    return collectionData(
      this.queryPlayers(league),
    );
  }

  // obtenerPlayersByAge():Observable<any>{
  //   return this.obtenerPlayers(this.ligaActual)
  //   .pipe(
  //     map(result => {
  //       return result.filter((x:any)=> x.age<20)
  //   })
  //   )
  // }

  obtenerLeagues():Observable<any>{
    return collectionData(
      this.queryLeagues(),
    );
  }
}
