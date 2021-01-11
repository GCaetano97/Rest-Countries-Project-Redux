import { SwipeableDrawer } from "@material-ui/core";
import React from "react";
import "./Menu.css";

const Menu = ({ menu, setMenu, children, side }) => {
  return (
    <SwipeableDrawer
      open={menu}
      anchor={side}
      onClose={() => setMenu(false)}
      onOpen={() => setMenu(true)}
      className="menu"
    >
      <div style={{ minWidth: "250px" }}>{children}</div>
    </SwipeableDrawer>
  );
};

export default Menu;
