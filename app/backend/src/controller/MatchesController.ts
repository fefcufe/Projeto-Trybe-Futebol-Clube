import { Request, Response } from 'express';
import MatchesService from '../service/matchesService';

export default class MatchesController {
  constructor(private matchesController = new MatchesService()) {}

  public getAllController = async (req: Request, res: Response) => {
    const { code, message } = await this.matchesController.getAllMatches();
    return res.status(code).json(message);
  };

  public addMatchController = async (req: Request, res: Response) => {
    const { code, message } = await this.matchesController.addMatch(req.body);
    return res.status(code).json(message);
  };
}
