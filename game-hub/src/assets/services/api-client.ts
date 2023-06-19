import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "76e4cc716a17482b897d129db712c2b0",
  },
});
