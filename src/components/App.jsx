import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/actions';
import { Route, Routes } from 'react-router-dom';
import { Home } from 'pages/Home';
import { RegisterPage } from 'pages/RegisterPage';
import { LoginPage } from 'pages/LoginPage';
import { ContactsPage } from 'pages/ContactsPage';
import { Layout } from 'layouts/Layout';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'left',
        fontSize: 40,
        color: '#010101',
        flexDirection: 'column',
        marginLeft: '45px',
      }}
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
