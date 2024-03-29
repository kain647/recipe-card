import React, { useState } from "react";
import { FiPlusSquare, FiMinusSquare } from "react-icons/fi";
import {
  Container,
  Block,
  BlockControl,
  BlockContent,
  Line,
  Num,
} from "./styled";

const Expandable = (props) => {
  const { content, preview, toggle, expanded } = props;
  return (
    <Block>
      <BlockControl onClick={() => toggle(!expanded)}>{preview}</BlockControl>
      {expanded && <BlockContent>{content}</BlockContent>}
    </Block>
  );
};

const Accord = () => {
  const [expanded, toggle] = useState(false);
  const icon = !expanded ? <FiPlusSquare /> : <FiMinusSquare />;
  return (
    <Container>
      <Expandable
        icon={icon}
        toggle={toggle}
        expanded={expanded}
        preview={
          <BlockControl>
            <p>While the pasta cooks, make the pesto.</p>
            {icon}
          </BlockControl>
        }
        content={[
          <Line>
            <Num>2.1</Num>
            <p>Remove stems from basil leaves.</p>
          </Line>,
          <Line>
            <Num>2.2</Num>
            <p>
              Put the basil, garlic, and pine nuts or almonds into the bowl of a
              food processor and pulse it a few times to chop them up.
            </p>
          </Line>,
          <Line>
            <Num>2.3</Num>
            <p>
              Then, turn the food processor on and slowly pour the olive oil
              through the feeder tube to blend with the chopped herbs and nuts.
            </p>
          </Line>,
          <Line>
            <Num>2.4</Num>
            <p>
              Process until all ingredients are fully blended, stopping the food
              processor to scrape down the sides occasionally to get it all
              mixed.
            </p>
          </Line>,
          <Line>
            <Num>2.5</Num>
            <p>
              Turn off the food processor, and add the salt and Parmesean, then
              pulse a few times to blend.
            </p>
          </Line>,
        ]}
      />
    </Container>
  );
};

export default Accord;
