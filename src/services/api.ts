import axios, { AxiosHeaders } from "axios";

export interface IResponse<T> {
  message: string;
  error: boolean;
  err: unknown;
  data: T;
}

const baseAuth = (auth: AxiosHeaders | object = {}) => {
  return {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      ...auth,
    },
  };
};

const app = async <T>({
  method = "GET",
  url = "",
  data = {},
  auth = {},
} = {}): Promise<IResponse<T>> => {
  try {
    const BASE_URL =
      import.meta.env.VITE_BASE_URL || "http://localhost:3001/api";
    const nAuth = baseAuth(auth);

    const response: { data: T } = await axios({
      method,
      url: `${BASE_URL}${url}`,
      data,
      ...nAuth,
    });

    return { data: response.data, error: false, err: null, message: "" };
  } catch (error) {
    let message = "Unknown error";
    if (error instanceof Error) {
      message = error.message;
    }
    return { message, error: true, err: error, data: [] as T };
  }
};

const get = async <T>({ url = "", data = {}, auth = {} } = {}) => {
  return app<T>({ method: "GET", url, auth, data });
};

const remove = async <T>({ url = "", data = {}, auth = {} }) =>
  app<T>({ method: "DELETE", url, data, auth });

const put = async <T>({ url = "", data = {}, auth = {} }) => {
  return <T>app({
    method: "PUT",
    url,
    data,
    auth,
  });
};

const post = async <T>({ url = "", data = {}, auth = {} }) =>
  app<T>({
    method: "POST",
    url,
    data,
    auth,
  });

export const api = {
  get,
  delete: remove,
  put,
  post,
};
