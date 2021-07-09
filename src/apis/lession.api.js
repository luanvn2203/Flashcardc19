import axiosClient from "./axiosClient";

const baseUrl = "http://192.168.1.72:9191/lession";

const lessionAPI = {
	getLessionBySubId: (params) => {
		const url = baseUrl + "/get-lession-by-subjectId";
		const token = localStorage.getItem("accessToken");
		return axiosClient.post(
			url,
			{ params },
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);
	},

	getPublicLessionBySubId: (params, token) => {
		const url = baseUrl + "/public-lession-by-subjectid";
		return axiosClient.post(
			url,
			{ params },
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);
	},

	getLessionByMe: () => {
		const url = baseUrl + "/get-lession-by-me";
		const token = localStorage.getItem("accessToken");
		return axiosClient.get(url, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
	},

	createLessionBySubId: (params) => {
		const url = baseUrl + "/create-lession-by-subjectid";
		const token = localStorage.getItem("accessToken");
		return axiosClient.post(
			url,
			{ params },
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);
	},

	updateLessionById: (params) => {
		const url = baseUrl + "/update-lession-by-id";
		const token = localStorage.getItem("accessToken");
		return axiosClient.put(
			url,
			{ params },
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);
	},

	getLessionByAccountId: (params) => {
		const url = baseUrl + "/get-lession-by-accountid";
		const token = localStorage.getItem("accessToken");
		return axiosClient.post(
			url,
			{ params },
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);
	},

	getLessionByLessionId: (params) => {
		const url = baseUrl + "/get-lession-by-lessionid";
		const token = localStorage.getItem("accessToken");
		return axiosClient.post(
			url,
			{ params },
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);
	},

	getAllLession: (params) => {
		const url = baseUrl + "/get-all-lession";
		const token = localStorage.getItem("accessToken");
		return axiosClient.post(
			url,
			{ params },
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);
	},

	removeLessionById: (params) => {
		const url = baseUrl + "/delete";
		const token = localStorage.getItem("accessToken");
		return axiosClient.post(
			url,
			{ params },
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);
	},
};

export default lessionAPI;
