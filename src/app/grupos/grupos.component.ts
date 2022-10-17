import { Component, OnInit } from '@angular/core';
import { GroupModel } from 'src/models/group.models';
import { GroupService } from 'src/services/group.service';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.scss']
})
export class GruposComponent implements OnInit {
  groups!:GroupModel[];
  constructor(private groupService:GroupService) { }

  ngOnInit(): void {
    this.groupService.getGroups().subscribe(data=> {
      this.groups = data
    })
  }

}
