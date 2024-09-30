import { sleep } from 'k6';
import { BaseChecks , BaseRest, ENDPOINTS, testConfig, } from '../../../support/base/baseTest.js';

export const options = {...testConfig.options.scenarios.smokeTest}
const baseChecks = new BaseChecks;
const baseUri = testConfig.environment.hml.url;
const baseRest = new BaseRest(baseUri);

export function setup () {
    const resGet = baseRest.get(ENDPOINTS.MOVIE_ENDPOINT)

    baseChecks.checkStatusCode(resGet, 200)
    
    return {filme: resGet.json()}
}

export default function(data) {
    const movies = data.filme
    let movie = movies[Math.floor(Math.random() * movies.length)];

    const payload = {
        title: `modificadooooo`,
        description: `Descrição modificada`,
        launchdate: 'launchDate',
        showtimes: ['oneDayAfterLaunchDate']
    }
     
    const resPut = baseRest.put(ENDPOINTS.MOVIE_ENDPOINT + `/${movie._id}`, payload)
    baseChecks.checkStatusCode(resPut, 200)
    sleep(1)
}