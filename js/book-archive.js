document.getElementById('error-message').style.display = 'none';
const errorMessage = document.getElementById('error-message');
const  emptyText = document.getElementById('empty-text');
const resultCount = document.getElementById('result-count');
/* search book function */
const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText);
    /* clear data */
    searchField.value = '';
    document.getElementById('error-message').style.display = 'none';
    if(searchText == '' ){
      
      const  emptyText = document.getElementById('empty-text');
      emptyText.innerText = 'Please write something to display';
     
      
    }
    else{
       emptyText.textContent = '';
      
       /* load data */ 
    const url = `https://openlibrary.org/search.json?q=${searchText}`
    // console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data,data.docs))
     .then(error => displayError(error));

    }

    
}
 /* error function */
const displayError = error => {
  document.getElementById('error-message').style.display = 'block';

}

/* display result function */
const displaySearchResult = (data,docs) => {
     
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = ''; 

    if(docs.length === 0){
      const errorMessage = document.getElementById('error-message');
      errorMessage.innerText = 'No Result Found';
    }
    else{
      errorMessage.textContent = '';
      const resultCount = document.getElementById('result-count');
      resultCount.innerHTML = `Total search Results ${data.numFound}`
     }
     
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