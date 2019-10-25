import { Action, Dispatch } from 'redux';
import NoteModel from '../model/Note';

export const ACTION_NOTES_FETCH = 'NOTES_FETCH';
export const ACTION_NOTES_FETCH_SUCCESS = 'NOTES_FETCH_SUCCESS';
export const ACTION_NOTES_FETCH_ERROR = 'NOTES_FETCH_ERROR';

export interface IActionNotesFetch extends Action {
  type: 'NOTES_FETCH';
}

export interface IActionNotesSuccess extends Action {
  type: 'NOTES_FETCH_SUCCESS';
  notes: NoteModel[];
}

export interface IActionNotesFetchError extends Action {
  type: 'NOTES_FETCH_ERROR';
  errorMessage: string;
}

export type AppActions =
  | IActionNotesFetch
  | IActionNotesFetchError
  | IActionNotesSuccess;
