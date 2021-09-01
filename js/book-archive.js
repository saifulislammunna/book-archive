/* search book function */
const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText);
    /* clear data */
    searchField.value = '';

    const url = `http://openlibrary.org/search.json?q=${searchText}`
    console.log(url);
}

