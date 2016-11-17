import { TB, LR, C, DEFAULT_SIZE, DEFAULT_TYPE, DEFAULT_TRANSITION_TIME } from './constants';

export function parseWing1Style (size = DEFAULT_SIZE, type = DEFAULT_TYPE, styles = {}) {

  const {
    backgroundColor = 'rgba(255,113,91,0.9)',
    fontSize = '20px',
    color = '#FFF'
  } = styles;

  if (type === LR) {
    return {
      height: size,
      width: '50%',
      float: 'left',
      backgroundColor,
      fontSize,
      color
    };
  }
  if (type === TB) {
    return {
      height: '50%',
      width: '100%',
      float: 'left',
      backgroundColor,
      fontSize,
      color
    };
  }
  if (type === C) {
    return {
      height: size,
      fontSize,
      backgroundColor,
      color
    };
  }
}

export function parseWing2Style (size = DEFAULT_SIZE, type = DEFAULT_TYPE, styles = {}) {

  const {
    backgroundColor = 'rgba(209,209,209,0.9)',
    fontSize = '20px',
    color = '#FFF'
  } = styles;

  if (type === LR) {
    return {
      height: size,
      marginLeft: '50%',
      backgroundColor,
      fontSize,
      color
    };
  }
  if (type === TB) {
    return {
      marginTop: '50%',
      height: '50%',
      width: '100%',
      backgroundColor,
      fontSize,
      color
    };
  }
}

export function computedButtonStyle (size = DEFAULT_SIZE) {
  return {
    width: size,
    height: size,
    position: 'relative',
    display: 'block'
  };
}

export function computedImageStyle (size = DEFAULT_SIZE) {
  return {
    width: size,
    height: 'auto'
  };
}

export function computedBoxStyle (type = DEFAULT_TYPE, size = DEFAULT_SIZE, transitionTime = DEFAULT_TRANSITION_TIME) {
  const cs = size.split(/(px|em|ex|%|in|cm|mm|pt|pc)/);
  const lineHeight = type === TB ? Number(cs[0])/2 + cs[1] : size;
  return {
    width: size,
    height: size,
    borderRadius: '.5em',
    overflow: 'hidden',
    position: 'absolute',
    visibility: 'hidden',
    opacity: 0,
    left: '0px',
    bottom: '0px',
    textAlign: 'center',
    transition: `opacity ${transitionTime} ease`,
    lineHeight
  }
};
