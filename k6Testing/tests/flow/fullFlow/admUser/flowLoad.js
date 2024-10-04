import { BaseChecks , BaseRest, ENDPOINTS, testConfig, deleteAll} from '../../../../support/base/baseTest.js';
import { SharedArray } from 'k6/data'
import { sleep } from 'k6';

export const options = testConfig.options.scenarios.loadTestFlow
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
      "showtimes": `${movie.showtimes}`,
      "createdByVU": __VU
    }
    
    const resPost = baseRest.post(ENDPOINTS.MOVIE_ENDPOINT, payload)
    sleep(1)

    const resGet = baseRest.get(ENDPOINTS.MOVIE_ENDPOINT)
    const moviesGet = resGet.json()
    
    let movieGet = moviesGet.find(m => m.createdByVU === __VU)

    if (!movieGet) {
        console.log('Nenhum filme criado por este VU foi encontrado.');
        return;
    }

    const resGetId = baseRest.get(ENDPOINTS.MOVIE_ENDPOINT + `/${movieGet._id}`);
    sleep(1);

    const resDel = baseRest.del(ENDPOINTS.MOVIE_ENDPOINT + `/${movieGet._id}`);

    baseChecks.checkStatusCode(resDel, 200)

    baseChecks.checkStatusCode(resGetId, 200)

    baseChecks.checkStatusCode(resGet, 200)

    baseChecks.checkStatusCode(resPost, 201)
}

export function teardown() {
    deleteAll()
}