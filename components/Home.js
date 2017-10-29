import ReactDOM from 'react-dom';
import React from 'react';
import $ from "jquery";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Nav from './Nav.js';
import TileList from './TileList.js';
import Project from './Project.js';

 var Home = React.createClass({
        getInitialState: function() {
        return {
            data: {},
            projectObj: {
                show: false,
                project: null
            }
        };
    },
    componentDidMount: function(){
        var that = this;
        var projects = $.getJSON('../projects.json', function (data) {
            that.setState({
                data: data
            });
        });
    },
    showProject: function(bool, projData) {
        this.setState({
            projectObj: {
                show: bool,
                project: projData
            }
        });
    },
    render: function() {
        return (
            <div id="home-view" className="home-view">
                <ReactCSSTransitionGroup 
                    transitionName="test-transition" 
                    transitionAppear={true} 
                    transitionAppearTimeout={500}
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}
                >
                    { this.state.projectObj.show &&
                        <Project
                            key={ this.state.projectObj.project.id }
                            data={ this.state.projectObj.project }
                            showProject={ this.showProject }
                        />
                    }
                </ReactCSSTransitionGroup>
                <div className="container">
                    <div className="row title-box">
                        <div className="titles col-xs-12 col-sm-12">
                            <h1> <strong>Design</strong></h1>
                            <h1> <strong>Development</strong></h1>
                            <span className="large-divider">/</span>
                        </div>
                    </div>
                    <div className="intro-text col-xs-12 col-md-6 col-md-push-6">
                        <div className="top-rule"></div>
                            <h3>Hello, my name is Matt.</h3>
                        <div className="row col-xs-12 col-sm-12">
                            <p>I am a designer working in both pixels and front&#45;end code, currently residing in Düsseldorf. I'm passionate about interactive experiences, data visualizations, and intuitive communication. Take a look at my work and feel free to get in touch.</p>
                        </div>
                    </div>
                    <TileList
                        data={ this.state.data }
                        showProject={ this.showProject }
                        page={"home"}
                        filter={ this.state.filter }
                    />
                    <div className="col-xs-12 col-md-6">
                        <div className="work-button">
                            <h3 onClick={ this.props.clickWork }>All Work</h3>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

export default Home;