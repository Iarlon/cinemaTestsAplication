import { BaseChecks, BaseRest, ENDPOINTS, testConfig } from '../../../support/base/baseTest.js';

export const options = testConfig.options.smokeThresholds
const baseChecks = new BaseChecks
const baseUri = testConfig.environment.hml.url
const baseRest = new BaseRest(baseUri)

export default function() {
    const resGet = baseRest.get(ENDPOINTS.TICKET_ENDPOINT)

    baseChecks.checkStatusCode(resGet, 200)
}