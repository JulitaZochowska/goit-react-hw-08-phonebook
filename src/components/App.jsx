import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/actions';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Home } from 'pages/Home';
import { RegisterPage } from 'pages/RegisterPage';
import { LoginPage } from 'pages/LoginPage';
import { ContactsPage } from 'pages/ContactsPage';
import { Layout } from 'layouts/Layout';
import { useSelector } from 'react-redux';
import { selectLoggedIn } from 'redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const isLogged = useSelector(selectLoggedIn);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/register"
            element={
              // Po rejestracji przechodzimy do strony glownej
              !isLogged ? <RegisterPage /> : <Navigate replace to={'/'} />
            }
          />
          <Route
            path="/login"
            element={
              // Po zalogowaniu przechodzimy do strony glownej
              !isLogged ? <LoginPage /> : <Navigate replace to={'/'} />
            }
          />
          <Route
            path="/contacts"
            element={
              // W przypadku wylogowania podczas pobytu na stronie /contacts, zostaniemy przekierowani do strony Home (route /)
              isLogged ? <ContactsPage /> : <Navigate replace to={'/'} />
            }
          />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
