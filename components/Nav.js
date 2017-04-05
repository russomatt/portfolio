import ReactDOM from 'react-dom';
import React from 'react';

 var Nav = React.createClass({
    render: function() {
        return (
            <nav className="nav">
                <div className="container">
                    <div className={ this.props.pageShown == 'home' ? "col-xs-3 nav-active" :" col-xs-3"}>
                        <span onClick={ this.props.clickHome }>Home</span>
                    </div>
                    <div className="col-xs-3">
                        <span onClick={ this.props.clickAbout }>About</span>
                    </div>
                    <div className={ this.props.pageShown == 'work' ? "col-xs-3 nav-active" :" col-xs-3"}>
                        <span onClick={ this.props.clickWork }>Work</span>
                    </div>
                    <div className="col-xs-3">
                        <a href="../MatthewRussoCV.pdf" target="blank_">CV</a>
                    </div>
                </div>
            </nav>
        );
    }
});

export default Nav;