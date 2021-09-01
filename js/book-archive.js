/* search book function */
const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);
    /* clear data */
    searchField.value = '';
}

