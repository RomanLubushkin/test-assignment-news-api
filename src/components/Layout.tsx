import * as React from 'react';
import {Col, Container, Row} from 'reactstrap';
import CountriesList from './CountriesList';
import CategoriesList from './CategoriesList';
import PageTitle from './PageTitle';
import {inject, observer} from 'mobx-react';
import {InjectProps} from '../store/meta';
import AppStore from '../store/AppStore';
import Loader from './Loader';

interface LayoutProps {
    appStore?: AppStore;
}

@inject((props: InjectProps) => ({appStore: props.appStore}))
@observer
class Layout extends React.Component<LayoutProps> {
    render() {
        const appStore = this.props.appStore!;
        const {isLoading} = appStore;
        const {children} = this.props;

        return (
            <div className="layout">
                <Container className="page-container">
                    <Row>
                        <Col xs="12" md="2">
                            <CountriesList/>
                            <CategoriesList/>
                        </Col>
                        <Col xs="12" md="10">
                            <PageTitle/>
                            {children}
                        </Col>
                    </Row>
                </Container>
                {isLoading && <Loader/>}
            </div>
        );
    }
}

export default Layout;