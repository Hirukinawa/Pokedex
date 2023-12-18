import React from "react";
import PropTypes from "prop-types";

Th.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  bgColor: PropTypes.string,
  main: PropTypes.string,
  pad: PropTypes.number,
  children: PropTypes.node,
};

export default function Th({ height, width, bgColor, pad, main, children }) {
  const divStyle = {
    height: height,
    width: width,
    backgroundColor: bgColor,
    padding: pad,
    textAlign: main,
  };

  return <th style={divStyle}>{children}</th>;
}
