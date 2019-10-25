import { AppActions } from '../actions';
import NoteModel from '../model/Note';

export interface NoteListState {
  state: string;
  notes: NoteModel[];
  errorMessage?: string;
}

export const noteListReducer = (
  state: NoteListState,
  action: AppActions
): NoteListState => {
  if (action.type === 'NOTES_FETCH') {
    return {
      ...state,
      state: 'LOADING',
      notes: []
    };
  }
  if (action.type === 'NOTES_FETCH_SUCCESS') {
    return {
      ...state,
      state: 'LOADED',
      notes: action.notes
    };
  }
  if (action.type === 'NOTES_FETCH_ERROR') {
    return {
      ...state,
      state: 'ERROR',
      notes: [],
      errorMessage: action.errorMessage
    };
  }
  return state;
};
