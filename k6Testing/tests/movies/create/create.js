import { BaseChecks , BaseRest, ENDPOINTS, testConfig, } from '../../../support/base/baseTest.js';

export const options = {vus: 1, duration: "1s", iterations:1}
const baseChecks = new BaseChecks;
const baseUri = testConfig.environment.hml.url;
const baseRest = new BaseRest(baseUri);

export default function() {
    const payload = {
        "title": "blueberry short-design",
      "description": "Descrição do movie: Enim natus nulla blanditiis voluptas.",
      "launchdate": "2024-10-12T06:44:30.894Z",
      "showtimes": "k"
    }
    const res = baseRest.post(ENDPOINTS.MOVIE_ENDPOINT, payload)
    baseChecks.checkStatusCode(res, 201)
}