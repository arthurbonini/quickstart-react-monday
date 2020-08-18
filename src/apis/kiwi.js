import axios from "axios";

const csrf = document
  .querySelector('meta[name="csrf-token"]')
  .getAttribute("content");
export default axios.create({
  baseURL: "/api",
  headers: { "X-CSRF-TOKEN": csrf },
});
