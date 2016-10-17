import ReactDOM from 'react-dom';
import React from 'react';

 var Nav = React.createClass({
    getInitialState: function() {
        return {
            scrolledPast: false
        };
    },
    componentDidMount: function() {
        if ( this.props.isProjectShown ){
            document.getElementById('project-view').addEventListener('scroll', this.handleScroll);
        }
    },

    componentWillUnmount: function() {
        if ( this.props.isProjectShown ) {
            document.getElementById('project-view').removeEventListener('scroll', this.handleScroll);
        }
    },

    handleScroll: function(event) {
        if ( this.props.isProjectShown ) {
            var elm = document.getElementById('project-view').scrollTop;
            var elmH = document.getElementById('project-header').scrollHeight;
            var that = this;

            if ( elm > elmH ) {
                that.setState({
                    scrolledPast: true,
                });
            } else {
                that.setState({
                    scrolledPast: false,
                });
            }
        }
    },
    render: function() {
        return (
            <nav className={this.state.scrolledPast ? "nav project-nav" : "nav"}>
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