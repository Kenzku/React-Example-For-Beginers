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
        const shoppingList = ['Splatoon 2', 'GTA 2', 'The Last Of Us, Part 2'];
        const list = shoppingList.map(v => <li>{v}</li>);
        return (
            <div className="list">
                <p>Shopping List for {this.props.name}</p>

                <ul className="listItems" style={styles.ul}>
                    {list}
                </ul>
            </div>
        );
    }
}

ListComponent.defaultProps = {
    name: 'Game'
};

export default ListComponent