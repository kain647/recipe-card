import React from "react";
import { ImUsers } from "react-icons/im";
import { FiClock } from "react-icons/fi";
import { VscDebugStepBack } from "react-icons/vsc";
import { GoCheck } from "react-icons/go";
import {
  FrontCardContainer,
  Photo,
  Content,
  Header,
  Description,
  Button,
  DescriptionBox,
  DetailsBox,
  Icon,
  Number,
  DetailsContainer,
  IngredientsContainer,
  IngredientsTitle,
  IngredientsList,
  Sum,
  ListIcon,
  IngredientsSubs,
  IngredientsBox,
  Option,
} from "./styled";

const FrontCard = ({flip}) => {
  return (
    <FrontCardContainer>
      <Photo>
        <img src={`images/background.jpg`} />
      </Photo>
      <Content>
        <Header>Pasta with Pesto and Tomatoes</Header>
        <Description>
          <DescriptionBox>
            <p>
              This quick and delicious pasta dish is the perfect way to use up a
              summer bounty of basil and tomatoes!{" "}
            </p>
            <p className="tip">
              Don't have a green thumb? Never fear! You can knock out this
              classic pasta dish in no time with a jar of prepared pesto sauce.{" "}
            </p>
          </DescriptionBox>
          <DetailsContainer>
            <DetailsBox>
              <Icon>
                <ImUsers />
              </Icon>
              <span>Servings</span>
              <Number>4</Number>
            </DetailsBox>
            <DetailsBox>
              <Icon>
                <VscDebugStepBack />
              </Icon>
              <span>Dificult</span>
              <Number>Easy</Number>
            </DetailsBox>
            <DetailsBox>
              <Icon>
                <FiClock />
              </Icon>
              <span>Prep Time</span>
              <Number>5 min</Number>
            </DetailsBox>
            <DetailsBox>
              <Icon>
                <FiClock />
              </Icon>
              <span>Cook Time</span>
              <Number>25 min</Number>
            </DetailsBox>
          </DetailsContainer>
        </Description>
        <IngredientsContainer>
          <IngredientsBox>
            <IngredientsTitle>The Ingredients</IngredientsTitle>
            <IngredientsList>
              <Sum>8 oz.</Sum>
              <ListIcon>
                <GoCheck />
              </ListIcon>
              <IngredientsSubs>spaghetti or linguine pasta</IngredientsSubs>
            </IngredientsList>
            <IngredientsList>
              <Sum>2 cups</Sum>
              <ListIcon>
                <GoCheck />
              </ListIcon>
              <IngredientsSubs>
                fresh basil leaves, <span>plus 4-8 leaves for garnish</span>
              </IngredientsSubs>
            </IngredientsList>
            <IngredientsList>
              <Sum>2</Sum>
              <ListIcon>
                <GoCheck />
              </ListIcon>
              <IngredientsSubs>cloves garlic</IngredientsSubs>
            </IngredientsList>
            <IngredientsList>
              <Sum>8 oz.</Sum>
              <ListIcon>
                <GoCheck />
              </ListIcon>
              <IngredientsSubs>spaghetti or linguine pasta</IngredientsSubs>
            </IngredientsList>
            <IngredientsList>
              <Sum>8 oz.</Sum>
              <ListIcon>
                <GoCheck />
              </ListIcon>
              <IngredientsSubs>spaghetti or linguine pasta</IngredientsSubs>
            </IngredientsList>
            <IngredientsList>
              <Sum>8 oz.</Sum>
              <ListIcon>
                <GoCheck />
              </ListIcon>
              <IngredientsSubs>spaghetti or linguine pasta</IngredientsSubs>
            </IngredientsList>
          </IngredientsBox>
          <Option>
            <p>
              Variation: Got no time, or no fresh basil? Use a 6 ounce jar of
              prepared pesto instead.
            </p>
          </Option>
        </IngredientsContainer>
        <Button onClick={flip}>The Process</Button>
      </Content>
    </FrontCardContainer>
  );
};

export default FrontCard;
