import * as React from 'react';
import {Alert, Card, CardText, Col, Row} from 'reactstrap';
import {inject, observer} from 'mobx-react';
import {buildArticleUrl, IArticle, InjectProps} from '../store/meta';
import AppStore from '../store/AppStore';
import {Link} from 'react-router-dom';

interface NewsListProps {
    appStore?: AppStore;
}

@inject((props: InjectProps) => ({appStore: props.appStore}))
@observer
class NewsList extends React.Component<NewsListProps> {
    render() {
        const appStore = this.props.appStore!;
        const {isLoading, articles, category, country, hasData} = appStore;
        return (
            <div className="news-list">
                <Row>
                    {hasData ? (
                        articles!.map(function (article: IArticle, index: number) {
                            return (
                                <Col xs="6" key={index}>
                                    <Card body>
                                        <CardText>{article.title}</CardText>
                                        <Link to={buildArticleUrl(category, country, index)}>read more</Link>
                                    </Card>
                                </Col>
                            );
                        })
                    ) : (
                        !isLoading ? <Alert color="success">There is no news today, please back later, we will find something interesting for you.</Alert> : null
                    )}
                </Row>
            </div>
        );
    }
}

export default NewsList;