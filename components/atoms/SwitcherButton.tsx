import styled from "styled-components";

const StyledActiveDiv = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  transition: background-color 0.1s ease-in;
  background-color: ${(props) => (props.color === "black" ? "#000" : "#fff")};
`;

const StyledWrapper = styled.button`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 1px solid ${(props) => (props.color === "black" ? "#000" : "#fff")};
  padding: 5px;
  background-color: transparent;
  cursor: pointer;
  transition: background-color 0.1s ease-in;

  &:hover {
    background-color: ${(props) => (props.color === "black" ? "#000" : "#fff")}
  }
`;

type SwitcherButtonProps = {
  isActive?: boolean;
  onClick: () => void;
  color?: "white" | "black";
};

export const SwitcherButton = ({
  isActive,
  onClick,
  color = "white",
}: SwitcherButtonProps) => {
  return (
    <StyledWrapper onClick={onClick} color={color}>
      { isActive && <StyledActiveDiv color={color} /> }
    </StyledWrapper>
  )
}
