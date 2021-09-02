/* search book function */
const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText);
    /* clear data */
    searchField.value = '';

     /* load data */ 
    const url = `http://openlibrary.org/search.json?q=${searchText}`
    // console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.docs));
}
 
/* display result function */
const displaySearchResult = docs => {
     
    const searchResult = document.getElementById('search-result');
     
     
    docs.forEach(doc => {
        console.log(doc)
    })

}
