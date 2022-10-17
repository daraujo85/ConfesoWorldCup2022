import {TeamModel} from 'src/models/team.model'

export interface GroupModel {
    name: string;
    teams: TeamModel[];
}