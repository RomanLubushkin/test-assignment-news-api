import * as React from 'react';
import {inject, observer} from 'mobx-react';
import {DEFAULT_CATEGORY, DEFAULT_COUNTRY, InjectProps} from '../store/meta';
import AppStore from '../store/AppStore';
import {RouteComponentProps} from 'react-router';
import NewsList from '../components/NewsList';
import Layout from '../components/Layout';
import {action} from 'mobx';

interface MainPageProps extends RouteComponentProps<any> {
    appStore?: AppStore;
}

@inject((props: InjectProps) => ({appStore: props.appStore}))
@observer
class MainPage extends React.Component<MainPageProps> {

    componentDidMount() {
        this.update();
    }

    componentDidUpdate() {
        this.update();
    }

    @action
    update() {
        const appStore = this.props.appStore!;
        appStore.category = this.props.match.params.category || DEFAULT_CATEGORY;
        appStore.country = this.props.match.params.country || DEFAULT_COUNTRY;
        appStore.fetchNews();
    }

    render() {
        return (
            <div className="main-page">
                <Layout>
                    <NewsList/>
                </Layout>
            </div>
        );
    }
}

export default MainPage;