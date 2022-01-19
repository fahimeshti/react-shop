import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
    .accessToken || "";

// const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
// const currentUser = user && JSON.parse(user).currentUser;
// const TOKEN = currentUser?.accessToken;
// const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZGRkODYyYzFkOGRiNDlhMWE1YTUwNSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NDE5MjkwMzcsImV4cCI6MTY0MjE4ODIzN30.T5cTHQaUFpIHD-numQSrULrMu-JOb-nFb_T8LwUyS9s"
// console.log(TOKEN);

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});