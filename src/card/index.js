import React, { useState } from "react";
import { Container, CardBox, CardContainer } from "./styled";
import FrontCard from "./front";
import BackCard from "./back";

const Card = () => {
  const [front, isFront] = useState(true);
  return (
    <Container>
      <CardContainer>
        <CardBox front={front}>
          <FrontCard flip={()=>isFront(false)}/>
          <BackCard flip={()=>isFront(true)}/>
        </CardBox>
      </CardContainer>
    </Container>
  );
};

export default Card;
