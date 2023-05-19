import React, { useState, useEffect } from 'react';

import {
  StyledMainTracklistContainer,
  StyledTracklistContainer,
  StyledTracklistTitleContainer,
  StyledTracklistAudioContainer,
} from './TrackList.styles';
import { IId } from '../../types/id';

export const TrackList = ({ id }: IId) => {
  const [track, setTrack] = useState<any>();

  useEffect(() => {
    async function fetchMyAPI() {
      let response: any = await fetch(
        `https://api.deezer.com/artist/${id}/top?limit=50`,
      );
      response = await response.json();
      setTrack(response.data);
    }

    fetchMyAPI();
  }, [id]);

  return (
    <StyledMainTracklistContainer>
      {id === null
        ? undefined
        : track?.map((info: any, index: number) => (
            <StyledTracklistContainer key={index}>
              <StyledTracklistTitleContainer>
                {info.title}
              </StyledTracklistTitleContainer>
              <StyledTracklistAudioContainer
                controls
                src={info?.preview}
              ></StyledTracklistAudioContainer>
            </StyledTracklistContainer>
          ))}
    </StyledMainTracklistContainer>
  );
};
