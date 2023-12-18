import React from "react";
import PropTypes from "prop-types";
import "./Column.css";

Column.propTypes = {
  main: PropTypes.string,
  cross: PropTypes.string,
  children: PropTypes.node,
};

export default function Column({ main, cross, children }) {
  const columnStyle = {
    justifyContent: main,
    alignItems: cross,
  };
  return (
    <div style={columnStyle} className="column">
      {children}
    </div>
  );
}
