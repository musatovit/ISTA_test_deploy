import React, { useLayoutEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import NavBar from '../Components/NavBar/NavBar';

import PostPage from '../Components/Posts/PostPage';
import NewsPage from '../Components/News/NewsPage';
import MainPage from '../Components/Main/MainPage';
import AdminPage from '../Components/Admin/AdminPage';
import Registration from '../Components/auth/RegistrationForm';
import Authorization from '../Components/auth/AuthForm';

import AboutUs from '../Components/AboutUs/AboutUs';
import { useAppDispatch } from '../store';
import { checkUser } from '../Components/auth/authRegSlice';
import Footer from '../Components/Footer/Footer';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    dispatch(checkUser());
  }, [dispatch]);
  return (
    <div className="w-full">
      <NavBar />
      <Routes>
        <Route path="/cases" element={<PostPage />} />
        <Route index element={<MainPage />} />
        <Route path="/adminPage" element={<AdminPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/admin" element={<Authorization />} />
        <Route path="registration" element={<Registration />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
