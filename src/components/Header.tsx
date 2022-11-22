import React from 'react'
import styled from "styled-components";
import Logo from '../assets/icons/Logo';

const Header = () => {


return (
  <Wrapper>
    <LeftSide>
        <Item>Women</Item>
        <Item>Men</Item>
        <Item>Kids</Item>
    </LeftSide>
    <LogoWrapper>
      <Logo />
    </LogoWrapper>
    <RightSide>
        <Item>Women</Item>
        <Item>Men</Item>
    </RightSide>
  </Wrapper>
)

};


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
  background-color: red;
`;
const RightSide = styled.div`
  margin-right: 0;
  margin-left: auto;
  display: flex;
`;
export default Header;
