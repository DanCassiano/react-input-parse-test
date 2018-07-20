import React, { Component, Fragment } from "react";
import { Wrapper, Input, Text, Tag } from "./Utils";
import PropTypes from "prop-types";

class InputURL extends Component {
  static propTypes = {
    tags: PropTypes.array,
    value: PropTypes.string
  };

  static defaultProps = {
    tags: [],
    value: ""
  };

  state = {
    value: this.props.value || "",
    active: false
  };

  onChange = e =>
    this.setState({
      value: e.target.value
    });

  onBlur = () => this.setState({ active: false });

  activeInput = () =>
    this.setState({ active: true }, () => this._input.focus());

  deactiveInput = () => this.setState({ active: false });

  parseTags = () => {
    const { value } = this.state;
    const regex = /\{\{[a-zA-Z]+\}\}/g;

    if (this.props.tags.length === 0) return value;

    const splitStr = value.split(regex);
    const items = value.match(regex);
    const newStr = splitStr.reduce((prev, current, i) => {
      if (!i) {
        return [current];
      }

      const stValue = this.props.tags[items[i - 1]];

      if (!stValue) {
        return prev.concat(current);
      }
      return prev.concat(
        <Tag key={value + current} title={items[i - 1]}>
          {stValue}
        </Tag>,
        current
      );
    }, []);

    return <Fragment>{newStr}</Fragment>;
  };

  checkKeyUp = event => {
    const code = event.keyCode || event.which;
    if (code === 13) {
      this.deactiveInput();
    }
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
            onKeyUp={this.checkKeyUp}
          />
        ) : (
          <Text>{this.parseTags()}</Text>
        )}
      </Wrapper>
    );
  }
}

export default InputURL;
