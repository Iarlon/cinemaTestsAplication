const thresholds = {
    smoke: {
        http_req_duration: ['p(99)<2000'],
        http_req_failed: ['rate<0.05']
    },
    smokeCreate: {
        http_req_duration: ['p(99)<200'],
        http_req_failed: ['rate<0.05'],
        http_reqs: ['rate>98']
    },
    smokeCreateTicket: {
        http_req_duration: ['p(99)<300'],
        http_req_failed: ['rate<0.05'],
        http_reqs: ['rate>50']
    },
    smokeList: {
        http_req_duration: ['p(99)<100'],
        http_req_failed: ['rate<0.05'],
        http_reqs: ['rate>100']
    },
    smokeList: {
        http_req_duration: ['p(99)<50'],
        http_req_failed: ['rate<0.05'],
        http_reqs: ['rate>50']
    },
    smokeDelete: {
        http_req_duration: ['p(99)<400'],
        http_req_failed: ['rate<0.05'],
        http_reqs: ['rate>100']
    },
    default: {
        http_req_duration: ['p(95)<2000'],
        http_req_failed: ['rate<0.05']
    },
    stress: {
        http_req_duration: ['p(95)<2000'],
        http_req_failed: ['rate<0.10']
    },
    pike: {
        http_req_duration: ['p(95)<2000'],
        http_req_failed: ['rate<0.10']
    }
};

export const testConfig = {
    environment: {
        hml:{
            url: 'http://localhost:3000'
        }
    },
    options: {
        scenarios:{
            smokeTest:{
                stages:[
                    {duration: '2s', target: 3},
                    {duration: '5s', target: 5},
                    {duration: '2s', target: 3},
                    {duration: '1s', target: 0}
                ],
                thresholds: thresholds.smoke
           
            },
            smokeTestDeleteMovie: {
                stages: [
                    {duration: '20s', target: 20},
                    {duration: '10s', target: 0}
                  ],
                    thresholds: thresholds.smokeDelete
            },
            smokeTestChangeMovie: {
                stages: [
                    {duration: '20s', target: 20},
                    {duration: '10s', target: 0}
                  ],
                    thresholds: thresholds.smokeDelete
            },
            smokeTestListMovie: {
                stages: [
                    {duration: '20s', target: 20},
                    {duration: '10s', target: 0}
                  ],
                    rps: 100,
                    thresholds: thresholds.smokeList
            },
            smokeTestListTicket: {
                stages: [
                    {duration: '20s', target: 20},
                    {duration: '10s', target: 0}
                  ],
                    rps: 100,
                    thresholds: thresholds.smokeList
            },
            smokeTestCreateMovie: {
                stages: [
                    {duration: '20s', target: 20},
                    {duration: '10s', target: 0}
                  ],
                  rps:130,
                    thresholds: thresholds.smokeCreate
            },
            smokeTestCreateTicket: {
                stages: [
                    {duration: '20s', target: 20},
                    {duration: '10s', target: 0}
                  ],
                  rps:100,
                    thresholds: thresholds.smokeCreateTicket
            },
            loadTest: {
                stages: [
                    {duration: '30s', target: 100},
                    {duration: '30s', target: 200},
                    {duration: '30s', target: 300},
                    {duration: '1m', target: 300},
                    {duration: '30s', target: 100}
                  ],
                    rps: 50,
                    thresholds: thresholds.default
            },
            pikeTest: {
                stages:[
                    {duration: '10s', target: 300},
                    {duration: '10s', target: 700},
                    {duration: '10s', target: 300},
                    {duration: '5s',  target: 0}
                ],
                rps: 100,
                thresholds: thresholds.pike
            },
            metrics: {

            },
            breakPointTest:{
                stages:[
                    {duration: '3s', target: 100},
                    {duration: '3s', target: 1000},
                    {duration: '10s', target: 20000}
                ],
            },
            stressTest:{
                stages: [
                    {duration: '30s', target: 500 },
                    {duration: '1m', target: 500 },
                    {duration: '30s', target: 0 }
                    ],
                    rps: 150,
                    thresholds: thresholds.stress
            }
        }
    }
}