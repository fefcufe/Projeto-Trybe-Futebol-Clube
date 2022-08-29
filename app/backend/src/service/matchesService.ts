import { StatusCodes } from 'http-status-codes';
import Match from '../database/models/match';
import Team from '../database/models/team';
import INewMatch from '../Interfaces/addNewMatch';
// const teams = new TeamsService();

export default class MatchesService {
  public getAllMatches = async () => {
    const matches = await Match.findAll({
      include: [
        { model: Team,
          as: 'teamHome',
          attributes: ['teamName'],
        },
        {
          model: Team,
          as: 'teamAway',
          attributes: ['teamName'],
        },
      ],
    });

    return {
      code: StatusCodes.OK,
      message: matches,
    };
  };

  /*   corpo da requisicao: {
  "homeTeam": 16, // O valor deve ser o id do time
  "awayTeam": 8, // O valor deve ser o id do time
  "homeTeamGoals": 2,
  "awayTeamGoals": 2
} */

  /* resposta em caso de sucesso:
{
  "id": 1,
  "homeTeam": 16,
  "homeTeamGoals": 2,
  "awayTeam": 8,
  "awayTeamGoals": 2,
  "inProgress": true,
} */
  public addMatch = async (body: INewMatch) => {
    const newMatch = await Match.create({ ...body, inProgress: true });
    return {
      code: StatusCodes.CREATED,
      message: newMatch,
    };
  };
}

/*     const matchesWithTeamNames = Promise.all(matches.map(async (team) => {
      const teamHomeName = await teams.getTeamById(team.homeTeam);
      const teamAwayName = await teams.getTeamById(team.awayTeam);
      return {
        ...team,
        teamHome: { teamName: teamHomeName.message?.teamName },
        teamAway: { teamName: teamAwayName.message?.teamName },
      };
    })); */
