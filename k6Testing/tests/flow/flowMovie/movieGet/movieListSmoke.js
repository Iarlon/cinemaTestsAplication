import { BaseChecks, BaseRest, ENDPOINTS, testConfig } from '../../../../support/base/baseTest.js';

export const options = testConfig.options.smokeThresholds
const baseChecks = new BaseChecks
const baseUri = testConfig.environment.hml.url
const baseRest = new BaseRest(baseUri)

export function setup() {
    const payload = {
        "title": "blueberry short-design",
      "description": "Descrição do movie: Enim natus nulla blanditiis voluptas.",
      "launchdate": "2024-10-12T06:44:30.894Z",
      "showtimes": "k"
    }
    const res = baseRest.post(ENDPOINTS.MOVIE_ENDPOINT, payload)
    baseChecks.checkStatusCode(res, 201)
}

export default function() {
    const resGet = baseRest.get(ENDPOINTS.MOVIE_ENDPOINT)

    baseChecks.checkStatusCode(resGet, 200)
}

export function teardown() {
    const res = baseRest.get(ENDPOINTS.MOVIE_ENDPOINT)
    const movies = res.json()

    let movie = movies[Math.floor(Math.random() * movies.length)];
    console.log(movie)

    const resDel = baseRest.del(ENDPOINTS.MOVIE_ENDPOINT + `/${movie._id}`)
    baseChecks.checkStatusCode(resDel, 200)
}