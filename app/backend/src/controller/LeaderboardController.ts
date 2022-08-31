import { Request, Response } from 'express';
import LeaderboardService from '../service/leaderboardService';

export default class LeaderboardController {
  constructor(private leaderboardController = new LeaderboardService()) {}

  public getHomeLeaderboard = async (_req: Request, res: Response) => {
    const { code, message } = await this.leaderboardController.getHomeLeaderboard();
    return res.status(code).json(message);
  };
}
