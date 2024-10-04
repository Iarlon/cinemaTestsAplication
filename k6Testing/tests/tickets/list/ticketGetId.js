import { BaseChecks, BaseRest, ENDPOINTS, testConfig } from '../../../support/base/baseTest.js';
import {sleep} from 'k6'

export const options = testConfig.options.smokeThresholds
const baseChecks = new BaseChecks
const baseUri = testConfig.environment.hml.url
const baseRest = new BaseRest(baseUri)

export function setup() {
    const resGet = baseRest.get(ENDPOINTS.TICKET_ENDPOINT)

    baseChecks.checkStatusCode(resGet, 200)
    
    return {ticket: resGet.json()}
}

export default function(data) {
    const tickets = data.ticket
    let ticket = tickets[Math.floor(Math.random() * tickets.length)];
     
    const resGet = baseRest.get(ENDPOINTS.TICKET_ENDPOINT + `/${ticket._id}`)
    console.log(resGet.json())
    sleep(1)
}