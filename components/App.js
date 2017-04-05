import React from 'react'
import { Link } from 'react-router'
import Nav from './Nav.js'
import Home from './Home.js'
import Work from './Work.js'
import About from './About.js'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default React.createClass({
    getInitialState: function() {
        return {
            pageShown: 'home',
            aboutShown: false,
            showProject: false
        };
    },
    showHome: function() {
        var that = this;
        that.setState({
            pageShown: 'home',
            showProject: false
        })
    },
    showWork: function() {
        var that = this;

        that.setState({
            pageShown: 'work',
            showProject: false
        })
    },
    toggleProject: function() {
        var that = this;
        that.setState({
            showProject: !that.state.showProject
        })
    },
    toggleAbout: function() {
        var that = this;
        that.setState({
            aboutShown: !that.state.aboutShown
        })
    },
    render() {
        var that = this;
        var showView = function () {
            if( that.state.pageShown == 'home') {
                return <Home isProjectShown={ that.state.showProject } toggleProject={ that.toggleProject } clickWork={ that.showWork }/>;
            } else if( that.state.pageShown == 'work') {
                return <Work isProjectShown={ that.state.showProject } toggleProject={ that.toggleProject } />;
            } else {
                return <Home isProjectShown={ that.state.showProject } toggleProject={ that.toggleProject } clickWork={ that.showWork }/>;
            }
        };
        var page = showView();
        var view = page;
        var about = this.state.aboutShown ? <About key='about' closeButton={ this.toggleAbout }/> : "";
    return (
      <div>
        <Nav clickHome={ this.showHome }
            clickWork={ this.showWork }
            clickAbout={ this.toggleAbout }
            pageShown={ this.state.pageShown }
            />
        { view }
                <ReactCSSTransitionGroup 
                    transitionName="about-transition" 
                    transitionAppear={true} 
                    transitionAppearTimeout={500}
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>
                        { about }
                </ReactCSSTransitionGroup>
      </div>
    )
  }
})
