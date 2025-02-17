import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "00a5d3b70adb424695f10f3cb1f88b40",
  },
});
