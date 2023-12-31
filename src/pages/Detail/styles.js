import styled from "styled-components";
import { FadeAnimation } from "../../components/Banner/styles";

const DetailContainer = styled.div`
  width: 100%;
  padding-top: 4.1rem;
  animation: ${FadeAnimation} 0.4s forwards;
`;

const DetailBox = styled.div`
  width: 100%;
  border-radius: 6px;
  max-width: 800px;
  margin: auto;
  margin-top: 5rem;
  border: 1px solid black;
  font-weight: 600;
`;

const DetailTitle = styled.div`
  width: 100%;
  padding: 1rem;
  border-bottom: 1px solid #1d1d1d;
`;

const DetailTime = styled.div`
  width: 100%;
  padding: 1rem;
  border-bottom: 1px solid #1d1d1d;
`;

const DetailContent = styled.div`
  width: 100%;
  padding: 1rem;
  height: 300px;
  font-weight: 500;
`;

const DetailButtonBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
  padding: 1rem;
  border-top: 1px solid #1d1d1d;
`;

const DetailButtons = styled.button.attrs((props) => ({
  type: "button",
}))`
  width: 120px;
  padding: 0.5rem;
  cursor: pointer;
  font-weight: 600;
  border: none;
  font-size: 0.9rem;
  border-radius: 6px;

  &:hover {
    background-color: ${(props) =>
    props.$role === "delete" ? "#fa334d" : "#528eff"};
    color: white;
  }
`;

const EditArea = styled.textarea.attrs((props) => ({
  placeholder: `${props.$curMsg}`,
}))`
  width: 100%;
  height: 100%;
  padding: 0.5rem;
  font-size: 0.9rem;
  color: black;
  background-color: #eee;
`;


export {
  DetailContainer,
  DetailBox,
  DetailTitle,
  DetailTime,
  DetailContent,
  DetailButtonBox,
  DetailButtons,
  EditArea,
}