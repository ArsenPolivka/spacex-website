import styled from "styled-components";
import { useRecoilState } from "recoil";
import toast from "react-hot-toast";

import { favoriteToursState } from '../../recoil/atoms';

import { Button } from "./Button";

import HeartIcon from "../icons/HeartIcon";
import DeleteIcon from "../icons/DeleteIcon";

const StyledCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 411px;
  height: 830px;
  border: 1px solid #D3EAFF;
`;

const StyledImage = styled.img`
  width: 100%;
`;

const StyledContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
  flex: 1;
`;

const StyledDescriptionWrapper = styled.div`
  margin-bottom: 64px;
`;

const StyledTitle = styled.h3`
  color: #1E1E1E;
  text-align: center;
  font-size: 24px;
  font-family: 'Syne', sans-serif;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

const StyledDescription = styled.p`
  color: #556B84;
  text-align: center;
  font-size: 24px;
  font-family: 'Lato', sans-serif;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

const StyledButtons = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  margin-top: auto;
`;

type CardProps = {
  rocket?: any;
  img?: string;
  isFavorite?: boolean;
}

export const Card = ({
  rocket,
  img,
  isFavorite,
}: CardProps) => {
  const [favoriteTours, setFavoriteTours] = useRecoilState(favoriteToursState);

  const notifyError = () => toast.error('This tour is already in favorites!', {
    position: 'top-right'
  });
  const notifySuccess = () => toast.success('Tour was added in Favorites successfully!', {
    position: 'top-right'
  });

  const addToFavorites = () => {
    if (favoriteTours.some(favorite => favorite.id === rocket.id)) {
      notifyError();
    } else {
      setFavoriteTours([...favoriteTours, rocket]);
      notifySuccess();
    }
  };

  const removeFromFavorites = () => {
    setFavoriteTours(favoriteTours.filter(favorite => favorite.id !== rocket.id));
  };

  return (
    <StyledCardWrapper>
      <StyledImage src={img} alt="card1"/>
      <StyledContentWrapper>
        <StyledDescriptionWrapper>
          <StyledTitle>{rocket.name}</StyledTitle>

          <StyledDescription>{rocket.description}</StyledDescription>
        </StyledDescriptionWrapper>

        <StyledButtons>
          <Button variant="primary">
            Buy
          </Button>

          <Button
            variant="tertiary"
            icon={ isFavorite ? <DeleteIcon color="black" /> : <HeartIcon color="black" /> }
            onClick={ isFavorite ? removeFromFavorites : addToFavorites }
          />
        </StyledButtons>
      </StyledContentWrapper>
    </StyledCardWrapper>
  )
}
