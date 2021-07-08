import axiosClient from "./axiosClient";

const baseUrl = "http://localhost:9191/subject";

const subjectAPI = {
	getInterestSubject: (params) => {
		const url = baseUrl + "/for-home-interest";
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

	getSubjectByMe: () => {
		const url = baseUrl + "/subject-by-signin-mail";
		const token = localStorage.getItem("accessToken");
		return axiosClient.get(url, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
	},

	addSubjectByTopicId: (params) => {
		const url = baseUrl + "/create";
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

	getSubjectByTopicId: (params) => {
		const url = baseUrl + "/create";
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

	removeSubjectById: (params) => {
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

	updateSubjectById: (params) => {
		const url = baseUrl + "/update";
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
};

export default subjectAPI;
