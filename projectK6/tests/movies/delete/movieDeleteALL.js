import { BaseChecks, BaseRest, ENDPOINTS, testConfig } from '../../../support/base/baseTest.js';

export const options = testConfig.options.smokeThresholds
const baseChecks = new BaseChecks
const baseUri = testConfig.environment.hml.url
const baseRest = new BaseRest(baseUri)

export default function() {
    const resGet = baseRest.get(ENDPOINTS.MOVIE_ENDPOINT)
    const movies = resGet.json()

    while (movies.length > 0) {
        let movie = movies[Math.floor(Math.random() * movies.length)];
        console.log(`Excluindo filme: ${movie._id}`);

        const resDel = baseRest.del(ENDPOINTS.MOVIE_ENDPOINT + `/${movie._id}`);
        baseChecks.checkStatusCode(resDel, 200);
    }
}