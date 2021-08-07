import React, { useState } from "react";
import { NavLink, Route } from "react-router-dom";

const Menu: React.FC = () => {
  const [vis, setVis] = useState(false);
  const visible = () => {
    setVis(!vis);
  };
  return (
    <div className="appbar">
      <h3>Меню</h3>

      <NavLink to="/">
        <div className="appbar_div">
          <div className="appbar_icon">
            <img className="header_icon_img" src="home.PNG" alt="" />
          </div>
          <div className="appbar_title">
            <a> Главная</a>
          </div>
        </div>
      </NavLink>
      <NavLink to="/address">
        <div className="appbar_div">
          <div className="appbar_icon">
            <img className="header_icon_img" src="lupa.PNG" alt="" />
          </div>
          <div className="appbar_title">
            <a> Поиск адресов</a>
          </div>
        </div>
      </NavLink>

      <div className="appbar_div">
        <div className="appbar_icon">
          <img className="header_icon_img" src="cube.PNG" alt="" />
        </div>
        <div className="appbar_title">
          <a> Таблицы</a>
        </div>
      </div>
      <div className="appbar_div">
        <div className="appbar_icon">
          <img className="header_icon_img" src="cal.PNG" alt="" />
        </div>
        <div className="appbar_title">
          <a> Календарь</a>
        </div>
      </div>
      <div className="appbar_div">
        <div className="appbar_icon">
          <img className="header_icon_img" src="location.PNG" alt="" />
        </div>
        <div className="appbar_title">
          <a> Карты</a>
        </div>
      </div>
      <div className="appbar_div">
        <div className="appbar_icon">
          <img className="header_icon_img" src="vidget.PNG" alt="" />
        </div>
        <div className="appbar_title">
          <a> Виджеты</a>
        </div>
      </div>
      <div className="appbar_div_df" onClick={visible}>
        <div className="appbar_div_nov">
          <div className="appbar_icon">
            <img className="header_icon_img" src="sett.PNG" alt="" />
          </div>
          <div className="appbar_title">
            <a> Настройки</a>
          </div>{" "}
        </div>
        <div>
          <div className="appbar_icon">
            <img className="header_icon_img_triple" src="triple.PNG" alt="" />
          </div>
        </div>
      </div>
      {vis ? (
        <>
          <div className="appbar_div mar">
            <div className="appbar_icon">
              <img className="header_icon_img" src="peaple3.PNG" alt="" />
            </div>
            <div className="appbar_title">
              <p className="appbar_title_a"> Настройки профиля</p>
            </div>
          </div>
          <div className="appbar_div mar">
            <div className="appbar_icon">
              <img className="header_icon_img" src="finance.PNG" alt="" />
            </div>
            <div className="appbar_title">
              <p className="appbar_title_a"> Управления финансами </p>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}

      <div className="appbar_div">
        <div className="appbar_icon">
          <img className="header_icon_img" src="logout.PNG" alt="" />
        </div>
        <div className="appbar_title">
          <a> Выход</a>
        </div>
      </div>
    </div>
  );
};

export default Menu;
