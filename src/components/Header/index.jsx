/* eslint-disable prettier/prettier */
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import Logo from "../../assets/logo-devmovies.png";
import { DivHeader, Menu, Li } from "./styles";

function Header() {
  const [changeBackground, setChangeBackground] = useState(false);
  const { pathname } = useLocation();

  window.onscroll = () => {
    if (!changeBackground && window.pageYOffset > 350) {
      setChangeBackground(true);
    }
    if (changeBackground && window.pageYOffset <= 350) {
      setChangeBackground(false);
    }
  };
  return (
    <DivHeader changeBackground={changeBackground}>
      <img src={Logo} alt="logo" />
      <Menu>
        <Li isActive={pathname === "/"}>
          <Link to="/">Home</Link>
        </Li>
        <Li isActive={pathname.includes("filmes")}>
          <Link to="/filmes">Filmes</Link>
        </Li>
        <Li isActive={pathname.includes("series")}>
          <Link to="/series">Séries</Link>
        </Li>
      </Menu>
    </DivHeader>
  );
}

export default Header;
