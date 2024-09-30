const thresholds = {
    smoke: {
        http_req_duration: ['p(100)<2000'],
        http_req_failed: ['rate<0.05']
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
            loadTestDeleteMovie: {
                stages: [
                    {duration: '5s', target: 50},
                    {duration: '10s', target: 100},
                    {duration: '10s', target: 150},
                    {duration: '30s', target: 150},
                    {duration: '5s', target: 100}
                  ],
                    rps: 30,
                    thresholds: thresholds.default
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