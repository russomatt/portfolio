import ReactDOM from 'react-dom';
import React from 'react';

 var Nav = React.createClass({
    render: function() {
        return (
            <nav className="nav">
                <div className="container">
                    <div className="col-xs-3">
                        <span onClick={ this.props.clickHome }>Home</span>
                    </div>
                    <div className="col-xs-3">
                        <span onClick={ this.props.clickAbout }>About</span>
                    </div>
                    <div className="col-xs-3">
                        <span onClick={ this.props.clickWork }>Work</span>
                    </div>
                    <div className="col-xs-3">
                        <a href="">CV</a>
                    </div>
                </div>
            </nav>
        );
    }
});

export default Nav;