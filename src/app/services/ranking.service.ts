import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { ranking } from '../classes/ranking';
import { RankingDto } from '../classes/rankingdto';
import { Fish } from '../classes/fish';

@Injectable({
  providedIn: 'root'
})
export class RankingService {

  private apiUrl = 'http://localhost:9000/api/rankings';

  constructor(private http: HttpClient) { }

  getRanking(): Observable<ranking[]> {
    return this.http.get<ranking[]>(this.apiUrl);
  }
  

  addRanking(ranking: RankingDto): Observable<ranking>
  {
    
    return this.http.post<ranking>(this.apiUrl, ranking);
  }
  getByCompetition(id:string){
    return this.http.get<ranking[]>(this.apiUrl+"/Competition/"+id);
  }
  getFish(){
    return this.http.get<Fish[]>('http://localhost:9000/api/fish')
  }
  calculateScore(id:string):Observable<ranking[]>{
     return this.http.put<ranking[]>(this.apiUrl+'/calculate/'+id,{});;
  }

  getPodiume(id:string):Observable<ranking[]>
  {
    return this.http.get<ranking[]>(this.apiUrl+'/podium/'+id);;
  }
}
