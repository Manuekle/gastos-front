/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HeaderLanding from '../components/headerLanding';
import InfoLanding from '../components/infoLanding';
import FooterLanding from '../components/footerLanding';

import LoginPage from './auth/loginPage';
import RegisterPage from './auth/registerPage';

function LandingPage() {
  return (
    <div>
      <HeaderLanding />
      <Routes>
        <Route index element={<InfoLanding />} />
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/register" element={<RegisterPage />} />
      </Routes>
      <FooterLanding />
    </div>
  );
}

export default LandingPage;
