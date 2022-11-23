import React from 'react';
import styled from 'styled-components';
import MinusIcon from '../assets/icons/MinusIcon';
import PlusIcon from '../assets/icons/PlusIcon';
import SIcon from '../assets/icons/SIcon';
import XsIcon from '../assets/icons/XsIcon';
import MIcon from '../assets/icons/MIcon';
import LIcon from '../assets/icons/LIcon';
import OrderIcon from '../assets/icons/OrderIcon';


const Cart = () => {


    return (
        <Wrapper>
            <Card>
                <Title>
                    CART
                </Title>
                <HorizontalLine />

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
                <Section>
                <Middle>
                    <PlusIcon />
                    <Number>1</Number>
                    <MinusIcon />
                </Middle>
                <RightSide>
                    <Icon src="/test-image.png" />
                </RightSide>
                </Section>
                </Product>
                <HorizontalLine />

                <Sum>
                    <SumText>
                        Total
                    </SumText>
                    <SumPrice>
                        $200
                    </SumPrice>
                </Sum>
                <Sum>
                    <SumText>
                        Total
                    </SumText>
                    <SumPrice>
                        $200
                    </SumPrice>
                </Sum>
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
                    <OrderIcon />
                    </IconItem>
                </ButtonIcons>
            </Card>
        </Wrapper>
    )
}

//
const Wrapper = styled.div`
  padding: 40px 100px;
`;
const Card = styled.div`
    display: block;
`;
const Title = styled.div`
    font-family: 'Raleway';
    width: 84px;
    height: 40px;
    margin-bottom: 20px;
    font-weight: 700;
    font-size: 32px;
    line-height: 40px;
    color: #1D1F22;
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
const Section = styled.div`
    margin-left: auto;
    margin-right: 0px;
    display: flex;
`;
const Middle = styled.div`
    margin-left: 200px;
    margin-right: 10px;
`;
const RightSide = styled.div`
`;
const Name = styled.div`
    width: 292px;
    height: 27px;

    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 27px;
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
    width: 79px;
    height: 24px;

    margin-top: 30px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 24px;
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

    margin-top: 30px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 18px;
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
    width: 200px;
    height: 288px;

    /* Inside auto layout */

    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 1;
`;
const Number = styled.div`
    width: 8px;
    height: 238px;
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
    margin-bottom: 15px;
`;
const SumText = styled.div`
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;
    color: #1D1F22;
    font-family: 'Raleway';
`;
const SumPrice = styled.div`
    margin-left: 30px;
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;
    color: #1D1F22;
    font-family: 'Raleway';
`;
const ButtonIcons = styled.div`
    display: flex;
`;
const IconItem = styled.div`
    margin-right: 10px;
`;
const HorizontalLine = styled.hr`
    height: 0.5px;
    background: #E5E5E5;
    margin: 20px 0;
    opacity: 0.3;
`;
export default Cart