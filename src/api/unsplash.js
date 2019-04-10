import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 52dd2c33adec8400e043ddf65bdc49fa43c3d62419e241f87d20d699d56ea69a"
  }
});
