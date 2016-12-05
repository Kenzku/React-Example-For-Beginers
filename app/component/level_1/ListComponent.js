/**
 * Created by huang on 04/12/2016.
 */
import React from 'react';

const styles = {};

styles.ul = {
    'backgroundColor': 'RGBA(0,208,255,0.35)'
};
class ListComponent extends React.Component {
    render() {
        return (
            <div className="list">
                <p>Shopping List for {this.props.name}</p>
                <ul className="listItems" style={styles.ul}>
                    <li>Splatoon</li>
                    <li>GTA</li>
                    <li>The Last of Us</li>
                </ul>
            </div>
        );
    }
}

ListComponent.defaultProps = {
    name: 'Game'
};

export default ListComponent