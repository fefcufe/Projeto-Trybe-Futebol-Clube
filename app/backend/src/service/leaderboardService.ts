// import { IHomeTeamMatch, ILeaderboard } from '../Interfaces/leaderboards';
// import Team from '../database/models/team';
// import Match from '../database/models/match';
import { StatusCodes } from 'http-status-codes';
import queries from '../utils/queries';
import models from '../database/models';

export default class LeaderboardService {
  public getHomeLeaderboard = async () => {
    const [homeLeaderboard] = await models.query(queries.homeTeamLeaderboard);
    return {
      code: StatusCodes.OK,
      message: homeLeaderboard,
    };
  };
  /* public homeTeamMatches = async (id: number) => {
    const homeMatches = await Match.findAll({ where: { homeTeam: id, inProgress: false } });

    return homeMatches;
  };
  // array com todas as partidas jogadas em casa de um time;

  public leaderboardGenerate = async (hMatches: IHomeTeamMatch[]) : Promise<ILeaderboard> => {
    const totalVictories = hMatches.filter((m) => m.homeTeamGoals > m.awayTeamGoals).length;
    const totalDraws = hMatches.filter((m) => m.homeTeamGoals === m.awayTeamGoals).length;
    const totalPoints = (totalVictories * 3) + totalDraws;
    const totalGames = hMatches.length;
    const totalLosses = hMatches.filter((m) => m.homeTeamGoals < m.awayTeamGoals).length;
    const goalsFavor = hMatches.reduce((acc, curr) => acc + curr.homeTeamGoals, 0);
    const goalsOwn = hMatches.reduce((acc, curr) => acc + curr.awayTeamGoals, 0);
    const goalsBalance = goalsFavor - goalsOwn;
    const efficiency = ((totalPoints / (totalGames * 3)) * 100).toFixed(2);
    return { totalPoints,
      totalGames,
      totalVictories,
      totalDraws,
      totalLosses,
      goalsFavor,
      goalsOwn,
      goalsBalance,
      efficiency };
  };
  // monta o placar de UM time sem o nome

  public sortLeaderboards = (leaderboard: ILeaderboard[]): ILeaderboard[] => {
    const sortedLeaderboards = leaderboard.sort((a, b) => b.totalPoints - a.totalPoints
    || b.totalVictories - a.totalVictories || b.goalsBalance - a.goalsBalance
    || b.goalsFavor - a.goalsFavor || b.goalsOwn - a.goalsOwn);

    return sortedLeaderboards;
  };
  // ordena array com placar de cada time

  public allTeamsLeaderboard = async (): Promise<ILeaderboard[]> => {
    const allTeams = await Team.findAll();
    const arrayOfLeaderboards = await Promise.all(allTeams.map(async (team) => {
      const teamMatches = await this.homeTeamMatches(team.id);
      const teamLeaderboard = this.leaderboardGenerate(teamMatches);
      return {
        name: team.teamName,
        ...teamLeaderboard,
      };
    }));

    return arrayOfLeaderboards;
  }; */
  // retorna array com placar de cada time desordenado
}
