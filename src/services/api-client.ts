import axios from "axios";

export default axios.create({
	// baseURL: import.meta.env.VITE_GAMES_BASE_URL,
	baseURL: "https://api.rawg.io/api",
	params: {
		key: "67ad5b94c21346baa6a38abd4cb4dd6a",
		// key: import.meta.env.VITE_GAMES_API_KEY,
	},
});
