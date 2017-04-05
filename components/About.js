import ReactDOM from 'react-dom';
import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

 var About = React.createClass({
    render: function() {
        return (
            <div id="about-view">
                <ReactCSSTransitionGroup 
                    transitionName="fade-transition" 
                    transitionAppear={true} 
                    transitionAppearTimeout={350}
                    transitionEnterTimeout={350}
                    transitionLeaveTimeout={50}>
                    <div key='about-content' className="about-container">
                        <span onClick={ this.props.closeButton } className="icon icon-cross"/>
                        <div className="col-xs-12 col-sm-11">
                            <h1>
                                About
                            </h1>
                        </div>
                        <div>
                            <img src="../img/matt.png" />
                            <div className="col-xs-12 col-sm-11">
                                <p>
                                I currently work as a designer/developer for <a href="http://bevspot.com" target="blank_">BevSpot</a>, a bar management software company. My responsibilities include anything from implementing UI improvements that enhance our customers' experiences to full-on new feature designs and standalone tools.
                                </p>
                                <p>
                                I graduated with a BFA in Graphic Design and Interactive Media from <a href="http://www.northeastern.edu" target="blank_">Northeastern University</a>.
                                </p>
                                <p>
                                In 2015, I did a co-op as a junior front&#45;end developer at <a href="http://yeti.co" target="blank_">Yeti</a>, an app and software development agency in San Francisco. Working with their design director, I did the rebranding of the SF State College of Business. Also, I helped develop supply chain management software for Paradata.
                                </p>
                                <p>
                                Before that, I completed a co-op on the digital creative team at <a href="http://wunderman.de" target="blank_">Wunderman</a> in Frankfurt, where I worked on brands such as Adidas, Land Rover, and Jaguar.
                                </p>
                            </div>
                        </div>
                    </div>
                </ReactCSSTransitionGroup>
            </div>
        );
    }
});

export default About;