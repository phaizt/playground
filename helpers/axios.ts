import axios from "axios";

const instance = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL,
});

instance.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
instance.defaults.headers.post['Content-Type'] = 'application/json';

export default instance;
