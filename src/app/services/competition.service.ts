import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Competition } from '../classes/competition';

const httpOptions = {
  headers : new HttpHeaders({
    'content-type': 'application/json'
  }) 
}

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {

  private apiUrl = 'http://localhost:9000/api/competitions';

  constructor(private http: HttpClient) { }

  getCompetition(pageNumber: number, pageSize: number): Observable<Competition[]> {
    let params = new HttpParams()
    .set('page', pageNumber.toString())
    .set('size', pageSize.toString());
    return this.http.get<Competition[]>(this.apiUrl,{ params });
  }
  getCompetitionBeforToday(): Observable<Competition[]> {
    return this.http.get<Competition[]>(this.apiUrl+"/before");
  }

  addCompetition(competition: Competition): Observable<Competition>
  {
    console.log(competition);
    return this.http.post<Competition>(this.apiUrl, competition, httpOptions);
  }
  findCompetitionById(id:string): Observable<Competition> {
    return this.http.get<Competition>(this.apiUrl+'/'+id);
  }
}
