import styled from 'styled-components';

const SearchResult = ({ data, BASE_URL }) => {
  return (
    <FoodCardContainer>
      <FoodCards>
        {data?.map((food) => (
            <FoodCard key={food.name}>
                <div className='food_image'>
                    <img src={`${BASE_URL}${food.image}`} alt={food.name} />
                </div>
                <div className='food_info'>
                    <div className='info'>
                        <h3>{food.name}</h3>
                        <p>{food.text}</p>
                    </div>
                    <Button>${food.price.toFixed(2)}</Button> 
                    {/* needs a definition or import otherwise <button></button> */}
                </div>
            </FoodCard>
        ))}
      </FoodCards>
    </FoodCardContainer>   
    );
};

export default SearchResult;
const FoodCardContainer = styled.section`
  height: calc(100vh - 170px);
  background-image: url("/images/background.png");
  background-size: cover;`;

const FoodCards = styled.div``;
const FoodCard = styled.div`
    width: 340px;
    height: 167px;

    border: 0.66px solid;

    border-image-source: radial-gradient(
    80.69% 208.78% at 108.28% 112.58%,
    #eabfff 0%, 
    rgba(135, 38, 183, 0) 100%
    )
    radial-gradient(
        80.38%, 222.5% at -13.75% -12.36%,
        #98f9ff 0%, 
        rgba(255, 255, 255, 0) 100%
    )


    background: url(.png),
    radial-gradient(
        90.16% 143.01% at 15.32% 21.04%,
        rgba(165, 239, 255, 0.2) 0%, 
        rgba(110, 191, 244, 0.0447917) 77.08%,
        rgba(70, 144, 213, 0) 100%
        );
    background-blend-mode: overlay, normal;
    backdrop-filter: blur(13.1842px);
    border-radius: 20px;
    display: flex;
    padding: 8px;

    .food_info{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: end;

    h3{
        margin-top: 8px;
        font-size: 16px;
        font-weight: 500;
    }
    p{
        margin-top: 4px;
        font-size: 12px;
    }
  }
`;
const Button = styled.button`
  padding: 6px 12px;
  background: #FF4343;
  border-radius: 5px;
  border: none;
  color: white;
  font-size: 12px;
`;