const githubService = {
  url: "https://api.github.com",

  searchUser(query) {
    return fetch(`${this.url}/users/${query}`, {
      method: "GET"
    })
      .then(response => this.userResponseHandler(response))
      .catch(error => this.userErrorHandler(error));
  },

  userResponseHandler(response) {
    response = response.json();
    if (response.message === "Not Found") throw Error(response.message);
    return response;
  },

  userErrorHandler(error) {
    let errorContainer = document.createElement("div");
    errorContainer.setAttribute("id", "error");
    errorContainer.innerHTML = "Does not exist";
    searchResult.appendChild(errorContainer);
  },

  getUserRepos(url) {
    return fetch(url, {
      method: "GET"
    }).then(result => result.json());
  }
};
