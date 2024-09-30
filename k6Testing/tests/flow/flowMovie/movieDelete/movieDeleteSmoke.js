import { BaseChecks, BaseRest, ENDPOINTS, testConfig } from '../../../../support/base/baseTest.js';
import { sleep } from 'k6';
import moviePost from '../../../movies/create/moviePost.js';

export const options = testConfig.options.scenarios.loadTestDeleteMovie
const baseChecks = new BaseChecks
const baseUri = testConfig.environment.hml.url
const baseRest = new BaseRest(baseUri)

export function setup() {
    moviePost()
}

export default function() {
    const resGet = baseRest.get(ENDPOINTS.MOVIE_ENDPOINT)
    const movies = resGet.json()
    sleep(0.033)
    
    let movie = movies[Math.floor(Math.random() * movies.length)];

    const resDel = baseRest.del(ENDPOINTS.MOVIE_ENDPOINT + `/${movie._id}`)
    baseChecks.checkStatusCode(resDel, 200)
}