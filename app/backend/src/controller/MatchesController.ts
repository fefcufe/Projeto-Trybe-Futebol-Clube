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
    if (code === 201) {
      return res.status(code).json(message);
    }
    return res.status(code).json({ message });
  };

  public updateMatchController = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { code, message } = await this.matchesController.updateMatch(Number(id));
    return res.status(code).json({ message });
  };

  public updateGoalsController = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { code, message } = await this.matchesController.updateGoals(Number(id), req.body);
    return res.status(code).json({ message });
  };
}
