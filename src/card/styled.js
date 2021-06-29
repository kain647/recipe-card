import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 100vw;
  transition: all 0.75s ease 0s;
  width: 80vw;
  height: 80vh;
`;

export const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  perspective: 100vw;
  background-color: transparent;
  transition: transform 0.5s ease-in-out;
`;

export const CardBox = styled.div`
  position: relative;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  transform: ${({ front }) => {
    //console.log({ front });
    return front ? "rotateY(0deg)" : "rotateY(180deg)";
  }};
`;
export const FrontCardContainer = styled.div`
  position: absolute;
  display: grid;
  grid-template-areas: "photo content";
  grid-template-columns: 20% 1fr;
  width: 100%;
  height: 757px;
  backface-visibility: hidden;
  transition: transform 0.9s ease-in-out;

  background-color: white;
`;
export const BackCardContainer = styled.div`
  position: absolute;
  display: grid;
  grid-template-areas: "photo content";
  grid-template-columns: 20% 1fr;
  width: 100%;
  height: 757px;
  transform: rotateY(180deg);
  backface-visibility: hidden;
  transition: transform 0.9s ease-in-out;
  background-color: white;
`;
export const Photo = styled.div`
  display: flex;
  overflow: hidden;
  grid-area: photo;
  height: 100%;
  margin: 0;
  &.back {
    img {
      margin-left: -80%;
      transform: scale(1);
      height: 100%;
    }
  }
  img {
    margin-left: -100%;
    transform: scale(1.2);
    height: 130%;
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  grid-area: content;
  box-sizing: border-box;
  margin: 0;
  padding: 20px;
  :before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: url(images/pasta.jpg);
    background-size: cover;
    z-index: -1;
    left: 0;
    top: 0;
    opacity: 0.15;
    pointer-events: none;
  }
`;
export const Header = styled.h1`
  display: flex;
  height: 50px;
  font-family: "Neucha", cursive;
`;
export const Description = styled.div`
  display: flex;
`;
export const TitleBack = styled.h2`
  display: flex;
`;
export const Button = styled.div`
  display: flex;
  position: absolute;
  right: 1em;
  bottom: 1em;
  background: #cf3f3f;
  width: 9em;
  cursor: pointer;
  line-height: 1.75em;
  padding: 0.25em 0.5em;
  box-sizing: border-box;
  color: #fff;
  border-radius: 1px;
  backface-visibility: hidden;
  :after {
    content: "\\21BA";
    float: right;
    border-left: 0.125em solid #fff;
    width: 2.05em;
    text-align: center;
    position: absolute;
    right: 0;
    height: 100%;
    margin-top: -0.25em;
    line-height: 2.25em;
  }
`;
export const ButtonBack = styled.div`
  display: flex;
  position: absolute;
  right: 1em;
  bottom: 1em;
  background: #8bc34a;
  z-index: 3;
  width: 9em;
  cursor: pointer;
  line-height: 1.75em;
  padding: 0.25em 0.5em;
  box-sizing: border-box;
  color: #fff;
  border-radius: 1px;
  backface-visibility: hidden;
  :after {
    content: "\\21BA";
    float: right;
    border-left: 0.125em solid #fff;
    width: 2.05em;
    text-align: center;
    position: absolute;
    right: 0;
    height: 100%;
    margin-top: -0.25em;
    line-height: 2.25em;
  }
`;
export const DescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.15em;
  width: calc(100% - 10em);
  float: left;
  margin-right: 1em;
  font-family: "Neucha", cursive;
  p {
    margin: 0.75vh 0;
    font-size: 1.15em;
    text-align: left;
  }
  .tip {
    font-size: 1em;
    color: #999;
    text-align: left;
  }
`;
export const DetailsBox = styled.div`
  display: flex;
  margin-bottom: 0.25em;
  span {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 0.35em;
    background-color: #a5a5a530;
    width: 100px;
    height: 30px;
  }
`;
export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background-color: #e1ba55;
  width: 30px;
  height: 30px;
`;
export const Number = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 0.35em;
  color: #fff;
  width: 60px;
  height: 30px;
  background-color: #e1ba55;
`;
export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const IngredientsContainer = styled.div`
  display: flex;
`;
export const IngredientsTitle = styled.h2`
  display: flex;
`;
export const IngredientsList = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  :last-child {
    margin-bottom: 0;
  }
`;
export const Sum = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #8bc34a;
  width: 80px;
  height: 30px;
  margin-right: 2px;
`;
export const ListIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #a5a5a550;
  color: #fff;
  width: 30px;
  height: 30px;
  svg {
    width: 25px;
    height: 25px;
  }
`;
export const IngredientsSubs = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 5px;
  font-weight: 500;
  background: linear-gradient(90deg, #ffffff80, transparent);
  span {
    font-size: 0.65em;
    margin-left: 5px;
  }
`;
export const IngredientsBox = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Option = styled.div`
  display: flex;
  margin-left: auto;
  width: 190px;
  p {
    float: right;
    color: #999;
  }
`;
export const ProcessList = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;
export const Num = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 25px;
  border-radius: 2px;
  background: #cf3f3f;
  margin-right: 10px;
`;
export const Appetito = styled.div`
  display: flex;
  margin-top: 0.25em;
  font-weight: bold;
  font-size: 1.15em;
  color: #000000;
`;
