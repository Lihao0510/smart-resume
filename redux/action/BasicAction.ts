import { UPDATE_APP_STATUS } from '../types/BasicTypes';
import { createAction } from 'redux-actions';

export const updateAppStatus = createAction(UPDATE_APP_STATUS);

export const updateAppStatusAsync = (status: string) => {
	return (dispatch: Function) => {
		setTimeout(() => {
			dispatch(updateAppStatus(status));
		}, 2000);
	};
};
