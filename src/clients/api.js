import request from 'browser-request';

class ApiClient {
    constructor(config) {
        this.baseUrl = config.baseUrl;
    }

    getData() {
      const options = this._getDataRequestOptions();
      return this._makeRequest(options);
    }

    _getDataRequestOptions() {
      return {
        method: 'GET',
        url: `${this.baseUrl}/data`
      };
    }

    _makeRequest(options) {
      return new Promise((resolve, reject) => {
          request(options, (err, res, body) => {
              if (err) reject(err);
              else resolve(body);
          });
      });
    }
}

const config = { baseUrl: '/api' };
export const Api = new ApiClient(config);
