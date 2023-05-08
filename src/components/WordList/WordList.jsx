import React from 'react';
import Checkbox from '@mui/material/Checkbox';

export const WordList = ({ words, deleteWord }) => {
  return (
    <div>
      <ul>
        {words.map((item, index) => {
          return (
            <li key={item.id}>
              <Checkbox />
              <p className="numberWord">{index + 1}</p>
              <p className="ukWord">{item.ukWord}</p>
              <p className="enWord">{item.enWord}</p>
              <button className="delete" onClick={() => deleteWord(item.id)}>
                DELETE
              </button>
              <button className="add">ADD</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
