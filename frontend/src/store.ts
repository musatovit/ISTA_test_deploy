import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import newsSlice from './Components/News/NewsSlice';
import postSlice from './Components/Posts/PostSlice';
import userSlice from './Components/auth/authRegSlice';
import descriptionSlicer from './Components/AboutUs/descriptionSlicer';
import emailsSlice from './Components/CallBackFom/CallbackSlice';

const store = configureStore({
  reducer: {
    posts: postSlice,
    news: newsSlice,
    users: userSlice,
    descriptions: descriptionSlicer,
    emailsForm: emailsSlice,
  },
});
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
