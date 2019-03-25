import * as React from 'react';
import {inject, observer} from 'mobx-react';
import {DEFAULT_CATEGORY, DEFAULT_COUNTRY, InjectProps} from '../store/meta';
import AppStore from '../store/AppStore';
import {RouteComponentProps} from 'react-router';
import NewsArticle from '../components/NewsArticle';
import Layout from '../components/Layout';
import {action} from 'mobx';

interface NewsPageProps extends RouteComponentProps<any> {
    appStore?: AppStore;
}

@inject((props: InjectProps) => ({appStore: props.appStore}))
@observer
class NewsPage extends React.Component<NewsPageProps> {

    componentDidMount() {
        this.update();
    }

    @action
    update() {
        const appStore = this.props.appStore!;
        appStore.category = this.props.match.params.category || DEFAULT_CATEGORY;
        appStore.country = this.props.match.params.country || DEFAULT_COUNTRY;
        appStore.index = this.props.match.params.index ? parseInt(this.props.match.params.index, 10) : null;
        console.log(appStore.index, this.props.match.params);
        appStore.fetchNews();
    }

    render() {
        const appStore = this.props.appStore!;
        const {isLoading} = appStore;
        return (
            <div className="news-page">
                <Layout>
                    {!isLoading && <NewsArticle/>}
                </Layout>
            </div>
        );
    }
}

export default NewsPage;