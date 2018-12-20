const logic = {
  url: "https://api.github.com",

  async returnValue(query) {
    console.log("Logic: " + query);
    return query.value;
  },

  async searchUser(query) {
    return fetch(`${this.url}/users/${query}`, {
      method: "GET"
    })
      .then(result => result.json())
      .then(result => {
        if (result.message === "Not Found") throw Error(result.message);
        return result;
      })
  },

  async getUserRepos(url) {
    return fetch(url, {
      method: "GET"
    })
      .then(result => result.json())
  }
};
