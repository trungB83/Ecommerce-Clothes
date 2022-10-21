import axios from "axios";
import { get } from "lodash";
import { API_URL } from "../config";
import { getHeaders } from "./common.service";

export const fetchPosts = async () => {
  const url = `${API_URL}/api/posts`;
  const options = {
    url,
    method: "get",
    headers: getHeaders(),
  };
  const result = await axios(options);
  return get(result, "data", {});
};

export const fetchPostCates = async () => {
  const url = `${API_URL}/api/post-categories`;
  const options = {
    url,
    method: "get",
    headers: getHeaders(),
  };
  
  const result = await axios(options);
  return get(result, "data", {});
};

