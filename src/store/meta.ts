import AppStore from './AppStore';
import {History} from 'history';

export type InjectProps = { appStore: AppStore, history: History };

export interface IArticle {
    source: {
        id: string,
        name: string,
    },
    author: string,
    title: string,
    description: string,
    url: string,
    urlToImage: string,
    publishedAt: string,
}

export enum Routes {
    MAIN_PAGE = '/',
    NEwS_LIST_PAGE = '/:category/:country',
    NEWS_ARTICLE_PAGE = '/:category/:country/:index',
    NOT_FOUND = '/404'
}

export const DEFAULT_CATEGORY = 'all';
export const DEFAULT_COUNTRY = 'all';

export function buildArticleUrl(category: string, country: string, index: number): string {
    return `/${category}/${country}/${index}`;
}

export function buildNewsListUrl(category: string, country: string): string {
    return `/${category}/${country}`;
}