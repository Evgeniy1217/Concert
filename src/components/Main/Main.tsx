import React, { useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import { Singers } from '../Singers/Singers';
import { Artist } from '../Artist/Artist';
import { TopTrack } from '../TopTrack/TopTrack';

import { artistSlice } from '../../redux/slices/artistSlice';
import { useAppDispatch, useAppSelector } from '../../hooks';

import {
  StyledMainContainer,
  StyledMainHeaderContainer,
  StyledLinkContainer,
} from './Main.styles';

export const Main = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(artistSlice.actions.getArtistStatistic());
  }, [dispatch]);

  const performer = useAppSelector((state) => state.artist.artist?.data);

  return (
    <>
      <StyledMainHeaderContainer>
        <Link to='/'>
          <StyledLinkContainer>Home</StyledLinkContainer>
        </Link>
        <Link to='toptrack'>
          <StyledLinkContainer>TopTrack</StyledLinkContainer>
        </Link>
        <Link to='artist'>
          <StyledLinkContainer>Artist</StyledLinkContainer>
        </Link>
      </StyledMainHeaderContainer>
      <StyledMainContainer>
        <Routes>
          <Route path='/' element={<Singers performer={performer} />} />
          <Route path='/Artist' element={<Artist performer={performer} />} />
          <Route path='/TopTrack' element={<TopTrack />} />
        </Routes>
      </StyledMainContainer>
    </>
  );
};
