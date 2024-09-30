import { sleep } from 'k6';
import { BaseChecks , BaseRest, ENDPOINTS, testConfig, } from '../../../support/base/baseTest.js';

export const options = {...testConfig.options.scenarios.smokeTest}
const baseChecks = new BaseChecks;
const baseUri = testConfig.environment.hml.url;
const baseRest = new BaseRest(baseUri);

export function setup () {
    const resGet = baseRest.get(ENDPOINTS.TICKET_ENDPOINT)

    baseChecks.checkStatusCode(resGet, 200)
    
    return {ticket: resGet.json()}
}

export default function(data) {
    const tickets = data.ticket
    let ticket = tickets[Math.floor(Math.random() * tickets.length)];
    let ticketId = ticket._id
    console.log(ticketId)

    const payload = {
        "movieId": "modificado",
        "userId": "alguém",
        "seatNumber": 10,
        "price": 2,
        "showtime": "2024-09-25T18:08:47.428Z"
      }
     
    const resPut = baseRest.put(ENDPOINTS.TICKET_ENDPOINT + `/${ticketId}`, payload)
    baseChecks.checkStatusCode(resPut, 200)
    sleep(1)
}