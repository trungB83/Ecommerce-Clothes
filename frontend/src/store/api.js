import axios from "axios";
import { API_URL } from "config";
import { notification } from "antd";
import { getLocal } from "core-authent/utils/localStorage";
import { auth } from "core-authent/constants/constant";
export const httpClient = axios.create({
  baseURL: `${API_URL}/api/v1`,
  headers: {
    "content-type": "application/json",
  },
});

httpClient.interceptors.request.use(
  (config) => {
    const token = getLocal(auth.TOKEN);
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

httpClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      if (error.response.status === 401) {
        notification.error({
          message: " Sai tài khoẳn hoặc mật khẩu",
          description: "Bạn vui lòng đăng nhập lại!",
        });
        setTimeout(() => {
          localStorage.clear();
        }, 5000);
      }
    }
    return Promise.reject(error);
  }
);

const getHeader = () => {
  const token = localStorage.getItem("userToken");
  return {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
};

const getHeaderUpload = () => {
  const token = localStorage.getItem("userToken");
  return {
    Authorization: `Bearer ${token}`,
  };
};

export function getApi(url) {
  return axios({
    method: "get",
    url,
  });
}

export function deleteApi(url, data) {
  return axios({
    method: "delete",
    url,
    data: { id: data.id },
    headers: getHeader(),
  });
}

export function postApi(url, data) {
  return axios({
    method: "post",
    url,
    data,
    headers: getHeader(),
  });
}

export function putApi(url, data) {
  return axios({
    method: "put",
    url,
    data,
    headers: getHeader(),
  });
}

export function uploadApi(url, data) {
  let formData = new FormData();
  formData.append("fileUpload", data.fileUpload);
  formData.append("folder", data.folder);
  return axios({
    method: "post",
    url,
    data: formData,
    headers: getHeaderUpload(),
  });
}

export default httpClient;
