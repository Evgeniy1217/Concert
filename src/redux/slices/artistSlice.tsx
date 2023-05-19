import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IArtistState, IDataApiArtist } from '../../types/artist';

const INITIAL_STATE: IArtistState = {
  artist: null,
};

export const artistSlice = createSlice({
  name: 'artist',
  initialState: INITIAL_STATE,
  reducers: {
    getArtistStatistic() {},
    getArtistSuccess(state, action: PayloadAction<IDataApiArtist>) {
      state.artist = action.payload;
    },
    getArtistError(state, action: PayloadAction<string>) {},
  },
});

export default artistSlice.reducer;
