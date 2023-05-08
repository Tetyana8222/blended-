import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import { WordCard, BtnList, DeleteBtn, AddBtn } from './WordList.styled';

export const WordList = ({ words, deleteWord }) => {
  return (
    <div>
      <ul>
        {words.map((item, index) => {
          return (
            <WordCard key={item.id}>
              <Checkbox />
              <p className="numberWord">{index + 1}</p>
              <p className="ukWord">{item.ukWord}</p>
              <p className="enWord">{item.enWord}</p>
              <BtnList>
                <DeleteBtn
                  className="delete"
                  onClick={() => deleteWord(item.id)}
                >
                  DELETE
                </DeleteBtn>
                <AddBtn className="add">ADD</AddBtn>
              </BtnList>
            </WordCard>
          );
        })}
      </ul>
    </div>
  );
};
