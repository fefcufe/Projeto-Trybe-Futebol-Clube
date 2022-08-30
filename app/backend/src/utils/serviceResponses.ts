import { StatusCodes } from 'http-status-codes';

const twoTeamsEquals = {
  code: StatusCodes.UNAUTHORIZED,
  message: 'It is not possible to create a match with two equal teams',
};

const noTeamFound = {
  code: StatusCodes.NOT_FOUND,
  message: 'There is no team with such id!',
};

export default {
  twoTeamsEquals,
  noTeamFound,
};
