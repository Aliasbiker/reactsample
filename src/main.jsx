import React from 'react';
import ReactDOM from 'react-dom';

class MainComponent extends React.Component {
    render() {
        return <div><p>-Hello React-</p></div>;
    }
};

//export default MainComponent;

ReactDOM.render(<MainComponent />, document.getElementById('container'));
