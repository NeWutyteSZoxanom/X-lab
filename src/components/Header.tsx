import React from "react";
import { useMediaQuery } from "react-responsive";

const Header: React.FC = () => {
  const isMatch = useMediaQuery({ query: "(min-width: 768px)" });
  return (
    <div className="header">
      <div className="header_icon_flex">
        <div className="header_icon">
          <img className="header_icon_img" src="./key2.PNG" />
        </div>
        <div className={isMatch ? "header_title" : "d_none"}> Wrench CRM</div>
      </div>
      <div className="header_icon_flex">
        <div className="header_icon">
          <img className="header_icon_img" src="./peaple2.PNG" />
        </div>
        <div className={isMatch ? "header_title" : "d_none"}>Имя Фамилия</div>
      </div>
    </div>
  );
};

export default Header;
