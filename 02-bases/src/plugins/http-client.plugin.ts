// const axios = require("axios");
import axios from "axios";

export const httpClient = {
  getUrl: async (url: string) => {
    //   return await fetch(url)
    const { data } = await axios.get(url);
    return data;
    // .then((response) => response)
    // .then((data) => data);
  },
};

// module.exports = { httpClient };
