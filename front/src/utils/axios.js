import axios from "axios"

const axiosInstance = axios.create({
    baseURL :  "http://localhost:4000"
});

axios.interceptors.request.use(function (config) {
    config.headers.Authorization = "Bearer "+localStorage.getItem("accessToken")
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

axios.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    if(error.response.data ==="jwt expired"){
        window.location.reload()
    }
    return Promise.reject(error);
  });

export default axiosInstance