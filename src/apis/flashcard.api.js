import axiosClient from "./axiosClient";

const baseUrl = "http://192.168.1.19:9191/flashcard";

const flashcardAPI = {
	getFlashcardByLessionId: (params) => {
		const url = baseUrl + "/get-flashcard-by-lessionid";
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

	getPulblicFlashcardByLessionId: (params, token) => {
		const url = baseUrl + "/public-flashcard-by-lessionid";
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

	getFlashcardByMe: () => {
		const url = baseUrl + "/get-flashcard-by-me";
		const token = localStorage.getItem("accessToken");
		return axiosClient.get(url, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
	},

	removeFlashcardById: (params) => {
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

	addFlashcardByLessionId: (params) => {
		const url = baseUrl + "/create-flashcard";
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

export default flashcardAPI;
