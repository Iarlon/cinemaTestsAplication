import { BaseChecks, BaseRest, ENDPOINTS, testConfig } from '../../../../support/base/baseTest.js';
import {sleep} from 'k6'

export const options = {
    vus: 1,
    duration: '1s'
}
const baseChecks = new BaseChecks
const baseUri = testConfig.environment.hml.url
const baseRest = new BaseRest(baseUri)

export function setup() {
    const resGet = baseRest.get(ENDPOINTS.MOVIE_ENDPOINT)

    baseChecks.checkStatusCode(resGet, 200)
    
    return {filme: resGet.json()}
}

export default function(data) {
    const movies = data.filme
    let movie = movies[Math.floor(Math.random() * movies.length)];
     
    const resGet = baseRest.put(ENDPOINTS.MOVIE_ENDPOINT + `/${movie._id}`)
    console.log(resGet.json())
    sleep(1)
}

