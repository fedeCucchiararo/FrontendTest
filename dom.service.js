DOMService = {
  cleanSearchResults() {
    if (searchResult.firstChild) {
      while (searchResult.firstChild) {
        searchResult.removeChild(searchResult.firstChild);
      }
    }
  }
};
