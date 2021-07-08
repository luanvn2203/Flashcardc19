import axiosClient from "./axiosClient";

const baseUrl = "http://localhost:9191/topic";

const topicAPI = {
	getAllTopic: () => {
		const url = baseUrl + "/all";
		return axiosClient.get(url, {});
	},

	getTopicByMe: () => {
		const url = baseUrl + "/find-by-email";
		const token = localStorage.getItem("accessToken");
		return axiosClient.get(url, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
	},

	addNewTopic: (params) => {
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

	removeTopicById: (params) => {
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

	updateTopicById: (params) => {
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

export default topicAPI;
