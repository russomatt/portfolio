import ReactDOM from 'react-dom';
import React from 'react';
import $ from "jquery";

import Nav from './Nav.js';
import TileList from './TileList.js';


 var Home = React.createClass({
        getInitialState: function() {
        return {
            data: {},
            showProject: this.props.isProjectShown
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

    render: function() {
        return (
            <div className="home-view">
                <div className="container">
                    <div className="row title-box">
                        <div className="titles col-xs-12 col-sm-12">
                            <h1>Mostly <strong>Design</strong></h1>
                            <h1>Some <strong>Development</strong></h1>
                            <span className="large-divider">/</span>
                        </div>
                    </div>
                    <div className="intro-text col-xs-12 col-md-6 col-md-push-6">
                        <div className="top-rule"></div>
                            <h3>Hello, my name is Matt.</h3>
                        <div className="row col-xs-12 col-sm-12">
                            <p>I am a designer working in both pixels and front&#45;end code, currently residing in Boston. I'm passionate about interactive experiences, data visualizations, and intuitive communication. Take a look at my work and feel free to get in touch.</p>
                        </div>
                    </div>
                    <TileList data={this.state.data}
                        isProjectShown={this.props.isProjectShown}
                        toggleProject={ this.props.toggleProject }
                        page={"home"}/>
                    <div className="col-xs-12 col-md-6">
                        lololol
                    </div>
                </div>
            </div>
        );
    }
});

export default Home;