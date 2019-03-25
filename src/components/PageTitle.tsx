import * as React from 'react';
import {inject, observer} from 'mobx-react';
import {DEFAULT_CATEGORY, DEFAULT_COUNTRY, InjectProps} from '../store/meta';
import AppStore from '../store/AppStore';

interface PageTitleProps {
    appStore?: AppStore;
}

@inject((props: InjectProps) => ({appStore: props.appStore}))
@observer
class PageTitle extends React.Component<PageTitleProps> {
    render() {
        const appStore = this.props.appStore!;
        const {category: currentCategory, country: currentCountry} = appStore;

        const category = currentCategory === DEFAULT_CATEGORY ? 'categories' : 'category';
        const country = currentCountry === DEFAULT_COUNTRY ? 'countries' : 'country';

        return (
            <h1 className="page-title">News from {currentCategory} {category} and {currentCountry} {country}</h1>
        );
    }
}

export default PageTitle;