import React, { useState } from 'react'
import styled from "styled-components";
import Arrow from '../assets/icons/Arrow';
import CartIcon from '../assets/icons/CartIcon';
import Logo from '../assets/icons/Logo';
import UsdIcon from '../assets/icons/UsdIcon';

const Header = () => {

  // for user menu
  const [userDropdown, setUserDropdown] = useState<boolean>(false);

return (
  <Wrapper>
    <LeftSide>
        <Item>WOMEN</Item>
        <Item>MEN</Item>
        <Item>KIDS</Item>
    </LeftSide>
    <LogoWrapper>
      <Logo />
    </LogoWrapper>
    <RightSide>
        <Dollar style={{ cursor: 'pointer' }} onClick={() => setUserDropdown(!userDropdown)}>
          <UsdIconStyle />
          <ArrowStyle style={{ transform: userDropdown ? 'rotate(0deg)' : 'rotate(180deg)' }} />
        </Dollar>
        <CartIconStyle />
    </RightSide>
    {userDropdown === true ? (
        <UserDropdownContent>
            <ul>
                <li>$ USD</li>
                <li>€ EUR</li>
                <li>¥ JPY</li>
            </ul>
        </UserDropdownContent>
    ) : null}
  </Wrapper>
)

};

const Dollar = styled.div`
  font-size: 24px;
  margin-right: 30px;
`;
const Wrapper = styled.div`
  display: flex;
  padding: 20px 100px;
`;
const Item = styled.div`
  font-size: 24px;
  margin-right: 30px;
`;
const LeftSide = styled.div`
  display: flex;
`;
const LogoWrapper = styled.div`
  margin-left: auto;
`;
const RightSide = styled.div`
  margin-right: 0;
  margin-left: auto;
  display: flex;
`;
const CartIconStyle = styled(CartIcon)`
  height: 20px;
  width: 20px;
  margin-top: 5px;
`;
const UsdIconStyle = styled(UsdIcon)`
  width: 12px;
  height: 29px;
`;
const ArrowStyle = styled(Arrow)`
  height: 10px;
  width: 10px;
  margin-left: 6px;
`;
const UserDropdownContent = styled.div`
    position: absolute;
    top: 55px;
    right: 120px;
    text-align: left;
    padding: 4px;
    background-color: white;
    border-radius: 4px;
    box-shadow: 0px 1px 5px -2px rgba(0,0,0,0.41);
    -webkit-box-shadow: 0px 1px 5px -2px rgba(0,0,0,0.41);
    -moz-box-shadow: 0px 1px 5px -2px rgba(0,0,0,0.41);
    z-index: 5;

    /* user dropdown ul */
    ul {
        list-style: none;
        margin-bottom: 10px;
        margin-left: -45px;
        margin-right: -5px;
        margin-top: 15px;
    }

    /* user dropdown li */
    li {
        font-size: 16px;
        padding: 5px 20px 5px 15px;

        cursor: pointer;
        color: grey;
            &:hover {
                background-color: #EEEEEE;
                color: black;
            }
    }
`;
export default Header;
