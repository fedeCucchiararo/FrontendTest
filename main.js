/** get form element */
let form = document.getElementById("search-form");
/** get input element */
let search_input = document.getElementById("search-input");
/** get element into which results will be rendered */
let searchResult = document.getElementById("search-result");

form.addEventListener("submit", searchHandler);

function searchHandler(event) {
  event.preventDefault();
  // remove previous results
  DOMService.cleanSearchResults();
  // get the input value to perform the fetch
  let query = search_input.value;

  githubService
    .searchUser(query)
    .then(async ({ repos_url, avatar_url, login, name, bio }) => {
      let userRepos = await githubService.getUserRepos(repos_url);
      DOMService.renderRepos({ userRepos, avatar_url, login, name, bio });
    })
    .catch(error => DOMService.displayError(error));
}
