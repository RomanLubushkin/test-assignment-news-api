import {DEFAULT_CATEGORY, DEFAULT_COUNTRY, IArticle} from '../store/meta';

const API_URL = 'https://newsapi.org/v2/top-headlines/';
const API_KEY = 'b9903aac73ea4297b730ff8d44fd974f';

type APIParams = { [key: string]: string };
type APICallback = (articles: IArticle[] | null, error?: string) => void;

export function fetchNews(category: string, country: string, callback: APICallback) {
    const url = `${API_URL}${buildUrlParams(category, country)}`;
    const headers = new Headers();
    headers.append('X-Api-Key', API_KEY);

    console.debug(`News API request - url: ${url}, headers: `, headers);

    fetch(url, {headers})
        .then(response => response.json())
        .then((data) => {
            console.debug('News API response - data: ', data);
            callback(data.articles)
        })
        .catch((error: string) => {
            console.debug('News API error - error: ', error);
            callback(null, error)
        });
}

function buildUrlParams(category: string, country: string): string {
    const params: APIParams = {language: 'ru', pageSize: '20'};

    if (category !== DEFAULT_CATEGORY) {
        params.category = category;
    }
    if (country !== DEFAULT_COUNTRY) {
        params.country = country;
    }

    return ['?', Object.keys(params).map(k => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`).join('&')].join('');
}

