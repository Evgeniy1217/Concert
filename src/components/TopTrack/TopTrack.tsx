import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { IApiTrackArtist, IDataApiTrack } from '../../types/track';

import { trackSlice } from '../../redux/slices/trackSlice';
import { useAppDispatch, useAppSelector } from '../../hooks';

import {
  StyledContainer,
  StyledPhotoContainer,
  StyledPhoto,
  StyledArtist,
  StyledBottomContainer,
  StyledSongContainer,
  StyledTitleContainer,
} from './TopTrack.styles';

export const TopTrack = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(trackSlice.actions.getTracksStatistic());
  }, [dispatch]);

  const song = useAppSelector((state) => state.tracks.track?.data);

  return (
    <StyledContainer>
      {song?.map((infoBox: IApiTrackArtist & IDataApiTrack) => (
        <StyledPhotoContainer key={uuidv4()}>
          <StyledPhoto key={uuidv4()} src={infoBox.artist.picture_medium} />
          <StyledArtist key={uuidv4()}>{infoBox.artist.name}</StyledArtist>
          <StyledBottomContainer>
            <StyledTitleContainer>{infoBox.title}</StyledTitleContainer>
            <StyledSongContainer
              controls
              src={infoBox.preview}
            ></StyledSongContainer>
          </StyledBottomContainer>
        </StyledPhotoContainer>
      ))}
    </StyledContainer>
  );
};
