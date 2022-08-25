import { BOOLEAN, INTEGER, Model } from 'sequelize';
import db from '.';
import Team from './team';

class Match extends Model {
  id!: number;
  homeTeam!: number;
  homeTeamGoals!: number;
  awayTeam!: number;
  awayTeamGoals!: number;
  inProgress!: boolean;
}

Match.init({
  id: {
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  homeTeam: {
    type: INTEGER,
    field: 'home_team',
    allowNull: false,
  },
  homeTeamGoals: {
    type: INTEGER,
    field: 'home_team_goals',
    allowNull: false,
  },
  awayTeam: {
    type: INTEGER,
    field: 'away_team',
    allowNull: false,
  },
  awayTeamGoals: {
    type: INTEGER,
    field: 'away_team_goals',
    allowNull: false,
  },
  inProgress: {
    type: BOOLEAN,
    field: 'in_progress',
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'matches', // nome da tabela
  underscored: true,
  timestamps: false,
});

Team.belongsTo(Match, { foreignKey: 'id', as: 'teamHome' });
Team.belongsTo(Match, { foreignKey: 'id', as: 'teamAway' });
Match.hasMany(Team, { foreignKey: 'id', as: 'teamHome' });
Match.hasMany(Team, { foreignKey: 'id', as: 'teamAway' });

export default Match;
