let form = document.getElementById("search-form");

let searchResult = document.getElementById("search-result");
let userRepos;

form.addEventListener("submit", event => {
  event.preventDefault();

  // remove previous results
  DOMService.cleanSearchResults();

  let repos_url, avatar_url, login, name, bio;

  // get the input value to perform the fetch
  let search_query = document.getElementById("search-input").value;

  githubService
    .searchUser(search_query)
    .then(async ({ repos_url, avatar_url, login, name, bio }) => {
      let userRepos = await githubService.getUserRepos(repos_url);
      DOMService.renderRepos({ userRepos, avatar_url, login, name, bio });
    })
    .catch(error => DOMService.displayError(error));
});

// user => ({ repos_url, avatar_url, login, name, bio } = user)
