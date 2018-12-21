const githubService = {
  _url: "https://api.github.com",

  async searchUser(query) {
    return fetch(`${this._url}/users/${query}`, {
      method: "GET"
    })
      .then(response => response.json())
      .then(response => {
        if (response.message === "Not Found") throw Error(response.message);
        return response;
      });
  },

  getUserRepos(repos_url) {
    return fetch(repos_url, {
      method: "GET"
    }).then(response => response.json());
  }
};
