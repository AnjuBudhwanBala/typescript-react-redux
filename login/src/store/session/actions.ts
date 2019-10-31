import { bindActionCreators, Dispatch } from 'redux';
import { is } from '@babel/types';

//Action

export interface SetAction {
  type: 'SET';
  accessToken: string;
}

export interface SetFetching {
  type: 'SET_FETCHING';
  isFetching: boolean;
}

//Union Action Type
export type Action = SetAction | SetFetching;

//Action creators
export const set = (accessToken: string): SetAction => {
  return {
    type: 'SET',
    accessToken
  };
};

export const isFetching = (isFetching: boolean): SetFetching => {
  return {
    type: 'SET_FETCHING',
    isFetching
  };
};

export const login = (userName: string, passowrd: string) => async (
  dispatch: Dispatch
): Promise<void> => {
  return new Promise<void>(resolve => {
    dispatch(isFetching(true));
    console.log('Login in progress');

    setTimeout(() => {
      dispatch(set('this_is_access_token'));

      setTimeout(() => {
        dispatch(isFetching(false));
        console.log('Login done');
        resolve();
      }, 1000);
    }, 3000);
  });
};
