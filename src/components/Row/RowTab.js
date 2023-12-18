import React from "react";
import PropTypes from "prop-types";
import "./Row.css";

RowTab.propTypes = {
  children: PropTypes.node,
};

export default function RowTab({ children }) {
  return <div className="rowTab">{children}</div>;
}
