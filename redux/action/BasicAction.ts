import { UPDATE_APP_STATUS } from '../types/BasicTypes';
import { createAction } from 'redux-actions';

export const updateAppStatus = createAction(UPDATE_APP_STATUS);

export const updateAppStatusAsync = (status: string) => {
	console.log('即将使用异步Action ==>', status);
	return (dispatch: Function) => {
		setTimeout(() => {
			dispatch(updateAppStatus(status));
		}, 2000);
	};
};
