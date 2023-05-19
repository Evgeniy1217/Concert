import React from 'react';
import { IPerformer, IDataApiArtist } from '../../types/artist';

import {
  StyledSingersContainer,
  StyledBandContainer,
  StyledNameContainer,
  StyledPhotoContainer,
} from './Singers.styles';

export const Singers = ({ performer }: IPerformer) => {
  return (
    <StyledSingersContainer>
      {performer?.map((band: IDataApiArtist) => (
        <StyledBandContainer key={band.id}>
          <StyledNameContainer>{band.name}</StyledNameContainer>
          <StyledPhotoContainer src={band.picture_big} />
        </StyledBandContainer>
      ))}
    </StyledSingersContainer>
  );
};
