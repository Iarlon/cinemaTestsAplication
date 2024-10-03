import { BaseChecks, BaseRest, deleteAll, ENDPOINTS, testConfig } from '../../../../support/base/baseTest.js';

export const options = testConfig.options.scenarios.smokeTestListTicket
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
    
    const resGet = baseRest.get(ENDPOINTS.MOVIE_ENDPOINT)

    baseChecks.checkStatusCode(resGet, 200)
    
    const filme = resGet.json()
    const filmeAleatório = filme[Math.floor(Math.random() * filme.length)]

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }

    const payloadPost = {
        movieId: filmeAleatório._id,
        userId: filmeAleatório._id + 'User',
        seatNumber: getRandomInt(99),
        price: getRandomInt(60),
        showtime: '2024-09-25T18:08:47.428Z'
    }
    
    const resPost = baseRest.post(ENDPOINTS.TICKET_ENDPOINT, payloadPost)
        
    baseChecks.checkStatusCode(resPost, 201)
}

export default function() {
    const resGet = baseRest.get(ENDPOINTS.TICKET_ENDPOINT)

    baseChecks.checkStatusCode(resGet, 200)
}

export function teardown() {
    deleteAll()
}