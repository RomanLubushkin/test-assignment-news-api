import * as React from 'react';
import {inject, observer} from 'mobx-react';
import {InjectProps} from '../store/meta';
import AppStore from '../store/AppStore';
import {Redirect} from 'react-router';

interface NewsArticleProps {
    appStore?: AppStore;
}

@inject((props: InjectProps) => ({appStore: props.appStore}))
@observer
class NewsArticle extends React.Component<NewsArticleProps> {
    render() {
        const appStore = this.props.appStore!;
        const {currentArticle: article, index} = appStore;
        if (index === null) {
            return null;
        } else if (article) {
            return (
                <div className="news-article">
                    <h2>{article.title}</h2>
                    <img src={article.urlToImage}/>
                    <p>{article.description}</p>
                    <a target="_blank" href={article.url}>{article.url}</a>
                </div>
            )
        } else {
            return <Redirect to="/404"/>;
        }
    }
}

export default NewsArticle;