import { useSelector } from "react-redux";
import axiosClient from "./axiosClient";

const baseUrl = 'http://192.168.1.19:9195/account';

const authAPI = {
	login: (params) => {
		const url = baseUrl + "/login";
		return axiosClient.post(url, { params });
	},

	getMe: (token) => {
		const url = baseUrl + "/me";
		return axiosClient.get(url, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
	},

	logout: (token) => {
		const url = baseUrl + "/logout";
		// const token = localStorage.getItem("accessToken");
		return axiosClient.delete(url, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
	},

	register: (params) => {
		const url = baseUrl + "/register";
		return axiosClient.post(url, { params });
	},

	updateProfile: (params) => {
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

	editPassword: (params) => {
		const url = baseUrl + "/change-password";
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

	refreshToken: () => {
		const url = baseUrl + "/token";
		const token = localStorage.getItem("accessToken");
		const refreshToken = localStorage.getItem("refreshToken");
		return axiosClient.post(
			url,
			{ refreshToken },
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);
	},

	updateHobbyTopic: (params) => {
		const url = baseUrl + "/update-interest";
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

export default authAPI;
