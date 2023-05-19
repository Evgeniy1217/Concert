import { put, call, takeLatest } from 'redux-saga/effects';

import { getTrackstApi, getArtisttApi } from '../api';
import { trackSlice } from '../redux/slices/trackSlice';
import { artistSlice } from '../redux/slices/artistSlice';
import { IDataApiTrack } from '../types/track';

export function* wathGetTrack() {
  const response: IDataApiTrack = yield call(getTrackstApi);
  yield put(trackSlice.actions.getTracksSuccess(response.data));
}

export function* wathGetArtist() {
  const response: IDataApiTrack = yield call(getArtisttApi);
  yield put(artistSlice.actions.getArtistSuccess(response.data));
}

export function* concertSaga() {
  yield takeLatest(trackSlice.actions.getTracksStatistic, wathGetTrack);
  yield takeLatest(artistSlice.actions.getArtistStatistic, wathGetArtist);
}
