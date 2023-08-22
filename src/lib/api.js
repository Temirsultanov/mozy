import axios from "axios";

const API_URL = "https://api.mozy.dev";

export const sendRequest = (name = "", phone = "", email = "", description = "") => {
  axios.post(API_URL, { name, phone, email, description })
    .then((r) => console.log(r))
    .catch((e) => console.log(e));
};
