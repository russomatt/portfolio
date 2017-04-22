import ReactDOM from 'react-dom';
import React from 'react';
import $ from 'jquery';
import TileList from './TileList.js';
import Project from './Project.js';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

var Work = React.createClass({
    getInitialState: function() {
        return {
            filter: "all",
            data: {},
            projectObj: {
                show: false,
                project: null
            }
        };
    },
    componentDidMount: function() {
        var that = this;
        var projects = $.getJSON('../projects.json', function (data) {
            that.setState({
                data: data
            });
        });
    },
    resetFilter: function () {
        this.setState({
            filter: "all"
        });
    },
    interactiveFilter: function() {
        this.setState({
            filter: "interactive"
        });
    },
    printFilter: function() {
        this.setState({
            filter: "print"
        });
    },
    otherFilter: function() {
        this.setState({
            filter: "other"
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
            <div className="container work-view">
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
                <div className="col-xs-12">
                    <h1>
                        All Work
                    </h1>
                </div>
                <div className="filter-list">
                    <div className="col-xs-3 " onClick={ this.resetFilter }>
                        <span className={ this.state.filter == "all" ? "filter filter-active" : "filter"}>All</span>
                    </div>
                    <div className="col-xs-3 " onClick={ this.interactiveFilter }>
                        <span className={ this.state.filter == "interactive" ? "filter filter-active" : "filter"}>Interactive</span>
                    </div>
                    <div className="col-xs-3 print-filter " onClick={ this.printFilter }>
                        <span className={ this.state.filter == "print" ? "filter filter-active" : "print-filter filter"}>Print</span>
                    </div>
                    <div className="col-xs-3 " onClick={ this.otherFilter }>
                        <span className={ this.state.filter == "other" ? "filter filter-active" : "filter"}>Other</span>
                    </div>
                </div>
                <TileList 
                        data={ this.state.data }
                        showProject={ this.showProject }
                        page={"work"}
                        filter={ this.state.filter }
                />
            </div>
        );
    }
});

export default Work;