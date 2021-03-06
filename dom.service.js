DOMService = {
  cleanSearchResults() {
    if (searchResult.firstChild) {
      while (searchResult.firstChild) {
        searchResult.removeChild(searchResult.firstChild);
      }
    }
  },

  renderRepos({ userRepos, avatar_url, login, name, bio }) {
    let ul = document.createElement("ul");
    ul.setAttribute("id", "repos-list");

    let avatar = document.createElement("div");
    avatar.setAttribute("class", "avatar");
    avatar.setAttribute("style", "background-image: url(" + avatar_url + ")");

    let userInfoContainer = document.createElement("div");
    let nameElement = document.createElement("span");
    let usernameElement = document.createElement("span");
    let bioElement = document.createElement("span");

    userInfoContainer.setAttribute("id", "user-info-container");
    nameElement.setAttribute("id", "user-info-container__name");
    bioElement.setAttribute("id", "user-info-container__bio");
    usernameElement.setAttribute("id", "user-info-container__username");

    nameElement.innerHTML = name ? name : "No name to display";
    usernameElement.innerHTML = "@" + login;
    bioElement.innerHTML = bio ? bio : "No bio to display...";

    userInfoContainer.appendChild(usernameElement);
    userInfoContainer.appendChild(nameElement);
    userInfoContainer.appendChild(bioElement);

    userRepos.forEach(repo => this._renderLi(ul, repo));

    let head = document.createElement("div");
    head.setAttribute("id", "search-result__head");
    let body = document.createElement("div");
    body.setAttribute("id", "search-result__body");
    let reposTitle = document.createElement("h3");
    reposTitle.setAttribute("id", "search-result__reposTitle");
    reposTitle.innerHTML = "Repositories";

    head.appendChild(avatar);
    head.appendChild(userInfoContainer);

    body.appendChild(reposTitle);
    body.appendChild(ul);

    searchResult.appendChild(head);
    searchResult.appendChild(body);
  },

  _renderLi(ul, repo) {
    let li = document.createElement("li");
    let liContent = document.createElement("div");
    let repoName = document.createElement("span");
    let starCount = document.createElement("span");
    let starIcon = document.createElement("img");
    let forkCount = document.createElement("span");
    let forkIcon = document.createElement("img");

    liContent.setAttribute("id", "liContent");
    starIcon.setAttribute("src", "./images/star.png");
    starIcon.setAttribute("class", "starIcon");
    forkIcon.setAttribute("src", "./images/fork.svg");
    forkIcon.setAttribute("class", "forkIcon");

    repoName.innerHTML = repo.name;
    starCount.innerHTML = repo.stargazers_count;
    forkCount.innerHTML = repo.forks_count;

    liContent.appendChild(repoName);
    liContent.appendChild(starIcon);
    liContent.appendChild(starCount);
    liContent.appendChild(forkIcon);
    liContent.appendChild(forkCount);
    li.appendChild(liContent);
    ul.appendChild(li);
  },

  displayError(error) {
    let errorContainer = document.createElement("div");
    errorContainer.setAttribute("id", "error");
    errorContainer.innerHTML =
      error.message === "Not Found" ? " Does not exist" : error.message;
    searchResult.appendChild(errorContainer);
  }
};
