import { sleep } from 'k6';
import { BaseChecks , BaseRest, ENDPOINTS, testConfig, } from '../../../support/base/baseTest.js';

export const options = {...testConfig.options.scenarios.smokeTest}
const baseChecks = new BaseChecks;
const baseUri = testConfig.environment.hml.url;
const baseRest = new BaseRest(baseUri);

export function setup() {
    const resGet = baseRest.get(ENDPOINTS.MOVIE_ENDPOINT)

    baseChecks.checkStatusCode(resGet, 200)
    
    return {filme: resGet.json()}
}


export default function(data) {
    const filme = data.filme
    const filmeAleatório = filme[Math.floor(Math.random() * filme.length)]
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }

    const payload = {
        movieId: filmeAleatório._id,
        userId: filmeAleatório._id + 'User',
        seatNumber: getRandomInt(99),
        price: getRandomInt(60),
        showtime: '2024-09-25T18:08:47.428Z'
    }
    
    const res = baseRest.post(ENDPOINTS.TICKET_ENDPOINT, payload)
        
    baseChecks.checkStatusCode(res, 201)
    sleep(1)
}