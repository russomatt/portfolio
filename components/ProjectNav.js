import ReactDOM from 'react-dom';
import React from 'react';

 var ProjectNav = React.createClass({
    getInitialState: function() {
        return {
            scrolledPast: false
        };
    },
    componentDidMount: function() {
         document.getElementById('project-view').addEventListener('scroll', this.handleScroll);
    },

    componentWillUnmount: function() {
         document.getElementById('project-view').removeEventListener('scroll', this.handleScroll);
    },

    handleScroll: function(event) {
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
    },
    render: function() {
        return (
            <nav className={ this.state.scrolledPast ? "nav" : "nav project-nav"}>
                <div className="container">
                    <div className="col-xs-3">
                        <a href="">Home</a>
                    </div>
                    <div className="col-xs-3">
                        <a href="">About</a>
                    </div>
                    <div className="col-xs-3">
                        <a href="">Work</a>
                    </div>
                    <div className="col-xs-3">
                        <a href="">CV</a>
                    </div>
                </div>
            </nav>
        );
    }
});

export default ProjectNav;