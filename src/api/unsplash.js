import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 9e102f5a92f55985406ba69f8393131006c8ae62b5f4fcbb8aa1fc24e8196de7"
  }
});
