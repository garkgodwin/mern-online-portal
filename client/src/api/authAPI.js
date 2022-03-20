import api from "./instance";

const ACCOUNTS = "/accounts";

//TODO: FOR ALL THE API ROUTES
/* 
  1. always add in the catch block if error response is undefined
    a. possible error because of server is unreachable.
*/

const login = async (data) => {
  const result = await api
    .post(`${ACCOUNTS}/login`, data)
    .then((response) => {
      const { role, username, token, message } = response.data;
      const status = response.status;
      return {
        status: status,
        role: role,
        username: username,
        token: token,
        message: message,
      };
    })
    .catch((error) => {
      if (error.response) {
        const status = error.response.status;
        const message = error.response.data.message;
        return {
          status: status,
          message: message,
        };
      } else {
        return {
          status: 503,
          message: "Cannot reach the server",
        };
      }
    });
  return result;
};

const verifyOnMount = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const result = await api
    .get(`${ACCOUNTS}/verify-on-mount`, config)
    .then((response) => {
      const { role, username, message } = response.data;
      const status = response.status;
      return {
        status: status,
        role: role,
        username: username,
        message: message,
      };
    })
    .catch((error) => {
      if (error.response) {
        const status = error.response.status;
        const message = error.response.data.message;
        return {
          status: status,
          message: message,
        };
      } else {
        //?possible server down ?
        return {
          status: 503,
          message: "Cannot reach the server",
        };
      }
    });
  return result;
};

const authAPI = {
  login,
  verifyOnMount,
};

export default authAPI;
