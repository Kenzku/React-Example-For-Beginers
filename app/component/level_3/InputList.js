/**
 * Created by huang on 04/12/2016.
 */
import React from 'react';

class InputList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {listItems} = this.props;
    const list = listItems.map((v, k) => <li key={k}>{v}</li>);
    return (
      <div className="list">
        <p>List of Input</p>

        <ul className="listItems">
          {list}
        </ul>
      </div>
    );
  }
}

InputList.defaultProps = {
  listItems: []
};

export default InputList;