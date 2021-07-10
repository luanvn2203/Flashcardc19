import axiosClient from "./axiosClient";

const baseUrl = "http://192.168.1.19:9191/question";

const questionAPI = {
	addQuestionOption: (params) => {
		const url = baseUrl + "/add-question-opt";
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

	getQuestionByFlashcardId: (params, token) => {
		const url = baseUrl + "/get-questions-by-flashcard";
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

	removeQuestionById: (params) => {
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

	getQuestionByListLessionId: (params) => {
		const url = baseUrl + "/arr-lessionid";
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

export default questionAPI;
