import styled from "styled-components";

const StyledActiveDiv = styled.div`
  background-color: #000;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  transition: background-color 0.1s ease-in;
`;

const StyledWrapper = styled.button`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 1px solid #000;
  padding: 5px;
  background-color: transparent;
  cursor: pointer;
  transition: background-color 0.1s ease-in;

  &:hover {
    background-color: #f1f1f1;
    
    ${StyledActiveDiv} {
      background-color: #424242;
    }
  }
`;

type SwitcherButtonProps = {
  isActive?: boolean;
  onClick: () => void;
};

export const SwitcherButton = ({ isActive, onClick }: SwitcherButtonProps) => {
  return (
    <StyledWrapper onClick={onClick}>
      { isActive && <StyledActiveDiv /> }
    </StyledWrapper>
  )
}
