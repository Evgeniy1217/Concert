import React from 'react';
import { TrackList } from '../TrackList/TrackList';
import { idSlice } from '../../redux/slices/idSlice';
import { useAppDispatch, useAppSelector } from '../../hooks';

import {
  StyledMainArtistContainer,
  StyledArtistContainer,
  StyledBandsContainer,
  StyledNamesArtist,
  StyledPhotosContainer,
  StyledButtonContainer,
} from './Artist.styles';
import { IDataApiArtist, IPerformer } from '../../types/artist';

export const Artist = ({ performer }: IPerformer) => {
  const dispatch = useAppDispatch();

  const idArtist = useAppSelector((state) => state.id.id);

  return (
    <StyledMainArtistContainer>
      {performer?.map((band: IDataApiArtist, index: number) => (
        <StyledArtistContainer key={band.id}>
          <StyledBandsContainer>
            <StyledNamesArtist>{band.name} </StyledNamesArtist>
            <StyledButtonContainer
              onClick={() => dispatch(idSlice.actions.idSuccess(band.id))}
            >
              show playlist
            </StyledButtonContainer>
            <StyledPhotosContainer src={band.picture_xl} />
          </StyledBandsContainer>
        </StyledArtistContainer>
      ))}
      <TrackList id={idArtist} />
    </StyledMainArtistContainer>
  );
};
