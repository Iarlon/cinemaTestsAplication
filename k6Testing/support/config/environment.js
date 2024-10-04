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
        http_req_duration: ['p(95)<5000'],
        http_req_failed: ['rate<0.05'],
        http_reqs: ['rate>40']
    },
    stress: {
        http_req_duration: ['p(95)<5000'],
        http_req_failed: ['rate<0.10'],
        http_reqs: ['rate>80']
    },
    scalability: {
        http_req_duration: ['p(95)<5000'],
        http_req_failed: ['rate<0.10'],
        http_reqs: ['rate>50']
    },
    pike: {
        http_req_duration: ['p(95)<5000'],
        http_req_failed: ['rate<0.10'],
        http_reqs: ['rate>100']
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
            smokeTestFlow:{
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
            loadTestFlow: {
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
            loadTestFlowComun: {
                setupTimeout:'2m',
                teradownTimeout:'2m',
                stages: [
                    {duration: '30s', target: 100},
                    {duration: '30s', target: 200},
                    {duration: '30s', target: 300},
                    {duration: '1m', target: 300},
                    {duration: '30s', target: 100}
                  ],
                    rps: 100,
                    thresholds: thresholds.default
            },
            spikeTestFlow: {
                stages:[
                    {duration: '10s', target: 300},
                    {duration: '10s', target: 2000},
                    {duration: '10s', target: 300},
                    {duration: '5s',  target: 0}
                ],
                thresholds: thresholds.pike
            },
            metrics: {

            },
            scalabilityTestFlow:{
                stages:[
                    {duration: '3s', target: 10},
                    {duration: '3s', target: 20},
                    {duration: '10s', target: 50},
                    {duration: '3s', target: 100},
                    {duration: '3s', target: 150},
                    {duration: '10s', target: 250},
                    {duration: '3s', target: 300},
                    {duration: '3s', target: 350},
                    {duration: '10s', target: 500},
                    {duration: '3s', target: 600},
                    {duration: '3s', target: 700},
                    {duration: '10s', target: 1000},
                    {duration: '3s', target: 1200},
                    {duration: '3s', target: 1400},
                    {duration: '10s', target: 2000},
                    {duration: '20s', target: 0}
                ],
                rps:200,
                thresholds: thresholds.scalability
            },
            stressTestFlow:{
                stages: [
                    {duration: '30s', target: 300 },
                    {duration: '1m', target: 600 },
                    {duration: '2m', target: 600 },
                    {duration: '1m', target: 300 },
                    {duration: '30s', target: 0 }
                    ],
                    rps: 150,
                    thresholds: thresholds.stress
            }
        }
    }
}