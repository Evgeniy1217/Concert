import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITrackState, IDataApiTrack } from '../../types/track';

const INITIAL_STATE: ITrackState = {
  track: null,
};

export const trackSlice = createSlice({
  name: 'track',
  initialState: INITIAL_STATE,
  reducers: {
    getTracksStatistic() {},
    getTracksSuccess(state, action: PayloadAction<IDataApiTrack>) {
      state.track = action.payload;
    },
    getTracksError(state, action: PayloadAction<string>) {},
  },
});

export default trackSlice.reducer;
