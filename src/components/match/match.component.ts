import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatchModel } from 'src/models/match.models';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})
export class MatchComponent implements OnInit {
  @Input() match!: MatchModel;
  formBet!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createForm(this.match)
  }
  createForm(match: MatchModel) {
    this.formBet = this.formBuilder.group({
      scoreTeamOne: [match.scoreTeamOne],
      scoreTeamTwo: [match.scoreTeamTwo]
    })
  }

  save() {

    this.match.scoreTeamOne = this.formBet.controls['scoreTeamOne'].value;
    this.match.scoreTeamTwo = this.formBet.controls['scoreTeamTwo'].value;

    alert('Salvo com sucesso!')
    
  }

}
