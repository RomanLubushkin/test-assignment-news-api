import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import MainPage from './pages/MainPage';
import NewsPage from './pages/NewsPage';
import NotFound from './pages/NotFound';
import {Routes} from './store/meta';

class App extends Component {
    render() {
        return (
            <div className="app">
                <Switch>
                    <Route exact path={Routes.MAIN_PAGE} component={MainPage}/>
                    <Route exact path={Routes.NEwS_LIST_PAGE} component={MainPage}/>
                    <Route exact path={Routes.NEWS_ARTICLE_PAGE} component={NewsPage}/>
                    <Route path={Routes.NOT_FOUND} component={NotFound}/>
                </Switch>
            </div>
        );
    }
}

export default App;
