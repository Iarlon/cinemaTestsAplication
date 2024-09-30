import { check }  from 'k6';

export class BaseChecks {
    checkStatusCode (response, expectStatus = 200){
        check(response, {
            'status code check': (r) => r.status === expectStatus,
        })
    }
    checkBodyMessage (response, expectMessage){
        check(response, {
            'body check message': (r) => JSON.parse(r.body).message === expectMessage,
        })
    }
    checkResponseTime (response, expectTime = 200){
        check(response, {
            'time check': (r) => r.timings.duration < expectTime,
        })
    }
    checkBodySize (response, expectSize = 5000){
        check(response, {
            'response body size check': (r) => r.body.length < expectSize,
        })
    }
  
}
