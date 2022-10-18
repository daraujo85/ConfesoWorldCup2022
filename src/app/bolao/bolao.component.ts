import { Component, Input, OnInit } from '@angular/core';
import { MatchModel } from 'src/models/match.models';
import { MatchService } from 'src/services/match.service';

@Component({
  selector: 'app-bolao',
  templateUrl: './bolao.component.html',
  styleUrls: ['./bolao.component.scss']
})
export class BolaoComponent implements OnInit {
  matches:MatchModel[][] = [];
  @Input() matchesGroupA: MatchModel[] = [];
  @Input() matchesGroupB: MatchModel[] = [];
  @Input() matchesGroupC: MatchModel[] = [];
  @Input() matchesGroupD: MatchModel[] = [];
  @Input() matchesGroupE: MatchModel[] = [];
  @Input() matchesGroupF: MatchModel[] = [];
  @Input() matchesGroupG: MatchModel[] = [];
  @Input() matchesGroupH: MatchModel[] = [];

  constructor(private matchService: MatchService) { }

  ngOnInit(): void {

    this.matchService.getGroups().subscribe(data => {

      this.matchesGroupA = data.filter(x => x.group == "Grupo A")
      this.matchesGroupB = data.filter(x => x.group == "Grupo B")
      this.matchesGroupC = data.filter(x => x.group == "Grupo C")
      this.matchesGroupD = data.filter(x => x.group == "Grupo D")
      this.matchesGroupE = data.filter(x => x.group == "Grupo E")
      this.matchesGroupF = data.filter(x => x.group == "Grupo F")
      this.matchesGroupG = data.filter(x => x.group == "Grupo G")
      this.matchesGroupH = data.filter(x => x.group == "Grupo H")

      this.matches.push(this.matchesGroupA)
      this.matches.push(this.matchesGroupB)
      this.matches.push(this.matchesGroupC)
      this.matches.push(this.matchesGroupD)
      this.matches.push(this.matchesGroupE)
      this.matches.push(this.matchesGroupF)
      this.matches.push(this.matchesGroupG)
      this.matches.push(this.matchesGroupH)

      console.log(this.matches)
    })
  }

}
