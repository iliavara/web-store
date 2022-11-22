import React from 'react';
import styled from 'styled-components';
import MinusIcon from '../assets/icons/MinusIcon';
import PlusIcon from '../assets/icons/PlusIcon';
import SIcon from '../assets/icons/SIcon';
import XsIcon from '../assets/icons/XsIcon';
import MIcon from '../assets/icons/MIcon';
import LIcon from '../assets/icons/LIcon';
import ViewBagIcon from '../assets/icons/ViewBagIcon';
import CheckoutIcon from '../assets/icons/CheckoutIcon';


const CartQuickMenu = () => {


    return (
        <Card>
            <Title>
            My bag, <span> 3 items</span>
            </Title>

            <Product>
            <LeftSide>
                <CartItem>
                <Name>Apollo Running Short</Name>
                <Price>$50.00</Price>
                <Text>Size:</Text>
                <SizesWrapper>
                    <SizeItem>
                        <XsIcon />
                    </SizeItem>
                    <SizeItem>
                        <SIcon />
                    </SizeItem>
                    <SizeItem>
                        <MIcon />
                    </SizeItem>
                    <SizeItem>
                         <LIcon />
                    </SizeItem>
                </SizesWrapper>
                <Text>Color:</Text>
                <SizesWrapper>
                    <SizeItem>
                        <XsIcon />
                    </SizeItem>
                    <SizeItem>
                        <SIcon />
                    </SizeItem>
                    <SizeItem>
                        <MIcon />
                    </SizeItem>
                </SizesWrapper>
                </CartItem>
            </LeftSide>
            <Middle>
                <PlusIcon />
                <Number>1</Number>
                <MinusIcon />
            </Middle>
            <RightSide>
                <Icon src="/test-image.png" />
            </RightSide>
            </Product>
            <Sum>
                <SumText>
                    Total
                </SumText>
                <SumPrice>
                    $200
                </SumPrice>
            </Sum>
            <ButtonIcons>
                <IconItem>
                <ViewBagIcon />
                </IconItem>
                <IconItem>
                <CheckoutIcon />
                </IconItem>
            </ButtonIcons>
        </Card>
    )
}

//
const Card = styled.div`
    display: block;
`;
const Title = styled.div`
    margin-bottom: 20px;
    font-weight: 700;
    font-size: 16px;
    line-height: 25.6px;
    span{
        font-weight: 500;
    }
`;
const CartItem = styled.div`
    cursor: pointer;
`;
const Product = styled.div`
    display: flex;
    margin-top: 40px;
`;
const LeftSide = styled.div`

`;
const Middle = styled.div`
    margin-right: 10px;
`;
const RightSide = styled.div`
    
`;
const Name = styled.div`
    width: 136px;
    height: 52px;

    font-family: 'Raleway';
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 160%;
    /* or 26px */

    display: flex;
    align-items: center;

    color: #1D1F22;


    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
`;
const Price = styled.div`
    width: 52px;
    height: 26px;

    font-family: 'Raleway';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 160%;
    /* identical to box height, or 26px */

    text-align: right;

    color: #1D1F22;


    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;
`;
const Text = styled.div`
    width: 30px;
    height: 16px;

    margin-top: 10px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    /* identical to box height, or 114% */

    display: flex;
    align-items: center;

    color: #1D1F22;


    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
`;
const SizesWrapper = styled.div`
    display: flex;
    margin-top: 5px;
`;
const SizeItem = styled.div`
    margin-right: 10px;
`;
const Icon = styled.img`
    width: 121px;
    height: 190px;

    /* Inside auto layout */

    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 1;
`;
const Number = styled.div`
    width: 8px;
    height: 138px;
    margin-left: auto;
    margin-right: auto;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 160%;
    /* identical to box height, or 26px */

    text-align: right;

    color: #1D1F22;


    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;

    display: flex;
    justify-content: center;
    align-items: center;
}
`;
const Sum = styled.div`
    display: flex;
    margin-top: 30px;
    margin-bottom: 30px;
`;
const SumText = styled.div`
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;
    color: #1D1F22;
`;
const SumPrice = styled.div`
    margin-right: 0px;
    margin-left: auto;
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;
    color: #1D1F22;
`;
const ButtonIcons = styled.div`
    display: flex;
`;
const IconItem = styled.div`
    margin-right: 10px;
`;
export default CartQuickMenu