import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Member } from '../classes/member.';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  private apiUrl = 'http://localhost:9000/api/members';

  constructor(private http: HttpClient) { }

  getMembers(): Observable<Member[]> {
    return this.http.get<Member[]>(this.apiUrl);
  }
  

  // addCompetition(ranking: RankingDto): Observable<ranking> {

  //   return this.http.post<ranking>(this.apiUrl, ranking);
  // }
}
