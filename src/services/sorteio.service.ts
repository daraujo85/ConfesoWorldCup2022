import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MatchModel } from 'src/models/match.models';

@Injectable({
  providedIn: 'root'
})
export class SorteioService {
  pageToken?:string;
  subscribers: any[] = [];
  end:boolean = false


  constructor(private httpClient: HttpClient) { }

  getSubscribers(pageToken?:string): Observable<any> {
    
    let url:string = pageToken ? `https://www.googleapis.com/youtube/v3/commentThreads?key=AIzaSyCCQXvzlp81blkq9LCfKg1Fykcf5KZdOyQ&textFormat=plainText&part=snippet&videoId=BSuHeovbpuQ&maxResults=100&pageToken=${pageToken}` : 'https://www.googleapis.com/youtube/v3/commentThreads?key=AIzaSyCCQXvzlp81blkq9LCfKg1Fykcf5KZdOyQ&textFormat=plainText&part=snippet&videoId=BSuHeovbpuQ&maxResults=100'

    return this.httpClient.get<any>(url);
  }
}
