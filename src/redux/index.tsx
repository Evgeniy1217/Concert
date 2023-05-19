import { configureStore } from '@reduxjs/toolkit';
import { trackSlice } from './slices/trackSlice';
import { artistSlice } from './slices/artistSlice';
import { idSlice } from './slices/idSlice';
import rootSaga from '../sagas';
import createSagaMiddleware from 'redux-saga';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  tracks: trackSlice.reducer,
  artist: artistSlice.reducer,
  id: idSlice.reducer,
});

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});
sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
