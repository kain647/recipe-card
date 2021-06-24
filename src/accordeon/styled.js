import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;
export const Block = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  p {
    margin-right: 10px;
  }
  svg {
    color: #cf3f3f;
    width: var(--size);
    height: var(--size);
    --size: 20px;
  }
`;
export const BlockControl = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
  user-select: none;
  p {
    margin: 0;
    margin-right: 10px;
  }
`;
export const BlockContent = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Line = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  :last-child {
    margin-bottom: 0;
  }
  p {
    margin: 0;
  }
`;
export const Num = styled.div`
  display: flex;
  width: 20px;
  height: 20px;
  align-items: center;
  justify-content: center;
  background: #8bc34a;
  border-radius: 2px;
  text-align: center;
  color: #fff;
  font-size: 14px;
  margin-right: 10px;
`;
