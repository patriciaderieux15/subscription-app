import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Card } from "react-bootstrap";

const CardsContainer = styled.div`
  display: flex;
  height: 75vh;
  align-items: center;
  justify-content: center;
`;

const CardHeader = styled.div`
  height: 30rem;
  background-color: blue;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PriceCircle = styled.div`
  border: 0.5rem solid white;
  width: 12.5rem;
  height: 12.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0.1rem 0.1rem 1rem rgba(19, 20, 19, 0.342);
`;

const PriceText = styled.p`
  font-size: 3rem;
  color: white;
  text-shadow: 0.1rem 0.1rem 1rem rgba(19, 20, 19, 0.342);
`;

const ArticlesPlan = () => {
  const [prices, setPrices] = useState<any[]>([]);

  useEffect(() => {
    fetchPrices();
  }, []);

  const fetchPrices = async () => {
    const { data: response } = await axios.get(
      "http://localhost:8080/subs/prices"
    );
    setPrices(response.data);
  };
  return (
    <Container>
      <CardsContainer>
        {prices.map((price: any) => {
          return (
            <Card
              style={{ width: "18rem", height: "25rem", marginRight: "2rem" }}
            >
              <CardHeader>
                <PriceCircle>
                  <PriceText>${price.unit_amount / 100}</PriceText>
                </PriceCircle>
              </CardHeader>
            </Card>
          );
        })}
      </CardsContainer>
    </Container>
  );
};

export default ArticlesPlan;
