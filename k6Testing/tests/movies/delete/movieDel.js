import { BaseChecks, BaseRest, ENDPOINTS, testConfig } from '../../../support/base/baseTest.js';
import { sleep } from 'k6';

export const options = testConfig.options.smokeThresholds
const baseChecks = new BaseChecks
const baseUri = testConfig.environment.hml.url
const baseRest = new BaseRest(baseUri)

export default function() {
    const resGet = baseRest.get(ENDPOINTS.MOVIE_ENDPOINT)
    const movies = resGet.json()

    let movie = movies[Math.floor(Math.random() * movies.length)];
    console.log(movie)
    sleep(1)

    const resDel = baseRest.del(ENDPOINTS.MOVIE_ENDPOINT + `/${movie._id}`)
    baseChecks.checkStatusCode(resDel, 200)
    sleep(1)

}