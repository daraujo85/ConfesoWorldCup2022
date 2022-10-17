import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MatchModel } from 'src/models/match.models';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  constructor(private httpClient: HttpClient) { }

  getGroups(): Observable<MatchModel[]> {
    //return this.httpClient.get<MatchModel[]>('http://localhost:3000/matches');
    return this.httpClient.get<MatchModel[]>('assets/data/matches.json');
  }
}
