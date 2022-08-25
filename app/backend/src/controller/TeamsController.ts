import { Request, Response } from 'express';
import TeamsService from '../service/teamsService';

export default class TeamsController {
  constructor(private teamService = new TeamsService()) {}

  public getAllController = async (req: Request, res: Response) => {
    const { code, message } = await this.teamService.getAllTeams();
    return res.status(code).json(message);
  };

  public getTeamByIdController = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { code, message } = await this.teamService.getTeamById(Number(id));

    return res.status(code).json(message);
  };
}
