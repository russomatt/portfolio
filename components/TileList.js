import ReactDOM from 'react-dom';
import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Tile from './Tile.js';

var TileList = React.createClass({
        getInitialState: function() {
        return {
            data: this.props.data,
            showProject: this.props.isProjectShown
        };
    },
    render: function() {

        if ( this.props.data.length > 0 && this.props.page == "home") {

            var that = this;
            var tileNodes = this.props.data.map(function(content) {
                if( content.id < 7) {
                    return (
                        <div className={ content.id != 1 ? 'col-xs-12 col-md-6 tile ' + 'tile-' + content.id : 'col-xs-12 col-md-6 col-md-pull-6 tile ' + 'tile-' + content.id } key={ content.id }> 
                            <Tile
                                showProject={ that.props.showProject }
                                data={ content }
                                id={ content.id }
                                role={ content.project.role }
                                title={ content.project.title }
                                subTitle={ content.project.subTitle }
                            />
                        </div>
                    );
                }
                else return("");
            });

        }
        else if (this.props.data.length > 0 && this.props.page == "work") {

            var that = this;
            var tileNodes = this.props.data.map(function(content) {
                var tileNode = ( <div className={ 'col-xs-12 col-md-6 tile ' + 'tile-' + content.id } key={ content.id }> 
                            <Tile
                                showProject={ that.props.showProject }
                                data={ content }
                                id={ content.id }
                                role={ content.project.role }
                                title={ content.project.title }
                                subTitle={ content.project.subTitle }
                            />
                        </div> );

                var tiles = function() {
                    if( that.props.filter == "all" ) {
                        return tileNode;
                    } else {
                        return that.props.filter == content.type ? tileNode : "";
                    }

                }
                return tiles();
            });

        }
        else {
            var tileNodes = "";
        }
        return (
            <div className="tile-list">
                <ReactCSSTransitionGroup 
                    transitionName="tile-transition" 
                    transitionAppear={true} 
                    transitionAppearTimeout={500}
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>
                    { tileNodes }
                </ReactCSSTransitionGroup>
            </div>
        );
    }
});


export default TileList;