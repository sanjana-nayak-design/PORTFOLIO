/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Design } from "./pages/Design";
import { Photography } from "./pages/Photography";
import { AIContent } from "./pages/AIContent";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Home />
              </motion.div>
            } />
            <Route path="/design" element={
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Design />
              </motion.div>
            } />
            <Route path="/photography" element={
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Photography />
              </motion.div>
            } />
            <Route path="/ai-content" element={
              <motion.div
                initial={{ opacity: 0, rotate: -1 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 1 }}
                transition={{ duration: 0.3 }}
              >
                <AIContent />
              </motion.div>
            } />
          </Routes>
        </AnimatePresence>
      </Layout>
    </Router>
  );
}
