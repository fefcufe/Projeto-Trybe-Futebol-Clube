import { STRING, INTEGER, Model } from 'sequelize';
import db from '.'; // importa index.ts dessa pasta (models)

class User extends Model {
  id!: number;
  // "!" é para não precisar definir um valor default ja que o sequelize já
  // o definirá
  username!: string;
  role!: string;
  email!: string;
  password!: string;
}

User.init({
  id: {
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: STRING,
    allowNull: false,
  },
  role: {
    type: STRING,
    allowNull: false,
  },
  email: {
    type: STRING,
    allowNull: false,
  },
  password: {
    type: STRING,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'users', // nome da tabela
  underscored: true,
  timestamps: false,
});

export default User;
