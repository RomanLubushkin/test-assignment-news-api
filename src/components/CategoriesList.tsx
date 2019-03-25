import * as React from 'react';
import {ListGroup, ListGroupItem} from 'reactstrap';
import {inject, observer} from 'mobx-react';
import {buildNewsListUrl, InjectProps} from '../store/meta';
import AppStore from '../store/AppStore';
import {Link} from 'react-router-dom';

interface CategoriesListProps {
    appStore?: AppStore;
}

@inject((props: InjectProps) => ({appStore: props.appStore}))
@observer
class CategoriesList extends React.Component<CategoriesListProps> {
    render() {
        const appStore = this.props.appStore!;
        const {country, categories, category: currentCategory} = appStore;
        return (
            <div className="categories-list">
                <h3>Categories:</h3>
                <ListGroup flush>
                    {categories.map(function (category: string, index: number) {
                        return (
                            <Link key={index} to={buildNewsListUrl(category, country)} className="categories-list-link">
                                <ListGroupItem active={currentCategory === category} tag="button">
                                    {category}
                                </ListGroupItem>
                            </Link>
                        );
                    })}
                </ListGroup>
            </div>
        );
    }
}

export default CategoriesList;