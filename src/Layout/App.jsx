/* eslint-disable no-console */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import LandingPage from '../Pages/LandingPage';

function App() {
  return (
    <div className="bg-white">
      <Router>
        <div className="grid grid-cols-12 gap-4 mx-auto container p-4">
          <section className="col-span-12 xl:col-span-3 bg-slate-200/50 h-screen">
            {/* dashboard */}
          </section>
          <section className="col-span-12 xl:col-span-9">
            <AnimatePresence exitBeforeEnter>
              <Routes>
                <Route path="/" element={<LandingPage />} />
              </Routes>
            </AnimatePresence>
          </section>
        </div>
      </Router>
    </div>
  );
}

export default App;
