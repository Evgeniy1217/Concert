import styled from 'styled-components';

export const StyledMainTracklistContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  margin: 100px 20px 0 0;
  overflow: scroll;
  height: 100vh;
`;

export const StyledTracklistContainer = styled.div`
  display: flex;
  border: 1px solid #c7c7c2;
`;

export const StyledTracklistTitleContainer = styled.p`
  width: 180px;
  height: 50px;
  margin-right: 15px;
`;

export const StyledTracklistAudioContainer = styled.audio`
  width: 200px;
  height: 40px;
  margin: 20px 0 0 5px;
`;
