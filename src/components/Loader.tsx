import * as React from 'react';
import {Spinner} from 'reactstrap';

interface LoaderProps {
}

class Loader extends React.Component<LoaderProps> {
    render() {
        return (
            <div className="loader">
                <Spinner color="primary" className="spinner"/>
            </div>
        );
    }
}

export default Loader;