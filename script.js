const booksListUrl = 'https://striveschool-api.herokuapp.com/books';
let listBook = document.getElementById('listBook');

function getBooks(url) {
    fetch(url)
        .then((response) => response.json())
        .then((books) => {
            let htmlListContent = '';
            books.forEach((book) => {
                htmlListContent += `<div class="col-3">
                    <div class="card">
                        <img src="${book.img}" alt="copertina libro" class="card-img-top">
                        <div class="card-body">
                            <h2 class="card-title">${book.title}</h2>
                            <p>${book.price}</p>
                            <p>${book.category}</p>
                            <a href=${scartaCard} class="btn btn-primary">Scarta</a>
                        </div>
                    </div>
                </div>`;
            });
            listBook.innerHTML = htmlListContent;
        });
        function scartaCard(button) {
            const card = button.closest('.card');
                    if (card) {
                card.remove();
            }
        }
        
}
document.addEventListener('DOMContentLoaded', function () {
    getBooks(booksListUrl);
});
