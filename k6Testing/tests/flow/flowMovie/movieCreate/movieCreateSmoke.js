import { BaseChecks , BaseRest, ENDPOINTS, testConfig, } from '../../../../support/base/baseTest.js';
import { SharedArray } from 'k6/data'

export const options = testConfig.options.scenarios.smokeTestCreateMovie
const baseChecks = new BaseChecks;
const baseUri = testConfig.environment.hml.url;
const baseRest = new BaseRest(baseUri);

const data = new SharedArray('movies', function () {
const jsonData = JSON.parse(open('../../../../data/dynamic/movie.json'));
    return jsonData.movies; 
  });

export default function() {
    let movies = data
    let movie = movies[Math.floor(Math.random() * movies.length)];
    const payload = {
        "title": `${movie.title}`,
      "description": `${movie.description}`,
      "launchdate": `${movie.launchdate}`,
      "showtimes": `${movie.showtimes}`
    }
    const res = baseRest.post(ENDPOINTS.MOVIE_ENDPOINT, payload)
    baseChecks.checkStatusCode(res, 201)

    const resGet = baseRest.get(ENDPOINTS.MOVIE_ENDPOINT)
    const moviesGet = resGet.json()
    
    let movieDel = moviesGet[Math.floor(Math.random() * moviesGet.length)];

    const resDel = baseRest.del(ENDPOINTS.MOVIE_ENDPOINT + `/${movieDel._id}`)
    baseChecks.checkStatusCode(resDel, 200)
}

export function teardown() {
    const resGet = baseRest.get(ENDPOINTS.MOVIE_ENDPOINT);

    baseChecks.checkStatusCode(resGet, 200);

    const movies = resGet.json();

    if (movies && movies.length > 0) {
        const movieIds = movies.map(movie => movie._id);
        
        console.log(`Excluindo filmes que sobraram...`);

        movieIds.forEach(id => {
            const resDel = baseRest.del(ENDPOINTS.MOVIE_ENDPOINT + `/${id}`);
            
            baseChecks.checkStatusCode(resDel, 200);
        });
    }
}