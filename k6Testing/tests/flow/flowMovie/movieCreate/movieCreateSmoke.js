import { BaseChecks , BaseRest, deleteAll, ENDPOINTS, testConfig, } from '../../../../support/base/baseTest.js';
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
}

export function teardown() {
    deleteAll()
}