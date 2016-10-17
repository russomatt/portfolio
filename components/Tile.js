import ReactDOM from 'react-dom';
import React from 'react';
import Project from './Project.js';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

 var Tile = React.createClass({
        getInitialState: function() {
        return {
            showThisProject: false,
            data: {}
        };
    },
    componentDidMount: function() {
        var that = this;
        that.setState({
            data: this.props.data
        });
    },
    showProject: function() {
        var that = this;
        that.setState({
            showThisProject: this.props.isProjectShown,
        });
        that.props.toggleProject();
    },
    render: function() {
        const {
            data,
            id,
            role,
            title,
            subTitle
        } = this.props
        var project = (
            this.state.data.project ?  
                (<Project key={ this.state.data.id } data={ this.state.data } closeProject={ this.showProject } />): ""
            );
        var projectNode = (
                this.state.showThisProject ? project : ""
            );
        return (
            <div>
                <ReactCSSTransitionGroup 
                    transitionName="test-transition" 
                    transitionAppear={true} 
                    transitionAppearTimeout={500}
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>
                    { projectNode }
                </ReactCSSTransitionGroup>
                <div onClick={ this.showProject } className={ "tile " + "tile-" + id }>
                    <img src={ "../img/placeholder" + id + ".png" }/>
                    <div className="tile-info">
                        <div className="tile-text">
                            <div className="top-rule"></div>
                            <div className="tile-role"> { role } </div>
                            <div className="tile-title"> { title } </div>
                            <div className="tile-title"> { subTitle } </div>
                        </div>
                    </div>
            </div>
        </div>
        );
    }
});

export default Tile;