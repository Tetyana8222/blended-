import styled from '@emotion/styled';

export const WordCard = styled.li`
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding: 10px;
  font-size: 20px;
  list-style: none;
  border: 1px solid #1976d2;
  border-radius: 15px;
  box-shadow: 0px 1px 3px rgba(14, 69, 156, 0.23),
    0px 1px 1px rgba(28, 52, 202, 0.24), 0px 2px 1px rgba(11, 70, 181, 0.5);
  margin-top: 10px;
  transition: 0.3s;
`;
export const BtnList = styled.div`
  display: flex;
  margin-left: 50px;
  gap: 15px;
`;
export const DeleteBtn = styled.button`
  padding: 4px 30px;
  border-radius: 15px;
  border: 1px solid #fff;
  background-color: #1976d2;
  color: #fff;
`;

export const AddBtn = styled.button`
  padding: 4px 45px;
  border-radius: 15px;
  border: 1px solid #fff;
  background-color: #fda729;
  color: #fff;
`;
