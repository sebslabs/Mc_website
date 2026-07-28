const https = require('https');
const movies = ['Deadpool Wolverine', 'Inside Out 2', 'Dune Part Two', 'Oppenheimer', 'Spider-Man Across the Spider-Verse', 'Furiosa'];
movies.forEach(m => {
  https.get('https://www.themoviedb.org/search?query=' + encodeURIComponent(m), {
    headers: { 'User-Agent': 'Mozilla/5.0' }
  }, res => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      const match = data.match(/src=\"(https:\/\/media\.themoviedb\.org\/t\/p\/w94_and_h141_bestv2\/[^\"]+\.jpg)\"/);
      if (match) {
        console.log(m + ': ' + match[1].replace('w94_and_h141_bestv2', 'w600_and_h900_bestv2'));
      } else {
        console.log(m + ': NOT FOUND');
      }
    });
  });
});
