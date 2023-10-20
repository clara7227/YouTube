import React, { useState } from "react";
import "react-material-symbols/dist/rounded.css";
import { MaterialSymbol } from "react-material-symbols";

const MoreButtonInterface = ({ title , icon }) => (
  <div className="MoreButtonStyle">
    <h3>{title}</h3>
    <MaterialSymbol icon={icon} size={20} fill grade={-25} />

  </div>
  
);

export default MoreButtonInterface;
