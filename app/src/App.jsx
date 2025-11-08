import styled from "styled-components";
import { useState } from "react";

const BASE_URL = "http://localhost:9000/"

const App = () => {
  const [data, setData] = useState(null);

  const fetchFoodData = async () => {
    const response = await fetch(BASE_URL);

    const json = await response.json();
    setData(json);
    setLoading(false);
  }
  fetchFoodData();

  return( 
  <Container>
    <TopContainer>
      <div className="logo">
        <img src="/images/logo.svg" alt="logo" />
      </div>

      <div className="search">
        <input placeholder="Search Food" />
      </div>

    </TopContainer>

    <FilterContainer>
      <Button>All</Button>
      <Button>Breakfast</Button>
      <Button>Lunch</Button>
      <Button>Dinner</Button>
      
    </FilterContainer>

    <FoodCardContainer>
      <FoodCards></FoodCards>
    </FoodCardContainer>
  </Container>
  );
};

export default App;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  // overflow: hidden;
`;
const TopContainer = styled.section`
  min-height: 140px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;

  .search {
    input {
      background-color: transparent;
      color: white;
      border: 1px solid red;
      border-radius: 5px;
      height: 40px;
      font-size: 16px;
      padding: 0 10px;
    }
  }
`;

const FilterContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 12px;
  padding-bottom: 40px;
`;
const Button = styled.button`
  padding: 6px 12px;
  background: #FF4343;
  border-radius: 5px;
  border: none;
  color: white;
`; 

const FoodCardContainer = styled.section`
  height: calc(100vh - 170px);
  background-image: url("/images/background.png");
  background-size: cover;
`;
const FoodCards = styled.div``;