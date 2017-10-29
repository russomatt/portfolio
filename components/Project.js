import ReactDOM from 'react-dom';
import React from 'react';

 var Project = React.createClass({
    getInitialState: function() {
        return {
            data: {}
        };
    },
    componentDidMount: function() {
        var that = this;
        that.setState({
            data: this.props.data.poject,
        });
    },
    closeProject: function() {
        var el = document.getElementById('body');
        el.style.overflow = "initial";
        this.props.showProject(false, null);
    },
    stopScroll: function() {
        var el = document.getElementById('body');
        el.style.overflow = "hidden";
    },
    render: function() {
        var that = this;
        var i = 0;

        var imgNodes = this.props.data.project.img != undefined ?
        this.props.data.project.img.map( function(img){
            if(that.props.data) {
                i = i + 1;
                return (
                    <div key={"img"+that.props.data.id+"-"+i} className="col-xs-12 col-sm-10 col-sm-offset-1 project-image">
                        <img src={ img }/>
                    </div> );
            } 
        }) : "";
        var vidNodes = this.props.data.project.vid != undefined ?
        this.props.data.project.vid.map( function(vid){
            if(that.props.data) {
                i = i + 1;
                return (
                    <div key={"vid"+that.props.data.id+"-"+i} className="col-xs-12 col-sm-10 col-sm-offset-1 project-video">
                        <iframe src={ vid } frameborder="0" allowfullscreen></iframe>
                    </div> );
            }
        }) : "";
        var parseDescription = function() {
            if( that.props ) {
                var arr = that.props.data.project.description.split('|');
                var elArray = [];
                var linkKey = 0;
                var brKey = 0;
                for (var i = 0; i < arr.length; i++) {
                    if (arr[i].indexOf('*') >= 0) {
                        linkKey = linkKey + 1;
                        var linkArr = arr[i].split('*'); 
                        elArray.push((<a key={ 'link-' + linkKey } href={ linkArr[0] } target="blank_">{ linkArr[1] }</a>));
                    } else if (arr[i].indexOf('~') >= 0) {
                        brKey = brKey + 1;
                        var brArr = arr[i].split('~');
                        elArray.push(brArr[0]);
                        elArray.push((<span key={ 'break-' + brKey }><br/><br/></span>));
                        elArray.push(brArr[1]);
                    } else {
                        elArray.push( arr[i] );
                    }
                }
                return elArray;
            } else return "";
        }
        var descArr = parseDescription();
        var description = descArr;
        var headerStyles = "url('" + this.props.data.project.bg + "')";
        var styles = {
            bg: {
                background: headerStyles,
                backgroundSize: 'cover',
            },
        }
        return (
            <div id="project-view" onLoad={this.stopScroll}>
                <div className="close-button"
                    onClick={ this.closeProject }>
                        <span className="icon icon-cross"></span>
                </div>
                <div id="project-header" style={ styles.bg }>
                    <div className="container">
                        <div className="back-button" onClick={ this.closeProject }>
                            <h2>
                                <span className="icon icon-arrow-left2"></span>
                                Close&nbsp;Project
                            </h2>

                        </div>
                        <div className="title-container">
                            <div className="main-title">
                                <h1>{ this.props.data.project.title }</h1>
                            </div>
                            <div>
                                <h1>{ this.props.data.project.subTitle }</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container content-container">
                    <div className="col-xs-12 col-sm-8 col-sm-offset-1 description">
                        <p>{ description }</p>
                    </div>
                    { imgNodes }
                    { vidNodes }
                </div>
            </div>
        );
    }
});

export default Project;