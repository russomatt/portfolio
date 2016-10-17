import ReactDOM from 'react-dom';
import React from 'react';
import $ from 'jquery';
import TileList from './TileList.js';

 var Work = React.createClass({
    getInitialState: function() {
        return {
            filter: "all",
            data: {}
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
    render: function() {
        return (
            <div className="container work-view">
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
                    <div className="col-xs-3 " onClick={ this.printFilter }>
                        <span className={ this.state.filter == "print" ? "filter filter-active" : "filter"}>Print</span>
                    </div>
                    <div className="col-xs-3 " onClick={ this.otherFilter }>
                        <span className={ this.state.filter == "other" ? "filter filter-active" : "filter"}>Other</span>
                    </div>
                </div>
                <TileList data={this.state.data} 
                        isProjectShown={this.props.isProjectShown}
                        toggleProject={ this.props.toggleProject }
                        page={"work"}
                        filter={ this.state.filter }/>
            </div>
        );
    }
});

export default Work;