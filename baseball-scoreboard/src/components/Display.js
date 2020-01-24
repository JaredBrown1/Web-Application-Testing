import React from "react";

import styled from "styled-components";

//styles here
const Scores = styled.div`
  display: flex;
  justify-content: center;
`;

const ScoreNums = styled.h3`
  width: 100px;
`;

const Display = () => {
  return (
    <Scores>
      <ScoreNums>Strike</ScoreNums>
      <ScoreNums>Ball</ScoreNums>
      <ScoreNums>Foul</ScoreNums>
      <ScoreNums>Hit</ScoreNums>
    </Scores>
  );
};

export default Display;
