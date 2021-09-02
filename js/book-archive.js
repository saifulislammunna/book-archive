document.getElementById('error-message').style.display = 'none';

/* search book function */
const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText);
    /* clear data */
    searchField.value = '';
    document.getElementById('error-message').style.display = 'none';
    if(searchText =='' ){
      

       
      
    }
    else{
       /* load data */ 
    const url = `https://openlibrary.org/search.json?q=${searchText}`
    // console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.docs))
     .then(error => displayError(error));

    }

    
}
 
const displayError = error => {
  document.getElementById('error-message').style.display = 'block';

}

/* display result function */
const displaySearchResult = docs => {
     
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = ''; 
     
    docs.forEach(doc => {
        console.log(doc)
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
          <img src=" https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg" class="card-img-top" alt="...">
         <div class="card-body">
          <h1 class="card-title">${doc.title}</h1>
          <p class="card-text"> ${doc.author_name}</p>
          <h2 class="card-text"> ${doc.first_publish_year}</h2>

         </div>
      </div>
        
        `;
        searchResult.appendChild(div);



    })

}