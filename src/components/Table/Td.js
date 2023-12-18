import React from "react";
import PropTypes from "prop-types";

Td.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  bgColor: PropTypes.string,
  main: PropTypes.string,
  pad: PropTypes.number,
  children: PropTypes.node,
};

export default function Td({ height, width, bgColor, pad, main, children }) {
  const divStyle = {
    height: height,
    width: width,
    backgroundColor: bgColor,
    padding: pad,
    textAlign: main,
  };

  return <td style={divStyle}>{children}</td>;
}
