import React, { useState } from "react";
import "react-material-symbols/dist/rounded.css";
import { MaterialSymbol } from "react-material-symbols";
import { Tooltip } from "react-tooltip";
import NotificationMenu from "./NotificationMenu";

function NotificationButton() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Tooltip id="my-tooltip" />
      <a data-tooltip-id="my-tooltip" data-tooltip-content="Notificación">
        <a
          href="#"
          className="Icon"
          onClick={toggleMenu}
          id="NotificationButton"
        >
          <MaterialSymbol icon="notifications" size={20} fill grade={-25} />
        </a>
      </a>
      <Tooltip id="my-tooltip" />
      {isOpen ? (
        <div>
          <NotificationMenu />
        </div>
      ) : (
        <div> </div>
      )}
    </div>
  );
}

export default NotificationButton;
