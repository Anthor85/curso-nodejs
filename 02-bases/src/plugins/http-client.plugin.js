const axios = require("axios");

const httpClient = {
  getUrl: async (url) => {
    //   return await fetch(url)
    const { data } = await axios.get(url);
    return data;
    // .then((response) => response)
    // .then((data) => data);
  },
};

module.exports = { httpClient };
