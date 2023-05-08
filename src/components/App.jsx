import React, { Component } from 'react';
import { Navigation } from './Navigation/Navigation';
import { WordsForm } from './WordsForm/WordsForm';
import { WordList } from './WordList/WordList';
import { Filter } from './Filter/FIlter';

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

  addWord = word => {
    this.setState(prevState => {
      return {
        words: [...prevState.words, word],
      };
    });
  };
  deleteWord = id => {
    this.setState(prevState => {
      return {
        words: prevState.words.filter(word => word.id !== id),
      };
    });
  };
  filterWord = event => {
    this.setState({
      filter: event.target.value,
    });
  };
  handleFilterWords = () => {
    return this.state.words.filter(
      word =>
        word.ukWord
          .toLowerCase()
          .includes(this.state.filter.toLowerCase().trim()) ||
        word.enWord
          .toLowerCase()
          .includes(this.state.filter.toLowerCase().trim())
    );
  };

  render() {
    const FilteredWords = this.handleFilterWords();
    return (
      <div>
        <Navigation />
        <WordsForm addWord={this.addWord} />
        <Filter handleChange={this.filterWord} value={this.state.filter} />
        <WordList deleteWord={this.deleteWord} words={FilteredWords} />
      </div>
    );
  }
}
