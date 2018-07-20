import styled from "styled-components";

export const Wrapper = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.54);  
  border-radius: 4px;
`;

export const Input = styled.input`
  border: none;
  background-color: #ccc;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;  
  height: 28px;
  font-size: 14px;
`;

export const Text = styled.p`
  margin: 0;
  border: none;
  background-color: white;
  padding: 5px;  
  box-sizing: border-box;
  height: 28px;    
  font-size: 14px;
  text-align: left;
  vertical-algin: middle;
`;

export const Tag = styled.p`
  background-color: #ddd;
  padding: 3px 10px;
  display: inline-block;
  margin: 0 2px 0px 2px;
  border-radius: 6px;
  cursor: pointer;
`;
