import React, { Component } from 'react';
// import TextField from '@mui/material/TextField';
import { nanoid } from 'nanoid';
import { Form, Wrap, TextField, AddWordBtn } from './WordsForm.Styled';

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
      <Wrap>
        <Form onSubmit={this.onSubmitForm} action="">
          <Wrap>
            <TextField
              onChange={this.handleChange}
              value={this.state.uaWord}
              name="uaWord"
              id="standard-basic"
              label="Ukrainian"
              variant="standard"
              placeholder="Ukrainian"
            />
            <TextField
              onChange={this.handleChange}
              value={this.state.enWord}
              name="enWord"
              id="standard-basic"
              label="English"
              variant="standard"
              placeholder="Engish"
            />
          </Wrap>
          <AddWordBtn className="submit">ADD WORD</AddWordBtn>
        </Form>
      </Wrap>
    );
  }
}
