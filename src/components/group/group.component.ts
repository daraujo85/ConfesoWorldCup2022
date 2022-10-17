import { Component, Input, OnInit } from '@angular/core';
import { GroupModel } from 'src/models/group.models';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {
  @Input() group!: GroupModel;
  constructor() { }

  ngOnInit(): void {
  }

}
