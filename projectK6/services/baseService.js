export class BaseService {
    constructor(baseUri) {
        this.baseUri = baseUri;
        this.response;
    }

    getResponse() {
        return this.response
    }
}