import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HuntingDto } from '../classes/huntingDto';
import { Hunting } from '../classes/hunting';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HuntingService {

  private apiUrl = 'http://localhost:9000/api/huntings';

  constructor(private http: HttpClient) { }

  addHunting(hunt: HuntingDto): Observable<Hunting>
  {
    return this.http.post<Hunting>(this.apiUrl, hunt);
  }
}
