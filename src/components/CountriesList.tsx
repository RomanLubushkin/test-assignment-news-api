import * as React from 'react';
import {ListGroup, ListGroupItem} from 'reactstrap';
import {inject, observer} from 'mobx-react';
import {buildNewsListUrl, InjectProps} from '../store/meta';
import AppStore from '../store/AppStore';
import {Link} from 'react-router-dom';

interface CountriesListProps {
    appStore?: AppStore;
}

@inject((props: InjectProps) => ({appStore: props.appStore}))
@observer
class CountriesList extends React.Component<CountriesListProps> {
    render() {
        const appStore = this.props.appStore!;
        const {category, countries, country: currentCountry} = appStore;
        return (
            <div className="countries-list">
                <h3>Countries:</h3>
                <ListGroup flush>
                    {countries.map(function (country: string, index: number) {
                        return (
                            <Link key={index} to={buildNewsListUrl(category, country)} className="countries-list-link">
                                <ListGroupItem active={country === currentCountry} tag="button">
                                    {country}
                                </ListGroupItem>
                            </Link>
                        );
                    })}
                </ListGroup>
            </div>
        );
    }
}

export default CountriesList;