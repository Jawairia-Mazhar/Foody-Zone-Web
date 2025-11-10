import SearchResult from "./components/SearchResult/SearchResult.jsx";
import styled from "styled-components";
import { useEffect, useState } from "react";

export const BASE_URL = "http://localhost:9000";

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFoodData = async () => {
      setLoading(true);

    try{  
      const response = await fetch(BASE_URL);

      const json = await response.json();

      setData(json);
      setLoading(false);
    } catch (error) {
      setError("Unable to fetch data");
    }
    };
  fetchFoodData();
}, []);

  console.log(data);

//   const temp = [
//     {
//     name: "Boiled Egg",
//     price: 10,
//     text: "A boiled egg is an egg that has been cooked in its shell in boiling water. Boiled eggs can be cooked to different levels of doneness, from soft-boiled with a runny yolk to hard-boiled with a fully set yolk.",
//     image: "/images/boiled-egg.png",
//     type: "breakfast"
//   },
// ];

  if(error) return <div>{error}</div>;
  if(loading ) return <div>Loading...</div>;

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
        <SearchResult data={data} BASE_URL={BASE_URL} />
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
export const Button = styled.button`
  padding: 6px 12px;
  background: #FF4343;
  border-radius: 5px;
  border: none;
  color: white;
`; 