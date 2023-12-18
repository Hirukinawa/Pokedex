import React from "react";
import PropTypes from "prop-types";
import "./Row.css";

RowReverse.propTypes = {
  children: PropTypes.node,
};

export default function RowReverse({ children }) {
  return <div className="rowReverse">{children}</div>;
}
