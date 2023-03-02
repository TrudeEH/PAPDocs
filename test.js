const movie = {
  title: 'a',
  releaseYear: 2018,
  rating: 4.5,
  director: 'b',
};

showProperties(movie);

function showProperties(obj) {
  for (let key in obj) {
    console.log(typeof movie[key] === 'string' ? key : '');
  }
}
