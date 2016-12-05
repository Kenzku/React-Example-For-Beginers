/**
 * Created by huang on 04/12/2016.
 */
import React from 'react';
import InputList from './InputList';

const ENTER_KEY_CODE = 13; // enter-key

class DataComposer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
      listItems: []
    };
    this._onChange = this._onChange.bind(this);
    this._onKeyDown = this._onKeyDown.bind(this);
  }

  _onChange(event) {
    this.setState({data: event.target.value});
    /*set the input box value*/
  }

  _onKeyDown(event) {
    if (event.keyCode === ENTER_KEY_CODE) {
      event.preventDefault();
      const newItem = this.state.data.trim();
      if (newItem) {
        this.setState({listItems: this.state.listItems.concat(newItem), data: ''});
      } else {
        this.setState({data: ''});
      }
    }
  }

  render() {
    return (
      <div>
        <textarea
          name="message"
          value={this.state.data}
          onChange={this._onChange}
          onKeyDown={this._onKeyDown}/>
        <InputList
          listItems={this.state.listItems}/>
      </div>

    );
  }


}


module.exports = DataComposer;
