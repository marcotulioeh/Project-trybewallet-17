import { INSERT_EMAIL } from '../actions';

const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, actions) => {
  switch (actions.type) {
  case INSERT_EMAIL:
    return {
      email: actions.email,
    };
  default:
    return state;
  }
};

export default user;
