// array to store favourites ANIMES

let favouriteAnimes = []

// function to handle buttons

document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function () {
        const filter = btn.getAttribute('data-filter');
        filterGallery(filter);
    })
})

// function to filter  gallery

function filterGallery(filter) {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        if(filter === 'all' || card.getAttribute('data-item') === filter){
            card.style.display = 'block'
        } else{
            card.style.display = 'none'
        }
    });

    if(filter === 'favourites'){
        showFavourites();
    }
}

