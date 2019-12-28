import { handleActions } from 'redux-actions';
import * as BasicTypes from '../types/BasicTypes';
import { BasicState } from '../../interfaces';

const initialState = { appStatus: 'PC' };

const reducer = handleActions(
	{
		[BasicTypes.UPDATE_APP_STATUS]: (
			state: BasicState,
			action: { payload: any; type: string }
		) => {
			console.log('UPDATE_APP_STATUS 收到事件 ==>', action.payload);
			return Object.assign({}, state, { appStatus: action.payload });
		}
	},
	initialState
);

export default reducer;
