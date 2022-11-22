import React from 'react'
import styled from "styled-components";
import Card from '../components/Card';

const Landing = () => {


return (
    <Wrapper>
        <CategoryName>
            WOMEN
        </CategoryName>
        <ProductGrid>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </ProductGrid>

    </Wrapper>
)

};

const Wrapper = styled.div`
  padding: 40px 100px;
`;
const CategoryName = styled.div`
  font-size: 42px;
  line-height: 60px;

`;
const ProductGrid = styled.div`
  width: 100%;
  margin-top: 60px;
  margin-bottom: 80px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
  grid-row-gap: 100px;
  grid-column-gap: 65px;
  
`;

export default Landing;
