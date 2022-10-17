import { Component, Input, OnInit } from '@angular/core';
import { MatchModel } from 'src/models/match.models';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})
export class MatchComponent implements OnInit {
  @Input() match!:MatchModel;

  constructor() { }

  ngOnInit(): void {
  }

}
