import { StatusCodes } from 'http-status-codes';
import Team from '../database/models/team';
import ITeam from '../Interfaces/team';

export default class TeamsService {
  public getAllTeams = async () => {
    const teams: ITeam[] = await Team.findAll();
    return {
      code: StatusCodes.OK,
      message: teams,
    };
  };
}
