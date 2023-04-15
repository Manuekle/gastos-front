/* eslint-disable no-console */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import LandingPage from '../Pages/LandingPage';
import BudgetPage from '../Pages/BudgetPage';

function App() {
  return (
    <div>
      <Router>
        <AnimatePresence exitBeforeEnter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/budget" element={<BudgetPage />} />
          </Routes>
        </AnimatePresence>
      </Router>
    </div>
  );
}

export default App;
