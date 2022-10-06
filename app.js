const toggleButton = document.getElementsByClassName('toggle__btn')[0]
const navbarLinks = document.getElementsByClassName('nav__bar--links')[0]

const movieListEl = document.querySelector('.movies')


toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})


async function onSearchChange(event){
    const title = event.target.value

    setTimeout(() => {
        renderMovies(title),1000;
})
}


async function renderMovies(movieName){
    const movieUrl = `https:www.omdbapi.com/?i=tt3896198&apikey=a6a35b27&s=${movieName}`;

    const movies = await fetch(`${movieUrl}`)
    const moviesData = await movies.json();
    const showName =  moviesData.Search.map(element => element.Title)

    if(!moviesData.Search){
        movieListEl.style.display = 'none'
        console.log('hi')
    }

    else if(moviesData.Search){
        for(let i = 0; i < 6; i++){
            
            movieListEl.innerHTML = moviesData.Search.slice(0,6).map(movie =>`<div class="movie1">
            <figure class="movie__img--wrapper"><img class="movie__img--search" src=${movie.Poster}></figure>
             <h1 class ="movie__title--header">${movie.Title}</h1> 
        </div>`).join("");
       


        }
    }
}
