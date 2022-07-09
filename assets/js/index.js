const titleField = document.getElementById('title-movie');
const descriptionField = document.getElementById('description');


const posterUrlBase = 'https://image.tmdb.org/t/p/w300';
let posterUrlFinal = '';
let fullUrl = '';


function getMovieFromApi() {
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=6195b5693c9e04db18d5a30066d6835f&language=pt-BR')
        .then(response => {
            // console.log(response.data.results[17]);

            const random = Math.floor(Math.random() * 21);
            console.log(random);

            const title = response.data.results[random].title;
            const description = response.data.results[random].overview;
            titleField.innerHTML = title;
            descriptionField.innerHTML = description;
            const posterPath = response.data.results[random].poster_path;
            posterUrlFinal = posterPath;
            // console.log(posterUrlFinal);

            const url = 'https://image.tmdb.org/t/p/w300' + posterPath;
            fullUrl = url;
            // console.log(url);


            // console.log(response.data.results[17].poster_path);
            makePoster();
        });
}


function makePoster() {
    const posterImg = document.getElementById('poster');
    posterImg.src = fullUrl;
}



function getMovie() {
    getMovieFromApi();

}