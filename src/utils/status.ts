import { StatusType } from '../components/types/status.types';

function statusReducer(state: StatusType, action: string) {
  switch (action) {
    case 'success':
      return {
        loading: false,
        error: '',
      };
    case 'error':
      return {
        loading: false,
        error: 'An error occurred, Please try again!',
      };
    default:
      return state;
  }
}

export default statusReducer;
