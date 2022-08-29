import { StatusCodes } from 'http-status-codes';
import Match from '../database/models/match';
// import TeamsService from './teamsService';
import Team from '../database/models/team';
// import IMatches from '../Interfaces/match';
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
