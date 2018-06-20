var movies = [
  {
    id: 1,
    title: 'Coco',
    desc: 'This is the movie I wanted Pixar to make once again. A movie about what family means. A movie about the choices we make, and the roads not taken. This is a stunning work of art. It\'ll move you from happiness to tears, from memories of the past to the joy of the future. To understanding and remembrance. To the joys and pains of being alive. I can\'t even begin to imagine how Pixar made a movie about life and death that is so colorful, so absorbing, so poignant, and so approachable for kids, and with so many layers upon layers upon layers of meaning and significance for adults.',
    score: 8.8,
    poster: 'https://images.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2F98G7zRNJBGuJiJmWcCTv0whXltA.jpg&f=1'
  },
  {
    id: 2,
    title: 'Blade Runner 2049',
    desc: 'I\'ve only seen the original Blade Runner once and it was a long time ago. I liked it but I just haven\'t got around to revisiting it. I mention this because even though I\'m not a die-hard fan of Blade Runner, I still found the plot of 2049 engrossing. It\'s a well put together mystery, I found that they constantly took the plot in unexpected directions and other than the trailer spoiling the return of Deckard, I was always excited about what was going to happen next. The movie pulls an excellent bait and switch at the end that really surprised me. They made the right decision to not repeat the formula of the first one and take the story to a new place. They also create some compelling subplots which is something that few movies get right.',
    score: 8.4,
    poster: 'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.traileraddict.com%2Fcontent%2Fwarner-bros-pictures%2Fblade-runner-2049-poster-7.jpg&f=1'
  },
  {
    id: 3,
    title: 'Star Wars: The Last Jedi',
    desc: 'I\'ve given The Last Jedi an 8. It\'s an epic and original Star Wars movie, with gorgeous cinematography and incredible music from the wonderful John Williams again. Rian Johnson has managed to expand the force mythology, inject some good ol\' humor back into the saga, and throw in some wonderful surprises, that I believe, we all needed. It seems like many of you do not like change, or are not prepared to enjoy a Star Wars movie that takes risks. This movie takes huge risks; it dares to offer something fresh in a franchise that is over 40 years old. It also pays homage to the original trilogy in a beautiful and tasteful way. So, no, I do NOT understand the haters out there. Nevertheless, it\'s not a perfect movie. There are some risks that Johnson takes, that will upset some fans, but some of those decisions have made me ponder the force in a new way.',
    score: 7.7,
    poster: 'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fmilnersblog.files.wordpress.com%2F2017%2F07%2Fthe-last-jedi-unofficial-poster-by-preedee-thinnakorn-na-ayudhya-fan-art.jpg&f=1'
  },
  {
    id: 4,
    title: 'Dunkirk',
    desc: 'Make no mistake, from a technical perspective Dunkirk is an absolute achievement in filmmaking. Shot in portion on IMAX and completely on film, it\'s a visually gorgeous movie with breathtaking cinematography of dogfights in the sky and battles at sea. The sound effects and mix are possibly the best I\'ve ever heard in a film! The gunshots are and loud, frightening, and realistic and every scene with a plane closing in sounds as if it i flying right above the audience making for an all the more immersive experience. And as always, Hans Zimmer delivers another excellent and powerful score that is one of the best I\'ve heard in a film in quite sometime.',
    score: 8.2,
    poster: 'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.traileraddict.com%2Fcontent%2Fwarner-bros-pictures%2Fdunkirk-poster-7.jpg&f=1'
  },
  {
    id: 5,
    title: 'Logan',
    desc: 'The word \'perfect\' is very objective especially when it comes to film. While Logan may not be a perfect film, it is most certainly a perfect comic book film. It is a masterpiece of the most epic proportions and leaves us with a brilliant swan song for producer and star Hugh Jackman in his final outing as Wolverine. The film, directed brilliantly by James Mangold, is a two plus hour comic book fan\'s wet dream as we see the version of Wolverine every fan has wanted to see for nearly two decades. While many will be very sad to see Jackman step down from the role, he couldn\'t have picked a better or more satisfying film to end his cinematic legacy with.',
    score: 8.2,
    poster: 'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2Fx75pHBRH3UdRQtP52k8MIOLryW8.jpg&f=1'
  }
];
console.log(movies);
var moviesElement = movies.map( movie => {
  return React.createElement('li', {key: movie.id},
    React.createElement('h2', {}, movie.title),
    React.createElement('p', {}, movie.desc),
    React.createElement('img', {src: movie.poster, style: {height: '200px'}}, )
  )
});

var element = React.createElement('div', {},
  React.createElement('h1', {}, 'Movie List'),
  React.createElement('ul', {}, moviesElement)
);

ReactDOM.render(element, document.getElementById('app'));
