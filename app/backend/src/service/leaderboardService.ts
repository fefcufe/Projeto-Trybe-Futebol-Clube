// import { IHomeTeamMatch, ILeaderboard } from '../Interfaces/leaderboards';
// import Team from '../database/models/team';
// import Match from '../database/models/match';
import { StatusCodes } from 'http-status-codes';
import queries from '../utils/queries';
import models from '../database/models';
import { ILeaderboard } from '../Interfaces/leaderboards';

export default class LeaderboardService {
  public getHomeLeaderboard = async () => {
    const [homeLeaderboard] = await models.query(queries.homeTeamLeaderboard);
    return {
      code: StatusCodes.OK,
      message: homeLeaderboard,
    };
  };

  public getAwayLeaderboard = async () => {
    const [awayLeaderboard] = await models.query(queries.awayTeamLeaderboard);
    return {
      code: StatusCodes.OK,
      message: awayLeaderboard,
    };
  };

  public sumLeadeboards = async (h: ILeaderboard, a: ILeaderboard) => {
    const totalPoints = +(h.totalPoints + a.totalPoints);
    const totalGames = +(h.totalGames + a.totalGames);
    return {
      name: h.name,
      totalPoints,
      totalGames,
      totalVictories: +(h.totalVictories + a.totalVictories),
      totalDraws: +(h.totalDraws + a.totalDraws),
      totalLosses: +(h.totalLosses + a.totalLosses),
      goalsFavor: +(h.goalsFavor + a.goalsFavor),
      goalsOwn: +(h.goalsOwn + a.goalsOwn),
      goalsBalance: +(h.goalsBalance + a.goalsBalance),
      efficiency: +((totalPoints / (totalGames * 3)) * 100).toFixed(2),
    };
  };

  /*   public getGeneralLeaderboard = async () => {
    const [h] = await models.query(queries.homeTeamLeaderboard);
    const [a] = await models.query(queries.awayTeamLeaderboard);
    const resultLeaderaboard = h.map((hTeam: unknown) => {
      const aTeam = a.find((awayTeam: unknown) => awayTeam.name === hTeam.name) as unknown;
      return this.sumLeadeboards(hTeam, aTeam);
    });
    return resultLeaderaboard;
  }; */
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
