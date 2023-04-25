import styled from "styled-components";

export const SquareUI = styled.button`
  color: white;
  border: 1px solid #999;
  float: left;
  font-size: 3em;
  font-weight: bold;
  line-height: 34px;
  height: 4em;
  width: 4em;
  margin-right: 5px;
  margin-top: 5px;
  padding: 0;
  text-align: center;
  background-color: #3a405a;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    border-radius: 18px;
    border: 2px solid #b5ef8a;
    background-color: #7fc29b;
    color: red;
  }

  &:focus {
    outline: none;
  }
`;
