import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GroupModel } from 'src/models/group.models';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private httpClient: HttpClient) { }

  getGroups(): Observable<GroupModel[]> {
    return this.httpClient.get<GroupModel[]>('http://localhost:3000/groups');
  }
}
