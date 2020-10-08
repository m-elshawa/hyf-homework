console.log("Movies exercise");

const moviesApi = "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json"

const myMoviesArr = fetch (moviesApi)
.then (response => response.json())
.then (data => {
    const badMoviesRating = data.filter(z => z.rating < 4,5);
    console.log(badMoviesRating);

    const badMoviesYear2000 = badMoviesRating.filter(x => x.year > 2000);
    console.log(badMoviesYear2000);
});

console.log(myMoviesArr);







