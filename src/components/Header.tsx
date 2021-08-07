import React from "react";

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="header_icon_flex">
        <div className="header_icon">
          <img className="header_icon_img" src="./key2.PNG" />
        </div>
        <div className="header_title"> Wrench CRM</div>
      </div>
      <div className="header_icon_flex">
        <div className="header_icon">
          <img className="header_icon_img" src="./peaple2.PNG" />
        </div>
        <div className="header_title">Имя Фамилия</div>
      </div>
    </div>
  );
};

export default Header;
