import axios from "axios";
export const useAxios = axios.create({
  baseURL: "http://localhost:3000",
});
axios.interceptors.response.use((resp) => {
  let v = resp.headers["vers"] || "default";
  if (v !== localStorage.getItem("vers") && resp.config.method == "get") {
    localStorage.setItem("vers", v);
    window.location.reload(); // For new version, simply reload on any get
  }
  return Promise.resolve(resp);
});

export default useAxios;
