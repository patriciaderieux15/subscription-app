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
              <CardHeader>Test test</CardHeader>
            </Card>
          );
        })}
      </CardsContainer>
    </Container>
  );
};

export default ArticlesPlan;
