import React, { Component } from 'react';
import { Navigation } from './Navigation/Navigation';
import { WordsForm } from './WordsForm/WordsForm';
import { WordList } from './WordList/WordList';

export class App extends Component {
  state = {
    words: [
      { id: 1, ukWord: 'Зима', enWord: 'Winter', isChecked: 'false' },
      { id: 2, ukWord: 'Весна', enWord: 'spring', isChecked: 'false' },
      { id: 3, ukWord: 'Літо', enWord: 'Summer', isChecked: 'false' },
      { id: 4, ukWord: 'Осінь', enWord: 'Autumn', isChecked: 'false' },
    ],
    filter: '',
  };
  render() {
    return (
      <div>
        <Navigation />
        <WordsForm />
        <WordList words={this.state.words} />
      </div>
    );
  }
}
