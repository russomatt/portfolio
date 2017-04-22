import ReactDOM from 'react-dom';
import React from 'react';
import Project from './Project.js';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

 var Tile = React.createClass({
    onClick: function() {
        this.props.showProject(true, this.props.data);
    },
    render: function() {
        const {
            data,
            id,
            role,
            title,
            subTitle,
            clickFunction
        } = this.props
        return (
            <div>
                <div onClick={ this.onClick } className={ "tile " + "tile-" + id }>
                    <img src={ "../img/tile" + id + ".png" }/>
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