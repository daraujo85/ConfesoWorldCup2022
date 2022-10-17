import { Component, OnInit } from '@angular/core';
import { GroupModel } from 'src/models/group.models';
import { GroupService } from 'src/services/group.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'World Cup 2022';
  groups!:GroupModel[];

  constructor(private groupService:GroupService) {
    
  }
  ngOnInit(): void {
    this.groupService.getGroups().subscribe(data=> {
      this.groups = data
    })
  }

}
