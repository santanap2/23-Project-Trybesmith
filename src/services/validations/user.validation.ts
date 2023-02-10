import IUser from '../../interfaces/user.interface';

const userRequiredValidation = (user: IUser) => {
  const { username, vocation, level, password } = user;
  
  if (!username) return { code: 400, message: '"username" is required' };
  if (!vocation) return { code: 400, message: '"vocation" is required' };
  if (level === undefined) return { code: 400, message: '"level" is required' };
  if (!password) return { code: 400, message: '"password" is required' };

  return null;
};

const userTypeValidation = (user: IUser) => {
  const { username, vocation, level, password } = user;

  if (typeof username !== 'string') return { code: 422, message: '"username" must be a string' };
  if (typeof vocation !== 'string') return { code: 422, message: '"vocation" must be a string' };
  if (typeof level !== 'number') return { code: 422, message: '"level" must be a number' };
  if (typeof password !== 'string') return { code: 422, message: '"password" must be a string' };

  return null;
};

const userLengthValidation = (user: IUser) => {
  const { username, vocation, level, password } = user;
  
  if (username.length < 3) {
    return { code: 422, message: '"username" length must be at least 3 characters long' };
  }
  if (vocation.length < 3) {
    return { code: 422, message: '"vocation" length must be at least 3 characters long' };
  }
  if (level < 1) {
    return { code: 422, message: '"level" must be greater than or equal to 1' };
  }
  if (password.length < 8) {
    return { code: 422, message: '"password" length must be at least 8 characters long' };
  }

  return null;
};

export default {
  userRequiredValidation,
  userTypeValidation,
  userLengthValidation,
};
