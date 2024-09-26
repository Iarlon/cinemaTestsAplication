import { sleep } from 'k6';
import { BaseChecks , BaseRest, ENDPOINTS, testConfig, } from '../../../support/base/baseTest.js';
import { SharedArray } from 'k6/data'

// export const options = {...testConfig.options.scenarios.smokeTest}
const baseChecks = new BaseChecks;
const baseUri = testConfig.environment.hml.url;
const baseRest = new BaseRest(baseUri);
export const options = {
    vus: 1,
    duration: '1s', 
  };

export default function() {
    const resGet = baseRest.get(ENDPOINTS.MOVIE_ENDPOINT)

    baseChecks.checkStatusCode(resGet, 200)

    const movies = resGet.json()
    let movie = movies[Math.floor(Math.random() * movies.length)];

    const payload = {
        title: `modificado`,
        description: `Descrição modificada`,
        launchdate: 'launchDate',
        showtimes: ['oneDayAfterLaunchDate']
    }
     
    const resPut = baseRest.put(ENDPOINTS.MOVIE_ENDPOINT + `/${movie._id}`, payload)
    baseChecks.checkStatusCode(resPut, 200)
    sleep(1)


}