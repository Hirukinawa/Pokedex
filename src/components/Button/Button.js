import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import "../../App.css";

Button.propTypes = {
  radius: PropTypes.number,
  bgColor: PropTypes.string,
  color: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  padding: PropTypes.string,
  pl: PropTypes.number,
  pr: PropTypes.number,
  pt: PropTypes.number,
  pb: PropTypes.number,
  children: PropTypes.node,
  onClick: PropTypes.func,
  mnW: PropTypes.string,
  mxW: PropTypes.string,
  mnH: PropTypes.string,
  mxH: PropTypes.string,
  border: PropTypes.string,
  type: PropTypes.string,
};

export default function Button(props) {
  const [hover, setHover] = useState(false);

  function setState() {
    setHover(!hover);
  }

  const buttonStyle = {
    borderRadius: props.radius,
    backgroundColor: hover ? "black" : props.bgColor,
    color: props.color,
    width: props.width,
    height: props.height,
    padding: props.padding,
    minWidth: props.mnW,
    maxWidth: props.mxW,
    minHeight: props.mnH,
    maxHeight: props.mxH,
    border: props.border,
    paddingLeft: props.pl > 0 ? props.pl : props.padding,
    paddingRight: props.pr > 0 ? props.pr : props.padding,
    paddingTop: props.pt > 0 ? props.pt : props.padding,
    paddingBottom: props.pb > 0 ? props.pb : props.padding,
    type: props.type,
  };
  return (
    <button
      onMouseEnter={setState}
      onMouseLeave={setState}
      onClick={props.onClick}
      style={buttonStyle}
      type={props.type}
    >
      {props.children}
    </button>
  );
}
