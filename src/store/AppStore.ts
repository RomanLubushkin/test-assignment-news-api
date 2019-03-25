import {action, computed, observable} from 'mobx';
import {DEFAULT_CATEGORY, DEFAULT_COUNTRY, IArticle} from './meta';
import {fetchNews} from '../api/NewsAPI';

export default class AppStore {
    countries = ['all', 'de', 'fr', 'gb', 'it', 'jp', 'nl', 'nz', 'pl', 'ru', 'us'];
    categories = ['all', 'business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
    fetchedCountry: string | null = null;
    fetchedCategory: string | null = null;

    @observable isLoading: boolean = false;
    @observable error?: string;
    @observable category: string = DEFAULT_CATEGORY;
    @observable country: string = DEFAULT_COUNTRY;
    @observable index: number | null = null;
    @observable articles: IArticle[] | null = null;

    fetchNews(): void {
        const shouldLoad = (
            !this.isLoading &&
            (this.fetchedCountry !== this.country || this.fetchedCategory !== this.category)
        );

        if (shouldLoad) {
            this.isLoading = true;
            fetchNews(this.category, this.country, this.onFetchNewsResponse.bind(this, this.category, this.country));
        }
    }

    @action
    onFetchNewsResponse(category: string, country: string, articles: IArticle[] | null, error?: string) {
        this.isLoading = false;

        if (articles && !error) {
            this.fetchedCategory = category;
            this.fetchedCountry = country;
            this.articles = articles;
        } else {
            console.error(error);
            this.error = 'Unable to fetch news, please try later or contact support.';
        }
    }

    @computed
    get hasData(): boolean {
        return !!(this.articles && this.articles.length);
    }

    @computed
    get didFetch(): boolean {
        return this.articles !== null;
    }

    @computed
    get currentArticle(): IArticle | null {
        return this.articles && this.index !== null ? this.articles[this.index] || null : null;
    }

    setCurrentCountry(country: string): void {
        this.country = this.countries.filter(item => item === country).length > 0 ? country : this.countries[0];
    }

    setCurrentCategory(category: string): void {
        this.category = this.categories.filter(item => item === category).length > 0 ? category : this.categories[0];
    }
}