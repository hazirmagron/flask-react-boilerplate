/**
 * Created by mac on 2016-12-16.
 */
var React = require('react');
var ReactDOM = require('react-dom');

class Site extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <h1>Flask / react</h1>
            </div>
        );
    }
}


ReactDOM.render(
    <Site />,
    document.getElementById('site')
);