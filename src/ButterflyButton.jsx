import React, { Component, PropTypes } from 'react';
import { TYPES, TB, LR, C, WING1NAME, WING2NAME } from './constants';
import { parseWing1Style, parseWing2Style, computedImageStyle, computedButtonStyle, computedBoxStyle } from './styles';
import Style from 'style-it';

const TBLRChecking = type => (props, propName, componentName) => {
  if (props[propName] === undefined && props.type !== C) {
    if (typeof(props[propName]) !== type) {
      return new Error(`TypeError: ${propName} is not defined as type ${type}`);
    }
    return new Error(`${propName} is missing when button type is LR`);
  }
}

export default class StackButton extends Component {

  static propTypes = {

    'size': PropTypes.string,
    'type': PropTypes.oneOf(TYPES),

    'data-image-src': PropTypes.string.isRequired,
    'data-transition': PropTypes.string,

    'data-wing1-icon-class': PropTypes.string.isRequired,
    'data-wing1-onclick': PropTypes.func.isRequired,
    'data-wing1-style': PropTypes.object,

    'data-wing2-icon-class': TBLRChecking('string'),
    'data-wing2-onclick': TBLRChecking('function'),
    'data-wing2-style': PropTypes.object,

  }

  constructor (props) {
    super(props);
    const { size, type, transitionTime } = props;

    // better error handling

    this.state = { boxStyle: computedBoxStyle(type, size, transitionTime) };

    // bind the instance method
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.setVisibility = this.setVisibility.bind(this);

    // TODO ontouch method

  }

  onMouseOver () {
    this.setVisibility(true);
  }

  onMouseLeave () {
    this.setVisibility(false);
  }

  render () {

    const { boxStyle } = this.state;

    let context = undefined;

    const {
      size,
      type,
      'data-transition': transitionTime,
      'data-image-src': imageSrc,
      'data-wing1-icon-class': wing1Icon,
      'data-wing1-onclick': wing1OnClick,
      'data-wing1-style': wing1Style,
      'data-wing2-icon-class': wing2Icon,
      'data-wing2-onclick': wing2OnClick,
      'data-wing2-style': wing2Style,
    } = this.props;

    const wing1Props = {
      name: WING1NAME[type],
      onClick: wing1OnClick,
      style: parseWing1Style(size, type, wing1Style)
    };

    const imageProps = {
      src: imageSrc,
      style: computedImageStyle(size)
    };

    if ([TB, LR].indexOf(type || '') !== -1) {

      const wing2Props = {
        name: WING2NAME[type],
        onClick: wing2OnClick,
        style: parseWing2Style(size, type, wing2Style)
      }

      context = (
        <div name="butterfly-button" style={boxStyle}>
          <div {...wing1Props}>
            <i className={wing1Icon} aria-hidden="true" ></i>
          </div>
          <div {...wing2Props}>
            <i className={wing2Icon} aria-hidden="true" ></i>
          </div>
        </div>
      );

    } else {

      context = (
        <div name="butterfly-button" style={boxStyle}>
          <div {...wing1Props}>
            <i className={wing1Icon} aria-hidden="true" ></i>
          </div>
        </div>
      );

    }

    return (

      <div
        name="trigger"
        onMouseOver={this.onMouseOver}
        onMouseLeave={this.onMouseLeave}
        style={computedButtonStyle(size)} >

        <img {...imageProps} />
        {context}

      </div>
    );

  }

  setVisibility (flag) {
    let { boxStyle } = this.state;
    let updatedBoxStyle = null;
    if (flag) {
      updatedBoxStyle = Object.assign({}, boxStyle, {visibility: 'visible', opacity: 1});
    } else {
      updatedBoxStyle = Object.assign({}, boxStyle, {visibility: 'hidden', opacity: 0});
    }
    this.setState({ boxStyle: updatedBoxStyle });
  }

}
