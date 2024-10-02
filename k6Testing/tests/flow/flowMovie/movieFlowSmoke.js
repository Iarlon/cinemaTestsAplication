import { BaseChecks , BaseRest, ENDPOINTS, testConfig, } from '../../../support/base/baseTest.js';
import { SharedArray } from 'k6/data'
import { sleep } from 'k6';

export const options = testConfig.options.scenarios.smokeTest
const baseChecks = new BaseChecks;
const baseUri = testConfig.environment.hml.url;
const baseRest = new BaseRest(baseUri);
const maxAttempts = 10

const data = new SharedArray('movies', function () {
const jsonData = JSON.parse(open('../../../data/dynamic/movie.json'));
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
    
    const resPost = baseRest.post(ENDPOINTS.MOVIE_ENDPOINT, payload)
    sleep(1)
    

    const resGet = baseRest.get(ENDPOINTS.MOVIE_ENDPOINT)
    const moviesGet = resGet.json()
    
    let movieGet = moviesGet[0];

    for (let attempts = 0; attempts < maxAttempts; attempts++) {
        let resGetId = baseRest.get(ENDPOINTS.MOVIE_ENDPOINT + `/${movieGet._id}`);
        
        baseChecks.checkStatusCode(resGetId, 200)
        baseChecks.checkResponseTime(resGetId, 400)
        
        console.log('teste de get id ' + resGetId.status)
        
        if (resGetId.status === 200) {
            break;
        } else {
            movieGet = moviesGet[Math.floor(Math.random() * moviesGet.length)];
        }
    }

    for (let attempts = 0; attempts < maxAttempts; attempts++) {
        let resDel = baseRest.del(ENDPOINTS.MOVIE_ENDPOINT + `/${movieGet._id}`);
        
        baseChecks.checkStatusCode(resDel, 200)
        baseChecks.checkResponseTime(resDel, 400)
        
        console.log('teste de delete ' + resDel.status)
        
        if (resDel.status === 200) {
            break;
        } else {
            movieGet = moviesGet[Math.floor(Math.random() * moviesGet.length)];
        }
    }
    
    console.log('teste de get ' + resGet.status)
    console.log('teste de post ' + resPost.status)

    baseChecks.checkStatusCode(resGet, 200)
    baseChecks.checkResponseTime(resGet, 100)

    baseChecks.checkStatusCode(resPost, 201)
    baseChecks.checkResponseTime(resPost, 200)
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