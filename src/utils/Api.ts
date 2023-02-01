import { ApiConfig, API_CONFIG, perPage } from './constants';


class Api {
  _baseURL: string;
  _headers: ApiConfig['headers']

  constructor(options: ApiConfig) {
    this._baseURL = options.baseURL;
    this._headers = options.headers;
  }

  _checkResponse(res: Response) {
    console.log('res', res);
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getUserInfo(username: string) {
    return fetch(`${this._baseURL}/users/${username}`, {
      headers: { ...this._headers },
    })
      .then(this._checkResponse)
      .catch((err) => {
        console.log(err);
      });
  }

  getRepositories(username: string, page: number) {
    return fetch(
      `${this._baseURL}/users/${username}/repos?page=${page}&per_page=${perPage}`,
      {
        headers: { ...this._headers },
      }
    )
      .then(this._checkResponse)
      .catch((err) => {
        console.log(err);
      });
  }
}

const api = new Api(API_CONFIG);
export default api;
