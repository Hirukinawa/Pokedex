import React from "react";
import PropTypes from "prop-types";
import "./Row.css";

Row.propTypes = {
  main: PropTypes.string,
  cross: PropTypes.string,
  pl: PropTypes.number,
  pr: PropTypes.number,
  pt: PropTypes.number,
  pb: PropTypes.number,
  pad: PropTypes.number,
  children: PropTypes.node,
};

export default function Row({ main, cross, children, pl, pr, pt, pb, pad }) {
  const rowStyle = {
    justifyContent: main,
    alignItems: cross,
    paddingLeft: pl,
    paddingRight: pr,
    paddingTop: pt,
    paddingBottom: pb,
    padding: pad,
  };
  return (
    <div style={rowStyle} className="row">
      {children}
    </div>
  );
}
