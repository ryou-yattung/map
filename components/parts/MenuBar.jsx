import {
  faCircleQuestion,
  faMapLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Logo from "../../pages/assets/Logo";

const MenuBar = () => {
  return (
    <div className="w-[90vw] h-[10vh] m-auto flex justify-between items-end pb-[20px]">
      <FontAwesomeIcon icon={faCircleQuestion} size="xl" color="#ED7C0A" />
      <Logo />
      <FontAwesomeIcon icon={faMapLocationDot} size="xl" color="#ED7C0A" />
    </div>
  );
};

export default MenuBar;
