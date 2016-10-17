import React from 'react'

export default React.createClass({
        getInitialState: function() {
        return {
            data: {}
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
                <Nav />

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
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque interdum justo eu purus porttitor, eget tristique ante cursus. Integer vitae augue sagittis, dapibus turpis a, rutrum sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                        </div>
                    </div>
                    <TileList data={this.state.data}/>
                    <div className="col-xs-12 col-md-6">
                        lololol
                    </div>
                </div>
            </div>
        );
    }
});
