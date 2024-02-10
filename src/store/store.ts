import { configureStore } from '@reduxjs/toolkit';

// import { goodsApi } from './service/goodsService';
// import goodsReducer from './slices/goodsSlice';
// import userReducer from './slices/userSlice';
import modalReducer from './slices/modalSlice';
// import commentsReducer from './slices/commentsSlice';

export const store = configureStore({
  reducer: {
    // [goodsApi.reducerPath]: goodsApi.reducer, - service/
    // goodsReducer: goodsReducer, - slices/
    // userReducer: userReducer,
    modalReducer: modalReducer
    // commentsReducer: commentsReducer,
  }
  // middleware: (getDefaultMiddleware) =>
  // 	getDefaultMiddleware().concat(goodsApi.middleware), - мидлвара для service/
});

export type RootState = ReturnType<typeof store.getState>;
