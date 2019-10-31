import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import session, { State as SessionState } from './session/reducers';

export interface RootState {
  session: SessionState;
}

export default createStore(
  combineReducers<RootState>({
    session
  }),
  applyMiddleware(thunk)
);
