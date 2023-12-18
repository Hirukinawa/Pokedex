import "./SizedBox.css";
import React from "react";
import PropTypes from "prop-types";

SizedBox.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  bgColor: PropTypes.string,
  radius: PropTypes.number,
  ml: PropTypes.number,
  mr: PropTypes.number,
  mt: PropTypes.number,
  mb: PropTypes.number,
  pl: PropTypes.number,
  pr: PropTypes.number,
  pt: PropTypes.number,
  pb: PropTypes.number,
  pad: PropTypes.number,
  startStart: PropTypes.number,
  startEnd: PropTypes.number,
  endStart: PropTypes.number,
  endEnd: PropTypes.number,
  border: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.node,
};

export default function SizedBox({
  height,
  width,
  bgColor,
  radius,
  pad,
  endEnd,
  endStart,
  startStart,
  startEnd,
  border,
  pl,
  pr,
  pt,
  pb,
  ml,
  mr,
  mt,
  mb,
  color,
  children,
}) {
  const divStyle = {
    height: height,
    width: width,
    backgroundColor: bgColor,
    borderRadius: radius,
    marginLeft: pl,
    marginRight: pr,
    marginTop: pt,
    marginBottom: pb,
    paddingLeft: pl,
    paddingRight: pr,
    paddingTop: pt,
    paddingBottom: pb,
    padding: pad,
    borderStartStartRadius: startStart,
    borderStartEndRadius: startStart,
    borderEndEndRadius: endEnd,
    borderEndStartRadius: endStart,
    color: color,
    border: border,
  };

  return <div style={divStyle}>{children}</div>;
}
