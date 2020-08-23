import axios from 'axios';

export const getCompanyList = () => {
	return async (dispatch, getState) => {
		try {
			const response = await axios.get('http://localhost:3001/api/v1/companies');
			const companies = response.data;

			dispatch({
				type: 'FETCH_COMPANIES_LIST',
				payload: { companies: companies },
			});
		} catch (err) {
			console.log(err);
		}
	};
};
