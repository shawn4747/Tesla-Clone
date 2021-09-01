import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  return (
    <Container>
      <a>
        <img src="/images/logo.svg" />
      </a>
      <Menu>
        <a>Model S</a>
        <a>Model 3</a>
        <a>Model X</a>
        <a>Model Y</a>
      </Menu>
      <RightMenu>
        <a href="#">SHOP</a>
        <a href="#">TESLA ACCOUNT</a>
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)} />
        </CloseWrapper>
        <li>
          <a href="#">EXISTING INVENTORY</a>
        </li>
        <li>
          <a href="#">USED INVENTORY</a>
        </li>
        <li>
          <a href="#">TRADE-IN</a>
        </li>
        <li>
          <a href="#">CYBERTRUCK</a>
        </li>
        <li>
          <a href="#">ROADSTER</a>
        </li>
        <li>
          <a href="#">SEMI</a>
        </li>
        <li>
          <a href="#">CHARGING</a>
        </li>
        <li>
          <a href="#">POWERWALL</a>
        </li>
        <li>
          <a href="#">COMMERCIAL ENERGY</a>
        </li>
        <li>
          <a href="#">UTILITIES</a>
        </li>
        <li>
          <a href="#">TEST DRIVE</a>
        </li>
      </BurgerNav>
      <CustomMenu onClick={() => setBurgerStatus(true)} />
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  a {
    text-transform: uppercase;
    padding: 0 10px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  a {
    text-transform: uppercase;
    margin-right: 10px;
    text-decoration: none;
    color: #313c41;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  background: #fff;
  width: 250px;
  list-style: none;
  padding: 20px;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: 0.2s ease-in;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    a {
      text-decoration: none;
      color: #391c41;
    }
  }
`;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
