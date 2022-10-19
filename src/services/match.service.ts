import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MatchModel } from 'src/models/match.models';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  constructor(private httpClient: HttpClient) { }

  getMatches(): Observable<MatchModel[]> {
    return this.httpClient.get<MatchModel[]>(environment.matches);
  }
}
