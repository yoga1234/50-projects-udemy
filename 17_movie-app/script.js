const API_URl =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=d6808397da96e2c60d49a6e8b27efeef";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=d6808397da96e2c60d49a6e8b27efeef&query="';

const form = document.getElementById("form");
const search = document.getElementById("search");

// get initial movies
getMovies(API_URl);

async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();

  console.log(data.results);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchTerm = search.value;

  if (searchTerm && searchTerm !== "") {
    getMovies(SEARCH_API + searchTerm);

    search.value = "";
  } else {
    window.location.reload();
  }
});
