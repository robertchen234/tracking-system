import axios from 'axios';

export const getUsersList = () => {
	return async (dispatch, getState) => {
		try {
			const response = await axios.get('https://tracking-system-api.herokuapp.com/api/v1/users');
			const users = response.data;

			dispatch({ type: 'FETCH_USERS_LIST', payload: { users: users } });

			return users;
		} catch (err) {
			console.error('err: ', err.message);
		}
	};
};

export const findUserByID = (userId) => {
	return async (dispatch, getState) => {
		const { users } = getState();
		const currentUser = users.find((user) => {
			if (user.id === userId) {
				return user;
			}
		});
		return dispatch({
			type: 'FIND_USER',
			payload: {
				foundUser: currentUser,
			},
		});
	};
};

export const deleteUsers = () => {
	return async (dispatch) => {
		return dispatch({
			type: 'DELETE_USERS',
			payload: {
				users: [],
			},
		});
	};
};
