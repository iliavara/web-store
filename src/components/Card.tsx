import React, { useState } from 'react'
import styled from "styled-components";
import Arrow from '../assets/icons/Arrow';
import CartIcon from '../assets/icons/CartIcon';
import Logo from '../assets/icons/Logo';
import UsdIcon from '../assets/icons/UsdIcon';

const Card = () => {


return (
  <Wrapper>
    <Icon src="/test-image.png">
    </Icon>
    <Info>
        <Text>Apollo Running Short</Text>
        <Price>$50.00</Price>
    </Info>
  </Wrapper>
)

};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 16px;
    margin-right: 60px;
    width: 386px;
    height: 444px;
    left: calc(50% - 586px/2 - 427px);
    bottom: 738px;
    &:hover{
        box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
    }
`;
const Icon = styled.img`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    margin-right: 60px;
    width: 386px;
    height: 361.38px;
    left: calc(50% - 586px/2 - 427px);
    bottom: 738px;
    cursor: pointer;
`;
const Info = styled.div`
    margin: 20px 0px;
    width: 386px;
    margin-bottom: -10px;
`;
const Text = styled.div`
    margin-bottom: 10px;
    font-weight: 300;
    font-family: Raleway;
    font-size: 18px;
    line-height: 29px;
    letter-spacing: 0px;
    text-align: left;
    color: #1D1F22;
    cursor: pointer;
`;
const Price = styled.div`
    margin-bottom: 10px;

    font-family: Raleway;
    font-size: 18px;
    font-weight: 500;
    line-height: 29px;
    letter-spacing: 0em;
    color: #1D1F22;
    cursor: pointer;
`;

export default Card;
