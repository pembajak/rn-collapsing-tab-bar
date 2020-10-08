const React = require('react');
const ReactNative = require('react-native');
const {
  TouchableNativeFeedback,
  View,
  Platform,
  TouchableWithoutFeedback
} = ReactNative;

const Button = (props) => {

  var TouchComponent = Platform.Version < 21 ?  TouchableWithoutFeedback : TouchableNativeFeedback
  return <TouchComponent
    delayPressIn={0}
    background={TouchableNativeFeedback.SelectableBackground()} // eslint-disable-line new-cap
    {...props}
  >
    {props.children}
  </TouchComponent>;
};

module.exports = Button;
