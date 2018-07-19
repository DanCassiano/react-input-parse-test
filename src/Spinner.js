import React from "react";
import st from "styled-components";

const Row = st.div`  
  border: 1px solid #ccc;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;  
  height: 32px;
  display: inline-block;  
  vertical-align: middle;
  box-sizing: border-box;
  padding: 0;
`;

const Button = st.a`
  display: inline-block;
  text-decoration: none;  
  border: none;
  height: 30px;
  width: 35px;
  vertical-align: middle;
  box-sizing: border-box;
`;

const Input = st.input`
  display: inline-block;
  width: 40px;
  border: none;
  height: 30px;
  vertical-align: middle;
  box-sizing: border-box;
`;

export default ({ name }) => (
  <Row>
    <Button>-</Button>
    <Input value="100" />
    <Button>+</Button>
  </Row>
);
