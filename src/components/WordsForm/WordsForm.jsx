import React, { Component } from 'react';
import TextField from '@mui/material/TextField';
import { nanoid } from 'nanoid';

export class WordsForm extends Component {
  state = {
    uaWord: '',
    enWord: '',
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  onSubmitForm = e => {
    e.preventDefault();
    const word = {
      id: nanoid(5),
      isChecked: false,
      ...this.state,
    };
    this.props.addWord(word);
    this.setState({
      uaWord: '',
      enWord: '',
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitForm} action="">
          <TextField
            onChange={this.handleChange}
            value={this.state.uaWord}
            name="uaWord"
            id="standard-basic"
            label="Ukrainian"
            variant="standard"
          />
          <TextField
            onChange={this.handleChange}
            value={this.state.enWord}
            name="enWord"
            id="standard-basic"
            label="English"
            variant="standard"
          />
          <button className="submit">ADD WORD</button>
        </form>
      </div>
    );
  }
}
