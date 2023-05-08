import React from 'react';
import Checkbox from '@mui/material/Checkbox';

export const WordList = ({ words }) => {
  return (
    <div>
      <ul>
        {words.map((word, index) => {
          return (
            <li key={'id'}>
              <Checkbox />
              <p className="numberWord">{index + 1}</p>
              <p className="ukWord">{word.ukWord}</p>
              <p className="enWord">{word.enWord}</p>
              <button className="delete">DELETE</button>
              <button className="add">ADD</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
