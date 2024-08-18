import axios from "axios";
import { baseURL } from "../baseUrl";

const API_URL = `${baseURL}/api/admin/auth/login`;

export const login = async (email: string, password: string) => {
  try {
    const response = await axios.post(API_URL, {
      email,
      password,
    });

    if (response.status === 200) {
      const { access_token, refresh_token, token_type } = response.data;

      localStorage.setItem("accessToken", access_token);
      localStorage.setItem("refreshToken", refresh_token);
      localStorage.setItem("tokenType", token_type);

      return response.data;
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response && error.response.status === 422) {
        console.error("Validation error:", error.response.data);
      } else {
        console.error("Login error:", error.message);
      }
    } else {
      console.error("Unexpected error:", error);
    }
    throw error;
  }
};
