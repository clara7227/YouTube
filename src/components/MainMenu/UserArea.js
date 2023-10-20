import "react-material-symbols/dist/rounded.css";
import { MaterialSymbol } from "react-material-symbols";
import { Tooltip } from "react-tooltip";
import React, { useState } from "react";
import NotificationButton from "./MenuToggle/NotificationButton";



  const UserArea = ({ user }) => (
    <div className="AreaMenu UserArea">
      <a data-tooltip-id="my-tooltip" data-tooltip-content="Crear">
        <a href="#" className="Icon">
          <MaterialSymbol icon="video_call" size={20} fill grade={-25} />
        </a>
      </a>
      <Tooltip id="my-tooltip" />
      <NotificationButton/>

      <a data-tooltip-id="my-tooltip" data-tooltip-content="Área Usuario">
        <a href="#" className="Icon">
          <MaterialSymbol icon="circle" size={20} fill grade={-25} />
        </a>
      </a>
      
     
    </div>
  );


export default UserArea;
