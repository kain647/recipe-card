import React from "react";
import Accord from "../accordeon";
import {
  BackCardContainer,
  Photo,
  TitleBack,
  Content,
  ButtonBack,
  ProcessList,
  Num,
  IngredientsSubs,
  Appetito,
} from "./styled";
const list = [
  {
    number: "1",
    ingredients:
      "Bring 4 quarts of water to a rolling boil in a large pot. Salt the water generously and add the pasta.",
  },
  {
    number: "2",
    ingredients: <Accord />,
  },
  {
    number: "3",
    ingredients: "Heat a large skillet over medium heat.",
  },
  {
    number: "4",
    ingredients: "Add the 1/2 tsp. olive oil to the heated skillet.",
  },
  {
    number: "5",
    ingredients:
      "Add the cherry tomatoes to the skillet and let them blister, stirring occasionally and gently so they don't burst.",
  },
  {
    number: "6",
    ingredients: "Remove tomatoes from the pan and set aside.",
  },
  {
    number: "7",
    ingredients: "Drain the pasta, reserving 1/4 cup of the cooking water.",
  },
  {
    number: "8",
    ingredients: "Return the pasta to the pot",
  },
  {
    number: "9",
    ingredients:
      "Add the reserved cooking water and pesto to the pasta and stir to mix",
  },
  {
    number: "10",
    ingredients: "Plate the pasta and add 6-8 tomatoes to each plate",
  },
  {
    number: "11",
    ingredients:
      "Garnish with reserved basil leaves and Parmesean and serve.",
  },
];

const BackCard = ({ flip }) => {
  return (
    <BackCardContainer>
      <Photo className={"back"}>
        <img src={`images/ingredients.jpg`} />
      </Photo>
      <Content>
        <TitleBack>The Process</TitleBack>
        {list.map((list) => {
          return <List {...list} />;
        })}
        <Appetito>Buon Appetito!</Appetito>
        <ButtonBack onClick={flip}>The Ingredients</ButtonBack>
      </Content>
    </BackCardContainer>
  );
};

const List = (props) => {
  const { number, ingredients } = props;
  return (
    <ProcessList>
      <Num>{number}</Num>
      <IngredientsSubs>{ingredients}</IngredientsSubs>
    </ProcessList>
  );
};

export default BackCard;
