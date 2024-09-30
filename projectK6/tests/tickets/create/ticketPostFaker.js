import { sleep } from 'k6';
import { BaseChecks , BaseRest, ENDPOINTS, testConfig, } from '../../../support/base/baseTest.js';
import { SharedArray } from 'k6/data'

export const options = {...testConfig.options.scenarios.smokeTest}
const baseChecks = new BaseChecks;
const baseUri = testConfig.environment.hml.url;
const baseRest = new BaseRest(baseUri);

const data = new SharedArray('tickets', function () {
const jsonData = JSON.parse(open('../../../data/dynamic/ticket.json'));
    return jsonData.tickets; 
  });


export default function() {
    data.forEach(ticket => {
        const res = baseRest.post(ENDPOINTS.TICKET_ENDPOINT, ticket)
        
        baseChecks.checkStatusCode(res, 201)
        sleep(1)
        console.log(res.json())
    })
    sleep(1)
}