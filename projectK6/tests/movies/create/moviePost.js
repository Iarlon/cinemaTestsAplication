import { sleep } from 'k6';
import { BaseChecks , BaseRest, ENDPOINTS, testConfig, } from '../../../support/base/baseTest.js';
import { SharedArray } from 'k6/data'

export const options = {...testConfig.options.scenarios.smokeTest}
const baseChecks = new BaseChecks;
const baseUri = testConfig.environment.hml.url;
const baseRest = new BaseRest(baseUri);

const data = new SharedArray('movies', function () {
const jsonData = JSON.parse(open('../../../data/dynamic/movie.json'));
    return jsonData.movies; 
  });


export default function() {
    console.log(data)
    data.forEach(movie => {
        const res = baseRest.post(ENDPOINTS.MOVIE_ENDPOINT, movie)
        
        baseChecks.checkStatusCode(res, 201)
        sleep(1)
    })
    sleep(1)
}