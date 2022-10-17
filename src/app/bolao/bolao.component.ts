import { Component, Input, OnInit } from '@angular/core';
import { MatchModel } from 'src/models/match.models';
import { MatchService } from 'src/services/match.service';

@Component({
  selector: 'app-bolao',
  templateUrl: './bolao.component.html',
  styleUrls: ['./bolao.component.scss']
})
export class BolaoComponent implements OnInit {
  @Input() matchesGroupA: MatchModel[] = [];
  @Input() matchesGroupB: MatchModel[] = [];

  constructor(private matchService: MatchService) { }

  ngOnInit(): void {

    this.matchService.getGroups().subscribe(data => {
      this.matchesGroupA = data.filter(x => x.group == "Grupo A")
      this.matchesGroupB = data.filter(x => x.group == "Grupo B")
    })


    // this.matchesGroupA.push({
    //   teamOne: 'Catar',
    //   group: 'Grupo A',
    //   eventDateTime: new Date("2022-11-20 13:00"),
    //   flagTeamOne: 'catar.png',
    //   scoreTeamOne: 0,
    //   teamTwo: 'Equador',
    //   flagTeamTwo: 'equador.png',
    //   scoreTeamTwo: 0
    // })

    // this.matchesGroupA.push({
    //   teamOne: 'Senegal',
    //   group: 'Grupo A',
    //   eventDateTime: new Date("2022-11-21 13:00"),
    //   flagTeamOne: 'senegal.png',
    //   scoreTeamOne: 0,
    //   teamTwo: 'Holanda',
    //   flagTeamTwo: 'holanda.png',
    //   scoreTeamTwo: 2
    // })

    // this.matchesGroupA.push({
    //   teamOne: 'Catar',
    //   group: 'Grupo A',
    //   eventDateTime: new Date("2022-11-25 10:00"),
    //   flagTeamOne: 'catar.png',
    //   scoreTeamOne: 0,
    //   teamTwo: 'Senegal',
    //   flagTeamTwo: 'senegal.png',
    //   scoreTeamTwo: 0
    // })

    // this.matchesGroupA.push({
    //   teamOne: 'Holanda',
    //   group: 'Grupo A',
    //   eventDateTime: new Date("2022-11-25 13:00"),
    //   flagTeamOne: 'holanda.png',
    //   scoreTeamOne: 0,
    //   teamTwo: 'Equador',
    //   flagTeamTwo: 'equador.png',
    //   scoreTeamTwo: 0
    // })
  }

}
