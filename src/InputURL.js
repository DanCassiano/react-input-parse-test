import React, { Component, Fragment } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.54);  
  border-radius: 4px;
`;

const Input = styled.input`
  border: none;
  background-color: #ccc;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;  
  height: 28px;
  font-size: 14px;
`;

const Text = styled.p`
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

const Tag = styled.p`
  background-color: #ddd;
  padding: 3px 10px;
  display: inline-block;
  margin: 0 2px 0px 2px;
  border-radius: 6px;
`;

const tags = {
  "{{USER}}": "DanCassiano",
  "{{id}}": 10
};

class InputURL extends Component {
  state = {
    value: "https://github.com/{{USER}}/{{id}}",
    active: false
  };

  onChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  onBlur = () => {
    this.setState({ active: false });
  };

  activeInput = () => {
    this.setState({ active: true }, () => this._input.focus());
  };

  parseTags = () => {
    const { value } = this.state;
    const regex = /\{\{[a-zA-Z]+\}\}/g;
    const splitStr = value.split(regex);
    const items = value.match(regex);
    const newStr = splitStr.reduce((prev, current, i) => {
      if (!i) {
        return [current];
      }

      const stValue = tags[items[i - 1]];
      return prev.concat(<Tag key={value + current}>{stValue}</Tag>, current);
    }, []);
    console.log(value.match(regex));

    return <Fragment>{newStr}</Fragment>;
  };

  render() {
    return (
      <Wrapper onClick={this.activeInput}>
        {this.state.active ? (
          <Input
            innerRef={ref => (this._input = ref)}
            value={this.state.value}
            onChange={this.onChange}
            onBlur={this.onBlur}
          />
        ) : (
          <Text>{this.parseTags()}</Text>
        )}
      </Wrapper>
    );
  }
}

export default InputURL;
