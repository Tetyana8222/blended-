import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-right: auto;
  margin-left: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  padding-top: 40px;
  justify-content: center;
  border: 1px solid #1976d2;
  padding: 10px;
  border-radius: 15px;
  background-color: #6c9ccb;
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  /* justify-content: space-between; */
  margin-bottom: 20px;
`;

export const TextField = styled.input`
  border-radius: 30px;
  border-color: #1976d2;
  padding: 8px;
  padding-left: 20px;
  font-size: 20px;
  cursor: pointer;
  width: 200px;
`;

export const AddWordBtn = styled.button`
  display: flex;
  align-items: center;
  padding: 14px 41px;
  border-radius: 30px;
  background-color: #fda729;
  border-color: #fff;
  justify-content: center;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #fff;
  width: 200px;
  margin-right: auto;
  margin-left: auto;
`;
