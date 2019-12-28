import { handleActions } from 'redux-actions';
import * as BasicTypes from '../types/BasicTypes';
import { BasicState } from '../../interfaces';

const initialState = { appStatus: 'PC' };

const reducer = handleActions(
	{
		[BasicTypes.UPDATE_APP_STATUS]: (state: BasicState, payload: string) => {
			return Object.assign({}, state, { appStatus: payload });
		}
	},
	initialState
);

export default reducer;
