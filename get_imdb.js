const https = require('https');
const ids = {
  'film-1': 'tt6263850', // Deadpool 3
  'film-2': 'tt22022452', // Inside Out 2
  'film-3': 'tt15239678', // Dune 2
  'film-4': 'tt15398776', // Oppenheimer
  'film-5': 'tt9362722', // Spider-Verse
  'film-6': 'tt12037194'  // Furiosa
};
Object.keys(ids).forEach(id => {
  const options = {
    hostname: 'www.imdb.com',
    port: 443,
    path: '/title/' + ids[id] + '/',
    method: 'GET',
    headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36' }
  };
  https.request(options, res => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      const match = data.match(/https:\/\/m\.media-amazon\.com\/images\/M\/[^\"]+\.jpg/);
      if(match) console.log(id + ': ' + match[0]);
    });
  }).end();
});
