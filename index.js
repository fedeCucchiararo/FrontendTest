let form = document.getElementById("search-form");

let searchResult = document.getElementById("search-result");
let userRepos;

form.addEventListener("submit", event => {
  event.preventDefault();

  // remove previous results
  DOMService.cleanSearchResults()

  // it will contain the url to later get the user repositories
  let repos_url, avatar_url, login, name, bio;

  // get the input value to perform the fetch
  let search_query = document.getElementById("search-input").value;

  githubService
    .searchUser(search_query)
    .then(result => ({ repos_url, avatar_url, login, name, bio } = result))
    .then(async () => {
      userRepos = await githubService.getUserRepos(repos_url);
      // ul that will contain li elements for every repo
      let ul = document.createElement("ul");
      ul.setAttribute("id", "repos-list");

      let avatar = document.createElement("div");
      avatar.setAttribute("class", "avatar");
      avatar.setAttribute("style", "background-image: url(" + avatar_url + ")");

      let userInfoContainer = document.createElement("div");
      userInfoContainer.setAttribute("id", "user-info-container");
      let nameElement = document.createElement("span");
      nameElement.setAttribute("id", "user-info-container__name");
      let usernameElement = document.createElement("span");
      usernameElement.setAttribute("id", "user-info-container__username");
      let bioElement = document.createElement("span");
      bioElement.setAttribute("id", "user-info-container__bio");

      nameElement.innerHTML = name ? name : "No name to display";
      usernameElement.innerHTML = "@" + login;
      bioElement.innerHTML = bio ? bio : "No bio to display...";

      userInfoContainer.appendChild(usernameElement);
      userInfoContainer.appendChild(nameElement);
      userInfoContainer.appendChild(bioElement);
      userRepos.forEach(repo => {
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
      });

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
    })
    .catch(error => githubService.userErrorHandler(error));
});
