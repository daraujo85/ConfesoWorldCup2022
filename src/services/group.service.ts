import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GroupModel } from 'src/models/group.models';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private httpClient: HttpClient) { }

  getGroups(): Observable<GroupModel[]> {
    return this.httpClient.get<GroupModel[]>(environment.groups);
  }
}
