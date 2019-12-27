import { UPDATE_APP_STATUS } from '../types/BasicTypes';

export const updateAppStatus = () => {
	return (dispatch: Function) => {
		setTimeout(() => {
			dispatch(UPDATE_APP_STATUS);
		});
	};
};
